import { NextRequest, NextResponse } from "next/server";
const requests = new Map<string, { count: number; reset: number }>();
export async function POST(req: NextRequest) {
  const respond = (message: string, status: number) =>
    NextResponse.json({ message }, { status });
  const origin = req.headers.get("origin");
  if (
    origin &&
    origin !== req.nextUrl.origin &&
    origin !== process.env.SITE_URL
  )
    return respond("Request origin not allowed.", 403);
  if (Number(req.headers.get("content-length") || 0) > 12000)
    return respond("Message is too large.", 413);
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const now = Date.now();
  for (const [key, v] of requests) if (v.reset < now) requests.delete(key);
  const record = requests.get(ip) || { count: 0, reset: now + 600000 };
  if (record.count >= 5)
    return respond(
      "Please wait a few minutes, or contact us on WhatsApp.",
      429,
    );
  record.count++;
  requests.set(ip, record);
  let data;
  try {
    const raw = await req.text();
    if (raw.length > 12000) return respond("Message is too large.", 413);
    data = JSON.parse(raw);
  } catch {
    return respond("Invalid message.", 400);
  }
  if (!data || typeof data !== "object")
    return respond("Invalid message.", 400);
  if (data.website) return respond("Thank you for your enquiry.", 200);
  const limits: Record<string, number> = {
    name: 100,
    phone: 30,
    email: 254,
    subject: 150,
    message: 3000,
  };
  for (const [key, max] of Object.entries(limits))
    if (
      typeof data[key] !== "string" ||
      !data[key].trim() ||
      data[key].length > max
    )
      return respond("Please complete all fields with valid details.", 400);
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
    !/^\+?[0-9 ()-]{7,30}$/.test(data.phone) ||
    data.message.trim().length < 10
  )
    return respond("Please check your phone, email and message.", 400);
  const {
    RESEND_API_KEY: key,
    CONTACT_FROM_EMAIL: from,
    CONTACT_TO_EMAIL: to,
  } = process.env;
  if (!key || !from || !to)
    return respond(
      "Email enquiries are not enabled yet. Please use WhatsApp or call 0261939295.",
      503,
    );
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Website enquiry: ${data.subject}`,
        text: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\n${data.message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok)
      return respond(
        "We could not deliver your message. Please contact us on WhatsApp.",
        502,
      );
    return respond(
      "Thank you. Your enquiry has been sent to Wear Mega-E.",
      200,
    );
  } catch {
    return respond(
      "We could not deliver your message. Please contact us on WhatsApp.",
      502,
    );
  }
}

"use client";
import { useState } from "react";
import { whatsapp } from "@/lib/site";
export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        setStatus("");
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const result = await res.json();
          setStatus(result.message);
          if (res.ok) form.reset();
        } catch {
          setStatus(
            "We could not send your message. Please use WhatsApp or call us.",
          );
        } finally {
          setBusy(false);
        }
      }}
    >
      <div className="form-grid">
        <label>
          Your name
          <input name="name" required maxLength={100} autoComplete="name" />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            required
            maxLength={30}
            autoComplete="tel"
          />
        </label>
      </div>
      <label>
        Email address
        <input
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
        />
      </label>
      <label>
        Subject
        <input name="subject" required maxLength={150} />
      </label>
      <label>
        Your message
        <textarea
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={3000}
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave this blank
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="small">
        We use your details to respond to your enquiry. Read our{" "}
        <a href="/privacy-policy">privacy policy</a>.
      </p>
      <button className="button" disabled={busy}>
        {busy ? "Sending…" : "Send enquiry ↗"}
      </button>
      <p role="status" className="form-status">
        {status}
      </p>
      <a className="text-link" href={whatsapp()}>
        Prefer a direct conversation? Chat on WhatsApp ↗
      </a>
    </form>
  );
}

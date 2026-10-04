import { PageIntro } from "@/components/ui";
import { seo } from "@/lib/site";
export const metadata = seo(
  "Privacy Policy",
  "How Wear Mega-E handles website enquiries, contact details and optional analytics.",
  "/privacy-policy",
);
export default function Privacy() {
  return (
    <>
      <PageIntro eyebrow="YOUR INFORMATION" title="Privacy policy." />
      <div className="wrap article-body privacy">
        <p>
          Last updated: 4 October 2026. This policy describes the website’s
          current enquiry features and should be reviewed when new services are
          added.
        </p>
        <h2>Enquiries</h2>
        <p>
          If you submit the contact form, your name, phone, email, subject and
          message are used to respond to your enquiry. When email delivery is
          enabled, messages are sent through Resend to the studio’s configured
          inbox. The site does not store enquiry messages in a database.
        </p>
        <h2>WhatsApp and other services</h2>
        <p>
          WhatsApp links open an external service. You decide whether to send
          the prepared message. That service handles information under its own
          privacy terms. Social links, when configured, also open external
          platforms.
        </p>
        <h2>Technical information</h2>
        <p>
          The hosting provider may process access logs and technical information
          to operate the website. The contact endpoint temporarily uses an IP
          address to limit repeated submissions; these rate limit records expire
          after ten minutes.
        </p>
        <h2>Analytics</h2>
        <p>
          Analytics is disabled unless a genuine measurement ID is configured.
          If enabled, Google Analytics may process page visits and enquiry click
          events. Contact form contents are not included in analytics events.
          Any consent requirements must be reviewed before enabling analytics
          for the target audience.
        </p>
        <h2>Your requests</h2>
        <p>
          Call 0261939295 to ask about your enquiry information, request a
          correction or discuss deletion. Enquiry records should be kept only as
          long as needed for the conversation and applicable business
          requirements.
        </p>
      </div>
    </>
  );
}

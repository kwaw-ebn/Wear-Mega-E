import { PageIntro, Button } from "@/components/ui";
import ContactForm from "@/components/contact-form";
import { Socials } from "@/components/chrome";
import { seo, site, whatsapp } from "@/lib/site";
export const metadata = seo(
  "Contact Wear Mega-E",
  "Visit Wear Mega-E at Nfomaanu Street, Otabiikrom, Agona Swedru. Call 0540688307, email wearmega6@gmail.com or chat on WhatsApp.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="START A CONVERSATION"
        title="Let’s bring your idea to life."
      >
        <p>
          Tell us about your inspiration, occasion or the design that caught
          your eye.
        </p>
      </PageIntro>
      <section className="wrap contact-grid section">
        <div>
          <p className="eyebrow">DIRECT ENQUIRIES</p>
          <h2>
            We’d love to hear
            <br />
            what you have in mind.
          </h2>
          <a className="contact-phone" href={`tel:${site.international}`}>
            {site.phone}
          </a>
          <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          <Button href={whatsapp()}>WhatsApp: 0261939295</Button>
          <div className="contact-details">
            <h3>Visiting & appointments</h3>
            <p>
              Find us on Nfomaanu Street, Otabiikrom, Agona Swedru, Ghana.
              Please call or message to confirm directions and appointment availability.
            </p>
            <h3>What to include in your enquiry</h3>
            <p>Share the design name or reference photo, your occasion date,
            preferred colours and a comfortable budget range. Tell us whether
            you already have fabric and any neckline, sleeve or fit preferences.
            For uniforms, include the approved style requirements before sewing
            is discussed.</p>
            <h3>Before you visit</h3>
            <p>Call 0540688307 or message on WhatsApp to confirm the studio’s
            directions, opening hours and a suitable appointment. Bring your
            inspiration photos and any fabric you would like us to assess.
            For a long gown, the shoes you intend to wear can help with hem
            measurements.</p>
            <h3>Agree on your order</h3>
            <p>Ask about fabric quantity, lining, finishing, fittings and what
            the quote includes. Confirm the collection date and payment
            arrangements directly with the studio. Sending an enquiry starts
            a conversation; your booking and production schedule are confirmed
            separately.</p>
            <h3>Follow the inspiration</h3>
            <Socials />
            <p className="small">Follow Wear Mega-E on social media.</p>
          </div>
        </div>
        <div>
          <h2>Send an enquiry.</h2>
          <p>
            For the quickest conversation, use WhatsApp. Email delivery becomes
            available once the studio configures its inbox.
          </p>
          <ContactForm />
        </div>
      </section>
      <section className="wrap section" aria-labelledby="studio-location-heading">
        <p className="eyebrow">FIND OUR STUDIO</p>
        <h2 id="studio-location-heading">Visit Wear Mega-E in Agona Swedru.</h2>
        <p>Nfomaanu Street, Otabiikrom, Agona Swedru, Central Region, Ghana.</p>
        <div style={{ width: "100%", borderRadius: 12, overflow: "hidden", background: "var(--cream)" }}>
          <iframe
            title="Map of Nfomaanu Street, Otabiikrom, Agona Swedru"
            src="https://www.google.com/maps?q=Nfomaanu%20Street%2C%20Otabiikrom%2C%20Agona%20Swedru%2C%20Ghana&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p style={{ marginTop: 20 }}>
          <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Nfomaanu%20Street%2C%20Otabiikrom%2C%20Agona%20Swedru%2C%20Ghana" target="_blank" rel="noopener noreferrer">
            Open in Google Maps ↗
          </a>
        </p>
        <p className="small">Map search results may be approximate. Contact us to confirm the exact studio entrance before visiting.</p>
      </section>
    </>
  );
}

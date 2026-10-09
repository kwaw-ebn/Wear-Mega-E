import { PageIntro, Button } from "@/components/ui";
import ContactForm from "@/components/contact-form";
import { Socials } from "@/components/chrome";
import { seo, site, whatsapp } from "@/lib/site";
export const metadata = seo(
  "Contact Wear Mega-E",
  "Call 0261939295 or chat with Wear Mega-E on WhatsApp to discuss your next outfit, occasion or custom design.",
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
          <Button href={whatsapp()}>Chat on WhatsApp</Button>
          <div className="contact-details">
            <h3>Visiting & appointments</h3>
            <p>
              Our studio is in Agona Swedru, Ghana. Please call or message for
              the exact directions and to confirm appointment availability.
            </p>
            <h3>What to include in your enquiry</h3>
            <p>Share the design name or reference photo, your occasion date,
            preferred colours and a comfortable budget range. Tell us whether
            you already have fabric and any neckline, sleeve or fit preferences.
            For uniforms, include the approved style requirements before sewing
            is discussed.</p>
            <h3>Before you visit</h3>
            <p>Call 0261939295 or message on WhatsApp to confirm the studio’s
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
    </>
  );
}

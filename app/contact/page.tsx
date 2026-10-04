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
          <Button href={whatsapp()}>Chat on WhatsApp</Button>
          <div className="contact-details">
            <h3>Visiting & appointments</h3>
            <p>
              Please call or message to confirm the studio address and
              appointment availability.
            </p>
            <h3>Follow the inspiration</h3>
            <Socials />
            <p className="small">Social profile links will be added soon.</p>
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

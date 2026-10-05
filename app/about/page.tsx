import Image from "next/image";
import { PageIntro, CTA } from "@/components/ui";
import { seo } from "@/lib/site";
export const metadata = seo(
  "Our Approach",
  "Discover the Wear Mega-E approach: personal expression, thoughtful design and a collaborative journey from idea to outfit.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="MEET WEAR MEGA-E"
        title="Your individuality. Our inspiration."
      >
        <p>
          “You Decide, We Design” is an invitation to bring your ideas into the
          design process.
        </p>
      </PageIntro>
      <section className="wrap story-grid section">
        <Image
          src="/images/embellished-occasion-gown.webp"
          alt="An embellished occasion gown with an elegant fitted silhouette"
          width={519}
          height={978}
        />
        <div>
          <p className="eyebrow">WHO WE ARE</p>
          <h2>
            A conversation
            <br />
            in creativity.
          </h2>
          <p>
            Wear Mega-E is a women’s fashion design brand built around personal
            expression. We invite you to share the silhouettes, colours and
            details that speak to you, then explore how those ideas can come
            together.
          </p>
          <h3>Our design philosophy</h3>
          <p>
            An outfit should reflect the person wearing it. We value a clear
            design conversation, attention to detail and practical choices about
            fabric, comfort and fit.
          </p>
          <h3>Our story</h3>
          <p>
            Wear Mega-E began with its founder’s passion for fashion and a desire
            to turn creative ideas into beautifully made clothing. Her journey
            started with practical training under a traditional seamstress,
            where she learned the foundations of sewing and garment making.
          </p>
          <p>
            After two years of learning the craft, she took the next step in her
            professional development at Takoradi Technical University, where she
            earned a Diploma in Fashion Design. Driven by the same passion, she
            continued her education at the University of Education, Winneba,
            earning her first degree.
          </p>
          <p>
            This journey from hands-on apprenticeship to formal fashion education
            shapes the approach behind Wear Mega-E: a blend of practical
            craftsmanship, creative expression and thoughtful design for women.
            Today, that passion continues through the brand’s promise:
            “You Decide, We Design.”
          </p>
        </div>
      </section>
      <section className="wrap section values-grid">
        {[
          [
            "Our mission",
            "To help people express their individuality through thoughtful fashion design.",
          ],
          [
            "Our vision",
            "To create a welcoming space where personal ideas can become meaningful designs.",
          ],
          [
            "Our values",
            "Creativity, clear communication, attention to detail and respect for individual style.",
          ],
        ].map(([t, d]) => (
          <div key={t}>
            <h2>{t}</h2>
            <p>{d}</p>
          </div>
        ))}
      </section>
      <CTA />
    </>
  );
}

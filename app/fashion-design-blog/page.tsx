import { PageIntro, CTA } from "@/components/ui";
import BlogBrowser from "@/components/blog-browser";
import { seo } from "@/lib/site";
import { posts, gallery } from "@/lib/content";
export const metadata = seo(
  "Fashion Design Blog and Style Guides",
  "Practical advice on custom design consultations, occasion fabrics and clothing care from the Wear Mega-E journal.",
  "/fashion-design-blog",
);
export default function Blog() {
  return (
    <>
      <PageIntro
        eyebrow="THE DESIGN JOURNAL"
        title="Ideas, details & inspiration."
      >
        <p>
          A thoughtful guide to choosing, creating and caring for the outfits
          you love.
        </p>
      </PageIntro>
      <BlogBrowser posts={posts.map(({slug,title,description,category,image}) => ({slug,title,description,category,image,imageAlt: gallery.find(d => d.slug === image)?.images[0].alt || title}))} />
      <section className="wrap section">
        <h2>Plan your next custom outfit with confidence.</h2>
        <p>Our journal answers the practical questions that come before and after
        a sewing appointment. Start with the consultation guide if you are
        preparing your first custom order. Read the fabric guide before buying
        material, and use the clothing-care advice when storing a delicate
        occasion outfit between wears.</p>
        <p>For women choosing a fashion designer in Agona Swedru, the local guide
        explains how to review examples, discuss fittings and clarify a quote.
        Bring your favourite ideas to the studio rather than treating any guide
        as a fixed price, fabric requirement or production schedule.</p>
        <p>Advice on this page is a starting point. Your design, measurements,
        chosen material and occasion determine the details of your order.
        Explore the gallery alongside the journal, then contact Wear Mega-E
        with your questions and event date.</p>
      </section>
      <CTA />
    </>
  );
}

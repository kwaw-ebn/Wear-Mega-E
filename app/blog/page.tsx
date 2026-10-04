import { PageIntro, CTA } from "@/components/ui";
import BlogBrowser from "@/components/blog-browser";
import { seo } from "@/lib/site";
export const metadata = seo(
  "The Design Journal",
  "Practical advice on custom design consultations, occasion fabrics and clothing care from the Wear Mega-E journal.",
  "/blog",
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
      <BlogBrowser />
      <CTA />
    </>
  );
}

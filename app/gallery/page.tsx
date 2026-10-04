import { PageIntro, CTA } from "@/components/ui";
import GalleryBrowser from "@/components/gallery-browser";
import { seo } from "@/lib/site";
export const metadata = seo(
  "The Design Gallery",
  "Explore occasion gowns, statement jumpsuits and expressive fashion inspiration. Find a look you love and enquire on WhatsApp.",
  "/gallery",
);
export default function Gallery() {
  return (
    <>
      <PageIntro
        eyebrow="THE WEAR MEGA-E EDIT"
        title="Designed to be remembered."
      >
        <p>
          Explore the details. Find your inspiration.
          <br />
          Let’s create a look that feels like you.
        </p>
      </PageIntro>
      <GalleryBrowser />
      <CTA />
    </>
  );
}

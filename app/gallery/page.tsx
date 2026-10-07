import { PageIntro, CTA } from "@/components/ui";
import GalleryBrowser from "@/components/gallery-browser";
import { seo } from "@/lib/site";
import { gallery, categories } from "@/lib/content";
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
          Browse women’s outfit inspiration from Wear Mega-E in Agona Swedru:
          traditional looks, occasion gowns, statement jumpsuits and custom designs.
          Open a design to explore its silhouette and discuss a similar outfit.
          Use the category filters to find a starting point for your occasion.
        </p>
      </PageIntro>
      <GalleryBrowser categories={categories} gallery={gallery.map(({slug,title,category,images}) => ({slug,title,category,images}))} />
      <section className="wrap section">
        <h2>Turn inspiration into your own outfit.</h2>
        <p>Look beyond colour when choosing a design. Consider the neckline,
        sleeve shape, skirt length and how freely you need to move. A fitted
        celebration gown and an everyday outfit have different requirements.
        Tell us which details you like and which you would prefer to change.</p>
        <p>Each design page includes an enquiry button that opens WhatsApp with
        the design name already included. Share your occasion date, preferred
        colours, reference photos and budget range. We can then discuss suitable
        fabric, measurements, fitting appointments and an agreed quote.</p>
        <p>Gallery photographs are a starting point for a conversation. Fabric
        availability, finishing and fit must be confirmed for your own order;
        viewing a design does not reserve an outfit or confirm a delivery date.</p>
      </section>
      <CTA />
    </>
  );
}

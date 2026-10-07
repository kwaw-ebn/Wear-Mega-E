import Link from "next/link";
import { notFound } from "next/navigation";
import { gallery } from "@/lib/content";
import { seo, whatsapp, JsonLd, site } from "@/lib/site";
import { Button, DesignCard } from "@/components/ui";
import { DesignViewer, ShareDesign } from "@/components/design-viewer";
export function generateStaticParams() {
  return gallery.map((d) => ({ slug: d.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = gallery.find((d) => d.slug === slug);
  return d
    ? seo(d.title, d.description, `/gallery/${slug}`, d.images[0].src)
    : { title: "Design not found" };
}
export default async function Design({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = gallery.findIndex((d) => d.slug === slug);
  if (index < 0) notFound();
  const d = gallery[index];
  const related = gallery
    .filter((x) => x.slug !== slug)
    .sort(
      (a, b) =>
        Number(b.category === d.category) - Number(a.category === d.category),
    )
    .slice(0, 3);
  const enquiry = whatsapp(
    `Hello Wear Mega-E, I saw the ${d.title} on your website and I would like to enquire about a similar design.`,
  );
  return (
    <>
      <div className="wrap breadcrumbs">
        <Link href="/">Home</Link> / <Link href="/gallery">Gallery</Link> /{" "}
        <span>{d.title}</span>
      </div>
      <section className="wrap design-detail">
        <DesignViewer images={d.images} />
        <div className="design-info">
          <p className="eyebrow">{d.category}</p>
          <h1>{d.title}</h1>
          <p>{d.description}</p>
          <div className="design-note">
            <h2>Make the inspiration yours.</h2>
            <p>
              Love this direction? Share your ideas, preferred colour and
              occasion. We can discuss the details, fabric options, fit and a
              suitable timeline together.
            </p>
          </div>
          <Button href={enquiry}>Enquire About a Similar Design</Button>
          <p className="small">Your message will include this design’s name.</p>
          <ShareDesign title={d.title} />
        </div>
      </section>
      <section className="wrap section article-body">
        {d.details.map(([heading, text]) => (
          <section key={heading}><h2>{heading}</h2><p>{text}</p></section>
        ))}
        <p>Explore <Link className="text-link" href={d.category === "Traditional Wear" ? "/traditional-wear-agona-swedru" : "/custom-dresses-agona-swedru"}>our custom sewing services</Link>,
        read the <Link className="text-link" href="/blog/choosing-fabric-for-special-occasions">fabric selection guide</Link>,
        or <Link className="text-link" href="/contact">contact the studio</Link> to plan your fitting.</p>
      </section>
      <section className="wrap section">
        <div className="project-nav">
          {index > 0 ? (
            <Link href={`/gallery/${gallery[index - 1].slug}`}>
              ← Previous design
            </Link>
          ) : (
            <span />
          )}
          {index < gallery.length - 1 && (
            <Link href={`/gallery/${gallery[index + 1].slug}`}>
              Next design →
            </Link>
          )}
        </div>
        <p className="eyebrow">CONTINUE EXPLORING</p>
        <h2>You may also like.</h2>
        <div className="design-grid">
          {related.map((x) => (
            <DesignCard key={x.slug} design={x} />
          ))}
        </div>
      </section>
      <div className="mobile-design-cta">
        <Button href={enquiry}>Enquire on WhatsApp</Button>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            {
              "@type": "ListItem",
              position: 2,
              name: "Gallery",
              item: site.url + "/gallery",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: d.title,
              item: site.url + "/gallery/" + slug,
            },
          ],
        }}
      />
    </>
  );
}

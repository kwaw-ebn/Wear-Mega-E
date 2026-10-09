import { ArticleText } from "@/components/article-text";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, gallery } from "@/lib/content";
import { seo, JsonLd, site } from "@/lib/site";
import { CTA } from "@/components/ui";
import { ShareDesign } from "@/components/design-viewer";
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = posts.find((p) => p.slug === slug);
  return p
    ? seo(p.seoTitle || p.title, p.description, `/blog/${slug}`, slug === "corporate-wear-for-women-ghana" ? "/images/womens-tailoring-services-agona-swedru.jpg" : slug === "custom-african-print-dresses-agona-swedru" ? "/images/wear-mega-e-blog-illustration-1.webp" : `/images/${p.image}.webp`)
    : { title: "Article not found" };
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = posts.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <article className="article wrap">
        <Link className="text-link" href="/fashion-design-blog">
          ← Back to the journal
        </Link>
        <p className="eyebrow">{p.category}</p>
        <h1>{p.title}</h1>
        <p className="article-lead">{p.description}</p>
        <p className="small">
          {p.author} · <time dateTime={p.date}>{new Date(p.date+'T12:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'})}</time>
        </p>
        <div className="article-image">
          <Image
            src={slug === "corporate-wear-for-women-ghana" ? "/images/womens-tailoring-services-agona-swedru.jpg" : slug === "custom-african-print-dresses-agona-swedru" ? "/images/wear-mega-e-blog-illustration-1.webp" : `/images/${p.image}.webp`}
            alt={slug === "corporate-wear-for-women-ghana" ? "Woman wearing an orange patterned corporate midi dress in a modern office, office fashion inspiration for Wear Mega-E" : slug === "custom-african-print-dresses-agona-swedru" ? "Woman wearing an African print skirt and red cardigan, featured in Wear Mega-E fashion blog" : gallery.find((d) => d.slug === p.image)!.images[0].alt}
            fill
            priority
            sizes="(max-width:900px) 90vw, 850px"
          />
        </div>
        <div className="article-body">
          {p.body.map(([h, t], index) => (
            <section key={h}>
              <h2>{h}</h2>
              <p><ArticleText text={t}/></p>
              {slug === "corporate-wear-for-women-ghana" && [2, 4, 6].includes(index) && (
                <figure style={{ margin: "28px 0 16px" }}>
                  <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", overflow: "hidden", borderRadius: 10 }}>
                    <Image
                      src={index === 2 ? "/images/custom-dress-fitting-agona-swedru.jpg" : index === 4 ? "/images/fashion-design-studio-agona-swedru-wear-mega-e.jpg" : "/images/wear-mega-e-fashion-brand-agona-swedru.jpg"}
                      alt={index === 2 ? "Patterned corporate blazer with black trousers for women's office fashion inspiration" : index === 4 ? "Mint green corporate midi dress with bell sleeves" : "Navy blue corporate skirt suit with contrasting blue collar"}
                      fill
                      sizes="(max-width: 760px) 90vw, 710px"
                      style={{ objectFit: "contain", background: "#f6f2ec" }}
                    />
                  </div>
                  <figcaption style={{ color: "var(--muted)", fontSize: 12, marginTop: 10 }}>Corporate wear style inspiration. Ask Wear Mega-E about a custom interpretation.</figcaption>
                </figure>
              )}
              {slug === "custom-african-print-dresses-agona-swedru" && index < 4 && (
                <figure style={{ margin: "28px 0 8px" }}>
                  <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", overflow: "hidden", background: "var(--cream)" }}>
                    <Image
                      src={["/images/wear-mega-e-blog-illustration-1.webp", "/images/wear-mega-e-blog-illustration-2.webp", "/images/wear-mega-e-blog-illustration-3.webp", "/images/wear-mega-e-blog-illustration-4.webp"][index]}
                      alt={[
                        "African-inspired patterned dress for traditional fashion inspiration in Agona Swedru",
                        "Special occasion women's dress showing fabric and styling details",
                        "Women's custom fashion outfit with statement sleeves for design inspiration",
                        "Tailored occasion gown illustrating silhouette and fitting choices"
                      ][index]}
                      fill
                      sizes="(max-width: 760px) 90vw, 710px"
                      style={{ objectFit: "cover", objectPosition: "center 25%" }}
                    />
                  </div>
                  <figcaption style={{ color: "var(--muted)", fontSize: 12, marginTop: 10 }}>
                    {[
                      "African-inspired dress inspiration from the Wear Mega-E gallery.",
                      "Consider the occasion and fabric when choosing your design.",
                      "Explore sleeves, silhouettes and custom styling possibilities.",
                      "Discuss measurements and fitting details before ordering."
                    ][index]}
                  </figcaption>
                </figure>
              )}
            </section>
          ))}
          <ShareDesign title={p.title} />
          <h2>Keep exploring</h2>
          {posts
            .filter((x) => x.slug !== slug)
            .map((x) => (
              <p key={x.slug}>
                <Link className="text-link" href={`/blog/${x.slug}`}>
                  {x.title} ↗
                </Link>
              </p>
            ))}
        </div>
      </article>
      <CTA />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: p.title,
          description: p.description,
          datePublished: p.date,
          dateModified: p.updated || p.date,
          author: { "@type": "Organization", name: p.author },
          publisher: { "@type": "Organization", name: site.name },
          image: site.url + (slug === "corporate-wear-for-women-ghana" ? "/images/womens-tailoring-services-agona-swedru.jpg" : slug === "custom-african-print-dresses-agona-swedru" ? "/images/wear-mega-e-blog-illustration-1.webp" : "/images/" + p.image + ".webp"),
          mainEntityOfPage: site.url + "/blog/" + slug,
        }}
      />
    </>
  );
}

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
    ? seo(p.seoTitle || p.title, p.description, `/blog/${slug}`, `/images/${p.image}.webp`)
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
            src={`/images/${p.image}.webp`}
            alt={gallery.find((d) => d.slug === p.image)!.images[0].alt}
            fill
            priority
            sizes="(max-width:900px) 90vw, 850px"
          />
        </div>
        <div className="article-body">
          {p.body.map(([h, t]) => (
            <section key={h}>
              <h2>{h}</h2>
              <p><ArticleText text={t}/></p>
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
          image: site.url + "/images/" + p.image + ".webp",
          mainEntityOfPage: site.url + "/blog/" + slug,
        }}
      />
    </>
  );
}

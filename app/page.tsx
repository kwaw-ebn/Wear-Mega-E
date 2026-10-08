import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button, DesignCard, CTA } from "@/components/ui";
import { gallery, services, posts } from "@/lib/content";
import { localServices } from "@/lib/local-services";
import { seo } from "@/lib/site";
export const metadata = seo(
  "Fashion Designer in Agona Swedru",
  "Wear Mega-E creates women’s bespoke outfits, traditional wear, custom dresses and uniforms in Agona Swedru, Ghana. Explore designs and enquire on WhatsApp.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">WOMEN’S FASHION · AGONA SWEDRU</p>
          <h1>
            Fashion designed<br />
            around <em>you.</em>
          </h1>
          <p className="hero-description">
            Your women’s fashion designer in Agona Swedru, Ghana. Bespoke
            outfits, traditional wear, custom dresses and uniforms, shaped
            around your ideas, fit and comfort.
          </p>
          <div className="hero-actions">
            <Button href="/gallery">Explore our designs</Button>
            <Link className="text-link" href="/contact">
              Let’s create together <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="hero-note">
            <span>THE WEAR MEGA-E EDIT</span>
            <span>Made to express you.</span>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src={gallery[0].images[0].src}
            alt={gallery[0].images[0].alt}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <div className="hero-image-label">
            SCULPTED SILHOUETTES <span>01 / THE EDIT</span>
          </div>
        </div>
      </section>
      <div className="marquee">
        <span>YOUR VISION</span>
        <span>✦</span>
        <span>OUR CREATIVITY</span>
        <span>✦</span>
        <span>YOUR INDIVIDUALITY</span>
        <span>✦</span>
        <span>WEAR MEGA-E</span>
      </div>
      <section className="wrap section intro-section">
        <p className="eyebrow">A WARDROBE THAT FEELS LIKE YOU</p>
        <div>
          <h2>
            Your style. Your vision.<br />Our <em>craft.</em>
          </h2>
          <p>
            At Wear Mega-E in Agona Swedru, we create women’s fashion with
            attention to style, fit, comfort and detail. Bring your inspiration
            and let’s discuss the fabric, silhouette and finishing that suit you.
            You Decide, We Design.
          </p>
          <Link className="text-link" href="/about">
            Discover our approach <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE DESIGN GALLERY</p>
            <h2>Looks to fall in love with.</h2>
          </div>
          <Link className="text-link" href="/gallery">
            View the full gallery <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="design-grid">
          {[gallery[0], gallery[2], gallery[5]].map((d) => (
            <DesignCard key={d.slug} design={d} />
          ))}
        </div>
      </section>
      <section className="services-home">
        <div className="wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FROM INSPIRATION TO EXPRESSION</p>
              <h2>Let’s make it personal.</h2>
            </div>
            <Link className="text-link" href="/fashion-design-services">
              Explore services <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="service-grid">
            {services.slice(0, 3).map((s, i) => (
              <Link
                key={s.slug}
                href={`/fashion-design-services#${s.slug}`}
                className="service-card"
              >
                <span className="service-number">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ArrowUpRight size={24} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section process">
        <div>
          <p className="eyebrow">THE JOURNEY</p>
          <h2>
            Your idea.
            <br />
            Our shared process.
          </h2>
          <p>
            A conversation, a considered design and the details that make it
            yours.
          </p>
        </div>
        <ol>
          {[
            "Share your idea",
            "Consultation",
            "Design & measurements",
            "Production",
            "Fitting",
            "Final delivery",
          ].map((s, i) => (
            <li key={s}>
              <span>0{i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE DESIGN JOURNAL</p>
            <h2>A little inspiration.</h2>
          </div>
          <Link className="text-link" href="/fashion-design-blog">
            Read the journal <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="blog-grid">
          {posts.slice(0, 3).map((p) => (
            <Link href={`/blog/${p.slug}`} key={p.slug} className="blog-card">
              <div className="blog-image">
                <Image
                  src={p.slug === "custom-african-print-dresses-agona-swedru" ? "/images/wear-mega-e-custom-african-print-featured_Agona_Swedru.png" : `/images/${p.image}.webp`}
                  alt={gallery.find((d) => d.slug === p.image)?.images[0].alt || p.title}
                  fill
                  sizes="(max-width:700px) 90vw, 30vw"
                />
              </div>
              <p className="eyebrow">{p.category}</p>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <span className="text-link">Read the story ↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="wrap section"><p className="eyebrow">WOMEN’S TAILORING IN AGONA SWEDRU</p><h2>Find your next outfit.</h2><div className="service-grid">{localServices.map(service=><Link className="service-card" key={service.slug} href={`/${service.slug}`}><h3>{service.title}</h3><p>{service.description}</p><span className="text-link">Explore this service ↗</span></Link>)}</div><p style={{marginTop:24}}>Based in Agona Swedru, Ghana. Call <a href="tel:+233261939295">0261939295</a> or <Link href="/contact">contact the studio</Link> to confirm directions and fitting appointments.</p></section>
      <CTA />
    </>
  );
}

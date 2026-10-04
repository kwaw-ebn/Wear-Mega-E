import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button, DesignCard, CTA } from "@/components/ui";
import { gallery, services, posts } from "@/lib/content";
import { seo } from "@/lib/site";
export const metadata = seo(
  "Personal Fashion, Thoughtfully Designed",
  "Discover expressive occasion wear and custom design inspiration. Explore the Wear Mega-E gallery and enquire about a look you love.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">PERSONAL STYLE. THOUGHTFUL DESIGN.</p>
          <h1>
            You decide.
            <br />
            We <em>design.</em>
          </h1>
          <p className="hero-description">
            Your ideas, brought to life through thoughtful design and styles
            created around you.
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
            Fashion begins with
            <br />a little <em>imagination.</em>
          </h2>
          <p>
            We believe a beautiful outfit starts with a conversation. Your
            inspiration, your preferences and your personality guide the design
            journey, from the first idea to the final fitting.
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
            <Link className="text-link" href="/services">
              Explore services <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="service-grid">
            {services.slice(0, 3).map((s, i) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
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
          <Link className="text-link" href="/blog">
            Read the journal <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="blog-grid">
          {posts.map((p) => (
            <Link href={`/blog/${p.slug}`} key={p.slug} className="blog-card">
              <div className="blog-image">
                <Image
                  src={`/images/${p.image}.webp`}
                  alt={gallery.find((d) => d.slug === p.image)!.images[0].alt}
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
      <CTA />
    </>
  );
}

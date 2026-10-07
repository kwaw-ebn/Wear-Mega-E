import Link from "next/link";
import { localServices } from "@/lib/local-services";
import Image from "next/image";
import { PageIntro, Button, CTA } from "@/components/ui";
import { services, gallery } from "@/lib/content";
import { seo, whatsapp, JsonLd, site } from "@/lib/site";
export const metadata = seo(
  "Design Services",
  "Discuss custom fashion, bespoke outfits, alterations and special occasion designs with Wear Mega-E.",
  "/services",
);
export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="LET’S CREATE TOGETHER"
        title="Your style. A thoughtful approach."
      >
        <p>
          From a fresh idea to a special occasion, start with a conversation
          about what you need.
        </p>
      </PageIntro>
      <div className="wrap service-list">
        {services.map((s, i) => (
          <section id={s.slug} key={s.slug} className="service-row">
            <div className="service-photo">
              <Image
                src={gallery[i].images[0].src}
                alt={gallery[i].images[0].alt}
                fill
                sizes="(max-width:700px) 90vw, 32vw"
              />
            </div>
            <div>
              <p className="eyebrow">SERVICE 0{i + 1}</p>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
              <ul>
                {s.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Button
                href={whatsapp(
                  `Hello Wear Mega-E, I found your website and would like to enquire about ${s.title}.`,
                )}
              >
                Discuss this service
              </Button>
              <JsonLd
                data={{
                  "@context": "https://schema.org",
                  "@type": "Service",
                  name: s.title,
                  description: s.description,
                  provider: { "@type": "Organization", name: site.name },
                  url: site.url + "/services#" + s.slug,
                }}
              />
            </div>
          </section>
        ))}
      </div>
      <section className="wrap section"><p className="eyebrow">AGONA SWEDRU, GHANA</p><h2>Explore our women’s fashion services.</h2><div className="service-grid">{localServices.map(s=><Link className="service-card" key={s.slug} href={`/${s.slug}`}><h3>{s.title}</h3><p>{s.description}</p><span className="text-link">Explore service ↗</span></Link>)}</div></section><CTA />
    </>
  );
}

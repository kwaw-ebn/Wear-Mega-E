import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gallery } from "@/lib/content";
import { whatsapp } from "@/lib/site";
export function Button({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`button ${light ? "light" : ""}`} href={href}>
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-intro wrap">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="intro-copy">{children}</div>
    </section>
  );
}
export function DesignCard({ design }: { design: (typeof gallery)[number] }) {
  const im = design.images[0];
  return (
    <Link className="design-card" href={`/gallery/${design.slug}`}>
      <div className="design-image">
        <Image
          src={im.src}
          alt={im.alt}
          width={im.width}
          height={im.height}
          sizes="(max-width: 700px) 92vw, (max-width: 1000px) 45vw, 31vw"
        />
        <span className="view-design">
          View design <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="card-caption">
        <div>
          <span className="eyebrow">{design.category}</span>
          <h3>{design.title}</h3>
        </div>
        <ArrowUpRight size={22} />
      </div>
    </Link>
  );
}
export function CTA() {
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <div>
          <p className="eyebrow">LET’S CREATE SOMETHING PERSONAL</p>
          <h2>Have a design in mind?</h2>
          <p>
            Tell us what you have in mind. Let’s explore the possibilities
            together.
          </p>
        </div>
        <Button
          light
          href={whatsapp(
            "Hello Wear Mega-E, I would like to discuss a custom design. Please let me know how to get started.",
          )}
        >
          Start your custom design
        </Button>
      </div>
    </section>
  );
}

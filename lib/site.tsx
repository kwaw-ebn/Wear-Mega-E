import type { Metadata } from "next";
export const site = {
  name: "Wear Mega-E",
  tagline: "You Decide, We Design",
  phone: "0261939295",
  international: "+233261939295",
  url: (process.env.SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
};
export const socialLinks = {
  facebook: "",
  instagram: "",
  tiktok: "",
  youtube: "",
  linkedin: "",
  pinterest: "",
};
export function whatsapp(
  message = "Hello Wear Mega-E, I found your website and would like to make an enquiry.",
) {
  return `https://wa.me/233261939295?text=${encodeURIComponent(message)}`;
}
export function seo(
  title: string,
  description: string,
  path: string,
  image = "/images/chocolate-sculpted-evening-gown.webp",
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Wear Mega-E`,
      description,
      url: site.url + path,
      images: [image],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}

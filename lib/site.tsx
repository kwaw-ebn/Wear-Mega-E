import type { Metadata } from "next";
export const site = {
  name: "Wear Mega-E",
  tagline: "You Decide, We Design",
  phone: "0261939295",
  international: "+233261939295",
  url: (process.env.SITE_URL || "https://wear-mega-e.onrender.com").replace(/\/$/, ""),
};
export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=100087323353556",
  instagram: "https://www.instagram.com/wearmega_e?obrf=OHY2dmY3dmpna3I0&utm_source=qr",
  tiktok: "https://www.tiktok.com/@wearmegae?_r=1&_t=ZS-9APZHflC6qe",
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

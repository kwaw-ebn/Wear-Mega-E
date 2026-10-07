import type { Metadata } from "next";
import Script from "next/script";
import { Header, Footer, FloatingWhatsApp } from "@/components/chrome";
import { site, JsonLd } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Wear Mega-E | You Decide, We Design",
    template: "%s | Wear Mega-E",
  },
  description:
    "Explore expressive fashion designs and start your personal design conversation with Wear Mega-E.",
  robots: { index: process.env.SITE_NOINDEX !== "true", follow: true },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
  icons: { icon: "/images/wear-mega-e-logo.webp" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            logo: site.url + "/images/wear-mega-e-logo.webp",
            telephone: site.international,
            areaServed: { "@type": "City", name: "Agona Swedru" },
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: site.url,
          }}
        />
        {id && /^G-[A-Z0-9]+$/.test(id) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga"
              strategy="afterInteractive"
            >{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${id}');document.addEventListener('click',function(e){const a=e.target.closest('a');if(a&&a.href.includes('wa.me'))gtag('event','whatsapp_enquiry_click',{page_path:location.pathname});if(a&&a.href.startsWith('tel:'))gtag('event','phone_click',{page_path:location.pathname});});`}</Script>
          </>
        )}
      </body>
    </html>
  );
}

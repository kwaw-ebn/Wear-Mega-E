# Wear Mega-E

A multi-page Next.js fashion website using the supplied logo and six gallery photographs. Chocolate brown and ivory branding, responsive gallery filters, dedicated design pages, image enlargement, design-specific WhatsApp enquiries, services, journal, contact form and SEO routes.

## Run locally

Requires Node 22.16+ and npm.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Production: `npm run build` then `npm start`. Check types with `npm run typecheck`.

## Render staging

Connect this repository to Render and create a Blueprint using `render.yaml`, or create a Node web service with build `npm ci && npm run build`, start `npm start`, and health path `/`. Set `SITE_URL` to the service's actual HTTPS URL. Keep `SITE_NOINDEX=true` for client review. No Render service has been created by this code change.

Set `SITE_URL` at build time because canonical URLs and sitemap pages are generated during the build. After changing the domain, redeploy; no source rewrite is needed. For production, connect the custom domain, confirm content and set `SITE_NOINDEX=false`.

## Content and future CMS

`content/gallery.json`, `content/blog.json`, and `content/services.json` are separate from page components. `lib/content.ts` is the replacement point for a headless CMS provider. This MVP follows the brief's Option B: a CMS-ready content layer, not an authenticated admin dashboard. Editors currently require a GitHub content edit. Replace this adapter with a CMS to allow nontechnical publishing. Gallery images support multiple entries with alt text and dimensions. Category filters live in `lib/content.ts`.

The supplied photographs use neutral descriptive titles. The owner must confirm titles, publication permission, and which photos show the brand's completed work before public launch. Photographs retain their original appearance, including any visible source overlays. Do not present reference imagery as completed work without confirmation.

Service offerings, mission and vision are proposed copy and need owner approval. Address, inbox, opening hours, founder history and customer reviews have not been invented. No fabricated testimonial is published. Add genuine approved reviews later.

## Contact delivery

WhatsApp uses `233261939295`; phone uses `+233261939295`.

For form delivery, set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (a verified sender), and `CONTACT_TO_EMAIL` server-side. Until configured, the form honestly reports that email is unavailable and offers WhatsApp. Never put API keys in public variables or GitHub. The endpoint validates fields, checks origin, limits payload size, includes a honeypot and temporarily limits submissions per IP. In-memory rate limiting is suitable for the initial single instance only; use Redis/shared rate limiting before scaling or a public campaign, and verify the hosting proxy's forwarded-IP behaviour. Add durable delivery monitoring before relying on the form for important enquiries.

## Social links, analytics and SEO

Add real social URLs in `lib/site.tsx`; unconfigured icons are noninteractive and marked as pending. Optional `NEXT_PUBLIC_GA_ID` and `GOOGLE_SITE_VERIFICATION` have no fake IDs. Review privacy and consent requirements before enabling GA. Analytics records WhatsApp and phone clicks, never message fields. Add form success and detailed service/gallery conversion instrumentation as needed.

Each main route and detail page has unique metadata. Sitemap: `/sitemap.xml`. Crawler rules: `/robots.txt`. Structured data includes Organization, WebSite, Service, BlogPosting and gallery breadcrumbs. LocalBusiness/reviews schema is intentionally deferred until verified details are available. Fonts use Google Fonts with system fallbacks; self-host approved font files for predictable offline loading and tighter privacy control.

## Launch checklist

- Confirm image rights, ownership descriptions, gallery titles and service offerings.
- Supply genuine address, inbox, hours and social profiles.
- Configure and test mail delivery if required.
- Review privacy text for actual operation and audience.
- Connect the custom domain, set SITE_URL, redeploy and enable indexing.
- Verify Google Search Console and submit sitemap.
- Run mobile/browser and Lighthouse checks on the actual hosted environment. No Lighthouse score is claimed by this repository.

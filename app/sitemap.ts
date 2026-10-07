import { localServices } from "@/lib/local-services";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { gallery, posts } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/services",
    "/gallery",
    "/blog",
    "/contact",
    "/privacy-policy",
    ...localServices.map(s=>'/'+s.slug),
    ...gallery.map((d) => "/gallery/" + d.slug),
    ...posts.map((p) => "/blog/" + p.slug),
  ].map((path) => ({
    url: site.url + path,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}

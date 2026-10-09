"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
type PostSummary = { slug: string; title: string; description: string; category: string; image: string; imageAlt: string };
export default function BlogBrowser({ posts }: { posts: PostSummary[] }) {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const items = posts.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (p.title + " " + p.description).toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <section className="wrap section">
      <div className="blog-tools">
        <label>
          Search the journal
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Fabric, fitting, inspiration…"
          />
        </label>
        <label>
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {["All", ...new Set(posts.map((p) => p.category))].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="blog-grid">
        {items.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
            <div className="blog-image">
              <Image
                src={p.slug === "custom-african-print-dresses-agona-swedru" ? "/images/wear-mega-e-blog-illustration-1.webp" : `/images/${p.image}.webp`}
                alt={p.imageAlt}
                fill
                sizes="(max-width:700px) 90vw, 30vw"
              />
            </div>
            <p className="eyebrow">{p.category}</p>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <span className="text-link">Read the story ↗</span>
          </Link>
        ))}
      </div>
      {!items.length && (
        <p role="status">No articles match. Try another search.</p>
      )}
    </section>
  );
}

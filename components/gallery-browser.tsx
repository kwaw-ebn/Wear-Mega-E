"use client";
import { useState } from "react";
import { categories, gallery } from "@/lib/content";
import { DesignCard } from "./ui";
export default function GalleryBrowser() {
  const [category, setCategory] = useState("All");
  const items = gallery.filter(
    (d) => category === "All" || d.category === category,
  );
  return (
    <div className="wrap gallery-browser">
      <div className="filters" aria-label="Filter designs">
        {categories.map((c) => (
          <button
            key={c}
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="results" aria-live="polite">
        {items.length} {items.length === 1 ? "design" : "designs"}
      </p>
      <div className="design-grid">
        {items.map((d) => (
          <DesignCard key={d.slug} design={d} />
        ))}
      </div>
      {!items.length && (
        <div className="empty-state">
          <h2>More inspiration to come.</h2>
          <p>
            We haven’t added designs in this category yet. Explore all designs
            or tell us what you have in mind.
          </p>
          <button onClick={() => setCategory("All")}>
            Explore all designs
          </button>
        </div>
      )}
    </div>
  );
}

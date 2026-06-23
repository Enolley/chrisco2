"use client";

import { useEffect, useState } from "react";

type Category = "classes" | "facilities" | "sports" | "arts" | "events";

interface GalleryPhoto {
  cat: Category;
  title: string;
  emoji: string;
  bg: string;
}

const CATEGORY_LABELS: Record<Category, string> = {
  classes: "Classes & Learning",
  facilities: "Our Campus",
  sports: "Sports",
  arts: "Arts & Music",
  events: "Events",
};

const CATEGORY_BADGES: Record<Category, string> = {
  classes: "Classes",
  facilities: "Campus",
  sports: "Sports",
  arts: "Arts",
  events: "Events",
};

const PHOTOS: GalleryPhoto[] = [
  { cat: "classes", title: "Science Lesson — Grade 6", emoji: "🔬", bg: "var(--sky)" },
  { cat: "classes", title: "Mathematics Workshop — Grade 4", emoji: "📐", bg: "var(--coral)" },
  { cat: "classes", title: "Play Group Story Time", emoji: "📖", bg: "var(--sun)" },
  { cat: "classes", title: "Junior Secondary CBC Project", emoji: "🌱", bg: "var(--grass)" },

  { cat: "facilities", title: "Science Laboratory", emoji: "⚗️", bg: "var(--plum)" },
  { cat: "facilities", title: "Computer Laboratory", emoji: "💻", bg: "var(--sky-dark)" },
  { cat: "facilities", title: "School Library", emoji: "📚", bg: "var(--sun-dark)" },
  { cat: "facilities", title: "School Dining Hall", emoji: "🍽️", bg: "var(--grass-dark)" },

  { cat: "sports", title: "Boys' Football Training", emoji: "⚽", bg: "var(--grass)" },
  { cat: "sports", title: "Athletics Day 2026", emoji: "🏃", bg: "var(--coral)" },
  { cat: "sports", title: "Netball Tournament", emoji: "🏐", bg: "var(--sky)" },
  { cat: "sports", title: "Zonal Finals 2026", emoji: "🏅", bg: "var(--sun)" },

  { cat: "arts", title: "School Choir Performance", emoji: "🎵", bg: "var(--coral)" },
  { cat: "arts", title: "Annual Art Exhibition", emoji: "🎨", bg: "var(--plum)" },
  { cat: "arts", title: "Music Festival Rehearsal", emoji: "🎹", bg: "var(--sky-dark)" },

  { cat: "events", title: "Graduation Ceremony 2026", emoji: "🎓", bg: "var(--sun)" },
  { cat: "events", title: "Sports Day 2026", emoji: "🏆", bg: "var(--grass-dark)" },
  { cat: "events", title: "Open Day — Family Visit", emoji: "👨‍👩‍👧", bg: "var(--sky)" },
  { cat: "events", title: "Cultural Day Celebration", emoji: "🎉", bg: "var(--coral-dark)" },
];

const FILTERS: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "All Photos" },
  { key: "classes", label: "Classes & Learning" },
  { key: "facilities", label: "Our Campus" },
  { key: "sports", label: "Sports" },
  { key: "arts", label: "Arts & Music" },
  { key: "events", label: "Events" },
];

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<"all" | Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visiblePhotos =
    activeFilter === "all" ? PHOTOS : PHOTOS.filter((p) => p.cat === activeFilter);

  const closeLightbox = () => setLightboxIndex(null);
  const changeLightbox = (dir: number) => {
    if (lightboxIndex === null) return;
    const len = visiblePhotos.length;
    setLightboxIndex((lightboxIndex + dir + len) % len);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") changeLightbox(-1);
      if (e.key === "ArrowRight") changeLightbox(1);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex]);

  const current = lightboxIndex !== null ? visiblePhotos[lightboxIndex] : null;

  return (
    <>
      <div className="filter-tabs reveal">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-tab ${activeFilter === f.key ? "active" : ""}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {visiblePhotos.map((photo, i) => (
          <div
            key={`${photo.cat}-${photo.title}`}
            className="gallery-item"
            onClick={() => setLightboxIndex(i)}
          >
            <div className="gallery-inner" style={{ background: photo.bg }}>
              {photo.emoji}
            </div>
            <div className="gallery-cat-badge">{CATEGORY_BADGES[photo.cat]}</div>
            <div className="gallery-overlay">
              <div className="g-cat">{CATEGORY_LABELS[photo.cat]}</div>
              <div className="g-title">{photo.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`lightbox ${current ? "open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLightbox();
        }}
      >
        {current && (
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              ✕
            </button>
            <div className="lightbox-box">{current.emoji}</div>
            <div className="lightbox-cat">{CATEGORY_LABELS[current.cat]}</div>
            <div className="lightbox-caption">{current.title}</div>
            <div className="lightbox-nav">
              <button onClick={() => changeLightbox(-1)}>← Previous</button>
              <button onClick={() => changeLightbox(1)}>Next →</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

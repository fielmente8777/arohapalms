"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const INITIAL = 8;

const VillaGallery: React.FC<{ images: string[]; title: string }> = ({
  images,
  title,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  const visible = showAll ? images : images.slice(0, INITIAL);

  const step = useCallback(
    (dir: number) =>
      setActive((i) =>
        i === null ? i : (i + dir + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, step]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 auto-rows-[150px] lg:auto-rows-[220px]">
        {visible.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className={`relative overflow-hidden rounded-xl cursor-zoom-in group ${
              i % 7 === 0 ? "col-span-2 lg:row-span-2" : ""
            }`}
            aria-label={`Open ${title} photo ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${title} photo ${i + 1}`}
              fill
              sizes={
                i % 7 === 0
                  ? "(max-width:1024px) 100vw, 50vw"
                  : "(max-width:1024px) 50vw, 25vw"
              }
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {images.length > INITIAL && (
        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            className="border border-primary text-primary uppercase tracking-widest text-sm px-6 py-3 rounded-sm hover:bg-primary hover:text-white transition-colors"
          >
            {showAll ? "Show fewer photos" : `View all ${images.length} photos`}
          </button>
        </div>
      )}

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-[92vw] h-[82vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active]}
              alt={`${title} photo ${active + 1}`}
              fill
              sizes="92vw"
              className="object-contain"
              priority
            />
          </div>
          <button
            type="button"
            className="absolute top-3 right-4 text-white text-4xl"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ×
          </button>
          <button
            type="button"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-5xl px-3"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-5xl px-3"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
          >
            ›
          </button>
          <p className="absolute bottom-4 text-white/80 text-sm">
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default VillaGallery;

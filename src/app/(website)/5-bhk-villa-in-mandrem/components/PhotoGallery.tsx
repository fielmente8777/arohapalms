import Image from "next/image";
import { gallery } from "../pageData";

export default function PhotoGallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
          {gallery.eyebrow}
        </p>

        <h2 className="mt-3 font-serif text-3xl text-slate-900 sm:text-4xl">
          {gallery.heading}
        </h2>

      <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
  {gallery.images.map((img) => (
    <div
      key={img.src}
      className="relative aspect-[4/3] overflow-hidden rounded-sm"
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover transition duration-500 hover:scale-105"
      />
    </div>
  ))}
</div>

<a
  href="#book"
  className="mt-12 inline-block rounded-sm bg-slate-900 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-slate-800"
>
  {gallery.ctaLabel}
</a>
      </div>
    </section>
  );
}
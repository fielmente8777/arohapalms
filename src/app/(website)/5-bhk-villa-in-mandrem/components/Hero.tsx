import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { hero } from "../pageData";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-slate-900">
      <Image
        src={hero.backgroundImage}
        alt="Aroha Palms private pool villa"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
          {hero.eyebrow}
        </p>
        <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          {hero.headline}
        </h1>
        <p className="mt-4 max-w-xl text-sm text-white/80 sm:text-base">
          {hero.subline}
        </p>

        <div className="mt-8 flex items-end gap-3">
          <span className="text-lg text-white/50 line-through">
            {hero.priceOriginal}
          </span>
          <span className="font-serif text-4xl text-white sm:text-5xl">
            {hero.priceDiscounted}
          </span>
          <span className="pb-1 text-xs text-white/70">{hero.priceNote}</span>
        </div>

        <a
          href={hero.primaryButton.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-amber-400 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-slate-900 transition hover:bg-amber-300">
          {hero.primaryButton.label}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
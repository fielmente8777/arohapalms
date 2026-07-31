import { promo } from "../pageData";

export default function PromoBanner() {
  return (
    <section className="bg-slate-950 py-20 text-center text-white">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="font-serif text-2xl sm:text-3xl">
          {promo.title}
        </h2>

        <p className="mt-4 text-sm text-white/70">
          {promo.description}
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="text-white/40 line-through">
            {promo.priceOriginal}
          </span>

          <span className="font-serif text-2xl text-amber-300">
            {promo.priceDiscounted}
          </span>
        </div>

        <a
          id="book"
          href={promo.primaryButton.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-sm bg-amber-400 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-slate-900 transition hover:bg-amber-300"
        >
          {promo.primaryButton.label}
        </a>

        <p className="mt-6 text-[11px] text-white/40">
          {promo.footnote}
        </p>
      </div>
    </section>
  );
}
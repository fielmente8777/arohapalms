import { whyUs } from "../pageData";
import { Icon } from "../icons";

export default function WhyUs() {
  return (
    <section className="bg-slate-50 pb-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
          {whyUs.eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-3xl text-slate-900 sm:text-4xl">
          {whyUs.heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {whyUs.cards.map((card) => (
            <div
              key={card.title}
              className="flex gap-4 rounded-md bg-blue-50/60 p-6 text-left"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-slate-900">
                <Icon name={card.icon} className="h-5 w-5 text-amber-300" />
              </span>
              <div>
                <h3 className="font-serif text-lg text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
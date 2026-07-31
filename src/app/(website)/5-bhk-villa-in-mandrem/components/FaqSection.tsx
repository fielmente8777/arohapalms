"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { siteConfig, faq } from "../pageData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
          {faq.eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-3xl text-slate-900 sm:text-4xl">
          {faq.heading}
        </h2>

        <div className="mt-10 divide-y divide-slate-200 rounded-sm bg-white text-left shadow-sm">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="px-5">
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-slate-800">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-md rounded-sm bg-blue-50/60 px-6 py-6">
  <p className="font-serif text-base text-slate-900">
    {faq.stillHaveQuestions.heading}
  </p>

  <p className="mt-1 text-sm text-slate-600">
    {faq.stillHaveQuestions.body}
  </p>

  <a
    href={`https://wa.me/${siteConfig.whatsappNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 rounded-sm bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-slate-800"
  >
    <MessageCircle className="h-4 w-4" />
    {faq.stillHaveQuestions.ctaLabel}
  </a>
</div>
      </div>
    </section>
  );
}
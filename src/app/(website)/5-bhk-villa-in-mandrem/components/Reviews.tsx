import { Star } from "lucide-react";
import { reviews } from "../pageData";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-slate-50 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
        {reviews.eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl text-slate-900 sm:text-4xl">
        {reviews.heading}
      </h2>
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="flex text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <span className="font-serif text-sm text-slate-900">
          {reviews.rating}/{reviews.outOf}
        </span>
        <span className="text-xs text-slate-500">
          from {reviews.reviewCount} verified stays
        </span>
      </div>
    </section>
  );
}
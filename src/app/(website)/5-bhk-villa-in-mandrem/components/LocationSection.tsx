import { MapPin } from "lucide-react";
import { location } from "../pageData";

export default function LocationSection() {
  return (
    <section id="location" className="mx-auto max-w-6xl px-6 py-24 text-center lg:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
        {location.eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl text-slate-900 sm:text-4xl">
        {location.heading}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
        {location.body}
      </p>

      <div className="mt-12 grid gap-8 text-left lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-slate-200">
          <iframe
            src={location.mapEmbedSrc}
            className="h-full w-full"
            loading="lazy"
            title="Villa location map"
          />
        </div>

        <div>
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              {location.highlightsLabel}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {location.driveLabel}
            </span>
          </div>
          <ul className="divide-y divide-slate-100">
            {location.highlights.map((h) => (
              <li key={h.name} className="flex items-center justify-between py-3">
                <span className="flex items-center gap-2 text-sm text-slate-700">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  {h.name}
                </span>
                <span className="text-sm text-slate-400">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-lg rounded-sm border-l-4 border-amber-400 bg-slate-50 px-5 py-4 text-left text-sm text-slate-600">
        {location.calloutText}
      </div>
    </section>
  );
}
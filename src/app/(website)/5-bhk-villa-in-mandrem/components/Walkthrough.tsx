import Image from "next/image";
import { walkthrough } from "../pageData";

export default function Walkthrough() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
          {walkthrough.eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-3xl text-slate-900 sm:text-4xl">
          {walkthrough.heading}
        </h2>
      </div>

      <div className="mt-20 space-y-24">
        {walkthrough.sections.map((item) => {
          const imageFirst = item.imageSide === "left";
          return (
            <div
              key={item.index}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-sm ${
                  imageFirst ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center bg-slate-900 text-xs font-semibold text-amber-300">
                  {item.index}
                </span>
              </div>

              <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                  {item.tag}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-slate-900 sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
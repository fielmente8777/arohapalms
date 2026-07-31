import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { experienceIntro } from "../pageData";

export default function ExperienceIntro() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
            {experienceIntro.eyebrow}
          </p>

          <h2 className="mt-4 font-serif text-3xl text-slate-900 sm:text-4xl">
            {experienceIntro.heading[0]}
            <br />
            <span className="italic text-slate-500">
              {experienceIntro.heading[1]}
            </span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-600">
            {experienceIntro.body}
          </p>

          <a
            href={experienceIntro.primaryButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 underline underline-offset-4"
          >
            {experienceIntro.primaryButton.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
          <Image
            src={experienceIntro.image}
            alt="Villa pool at dusk"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
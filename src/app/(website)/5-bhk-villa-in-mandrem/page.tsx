"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Bed,
  Waves,
  Wifi,
  Star,
  UtensilsCrossed,
  MapPin,
  Users,
  ShieldCheck,
  Lock,
  ChevronDown,
  Phone,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import {
  siteConfig,
  hero,
  amenities,
  promo,
  experienceIntro,
  gallery,
  walkthrough,
  reviews,
  whyUs,
  location,
  faq,
} from "./pageData";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  bed: Bed,
  pool: Waves,
  wifi: Wifi,
  star: Star,
  kitchen: UtensilsCrossed,
  pin: MapPin,
  users: Users,
  shield: ShieldCheck,
  lock: Lock,
};

function Icon({ name, className }: { name: string; className?: string }) {
  const Comp = ICONS[name] ?? Star;
  return <Comp className={className} />;
}

export default function Page() {
  return (
    <main className="bg-white text-slate-800 antialiased">
      <Navbar />
      <Hero />
      <AmenitiesBar />
      <PromoBanner />
      <ExperienceIntro />
      <PhotoGallery />
      <Walkthrough />
      <Reviews />
      <WhyUs />
      <LocationSection />
      <FaqSection />
      <WhatsappFab />
    </main>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 z-30 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div>
          <p className="font-serif text-xl tracking-wide text-white">
            {siteConfig.name.toUpperCase()}
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
            {siteConfig.tagline}
          </p>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-wider text-white/90 transition hover:text-amber-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm text-white/90"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <a
            href={hero.primaryButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-amber-400 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 transition hover:bg-amber-300"
          >
            Check Availability
          </a>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="space-y-4 bg-slate-950/95 px-6 py-6 lg:hidden">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-sm uppercase tracking-wider text-white/90"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={hero.primaryButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-sm bg-amber-400 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-900"
          >
            Check Availability
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
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
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-amber-400 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-slate-900 transition hover:bg-amber-300"
        >
          {hero.primaryButton.label}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function AmenitiesBar() {
  return (
    <section id="amenities" className="bg-slate-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
        {amenities.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col items-center gap-3 border-b border-white/10 px-4 py-8 text-center ${
              i % 4 !== 3 ? "sm:border-r" : ""
            } ${i % 2 === 0 ? "border-r" : ""} sm:border-r sm:border-white/10`}
          >
            <Icon name={item.icon} className="h-6 w-6 text-amber-300" />
            <span className="text-xs font-medium uppercase tracking-wide text-white/80">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="bg-slate-950 py-20 text-center text-white">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="font-serif text-2xl sm:text-3xl">{promo.title}</h2>
        <p className="mt-4 text-sm text-white/70">{promo.description}</p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="text-white/40 line-through">{promo.priceOriginal}</span>
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

        <p className="mt-6 text-[11px] text-white/40">{promo.footnote}</p>
      </div>
    </section>
  );
}

function ExperienceIntro() {
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

function PhotoGallery() {
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

function Walkthrough() {
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

function Reviews() {
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

function WhyUs() {
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


function LocationSection() {
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

function FaqSection() {
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
          <p className="mt-1 text-sm text-slate-600">{faq.stillHaveQuestions.body}</p>
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

function WhatsappFab() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
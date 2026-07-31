"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { siteConfig, hero } from "../pageData";

export default function Navbar() {
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
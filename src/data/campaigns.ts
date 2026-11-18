/**
 * Festive (Christmas & New Year 2026) and Open Dates campaign data.
 *
 * EDIT HERE ONLY — the landing pages read from this file.
 *  - `booked: true`  → card shows "Booked" (never delete the card) — client rule E5.
 *  - `fromPrice`     → leave null until PK confirms; the card then shows "Rates on request".
 *  - Prices must match the ads exactly (brief §4).
 */

export interface CampaignVilla {
  slug: string; // villaPhotos key
  name: string;
  location: "Mandrem" | "Pilerne";
  bedrooms: string;
  size: string;
  sleeps: string;
  pools: string;
  fromPrice: string | null; // e.g. "₹45,000"
  minNights: string | null; // e.g. "3 nights"
  booked: boolean;
  pageHref: string;
}

const V = {
  majestic: {
    slug: "villa-majestic", name: "Villa Majestic", location: "Pilerne", bedrooms: "5 BHK + 2 lofts",
    size: "7,000 sq ft", sleeps: "Sleeps 14", pools: "Private 10 m pool", pageHref: "/pilerne/villa-majestic/",
  },
  grande: {
    slug: "villa-grande", name: "Villa Grande", location: "Pilerne", bedrooms: "6 BHK",
    size: "8,000 sq ft", sleeps: "Sleeps 12", pools: "Private 10 m pool", pageHref: "/pilerne/villa-grande/",
  },
  imperial: {
    slug: "villa-imperial", name: "Villa Imperial (Majestic + Grande)", location: "Pilerne", bedrooms: "11 bedrooms",
    size: "15,500 sq ft", sleeps: "Sleeps 26", pools: "Two private 10 m pools", pageHref: "/pilerne/villa-imperial/",
  },
  magnifica: {
    slug: "villa-magnifica", name: "Villa Magnifica", location: "Mandrem", bedrooms: "4 BHK",
    size: "4,000 sq ft", sleeps: "Sleeps 8", pools: "Private 10 m pool", pageHref: "/mandrem/villa-magnifica/",
  },
  paradiso: {
    slug: "villa-paradiso", name: "Villa Paradiso", location: "Mandrem", bedrooms: "5 BHK",
    size: "5,000 sq ft", sleeps: "Sleeps 10", pools: "Private 10 m pool", pageHref: "/mandrem/villa-paradiso/",
  },
  serenity: {
    slug: "villa-serenity", name: "Villa Serenity", location: "Mandrem", bedrooms: "5 BHK",
    size: "5,000 sq ft", sleeps: "Sleeps 10", pools: "Private 10 m pool", pageHref: "/mandrem/villa-serenity/",
  },
} as const;

const make = (v: (typeof V)[keyof typeof V], extra: Partial<CampaignVilla> = {}): CampaignVilla => ({
  ...v,
  fromPrice: null,
  minNights: null,
  booked: false,
  ...extra,
});

export const festive = {
  christmas: {
    id: "christmas",
    title: "Christmas 2026",
    dates: "23 to 27 December",
    note: "Only our Pilerne villas are open for Christmas. Book one, or both together as Villa Imperial.",
    villas: [make(V.majestic), make(V.grande), make(V.imperial)],
  },
  newYear: {
    id: "new-year",
    title: "New Year 2026",
    dates: "29 December to 2 January",
    note: "Four private pool villas are still open for New Year. Big group? Book two or three Mandrem villas together.",
    villas: [make(V.grande), make(V.magnifica), make(V.paradiso), make(V.serenity)],
  },
};

/** Open Dates (always-on). Fill `rows` from eZee every Monday and Thursday (data from Haritik). */
export interface OpenDateRow {
  villa: string;
  dates: string; // e.g. "24–26 Nov (Tue–Thu)"
  normalRate: string; // genuine normal rate, shown struck through
  dealRate: string;
}

export const openDates = {
  /** ISO date-time when the current deal step ends (countdown). null hides the timer. */
  dealEnds: null as string | null,
  updated: null as string | null, // e.g. "Mon 23 Nov"
  rows: [] as OpenDateRow[],
  terms: [
    "Deal rates are non-refundable.",
    "Minimum stay 2 nights.",
    "Standard check-in 3:00 PM and check-out 10:00 AM.",
    "Rates are per night for the whole villa, plus taxes.",
  ],
};

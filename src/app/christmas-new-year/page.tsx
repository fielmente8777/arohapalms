import type { Metadata } from "next";
import CampaignVillaCard from "@/components/campaign/CampaignVillaCard";
import {
  CampaignFaq,
  CampaignForm,
  CampaignHeader,
  CampaignReviews,
  COMMON_FAQ,
} from "@/components/campaign/CampaignShell";
import LandingFooter from "@/components/footer/LandingFooter";
import { festive } from "@/data/campaigns";

export const metadata: Metadata = {
  title: "Christmas & New Year 2026 Villas in North Goa | Aroha Palms",
  description:
    "Private pool villas for Christmas and New Year 2026 in Pilerne and Mandrem, North Goa. Only a few villas left. Book direct with Aroha Palms.",
  robots: { index: false, follow: true }, // ad landing page (client doc G8)
  alternates: { canonical: "https://arohapalms.com/christmas-new-year/" },
};

const FAQ = [
  {
    q: "Is there a minimum stay over Christmas and New Year?",
    a: "Yes, festive dates have a minimum stay. The minimum for each villa is shown on its card, or we confirm it with your quote.",
  },
  ...COMMON_FAQ,
];

export default function ChristmasNewYear() {
  const sections = [festive.christmas, festive.newYear];
  return (
    <main className="bg-background">
      <CampaignHeader />
      <section className="bg-[#0B1E2D] px-4 py-14 text-center text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-white/70">Aroha Palms, North Goa</p>
        <h1 className="mt-2 font-primary text-4xl md:text-5xl">Christmas &amp; New Year in a private pool villa</h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          Only a few villas are left for the festive season. Pick your dates below and send us an enquiry.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#christmas" className="rounded-sm bg-white px-5 py-3 text-sm font-semibold uppercase text-[#0B1E2D]">
            Christmas villas
          </a>
          <a href="#new-year" className="rounded-sm border border-white px-5 py-3 text-sm font-semibold uppercase text-white">
            New Year villas
          </a>
        </div>
      </section>

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
          <h2 className="font-primary text-3xl text-primary md:text-4xl">{s.title}</h2>
          <p className="mt-1 text-secondary">
            {s.dates}. {s.note}
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.villas.map((v) => (
              <CampaignVillaCard key={`${s.id}-${v.slug}`} v={v} season={s.id === "christmas" ? "Christmas" : "New Year"} />
            ))}
          </div>
          <p className="mt-4 text-sm text-secondary">
            Rates are per night for the whole villa, plus taxes. Rates change with dates and group size; WhatsApp us for your exact quote.
          </p>
        </section>
      ))}

      <CampaignForm title="Ask for festive availability" />
      <CampaignReviews />
      <CampaignFaq items={FAQ} />
      <LandingFooter />
    </main>
  );
}

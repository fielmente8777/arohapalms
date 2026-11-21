import type { Metadata } from "next";
import DealCountdown from "@/components/campaign/DealCountdown";
import {
  CampaignFaq,
  CampaignForm,
  CampaignHeader,
  CampaignReviews,
  COMMON_FAQ,
} from "@/components/campaign/CampaignShell";
import LandingFooter from "@/components/footer/LandingFooter";
import { openDates } from "@/data/campaigns";

export const metadata: Metadata = {
  title: "Open Dates & Weekday Villa Deals in North Goa | Aroha Palms",
  description:
    "This week's open dates at Aroha Palms: 4, 5 and 6 BHK private pool villas in North Goa at weekday deal rates. Limited dates, book direct.",
  robots: { index: false, follow: true }, // ad landing page (client doc G8)
  alternates: { canonical: "https://arohapalms.com/open-dates/" },
};

const WA =
  "https://wa.me/919834220573?text=" +
  encodeURIComponent("Hi Aroha Palms Team,\n\nPlease share this week's villa deal and open dates.\n\nThank you!");

export default function OpenDates() {
  const { rows, terms, dealEnds, updated } = openDates;
  return (
    <main className="bg-background">
      <CampaignHeader />
      <section className="bg-[#0B1E2D] px-4 py-14 text-center text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-white/70">Aroha Palms, North Goa</p>
        <h1 className="mt-2 font-primary text-4xl md:text-5xl">Open dates at our best direct rates</h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          4, 5 and 6 BHK private pool villas with 10 m pools and two caretakers. Weekday deals, limited dates.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-primary text-3xl text-primary">This week&apos;s open dates</h2>
          {dealEnds && <DealCountdown ends={dealEnds} />}
        </div>
        {updated && <p className="mt-1 text-sm text-secondary">Updated {updated}. We update this table every Monday and Thursday.</p>}

        {rows.length ? (
          <div className="mt-6 overflow-x-auto rounded-md border border-[#e5e0d6] bg-white">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-[#f7f4ee] text-primary">
                <tr>
                  <th className="p-3">Villa</th>
                  <th className="p-3">Open dates</th>
                  <th className="p-3">Normal rate</th>
                  <th className="p-3">Deal rate</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={`${r.villa}-${r.dates}`} className="border-t border-[#eee]">
                    <td className="p-3 font-medium text-primary">{r.villa}</td>
                    <td className="p-3 text-secondary">{r.dates}</td>
                    <td className="p-3 text-secondary line-through">{r.normalRate}</td>
                    <td className="p-3 font-semibold text-[#A20000]">{r.dealRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="p-3 text-xs text-secondary">Rates are per night for the whole villa, plus taxes.</p>
          </div>
        ) : (
          <div className="mt-6 rounded-md border border-dashed border-[#d8d0c0] bg-white p-6 text-center">
            <p className="text-secondary">This week&apos;s open dates and deal rates are being updated.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block rounded-sm bg-green-600 px-5 py-3 text-sm font-semibold text-white">
              Ask for this week&apos;s deal on WhatsApp
            </a>
          </div>
        )}

        <ul className="mt-6 grid gap-2 text-sm text-secondary sm:grid-cols-2">
          {terms.map((t) => (
            <li key={t} className="rounded-sm bg-[#f7f4ee] px-3 py-2">{t}</li>
          ))}
        </ul>
      </section>

      <CampaignForm title="Ask for this week's deal" />
      <CampaignReviews />
      <CampaignFaq items={COMMON_FAQ} />
      <LandingFooter />
    </main>
  );
}

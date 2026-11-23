import Image from "next/image";
import Link from "next/link";
import WhatsappForm from "@/components/forms/WhatsappForm";
import { SectionWithContainer } from "@/components/sectionComponants";

/** Shared top bar, enquiry form, reviews and FAQ for the campaign landing pages. */
export function CampaignHeader() {
  return (
    <header className="sticky top-0 z-30 bg-[#0B1E2D]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" aria-label="Aroha Palms home" className="relative block h-10 w-32">
          <Image src="/logo.png" alt="Aroha Palms" fill className="object-contain object-left" />
        </Link>
        <a
          href="tel:+919834220573"
          className="rounded-sm border border-white/70 px-3 py-2 text-sm font-medium text-white"
        >
          Call +91 98342 20573
        </a>
      </div>
    </header>
  );
}

export function CampaignForm({ title }: { title: string }) {
  return (
    <SectionWithContainer defaultPadding={false} sectionClassName="py-10 bg-[#f7f4ee]" containerClassName="space-y-4">
      <div id="enquire" className="scroll-mt-20 text-center">
        <h2 className="font-primary text-3xl text-primary">{title}</h2>
        <p className="mt-1 text-secondary">Your dates, group size, villa and WhatsApp number. We reply within a few hours.</p>
      </div>
      <WhatsappForm />
    </SectionWithContainer>
  );
}

const REVIEWS = [
  {
    name: "Praveen Kujal",
    where: "Pilerne",
    text: "We stayed at the property on a visit from the UK. They have two villas and both are amazingly well laid out, beautiful and comfortable. The lower villa is a classic Goan villa. The villas have huge rooms, comfortable beds and comfortable bathrooms. The staff are attentive and make sure the stay is comfortable.",
  },
  {
    name: "Shailendra Rawat",
    where: "Mandrem",
    text: "A very warm and comfortable stay in a beautiful property. A very well maintained, fully functional villa with a great location, and very warm, hospitable and helpful staff.",
  },
];

export function CampaignReviews() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-center font-primary text-3xl text-primary">What our guests say</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="rounded-md border border-[#e5e0d6] bg-white p-5">
            <blockquote className="text-secondary">&ldquo;{r.text}&rdquo;</blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-primary">
              {r.name} <span className="font-normal text-secondary">· stayed in {r.where}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function CampaignFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="text-center font-primary text-3xl text-primary">Good to know</h2>
      <div className="mt-6 divide-y divide-[#e5e0d6] rounded-md border border-[#e5e0d6] bg-white">
        {items.map((f) => (
          <details key={f.q} className="group p-4">
            <summary className="cursor-pointer list-none font-medium text-primary">{f.q}</summary>
            <p className="mt-2 text-secondary">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export const COMMON_FAQ = [
  { q: "What are the check-in and check-out times?", a: "Check-in is at 3:00 PM and check-out is at 10:00 AM." },
  {
    q: "What are the house rules?",
    a: "Our villas are in a residential area, so loud music is not allowed after 10:00 PM and quiet hours are 10:00 PM to 8:00 AM. A refundable security deposit is collected at check-in. The full rules are on our house rules page.",
  },
  {
    q: "How do I book?",
    a: "Send your dates and group size using the form or WhatsApp. We confirm availability and your exact rate, then share the booking link.",
  },
];

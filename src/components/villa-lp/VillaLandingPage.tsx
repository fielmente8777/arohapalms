import {
  AccommodationSectionProps,
  FaqSectionProps,
  TestimonialsProps,
} from "@/@types/landingPageTypes";
import LinkButton from "@/components/buttons/LinkButton";
import WhatsappForm from "@/components/forms/WhatsappForm";
import { Container, SectionWithContainer } from "@/components/sectionComponants";
import AmenitiesSlider from "@/components/sliders/AmenitiesSlider";
import { SectionHeading } from "@/components/typography";
import Banner from "@/app/landing-page/component/Banner";
import ExperienceSection from "@/app/landing-page/component/ExperienceSection";
import FaqSection from "@/app/landing-page/component/FaqSection";
import FeaturesSection from "@/app/landing-page/component/FeaturesSection";
import Testimonials from "@/app/landing-page/component/Testimonials";
import Image from "next/image";
import Link from "next/link";
import VillaGallery from "./VillaGallery";

type Card = AccommodationSectionProps["cards"][0];

export { villaSlug } from "@/utils/villaSlug";

export interface VillaSibling {
  slug: string;
  title: string;
  span?: string;
  startingPrice?: string;
  image: string;
}

interface Props {
  card: Card;
  photos: string[];
  basePath: string;
  siblings: VillaSibling[];
  // Section data re-used from the location landing page
  featuresSection: React.ComponentProps<typeof FeaturesSection>;
  experienceSection: React.ComponentProps<typeof ExperienceSection>;
  testimonials: TestimonialsProps;
  faq: FaqSectionProps;
  /** Optional extra block (e.g. Pilerne "Nearby" section) */
  extra?: React.ReactNode;
  /** Landing pages draw their own navbar over the hero; website pages already have one */
  showLandingNavbar?: boolean;
}

type DetailPart =
  | { kind: "bullets"; items: string[] }
  | { kind: "text"; text: string };
interface DetailSection {
  heading?: string;
  parts: DetailPart[];
}
interface Details {
  /** Tagline + long narrative paragraphs, shown full width above the cards */
  story: { tagline?: string; paragraphs: string[] };
  sections: DetailSection[];
}

const DASH = /^\s*[–—-]\s*/;
// e.g. "ADD-ON SERVICES" — short, all caps, starts with a letter
const isHeading = (t: string) => /^[A-Z][A-Z0-9 &'/-]{2,38}$/.test(t);

/**
 * The villa cards store details as tidy bullet lists, but the apartment cards pack
 * intro lines, "– " bullets, paragraphs and an "ADD-ON SERVICES" heading into one flat
 * list. Split that into headed sections with real paragraphs and bullets, and pull the
 * tagline + long story paragraph out so the cards stay a similar height.
 */
const normalizeDetails = (blocks: Card["moreInfo"]["listOfData"]): Details => {
  const out: DetailSection[] = [];
  const story: Details["story"] = { paragraphs: [] };
  for (const block of blocks) {
    const dashed = block.list.some((t) => DASH.test(t));
    let current: DetailSection = { heading: block.title, parts: [] };
    if (block.description) current.parts.push({ kind: "text", text: block.description });
    const push = (item: string) => {
      const last = current.parts[current.parts.length - 1];
      if (last && last.kind === "bullets") last.items.push(item);
      else current.parts.push({ kind: "bullets", items: [item] });
    };
    for (const raw of block.list) {
      const t = raw.trim();
      if (!t) continue;
      if (isHeading(t)) {
        if (current.parts.length) out.push(current);
        current = { heading: t, parts: [] };
      } else if (!dashed) {
        push(t);
      } else if (DASH.test(t)) {
        push(t.replace(DASH, ""));
      } else {
        if (t.endsWith(":")) current.parts.push({ kind: "text", text: t });
        else if (t.length < 90 && !story.tagline) story.tagline = t;
        else story.paragraphs.push(t);
      }
    }
    if (current.parts.length) out.push(current);
  }
  return { story, sections: out };
};

const VillaLandingPage: React.FC<Props> = ({
  card,
  photos,
  basePath,
  siblings,
  featuresSection,
  experienceSection,
  testimonials,
  faq,
  extra,
  showLandingNavbar = true,
}) => {
  const { title, span, moreInfo, startingPrice, inRoomAmenities, location } =
    card;
  const span_ = span?.trim();
  // Apartments have no pool of their own: drop any pool feature/amenity so the page doesn't imply one
  const isApartment = card.type === "Apartment";
  const noPool = (t?: string) => !/pool/i.test(t ?? "");
  const features = isApartment
    ? {
        ...featuresSection,
        features: featuresSection.features.filter(
          (f) => noPool(f.title) && noPool(f.description),
        ),
      }
    : featuresSection;
  const reviews = isApartment
    ? {
        ...testimonials,
        reviews: testimonials.reviews.filter((r) => noPool(r.review)),
      }
    : testimonials;
  const amenities = isApartment
    ? inRoomAmenities.filter((a) => noPool(a.label))
    : inRoomAmenities;
  const { story, sections: detailSections } = normalizeDetails(
    moreInfo.listOfData ?? [],
  );

  return (
    <main className="bg-background">
      <Banner
        images={photos.slice(0, 5)}
        isSliding
        showNavbar={showLandingNavbar}
      />

      {/* Intro */}
      <SectionWithContainer containerClassName="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-14 items-start">
        <div className="lg:col-span-6 space-y-5 min-w-0">
          <p className="text-sm text-primary uppercase tracking-widest">
            Aroha Palms · {location}, North Goa
          </p>
          <h1 className="lg:text-5xl text-3xl text-p2 font-semibold leading-tight">
            {title}
            {span_ && (
              <span className="block text-primary lg:text-3xl text-2xl font-normal mt-2">
                {span_}
              </span>
            )}
          </h1>
          {moreInfo.title && (
            <p className="text-lg lg:text-xl text-secondary">{moreInfo.title}</p>
          )}
          {moreInfo.roomInfo && (
            <ul className="flex flex-wrap gap-2">
              {moreInfo.roomInfo.map((info) => (
                <li
                  key={info}
                  className="bg-background-2 text-sm py-1 px-3 rounded-full text-background-dark"
                >
                  {info.trim()}
                </li>
              ))}
            </ul>
          )}
          {moreInfo.description.map((p, i) => (
            <p key={i} className="text-[#57534E] lg:text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <aside className="lg:col-span-4 lg:sticky lg:top-6 min-w-0 overflow-hidden border-2 border-primary rounded-2xl p-5 lg:p-6 bg-background box-shadow space-y-5">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={photos[1] ?? photos[0]}
              alt={title}
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          {startingPrice ? (
            <p className="text-xl text-secondary">
              <span className="font-semibold">{startingPrice}</span>{" "}
              <span className="text-sm">+ Taxes</span>
            </p>
          ) : (
            <p className="text-xl text-secondary font-semibold">
              Rates on request
            </p>
          )}
          <AmenitiesSlider items={amenities} />
          <LinkButton
            href="#form"
            label="Check availability & rates"
            whatsAppIcon
            villa={title}
            className="bg-primary rounded-sm border-none text-white w-full justify-center uppercase"
          />
          <p className="text-center text-secondary text-sm">
            *Rates vary by season
          </p>
        </aside>
      </SectionWithContainer>

      {/* Enquiry form, villa pre-selected */}
      <SectionWithContainer
        defaultPadding={false}
        sectionId="form"
        sectionClassName="py-8 border-y border-primary box-shadow"
        containerClassName="space-y-4"
      >
        <WhatsappForm villa={title} />
      </SectionWithContainer>

      {/* Gallery */}
      <SectionWithContainer containerClassName="space-y-8">
        <div className="space-y-2 text-center">
          <p className="text-sm text-primary uppercase tracking-widest">
            Gallery
          </p>
          <SectionHeading title={`Inside ${title}`} textCenter />
        </div>
        <VillaGallery images={photos} title={title} />
      </SectionWithContainer>

      {/* Details */}
      {detailSections.length > 0 && (
        <SectionWithContainer
          sectionClassName="bg-background-2"
          containerClassName="space-y-10"
        >
          {(story.tagline || story.paragraphs.length > 0) && (
            <div className="max-w-3xl mx-auto text-center space-y-4">
              {story.tagline && (
                <p
                  className="text-primary lg:text-3xl text-2xl italic"
                  dangerouslySetInnerHTML={{ __html: story.tagline }}
                />
              )}
              {story.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[#57534E] lg:text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>
          )}
          <div
            className={`grid grid-cols-1 gap-6 items-start ${
              detailSections.length === 1
                ? "max-w-4xl mx-auto"
                : detailSections.length === 2
                  ? "lg:grid-cols-2"
                  : "lg:grid-cols-3"
            }`}
          >
            {detailSections.map((block, i) => (
              <div
                key={i}
                className="bg-background rounded-2xl p-6 lg:p-8 border border-primary/30 space-y-4"
              >
                {block.heading && (
                  <h2 className="text-lg lg:text-xl text-p2 font-semibold uppercase tracking-wide">
                    {block.heading}
                  </h2>
                )}
                {block.parts.map((part, j) =>
                  part.kind === "bullets" ? (
                    <ul
                      key={j}
                      className="space-y-2 list-disc pl-5 text-[#57534E] marker:text-primary"
                    >
                      {part.items.map((item, k) => (
                        <li key={k} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  ) : (
                    <p
                      key={j}
                      className="text-[#57534E] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: part.text }}
                    />
                  ),
                )}
              </div>
            ))}
          </div>
        </SectionWithContainer>
      )}

      {/* Guest review for this villa */}
      {moreInfo.review?.description && (
        <SectionWithContainer containerClassName="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm text-primary uppercase tracking-widest">
            A guest at {title}
          </p>
          <blockquote className="lg:text-2xl text-xl text-p2 leading-relaxed">
            “{moreInfo.review.description}”
          </blockquote>
          <p className="text-secondary font-semibold">
            {moreInfo.review.author}
          </p>
        </SectionWithContainer>
      )}

      <FeaturesSection {...features} />
      {extra}
      <ExperienceSection {...experienceSection} />
      <Testimonials {...reviews} />
      <FaqSection {...faq} />

      {/* Other villas at this location */}
      {siblings.length > 0 && (
        <SectionWithContainer containerClassName="space-y-8">
          <div className="space-y-2 text-center">
            <p className="text-sm text-primary uppercase tracking-widest">
              Also at Aroha Palms {location}
            </p>
            <SectionHeading title="Compare the other stays" textCenter />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siblings.map((s) => (
              <Link
                key={s.slug}
                href={`${basePath}/${s.slug}/`}
                className="group border border-primary/40 rounded-2xl overflow-hidden bg-background hover:border-primary transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="text-xl text-p2 font-semibold">{s.title}</h3>
                  {s.span && <p className="text-primary">{s.span.trim()}</p>}
                  {s.startingPrice && (
                    <p className="text-secondary text-sm">
                      {s.startingPrice} + Taxes
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </SectionWithContainer>
      )}

      <Container className="pb-12">
        <div className="text-center">
          <LinkButton
            href="#form"
            label={`Enquire about ${title}`}
            whatsAppIcon
            villa={title}
            className="bg-primary rounded-sm border-none text-white mx-auto justify-center uppercase"
          />
        </div>
      </Container>
    </main>
  );
};

export default VillaLandingPage;

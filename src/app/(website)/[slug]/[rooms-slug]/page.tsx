import VillaLandingPage, {
  villaSlug,
} from "@/components/villa-lp/VillaLandingPage";
import { villaMeta, villaPhotos } from "@/data/villaPhotos";
import { landingPageData as mandremData } from "@/app/landing-page/component/pageData";
import NearbyPlaces from "@/app/pilerne-lp/components/Nearby";
import { landingPageData as pilerneData } from "@/app/pilerne-lp/components/pagedata";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { roomData as locations } from "../pageData";

/**
 * Website villa / apartment pages, e.g. /mandrem/villa-paradiso/ and /pilerne/villa-majestic/.
 * Content comes from the location pages' property cards (../pageData), so editing a card
 * there updates its page here.
 */

interface PageProps {
  params: Promise<{ slug: string; "rooms-slug": string }>;
}

export const dynamicParams = false;

const findStay = (location: string, stay: string) => {
  const loc = locations.find((l) => l.slug === location);
  const cards = loc?.properties.cards ?? [];
  const card = cards.find((c) => villaSlug(c.title) === stay);
  return { loc, cards, card };
};

export function generateStaticParams() {
  return locations.flatMap((loc) =>
    loc.properties.cards.map((c) => ({
      slug: loc.slug,
      "rooms-slug": villaSlug(c.title),
    })),
  );
}

const absolute = (src: string) =>
  src.startsWith("http") ? src : `https://arohapalms.com${src}`;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, "rooms-slug": stay } = await params;
  const { card } = findStay(slug, stay);
  if (!card) return { title: "Not found | Aroha Palms" };
  const meta = villaMeta[stay] ?? {
    title: `${card.title} | Aroha Palms ${card.location}`,
    description: card.moreInfo.description[0],
  };
  const photo = villaPhotos[stay]?.[0] ?? card.images[0];
  const url = `https://arohapalms.com/${slug}/${stay}/`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      images: photo ? [absolute(photo)] : undefined,
    },
  };
}

export default async function StayPage({ params }: PageProps) {
  const { slug, "rooms-slug": stay } = await params;
  const { cards, card } = findStay(slug, stay);
  if (!card) notFound();

  const photos = villaPhotos[stay] ?? card.images;
  const siblings = cards
    .filter((c) => c !== card)
    .map((c) => {
      const s = villaSlug(c.title);
      return {
        slug: s,
        title: c.title,
        span: c.span,
        startingPrice: c.startingPrice,
        image: villaPhotos[s]?.[0] ?? c.images[0],
      };
    });

  const isPilerne = slug === "pilerne";
  const data = isPilerne ? pilerneData : mandremData;

  return (
    <VillaLandingPage
      card={card}
      photos={photos}
      basePath={`/${slug}`}
      siblings={siblings}
      featuresSection={data.featuresSection}
      experienceSection={data.experienceSection}
      testimonials={data.testimonials}
      faq={data.faq}
      extra={
        isPilerne ? <NearbyPlaces {...pilerneData.nearbyPlaces} /> : undefined
      }
      showLandingNavbar={false}
    />
  );
}

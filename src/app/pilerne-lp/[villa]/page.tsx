import VillaLandingPage, {
  villaSlug,
} from "@/components/villa-lp/VillaLandingPage";
import { villaMeta, villaPageSlugs, villaPhotos } from "@/data/villaPhotos";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import NearbyPlaces from "../components/Nearby";
import { landingPageData } from "../components/pagedata";

const BASE = "/pilerne-lp";
const cards = landingPageData.accommodationSection.cards.filter((c) =>
  villaPageSlugs.includes(villaSlug(c.title)),
);

interface PageProps {
  params: Promise<{ villa: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return cards.map((c) => ({ villa: villaSlug(c.title) }));
}

const absolute = (src: string) =>
  src.startsWith("http") ? src : `https://arohapalms.com${src}`;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { villa } = await params;
  const meta = villaMeta[villa];
  const photos = villaPhotos[villa];
  if (!meta) return { title: "Villa not found | Aroha Palms" };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://arohapalms.com${BASE}/${villa}/` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: photos?.[0] ? [absolute(photos[0])] : undefined,
    },
  };
}

export default async function PilerneVillaPage({ params }: PageProps) {
  const { villa } = await params;
  const card = cards.find((c) => villaSlug(c.title) === villa);
  if (!card) notFound();
  const photos = villaPhotos[villa];

  const siblings = cards
    .filter((c) => c !== card)
    .map((c) => {
      const slug = villaSlug(c.title);
      return {
        slug,
        title: c.title,
        span: c.span,
        startingPrice: c.startingPrice,
        image: villaPhotos[slug]?.[0] ?? c.images[0],
      };
    });

  return (
    <VillaLandingPage
      card={card}
      photos={photos}
      basePath={BASE}
      siblings={siblings}
      featuresSection={landingPageData.featuresSection}
      experienceSection={landingPageData.experienceSection}
      testimonials={landingPageData.testimonials}
      faq={landingPageData.faq}
      extra={<NearbyPlaces {...landingPageData.nearbyPlaces} />}
    />
  );
}

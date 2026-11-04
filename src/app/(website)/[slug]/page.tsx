import { notFound } from "next/navigation";
import { roomData } from "./pageData";
import { heroPhotos, villaPhotos } from "@/data/villaPhotos";
import { villaSlug } from "@/utils/villaSlug";


import { Metadata } from "next";
import Testimonials from "../home/components/Testimonials";
import { homePageData } from "../home/pageData";
import HeroBanner from "./components/HeroBanner";
import Properties from "./components/Properties";
import Banner from "../home/components/Banner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const rooms = await roomData;

  return rooms.map((item) => ({
    slug: item.slug,
    fallback: false,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const path = await params;
  const data = roomData.find((item) => item.slug === path.slug);

  if (!data) {
    return {
      title: "Rooms are not available",
    };
  } else {
    return {
      title: data.metaData.title,
      description: data.metaData.description,
      alternates: {
        canonical: `https://arohapalms.com/${data.slug}`,
        languages: {
          "en-US": `https://arohapalms.com/${data.slug}`,
        },
      },
      openGraph: {
        title: data.metaData.title,
        description: data.metaData.description,
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          nocache: true,
        },
      },
    };
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const data = roomData.find((item) => item.slug === slug);

  if (!data) {
    notFound();
  }

  return (
    <main>
      <Banner
        {...homePageData.hero}
        images={heroPhotos[slug as keyof typeof heroPhotos] ?? homePageData.hero.images}
        showBookingForm
      />
      {/* <HeroBanner {...data.hero} /> */}
      <Properties
        cards={data.properties.cards.map((c) => ({
          ...c,
          // curated Google Drive photos where we have them (src/data/villaPhotos.ts)
          images: villaPhotos[villaSlug(c.title)] ?? c.images,
        }))}
        sectionHeader={data.properties.sectionHeader}
      />
      {/* <Testimonials {...homePageData.testimonials} /> */}
    </main>
  );
}

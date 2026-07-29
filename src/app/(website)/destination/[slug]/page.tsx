import { notFound } from "next/navigation";
import { roomData } from "./pageData";

import { Metadata } from "next";
import Testimonials from "../../home/components/Testimonials";
import { homePageData } from "../../home/pageData";
import HeroBanner from "./components/HeroBanner";
import Properties from "./components/Properties";

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
      <HeroBanner {...data.hero} />
      <Properties cards={data.properties.cards} title={data.properties.title} />
      <Testimonials {...homePageData.testimonials} />
    </main>
  );
}

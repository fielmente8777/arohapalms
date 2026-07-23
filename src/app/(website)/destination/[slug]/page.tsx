import { notFound } from "next/navigation";
import { roomData } from "./pageData";

import HeroBanner from "./components/HeroBanner";
import Properties from "./components/Properties";
import Testimonials from "../../home/components/Testimonials";
import { homePageData } from "../../home/pageData";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return roomData.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const data = roomData.find((item) => item.slug === params.slug);

  if (!data) {
    return {
      title: "Rooms",
      description: "Rooms",
    };
  }

  return {
    title: data.metaData.title,
    description: data.metaData.description,
  };
}

export default async function Page({ params }: PageProps) {

  const { slug } = await params;
  console.log(slug)
  const data = roomData.find((item) => item.slug === slug);

  console.log("jkhjghfgdfsd", roomData);
  if (!data) {
    notFound();
  }

  return (
    <main>
      <HeroBanner {...data.hero} />
      <Properties {...data.properties} />
      {/* <Testimonials {...homePageData.testimonials} /> */}
    </main>
  );
}
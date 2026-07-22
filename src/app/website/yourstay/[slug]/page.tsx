import { notFound } from "next/navigation";
import { roomData } from "./pageData";

import HeroBanner from "./components/HeroBanner";
import Properties from "./components/Properties";
import Testimonials from "../../home/components/Testimonials";
import { homePageData } from "../../home/pageData";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  const data = roomData.find((item) => item.slug === params.slug);

  if (!data) {
    notFound();
  }

  return (
    <main>
      <HeroBanner {...data.hero} />
      <Properties {...data.properties} />
      <Testimonials {...homePageData.testimonials} />
    </main>
  );
}

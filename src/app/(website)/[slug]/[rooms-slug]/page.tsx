import React from "react";
import { roomData } from "./pageData";
import Overview from "./components/Overview";
import ContactInfo from "./components/ContactInfo";
import Amenities from "./components/Amenities";
import Activity from "./components/Activity";
import Hero from "./components/Hero";
import { notFound } from "next/navigation";
interface PageProps {
  params: Promise<{ "rooms-slug": string }>;
}

export async function generateStaticParams() {
  const rooms = await roomData;

  return rooms.map((item) => ({
    slug: item.slug,
    fallback: false,
  }));
}

const page = async ({ params }: PageProps) => {
  const { "rooms-slug": slug } = await params;

  const room = roomData.find((item) => item.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <section>
      <Hero data={room.hero} />
      <Overview data={room?.overview || {}} />
      <ContactInfo data={room.contact} />
      <Amenities data={room.amenities} />
      <Activity data={room.activity} />
    </section>
  );
};

export default page;

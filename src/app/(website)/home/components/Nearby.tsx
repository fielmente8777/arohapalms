"use client";

import Image from "next/image";
import { SectionWithContainer } from "@/components/sectionComponants";
import NearbyActivitiesSlider from "./slider/NearbySlider";

interface Activity {
  image: string;
  title: string;
  description: string;
}

interface NearbyActivitiesProps {
  tag: string;
  title: string;
  activities: Activity[];
}

const NearbyActivities = ({
  tag,
  title,
  activities,
}: NearbyActivitiesProps) => {
  return (
    <SectionWithContainer sectionClassName="w-full bg-navy text-white md:px-0">
      {/* HEADING */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-xs uppercase text-white/80 md:text-lg">{tag}</p>

        <div className="relative mt-2 mb-4 h-[9px] w-[190px] overflow-hidden">
          <Image
            src="/home/design5.png"
            alt=""
            fill
            className="object-cover object-left"
          />
        </div>

        <h2 className="mt-2 font-primary text-2xl font-light md:text-5xl">
          {title}
        </h2>
      </div>

      {/* ACTIVITIES SLIDER */}

      <NearbyActivitiesSlider cards={activities} />
    </SectionWithContainer>
  );
};

export default NearbyActivities;

"use client";

import Image from "next/image";
import { Section, SectionWithContainer } from "@/components/sectionComponants";

import Slider from "./slider/NearbySlider";

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
    <Section defaultPadding={false} className="w-full bg-background-2 text-white  overflow-hidden">
      {/* HEADING */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-xs uppercase text-blue 
       md:text-[17px] lg:text-lg">{tag}</p>

        {/* <div className="relative mt-2 mb-4 h-[9px] w-[190px] overflow-hidden">
          <Image
            src="/home/design5.png"
            alt=""
            fill
            className="object-cover object-left"
          />
        </div> */}

        <h2 className="mt-2 text-blue font-primary  font-light text-3xl lg:text-5xl">
          {title}
        </h2>
      </div>

      {/* ACTIVITIES SLIDER */}
<div className= "mx-auto overflow-hidden">
      <Slider cards={activities} />
      </div>

    </Section>
  );
};

export default NearbyActivities;

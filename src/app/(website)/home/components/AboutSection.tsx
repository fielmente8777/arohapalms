"use client";
import { SectionWithContainer } from "@/components/sectionComponants";
import { ArrowIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";
import GallerySlider from "./slider/Slider";

interface AboutSectionProps {
  title: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
  images: string[];
}

const AboutSection = ({
  title,
  description,
  button,
  images = [],
}: AboutSectionProps) => {
  return (
    <>
      <SectionWithContainer defaultPadding={false} sectionClassName="w-full bg-background-2 pb-8 sm:pb-10 md:pb-0">
        <div className="mx-auto flex flex-col items-center text-center">
          {/* TITLE */}

          <h2
            className="mb-4
            mt-12!
            font-primary
            md:w-[380px]
            lg:w-[400px]
            lg:text-5xl
            font-light
            text-p2
           text-3xl
          "
          >
            {title}
          </h2>

          {/* <div className=" relative w-[304px] aspect-[34/1]">
          <Image
            src="/images/Greek1.png"
            alt=""
            fill
            className="object-contain"
          />
        </div> */}

          <p
            className="mt-6
            w-full
            max-w-full
            md:max-w-[650px]
            lg:max-w-[800px]
            text-xl
            font-normal
            text-[#777777]
          "
          >
            {description}
          </p>
{/* 
          <Link
            href={button.href}
            className="
            group
            mt-7
            inline-flex
            items-center
            gap-2
            border-b
            border-p2
            pb-1
            text-sm
            font-medium
            uppercase
            text-p2
            transition-opacity
            hover:opacity-70
          "
          >
            {button.label}
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link> */}
        </div>
      </SectionWithContainer>
      <div className="bg-background-2 max_screen_width">
        <GallerySlider
          images={images}
          link={{
            label: "ABOUT US",
            href: "/our-story",
          }}
        />
      </div>
    </>
  );
};

export default AboutSection;

"use client";

import { Section } from "@/components/sectionComponants";
import Image from "next/image";

interface ExperienceCard {
  image: string;
  title: string;
  description: string;
}

interface ExperienceGalleryProps {
  heading: string;
  desc: string[];
  cards: ExperienceCard[];
}

const ExperienceGallery = ({
  heading,
  desc,
  cards,
}: ExperienceGalleryProps) => {
  return (
    <>
      <Section className="w-full bg-background-2 py-16 md:py-20">
        <div className="mx-auto w-full max_width px-6">
          {/* HEADING + DESCRIPTION */}
          <div className="mx-auto flex max-w-[850px] flex-col items-center text-center">
            <h2
              className="
              font-primary
              text-[32px]
              font-light
              leading-[1.2]
              text-p2
              md:text-[48px]
            "
            >
              {heading}
            </h2>

            <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-p2/80 md:text-base">
              {desc.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* EXPERIENCE CARDS */}
          <div
            className="
            mt-10
            flex
            gap-2
            overflow-x-auto
            pb-2
            md:mt-12
            md:grid
            md:grid-cols-4
            md:gap-1
            md:overflow-visible
          "
          >
            {cards.map((card, index) => (
              <div
                key={`${card.image}-${index}`}
                className="
                group
                relative
                aspect-[0.64]
                w-[220px]
                shrink-0
                overflow-hidden
                md:w-full
              "
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 220px, 25vw"
                  className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
                />

                {/* OVERLAY */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-black/5
                  transition-colors
                  duration-500
                  group-hover:bg-black/15
                "
                />

                {/* PLAY BUTTON */}
                <button
                  type="button"
                  aria-label={`Play ${card.title}`}
                  className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  md:h-12
                  md:w-12
                "
                >
                  <span
                    className="
                    ml-0.5
                    border-y-[6px]
                    border-y-transparent
                    border-l-[9px]
                    border-l-p2
                  "
                  />
                </button>

                {/* TITLE FROM PAGE DATA */}
                <div
                  className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  bg-gradient-to-t
                  from-black/60
                  to-transparent
                  px-4
                  pb-5
                  pt-12
                "
                >
                  <h3
                    className="
                    text-sm
                    uppercase
                    text-white
                    md:text-base
                  "
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <div className="bg-background-2 max_screen_width overflow-hidden">
        <Image
          src="/images/Greek1.png"
          alt=""
          width={1440}
          height={80}
          className="h-auto w-full object-cover"
        />
      </div>
    </>
  );
};

export default ExperienceGallery;

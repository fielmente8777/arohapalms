"use client";

import { Section } from "@/components/sectionComponants";
import { LazyLoadedVideo } from "@/components/Video";
import Image from "next/image";

interface ExperienceCard {
  image: string;
  video?: string;
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
      <Section className="w-full bg-background-2 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-20">
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

            <div className="mt-5 flex flex-col gap-4 text-base leading-relaxed text-[#777777]">
              {desc.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* EXPERIENCE CARDS */}
          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-4
              md:mt-12
              md:grid-cols-4
              md:gap-1
            "
          >
            {cards.map((card, index) => (
              <div
                key={`${card.image}-${index}`}
                className={`
                  group
                  relative
                  aspect-[0.64]
                  w-full
                  overflow-hidden
                  ${index >= 2 ? "hidden md:block" : ""}
                `}
              >
                {card.video ? (
                  <LazyLoadedVideo src={card.video} poster={card.image} />
                ) : (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                )}

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    z-10
                    bg-black/10
                    transition-colors
                    duration-500
                    group-hover:bg-black/20
                  "
                />

                {/* PLAY BUTTON ICON */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    z-20
                    flex
                    h-12
                    w-12
                    md:h-14
                    md:w-14
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-white
                  "
                >
                  <span
                    className="
                      ml-1
                      border-y-[6px]
                      md:border-y-[7px]
                      border-y-transparent
                      border-l-[10px]
                      md:border-l-[12px]
                      border-l-p2
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* GREEK DIVIDER */}
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

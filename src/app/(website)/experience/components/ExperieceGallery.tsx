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
                className="
                  group
                  relative
                  aspect-[0.64]
                  w-full
                  overflow-hidden
                "
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
                    bg-black/5
                    transition-colors
                    duration-500
                    group-hover:bg-black/15
                  "
                />

                {/* TITLE */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-20
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

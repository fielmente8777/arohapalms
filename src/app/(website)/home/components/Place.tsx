"use client";

import React from "react";
import { Section } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";

interface StayCard {
  location: string;
  description: string;
  image: string;
  secondaryImage: string;
  href: string;
  showPlay: boolean;
  villas?: { label: string; href: string; newLine?: boolean }[];
}

interface StayWithUsProps {
  tag: string;
  title: string;
  cards: StayCard[];
}

const Place = ({ tag, title, cards }: StayWithUsProps) => {
  return (
    <Section className="bg-background-2 drop-shadow-2xl pb-12 sm:pb-16 md:pb-24 lg:pb-28">
      <div className="mx-auto max_screen_width">
        {/* HEADING */}
        <div
          className="
            mx-auto
            flex
            max-w-[320px]
            md:max-w-[600px]
            lg:max-w-[850px]
            flex-col
            items-center
            
            pb-12
            text-center
            lg:pb-[52px]
          "
        >
          {/* TAG */}
          {/* <p
            className="
              text-[10px]
              uppercase
              text-blue
              md:text-[12px]
            "
          >
            {tag}
          </p> */}

          {/* TITLE */}
          <h2
            className="
              mt-3
              max-w-3xl
              text-[28px]
              font-light
              text-p2
              md:text-[30px]
              lg:text-[48px]
            "
          >
            {title}
          </h2>
        </div>

        {/* LOCATION CARDS */}
        <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-4 px-4 sm:px-6 md:px-8">
          {cards.map((card) => (
            <Link
              key={card.location}
              href={card.href}
              className="
                group
                relative
                aspect-[4/3]
                sm:aspect-[5/3]
                md:aspect-[4/3]
                lg:aspect-[6/5]
                w-full
                overflow-hidden
                rounded-none
              "
            >
              {/* MAIN IMAGE */}
              <Image
                src={card.image}
                alt={card.location}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* SECONDARY IMAGE */}
              {/* <div
                className="
                  absolute
                  bottom-6
                  right-6
                  z-10
                  h-[110px]
                  w-[85px]
                  overflow-hidden
                  md:bottom-7
                  md:right-7
                  md:h-[150px]
                  md:w-[115px]
                "
              >
                <Image
                  src={card.secondaryImage}
                  alt={`${card.location} room`}
                  fill
                  sizes="115px"
                  className="object-cover"
                />
              </div> */}

              {/* DARK OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/10
                  transition
                  duration-500
                  group-hover:bg-black/20
                "
              />

              {/* BOTTOM TO TOP GRADIENT COVERING TEXT AREA */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-[75%]
                  bg-gradient-to-t
                  from-black/85
                  via-black/55
                  to-transparent
                  pointer-events-none
                "
              />

              {/* CONTENT */}
              <div
                className="
                  absolute
                  bottom-7
                  left-5
                  right-5
                  z-10
                  max-w-[480px]
                  sm:bottom-8
                  sm:left-6
                  md:bottom-8
                  md:left-6
                  lg:bottom-8
                  lg:left-7
                  text-white
                  flex
                  flex-col
                  justify-between
                  min-h-[220px]
                  md:min-h-[240px]
                "
              >
                {/* TOP PORTION: TITLE, DESCRIPTION & VILLA PILLS */}
                <div>
                  <h3
                    className="
                      mt-2
                      text-xl
                      font-light
                      md:text-[24px]
                      lg:text-[30px]
                    "
                  >
                    {card.location}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-xs
                      font-light
                      text-white/90
                      md:mt-2
                      md:text-sm
                      line-clamp-2
                    "
                  >
                    {card.description}
                  </p>

                  {/* VILLA PILLS FOR DIRECT INTERNAL LINKING */}
                  {card.villas && card.villas.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5 md:gap-2" onClick={(e) => e.stopPropagation()}>
                      {card.villas.map((v) => (
                        <React.Fragment key={v.href}>
                          {v.newLine && <div className="basis-full h-0" />}
                          <Link
                            href={v.href}
                            className="rounded-full border border-white/40 bg-black/35 backdrop-blur-md px-3 py-1 text-xs md:text-sm font-normal text-white transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white active:scale-95 shadow-sm"
                          >
                            {v.label}
                          </Link>
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>

                {/* BOTTOM PORTION: EXPLORE ALL PINNED AT BOTTOM */}
                <div className="pt-3">
                  <span
                    className="
                      inline-block
                      border-b
                      border-white
                      pb-0.5
                      text-xs
                      font-normal
                      tracking-widest
                      uppercase
                      lg:text-sm
                    "
                  >
                    Explore All
                  </span>
                </div>
              </div>

              {/* PLAY BUTTON */}
              {card.showPlay && (
                <button
                  type="button"
                  aria-label={`Play ${card.location}`}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    z-20
                    flex
                    h-12
                    w-12
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                  "
                >
                  <span
                    className="
                      ml-1
                      border-y-[6px]
                      border-y-transparent
                      border-l-[9px]
                      border-l-p2
                    "
                  />
                </button>
              )}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Place;

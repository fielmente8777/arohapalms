"use client";

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
        <div className="grid w-full grid-cols-1 gap-5 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-0 lg:px-0">
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

              {/* BOTTOM GRADIENT */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-[55%]
                  bg-gradient-to-t
                  from-black/60
                  to-transparent
                "
              />

              {/* CONTENT */}
              <div
                className="
                  absolute
                  bottom-9
                  left-5
                  right-5
                  z-10
                  max-w-[320px]
                  sm:bottom-10
                  sm:left-6
                  md:bottom-8
                  md:left-6
                  md:max-w-[400px]
                  lg:bottom-7
                  lg:left-7
                  lg:max-w-[430px]
                  text-white
                "
              >
                {/* <p
                  className="
                    text-[10px]
                    uppercase
                    text-white/80
                  "
                >
                  {tag}
                </p> */}

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
                    mt-2
                    text-xs
                    font-light
                    text-white/90
                    md:mt-3
                    md:text-sm
                  "
                >
                  {card.description}
                </p>

                <div className="mt-3 lg:mt-4">
                  <span
                    className="
                      inline-block
                      border-b
                      border-white
                      pb-0.5
                      text-xs
                      font-medium
                      tracking-widest
                      uppercase
                      lg:text-sm
                    "
                  >
                    Explore
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

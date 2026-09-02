"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/utils/icons";
import { Section, SectionWithContainer } from "@/components/sectionComponants";

interface StayCard {
  location: string;
  description: string;
  image: string;
  secondaryImage: string;
  href: string;
  showPlay?: boolean;
}

interface StayWithUsProps {
  tag: string;
  title: string;
  cards: StayCard[];
}

const StayWithUs = ({ tag, title, cards }: StayWithUsProps) => {
  return (
    <Section className="w-full bg-background-2 px-6 md:px-0">
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <div className="mb-10">
          <p
            className="text-xs
           md:text-lg uppercase  text-p2"
          >
            {tag}
          </p>

          {/* DECORATIVE DESIGN */}
          <div className="relative mt-1 h-[9px] w-[120px]">
            <Image
              src="/home/design4.png"
              alt=""
              fill
              className="object-cover object-left"
            />
          </div>

          <h2 className="mt-3 max-w-5xl font-primary text-3xl font-light text-p3 md:text-[48px]">
            {title}
          </h2>
        </div>

        {/* CARDS */}
        <div className="flex flex-col gap-10 md:gap-14">
          {cards.map((card, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={`${card.location}-${index}`}
                className="grid grid-cols-1 gap-5 md:grid-cols-5 md:items-start"
              >
                {/* LARGE IMAGE */}
                <div
                  className={`relative overflow-hidden md:col-span-3 ${
                    reverse ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="relative aspect-[909/665] w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.location}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover"
                    />

                    {/* ARCH BORDER */}
                    <div
                      className="
    absolute
    top-2
    right-2
    bottom-0
    left-2
    rounded-t-[140px]
    border-t
    border-x
    border-white/80
    md:top-3
    md:right-3
    md:left-3
    md:rounded-t-[190px]
  "
                    />
                    {/* BLUE CORNER */}
                    {/* <div className="absolute bottom-0 right-0 flex h-9 w-9 items-end justify-end bg-background-2">
                      <span className="flex h-7 w-7 items-center justify-center bg-white text-lg font-semibold text-transparent">
                        B.
                      </span>
                    </div> */}
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className={`flex flex-col gap-4 md:col-span-2 ${
                    reverse ? "md:order-1" : "md:order-2"
                  }`}
                >
                  {/* SECONDARY IMAGE */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={card.secondaryImage}
                      alt={card.location}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />

                    {/* PLAY BUTTON */}
                    {card.showPlay && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-p3 shadow-md">
                          <span className="ml-0.5 text-sm">▶</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* LOCATION */}
                  <h3 className="font-primary text-xl font-normal text-p3 md:text-[32px]">
                    {card.location}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="max-w-[380px] text-xs leading-relaxed text-light md:text-lg">
                    {card.description}
                  </p>

                  {/* EXPLORE */}
                  <Link
                    href={card.href}
                    className="group flex w-fit items-center gap-2 border-b border-p2 pb-1 text-[10px] md:text-sm font-medium uppercase text-p2"
                  >
                    Explore {card.location}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default StayWithUs;

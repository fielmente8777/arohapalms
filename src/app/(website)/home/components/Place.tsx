"use client";

import { Section } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";

interface LocationCard {
  title: string;
  image: string;
  href: string;
}

interface LocationsProps {
  title: string;
  descriptions: string[];
  locations: LocationCard[];
}

const Place = ({ title, descriptions, locations }: LocationsProps) => {
  return (
    <Section className="bg-background-2">
      <div className="mx-auto w-full">
     
        <div
          className="
            mx-auto
            flex
            max-w-[850px]
            flex-col
            items-center
            px-6
            pb-12
            pt-16
            text-center
            md:pb-[52px]
            md:pt-[62px]
          "
        >
          {/* TITLE */}
          <h2
            className="
              max-w-3xl
              text-[28px]
              font-light
              
              text-[#1670B7]
              md:text-[48px]
             
            "
          >
            {title}
          </h2>

          {/* DESCRIPTIONS */}
          <div className="mt-6 space-y-4">
            {descriptions.map((description, index) => (
              <p
                key={index}
                className="
                  text-[13px]
                  
                  text-[#777777]
                  md:text-[20px]
                 
                "
              >
                {description}
              </p>
            ))}
          </div>
        </div>

        {/* ================= LOCATION CARDS ================= */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          {locations.map((location) => (
            <Link
              key={location.title}
              href={location.href}
              className="
  group
  relative
  aspect-[6/5]
  w-full
  overflow-hidden
"
            >
              {/* IMAGE */}
              <Image
                src={location.image}
                alt={location.title}
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
                  h-[45%]
                  bg-gradient-to-t
                  from-black/45
                  to-transparent
                "
              />

              {/* CONTENT */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  z-10
                  text-white
                  md:bottom-7
                  md:left-7
                "
              >
                <h3
                  className="
                    text-[20px]
                    font-medium
                    leading-none
                    md:text-[22px]
                  "
                >
                  {location.title}
                </h3>

                <span
                  className="
                    mt-2
                    block
                    text-[9px]
                    uppercase
                    tracking-[0.08em]
                  "
                >
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Place;

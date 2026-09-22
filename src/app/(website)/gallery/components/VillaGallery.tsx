"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface VillaGalleryProps {
  villas: {
    name: string;
    image: string;
    description: string;
  }[];
}

const VillaGallery = ({ villas }: VillaGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVilla = villas[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? villas.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === villas.length - 1 ? 0 : prev + 1
    );
  };

  if (!activeVilla) return null;

  return (
    <section className="bg-[#fefcf4] py-12 md:py-16">
      <div className="max_width">

        {/* LOCATION BUTTONS */}
        <div className="flex justify-center gap-3 md:gap-4">
          <button
            type="button"
            className="
              inline-flex
              items-center
              gap-2
              bg-[#152536]
              px-5
              py-3
              text-[10px]
              uppercase
              tracking-[2px]
              text-white
              md:px-7
            "
          >
            <MapPin size={11} strokeWidth={1.5} />
            Mandrem
          </button>

          <button
            type="button"
            className="
              inline-flex
              items-center
              gap-2
              border
              border-[#bdbdbd]
              bg-transparent
              px-5
              py-3
              text-[10px]
              uppercase
              tracking-[2px]
              text-[#999]
              md:px-7
            "
          >
            <MapPin size={11} strokeWidth={1.5} />
            Pilerne
          </button>
        </div>

        {/* VILLA TABS */}
        <div className="mt-7 overflow-x-auto">
          <div className="flex min-w-max justify-center gap-8 md:gap-10">
            {villas.map((villa, index) => (
              <button
                key={villa.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`
                  relative
                  pb-3
                  text-[9px]
                  uppercase
                  tracking-[1.5px]
                  transition
                  ${
                    activeIndex === index
                      ? "text-[#1976b9]"
                      : "text-[#c2c2c2]"
                  }
                `}
              >
                {villa.name}

                {activeIndex === index && (
                  <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#1976b9]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* PROGRESS LINE */}
        <div className="mt-5 h-[5px] w-full overflow-hidden rounded-full border border-[#d5d5d5]">
          <div
            className="h-full rounded-full bg-[#d3a04c] transition-all duration-500"
            style={{
              width: `${((activeIndex + 1) / villas.length) * 100}%`,
            }}
          />
        </div>

        {/* IMAGE SLIDER */}
        <div className="relative mt-8 flex items-center justify-center">

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous villa"
            className="
              absolute
              left-0
              z-10
              flex
              h-10
              w-10
              items-center
              justify-center
              text-[#d3a04c]
              md:-left-2
            "
          >
            <ChevronLeft
              size={24}
              strokeWidth={1.2}
            />
          </button>

          {/* IMAGE */}
          <div className="relative h-[300px] w-[82%] overflow-hidden md:h-[365px] md:w-[78%] lg:h-[390px] lg:w-[70%]">
            <Image
              key={activeVilla.image}
              src={activeVilla.image}
              alt={activeVilla.name}
              fill
              sizes="(max-width: 768px) 82vw, 70vw"
              className="object-cover"
            />
          </div>

          {/* NEXT */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next villa"
            className="
              absolute
              right-0
              z-10
              flex
              h-10
              w-10
              items-center
              justify-center
              text-[#d3a04c]
              md:-right-2
            "
          >
            <ChevronRight
              size={24}
              strokeWidth={1.2}
            />
          </button>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-[680px] text-center">
          <p
            className="
              text-[13px]
              leading-[1.8]
              text-[#777]
              md:text-[14px]
            "
          >
            {activeVilla.description}
          </p>
        </div>

        {/* CONTACT */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="
              border-b
              border-[#1976b9]
              pb-1
              text-[9px]
              uppercase
              tracking-[1px]
              text-[#1976b9]
            "
          >
            Contact
          </Link>
        </div>

      </div>
    </section>
  );
};

export default VillaGallery;
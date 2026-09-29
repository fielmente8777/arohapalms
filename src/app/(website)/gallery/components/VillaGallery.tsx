"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import GallerySlider from "../../home/components/slider/Slider";
import { Section } from "@/components/sectionComponants";

interface Villa {
  name: string;
  images: string[];
  description: string;
}

interface VillaGalleryProps {
  mandrem: Villa[];
  pilerne: Villa[];
}

const VillaGallery = ({ mandrem, pilerne }: VillaGalleryProps) => {
  const [location, setLocation] = useState<"Mandrem" | "Pilerne">("Mandrem");

  const [activeVillaIndex, setActiveVillaIndex] = useState(0);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const villas = useMemo(
    () => (location === "Mandrem" ? mandrem : pilerne),
    [location, mandrem, pilerne]
  );

  const activeVilla = villas[activeVillaIndex];

  if (!activeVilla) return null;

  const handleLocationChange = (newLocation: "Mandrem" | "Pilerne") => {
    setLocation(newLocation);
    setActiveVillaIndex(0);
    setActiveImageIndex(0);
  };

  const handleVillaChange = (index: number) => {
    setActiveVillaIndex(index);
    setActiveImageIndex(0);
  };

  const totalImages = activeVilla.images.length;

  const currentImage = totalImages > 0 ? activeImageIndex % totalImages : 0;

  const totalAllImages = villas.reduce((sum, v) => sum + v.images.length, 0);

  const imagesBefore = villas
    .slice(0, activeVillaIndex)
    .reduce((sum, v) => sum + v.images.length, 0);

  const progressPercent =
    totalAllImages > 0
      ? ((imagesBefore + currentImage + 1) / totalAllImages) * 100
      : 0;

  // // desktop: pehle jaisa
  // const progressPercent =
  //   villas.length > 0 ? ((activeVillaIndex + 1) / villas.length) * 100 : 0;

  // // mobile: image based
  // const totalImages = activeVilla.images.length;
  // const mobileProgressPercent =
  //   totalImages > 0 ? ((activeImageIndex + 1) / totalImages) * 100 : 0;

  return (
    <Section className="w-full overflow-hidden bg-background-2 py-12 md:py-16">
      <div className="mx-auto w-full ">
        <div className="flex justify-center gap-3 md:gap-4">
          {(["Mandrem", "Pilerne"] as const).map((item) => {
            const isActive = location === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => handleLocationChange(item)}
                className={`
          group
          inline-flex
          items-center
          gap-2
          lg:px-5
          lg:py-3
          py-2
          px-3
          text-sm
          lg:text-lg
          uppercase
          transition
          md:px-7
          ${
            isActive
              ? "bg-[#152536] text-white"
              : "border border-[#bdbdbd] bg-transparent text-[#999]"
          }
        `}
              >
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className={`
            transition-colors
            ${isActive ? "text-[#CA9E55]" : "text-[#999]"}
          `}
                />

                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-7 overflow-x-auto scrollbar-hide">
          <div className="mx-auto flex w-max min-w-full justify-center gap-8 px-6 md:gap-14">
            {villas.map((villa, index) => (
              <button
                key={villa.name}
                type="button"
                onClick={() => handleVillaChange(index)}
                className={`
                  relative
                  
                  pb-3
                  text-sm
                  uppercase
                  
                  transition
                  ${
                    activeVillaIndex === index
                      ? "text-[#1976b9]"
                      : "text-[#c2c2c2]"
                  }
                `}
              >
                {villa.name}

                {activeVillaIndex === index && (
                  <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#1976b9]" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-3 w-full max-w-[1100px] px-6 md:px-12">
          <div className="relative h-[8px] w-full rounded-full bg-[#e8e4dc]">
            <div
              className="absolute left-0 top-[2px] h-[5px] rounded-full bg-[#CA9E55] transition-all duration-500 ease-out"
              style={{
                width: `${progressPercent}%`,
              }}
            />
          </div>
          
        </div>

        {/* VILLA IMAGE SLIDER */}
        <div className="mt-8 max_screen_width">
          <GallerySlider
            key={`${location}-${activeVillaIndex}`}
            images={activeVilla.images}
            onSlideChange={setActiveImageIndex}
          />
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto max-md:mt-18 max-lg:mt-10 lg:mt-10 max-w-[680px] px-6 text-center">
          <p className="text-[13px] leading-[1.8] text-[#777] md:text-xl">
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
              text-sm
              uppercase
              text-[#1976b9]
            "
          >
            Contact
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default VillaGallery;

"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
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

  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragMoved, setDragMoved] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollLeft = 0;
    }
  };

  const handleVillaChange = (index: number) => {
    if (dragMoved) return;
    setActiveVillaIndex(index);
    setActiveImageIndex(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!tabsContainerRef.current) return;
    setIsDragging(true);
    setDragMoved(false);
    setStartX(e.pageX - tabsContainerRef.current.offsetLeft);
    setScrollLeft(tabsContainerRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !tabsContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 4) {
      setDragMoved(true);
    }
    tabsContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const totalImages = activeVilla.images.length;
  const currentImage = totalImages > 0 ? activeImageIndex % totalImages : 0;

  // Progress strictly based on the current active villa's images (1 to total)
  const progressPercent =
    totalImages > 0 ? ((currentImage + 1) / totalImages) * 100 : 0;

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

        {/* TABS CONTAINER - Aligned strictly with the progress bar width */}
        <div className="mx-auto mt-9 sm:mt-10 md:mt-7 w-full max-w-[1100px] px-4 sm:px-6 md:px-12">
          <div
            ref={tabsContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className={`overflow-x-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:!w-0 [&::-webkit-scrollbar]:!h-0 ${
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
          >
            <div
              className={`mx-auto flex w-max min-w-full items-center ${
                location === "Pilerne" ? "justify-center" : "justify-start"
              } gap-8 md:gap-14 select-none`}
            >
              {villas.map((villa, index) => (
                <button
                  key={villa.name}
                  type="button"
                  onClick={() => handleVillaChange(index)}
                  className={`
                    relative
                    shrink-0
                    whitespace-nowrap
                    pb-3
                    text-sm
                    uppercase
                    cursor-pointer
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
        </div>

        <div className="mx-auto mt-5 sm:mt-6 md:mt-3 w-full max-w-[1100px] px-4 sm:px-6 md:px-12">
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
        <div className="mt-4 sm:mt-5 md:mt-8 max_screen_width">
          <GallerySlider
            key={`${location}-${activeVillaIndex}`}
            images={activeVilla.images}
            title={activeVilla.name}
            onSlideChange={setActiveImageIndex}
          />
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-4 md:mt-8 lg:mt-10 max-w-[680px] px-4 md:px-6 text-center">
          <p className="text-base leading-relaxed text-[#777] md:text-xl">
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

"use client";

import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { MapIcon, Plane } from "@/utils/icons";
import { ReactNode } from "react";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Navigation } from "swiper/modules";

interface NearbyPlacesProps {
  tagline: string;
  title: string;
  cta: {
    label: string;
    href: string;
  };
  places: {
    title: string;
    duration: string;
    icon: string;
  }[];
}

const NearbyPlaces = ({ tagline, title, cta, places }: NearbyPlacesProps) => {
  return (
    <SectionWithContainer sectionClassName="w-full border-y-2 border-primary bg-background-dark mb-10">
      <div className="">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-lg uppercase text-primary">{tagline}</p>

            <h2 className="font-instrument text-3xl text-white lg:text-4xl">
              {title}
            </h2>

            {cta && <LinkButton
              href={cta.href}
              label={cta.label}
              whatsAppIcon
              villa={title}
              className="mt-5 justify-center rounded-sm border-none bg-primary px-6 text-white uppercase max-lg:hidden"
            />}
          </div>

          {/* Right - Nearby Places Slider */}
          <div className="relative pr-12 w-full xl:aspect-[4/1.25] aspect-[4/2]">
            <SwiperCarousel
              data={places}
              slidesPerView={3}
              spaceBetween={0}
              loop
              modules={[Navigation]}
              direction="vertical"
              navigation={{
                nextEl: ".nearby-next",
                prevEl: ".nearby-prev",
              }}
              className="w-full h-full overflow-hidden max-lg:border-b lg:border-t border-white/35"
              renderSlide={(place) => (
                <div className="flex items-center justify-between border-b border-white/35 py-6 ">
                  <div className="flex items-center gap-5">
                    <span className="text-primary">
                      {place.icon === "airplane" ? <Plane /> : <MapIcon />}
                    </span>

                    <span className="text-base text-white lg:text-lg">
                      {place.title}
                    </span>
                  </div>

                  <span className="text-base text-white lg:text-lg">
                    {place.duration}
                  </span>
                </div>
              )}
            />

            {/* Up / Down buttons */}
            <div className="absolute right-0 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-6">
              <button
                type="button"
                className="nearby-prev text-3xl text-primary transition hover:scale-110"
                aria-label="Previous place"
              >
                ↑
              </button>

              <button
                type="button"
                className="nearby-next text-3xl text-primary transition hover:scale-110"
                aria-label="Next place"
              >
                ↓
              </button>
            </div>
          </div>
            {cta && <LinkButton
              href={cta.href}
              label={cta.label}
              whatsAppIcon
              villa={title}
              className="mt-5 justify-center rounded-sm border-none bg-primary px-6 text-white uppercase lg:hidden"
            />}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default NearbyPlaces;

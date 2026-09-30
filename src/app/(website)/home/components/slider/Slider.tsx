"use client";

import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";

interface GallerySliderProps {
  images: string[];
  link?: {
    label: string;
    href: string;
  };
  onSlideChange?: (index: number) => void;
}

const GallerySlider: React.FC<GallerySliderProps> = ({
  images,
  link,
  onSlideChange,
}) => {
  images = images.length > 3 ? images : [...images, ...images];
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;
  return (
    <Section defaultPadding={false} className="w-full py-2 md:py-16">
      <div className="relative ">
        <SwiperCarousel
          data={images}
          modules={[Navigation]}
          navigation={{
            nextEl: ".gallery-slider-next",
            prevEl: ".gallery-slider-prev",
          }}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          slidesPerView={1.4}
          spaceBetween={16}
          loop
          centeredSlides={true}
          breakpoints={{
            768: {
              slidesPerView: 1.55,
              spaceBetween: 12,
            },
            1032: {
              slidesPerView: 1.7,
              spaceBetween: 16,
            },
          }}
          speed={900}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            onSlideChange?.(swiper.realIndex);
          }}
          className="w-full"
          renderSlide={(src, index) => (
            <div
              className={`w-full relative ${
                index === activeIndex
                  ? "md:aspect-4/2.5 aspect-3/3"
                  : "md:aspect-[4/2.2] aspect-4/3.5"
              }`}
            >
              <Image src={src} alt="Image" fill className="object-cover" />
            </div>
          )}
        />
        <div className="relative mt-4 md:-mt-8 max-md:mt-4 max-lg:-mt-10 xl:-mt-11 z-20 pointer-events-none">
          <div
            className="mx-auto
              flex
              w-full
              max-w-[310px]
              md:max-w-[650px]
              lg:max-w-[850px]
              xl:max-w-[1200px]
              items-center
              justify-between
              pointer-events-auto
              "
          >
            <button className="gallery-slider-prev flex items-center justify-center  ">
              <BtnIcon />
            </button>
            <span className="hidden text-xs text-[#152536] max-lg:block">
              {activeIndex + 1} - {total}
            </span>
            <button className="gallery-slider-next flex items-center justify-center rotate-180">
              <BtnIcon />
            </button>
          </div>
        </div>
      </div>
      {link && (
        <LinkButton
          href={link.href}
          label={link.label}
          className="mx-auto mt-5 mb-2 md:-mb-10 md:mt-10 lg:mt-18
          xl:mt-16  border-0! border-b! border-p2! text-p2"
        />
      )}
    </Section>
  );
};

export default GallerySlider;

export const BtnIcon = () => (
  <svg
    width={65}
    height={15}
    viewBox="0 0 65 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.292892 8.07112C-0.0976334 7.6806 -0.0976334 7.04743 0.292892 6.65691L6.65685 0.292946C7.04738 -0.0975785 7.68054 -0.0975785 8.07107 0.292946C8.46159 0.68347 8.46159 1.31664 8.07107 1.70716L2.41422 7.36401L8.07107 13.0209C8.46159 13.4114 8.46159 14.0446 8.07107 14.4351C7.68054 14.8256 7.04738 14.8256 6.65685 14.4351L0.292892 8.07112ZM65 7.36401V8.36401H1V7.36401V6.36401H65V7.36401Z"
      fill="#CA9E55"
    />
  </svg>
);

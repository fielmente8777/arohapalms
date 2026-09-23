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
}

const GallerySlider: React.FC<GallerySliderProps> = ({ images, link }) => {
  images = images.length > 3 ? images : [...images, ...images];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Section className="w-full">
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
          slidesPerView={1}
          spaceBetween={20}
          loop
          centeredSlides={true}
          breakpoints={{
            768: {
              slidesPerView: 1.55,
              spaceBetween: 12,
            },
          }}
          speed={900}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
          renderSlide={(src, index) => (
            <div
              className={`w-full relative ${
                index === activeIndex
                  ? "md:aspect-4/2.5 aspect-4/3"
                  : "md:aspect-[4/2.2] aspect-4/3"
              }`}
            >
              <Image src={src} alt="Image" fill className="object-cover" />
            </div>
          )}
        />
        <div className="relative -mt-16 z-20 pointer-events-none">
          <div
            className="mx-auto
              flex
              w-full
              max-w-[1150px]
              items-center
              justify-between
              pointer-events-auto
              "
          >
            <button className="gallery-slider-prev flex items-center justify-center  ">
              <BtnIcon />
            </button>
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
          className="mx-auto mt-18! border-0! border-b! border-p2! text-p2"
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

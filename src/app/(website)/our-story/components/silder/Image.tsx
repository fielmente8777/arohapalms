

import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";

interface GallerySliderProps {
  images: string[];
  link?: {
    label: string;
    href: string;
  };
}

const GallerySlider: React.FC<GallerySliderProps> = ({ images, link }) => {
  images = images.length > 2 ? images : [...images, ...images];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section defaultPadding={false} >
      <div className="relative  ">
        <div className="flex items-start gap-6">
          {/* LEFT IMAGE */}
          <div className="hidden lg:block ">
            <div className="relative h-[528px] w-[241px] overflow-hidden">
              <Image
                src={
                  images[
                    activeIndex === 0 ? images.length - 1 : activeIndex - 1
                  ]
                }
                alt="Previous image"
                fill
                className="object-cover"
              />
            </div>

            {/* PREVIOUS BUTTON */}
            <div className="mt-2 flex w-[241px] justify-end">
              <button
                className="gallery-slider-prev flex items-center justify-center"
                type="button"
              >
                <BtnIcon />
              </button>
            </div>
          </div>

          {/* MAIN SWIPER */}
          <div className="md:w-[676px]">
            <SwiperCarousel
              data={images}
              modules={[Navigation]}
              navigation={{
                nextEl: ".gallery-slider-next",
                prevEl: ".gallery-slider-prev",
              }}
              slidesPerView={1}
              spaceBetween={0}
              loop
              centeredSlides={false}
              speed={900}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full"
              renderSlide={(src) => (
                <div className="relative h-[568px] w-full">
                  <Image src={src} alt="Image" fill className="object-cover" />
                </div>
              )}
            />
          </div>
        </div>
      </div>
        <div className="block w-full lg:hidden">
          <SwiperCarousel
            data={images}
            modules={[Navigation]}
            navigation={{
              nextEl: ".gallery-mobile-next",
              prevEl: ".gallery-mobile-prev",
            }}
            slidesPerView={1}
            spaceBetween={0}
            loop
            speed={700}
            onSlideChange={(swiper) =>
              setActiveIndex(swiper.realIndex)
            }
            className="w-full"
            renderSlide={(src) => (
              <div className="relative aspect-[442/664] w-full overflow-hidden">
                <Image
                  src={src}
                  alt="Image"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          />

          {/* MOBILE NAVIGATION */}
          <div className="mt-3 flex w-full items-center justify-between">
            <button
              type="button"
              className="gallery-mobile-prev"
              aria-label="Previous image"
            >
              <BtnIcon />
            </button>

            <button
              type="button"
              className="gallery-mobile-next rotate-180"
              aria-label="Next image"
            >
              <BtnIcon />
            </button>
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


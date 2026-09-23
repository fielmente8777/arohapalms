"use client";

import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";

interface Activity {
  image: string;
  title: string;
  description: string;
}

interface SliderProps {
  cards: Activity[];
}

const Slider: React.FC<SliderProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderCards = cards.length > 3 ? cards : [...cards, ...cards];

  return (
    <Section>
      <div className="relative">
        <SwiperCarousel
          data={sliderCards}
          modules={[Navigation]}
          navigation={{
            nextEl: ".nearby-section-next",
            prevEl: ".nearby-section-prev",
          }}
          slidesPerView={1.5}
          spaceBetween={12}
          loop
          centeredSlides={true}
          breakpoints={{
            768: {
              slidesPerView: 2.45,
              spaceBetween: 16,
            },
          }}
          speed={900}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
          renderSlide={(card, index) => (
            <div className="relative flex h-[650px] w-full items-start">
              <div
                className={`
                relative
                w-full
                overflow-hidden
                transition-all
                duration-700
                ease-in-out
                ${
                  index === activeIndex
                    ? "md:aspect-5/6 aspect-4/3"
                    : "md:aspect-[5/5] aspect-4/3"
                }
              `}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="
                  (max-width: 768px) 70vw,
                  368px
                "
                  className="object-cover"
                />

                {/* IMAGE OVERLAY */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-black/5
                "
                />

                {/* BOTTOM GRADIENT */}
                {/* TITLE */}
                <div
                  className="
    absolute
    bottom-0
    left-0
    z-10
    flex
    h-10
    w-full
    items-center
    justify-center
    bg-white/40
    px-3
  "
                >
                  <span
                    className="
      text-center
      text-xs
      font-medium
      uppercase
      tracking-wide
      text-white
      md:text-sm
    "
                  >
                    {card.title}
                  </span>
                </div>
              </div>
            </div>
          )}
        />

        {/* NAVIGATION */}
        <div className="relative z-20 -mt-20">
          <div
            className="
              mx-auto
              flex
              w-full
              max-w-[700px]
              items-center
              justify-between
            "
          >
            <button
              type="button"
              aria-label="Previous"
              className="
                nearby-section-prev
                flex
                
                items-center
                justify-center
              "
            >
              <BtnIcon />
            </button>

            <button
              type="button"
              aria-label="Next"
              className="
                nearby-section-next
                flex
                
                rotate-180
                items-center
                justify-center
              "
            >
              <BtnIcon />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Slider;

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

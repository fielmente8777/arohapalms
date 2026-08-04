"use client";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { ExperienceSectionProps } from "../ExperienceSection";
import ExperienceCard from "../cards/ExperienceCard";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
const ExperienceSlider: React.FC<{
  cards: ExperienceSectionProps["experiences"];
}> = ({ cards }) => {
  cards = cards.length < 5 ? [...cards, ...cards] : cards;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="relative md:aspect-[4/1.78] w-full">
        <SwiperCarousel
          data={cards}
          slidesPerView={1}
          spaceBetween={20}
          loop
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".experience-next",
            prevEl: ".experience-prev",
          }}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          swiperSlideClassName=""
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          renderSlide={(card, index) => (
            <ExperienceCard {...card} active={activeIndex} index={index || 0} />
          )}
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <button className="experience-prev text-2xl">
          <GoArrowLeft />
        </button>
        <button className="experience-next text-2xl">
          <GoArrowRight />
        </button>
      </div>
    </>
  );
};

export default ExperienceSlider;

export const Btn = ({ props }: { props?: React.SVGProps<SVGSVGElement> }) => (
  <svg
    width={8}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.975 16L8 14.824 2.05 8 8 1.176 6.975 0 0 8l6.975 8z"
      fill="#1F1F1F"
    />
  </svg>
);

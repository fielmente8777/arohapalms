"use client";

import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

interface Activity {
  image: string;
  title: string;
  description: string;
}

const NearbyActivitiesSlider: React.FC<{
  cards: Activity[];
}> = ({ cards }) => {
  const sliderCards = cards.length < 5 ? [...cards, ...cards] : cards;

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="relative w-full mt-12 md:h-[780px]">
        <SwiperCarousel
          data={sliderCards}
          slidesPerView={1}
          spaceBetween={20}
          loop
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".nearby-next",
            prevEl: ".nearby-prev",
          }}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          swiperSlideClassName=""
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          renderSlide={(card, index) => {
            const isCenter = (index || 0) === activeIndex;

            return (
              <div className="flex h-full flex-col items-center text-center">
                {/* IMAGE */}

                <div
                  className={`relative w-full overflow-hidden rounded-lg aspect-square transition-all duration-200 ease-in-out ${
                    isCenter ? "md:aspect-4/5.5" : "md:aspect-[4/5.1] md:mt-5!"
                  }`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* TITLE */}
                <div className="px-3 py-3">
                  <p className="text-[10px] uppercase text-white/90 md:text-base">
                    {card.title}
                  </p>
                </div>

                {/* DESCRIPTION */}
                <p className="max-w-[260px] py-4 text-xs text-white/75 md:text-lg">
                  {card.description}
                </p>
              </div>
            );
          }}
        />
      </div>

      {/* ARROWS */}
      <div className="flex h-[50px] items-center justify-center gap-4">
        <button
          className="nearby-prev text-2xl text-white"
          aria-label="Previous"
        >
          <GoArrowLeft />
        </button>

        <button className="nearby-next text-2xl text-white" aria-label="Next">
          <GoArrowRight />
        </button>
      </div>
    </>
  );
};

export default NearbyActivitiesSlider;

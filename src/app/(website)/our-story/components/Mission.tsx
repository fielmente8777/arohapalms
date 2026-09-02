"use client";

import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { BtnNextIcon, BtnPrevIcon } from "@/utils/icons";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface MissionProps {
  title: string;
  intro: string;
  description: string[];
  images: string[];
}

const Mission = ({ title, intro, description, images }: MissionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-white">
      <div className="max_width max-w-[950px] mx-auto">
        <div className="text-center">
          <h2 className="text-[54px] text-blue mb-5">{title}</h2>

          <p className="max-w-[760px] mx-auto text-xl leading-8 text-[#555]">
            {intro}
          </p>

          <div className="max-w-6xl mx-auto mt-16 space-y-10">
            {description.map((item, index) => (
              <p key={index} className="text-xl leading-9 text-[#555]">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full mt-20 relative">
          <SwiperCarousel
            data={images}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            slidesPerView={1}
            spaceBetween={0}
            loop
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".mission-next",
              prevEl: ".mission-prev",
            }}
            className="rounded-[32px] overflow-hidden"
            swiperSlideClassName="relative w-full aspect-[16/10]"
            renderSlide={(image) => (
              <Image src={image} alt={title} fill className="object-cover" />
            )}
          />

          <button className="mission-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 aspect-square rounded-full bg-white box-shadow flex items-center justify-center">
            <BtnPrevIcon />
          </button>

          <button className="mission-next absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 aspect-square rounded-full bg-white box-shadow flex items-center justify-center">
            <BtnNextIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;

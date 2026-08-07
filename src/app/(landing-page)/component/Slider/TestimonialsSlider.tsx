"use client";

import { TestimonialsProps } from "@/@types/landingPageTypes";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const TestimonialsSlider: React.FC<{
  reviews: TestimonialsProps["reviews"];
}> = ({ reviews }) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={reviews}
        modules={[Autoplay]}
        autoplay={{ delay: 1800, disableOnInteraction: false }}
        slidesPerView={1}
        spaceBetween={26}
        loop
        className="p-1!"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        renderSlide={(item) => (
          <div className="rounded-2xl text-white backdrop-blur-sm border border-white/10 bg-background-dark-2 p-6 flex flex-col gap-5">
            <span className="text-lg text-primary text-wider">
              ★★★★★
            </span>
            <p className="">{item.review}</p>
            <div className="w-full h-px bg-white/10" />
            <div className="flex items-center gap-3 justify-between">
              <p className="text-lg capitalize">{item.name}</p>
              <Image
                src="/g-icon.png"
                alt="Google Icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default TestimonialsSlider;

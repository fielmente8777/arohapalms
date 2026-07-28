"use client";

import { TestimonialsProps } from "@/@types/landingPageTypes";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";

const TestimonialsSlider: React.FC<{
  reviews: TestimonialsProps["reviews"];
}> = ({ reviews }) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={reviews}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
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
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="w-full h-px bg-white/10" />
            <p className="text-lg capitalize">{item.name}</p>
          </div>
        )}
      />
    </div>
  );
};

export default TestimonialsSlider;

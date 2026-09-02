"use client";

import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

interface GallerySliderProps {
  images: string[];
}
const GallerySlider: React.FC<GallerySliderProps> = ({ images }) => {
  const data = images.length < 5 ? [...images, ...images, ...images] : images;
  return (
    <div>
      <SwiperCarousel
        data={data || []}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        navigation={{
          nextEl: ".cafe-next",
          prevEl: ".cafe-prev",
        }}
        className="w-full we-offer-slider"
        swiperSlideClassName="swiper-slide"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0, // Keep flat
          stretch: 20, // Don't stretch
          depth: 300, // Controls scale & blur of side slides
          modifier: 2.5, // Makes the central slide more prominent
          slideShadows: false, // Shadow adds blur illusion
        }}
        speed={800}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        renderSlide={(src) => (
          <div className="w-full">
            <div className="w-full relative aspect-[4/2.5]">
              <Image src={src} alt="image" fill className="object-cover" />
            </div>
            {/* <h3 className="text-center mt-4 text-primary text-2xl moul tracking-wider">
              {card.alt}
            </h3> */}
          </div>
        )}
      />
      <div className="flex items-center justify-center gap-4 mt-6">
        <button className="cafe-prev text-2xl lg:text-4xl hover:border-p2 border border-transparent">
          <GoArrowLeft />
        </button>
        <button className="cafe-next text-2xl lg:text-4xl hover:border-p2 border border-transparent">
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default GallerySlider;

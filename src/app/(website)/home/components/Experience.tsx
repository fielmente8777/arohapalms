"use client";

import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Section } from "@/components/sectionComponants";

interface ExperienceSlide {
  image: string;
  title?: string;
}

interface ExperienceProps {
  slides: ExperienceSlide[];
}

const Experience = ({ slides }: ExperienceProps) => {
  return (
    <Section className="relative w-full overflow-hidden bg-background-2">
      <SwiperCarousel
        data={slides}
        slidesPerView={1}
        spaceBetween={0}
        loop
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".experience-slider-next",
          prevEl: ".experience-slider-prev",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="w-full"
        renderSlide={(slide) => (
          <div className="relative h-[500px] w-full md:h-[650px] lg:h-[720px]">
            {/* IMAGE */}
            <Image
              src={slide.image}
              alt={slide.title || "Experience slide"}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20" />

            {/* TITLE */}
            {slide.title && (
              <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center md:bottom-10">
                <h2 className="font-primary text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  {slide.title}
                </h2>
              </div>
            )}
          </div>
        )}
      />

      {/* PREVIOUS */}
      <button
        className="
          experience-slider-prev
          absolute left-5 top-1/2 z-20
          flex -translate-y-1/2
          items-center justify-center
          text-white
          transition-opacity
          hover:opacity-60
          md:left-10
        "
        aria-label="Previous slide"
      >
        <span className="text-4xl font-light leading-none">←</span>
      </button>

      {/* NEXT */}
      <button
        className="
          experience-slider-next
          absolute right-5 top-1/2 z-20
          flex -translate-y-1/2
          items-center justify-center
          text-white
          transition-opacity
          hover:opacity-60
          md:right-10
        "
        aria-label="Next slide"
      >
        <span className="text-4xl font-light leading-none">→</span>
      </button>
    </Section>
  );
};

export default Experience;
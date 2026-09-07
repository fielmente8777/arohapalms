"use client";

import Image from "next/image";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { TestimonialsProps } from "@/@types/landingPageTypes";
import { Autoplay } from "swiper/modules";

const Testimonials = ({
  image,
  tagline,
  title,
  reviews,
}: TestimonialsProps) => {
  return (
    <Section
      defaultPadding={false}
      className="w-full bg-background-2 py-6 md:py-0 md:px-0"
    >
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {/* IMAGE - FIXED */}
        <div className="relative min-h-[450px] md:min-h-[680px]">
          <Image
            src={image || ""}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          {/* ARCH BORDER */}
          <div
            className="
              absolute
              top-2
              right-2
              bottom-0
              left-2
              rounded-t-[140px]
              border-t
              border-x
              border-white/80
              md:top-3
              md:right-3
              md:left-3
              md:rounded-t-[190px]
            "
          />
        </div>

        {/* CONTENT */}
        <div className="flex items-center bg-background-2 px-8 py-16 md:px-12 lg:px-16 xl:px-20">
          <div className="w-full max-w-[650px]">

            {/* TAG - FIXED */}
            <p className="text-sm uppercase tracking-[0.3em] text-p2">
              {tagline}
            </p>

            {/* DECORATIVE IMAGE - FIXED */}
            <div className="relative mt-2 h-[9px] w-[150px]">
              <Image
                src="/images/design.png"
                alt=""
                fill
                className="object-cover object-left"
              />
            </div>

            {/* TITLE - FIXED */}
            <h2
              className="
                mt-5
                font-primary
                text-4xl
                font-light
                leading-[1.2]
                text-p3
                md:text-5xl
                lg:text-[48px]
              "
            >
              {title}
            </h2>

            {/* GOOGLE - FIXED */}
            <div className="relative mt-7 aspect-square w-[42px]">
              <Image
                src="/home/google.png"
                alt="Google"
                fill
                className="object-contain"
              />
            </div>

            {/* ONLY REVIEW + NAME SWIPES */}
            <div className="mt-6">
              <SwiperCarousel
                data={reviews}
                modules={[Autoplay]}
                autoplay={{
                  delay: 1800,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={0}
                loop
                renderSlide={(item) => (
                  <div>
                    <p className="max-w-[620px] text-base leading-[1.65] text-gray md:text-lg">
                      {item.review}
                    </p>

                    <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-p3">
                      {item.name}
                    </p>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
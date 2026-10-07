"use client";

import Image from "next/image";
import { useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Star } from "lucide-react";
import { BtnIcon } from "./slider/Slider";
import { Section } from "@/components/sectionComponants";

interface Review {
  name: string;
  review: string;
  rating?: number;
}

interface TestimonialsProps {
  image: string;
  title?: string;
  reviews: Review[];
}

const Testimonials = ({
  image,
  title = "Appreciation From Our Guests",
  reviews = [],
}: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section className="w-full bg-background-2 py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 overflow-hidden rounded-xs border border-[#CA9E55] bg-white md:grid-cols-2 lg:grid-cols-[50%_50%] lg:h-[602px]">
       

          {/* DESKTOP IMAGE */}
          <div className="relative hidden w-full md:block md:h-full">
            <Image
              src={image || "/home/testimonial-img.jpg"}
              alt="Guest Appreciation"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex h-full flex-col items-center justify-start py-8 px-4 text-center sm:px-6 md:py-16 md:px-6">
            <div className="flex w-full max-w-[520px] flex-col items-center">
              <h2 className="font-primary text-2xl font-light text-p2 md:text-[34px] lg:text-5xl">
                {title}
              </h2>

              {/* MOBILE IMAGE - Displayed after heading */}
              <div className="relative my-5 aspect-[16/10] w-full overflow-hidden md:hidden">
                <Image
                  src={image || "/home/testimonial-img.jpg"}
                  alt="Guest Appreciation"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="relative mt-4 h-7 w-7">
                <Image
                  src="/g-icon.png"
                  alt="Google"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-3 flex items-center justify-center gap-1 text-[#CA9E55]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#CA9E55"
                  />
                ))}
              </div>

              <div className="mt-6 w-full">
                <SwiperCarousel
                  data={reviews}
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    nextEl: ".testimonial-next-btn",
                    prevEl: ".testimonial-prev-btn",
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={1}
                  spaceBetween={0}
                  loop
                  speed={700}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  className="w-full"
                  renderSlide={(item) => (
                    <div className="flex flex-col items-center text-center">
                      
                      <p className="text-[13px] font-light text-[#777777] md:text-xl">
                        {item.review}
                      </p>

                      <p className="mt-5 text-[12px] md:text-xl font-medium uppercase text-[#17384e]">
                        {item.name}
                      </p>
                    </div>
                  )}
                />
              </div>

           
              <div className="mt-8 flex items-center justify-center gap-6">
                <button
                  type="button"
                  aria-label="Previous review"
                  className="testimonial-prev-btn flex items-center justify-center transition-opacity hover:opacity-60 cursor-pointer"
                >
                  <BtnIcon />
                </button>
                <div className="flex items-center gap-2 px-1">
                  {reviews.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`inline-block rounded-full transition-all duration-300 ${
                        activeIndex === dotIndex
                          ? "h-2 w-2 bg-blue"
                          : "h-1.5 w-1.5 bg-[#e8e4dc]"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Next review"
                  className="testimonial-next-btn flex items-center justify-center rotate-180 transition-opacity hover:opacity-60 cursor-pointer"
                >
                  <BtnIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

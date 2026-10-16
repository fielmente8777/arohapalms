"use client";

import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";

interface HeroProps {
  data: {
    title: string;
    images: string[];
  };
}

const Hero = ({ data }: HeroProps) => {
  return (
    <Section defaultPadding={false}>
      <SwiperCarousel
        autoplay

        data={data.images}
        renderSlide={(image: string) => (
          <div className="relative w-full md:aspect-4/1.5 aspect-square">
            <Image
              src={image}
              alt={data.title}
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Title */}
            <div className="absolute inset-0 flex items-start justify-center">
              <h1 className="max-w-5xl px-6 text-center font-serif text-2xl text-white md:text-3xl mt-4">
                {data.title}
              </h1>
            </div>
          </div>
        )}
      />
    </Section>
  );
};

export default Hero;

"use client";

import Image from "next/image";
import VerticalSlider from "@/components/sliders/VerticalSlider";
import { useEffect, useRef, useState } from "react";

interface ActivitiesProps {
  title: {
    prefix: string;
    words: string[];
  };
  slides: {
    image: string;
    label: string;
  }[];
}

const Activities = ({ title, slides }: ActivitiesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileSectionRef = useRef<HTMLDivElement>(null);

  // Desktop auto slider
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Mobile sticky scroll
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const handleScroll = () => {
      if (!mobileSectionRef.current) return;

      const rect = mobileSectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;

      if (total <= 0) return;

      const progress = Math.min(
        Math.max(-rect.top / total, 0),
        1
      );

      const index = Math.min(
        Math.floor(progress * slides.length),
        slides.length - 1
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [slides.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="mt-10">
      <h2 className="text-lg md:text-5xl text-blue mb-10 text-center">
        {title.prefix}{" "}
        <span className="text-blue/80">
          {title.words[activeIndex % title.words.length]}
        </span>
      </h2>

      <div className="mx-auto w-40 md:w-120 h-px bg-blue" />

      {/* Desktop */}
      <div className="hidden md:block">
        <VerticalSlider
          slides={slides.map((item) => ({
            image: item.image,
            alt: item.label,
          }))}
          activeIndex={activeIndex}
          className="h-screen w-full"
        >
          <div className="flex items-start justify-between w-full">
            <h3 className="text-5xl text-white font-light">
              {slides[activeIndex].label}
            </h3>

            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white text-white"
            >
              ↓
            </button>
          </div>
        </VerticalSlider>
      </div>

      {/* Mobile Sticky */}
      <div
        ref={mobileSectionRef}
        className="block md:hidden relative"
        style={{ height: `${slides.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <Image
            src={slides[activeIndex].image}
            alt={slides[activeIndex].label}
            fill
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="text-3xl text-white">
                {slides[activeIndex].label}
              </h3>

              <div className="h-12 w-12 rounded-full border border-white flex items-center justify-center text-white">
                ↓
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
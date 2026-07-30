"use client";

import VerticalSlider from "@/components/sliders/VerticalSlider";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className=" mt-10!">
      <h2 className="text-lg md:text-5xl text-blue mb-10 text-center ">
        {title.prefix}{" "}
        <span className="text-dark/80">
          {title.words[activeIndex % title.words.length]}
        </span>
      </h2>
      <div className="mx-auto w-40 md:w-120 h-px bg-blue text-blue" />

      <VerticalSlider
        slides={slides.map((item) => ({
          image: item.image,
          alt: item.label,
        }))}
        activeIndex={activeIndex}
        className="h-[700px] md:h-screen w-full"
      >
        <div className="flex items-start justify-between w-full">
          <h3 className="text-2xl md:text-5xl text-white font-light">
            {slides[activeIndex].label}
          </h3>

          <button
            onClick={nextSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition"
          >
            ↓
          </button>
        </div>
      </VerticalSlider>
    </section>
  );
};

export default Activities;

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
  // const nextSlide = () => {
  //   setActiveIndex((prev) => (prev + 1) % slides.length);
  // };

  return (
    <section className=" mt-10!">
      <h2 className="text-lg md:text-5xl text-dark mb-10 text-center ">
        {title.prefix}{" "}
        <span className="text-dark/80">{title.words[activeIndex % title.words.length]}</span>
      </h2>
      <div className="mx-auto w-40 md:w-120 h-px bg-dark text-dark" />

      <VerticalSlider
        slides={slides.map((item) => ({
          image: item.image,
          alt: item.label,
        }))}
        activeIndex={activeIndex}
        className="h-screen w-full"
      >
        <div className="">
          <h3 className="md:text-5xl text-white">{slides[activeIndex].label}</h3>

          {/* <button onClick={nextSlide}>↓</button> */}
        </div>
      </VerticalSlider>
    </section>
  );
};

export default Activities;
"use client";

import VerticalSlider from "@/components/sliders/VerticalSlider";
import { useState } from "react";


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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="Activities">
      <h2>
        {title.prefix}{" "}
        <span>{title.words[activeIndex % title.words.length]}</span>
      </h2>

      <VerticalSlider
        slides={slides.map((item) => ({
          image: item.image,
          alt: item.label,
        }))}
        activeIndex={activeIndex}
        className="experience-slider"
      >
        <div className="experience-slider__content">
          <h3>{slides[activeIndex].label}</h3>

          <button onClick={nextSlide}>↓</button>
        </div>
      </VerticalSlider>
    </section>
  );
};

export default Activities;
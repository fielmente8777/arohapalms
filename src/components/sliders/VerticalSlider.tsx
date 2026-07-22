"use client";

import Image from "next/image";
import clsx from "clsx";

interface VerticalSliderProps {
  slides: {
    image: string;
    alt: string;
  }[];

  activeIndex: number;

  className?: string;

  overlayClassName?: string;

  children?: React.ReactNode;
}

const VerticalSlider = ({
  slides,
  activeIndex,
  className,
  overlayClassName,
  children,
}: VerticalSliderProps) => {
  return (
    <div className={clsx("vertical-slider", className)}>
      <div
        className="vertical-slider__track"
        style={{
          transform: `translateY(-${activeIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={`${slide.image}-${index}`}
            className="vertical-slider__slide"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {children && (
        <div className={clsx("vertical-slider__overlay", overlayClassName)}>
          {children}
        </div>
      )}
    </div>
  );
};

export default VerticalSlider;

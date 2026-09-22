"use client";

import Image from "next/image";
import {
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { ChevronLeft } from "lucide-react";

interface AboutImageSliderProps {
  images: string[];
  title?: string;
}

export interface AboutImageSliderRef {
  next: () => void;
  previous: () => void;
}

const AboutImageSlider = forwardRef<
  AboutImageSliderRef,
  AboutImageSliderProps
>(({ images, title = "About Aroha Palms" }, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useImperativeHandle(ref, () => ({
    next: handleNext,
    previous: handlePrevious,
  }));

  if (!images.length) return null;

  const previousIndex =
    activeIndex === 0 ? images.length - 1 : activeIndex - 1;

  function handlePrevious() {
    if (isAnimating || images.length <= 1) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
      setIsAnimating(false);
    }, 250);
  }

  function handleNext() {
    if (isAnimating || images.length <= 1) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
      setIsAnimating(false);
    }, 250);
  }

  return (
    <div className="w-full">
      {/* DESKTOP */}
      <div className="hidden items-start gap-6 md:flex">
        {/* LEFT PREVIEW */}
        <div className="flex w-[241px] flex-col justify-between self-stretch">
          <div className="relative h-[516px] w-full overflow-hidden">
            <Image
              src={images[previousIndex]}
              alt={`${title} preview`}
              fill
              sizes="241px"
              className="object-cover transition-opacity duration-500 ease-in-out"
            />
          </div>


          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous image"
            className="
              mt-4
              flex
              items-center
              text-[#d2a45d]
              transition-opacity
              duration-300
              hover:opacity-60
            "
          >
            <ChevronLeft size={20} strokeWidth={1.2} />
            <span className="w-10 border-t border-[#d2a45d]" />
          </button>
        </div>

        {/* MAIN IMAGE */}
        <div className="relative h-[568px] w-[676px] overflow-hidden">
          <Image
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt={`${title} ${activeIndex + 1}`}
            fill
            sizes="676px"
            className={`
              object-cover
              transition-all
              duration-500
              ease-in-out
              ${
                isAnimating
                  ? "scale-[1.015] opacity-50"
                  : "scale-100 opacity-100"
              }
            `}
            priority={activeIndex === 0}
          />
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt={`${title} ${activeIndex + 1}`}
            fill
            sizes="100vw"
            className="object-cover transition-all duration-500 ease-in-out"
          />

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous image"
              className="flex items-center text-white"
            >
              <ChevronLeft size={22} strokeWidth={1.2} />
              <span className="ml-1 w-8 border-t border-white" />
            </button>

            <span className="text-xs text-white">
              {activeIndex + 1}/{images.length}
            </span>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="flex items-center text-white"
            >
              <span className="mr-1 w-8 border-t border-white" />
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

AboutImageSlider.displayName = "AboutImageSlider";

export default AboutImageSlider;
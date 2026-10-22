// import LinkButton from "@/components/buttons/LinkButton";
// import { Section } from "@/components/sectionComponants";
// import SwiperCarousel from "@/components/sliders/SwiperCarousel";
// import Image from "next/image";
// import { useState } from "react";
// import { Navigation } from "swiper/modules";

// interface GallerySliderProps {
//   images: string[];
//   link?: {
//     label: string;
//     href: string;
//   };
// }

// const GallerySlider: React.FC<GallerySliderProps> = ({ images, link }) => {
//   images = images.length > 2 ? images : [...images, ...images];

//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <Section defaultPadding={false} >
//       <div className="relative  ">
//         <div className="flex items-start gap-6">
//           {/* LEFT IMAGE */}
//           <div className="hidden lg:block ">
//             <div className="relative h-[528px] w-[241px] overflow-hidden">
//               <Image
//                 src={
//                   images[
//                     activeIndex === 0 ? images.length - 1 : activeIndex - 1
//                   ]
//                 }
//                 alt="Previous image"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* PREVIOUS BUTTON */}
//             <div className="mt-2 flex w-[241px] justify-end">
//               <button
//                 className="gallery-slider-prev flex items-center justify-center"
//                 type="button"
//               >
//                 <BtnIcon />
//               </button>
//             </div>
//           </div>

//           {/* MAIN SWIPER */}
//           <div className="md:w-[676px]">
//             <SwiperCarousel
//               data={images}
//               modules={[Navigation]}
//               navigation={{
//                 nextEl: ".gallery-slider-next",
//                 prevEl: ".gallery-slider-prev",
//               }}
//               slidesPerView={1}
//               spaceBetween={0}
//               loop
//               centeredSlides={false}
//               speed={900}
//               onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//               className="w-full"
//               renderSlide={(src) => (
//                 <div className="relative h-[568px] w-full">
//                   <Image src={src} alt="Image" fill className="object-cover" />
//                 </div>
//               )}
//             />
//           </div>
//         </div>
//       </div>
//         <div className="block w-full lg:hidden">
//           <SwiperCarousel
//             data={images}
//             modules={[Navigation]}
//             navigation={{
//               nextEl: ".gallery-mobile-next",
//               prevEl: ".gallery-mobile-prev",
//             }}
//             slidesPerView={1}
//             spaceBetween={0}
//             loop
//             speed={700}
//             onSlideChange={(swiper) =>
//               setActiveIndex(swiper.realIndex)
//             }
//             className="w-full"
//             renderSlide={(src) => (
//               <div className="relative aspect-[442/664] w-full overflow-hidden">
//                 <Image
//                   src={src}
//                   alt="Image"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             )}
//           />

//           {/* MOBILE NAVIGATION */}
//           <div className="mt-3 flex w-full items-center justify-between">
//             <button
//               type="button"
//               className="gallery-mobile-prev"
//               aria-label="Previous image"
//             >
//               <BtnIcon />
//             </button>

//             <button
//               type="button"
//               className="gallery-mobile-next rotate-180"
//               aria-label="Next image"
//             >
//               <BtnIcon />
//             </button>
//           </div>
//         </div>
//       {link && (
//         <LinkButton
//           href={link.href}
//           label={link.label}
//           className="mx-auto mt-18! border-0! border-b! border-p2! text-p2"
//         />
//       )}
//     </Section>
//   );
// };

// export default GallerySlider;

// export const BtnIcon = () => (
//   <svg
//     width={65}
//     height={15}
//     viewBox="0 0 65 15"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M0.292892 8.07112C-0.0976334 7.6806 -0.0976334 7.04743 0.292892 6.65691L6.65685 0.292946C7.04738 -0.0975785 7.68054 -0.0975785 8.07107 0.292946C8.46159 0.68347 8.46159 1.31664 8.07107 1.70716L2.41422 7.36401L8.07107 13.0209C8.46159 13.4114 8.46159 14.0446 8.07107 14.4351C7.68054 14.8256 7.04738 14.8256 6.65685 14.4351L0.292892 8.07112ZM65 7.36401V8.36401H1V7.36401V6.36401H65V7.36401Z"
//       fill="#CA9E55"
//     />
//   </svg>
// );

// "use client";

// import LinkButton from "@/components/buttons/LinkButton";
// import { Section } from "@/components/sectionComponants";
// import Image from "next/image";
// import { useCallback, useState } from "react";

// export function useSlider(total: number) {
//   const [index, setIndex] = useState(0);
//   const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
//   const prev = useCallback(
//     () => setIndex((i) => (i - 1 + total) % total),
//     [total]
//   );
//   return { index, next, prev };
// }

// interface GallerySliderProps {
//   images: string[];
//   index: number;
//   onPrev: () => void;
//   onNext: () => void;
//   link?: { label: string; href: string };
// }

// const PREVIEW_W = 241;
// const PREVIEW_H = 528;
// const MAIN_W = 676;
// const MAIN_H = 568;
// const GAP = 24;
// const TOTAL_W = PREVIEW_W + GAP + MAIN_W;

// // Mobile + MD layout (percent of container width)
// const M_MAIN_W = 72;
// const M_GAP = 4;
// const M_MAIN_L = (100 - M_MAIN_W) / 2; // 14
// const M_PREV_L = M_MAIN_L - M_GAP - M_MAIN_W; // -62
// const M_NEXT_L = M_MAIN_L + M_MAIN_W + M_GAP; // 90

// const pw = (v: number) => `${(v / TOTAL_W) * 100}%`;
// const ph = (v: number) => `${(v / MAIN_H) * 100}%`;
// const NEXT_LEFT = PREVIEW_W + GAP + MAIN_W + GAP;

// const GallerySlider = ({
//   images,
//   index: activeIndex,
//   onPrev,
//   onNext,
//   link,
// }: GallerySliderProps) => {
//   const total = images.length;
//   if (!total) return null;

//   function getSlideStyle(i: number): React.CSSProperties {
//     const rel = (i - activeIndex + total) % total;

//     if (rel === 0)
//       return {
//         left: pw(PREVIEW_W + GAP),
//         width: pw(MAIN_W),
//         height: ph(MAIN_H),
//         opacity: 1,
//       };

//     if (rel === total - 1)
//       return {
//         left: 0,
//         width: pw(PREVIEW_W),
//         height: ph(PREVIEW_H),
//         opacity: 1,
//       };

//     if (rel === 1)
//       return {
//         left: pw(NEXT_LEFT),
//         width: pw(PREVIEW_W),
//         height: ph(PREVIEW_H),
//         opacity: 1,
//       };

//     const parkLeft = rel > total / 2;
//     return {
//       left: parkLeft ? pw(-(PREVIEW_W + GAP)) : pw(NEXT_LEFT),
//       width: pw(PREVIEW_W),
//       height: ph(PREVIEW_H),
//       opacity: 0,
//     };
//   }
//   function getMobileSlideStyle(i: number): React.CSSProperties {
//     const rel = (i - activeIndex + total) % total;

//     if (rel === 0)
//       return { left: `${M_MAIN_L}%`, width: `${M_MAIN_W}%`, opacity: 1 };

//     if (rel === total - 1)
//       return { left: `${M_PREV_L}%`, width: `${M_MAIN_W}%`, opacity: 1 };

//     if (rel === 1)
//       return { left: `${M_NEXT_L}%`, width: `${M_MAIN_W}%`, opacity: 1 };

//     const parkLeft = rel > total / 2;
//     return {
//       left: `${parkLeft ? M_PREV_L : M_NEXT_L}%`,
//       width: `${M_MAIN_W}%`,
//       opacity: 0,
//     };
//   }
//   return (
//     <Section defaultPadding={false}>
//       <div className="w-full lg:max-w-[941px]">
//         {/* DESKTOP */}
//         <div className="relative hidden aspect-[941/568] w-full overflow-hidden lg:block">
//           {images.map((src, i) => (
//             <div
//               key={`${src}-${i}`}
//               className="absolute top-0 overflow-hidden transition-all duration-700 ease-in-out"
//               style={getSlideStyle(i)}
//             >
//               <Image
//                 src={src}
//                 alt={`Image ${i + 1}`}
//                 fill
//                 sizes="(min-width:1280px) 676px, 50vw"
//                 className="object-cover"
//                 priority={i === 0}
//               />
//             </div>
//           ))}

//           <div
//             className="absolute left-0 z-10 flex justify-end"
//             style={{ top: "96.8%", width: pw(PREVIEW_W) }}
//           >
//             <button type="button" onClick={onPrev} aria-label="Previous image">
//               <BtnIcon />
//             </button>
//           </div>
//         </div>

//         {/* MOBILE + MD */}
//         <div className="lg:hidden">
//           <div className="relative aspect-[442/664] w-full overflow-hidden md:aspect-[4/3]">
//             <Image
//               key={images[activeIndex]}
//               src={images[activeIndex]}
//               alt={`Image ${activeIndex + 1}`}
//               fill
//               sizes="100vw"
//               className="object-cover"
//             />

//             {/* MD ONLY: arrows centered vertically on the image */}
//             <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 hidden items-center justify-between px-4 md:flex md:px-6">
//               <button
//                 type="button"
//                 onClick={onPrev}
//                 aria-label="Previous image"
//                 className="pointer-events-auto"
//               >
//                 <BtnIcon />
//               </button>
//               <button
//                 type="button"
//                 onClick={onNext}
//                 aria-label="Next image"
//                 className="pointer-events-auto rotate-180"
//               >
//                 <BtnIcon />
//               </button>
//             </div>
//           </div>

//           {/* MOBILE ONLY: arrows below the image */}
//           <div className="mt-3 flex items-center justify-between px-4 md:hidden">
//             <button type="button" onClick={onPrev} aria-label="Previous image">
//               <BtnIcon />
//             </button>
//             <button
//               type="button"
//               onClick={onNext}
//               aria-label="Next image"
//               className="rotate-180"
//             >
//               <BtnIcon />
//             </button>
//           </div>
//         </div>
//       </div>

//       {link && (
//         <LinkButton
//           href={link.href}
//           label={link.label}
//           className="mx-auto mt-18! border-0! border-b! border-p2! text-p2"
//         />
//       )}
//     </Section>
//   );
// };

// export default GallerySlider;

"use client";

import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import Image from "next/image";
import { memo, useCallback, useEffect, useRef, useState } from "react";

export function useSlider(total: number) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const isAnimatingRef = useRef(false);

  const next = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setDirection("next");
    setIndex((i) => (i + 1) % total);
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 620);
  }, [total]);

  const prev = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setDirection("prev");
    setIndex((i) => (i - 1 + total) % total);
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 620);
  }, [total]);

  return { index, direction, next, prev };
}

interface GallerySliderProps {
  images: string[];
  index: number;
  direction?: "next" | "prev";
  onPrev: () => void;
  onNext: () => void;
  link?: { label: string; href: string };
}

/* ---------- Layouts (Percentages) ---------- */

const PREVIEW_W = 241;
const PREVIEW_H = 528;
const MAIN_W = 676;
const MAIN_H = 568;
const GAP = 24;
const TOTAL_W = PREVIEW_W + GAP + MAIN_W; // 941

const xp = (v: number) => (v / TOTAL_W) * 100;
const yp = (v: number) => (v / MAIN_H) * 100;

const DESKTOP_POS = {
  exitLeft: -xp(PREVIEW_W + GAP), // -28.16%
  prevLeft: 0,                   // 0%
  mainLeft: xp(PREVIEW_W + GAP), // 28.16%
  nextLeft: 102.5,               // 102.5%
  mainW: xp(MAIN_W),             // 71.84%
  sideW: xp(PREVIEW_W),          // 25.61%
  mainH: 100,                    // 100%
  sideH: yp(PREVIEW_H),          // 92.96%
};

const M_MAIN_W = 70;
const M_GAP = 3.5;
const M_MAIN_L = (100 - M_MAIN_W) / 2; // 15%

const MOBILE_POS = {
  exitLeft: -130,
  prevLeft: M_MAIN_L - M_GAP - M_MAIN_W, // -58.5%
  mainLeft: M_MAIN_L,                    // 15%
  nextLeft: M_MAIN_L + M_MAIN_W + M_GAP, // 88.5%
  stagedRight: 160,
  mainW: M_MAIN_W,
  sideW: M_MAIN_W,
  mainH: 100,
  sideH: 100,
};

const TRANSITION_ACTIVE =
  "left 620ms cubic-bezier(0.22, 1, 0.36, 1), width 620ms cubic-bezier(0.22, 1, 0.36, 1), height 620ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease";
const TRANSITION_MOBILE =
  "left 620ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease";

function getDesktopSlideStyle(
  i: number,
  activeIndex: number,
  total: number,
  direction: "next" | "prev"
): React.CSSProperties {
  const rel = (i - activeIndex + total) % total;

  // Active / Main
  if (rel === 0) {
    return {
      left: `${DESKTOP_POS.mainLeft}%`,
      width: `${DESKTOP_POS.mainW}%`,
      height: `${DESKTOP_POS.mainH}%`,
      opacity: 1,
      zIndex: 3,
      transition: TRANSITION_ACTIVE,
      willChange: "left, width, height, opacity",
    };
  }

  // Left Preview
  if (rel === total - 1) {
    return {
      left: `${DESKTOP_POS.prevLeft}%`,
      width: `${DESKTOP_POS.sideW}%`,
      height: `${DESKTOP_POS.sideH}%`,
      opacity: 1,
      zIndex: 2,
      transition: TRANSITION_ACTIVE,
      willChange: "left, width, height, opacity",
    };
  }

  // Exiting Left (on next) or Entering from Left (on prev)
  if (rel === total - 2) {
    return {
      left: `${DESKTOP_POS.exitLeft}%`,
      width: `${DESKTOP_POS.sideW}%`,
      height: `${DESKTOP_POS.sideH}%`,
      opacity: 0,
      zIndex: 1,
      transition: direction === "next" ? TRANSITION_ACTIVE : "none",
      willChange: "left, opacity",
    };
  }

  // Staged on Right (enters on next, exits on prev)
  if (rel === 1) {
    return {
      left: `${DESKTOP_POS.nextLeft}%`,
      width: `${DESKTOP_POS.mainW}%`,
      height: `${DESKTOP_POS.mainH}%`,
      opacity: 0,
      zIndex: 1,
      transition: direction === "prev" ? TRANSITION_ACTIVE : "none",
      willChange: "left, opacity",
    };
  }

  // Parked off-screen without any animation
  return {
    left: `${DESKTOP_POS.nextLeft}%`,
    width: `${DESKTOP_POS.sideW}%`,
    height: `${DESKTOP_POS.sideH}%`,
    opacity: 0,
    zIndex: 0,
    transition: "none",
  };
}

function getMobileSlideStyle(
  i: number,
  activeIndex: number,
  total: number,
  direction: "next" | "prev"
): React.CSSProperties {
  const rel = (i - activeIndex + total) % total;

  if (rel === 0) {
    return {
      left: `${MOBILE_POS.mainLeft}%`,
      width: `${MOBILE_POS.mainW}%`,
      height: `${MOBILE_POS.mainH}%`,
      opacity: 1,
      zIndex: 3,
      transition: TRANSITION_MOBILE,
      willChange: "left, opacity",
    };
  }

  if (rel === total - 1) {
    return {
      left: `${MOBILE_POS.prevLeft}%`,
      width: `${MOBILE_POS.sideW}%`,
      height: `${MOBILE_POS.sideH}%`,
      opacity: 1,
      zIndex: 2,
      transition: TRANSITION_MOBILE,
      willChange: "left, opacity",
    };
  }

  if (rel === 1) {
    return {
      left: `${MOBILE_POS.nextLeft}%`,
      width: `${MOBILE_POS.sideW}%`,
      height: `${MOBILE_POS.sideH}%`,
      opacity: 1,
      zIndex: 2,
      transition: TRANSITION_MOBILE,
      willChange: "left, opacity",
    };
  }

  if (rel === total - 2) {
    return {
      left: `${MOBILE_POS.exitLeft}%`,
      width: `${MOBILE_POS.sideW}%`,
      height: `${MOBILE_POS.sideH}%`,
      opacity: 0,
      zIndex: 1,
      transition: direction === "next" ? TRANSITION_MOBILE : "none",
      willChange: "left, opacity",
    };
  }

  if (rel === 2) {
    return {
      left: `${MOBILE_POS.stagedRight}%`,
      width: `${MOBILE_POS.sideW}%`,
      height: `${MOBILE_POS.sideH}%`,
      opacity: 0,
      zIndex: 1,
      transition: direction === "prev" ? TRANSITION_MOBILE : "none",
      willChange: "left, opacity",
    };
  }

  return {
    left: `${MOBILE_POS.stagedRight}%`,
    width: `${MOBILE_POS.sideW}%`,
    height: `${MOBILE_POS.sideH}%`,
    opacity: 0,
    zIndex: 0,
    transition: "none",
  };
}

/* ---------- Slides layer (memoized) ---------- */

interface SlidesProps {
  images: string[];
  activeIndex: number;
  direction: "next" | "prev";
  isDesktop: boolean;
  sizes: string;
  priority?: boolean;
}

const Slides = memo(function Slides({
  images,
  activeIndex,
  direction,
  isDesktop,
  sizes,
  priority,
}: SlidesProps) {
  const total = images.length;
  return (
    <>
      {images.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="absolute top-0 overflow-hidden"
          style={
            isDesktop
              ? getDesktopSlideStyle(i, activeIndex, total, direction)
              : getMobileSlideStyle(i, activeIndex, total, direction)
          }
        >
          <Image
            src={src}
            alt={`Image ${i + 1}`}
            fill
            sizes={sizes}
            className="object-cover"
            priority={priority && i === 0}
          />
        </div>
      ))}
    </>
  );
});

/* ---------- Main component ---------- */

const SWIPE_THRESHOLD = 40;

const GallerySlider = ({
  images,
  index: activeIndex,
  direction: propDirection,
  onPrev,
  onNext,
  link,
}: GallerySliderProps) => {
  const prevIndexRef = useRef(activeIndex);
  const [internalDirection, setInternalDirection] = useState<"next" | "prev">("next");

  const total = images.length;

  useEffect(() => {
    if (prevIndexRef.current !== activeIndex && total > 0) {
      const diff = (activeIndex - prevIndexRef.current + total) % total;
      setInternalDirection(diff === 1 || diff > total / 2 ? "next" : "prev");
      prevIndexRef.current = activeIndex;
    }
  }, [activeIndex, total]);

  const effectiveDirection = propDirection ?? internalDirection;

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      touchStartX.current = null;
      if (Math.abs(diff) < SWIPE_THRESHOLD) return;
      if (diff > 0) onNext();
      else onPrev();
    },
    [onNext, onPrev]
  );

  if (!total) return null;

  return (
    <Section defaultPadding={false}>
      <div className="w-full">
        {/* DESKTOP */}
        <div className="relative hidden aspect-[941/568] w-full overflow-hidden xl:block">
          <Slides
            images={images}
            activeIndex={activeIndex}
            direction={effectiveDirection}
            isDesktop={true}
            sizes="(min-width:1280px) 676px, 50vw"
            priority
          />

          <div
            className="absolute left-0 z-10 flex justify-end"
            style={{ top: "96.8%", width: `${xp(PREVIEW_W)}%` }}
          >
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous image"
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              <BtnIcon />
            </button>
          </div>
        </div>

        {/* MOBILE + MD */}
        <div className="xl:hidden">
          <div
            className="relative aspect-[4/3.5] w-full overflow-hidden lg:aspect-[5/3]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Slides
              images={images}
              activeIndex={activeIndex}
              direction={effectiveDirection}
              isDesktop={false}
              sizes="72vw"
            />
          </div>

          <div className="mt-7 flex items-center justify-between px-6 md:mt-8 md:px-10">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous image"
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              <BtnIcon />
            </button>
            <span className="text-xs tracking-widest text-[#152536]">
              {activeIndex + 1} - {total}
            </span>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next image"
              className="rotate-180 cursor-pointer transition-opacity hover:opacity-70"
            >
              <BtnIcon />
            </button>
          </div>
        </div>
      </div>

      {link && (
        <LinkButton
          href={link.href}
          label={link.label}
          className="mx-auto mt-18! border-0! border-b! border-p2! text-p2"
        />
      )}
    </Section>
  );
};

export default memo(GallerySlider);

export const BtnIcon = () => (
  <svg
    width={65}
    height={15}
    viewBox="0 0 65 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.292892 8.07112C-0.0976334 7.6806 -0.0976334 7.04743 0.292892 6.65691L6.65685 0.292946C7.04738 -0.0975785 7.68054 -0.0975785 8.07107 0.292946C8.46159 0.68347 8.46159 1.31664 8.07107 1.70716L2.41422 7.36401L8.07107 13.0209C8.46159 13.4114 8.46159 14.0446 8.07107 14.4351C7.68054 14.8256 7.04738 14.8256 6.65685 14.4351L0.292892 8.07112ZM65 7.36401V8.36401H1V7.36401V6.36401H65V7.36401Z"
      fill="#CA9E55"
    />
  </svg>
);

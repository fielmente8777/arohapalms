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
import { memo, useCallback, useRef, useState } from "react";

export function useSlider(total: number) {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );
  return { index, next, prev };
}

interface GallerySliderProps {
  images: string[];
  index: number;
  onPrev: () => void;
  onNext: () => void;
  link?: { label: string; href: string };
}

/* ---------- Layouts (sab values % mein) ---------- */

interface Layout {
  mainLeft: number;
  prevLeft: number;
  nextLeft: number;
  mainW: number;
  sideW: number;
  mainH: number;
  sideH: number;
}

// Desktop: original px design ko % mein convert kiya (941 x 568 canvas)
const PREVIEW_W = 241;
const PREVIEW_H = 528;
const MAIN_W = 676;
const MAIN_H = 568;
const GAP = 24;
const TOTAL_W = PREVIEW_W + GAP + MAIN_W;
const xp = (v: number) => (v / TOTAL_W) * 100;
const yp = (v: number) => (v / MAIN_H) * 100;

const DESKTOP: Layout = {
  mainLeft: xp(PREVIEW_W + GAP),
  prevLeft: 0,
  nextLeft: xp(PREVIEW_W + GAP + MAIN_W + GAP),
  mainW: xp(MAIN_W),
  sideW: xp(PREVIEW_W),
  mainH: yp(MAIN_H),
  sideH: yp(PREVIEW_H),
};

// Mobile + MD: beech ki image 72%, side ki images edge tak half dikhti hain
const M_MAIN_W = 72;
const M_GAP = 4;
const M_MAIN_L = 100 - M_MAIN_W;

const MOBILE: Layout = {
  mainLeft: M_MAIN_L,
  prevLeft: M_MAIN_L - M_GAP - M_MAIN_W,
   nextLeft: 100, 
  mainW: M_MAIN_W,
  sideW: M_MAIN_W,
  mainH: 100,
  sideH: 100,
};

/* ---------- Ek hi function dono layouts ke liye ---------- */

function getSlideStyle(
  i: number,
  activeIndex: number,
  total: number,
  L: Layout
): React.CSSProperties {
  const rel = (i - activeIndex + total) % total;

  if (rel === 0)
    return {
      left: `${L.mainLeft}%`,
      width: `${L.mainW}%`,
      height: `${L.mainH}%`,
      opacity: 1,
    };

  const isPrev = rel === total - 1;
  const isNext = rel === 1;
  const parkLeft = rel > total / 2;

  return {
    left: `${isPrev || (!isNext && parkLeft) ? L.prevLeft : L.nextLeft}%`,
    width: `${L.sideW}%`,
    height: `${L.sideH}%`,
    opacity: isPrev || isNext ? 1 : 0,
  };
}

/* ---------- Slides layer (memoized) ---------- */

interface SlidesProps {
  images: string[];
  activeIndex: number;
  layout: Layout;
  sizes: string;
  priority?: boolean;
}

const Slides = memo(function Slides({
  images,
  activeIndex,
  layout,
  sizes,
  priority,
}: SlidesProps) {
  const total = images.length;
  return (
    <>
      {images.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="absolute top-0 overflow-hidden transition-all duration-700 ease-in-out"
          style={getSlideStyle(i, activeIndex, total, layout)}
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
  onPrev,
  onNext,
  link,
}: GallerySliderProps) => {
  // Hooks hamesha early return se pehle
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

  const total = images.length;
  if (!total) return null;

  return (
    <Section defaultPadding={false}>
      <div className="w-full xl:max-w-[941px]">
        {/* DESKTOP */}
        <div className="relative hidden aspect-[941/568] w-full overflow-hidden xl:block">
          <Slides
            images={images}
            activeIndex={activeIndex}
            layout={DESKTOP}
            sizes="(min-width:1280px) 676px, 50vw"
            priority
          />

          <div
            className="absolute left-0 z-10 flex justify-end"
            style={{ top: "96.8%", width: `${xp(PREVIEW_W)}%` }}
          >
            <button type="button" onClick={onPrev} aria-label="Previous image">
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
              layout={MOBILE}
              sizes="72vw"
            />
          </div>

          <div className="mt-3 flex items-center justify-between px-6 md:px-10">
            <button type="button" onClick={onPrev} aria-label="Previous image">
              <BtnIcon />
            </button>
            <span className="text-xs tracking-widest text-[#152536]">
              {activeIndex + 1} - {total}
            </span>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next image"
              className="rotate-180"
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

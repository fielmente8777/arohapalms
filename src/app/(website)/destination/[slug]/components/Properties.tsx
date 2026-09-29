// "use client";

// import SwiperCarousel from "@/components/sliders/SwiperCarousel";
// import { useWebContext } from "@/context-api/WebContext";
// import Image from "next/image";
// import Link from "next/link";
// import { JSX } from "react";
// import { Autoplay } from "swiper/modules";

// export interface Card {
//   image?: string;
//   title: string;
//   description?: string;
//   features?: string[];
//   inRoomAmenities?: { icon: JSX.Element; label: string }[];
//   startingPrice?: string;
//   moreInfo?: {
//     description: string[];
//     listOfData?: { title?: string; list: string[] };
//     review?: { author: string; description: string };
//     sectionButton?: {
//       btn: string;
//       listOfData: {
//         title?: string;
//         list: (
//           string | { title?: string; subTitle?: string; items?: string[] }
//         )[];
//       }[];
//     }[];
//   };
//   note?: { title?: string; notes: string[] };
//   location?: string;
//   images?: string[];
//   bookNow: { text: string; href: string };
//   cta: { text: string; href: string };
// }

// interface PropertiesProps {
//   title: string;
//   cards: Card[];
// }

// const isPopupHref = (href: string) => href === "popup" || href === "#popup";

// const Properties = ({ title, cards }: PropertiesProps) => {
//   const { openProperty } = useWebContext();

//   return (
//     <section className="max_width py-20">
//       <h2 className="text-xl md:text-4xl text-blue border-b pb-6 w-fit">
//         {title}
//       </h2>
//       <div className="mt-14 space-y-16">
//         {cards.map((card) => (
//           <div
//             key={card.title}
//             className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 bg-[#fefcfd]"
//           >
//             {card.images ? (
//               <div className="w-full md:col-span-1">
//                 <SwiperCarousel
//                   data={card.images || []}
//                   slidesPerView={1}
//                   spaceBetween={0}
//                   loop
//                   speed={1000}
//                   modules={[Autoplay]}
//                   autoplay={{
//                     delay: 2000,
//                     disableOnInteraction: false,
//                     pauseOnMouseEnter: true,
//                   }}
//                   renderSlide={(image: string) => (
//                     <div className="relative w-full aspect-[4/3] md:aspect-[4/3] overflow-hidden">
//                       <Image
//                         src={image}
//                         alt={card.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   )}
//                 />
//               </div>
//             ) : (
//               card.image && (
//                 <div className="relative mx-auto w-full max-w-sm aspect-[4/3] md:max-w-none md:aspect-[3/2] overflow-hidden">
//                   <Image
//                     src={card.image}
//                     alt={card.title}
//                     fill
//                     className="object-cover transition duration-500 hover:scale-105"
//                   />
//                 </div>
//               )
//             )}

//             <div className="col-span-2 flex flex-col h-full ">
//               <h3 className="text-2xl text-blue">{card.title}</h3>
//               <p className="mt-3 text-gray-700">{card.description}</p>

//               <div className="mt-4 flex flex-wrap md:justify-start gap-4 text-md text-blue">
//                 {card.features?.map((feature) => (
//                   <span key={feature}>{feature}</span>
//                 ))}
//               </div>

//               <div className="mt-8 flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between max-w-xl">
//                 <Link
//                   href={card.bookNow.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="rounded-full bg-p2 text-white px-8 py-2 text-sm font-medium uppercase"
//                 >
//                   {card.bookNow.text}
//                 </Link>

//                 {isPopupHref(card.cta.href) ? (
//                   <button
//                     onClick={() => openProperty(card)}
//                     className="rounded-full border-2 border-blue px-8 py-2 text-sm font-medium uppercase tracking-wide text-blue "
//                   >
//                     {card.cta.text}
//                   </button>
//                 ) : (
//                   <Link
//                     href={card.cta.href}
//                     className="rounded-full border-2 border-blue px-8 py-2 text-sm font-medium uppercase tracking-wide text-blue transition hover:bg-blue hover:text-white"
//                   >
//                     {card.cta.text}
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Properties;

// "use client";

// import { JSX, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";

// import { useWebContext } from "@/context-api/WebContext";

// import "swiper/css";
// import { WhatsAppIcon } from "@/components/buttons/LinkButton";
// import { Section } from "@/components/sectionComponants";

// export interface Card {
//   image?: string;
//   title: string;
//   description?: string;

//   features?: string[];

//   inRoomAmenities?: {
//     icon: JSX.Element;
//     label: string;
//   }[];

//   startingPrice?: string;

//   moreInfo?: {
//     description: string[];

//     listOfData?: {
//       title?: string;
//       list: string[];
//     };

//     review?: {
//       author: string;
//       description: string;
//     };

//     sectionButton?: {
//       btn: string;
//       listOfData: {
//         title?: string;
//         list: (
//           | string
//           | {
//               title?: string;
//               subTitle?: string;
//               items?: string[];
//             }
//         )[];
//       }[];
//     }[];
//   };

//   note?: {
//     title?: string;
//     notes: string[];
//   };

//   location?: string;

//   images?: string[];

//   bookNow: {
//     text: string;
//     href: string;
//   };

//   cta: {
//     text: string;
//     href: string;
//   };
// }

// interface PropertiesProps {
//   title: string;
//   cards: Card[];
// }

// const isPopupHref = (href: string) => href === "popup" || href === "#popup";

// interface PropertyCardProps {
//   index: number;
//   card: Card;
//   openProperty: (card: Card) => void;
// }

// const PropertyCard = ({ card, openProperty, index }: PropertyCardProps) => {
//   const [swiper, setSwiper] = useState<SwiperType | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const images =
//     card.images && card.images.length > 0
//       ? card.images
//       : card.image
//         ? [card.image]
//         : [];

//   const description = card.description || card.moreInfo?.description?.[0] || "";

//   const features = card.features || [];

//   return (
//     <Section className="w-full">
//       <div
//         className={`
//     grid
//     grid-cols-1
//     gap-6
//     lg:gap-6
//     ${
//       index % 2 === 0
//         ? "md:grid-cols-[1.65fr_1fr]"
//         : "md:grid-cols-[1fr_1.65fr]"
//     }
//   `}
//       >
//         <div
//           className={`
//     min-w-0
//     ${index % 2 === 1 ? "md:col-start-2 md:row-start-1" : ""}
//   `}
//         >
//           {/* MAIN IMAGE */}
//           <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[1.25/1] lg:aspect-[1.85/1]">
//             {images.length > 0 && (
//               <Swiper
//                 modules={[Autoplay]}
//                 slidesPerView={1}
//                 loop={images.length > 1}
//                 speed={900}
//                 autoplay={
//                   images.length > 1
//                     ? {
//                         delay: 2500,
//                         disableOnInteraction: false,
//                         pauseOnMouseEnter: true,
//                       }
//                     : false
//                 }
//                 onSwiper={setSwiper}
//                 onSlideChange={(instance) => {
//                   setActiveIndex(instance.realIndex);
//                 }}
//                 className="h-full w-full"
//               >
//                 {images.map((image, index) => (
//                   <SwiperSlide key={`${image}-${index}`}>
//                     <div className="relative h-full w-full">
//                       <Image
//                         src={image}
//                         alt={`${card.title} ${index + 1}`}
//                         fill
//                         sizes="(max-width: 768px) 100vw, 65vw"
//                         className="object-cover"
//                         priority={index === 0}
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             )}
//           </div>

//           {images.length > 1 && (
//             <div className="mt-3 flex items-center gap-2 md:gap-3">
//               {/* LEFT ARROW */}
//               <button
//                 type="button"
//                 aria-label="Previous image"
//                 onClick={() => swiper?.slidePrev()}
//                 className="
//     flex
//     items-center
//     text-blue
//   "
//               >
//                 <BtnIcon />
//               </button>

//               {/* THUMBNAILS */}
//               <div className="flex min-w-0 gap-2 overflow-hidden">
//                 {images.slice(0, 6).map((image, index) => (
//                   <button
//                     key={`${image}-${index}`}
//                     type="button"
//                     aria-label={`View image ${index + 1}`}
//                     onClick={() => swiper?.slideToLoop(index)}
//                     className={`
//                       relative
//                       h-7
//                       w-8
//                       shrink-0
//                       overflow-hidden
//                       transition-all
//                       duration-200
//                       md:h-8
//                       md:w-9
//                       ${
//                         activeIndex === index
//                           ? "opacity-100 ring-1 ring-blue"
//                           : "opacity-70"
//                       }
//                     `}
//                   >
//                     <Image
//                       src={image}
//                       alt=""
//                       fill
//                       sizes="36px"
//                       className="object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>

//               <span className="ml-auto shrink-0 text-xs text-gray-600">
//                 {activeIndex + 1}/{images.length}
//               </span>

//               <button
//                 type="button"
//                 aria-label="Next image"
//                 onClick={() => swiper?.slideNext()}
//                 className="
//     flex

//     items-center

//   "
//               >
//                 <div className="rotate-180">
//                   <BtnIcon />
//                 </div>
//               </button>
//             </div>
//           )}
//         </div>

//         <div
//           className={`
//     flex
//     min-w-0
//     flex-col
//     ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}
//   `}
//         >
//           {card.location && (
//             <p
//               className="
//                 mb-3
//                 text-[10px]
//                 uppercase
//                 tracking-[0.16em]
//                 text-[#c69a52]
//                 md:text-[11px]
//               "
//             >
//               {card.location}
//             </p>
//           )}

//           <h3
//             className="
//               text-[24px]
//               leading-[1.2]
//               text-blue
//               md:text-[28px]
//             "
//           >
//             {card.title}
//           </h3>

//           {features.length > 0 && (
//             <div className="mt-5 flex flex-wrap gap-2">
//               {features.map((feature) => (
//                 <span
//                   key={feature}
//                   className="
//                     rounded-full
//                     border
//                     border-[#d8cda9]
//                     px-3
//                     py-1.5
//                     md:text-[10px]

//                     text-[#333]
//                     lg:text-[11px]
//                   "
//                 >
//                   {feature}
//                 </span>
//               ))}
//             </div>
//           )}

//           {description && (
//             <p
//               className="
//                 mt-5
//                 md:text-[14px]
//                 text-gray-600
//                 lg:text-[15px]
//                 md:line-clamp-6
//                 lg:line-clamp-none
//                 "
//             >
//               {description}
//             </p>
//           )}

//           <div className="mt-5">
//             <button
//               type="button"
//               onClick={() => openProperty(card)}
//               className="
//                 border-b
//                 border-blue
//                 pb-1
//                 text-[10px]
//                 font-medium
//                 uppercase
//                 text-blue
//                 transition-opacity
//                 hover:opacity-70
//               "
//             >
//               Know More
//             </button>
//           </div>

//           <div
//             className="
//               mt-8
//               flex
//               flex-col
//               gap-4
//               sm:flex-row
//               sm:items-center
//               sm:justify-between
//             "
//           >
//             {card.startingPrice && (
//               <p className="text-[14px] text-gray-600">
//                 From{" "}
//                 <span className="font-semibold text-gray-700">
//                   {card.startingPrice}
//                 </span>
//                 <span className="ml-1 text-[10px]">+ taxes</span>
//               </p>
//             )}

//             <Link
//               href={card.bookNow.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 inline-flex
//                 min-w-[180px]
//                 items-center
//                 justify-center
//                 bg-[#172635]
//                 px-7
//                 py-3
//                 text-[10px]
//                 font-medium
//                 uppercase
//                 tracking-wide
//                 text-white
//                 transition
//                 hover:bg-blue
//               "
//             >
//               <span className="mr-2 text-[9px]">
//                 <WhatsAppIcon />
//               </span>
//               Enquire Now
//             </Link>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// };

// const Properties = ({ title, cards }: PropertiesProps) => {
//   const { openProperty } = useWebContext();

//   return (
//     <Section className="bg-background-2 ">
//       <div className="max_screen_width px-8">
//         <h2
//           className="
//             w-fit
//             text-center
//             mx-auto
//             border-b
//             border-[#c8c0a8]
//             pb-5
//             text-xl
//             text-blue
//             md:text-4xl
//           "
//         >
//           {title}
//         </h2>

//         <div className="lg:mt-14 lg:space-y-20">
//           {cards.map((card, index) => (
//             <PropertyCard
//               key={card.title}
//               card={card}
//               openProperty={openProperty}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Properties;

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
//       fill="#005BA4"
//     />
//   </svg>
// );

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { AccommodationSectionProps } from "@/@types/landingPageTypes";
import RoomDetailsPopupButton from "@/components/pop-up/RoomDetailsPopupButton";
import Container from "@/components/sectionComponants/Container";
import { WhatsAppIcon } from "@/components/buttons/LinkButton";
import { PinIcon } from "@/utils/icons";
import { Section } from "@/components/sectionComponants";

export type AccommodationCardType = AccommodationSectionProps["cards"][0];

interface AccommodationCardsSectionProps {
  cards: AccommodationSectionProps["cards"];
  note?: AccommodationSectionProps["note"];
  sectionHeader?: {
    locationTag?: string;
    title?: string;
  };
}

export const BtnIcon = () => (
  <svg
    width={48}
    height={12}
    viewBox="0 0 65 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-200"
  >
    <path
      d="M0.292892 8.07112C-0.0976334 7.6806 -0.0976334 7.04743 0.292892 6.65691L6.65685 0.292946C7.04738 -0.0975785 7.68054 -0.0975785 8.07107 0.292946C8.46159 0.68347 8.46159 1.31664 8.07107 1.70716L2.41422 7.36401L8.07107 13.0209C8.46159 13.4114 8.46159 14.0446 8.07107 14.4351C7.68054 14.8256 7.04738 14.8256 6.65685 14.4351L0.292892 8.07112ZM65 7.36401V8.36401H1V7.36401V6.36401H65V7.36401Z"
      fill="#005BA4"
    />
  </svg>
);

export const AccommodationCard: React.FC<
  AccommodationCardType & { index: number }
> = ({
  images = [],
  title,
  span,
  description,
  moreInfo,
  startingPrice,
  cta,
  index,
  amenities,
  inRoomAmenities,
  location,
  note,
  originalPrice,
  type,
  discountCode,
}) => {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const badges =
    moreInfo?.roomInfo && moreInfo.roomInfo.length > 0 ? moreInfo.roomInfo : [];
  const cardDescription = moreInfo?.description?.[0] || description || "";
  const isEven = index % 2 === 0;

  return (
    <div className="w-full md:py-6">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 ${
          isEven
            ? ""
            : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
        }`}
      >
        {/* <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[500px] overflow-hidden bg-gray-100">
            {images.length > 0 && (
              <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                loop={images.length > 1}
                speed={800}
                autoplay={
                  images.length > 1
                    ? {
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }
                    : false
                }
                onSwiper={setSwiper}
                onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
                className="w-full h-full"
              >
                {images.map((img, i) => (
                  <SwiperSlide
                    key={`${img}-${i}`}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={img}
                      alt={`${title} view ${i + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={index === 0 && i === 0}
                      className="object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => swiper?.slidePrev()}
                className="p-1 hover:opacity-75 transition-opacity cursor-pointer shrink-0"
              >
                <BtnIcon />
              </button>

              <div className="flex items-center gap-2 overflow-hidden">
                {images.slice(0, 6).map((img, i) => (
                  <button
                    key={`${img}-thumb-${i}`}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => swiper?.slideToLoop(i)}
                    className={`relative w-9 h-7 sm:w-11 sm:h-8 shrink-0 overflow-hidden rounded-[2px] transition-all duration-200 ${
                      activeIndex === i
                        ? "ring-2 ring-[#005BA4] opacity-100 scale-105"
                        : "opacity-60 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              <span className="text-xs font-medium text-gray-500 shrink-0 select-none">
                {activeIndex + 1}/{images.length}
              </span>

              <button
                type="button"
                aria-label="Next image"
                onClick={() => swiper?.slideNext()}
                className="p-1 hover:opacity-75 transition-opacity cursor-pointer shrink-0 rotate-180"
              >
                <BtnIcon />
              </button>
            </div>
          )}
        </div> */}
        <div className="lg:col-span-7 flex flex-col justify-between w-full">
          <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[500px] overflow-hidden bg-gray-100">
            {images.length > 0 && (
              <Swiper
                modules={[Autoplay, Thumbs]}
                slidesPerView={1}
                loop={images.length > 1}
                speed={800}
                autoplay={
                  images.length > 1
                    ? {
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }
                    : false
                }
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                onSwiper={setMainSwiper}
                onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
                className="w-full h-full"
              >
                {images.map((img, i) => (
                  <SwiperSlide
                    key={`main-${img}-${i}`}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={img}
                      alt={`${title} view ${i + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={index === 0 && i === 0}
                      className="object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-4 flex items-center justify-between gap-3 w-full">
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => mainSwiper?.slidePrev()}
                className="p-1 hover:opacity-75 transition-opacity cursor-pointer shrink-0"
              >
                <BtnIcon />
              </button>

              <div className="w-full max-w-[280px] sm:max-w-[360px] overflow-hidden px-1">
                <Swiper
                  modules={[Thumbs]}
                  onSwiper={setThumbsSwiper}
                  watchSlidesProgress
                  slidesPerView={5}
                  spaceBetween={8}
                  slideToClickedSlide={true}
                  className="w-full h-8 sm:h-9"
                >
                  {images.map((img, i) => {
                    const isActive = activeIndex === i;
                    return (
                      <SwiperSlide
                        key={`thumb-${img}-${i}`}
                        className="cursor-pointer !h-full"
                      >
                        <div
                          className={`relative w-full h-full overflow-hidden rounded-[2px] transition-all duration-300 ${
                            isActive
                              ? "ring-2 ring-[#005BA4] opacity-100 scale-105"
                              : "opacity-40 hover:opacity-80"
                          }`}
                        >
                          <Image
                            src={img}
                            alt=""
                            fill
                            sizes="60px"
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>

              {/* COUNTER (e.g. 1/8) */}
              <span className="text-xs font-medium text-gray-500 shrink-0 select-none">
                {activeIndex + 1}/{images.length}
              </span>

              {/* NEXT BUTTON */}
              <button
                type="button"
                aria-label="Next image"
                onClick={() => mainSwiper?.slideNext()}
                className="p-1 hover:opacity-75 transition-opacity cursor-pointer shrink-0 rotate-180"
              >
                <BtnIcon />
              </button>
            </div>
          )}
        </div>
        {/* ================= RIGHT / CONTENT COLUMN ================= */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full ">
          <div>
            <p className="text-sm text-primary uppercase mb-4">
              {moreInfo.title}
            </p>

            <h3 className="text-2xl md:text-3xl lg:text-[32px] font-serif text-[#005BA4] font-normal ">
              {title} {span}
            </h3>

            {badges.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {badges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="rounded-full border border-[#CA9E55] bg-[#F6F7EB]/40 text-[#2B2B2B] px-3.5 py-1 text-[11px] md:text-[12px] lg:text-sm font-normal whitespace-nowrap"
                  >
                    {badge.trim()}
                  </span>
                ))}
              </div>
            )}

            {cardDescription && (
              <p className="mt-5 text-[13px] md:text-[14px] lg:text-xl text-[#5A5856] line-clamp-9">
                {cardDescription}
              </p>
            )}

            <div className="mt-5">
              <RoomDetailsPopupButton
                label="KNOW MORE"
                roomDetails={{
                  images,
                  title,
                  description,
                  amenities,
                  cta,
                  inRoomAmenities,
                  moreInfo,
                  location,
                  note,
                  originalPrice,
                  startingPrice,
                  type,
                  span,
                  discountCode,
                }}
                // className="text-[#005BA4] text-xs font-semibold uppercase tracking-wider underline underline-offset-8 hover:text-[#004077] transition-colors"
              />
            </div>
          </div>

          {/* <div className="mt-8 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-baseline gap-1 text-[#222]">
              <span className="text-sm md:text-[15px] lg:text-xl font-medium">
                {startingPrice?.toLowerCase().includes("from") ? "" : "From "}
                <span className="font-semibold text-gray-900">
                  {startingPrice}
                </span>
              </span>
              <span className="text-xs lg:text-sm text-gray-500 font-normal">
                + taxes
              </span>
            </div>

            <Link
              href={cta?.href || "#"}
              className="inline-flex items-center justify-center gap-2 bg-[#0B1E2D] hover:bg-[#005BA4] text-white text-[11px] lg:text-sm font-semibold uppercase px-7 py-3 rounded-sm transition-colors duration-200 min-w-[170px]"
            >
              <WhatsAppIcon />
              <span>{cta?.label || "ENQUIRE NOW"}</span>
            </Link>
          </div> */}
          <div className="mt-8 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {startingPrice ? (
              <div className="flex items-baseline gap-1 text-[#222]">
                <span className="text-sm md:text-[15px] lg:text-xl font-medium">
                  {startingPrice.toLowerCase().includes("from") ? "" : "From "}
                  <span className="font-semibold text-gray-900">
                    {startingPrice}
                  </span>
                </span>
                <span className="text-xs lg:text-sm text-gray-500 font-normal">
                  + taxes
                </span>
              </div>
            ) : (
              <div />
            )}

            <Link
              href={cta?.href || "#"}
              className="inline-flex items-center justify-center gap-2 bg-[#0B1E2D] hover:bg-[#005BA4] text-white text-[11px] lg:text-sm font-semibold uppercase px-7 py-3 rounded-sm transition-colors duration-200 min-w-[170px]"
            >
              <WhatsAppIcon />
              <span>{cta?.label || "ENQUIRE NOW"}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const AccommodationCardsSection: React.FC<AccommodationCardsSectionProps> = ({
  cards,
  note,
  sectionHeader,
}) => {
  return (
    <Section className=" w-full max_screen_width bg-background-2">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          {sectionHeader?.locationTag && (
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="flex items-center justify-center -mt-2">
                <PinIcon />
              </span>
              <p className="text-[11px] lg:text-lg font-semibold uppercase text-[#005BA4] mb-2">
                {sectionHeader.locationTag}
              </p>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif text-[#005BA4] leading-snug">
            {sectionHeader?.title || "Explore Our Properties in Mandrem"}
          </h2>
        </div>

        <div className="flex flex-col gap-12 sm:gap-20">
          {cards.map((card, idx) => (
            <AccommodationCard key={card.title} {...card} index={idx} />
          ))}
        </div>

        {/* {note && (
          <div className="mt-20 py-10 px-6 rounded-md bg-[#0B1E2D] text-white text-center max-w-4xl mx-auto space-y-3">
            <p className="text-2xl font-serif font-medium">
              Stays that scale with your group!
            </p>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              {note}
            </p>
          </div>
        )} */}
      </Container>
    </Section>
  );
};

export default AccommodationCardsSection;

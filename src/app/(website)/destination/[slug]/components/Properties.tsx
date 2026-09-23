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

"use client";

import { JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { useWebContext } from "@/context-api/WebContext";

import "swiper/css";
import { WhatsAppIcon } from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";

export interface Card {
  image?: string;
  title: string;
  description?: string;

  features?: string[];

  inRoomAmenities?: {
    icon: JSX.Element;
    label: string;
  }[];

  startingPrice?: string;

  moreInfo?: {
    description: string[];

    listOfData?: {
      title?: string;
      list: string[];
    };

    review?: {
      author: string;
      description: string;
    };

    sectionButton?: {
      btn: string;
      listOfData: {
        title?: string;
        list: (
          | string
          | {
              title?: string;
              subTitle?: string;
              items?: string[];
            }
        )[];
      }[];
    }[];
  };

  note?: {
    title?: string;
    notes: string[];
  };

  location?: string;

  images?: string[];

  bookNow: {
    text: string;
    href: string;
  };

  cta: {
    text: string;
    href: string;
  };
}

interface PropertiesProps {
  title: string;
  cards: Card[];
}

const isPopupHref = (href: string) => href === "popup" || href === "#popup";

interface PropertyCardProps {
  index: number;
  card: Card;
  openProperty: (card: Card) => void;
}

const PropertyCard = ({ card, openProperty, index }: PropertyCardProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images =
    card.images && card.images.length > 0
      ? card.images
      : card.image
        ? [card.image]
        : [];

  const description = card.description || card.moreInfo?.description?.[0] || "";

  const features = card.features || [];

  return (
    <Section className="w-full">
      <div
        className={`
    grid
    grid-cols-1
    gap-6
    md:gap-6
    ${
      index % 2 === 0
        ? "md:grid-cols-[1.65fr_1fr]"
        : "md:grid-cols-[1fr_1.65fr]"
    }
  `}
      >
        <div
          className={`
    min-w-0
    ${index % 2 === 1 ? "md:col-start-2 md:row-start-1" : ""}
  `}
        >
          {/* MAIN IMAGE */}
          <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[1.55/1]">
            {images.length > 0 && (
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop={images.length > 1}
                speed={900}
                autoplay={
                  images.length > 1
                    ? {
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }
                    : false
                }
                onSwiper={setSwiper}
                onSlideChange={(instance) => {
                  setActiveIndex(instance.realIndex);
                }}
                className="h-full w-full"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={`${image}-${index}`}>
                    <div className="relative h-full w-full">
                      <Image
                        src={image}
                        alt={`${card.title} ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 65vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-3 flex items-center gap-2 md:gap-3">
              {/* LEFT ARROW */}
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => swiper?.slidePrev()}
                className="
                  flex
                  shrink-0
                  items-center
                  text-blue
                "
              >
                <ChevronLeft size={18} strokeWidth={1.4} />

                <span className="w-6 border-t border-blue md:w-8" />
              </button>

              {/* THUMBNAILS */}
              <div className="flex min-w-0 gap-2 overflow-hidden">
                {images.slice(0, 6).map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    aria-label={`View image ${index + 1}`}
                    onClick={() => swiper?.slideToLoop(index)}
                    className={`
                      relative
                      h-7
                      w-8
                      shrink-0
                      overflow-hidden
                      transition-all
                      duration-200
                      md:h-8
                      md:w-9
                      ${
                        activeIndex === index
                          ? "opacity-100 ring-1 ring-blue"
                          : "opacity-70"
                      }
                    `}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              <span className="ml-auto shrink-0 text-xs text-gray-600">
                {activeIndex + 1}/{images.length}
              </span>

              <button
                type="button"
                aria-label="Next image"
                onClick={() => swiper?.slideNext()}
                className="
                  flex
                  shrink-0
                  items-center
                  text-blue
                "
              >
                <span className="w-6 border-t border-blue md:w-8" />

                <ChevronRight size={18} strokeWidth={1.4} />
              </button>
            </div>
          )}
        </div>

        <div
          className={`
    flex
    min-w-0
    flex-col
    ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}
  `}
        >
          {card.location && (
            <p
              className="
                mb-3
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-[#c69a52]
                md:text-[11px]
              "
            >
              {card.location}
            </p>
          )}

          <h3
            className="
              text-[24px]
              leading-[1.2]
              text-blue
              md:text-[28px]
            "
          >
            {card.title}
          </h3>

          {features.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="
                    rounded-full
                    border
                    border-[#d8cda9]
                    px-3
                    py-1.5
                    text-[10px]
                    leading-none
                    text-[#333]
                    md:text-[11px]
                  "
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          {description && (
            <p
              className="
                mt-5
                text-[14px]
                leading-[1.65]
                text-gray-600
                md:text-[15px]
              "
            >
              {description}
            </p>
          )}

          <div className="mt-5">
            <button
              type="button"
              onClick={() => openProperty(card)}
              className="
                border-b
                border-blue
                pb-1
                text-[10px]
                font-medium
                uppercase
                tracking-wide
                text-blue
                transition-opacity
                hover:opacity-70
              "
            >
              Know More
            </button>
          </div>

          <div
            className="
              mt-8
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {card.startingPrice && (
              <p className="text-[14px] text-gray-600">
                From{" "}
                <span className="font-semibold text-gray-700">
                  {card.startingPrice}
                </span>
                <span className="ml-1 text-[10px]">+ taxes</span>
              </p>
            )}

            <Link
              href={card.bookNow.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-w-[180px]
                items-center
                justify-center
                bg-[#172635]
                px-7
                py-3
                text-[10px]
                font-medium
                uppercase
                tracking-wide
                text-white
                transition
                hover:bg-blue
              "
            >
              <span className="mr-2 text-[9px]">
                <WhatsAppIcon />
              </span>
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Properties = ({ title, cards }: PropertiesProps) => {
  const { openProperty } = useWebContext();

  return (
    <Section className="bg-background-2 ">
      <div className="max_screen_width px-8">
        <h2
          className="
            w-fit
            text-center
            mx-auto
            border-b
            border-[#c8c0a8]
            pb-5
            text-xl
            text-blue
            md:text-4xl
          "
        >
          {title}
        </h2>

        <div className="mt-14 space-y-20">
          {cards.map((card, index) => (
            <PropertyCard
              key={card.title}
              card={card}
              openProperty={openProperty}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Properties;

"use client";

import React, { JSX, useState } from "react";
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
export interface Card {
  image?: string;
  title: string;
  description?: string;
  features?: string[];
  inRoomAmenities?: { icon: JSX.Element; label: string }[];
  startingPrice?: string;
  moreInfo?: {
    description: string[];
    listOfData?: { title?: string; list: string[] };
    review?: { author: string; description: string };
    sectionButton?: {
      btn: string;
      listOfData: {
        title?: string;
        list: (
          string | { title?: string; subTitle?: string; items?: string[] }
        )[];
      }[];
    }[];
  };
  note?: { title?: string; notes: string[] };
  location?: string;
  images?: string[];
  bookNow: { text: string; href: string };
  cta: { text: string; href: string };
}
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
      {/* MOBILE HEADER: Tag, Title, Badges (Shown ONLY on mobile < lg) */}
      <div className="block lg:hidden mb-6">
        {moreInfo?.title && (
          <p className="text-sm text-primary uppercase mb-2">
            {moreInfo.title}
          </p>
        )}

        <h3 className="text-2xl md:text-3xl font-serif text-[#005BA4] font-normal">
          {title} {span}
        </h3>

        {badges.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {badges.map((badge, bIdx) => (
              <span
                key={bIdx}
                className="rounded-full border border-[#CA9E55] bg-[#F6F7EB]/40 text-[#2B2B2B] px-3.5 py-1 text-[11px] md:text-[12px] font-normal whitespace-nowrap"
              >
                {badge.trim()}
              </span>
            ))}
          </div>
        )}
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 ${
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
        <div className="lg:col-span-7 flex flex-col w-full">
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
            {/* DESKTOP HEADER (Hidden on mobile < lg) */}
            <div className="hidden lg:block">
              {moreInfo?.title && (
                <p className="text-sm text-primary uppercase mb-4">
                  {moreInfo.title}
                </p>
              )}

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
            </div>

            {cardDescription && (
              <p className="mt-1 lg:mt-5 text-base sm:text-lg lg:text-xl text-[#5A5856] leading-relaxed line-clamp-9">
                {cardDescription}
              </p>
            )}

            <div className="mt-3.5 lg:mt-5">
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
          <div className="mt-4 pt-2 lg:mt-8 lg:pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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

        <div className="flex flex-col gap-10 sm:gap-14 lg:gap-20">
          {cards.map((card, idx) => (
            <React.Fragment key={card.title}>
              <AccommodationCard {...card} index={idx} />
              {idx < cards.length - 1 && (
                <div className="block lg:hidden -mx-4 sm:-mx-6 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] overflow-hidden my-2 sm:my-4">
                  <Image
                    src="/images/Greek1.png"
                    alt=""
                    width={1440}
                    height={80}
                    className="h-auto w-full object-cover"
                  />
                </div>
              )}
            </React.Fragment>
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

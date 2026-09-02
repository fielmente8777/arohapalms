"use client";

import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { Autoplay } from "swiper/modules";

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

interface PropertiesProps {
  title: string;
  cards: Card[];
}

const isPopupHref = (href: string) => href === "popup" || href === "#popup";

const Properties = ({ title, cards }: PropertiesProps) => {
  const { openProperty } = useWebContext();

  return (
    <section className="max_width py-20">
      <h2 className="text-xl md:text-4xl text-blue border-b pb-6 w-fit">
        {title}
      </h2>
      <div className="mt-14 space-y-16">
        {cards.map((card) => (
          <div
            key={card.title}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 bg-[#fefcfd]"
          >
            {card.images ? (
              <div className="w-full md:col-span-1">
                <SwiperCarousel
                  data={card.images || []}
                  slidesPerView={1}
                  spaceBetween={0}
                  loop
                  speed={1000}
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  renderSlide={(image: string) => (
                    <div className="relative w-full aspect-[4/3] md:aspect-[4/3] overflow-hidden">
                      <Image
                        src={image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                />
              </div>
            ) : (
              card.image && (
                <div className="relative mx-auto w-full max-w-sm aspect-[4/3] md:max-w-none md:aspect-[3/2] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              )
            )}

            <div className="col-span-2 flex flex-col h-full ">
              <h3 className="text-2xl text-blue">{card.title}</h3>
              <p className="mt-3 text-gray-700">{card.description}</p>

              <div className="mt-4 flex flex-wrap md:justify-start gap-4 text-md text-blue">
                {card.features?.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <div className="mt-8 flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between max-w-xl">
                <Link
                  href={card.bookNow.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-p2 text-white px-8 py-2 text-sm font-medium uppercase"
                >
                  {card.bookNow.text}
                </Link>

                {isPopupHref(card.cta.href) ? (
                  <button
                    onClick={() => openProperty(card)}
                    className="rounded-full border-2 border-blue px-8 py-2 text-sm font-medium uppercase tracking-wide text-blue "
                  >
                    {card.cta.text}
                  </button>
                ) : (
                  <Link
                    href={card.cta.href}
                    className="rounded-full border-2 border-blue px-8 py-2 text-sm font-medium uppercase tracking-wide text-blue transition hover:bg-blue hover:text-white"
                  >
                    {card.cta.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;

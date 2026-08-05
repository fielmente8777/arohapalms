"use client";
import { AccommodationSectionProps } from "@/@types/landingPageTypes";
import LinkButton from "@/components/buttons/LinkButton";
import RoomDetailsPopupButton from "@/components/pop-up/RoomDetailsPopupButton";
import Container from "@/components/sectionComponants/Container";
import AmenitiesSlider from "@/components/sliders/AmenitiesSlider";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";

const AccommodationCardsSection: React.FC<{
  cards: AccommodationSectionProps["cards"];
  note: AccommodationSectionProps["note"];
}> = ({ cards, note }) => {
  const btns = [
    ...new Set(cards.map((card) => card.location.toLocaleLowerCase())),
  ];

  const [activeBtn, setActiveBtn] = useState(btns[0]);

  // filter
  const filteredCards = cards.filter(
    (card) => card.location.toLocaleLowerCase() === activeBtn,
  );

  return (
    <div>
      {/* <div className="flex items-center justify-center gap-4">
        {btns.map((btn, index) => (
          <button
            key={index}
            onClick={() => setActiveBtn(btn)}
            className={` ${activeBtn === btn ? "bg-primary text-white" : "text-secondary border"} uppercase tracking-widest flex items-center gap-2 py-2 px-4 rounded-lg`}
          >
            <span>
              <FillLocationIcon />
            </span>
            {btn}
          </button>
        ))}
      </div> */}
      <div>
        <Container>
          <div className="flex flex-col gap-6 lg:gap-16">
            {filteredCards.slice(0, 3).map((card, index) => (
              <AccommodationCard key={index} {...card} index={index} />
            ))}
          </div>
        </Container>
        <div className="py-8 bg-background-dark w-full my-10">
          <Container className="text-white bg-background-dark text-center max-w-4xl mx-auto space-y-3.5 ">
            <p className="text-2xl font-semibold capitalize">
              Stays that scale with your group!
            </p>
            <p className="lg:text-xl">{note}</p>
          </Container>
        </div>
        <Container>
          {filteredCards.length > 3 && (
            <div className="flex flex-col gap-6 lg:gap-16">
              {filteredCards.slice(3).map((card, index) => (
                <AccommodationCard key={index} {...card} index={index + 1} />
              ))}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default AccommodationCardsSection;

export const AccommodationCard: React.FC<
  AccommodationSectionProps["cards"][0] & { index: number }
> = ({
  images,
  title,
  description,
  amenities,
  cta,
  index,
  inRoomAmenities,
  moreInfo,
  location,
  note,
  startingPrice,
  type,
  originalPrice,
  span,
  discountCode,
}) => {
  return (
    <div className=" grid lg:grid-cols-10 grid-cols-1 gap-6  room-card">
      <div
        className={`w-full rounded-2xl lg:col-span-6 lg:block hidden overflow-hidden ${index % 2 === 0 ? "order-first" : "order-last"}`}
      >
        <SwiperCarousel
          data={images}
          slidesPerView={1}
          spaceBetween={0}
          loop
          speed={2000}
          modules={[Autoplay, Navigation]}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          swiperSlideClassName="relative lg:aspect-[4/2.6] aspect-[4/2.75]"
          renderSlide={(image) => (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              className="object-cover"
            />
          )}
        />
      </div>
      <div className="lg:col-span-4 flex flex-col justify-between border-2 border-primary rounded-2xl gap-4  lg:gap-5 lg:p-6 p-4 bg-background box-shadow overflow-hidden">
        <div className="space-y-3">
          <div className="flex max-lg:flex-col max-lg:items-start gap-2">
            <h3 className="lg:text-3xl text-2xl text-p2 font-semibold">{title}</h3>
            <span className="text-lg text-p2 uppercase">- {span}</span>
          </div>
          <p className="text-lg text-primary">{moreInfo.title}</p>
          <div className="flex flex-wrap items-center gap-2 py-2">
            {moreInfo.roomInfo.map((info, index) => (
              <span
                key={index}
                className="flex items-center gap-2 bg-background-2 text-sm py-1 text-background-dark px-3 rounded-full"
              >
                {info}
              </span>
            ))}
          </div>
        </div>
        <div className={`w-full rounded-xl lg:hidden overflow-hidden`}>
          <SwiperCarousel
            data={images}
            slidesPerView={1}
            spaceBetween={0}
            loop
            speed={2000}
            modules={[Autoplay, Navigation]}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            swiperSlideClassName="relative lg:aspect-[4/2.5] aspect-[4/2.75]"
            renderSlide={(image) => (
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="object-cover"
              />
            )}
          />
        </div>
        {/* <ul className="flex flex-wrap items-center gap-2">
          {amenities.map((amenity, index) => (
            <li
              key={index}
              className="flex items-center gap-2 bg-background-2 text-sm py-1 text-background-dark px-3 rounded-full"
            >
              {amenity.icon && <span>{amenity.icon}</span>}
              {amenity.label}
            </li>
          ))}
        </ul> */}
        <div className="flex flex-col gap-1">
          <p className=" text-[#57534E] line-clamp-2">
            {moreInfo.description[0]}
          </p>
          <RoomDetailsPopupButton
            label="Know More"
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
          />
        </div>
        <AmenitiesSlider items={inRoomAmenities} />
        {/* <ul className="flex flex-wrap items-center gap-2 p-3 border border-p2 rounded-2xl">
          {inRoomAmenities.map((amenity, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm py-1 text-background-dark px-3 rounded-full"
            >
              {amenity.icon && <span>{amenity.icon}</span>}
              {amenity.label}
            </li>
          ))}
        </ul> */}
        <div className="flex items-center gap-4 justify-between">
          {/* <p className="text-sm text-secondary line-through">
            <span className="sr-only">{originalPrice}</span>
            <span className="font">{originalPrice} </span>
          </p> */}
          <p className="text-lg text-secondary">
            <span className="sr-only">{startingPrice}</span>
            <span className="font-semibold">{startingPrice} </span>
            <span className="text-sm">+ Taxes</span>
          </p>
          <p className="text-sm text-secondary">
            <span className="sr-only">{discountCode}</span>
            <span className="">Discount code: </span>
            <span className="text-p2">{discountCode} </span>
          </p>
        </div>
        {/* <div className="grid md:grid-cols-[1fr_auto] grid-cols-1 gap-4"> */}
        <LinkButton
          href={cta.href}
          label={cta.label}
          whatsAppIcon
          villa={title}
          className="bg-primary rounded-sm border-none text-white w-full justify-center uppercase"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

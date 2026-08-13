"use client";

import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { Autoplay, Navigation } from "swiper/modules";
import LinkButton from "../buttons/LinkButton";
import SwiperCarousel from "../sliders/SwiperCarousel";

// Define the type for listOfData items
type ListOfDataItem = {
  title: string;
  description?: string;
  list: string[];
};

const RoomDetailsPopup = () => {
  const { room, isOpen, closeRoom } = useWebContext();

  // Helper function to render list items
  const renderListItems = (
    listData: ListOfDataItem[] | { title: string; list: string[] } | undefined,
  ) => {
    if (!listData) return null;

    // If listData is an array
    if (Array.isArray(listData)) {
      return listData.map((item, index) => (
        <div key={index} className="space-y-2">
          {item.title && (
            <p className="font-semibold text-p2 mt-4">{item.title}</p>
          )}
          {item.description && (
            <p className="text-sm text-secondary">{item.description}</p>
          )}
          {item.list && Array.isArray(item.list) && (
            <ul className={`list-disc pl-5 space-y-1 text-sm text-secondary`}>
              {item.list.map((listItem: string, idx: number) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: listItem }} />
              ))}
            </ul>
          )}
        </div>
      ));
    }

    // If listData is an object (single item)
    if (
      typeof listData === "object" &&
      listData.title &&
      Array.isArray(listData.list)
    ) {
      return (
        <div className="space-y-2">
          <p className="font-semibold text-p2">{listData.title}</p>
          <ul className="list-decimal pl-5 space-y-1 text-sm text-secondary">
            {listData.list.map((item: string, idx: number) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className={`fixed inset-0 bg-black/10 backdrop-blur-xs px-4 flex items-center justify-center z-50 transform duration-300 ease-in-out transition-all ${
        isOpen
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-3d"
      }`}
    >
      <div className="bg-background relative max-w-4xl w-full lg:p-8 p-4 rounded-2xl max-h-[95vh]">
        <button
          className="absolute top-4 right-4 max-lg:top-2 max-lg:right-2 text-2xl text-primary hover:text-primary/80 transition-colors z-10"
          onClick={closeRoom}
        >
          <MdClose />
        </button>

        <div className="grid max-lg:mt-3.5 lg:grid-cols-2 grid-cols-1 gap-6">
          {/* Image Gallery - Desktop */}
          <div className="lg:block hidden w-full room-card">
            <SwiperCarousel
              data={room?.images || []}
              slidesPerView={1}
              spaceBetween={0}
              loop
              speed={1500}
              modules={[Autoplay, Navigation]}
              navigation={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: false,
              }}
              swiperSlideClassName="aspect-4/4 relative rounded-2xl overflow-hidden"
              renderSlide={(image) => (
                <Image
                  src={image}
                  alt={room?.title || ""}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover"
                />
              )}
            />
            {/* In-Room Amenities */}
            {room?.inRoomAmenities && room.inRoomAmenities.length > 0 && (
              <div className="mt-4 bg-primary/5 rounded-lg space-y-2">
                <p className="font-semibold text-p2 mb-2">In-Room Amenities</p>
                <div className="grid grid-cols-2 gap-2">
                  {room.inRoomAmenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs text-secondary"
                    >
                      {amenity.icon}
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-4 h-[70dvh] lg:h-[80dvh] lg:pr-4 hide-scroll overflow-y-auto">
            <div className="space-y-2">
              {/* Title */}
              <h2 className="font-primary lg:text-2xl text-2xl text-p2">
                {room?.title}
              </h2>

              {/* Subtitle / Tagline */}
              {room?.moreInfo?.title && (
                <p className=" text-p2 font-medium">{room?.moreInfo.title}</p>
              )}

              {/* Room Info */}
              {room?.moreInfo?.roomInfo && (
                <div className="flex flex-wrap items-center gap-2 py-2">
                  {room.moreInfo.roomInfo.map((info, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 bg-background-2 text-sm py-1 text-background-dark px-3 rounded-full"
                    >
                      {info}
                    </span>
                  ))}
                </div>
              )}

              {/* Amenities - Quick Overview */}
              {/* {room?.amenities && room.amenities.length > 0 && (
                <div className="flex flex-wrap items-center gap-4 py-2">
                  {room.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-secondary"
                    >
                      {amenity.icon}
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Amenities - Quick Overview */}
              {/* {room?.amenities && room.amenities.length > 0 && (
                <div className="flex flex-wrap items-center gap-4 py-2">
                  {room.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-secondary"
                    >
                      {amenity.icon}
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>
              )} */}
            </div>
            {/* Image Gallery - Mobile */}
            <div className="lg:hidden w-full">
              <SwiperCarousel
                data={room?.images || []}
                slidesPerView={1}
                spaceBetween={0}
                loop
                speed={1000}
                modules={[Autoplay, Navigation]}
                navigation={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  waitForTransition: false,
                }}
                swiperSlideClassName="aspect-4/4 relative rounded-xl overflow-hidden"
                renderSlide={(image) => (
                  <Image
                    src={image}
                    alt={room?.title || ""}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                )}
              />
            </div>
            {/* In-Room Amenities */}
            {room?.inRoomAmenities && room.inRoomAmenities.length > 0 && (
              <div className="mt-4 space-y-2 lg:hidden">
                <p className="font-semibold text-p2 mb-2">In-Room Amenities</p>
                <div className="grid grid-cols-2 gap-2">
                  {room.inRoomAmenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs text-secondary"
                    >
                      {amenity.icon}
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {room?.moreInfo?.description &&
              Array.isArray(room.moreInfo.description) &&
              room.moreInfo.description.map((item: string, index: number) => (
                <p
                  className="text-sm text-secondary leading-relaxed"
                  key={index}
                >
                  {item}
                </p>
              ))}

            {/* List Data */}
            {room?.moreInfo?.listOfData &&
              renderListItems(room.moreInfo.listOfData)}

            {/* Note Section */}
            {room?.note && (
              <div className="bg-primary/5 rounded-lg p-4 space-y-2">
                <p className="font-semibold text-p2">{room.note.title}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-secondary">
                  {room.note.notes.map((note: string, index: number) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: note }}
                    />
                  ))}
                </ul>
              </div>
            )}

            {/* Review Section */}
            {room?.moreInfo?.review?.author && (
              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="">
                    <p className="text-sm font-semibold text-p2">
                      Guest Review
                    </p>
                    <p className="text-lg text-primary font-medium">
                      {room?.moreInfo.review.author}
                    </p>
                  </div>
                  <Image src="/Booking.png" alt="booking" width={25} height={25} />
                </div>
                <span className="text-lg text-primary text-wider">★★★★★</span>
                <div className="w-full h-px bg-white/10" />
                <p className="text-sm text-secondary italic">
                  {room?.moreInfo.review.description}
                </p>
              </div>
            )}

            {/* CTA Button */}
            {room?.cta && (
              <div className="pt-4">
                {/* <a
                  href={room.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {room.cta.label}
                </a> */}
                <LinkButton
                  href={room.cta.href}
                  label={room.cta.label}
                  whatsAppIcon
                  villa={room.title}
                  className="rounded-sm text-white bg-primary border-none w-full justify-center uppercase"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPopup;

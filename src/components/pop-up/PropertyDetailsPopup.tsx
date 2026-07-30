"use client";

import { useState } from "react";
import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import SwiperCarousel from "../sliders/SwiperCarousel";
import { Autoplay, Navigation } from "swiper/modules";
import AmenitiesSlider from "../sliders/AmenitiesSlider";

type SectionListItem =
  | string
  | { title?: string; subTitle?: string; items?: string[] };

const renderSectionListItem = (item: SectionListItem, idx: number) => {
  if (typeof item === "string") {
    return (
      <p
        key={idx}
        className="text-sm text-secondary"
        dangerouslySetInnerHTML={{ __html: item }}
      />
    );
  }

  return (
    <div key={idx} className="space-y-1">
      {item.title && <p className="font-medium text-p2">{item.title}</p>}
      {item.subTitle && (
        <p
          className="text-sm text-secondary"
          dangerouslySetInnerHTML={{ __html: item.subTitle }}
        />
      )}
      {item.items && (
        <ul className="list-disc pl-5 space-y-1">
          {item.items.map((sub, i) => (
            <li
              key={i}
              className="text-sm text-secondary"
              dangerouslySetInnerHTML={{ __html: sub }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

const PropertyDetailsPopup = () => {
  const { property, isOpenProperty, closeProperty } = useWebContext();

  const sectionButtons = property?.moreInfo?.sectionButton;

  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  const activeSection =
    sectionButtons?.find((s) => s.btn === activeBtn) ?? sectionButtons?.[0];

  const handleClose = () => {
    setActiveBtn(null);
    closeProperty();
  };

  return (
    <div
      className={`fixed inset-0 bg-black/10 backdrop-blur-xs px-4 flex items-center justify-center z-50 transform duration-300 ease-in-out transition-all ${
        isOpenProperty
          ? "visible opacity-100 scale-100"
          : "invisible opacity-0 scale-3d"
      }`}
    >
      <div className="bg-background-2 relative max-w-4xl w-full lg:p-8 p-4 rounded-2xl">
        <button
          className="absolute top-4 right-4 max-lg:top-2 max-lg:right-2 text-2xl text-primary"
          onClick={handleClose}
        >
          <MdClose />
        </button>

        <div className="grid max-lg:mt-3.5 lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="lg:block hidden w-full room-card">
            <SwiperCarousel
              data={
                property?.images || (property?.image ? [property.image] : [])
              }
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
              swiperSlideClassName="aspect-4/4 relative rounded-2xl overflow-hidden"
              renderSlide={(image) => (
                <Image
                  src={image}
                  alt={property?.title || ""}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover"
                />
              )}
            />
            <div className="grid grid-cols-2 items-center gap-4 mt-4">
              {property?.inRoomAmenities?.map((amenity, index) => (
                <button
                  key={index}
                  className="text-sm text-secondary flex gap-1"
                >
                  <span>{amenity.icon}</span>
                  {amenity.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 h-[70dvh] lg:h-[46.5dvh] lg:pr-4 hide-scroll overflow-y-auto">
            <h2 className="font-primary lg:text-3xl text-2xl text-p2">
              {property?.title}
            </h2>

            <div className="lg:hidden w-full">
              <SwiperCarousel
                data={
                  property?.images ||
                  (property?.image ? [property.image] : [])
                }
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
                    alt={property?.title || ""}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                )}
              />
            </div>

            <div className="lg:hidden block">
              <AmenitiesSlider items={property?.inRoomAmenities || []} />
            </div>

            {property?.description && (
              <p className="text-sm text-secondary">{property.description}</p>
            )}

            {property?.moreInfo?.description.map((item, index) => (
              <p className="text-sm text-secondary" key={index}>
                {item}
              </p>
            ))}

            {property?.moreInfo?.listOfData?.title && (
              <p className="font-semibold text-p2">
                {property.moreInfo.listOfData.title}
              </p>
            )}
            {property?.moreInfo?.listOfData?.list.map((item, index) => (
              <p className="text-sm text-secondary" key={index}>
                {item}
              </p>
            ))}

            {sectionButtons && sectionButtons.length > 0 && (
              <>
                <ul className="grid grid-cols-3 border items-center justify-center mt-4 divide-x">
                  {sectionButtons.map((section, index) => {
                    const isActive = activeSection?.btn === section.btn;
                    return (
                      <li key={index}>
                        <button
                          type="button"
                          onClick={() => setActiveBtn(section.btn)}
                          className={`w-full text-center px-2 py-.5  max-lg:text-[10px] transition-colors ${
                            isActive
                              ? "text-p2 font-semibold"
                              : "text-secondary"
                          }`}
                        >
                          {section.btn}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {/* content for the selected tab, shown right below */}
                {activeSection && (
                  <div className="mt-4 space-y-4">
                    {activeSection.listOfData.map((group, gIdx) => (
                      <div key={gIdx} className="space-y-2">
                        {group.title && (
                          <p className="font-semibold text-p2">
                            {group.title}
                          </p>
                        )}
                        <div className="space-y-2">
                          {group.list.map((item, iIdx) =>
                            renderSectionListItem(item, iIdx)
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {property?.moreInfo?.review?.author && (
              <div className="space-y-2">
                <p className="text-sm text-p2">Guest Review</p>
                <p>{property.moreInfo.review.author}</p>
                <div className="w-full h-px bg-white/10" />
                <p className="text-sm text-secondary">
                  {property.moreInfo.review.description}
                </p>
              </div>
            )}

            {property?.note?.title && (
              <div className="space-y-2">
                <p className="font-semibold text-p2">{property.note.title}</p>
                {property.note.notes.map((item, index) => (
                  <p className="text-sm text-secondary" key={index}>
                    {index + 1}. {item}
                  </p>
                ))}
              </div>
            )}

            {property?.bookNow && (
              <Link
                href={property.bookNow.href}
                className="inline-block rounded-full bg-p2 text-white px-8 py-2 text-sm font-medium uppercase"
              >
                {property.bookNow.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPopup;
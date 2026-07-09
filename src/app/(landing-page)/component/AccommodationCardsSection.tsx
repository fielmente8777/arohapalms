"use client";
import { AccommodationSectionProps } from "@/@types/landingPageTypes";
import LinkButton from "@/components/buttons/LinkButton";
import { FillLocationIcon } from "@/utils/icons";
import Image from "next/image";
import { useState } from "react";

const AccommodationCardsSection: React.FC<{
  cards: AccommodationSectionProps["cards"];
}> = ({ cards }) => {
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
      <div className="flex items-center justify-center gap-4">
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
      </div>
      <div className="mt-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {filteredCards.map((card, index) => (
            <AccommodationCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccommodationCardsSection;

export const AccommodationCard: React.FC<
  AccommodationSectionProps["cards"][0]
> = ({ image, title, description, amenities, cta }) => {
  return (
    <div className="border-x border-b border-[#E5E1D8] rounded-2xl overflow-hidden">
      <div className="relative aspect-4/2.75">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-4 p-6 bg-white">
        <h3 className="text-2xl text-background-dark">{title}</h3>
        <p className="text-sm text-[#57534E]">{description}</p>
        <ul className="flex flex-wrap items-center gap-2">
          {amenities.map((amenity, index) => (
            <li
              key={index}
              className="flex items-center gap-2 bg-background-2 text-sm py-1 text-background-dark px-3 rounded-full"
            >
              {amenity.icon && <span>{amenity.icon}</span>}
              {amenity.label}
            </li>
          ))}
        </ul>
        <LinkButton
          href={cta.href}
          label={cta.label}
          className="bg-primary rounded-full border-none text-white w-full justify-center"
        />
      </div>
    </div>
  );
};

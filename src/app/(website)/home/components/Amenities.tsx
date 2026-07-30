import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface AmenitiesProps {
  amenities: {
    title: string;
    amenities: {
      icon: ReactNode;
      title: string;
    }[];
  };

  outdoors: {
    title: string;
    cards: {
      image: string;
      title: string;
      description: string;
      cta: {
        text: string;
        href: string;
      };
    }[];
  };
}

const Amenities = ({ amenities, outdoors }: AmenitiesProps) => {
  return (
      <div className="max-width relative bg-white py-24">
      <div className="">
        <h2 className="text-center max-w-5xl mx-auto text-4xl mb-18 text-blue">
          {amenities.title}
        </h2>

        <div className="grid grid-cols-2 md:flex w-full flex-wrap items-center justify-between max_width gap-12">
          {amenities.amenities.map((item) => (
            <div
              className="flex flex-col items-center gap-1 justify-center"
              key={item.title}
            >
              {item.icon}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <SectionWithContainer sectionClassName="px-10">
        <h2 className="text-center max-w-5xl mx-auto text-3xl mb-18 text-blue">
          {outdoors.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
          {outdoors?.cards.map((card, index) => (
            <div
              key={card.title}
              className={`relative ${index === 1 || index === 3 ? "" : ""} drop-shadow-2xl w-full max-w-[520px] mx-auto overflow-hidden rounded-[32px]  aspect-square`}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />

              {/* <div>
                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <Link href={card.cta.href}>{card.cta.text}</Link>
              </div> */}
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end pb-10 px-8 text-center text-white">
                <h3 className="text-4xl mb-6">{card.title}</h3>

                <p className="max-w-md mb-8">{card.description}</p>

                <Link
                  href={card.cta.href}
                  className="flex h-24 w-24 rounded-full border border-white flex justify-center items-center hover:bg-[#011f4b] transition-all duration-150 underline"
                >
                  {card.cta.text}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionWithContainer>
      </div>

  );
};

export default Amenities;

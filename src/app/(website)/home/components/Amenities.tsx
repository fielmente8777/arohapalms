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
    <section className="relative py-10 bg-white space-y-24">
      <div className="w-full">
        <h2 className="text-center max-w-5xl mx-auto text-5xl mb-18 text-blue">
          {amenities.title}
        </h2>

        <div className="grid grid-cols-2 md:flex w-full flex-wrap items-center justify-between max_width gap-12">
          {amenities.amenities.map((item) => (
            <div className="flex flex-col items-center gap-1 justify-center" key={item.title}>
              {item.icon}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max_width">
        <h2 className="text-center max-w-5xl mx-auto text-5xl mb-18 text-blue">
          {outdoors.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {outdoors?.cards.map((card, index) => (
            <div
              key={card.title}
              className={`relative ${index === 1 || index === 3 ? "" : ""} overflow-hidden rounded-[32px]  aspect-square`}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />

              <div>
                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <Link href={card.cta.href}>{card.cta.text}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;

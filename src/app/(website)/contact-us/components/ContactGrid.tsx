import Image from "next/image";
import Link from "next/link";

interface ContactGridProps {
  backgroundImage: string;

  cards: {
    title: string;

    links?: {
      label: string;
      href: string;
    }[];

    locations?: {
      title: string;
      address: string[];
    }[];
  }[];
}

const ContactGrid = ({ backgroundImage, cards }: ContactGridProps) => {
  return (
    <section className="relative py-14 px-4 ">
      <Image
        src={backgroundImage}
        alt="Contact Background"
        fill
        className="object-cover"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className=" grid grid-cols-1 md:grid grid-cols-[1fr_1fr_2fr] gap-5 ">
          {cards.map((card) => (
            <div key={card.title} className="w-full bg-white/80  p-6 md:p-10">
              <div className="">
                <h2 className="text-3xl md:text-5xl  text-blue mb-8">
                  {card.title}
                </h2>

                <div className="flex flex-col">
                  {card.links?.map((item) => (
                    <Link key={item.label} href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>

                {card.locations && (
                  <div className="flex">
                    {card.locations.map((location) => (
                      <div key={location.title} className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold">
                          {location.title}
                        </h3>

                        <div className="space-y-2">
                          {location.address.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactGrid;

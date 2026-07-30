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
      mapUrl: string;
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

      <div className="relative z-10 max-w-5xl mx-auto text-center md:text-start">
        <div className=" grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-5 ">
          {cards.map((card) => (
            <div key={card.title} className="w-full bg-white/80 p-12 md:p-10">
              <div className="">
                <h2 className="text-2xl md:text-5xl  text-dark mb-4">
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
                  <div className="flex flex-col md:flex-row gap-12">
                    {card.locations.map((location) => (
                      <div key={location.title} className="relative z-50 flex flex-col gap-3">
                        {/* <h3 className="text-sm md:text-[16px] text-start font-semibold">
                          {location.title}
                        </h3> */}
                        <Link
                          href={location.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm md:text-[16px] text-start font-semibold hover:underline"
                        >
                          {location.title}
                        </Link>

                        {/* <div className="flex flex-wrap text-xs md:text-[15px] md:flex-col md:gap-2">
                          {location.address.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div> */}
                        <Link
                          href={location.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-wrap text-xs md:text-[15px] md:flex-col md:gap-2 hover:underline"
                        >
                          {location.address.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </Link>
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

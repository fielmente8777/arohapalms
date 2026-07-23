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

const ContactGrid = ({
  backgroundImage,
  cards,
}: ContactGridProps) => {
  return (
    <section className="relative">
      <Image
        src={backgroundImage}
        alt="Contact Background"
        fill
        className="object-cover"
      />

      <div className="relative z-10 max_width">
        <div className="grid grid-cols-[1fr_1fr_2fr]">
          {cards.map((card) => (
            <div key={card.title}>
              <h2>{card.title}</h2>

              {card.links?.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}

              {card.locations && (
                <div>
                  {card.locations.map((location) => (
                    <div key={location.title}>
                      <h3>{location.title}</h3>

                      {location.address.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactGrid;
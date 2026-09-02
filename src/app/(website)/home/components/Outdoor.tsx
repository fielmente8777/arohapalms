import Image from "next/image";
import Link from "next/link";

interface OutdoorsProps {
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
}

const Outdoors = ({ title, cards }: OutdoorsProps) => {
  return (
    <section className="relative py-24 bg-white">
      <div className="bg-white absolute top-50 z-10 max_width">
        <h2>{title}</h2>

        <div className="grid grid-cols-2 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative overflow-hidden rounded-[32px] h-100"
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

export default Outdoors;

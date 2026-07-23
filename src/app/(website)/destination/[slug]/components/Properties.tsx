import Image from "next/image";
import Link from "next/link";

interface PropertiesProps {
  title: string;

  cards: {
    image: string;
    title: string;
    description: string;

    features: string[];

    bookNow: {
      text: string;
      href: string;
    };

    cta: {
      text: string;
      href: string;
    };
  }[];
}

const Properties = ({ title, cards }: PropertiesProps) => {
  return (
    <section className="max_width">
      <h2>{title}</h2>

      <div>
        {cards.map((card) => (
          <div key={card.title}>
            <div>
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3>{card.title}</h3>

              <p>{card.description}</p>

              <div>
                {card.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <div>
                <Link href={card.bookNow.href}>
                  {card.bookNow.text}
                </Link>

                <Link href={card.cta.href}>
                  {card.cta.text}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
import Link from "next/link";

interface LocationsProps {
  background: string;
  title: string;
  label: string;
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

const Locations = ({ background, title, label, cards }: LocationsProps) => {
  return (
    <section className="sticky top-0 relative h-screen overflow-hidden">
      <img
        src={background}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10 max_width h-full">
        <h2>{title}</h2>

        <span>{label}</span>

        <div>
          {cards.map((card) => (
            <div key={card.title}>
              <img src={card.image} alt={card.title} />

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

export default Locations;

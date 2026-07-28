import Image from "next/image";
import Link from "next/link";

interface ExperienceCardsProps {
  cards: {
    image: string;
    title: string;
    description: string;
  }[];
  cta: {
    text: string;
    href: string;
  };
}

const ExperienceCards = ({ cards, cta }: ExperienceCardsProps) => {
  return (
    <section className="max_width">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group relative aspect-[1.5/2] md:aspect-[4/3] overflow-hidden"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3>{card.title}</h3>

              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-12 flex text-center md:text-start justify-center">
        <Link className="py-2 px-10 uppercase tracking-wider rounded-md text-lg bg-dark text-white hover:underline" href={cta.href}>{cta.text}</Link>
      </div>
    </section>
  );
};

export default ExperienceCards;

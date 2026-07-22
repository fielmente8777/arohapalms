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

const ExperienceCards = ({ cards,cta }: ExperienceCardsProps) => {
  return (
    <section className="max_width">
      <div className="grid grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl"
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
      <div className="mt-12 flex justify-center">
        <Link href={cta.href}>{cta.text}</Link>
      </div>
    </section>
  );
};

export default ExperienceCards;

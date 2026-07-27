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
    <section className="top-0 relative overflow-hidden py-24">
      <img
        src={background}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="hidden md:absolute inset-0 bg-[#dfdbcc]/80" />

      <div className="relative z-10 max_width h-full">
        <h2 className="text-center font-serif max-w-5xl mx-auto text-5xl mb-18 text-blue">{title}</h2>

        <span className="text-center font-serif text-2xl text-blue mt-10">{label}</span>

        <div className="max-w-7xl mx-auto py-10 flex flex-col gap-20">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`w-full flex ${index === 1 ? "justify-end" : ""}`}
            >
              <div
                className={`flex gap-5 h-130 w-140`}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-130 w-80 object-cover drop-shadow-2xl rounded-md"
                />

                <div className={`flex flex-col  ${index === 1 ? "justify-end " : "pt-10"} gap-4`}>
                  <h3 className="font-serif text-2xl text-blue">
                    {card.title}
                  </h3>

                  <p>{card.description}</p>

                  <Link
                    href={card.cta.href}
                    className="px-5 rounded-full py-1.5 text-sm bg-blue w-fit text-white"
                  >
                    {card.cta.text}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;

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
    <section className="max_width py-20">
      <h2 className="text-5xl font-serif text-blue border-b pb-6 w-fit">{title}</h2>
      <div className="mt-14 space-y-16">
        {cards.map((card) => (
          <div
            key={card.title}
            className="grid grid-cols-3 gap-6 bg-[#fefcfd]"
          >
            {/* Image */}
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="col-span-2 flex flex-col h-full">
              <h3 className="font-serif text-2xl text-blue">
                {card.title}
              </h3>

              <p className="mt-3 text-gray-700">
                {card.description}
              </p>

              <div className="mt-4 flex gap-8 text-md text-blue">
                {card.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between max-w-xl">
                <Link
                  href={card.bookNow.href}
                  className="rounded-full bg-blue px-8 py-2 text-sm font-medium uppercase tracking-wide text-white transition hover:opacity-90"
                >
                  {card.bookNow.text}
                </Link>

                <Link
                  href={card.cta.href}
                  className="rounded-full border-2 border-blue px-8 py-2 text-sm font-medium uppercase tracking-wide text-blue transition hover:bg-blue hover:text-white"
                >
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
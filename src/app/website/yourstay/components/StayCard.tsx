import Image from "next/image";
import Link from "next/link";

interface StayCardsProps {
  stays: {
    image: string;
    title: string;
    subtitle: string;
    href: string;
  }[];
}

const StayCards = ({ stays }: StayCardsProps) => {
  return (
    <section className="max_width">
      <div className="grid grid-cols-2 gap-10">
        {stays.map((stay) => (
          <Link
            key={stay.href}
            href={stay.href}
            className="group relative overflow-hidden rounded-[32px]"
          >
            <Image
              src={stay.image}
              alt={stay.subtitle}
              fill
              className="object-cover"
            />

            <div>
              <h2>{stay.title}</h2>

              <h3>{stay.subtitle}</h3>

              <button>Explore Now</button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default StayCards;
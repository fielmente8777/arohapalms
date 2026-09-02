import Image from "next/image";
import Link from "next/link";
import { SectionWithContainer } from "@/components/sectionComponants";

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
    <SectionWithContainer sectionClassName="max_width mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {stays.map((stay) => (
          <Link
            key={stay.href}
            href={stay.href}
            className="group relative overflow-hidden"
          >
            <div className="group relative aspect-square md:aspect-3/2 rounded-xl overflow-hidden">
              <Image
                src={stay.image}
                alt={stay.subtitle}
                fill
                className="object-cover"
              />
            </div>

            <Link href={stay.href} className="absolute inset-0 bg-black/30 md:bg-black/50 flex justify-center items-center rounded-xl w-full h-full md:opacity-0 transition-all duration-500 md:group-hover:opacity-100">
              <div className="text-center text-white transform translate-y-8 opacity-0 transition-all duration-500 delay-0 group-hover:translate-y-0 group-hover:opacity-100">

                <h2 className="text-2xl underline text-white">{stay.title}</h2>

                <h3 className="font-semibold text-md text-white">{stay.subtitle}</h3>

                {/* <button>Explore Now</button> */}
              </div>
            </Link>

          </Link>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default StayCards;

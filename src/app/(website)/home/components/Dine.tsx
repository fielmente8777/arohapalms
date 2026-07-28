import Image from "next/image";
import Link from "next/link";

interface DineProps {
  background: string;
  title: string;
  description: string[];
  cta: {
    text: string;
    href: string;
  };
}

const Dine = ({ background, title, description, cta }: DineProps) => {
  return (
    <section className=" sticky top-0 h-screen overflow-hidden">
      {/* <Image
        src={background}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      /> */}
      <Image src={background} alt={title} fill className="object-cover" />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="flex flex-col items-center text-center text-white max-w-3xl space-y-4 max-md:px-3">
          <h2 className="text-3xl md:text-6xl">{title}</h2>

          {description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <Link
            href={cta.href}
            className="hidden md:flex h-24 w-24 rounded-full border border-white flex justify-center items-center hover:bg-[#011f4b] transition-all duration-150 underline"
          >
            {cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dine;

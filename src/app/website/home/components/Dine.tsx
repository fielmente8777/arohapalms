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

const Dine = ({
  background,
  title,
  description,
  cta,
}: DineProps) => {
  return (
    <section className="sticky top-0 relative h-screen overflow-hidden">
      <img
        src={background}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max_width flex flex-col items-center text-center text-white">
          <h2>{title}</h2>

          {description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <Link href={cta.href}>
            {cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dine;
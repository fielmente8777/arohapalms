import Image from "next/image";

interface HeroBannerProps {
  image: string;
  subtitle: string;
  title: string;
}

const HeroBanner = ({
  image,
  subtitle,
  title,
}: HeroBannerProps) => {
  return (
    <section className="relative h-screen">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex h-full items-start">
        <div className="max_width">
          <p>{subtitle}</p>

          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
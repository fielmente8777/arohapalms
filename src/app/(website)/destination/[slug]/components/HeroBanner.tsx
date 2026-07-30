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
    <section className="relative h-[70vh]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex h-full items-start">
        <div className="max_width  flex flex-col justify-start px-12">
          <p className=" text-2xl md:text-3xl text-white mb-14 mt-4">{subtitle}</p>

          <h1 className="text-2xl md:text-5xl text-white">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
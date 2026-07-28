import HomeNavbar from "@/components/navbar/HomeNavbar";
import { LazyLoadedVideo } from "@/components/Video";
import Link from "next/link";

interface HeroBannerProps {
  video: string;
  subtitle: string;
  title: string;
  cta: {
    text: string;
    href: string;
  };
}

const HeroBanner = ({ video, subtitle, title, cta }: HeroBannerProps) => {
  return (
    <section className="sticky top-0 h-screen overflow-hidden">
       <div className="inset-x-0 absolute z-30 ">
        <HomeNavbar />
      </div>
      {/* Background Video */}
      <div className="absolute inset-0">
        <LazyLoadedVideo src={video}/>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          {/* Top Line */}
          <div className="mx-auto mb-8 h-px w-48 bg-white/60" />

          {/* Title */}
          <h1 className="text-4xl font-light uppercase md:text-6xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm uppercase tracking-[0.25em] text-white/90 md:text-base">
            {subtitle}
          </p>

          {/* CTA */}
          <Link
            href={cta.href}
            className="mt-10 inline-flex rounded-full border border-white px-8 py-3 text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
          >
            {cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

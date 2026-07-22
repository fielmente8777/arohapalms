import Link from "next/link";

interface OfferBannerProps {
  background: string;
  title: string;
  cta: {
    text: string;
    href: string;
  };
}

const OfferBanner = ({ background, title, cta }: OfferBannerProps) => {
  return (
    <section className="sticky top-0 h-screen overflow-hidden">
      <img
        src={background}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex h-full items-end justify-center pb-32">
        <div className="w-[720px] rounded-full bg-white/40 px-12 py-8 backdrop-blur-md">
          <h2 className="text-center font-serif text-4xl text-[#25375A]">
            {title}
          </h2>

          <div className="mx-auto mt-4 h-px w-3/4 bg-[#25375A]/30" />

          <div className="mt-5 flex justify-center">
            <Link
              href={cta.href}
              className="rounded-full border border-[#25375A] px-8 py-2 text-sm uppercase tracking-wider text-[#25375A] transition hover:bg-[#25375A] hover:text-white"
            >
              {cta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;

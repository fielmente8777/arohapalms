import Image from "next/image";
import Link from "next/link";

interface WebFooterProps {
  logo: string;

  bookNow: {
    text: string;
    href: string;
  };

  links: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  };

  quickLinks: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  };

  social: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  };

  copyright: string;

  poweredBy: {
    text: string;
    href: string;
  };
}

const Footer = ({
  logo,
  bookNow,
  links,
  quickLinks,
  social,
  copyright,
  poweredBy,
}: WebFooterProps) => {
  return (
    <footer className="bg-[#002147] text-white pt-16 pb-8">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-start mb-16 gap-10">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            {/* <div className="relative w-48 h-16">
              <Image
                src={logo}
                alt="Aroha Palms"
                fill
                className="object-contain object-left"
              />
            </div> */}
            <div
              className={`relative 
                              w-35 aspect-[4/.9] md:w-50`}
            >
              <Image
                src={logo}
                alt="logo"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-lg tracking-widest uppercase mb-2">
              {links.title}
            </h3>
            {links.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-md text-slate-200 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-3 ">
            <h3 className="font-bold text-lg tracking-widest uppercase mb-2">
              {quickLinks.title}
            </h3>
            {quickLinks.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-md text-slate-200 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Column */}
          <div className="flex flex-col space-y-3  mb:ml-24">
            <h3 className="font-bold text-lg tracking-widest uppercase mb-2">
              {social.title}
            </h3>
            {social.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-md text-slate-200 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Book Now Button Section */}
          <div className="flex lg:justify-end">
            <Link
              href={bookNow.href}
              className="inline-flex items-center gap-2 bg-[#D9AC6B] text-[#002147] font-semibold text-xs uppercase px-5 py-3 rounded-sm hover:bg-[#c99a58] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {bookNow.text}
            </Link>
          </div>
        </div>

        {/* Bottom Bar Separator */}
        <div className="border-t border-slate-700/60 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-300 gap-4">
          <span>{copyright}</span>

          <Link
            href={poweredBy.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {poweredBy.text}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

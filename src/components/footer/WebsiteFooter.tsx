// import Image from "next/image";
// import Link from "next/link";

// interface WebFooterProps {
//   logo: string;

//   bookNow: {
//     text: string;
//     href: string;
//   };

//   links: {
//     title: string;
//     items: {
//       label: string;
//       href: string;
//     }[];
//   };

//   quickLinks: {
//     title: string;
//     items: {
//       label: string;
//       href: string;
//     }[];
//   };

//   social: {
//     title: string;
//     items: {
//       label: string;
//       href: string;
//     }[];
//   };

//   copyright: string;

//   poweredBy: {
//     text: string;
//     href: string;
//   };
// }

// const Footer = ({
//   logo,
//   bookNow,
//   links,
//   quickLinks,
//   social,
//   copyright,
//   poweredBy,
// }: WebFooterProps) => {
//   return (
//     <footer className="bg-navy max_screen_width text-white pt-16 pb-8">
//       <div className="max-w-8xl mx-auto px-6 md:px-12">
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-start mb-16 gap-10">
//           {/* Logo Section */}
//           <div className="lg:col-span-1">
//             {/* <div className="relative w-48 h-16">
//               <Image
//                 src={logo}
//                 alt="Aroha Palms"
//                 fill
//                 className="object-contain object-left"
//               />
//             </div> */}
//             <div
//               className={`relative
//                               w-35 aspect-[4/.9] md:w-50`}
//             >
//               <Image
//                 src={logo}
//                 alt="logo"
//                 fill
//                 sizes="100%"
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col space-y-3">
//             <h3 className="font-bold text-lg uppercase mb-2">
//               {links.title}
//             </h3>
//             {links.items.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-md text-slate-200 hover:text-white transition-colors"
//               >
//                 {item.label}
//               </Link>

//             ))}
//           </div>

//           <div className="flex flex-col space-y-3 ">
//             <h3 className="font-bold text-lg uppercase mb-2">
//               {quickLinks.title}
//             </h3>
//             {quickLinks.items.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-md text-slate-200 hover:text-white transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           <div className="flex flex-col space-y-3  mb:ml-24">
//             <h3 className="font-bold text-lg uppercase mb-2">
//               {social.title}
//             </h3>
//             {social.items.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-md text-slate-200 hover:text-white transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           <div className="flex lg:justify-end">
//             <Link
//               href={bookNow.href}
//               className="inline-flex items-center gap-2 bg-white text-navy font-semibold text-xs uppercase px-5 py-3 rounded-sm hover:bg-navy hover:text-white hover: border border-white transition-colors"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-4 h-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                 />
//               </svg>
//               {bookNow.text}
//             </Link>
//           </div>
//         </div>

//         <div className="border-t border-slate-700/60 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-300 gap-4">
//           <span>{copyright}</span>

//           <Link
//             href={poweredBy.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white transition-colors"
//           >
//             {poweredBy.text}
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Image from "next/image";
import Link from "next/link";

interface WebFooterProps {
  logo: string;
  cin?: string;
  gstin?: string;

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
  cin,
  gstin,
  bookNow,
  links,
  quickLinks,
  social,
  copyright,
  poweredBy,
}: WebFooterProps) => {
  return (
    <footer className="bg-navy max_screen_width text-white pt-16 lg:pt-24 pb-8">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[auto_auto_auto_auto_auto] lg:justify-between items-start mb-16 gap-10">
          {/* Logo Section */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <div className="relative w-35 aspect-[4/.9] md:w-50">
              <Image
                src={logo}
                alt="logo"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>

            {/* CIN / GSTIN */}
            {(cin || gstin) && (
              <div className="mt-6 space-y-3 text-base text-slate-200 text-center">
                {cin && <p>CIN: {cin}</p>}
                {gstin && <p>GSTIN: {gstin}</p>}
              </div>
            )}
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="mb-2 text-[13px] md:text-lg font-medium uppercase ">
              {links.title}
            </h3>
            {links.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] md:text-base font-light text-slate-200 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="mb-2 text-[13px] md:text-lg font-medium uppercase]">
              {quickLinks.title}
            </h3>
            {quickLinks.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] md:text-base font-light text-slate-200 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="mb-2 text-[13px] md:text-lg font-medium uppercase ">
              {social.title}
            </h3>
            {social.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] md:text-base font-light text-slate-200 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex lg:justify-end">
            <Link
              href={bookNow.href}
              className="inline-block bg-white text-navy font-medium text-[13px]  md:text-base uppercase px-8 py-3.5 hover:bg-navy hover:text-white border border-white transition-colors"
            >
              {bookNow.text}
            </Link>
          </div>
        </div>

        <div className="border-t border-white pt-14 flex flex-col sm:flex-row justify-between items-center text-[11px]  md:text-sm uppercase  text-slate-300 gap-4">
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

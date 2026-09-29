// "use client";

// import { Section } from "@/components/sectionComponants";
// import GallerySlider, { BtnIcon } from "./silder/Image";
// import Image from "next/image";

// interface AboutProps {
//   title: string;
//   intro: string;
//   description: string[];
//   images: string[];
// }

// const About = ({ title, intro, description, images }: AboutProps) => {
//   return (
//     <Section className="bg-background-2 ">
//       <div >
//         <div className="mx-auto w-full pt-16! ">
//           <div className="flex flex-col items-start md:flex-col-1 lg:flex-row">

//             <div className=" w-full md:w-auto">
//               <GallerySlider images={images} />
//             </div>

//             <div
//               className="flex w-full flex-col justify-between
//             md:h-[568px]
//             lg:px-0
//             lg:ml-10
//             md:px-4
//             md:py-4
//             lg:pr-8
//             "
//             >
//               <div>
//                 <h2 className="text-2xl font-normal text-[#17384e] md:text-3xl lg:text-5xl">
//                   {title}
//                 </h2>

//                 <p className="mt-6 text-sm text-gray-600 md:text-lg lg:text-xl">
//                   {intro}
//                 </p>

//                 <div className="mt-4 space-y-4">
//                   {description.map((text, index) => (
//                     <p
//                       key={index}
//                       className="text-sm text-gray-600 md:text-lg lg:text-xl"
//                     >
//                       {text}
//                     </p>
//                   ))}
//                 </div>
//               </div>

//               <div className="lg:mt-8 flex items-center justify-between lg:pt-2">
//                 <button
//                   type="button"
//                   className="
//                   hidden lg:block
//                    -mt-14
//                     gallery-slider-next
//                     flex
//                     items-center
//                     rotate-180
//                   "
//                   aria-label="Next image"
//                 >
//                   <BtnIcon />
//                 </button>

//                 {/* CONTACT */}
//                 <a
//                   href="/contact-us"
//                   className="
//                     border-b
//                     border-[#17384e]
//                     pb-0.5
//                     text-[10px]
//                     uppercase
//                     text-[#17384e]
//                   "
//                 >
//                   Contact
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-10 w-full overflow-hidden md:mt-16">
//         <Image
//           src="/images/Greek1.png"
//           alt=""
//           width={1440}
//           height={80}
//           className="h-auto w-full object-cover"
//         />
//       </div>
//     </Section>
//   );
// };

// export default About;

"use client";

import { Section } from "@/components/sectionComponants";
import GallerySlider, { BtnIcon, useSlider } from "./silder/Image";
import Image from "next/image";

interface AboutProps {
  title: string;
  intro: string;
  description: string[];
  images: string[];
}

const About = ({ title, intro, description, images }: AboutProps) => {
  const { index, next, prev } = useSlider(images.length);

  return (
    <Section className="bg-background-2">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
        <h2 className=" lg:hidden justify-between text-center font-normal mt-8 text-blue text-3xl lg:text-5xl xl:text-5xl">
          {title}
        </h2>
        <div className="w-full min-w-0 md:w-[50%] lg:w-[62%] xl:w-[941px]">
          <GallerySlider
            images={images}
            index={index}
            onPrev={prev}
            onNext={next}
          />
        </div>

        <div className="flex w-full flex-col justify-between px-6 md:px-6 lg:w-[42%] lg:px-0 xl:w-[500px]">
          <div>
            <h2 className="hidden lg:block font-normal text-blue text-3xl lg:text-5xl xl:text-5xl">
              {title}
            </h2>

            <p className="mt-6 text-lg text-gray-600 lg:text-xl xl:text-xl">
              {intro}
            </p>

            <div className="mt-4 space-y-4">
              {description.map((text, i) => (
                <p
                  key={i}
                  className="text-lg text-gray-600 lg:text-xl xl:text-xl"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between lg:mb-0">
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="hidden rotate-180 items-center lg:flex"
            >
              <BtnIcon />
            </button>

            <a
              href="/contact-us"
              className="ml-auto border-b border-[#17384e] pb-0.5 text-sm uppercase text-[#17384e]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full overflow-hidden md:mt-16">
        <Image
          src="/images/Greek1.png"
          alt=""
          width={1440}
          height={80}
          className="h-auto w-full object-cover"
        />
      </div>
    </Section>
  );
};

export default About;

import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import { JSX } from "react/jsx-runtime";

interface ConfidenceProps {
  title: string;
  features: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];

  gallery: string[];
}

const Confidence = ({ title, features, gallery }: ConfidenceProps) => {
  return (
    <SectionWithContainer sectionClassName="bg-white">
      <div className="max_width">
        <h2 className="text-center text-3xl md:text-[60px] text-blue mb-20">{title}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          {features.map((item) => (
            <div
              key={item.title}
              className="text-center flex flex-col items-center"
            >
              <span>{item.icon}</span>

              <h3 className="text-md md:text-xl text-blue mt-8 mb:mb-6">{item.title}</h3>

              <p className="hidden md:text-xl text-[#005b96] leading-9">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-3 gap-8">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3]"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {gallery.map((img, index) => (
            <div
              key={index}
              className="relative w-full aspect-4/3 overflow-hidden"
            >
              <Image src={img} alt={title} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Confidence;

import { FaqSectionProps } from "@/@types/landingPageTypes";
import Accordion from "@/components/accordion/Accordion";
import Form1 from "@/components/forms/Form1";
import Form2 from "@/components/forms/Form2";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

const FaqSection: React.FC<FaqSectionProps> = ({
  image,
  tagline,
  title,
  items,
  concierge,
}) => {
  const faqImage = image || "/rooms/Imperial/AOB_0110[1]_43_11zon.jpg";
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-10 lg:gap-16 max-w-5xl mx-auto">
        <div className="lg:block hidden w-full aspect-4/5 relative">
          <Image
            src={faqImage}
            alt="faq"
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="space-y-10">
          <div className="space-y-2">
            <p className="text-sm text-primary uppercase tracking-widest">
              {tagline}
            </p>
            <SectionHeading title={title} wrapperClassName="max-w-sm w-full" />
          </div>
          <div className="lg:hidden w-full aspect-4/3 relative">
            <Image
              src={faqImage}
              alt="faq"
              fill
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="divide-y divide-[#E5E1D8] border-b border-[#E5E1D8]">
            {items.map((item, index) => (
              <Accordion key={index} {...item} />
            ))}
          </div>
        </div>
        {/* <div className="bg-background-2 border border-[#E5E1D8] rounded-2xl md:p-8 p-4">
          <div className="space-y-2">
            <p className="text-sm text-primary uppercase tracking-widest">
              {concierge.tagline}
            </p>
            <h3 className="text-2xl md:text-3xl">{concierge.title}</h3>
            <p className="text-secondary mt-2 mb-6 text-sm">
              {concierge.description}
            </p>
            <Form2 />
            <p className="text-secondary mt-3 text-sm">{concierge.note}</p>
          </div>
        </div> */}
      </div>
    </SectionWithContainer>
  );
};

export default FaqSection;

import { SectionWithContainer } from "@/components/sectionComponants";

interface HouseKeepingRulesProps {
  title: string;
  introduction: string;
  sections: {
    icon: string;
    title: string;
    rules: string[];
  }[];
  footer: string;
  contact: {
    text: string;
  };
}

const HouseKeepingRules = ({
  title,
  introduction,
  sections,
  footer,
  contact,
}: HouseKeepingRulesProps) => {
  return (
    <SectionWithContainer defaultPadding={false} sectionClassName="py-8 md:py-12">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-center text-blue text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light leading-tight mb-6 md:mb-8 font-serif">
          {title}
        </h1>

        <p className="mb-6 md:mb-8 text-sm sm:text-base font-light leading-relaxed text-[#5A5856]">
          {introduction}
        </p>

        {sections.map((section, index) => (
          <div key={index} className="mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-light text-blue mb-2.5 md:mb-3">
              {section.icon} {section.title}
            </h2>

            <ol className="list-decimal pl-5 sm:pl-6 space-y-2 text-sm sm:text-base font-light leading-relaxed text-[#5A5856]">
              {section.rules.map((rule, ruleIndex) => (
                <li
                  key={ruleIndex}
                  dangerouslySetInnerHTML={{ __html: rule }}
                />
              ))}
            </ol>
          </div>
        ))}
        <p className="mt-6 md:mt-8 text-sm sm:text-base font-light leading-relaxed text-[#5A5856]" dangerouslySetInnerHTML={{ __html: footer }} />

        <p className="mt-3 md:mt-4 text-sm sm:text-base font-light leading-relaxed text-[#5A5856]" dangerouslySetInnerHTML={{ __html: contact.text }} />
      </div>
    </SectionWithContainer>
  );
};

export default HouseKeepingRules;

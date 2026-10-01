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
    <SectionWithContainer sectionClassName="py-8 md:py-20">
      <div className="max-w-[1100px] mx-auto px-0 md:px-6">
        <h1 className="text-center text-blue text-3xl sm:text-4xl md:text-[54px] leading-tight mb-8 md:mb-12 font-serif">
          {title}
        </h1>

        <p className="mb-8 md:mb-10 text-base md:text-lg leading-relaxed md:leading-8 text-[#2b2b2b]">
          {introduction}
        </p>

        {sections.map((section, index) => (
          <div key={index} className="mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue mb-3 md:mb-5">
              {section.icon} {section.title}
            </h2>

            <ol className="list-decimal pl-5 md:pl-7 space-y-3 md:space-y-4 text-base md:text-lg leading-relaxed text-[#2b2b2b]">
              {section.rules.map((rule, ruleIndex) => (
                <li
                  key={ruleIndex}
                  dangerouslySetInnerHTML={{ __html: rule }}
                />
              ))}
            </ol>
          </div>
        ))}
        <p className="mt-8 md:mt-10 text-base md:text-lg leading-relaxed text-[#2b2b2b]" dangerouslySetInnerHTML={{ __html: footer }} />

        <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-[#2b2b2b]" dangerouslySetInnerHTML={{ __html: contact.text }} />
      </div>
    </SectionWithContainer>
  );
};

export default HouseKeepingRules;

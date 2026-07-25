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
    <SectionWithContainer sectionClassName="py-20">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-center text-blue text-[54px] mb-12">{title}</h1>

        <p className="mb-10 text-lg leading-8">{introduction}</p>

        {sections.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-semibold text-blue mb-5">
              {section.icon} {section.title}
            </h2>

            <ol className="list-decimal pl-7 space-y-4">
              {section.rules.map((rule, ruleIndex) => (
                <li
                  key={ruleIndex}
                  dangerouslySetInnerHTML={{ __html: rule }}
                />
              ))}
            </ol>
          </div>
        ))}
        <p className="mt-10" dangerouslySetInnerHTML={{ __html: footer }} />

         <p className="mt-6" dangerouslySetInnerHTML={{ __html: contact.text }} />
      </div>
    </SectionWithContainer>
  );
};

export default HouseKeepingRules;

import { SectionWithContainer } from "@/components/sectionComponants";

interface PolicySection {
  title: React.ReactNode;
  content: React.ReactNode;
  description?: React.ReactNode; // Made optional since not all sections have it
  points?: React.ReactNode[];
}

interface PolicyProps {
  title: React.ReactNode;
  lastUpdated: React.ReactNode;
  description: React.ReactNode;
  sections: PolicySection[];
}

const Policy = ({
  title,
  lastUpdated,
  description,
  sections,
}: PolicyProps) => {
  return (
    <SectionWithContainer sectionClassName="py-8 md:py-20">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-center text-blue text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal leading-tight mb-6 md:mb-8 font-serif">
          {title}
        </h1>

        <p className="text-gray-600 mb-6 md:mb-12 text-sm sm:text-base">
          <b>Last Updated:</b> {lastUpdated}
        </p>
        <p className="mb-6 md:mb-10 text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-9 text-[#333333]">
          {description}
        </p>

        <div className="space-y-8 md:space-y-10 text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-9 text-[#333333]">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-blue mb-3 md:mb-4">
                {section.title}
              </h2>

              {/* Description if present */}
              {section.description && (
                <div className="mb-4">{section.description}</div>
              )}

              {/* Content */}
              <div>{section.content}</div>

              {/* Points if present */}
              {section.points && (
                <ul className="list-disc pl-5 sm:pl-6 md:pl-8 mt-3 md:mt-5 space-y-2 md:space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Policy;
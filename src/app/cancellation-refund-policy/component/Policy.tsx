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
    <SectionWithContainer defaultPadding={false} sectionClassName="py-8 md:py-12">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-center text-blue text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light leading-tight mb-4 md:mb-6 font-serif">
          {title}
        </h1>

        <p className="text-gray-500 mb-6 md:mb-8 text-xs sm:text-sm font-light">
          <b>Last Updated:</b> {lastUpdated}
        </p>
        <p className="mb-6 md:mb-8 text-sm sm:text-base leading-relaxed text-[#5A5856] font-light">
          {description}
        </p>

        <div className="space-y-6 md:space-y-8 text-sm sm:text-base leading-relaxed text-[#5A5856]">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-light text-blue mb-2.5 md:mb-3">
                {section.title}
              </h2>

              {/* Description if present */}
              {section.description && (
                <div className="mb-3 font-light">{section.description}</div>
              )}

              {/* Content */}
              <div className="font-light">{section.content}</div>

              {/* Points if present */}
              {section.points && (
                <ul className="list-disc pl-5 sm:pl-6 mt-2.5 space-y-1.5 font-light">
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
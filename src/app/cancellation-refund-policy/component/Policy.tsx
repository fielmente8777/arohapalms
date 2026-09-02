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
    <SectionWithContainer sectionClassName="py-20">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-center text-blue text-[64px] leading-tight mb-4">
          {title}
        </h1>

        <p className="text-gray-600 mb-12">
          <b>Last Updated:</b> {lastUpdated}
        </p>
        <p className="mb-10 leading-9">
          {description}
        </p>

        <div className="space-y-10 text-[18px] leading-9 text-[#333333]">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-[28px] font-semibold text-blue mb-4">
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
                <ul className="list-disc pl-8 mt-5 space-y-3">
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
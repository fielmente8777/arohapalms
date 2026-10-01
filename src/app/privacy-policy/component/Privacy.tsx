import { SectionWithContainer } from "@/components/sectionComponants";

interface Section {
  title: React.ReactNode;
  content?: React.ReactNode;
  points?: React.ReactNode[];
  extra?: React.ReactNode;
  extraPoints?: React.ReactNode[];
  footer?: React.ReactNode;
  footerPoints?: React.ReactNode[];
}

interface PrivacyProps {
  title: React.ReactNode;
  effectiveDate: React.ReactNode;
  introduction: React.ReactNode;
  sections: Section[];
  closingNote: React.ReactNode;
}

const Privacy = ({
  title,
  effectiveDate,
  introduction,
  sections,
  closingNote,
}: PrivacyProps) => {
  return (
    <SectionWithContainer sectionClassName="py-8 md:py-20">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-center text-blue text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal font-serif leading-tight mb-6 md:mb-8">
          {title}
        </h1>

        <p className="mb-6 md:mb-12 text-sm sm:text-base text-gray-600">
          <b>Effective Date:</b> {effectiveDate}
        </p>

        <div className="space-y-8 md:space-y-10 text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-9 text-[#333333]">
          <div className="leading-relaxed md:leading-9">{introduction}</div>

          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-blue text-xl sm:text-2xl md:text-[28px] font-semibold mb-3 md:mb-4">
                {section.title}
              </h2>

              {section.content && <div>{section.content}</div>}

              {section.points && (
                <ul className="list-disc pl-5 sm:pl-6 md:pl-8 mt-3 md:mt-4 space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              {section.extra && (
                <>
                  <div className="mt-4 md:mt-6">{section.extra}</div>

                  {section.extraPoints && (
                    <ul className="list-disc pl-5 sm:pl-6 md:pl-8 mt-3 md:mt-4 space-y-2">
                      {section.extraPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}

              {section.footer && (
                <>
                  <div className="mt-4 md:mt-6">{section.footer}</div>

                  {section.footerPoints && (
                    <ul className="list-disc pl-5 sm:pl-6 md:pl-8 mt-3 md:mt-4 space-y-2">
                      {section.footerPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          ))}

          <div className="pt-4 md:pt-6 font-medium">{closingNote}</div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Privacy;
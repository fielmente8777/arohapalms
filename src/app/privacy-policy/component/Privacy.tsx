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
    <SectionWithContainer defaultPadding={false} sectionClassName="py-8 md:py-12">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-center text-blue text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light font-serif leading-tight mb-4 md:mb-6">
          {title}
        </h1>

        <p className="mb-6 md:mb-8 text-xs sm:text-sm text-gray-500 font-light">
          <b>Effective Date:</b> {effectiveDate}
        </p>

        <div className="space-y-6 md:space-y-8 text-sm sm:text-base leading-relaxed text-[#5A5856] font-light">
          <div className="leading-relaxed font-light">{introduction}</div>

          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-blue text-lg sm:text-xl md:text-2xl font-light mb-2.5 md:mb-3">
                {section.title}
              </h2>

              {section.content && <div className="font-light">{section.content}</div>}

              {section.points && (
                <ul className="list-disc pl-5 sm:pl-6 mt-2.5 space-y-1.5 font-light">
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
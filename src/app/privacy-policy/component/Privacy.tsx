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
    <SectionWithContainer sectionClassName="py-20">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-center text-blue text-[64px] leading-tight mb-4">
          {title}
        </h1>

        <p className=" mb-12">
          <b>Effective Date:</b> {effectiveDate}
        </p>

        <div className="space-y-10 text-[18px] leading-9 text-[#333333]">
          <div>{introduction}</div>

          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-blue text-[28px] font-semibold mb-4">
                {section.title}
              </h2>

              {section.content && <div>{section.content}</div>}

              {section.points && (
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              {section.extra && (
                <>
                  <div className="mt-6">{section.extra}</div>

                  {section.extraPoints && (
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      {section.extraPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}

              {section.footer && (
                <>
                  <div className="mt-6">{section.footer}</div>

                  {section.footerPoints && (
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      {section.footerPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          ))}

          <div className="pt-6">{closingNote}</div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Privacy;
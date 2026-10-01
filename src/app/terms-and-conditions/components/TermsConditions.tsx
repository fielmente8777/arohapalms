import React from "react";
import { SectionWithContainer } from "@/components/sectionComponants";

interface Section {
  title: React.ReactNode;
  content?: React.ReactNode;
  points?: React.ReactNode[];
}

interface TermsConditionsProps {
  title: React.ReactNode;
  introduction?: React.ReactNode;
  sections: Section[];
  closingNote?: React.ReactNode;
}

const TermsConditions = ({
  title,
  introduction,
  sections,
  closingNote,
}: TermsConditionsProps) => {
  return (
    <SectionWithContainer sectionClassName="py-8 md:py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-0 md:px-6 lg:px-8">

        {/* Header */}
        <header className="mb-8 md:mb-20 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[4rem] lg:text-[5rem] leading-tight md:leading-none tracking-tight text-blue">
            {title}
          </h1>

          {introduction && (
            <div className="mx-auto mt-4 md:mt-8 max-w-3xl text-base sm:text-lg leading-relaxed md:leading-9 text-[#3E4A5A]">
              {introduction}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="space-y-8 md:space-y-14">
          {sections.map((section, index) => (
            <section key={index}>

              <h2 className="mb-3 md:mb-5 font-serif text-xl sm:text-2xl md:text-[2rem] font-semibold text-blue">
                {section.title}
              </h2>

              {section.content && (
                <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-9 text-[#334155]">
                  {section.content}
                </div>
              )}

              {section.points && (
                <ul className="mt-3 md:mt-6 list-disc space-y-2 md:space-y-4 pl-5 sm:pl-6 text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-9 text-[#334155] marker:text-[#102B5C]">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {closingNote && (
          <footer className="mt-12 md:mt-24 border-t border-gray-200 pt-6 md:pt-10">
            <p className="text-center text-lg sm:text-xl font-semibold text-[#102B5C]">
              {closingNote}
            </p>
          </footer>
        )}
      </div>
    </SectionWithContainer>
  );
};

export default TermsConditions;
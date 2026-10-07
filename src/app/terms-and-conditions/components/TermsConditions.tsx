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
    <SectionWithContainer defaultPadding={false} sectionClassName="py-8 md:py-12 bg-white">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <header className="mb-6 md:mb-10 text-center">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light leading-tight tracking-tight text-blue">
            {title}
          </h1>

          {introduction && (
            <div className="mx-auto mt-4 md:mt-6 max-w-3xl text-sm sm:text-base font-light leading-relaxed text-[#5A5856]">
              {introduction}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="space-y-6 md:space-y-8">
          {sections.map((section, index) => (
            <section key={index}>

              <h2 className="mb-2.5 md:mb-3 font-serif text-lg sm:text-xl md:text-2xl font-light text-blue">
                {section.title}
              </h2>

              {section.content && (
                <div className="space-y-3 text-sm sm:text-base font-light leading-relaxed text-[#5A5856]">
                  {section.content}
                </div>
              )}

              {section.points && (
                <ul className="mt-2.5 list-disc space-y-1.5 pl-5 sm:pl-6 text-sm sm:text-base font-light leading-relaxed text-[#5A5856] marker:text-[#102B5C]">
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
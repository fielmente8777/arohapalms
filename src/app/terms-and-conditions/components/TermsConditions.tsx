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
    <SectionWithContainer sectionClassName="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Header */}
        <header className="mb-20 text-center">
          <h1 className="font-serif text-[3.5rem] leading-none tracking-tight text-blue md:text-[5rem]">
            {title}
          </h1>

          {introduction && (
            <div className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#3E4A5A]">
              {introduction}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="space-y-14">
          {sections.map((section, index) => (
            <section key={index}>

              <h2 className="mb-5 font-serif text-[2rem] font-semibold text-blue">
                {section.title}
              </h2>

              {section.content && (
                <div className="space-y-6 text-[18px] leading-9 text-[#334155]">
                  {section.content}
                </div>
              )}

              {section.points && (
                <ul className="mt-6 list-disc space-y-4 pl-6 text-[18px] leading-9 text-[#334155] marker:text-[#102B5C]">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {closingNote && (
          <footer className="mt-24 border-t border-gray-200 pt-10">
            <p className="text-center text-xl font-semibold text-[#102B5C]">
              {closingNote}
            </p>
          </footer>
        )}
      </div>
    </SectionWithContainer>
  );
};

export default TermsConditions;
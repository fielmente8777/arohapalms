import React from "react";
import { SectionWithContainer } from "@/components/sectionComponants";

interface Section {
  title: React.ReactNode;
  content?: React.ReactNode;
  points?: React.ReactNode[];
}

interface TermsConditionsProps {
  title: React.ReactNode;
  introduction: React.ReactNode;
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
    <SectionWithContainer sectionClassName="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-5xl px-6">

        {/* Page Heading */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-[#0B2D63] md:text-5xl">
            {title}
          </h1>

          <div className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            {introduction}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:shadow-md"
            >
              <h2 className="mb-4 text-2xl font-semibold text-[#0B2D63]">
                {section.title}
              </h2>

              {section.content && (
                <div className="text-gray-700 leading-8">
                  {section.content}
                </div>
              )}

              {section.points && section.points.length > 0 && (
                <ul className="mt-5 list-disc space-y-3 pl-6 text-gray-700 leading-8">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Closing Note */}
        {closingNote && (
          <div className="mt-16 rounded-xl bg-gray-50 border border-gray-200 p-8 text-center">
            <p className="text-lg font-medium text-[#0B2D63]">
              {closingNote}
            </p>
          </div>
        )}
      </div>
    </SectionWithContainer>
  );
};

export default TermsConditions;
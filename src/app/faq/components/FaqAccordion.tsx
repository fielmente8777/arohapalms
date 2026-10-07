"use client";

interface FAQAccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordion = ({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQAccordionProps) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-4 py-3 text-left"
      >
        <span className="text-lg w-5 font-light">{isOpen ? "−" : "+"}</span>

        <span className="flex-1 text-base sm:text-lg font-light text-blue transition-colors duration-300 hover:text-[#005b96]">
          {question}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-8 sm:px-10 pb-4 text-sm sm:text-base font-light text-[#5A5856] leading-relaxed">{answer}</div>
      </div>
    </div>
  );
};

export default FAQAccordion;

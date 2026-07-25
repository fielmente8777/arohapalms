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
        <span className="text-xl w-5">{isOpen ? "−" : "+"}</span>

        <span className="flex-1 text-lg font-medium text-blue transition-colors duration-300 hover:text-[#005b96]">
          {question}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-10 pb-4">{answer}</div>
      </div>
    </div>
  );
};

export default FAQAccordion;

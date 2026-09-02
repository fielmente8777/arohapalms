"use client";

import { useState } from "react";
import FAQAccordion from "./FaqAccordion";

interface FAQCategoryProps {
  title: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FAQCategory = ({ title, faqs }: FAQCategoryProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      <h2 className="text-blue text-[24px] mb-4">
        {title}
      </h2>

      <div className="border border-[#D9D9D9] divide-y divide-[#D9D9D9]">
        {faqs.map((faq, index) => (
          <FAQAccordion
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQCategory;
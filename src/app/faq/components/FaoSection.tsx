import FAQCategory from "./FaqCategory";

interface FAQSectionProps {
  title: string;
  sections: {
    title: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  }[];
}

const FAQSection = ({ title, sections }: FAQSectionProps) => {
  return (
    <section className="bg-white pt-6 pb-12 md:py-24">
      <div className="max_width max-w-[900px] mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-center text-blue text-3xl sm:text-4xl md:text-[56px] leading-tight mb-8 md:mb-16">
          {title}
        </h1>

        <div className="space-y-10">
          {sections.map((section) => (
            <FAQCategory
              key={section.title}
              title={section.title}
              faqs={section.faqs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
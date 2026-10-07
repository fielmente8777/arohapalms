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
    <section className="bg-white py-8 md:py-12">
      <div className="max_width max-w-[900px] mx-auto">
        <h1 className="text-center text-blue text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light leading-tight mb-6 md:mb-10 font-serif">
          {title}
        </h1>

        <div className="space-y-8 md:space-y-10">
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
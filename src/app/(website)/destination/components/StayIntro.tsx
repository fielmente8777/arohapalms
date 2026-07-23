interface StayIntroProps {
  title: string;
  description: string[];
}

const StayIntro = ({ title, description }: StayIntroProps) => {
  return (
    <section className="max_width">
      <h1 className="font-serif text-4xl font-normal! text-blue mb-4">{title}</h1>
      <div className=" w-200 mt-10! mb-4 h-px bg-blue text-blue" />

      {description.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </section>
  );
};

export default StayIntro;

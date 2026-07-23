interface IntroProps {
  title: string;
  description: string[];
}

const Intro = ({ title, description }: IntroProps) => {
  return (
    <section className="max_width py-24">
      <div className="max-w-4xl ">

        <h1 className="font-serif text-5xl text-blue mb-4">{title}</h1>
        <div className="max-w-4xl mb-4 h-px bg-blue text-blue" />
        {description.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

    </section>
  );
};

export default Intro;
interface IntroProps {
  title: string;
  description: string[];
}

const Intro = ({ title, description }: IntroProps) => {
  return (
    <section className="max_width">
      <h1>{title}</h1>

      {description.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </section>
  );
};

export default Intro;
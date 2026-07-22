interface ContactHeroProps {
  title: string;
}

const ContactHero = ({ title }: ContactHeroProps) => {
  return (
    <section className="max_width">
      <h1>{title}</h1>
    </section>
  );
};

export default ContactHero;
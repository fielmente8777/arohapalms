import Image from "next/image";

interface ApproachProps {
  title: string;
  description: string;

  sections: {
    title: string;
    icon: string;

    routes: {
      distance: string;
      duration: string;
      location: string;
    }[];
  }[];

  footer: {
    text: string;
    gst: string;
  };
}

const Approach = ({
  title,
  description,
  sections,
  footer,
}: ApproachProps) => {
  return (
    <section className="max-w-3xl mx-auto py-24">
      <h2 className="text-5xl text-center border-b pb-8 w-100 mx-auto">{title}</h2>

      <p className="text-center mt-7">{description}</p>

      {sections.map((section) => (
        <div key={section.title} className="py-10" >
          <div className="flex flex-col items-center gap-6 justify-center">

            <div className="aspect-square relative h-16 w-16">


              <Image
                src={section.icon}
                alt={section.title}
                fill
                className="rounded-full object-cover overflow-hidden"
              />

            </div>
            <h3>{section.title}</h3>

          </div>

          <div className="flex justify-between mt-14">
            {section.routes.map((route) => (
              <div key={route.location} className="flex flex-col justify-center items-center gap-4">
                <h4 className="text-4xl text-blue font-semibold">{route.distance}</h4>

                <span className="text-green-700">{route.duration}</span>

                <p>{route.location}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8">
        <p className="text-center font-medium">{footer.text}</p>

        <p className="text-center font-medium">{footer.gst}</p>
      </div>
    </section>
  );
};

export default Approach;
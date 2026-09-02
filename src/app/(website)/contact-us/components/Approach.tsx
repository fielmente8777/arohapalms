import Image from "next/image";
import { ReactNode } from "react";

interface ApproachProps {
  heading: string;
  desc: string;
  title: string;
  description: string;

  sections: {
    title: string;
    icon: ReactNode;

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
  heading,
  desc,
  title,
  description,
  sections,
  footer,
}: ApproachProps) => {
  return (
    <section className="max-w-3xl mx-auto px-5 py-24">
      <h2 className="text-2xl md:text-3xl text-start mx-auto">{heading}</h2>

      <p className="text-md md:text-lg text-start mt-7 whitespace-pre-line">
        {desc}
      </p>
      <h2 className="text-5xl text-center mt-12 border-b pb-5 w-100 mx-auto">
        {title}
      </h2>

      <p className="text-start mt-7">{description}</p>

      {sections.map((section) => (
        <div key={section.title} className="py-10">
          <div className="flex flex-col items-center gap-6 justify-center">
            <div className="aspect-square relative h-16 w-16">
              <div className="h-16 w-16 items-center justify-center flex">
                {section.icon}
              </div>
            </div>

            <h3>{section.title}</h3>

          </div>

          <div className="flex flex-col md:flex-row gap-10 md:justify-between mt-14">
            {section.routes.map((route) => (
              <div
                key={route.location}
                className="flex flex-col justify-center items-center gap-4"
              >
                <h4 className="text-4xl text-dark font-semibold">
                  {route.distance}
                </h4>

                <span className="text-blue">{route.duration}</span>

                <p>{route.location}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8">
        <p className=" text-start md:text-center font-medium">{footer.text}</p>

        <p className=" text-start md:text-center font-medium">{footer.gst}</p>
      </div>
    </section>
  );
};

export default Approach;

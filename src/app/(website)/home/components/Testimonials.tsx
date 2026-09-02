import Image from "next/image";
import { Section, SectionWithContainer } from "@/components/sectionComponants";

interface Testimonial {
  image: string;
  tag: string;
  title: string;
  review: string;
  name: string;
}

interface TestimonialsProps {
  testimonial: Testimonial;
}

const Testimonials = ({ testimonial }: TestimonialsProps) => {
  return (
    <Section defaultPadding={false} className="w-full bg-background-2 py-6 md:px-0">
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {/* IMAGE */}
        <div className="relative min-h-[500px] md:min-h-[680px]">
          <Image
            src={testimonial.image}
            alt={testimonial.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          {/* BORDER */}
          {/* ARCH BORDER */}
          <div
            className="
    absolute
    top-2
    right-2
    bottom-0
    left-2
    rounded-t-[140px]
    border-t
    border-x
    border-white/80
    md:top-3
    md:right-3
    md:left-3
    md:rounded-t-[190px]
  "
          />
        </div>

        {/* CONTENT */}
        <div className="flex items-center bg-background-2 px-8 py-16 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[650px]">
            {/* TAG */}
            <p className="text-sm uppercase tracking-[0.3em] text-p2">
              {testimonial.tag}
            </p>

            {/* DECORATIVE IMAGE */}
            <div className="relative mt-2 h-[9px] w-[150px]">
              <Image
                src="/images/design.png"
                alt=""
                fill
                className="object-cover object-left"
              />
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-5
                font-primary
                text-4xl
                font-light
                leading-[1.2]
                text-p3
                md:text-5xl
                lg:text-[48px]
              "
            >
              {testimonial.title}
            </h2>

            {/* GOOGLE */}
            <div className="mt-7 relative w-[42px] aspect-square">
              <Image
                src="/home/google.png"
                alt="Google"
                fill
                className="object-contain"
              />
            </div>

            {/* REVIEW */}
            <p className="mt-6 max-w-[620px] text-base leading-[1.65] text-gray md:text-lg">
              {testimonial.review}
            </p>

            {/* NAME */}
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-p3">
              {testimonial.name}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

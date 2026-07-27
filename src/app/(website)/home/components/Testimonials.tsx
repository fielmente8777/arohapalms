import TestimonialsSlider from "@/components/sliders/TestimonialsSlider";
import Image from "next/image";

interface TestimonialsProps {
  logo: string;
  title: string;
  reviews: {
    avatar: string;
     googleIcon: string;
    name: string;
    time: string;
    rating: number;
    review: string;
  }[];
}

const Testimonials = ({ logo, title, reviews }: TestimonialsProps) => {
  return (
    <section className=" bg-white relative z-20 py-10">
      <div className="max_width">
        <div className="relative mx-auto w-[300px] aspect-[5/1.8] mb-6">
          <Image src={logo} alt={title} fill className="object-container" />
        </div>

        <h2 className="text-center max-w-5xl mx-auto text-4xl mb-18 text-dark">
          {title}
        </h2>

        <div className="w-full">
          <TestimonialsSlider reviews={reviews} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

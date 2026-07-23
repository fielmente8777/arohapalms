import Image from "next/image";
import TestimonialsSlider from "@/app/landing-page/component/Slider/TestimonialsSlider";

interface TestimonialsProps {
  logo: string;
  title: string;
  reviews: {
    avatar: string;
    name: string;
    time: string;
    rating: number;
    review: string;
  }[];
}

const Testimonials = ({ logo, title, reviews }: TestimonialsProps) => {
  return (
    <section className=" bg-white/10 relative z-20 py-10">
      <div className="max_width">
        <Image src={logo} alt={title} fill className="object-cover" />

        <h2 className="text-center font-serif max-w-5xl mx-auto text-5xl mb-18 text-blue">{title}</h2>

        <div className="w-full">

          <TestimonialsSlider reviews={reviews} />
        </div>
      </div>
    </section >
  );
};

export default Testimonials;


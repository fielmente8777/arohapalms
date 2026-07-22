import Image from "next/image";
import TestimonialsSlider from "@/app/(landing-page)/component/Slider/TestimonialsSlider";

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
    <section>
      <div className="max_width">
        <Image src={logo} alt={title} fill className="object-cover" />

        <h2>{title}</h2>

        <TestimonialsSlider reviews={reviews} />
      </div>
    </section>
  );
};

export default Testimonials;

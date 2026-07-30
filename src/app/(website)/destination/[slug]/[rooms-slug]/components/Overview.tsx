import { Container, Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";

interface OverviewProps {
  data: {
    topText: string;
    image: string;
    bottomText: string;
  };
}

const Overview = ({ data }: OverviewProps) => {
  return (
    <Section>
      <Container>
        {/* Top Description */}
        <p className="mx-auto max-w-4xl text-center text-[18px] leading-9 text-gray-700">
          {data.topText}
        </p>

        {/* Image */}
        <div className="my-14 flex justify-center">
          <Image
            src={data.image}
            alt="Overview"
            width={700}
            height={450}
            className="h-auto w-full max-w-2xl object-cover"
          />
        </div>

        {/* Bottom Description */}
        <p className="mx-auto max-w-4xl text-center text-[18px] leading-9 text-gray-700">
          {data.bottomText}
        </p>
      </Container>
    </Section>
  );
};

export default Overview;

"use client";
import LandingNavbar from "@/components/navbar/LandingNavbar";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

interface BannerProps {
  tag: string;
  title: string;
  description: string;
  benefits: string;
  image: string;
  images: string[];
}

const Banner: React.FC<BannerProps> = ({ images }) => {
  return (
    <Section defaultPadding={false} className="relative w-full">
      <div className="inset-x-0 absolute z-30 ">
        <LandingNavbar />
      </div>
      <div className="absolute inset-0 z-10 bg-black/10" />
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        speed={5000}
        loop={true}
        modules={[Autoplay]}
        freeMode={true}
        autoplay={{
          delay: 2000,
        }}
        renderSlide={(image) => (
          <div className="relative w-full lg:aspect-[16/7.7] aspect-[4/3.7] overflow-hidden">
            <Image src={image} alt="banner" fill className="object-cover" />
          </div>
        )}
      />

      {/* <div className="absolute inset-0  z-20 md:flex items-end pb-10 justify-center  hidden">
        <Container>
          <div
            className="bg-background/80 py-6 px-1.5 rounded-[20px] mt-8 flex flex-col gap-5 max-w-6xl w-full mx-auto"
            id="form"
          >
            <Form1 />
            <p
              className="text-sm text-light max-w-3xl text-center mx-auto"
              dangerouslySetInnerHTML={{ __html: benefit }}
            />
          </div>
        </Container>
      </div> */}
    </Section>
  );
};

export default Banner;

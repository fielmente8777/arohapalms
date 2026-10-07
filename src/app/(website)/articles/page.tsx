import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GFS_Neohellenic } from "next/font/google";
import blogPostPageData from "../[slug]/pageData";
import { Container } from "@/components/sectionComponants";

const gfsNeohellenic = GFS_Neohellenic({
  subsets: ["greek", "latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Aroha Edit | Blogs - Aroha Palms",
  description:
    "Explore stories, guides, and updates from Aroha Palms luxury villas and apartments in North Goa.",
};

export default function ArticlesPage() {
  return (
    <main className="bg-[#F6F7EB] pt-[70px] md:pt-[80px]">
      {/* HEADER / BANNER SECTION */}
      <section className="pt-6 pb-8 sm:pt-10 sm:pb-12 md:pt-[80px] md:pb-[80px] text-center">
        <Container>
          <p
            className={`${gfsNeohellenic.className} uppercase text-[#CA9E55] mb-3 sm:mb-4 md:mb-5`}
            style={{
              fontFamily: gfsNeohellenic.style.fontFamily,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "26px",
              letterSpacing: "0.2em",
              textAlign: "center",
            }}
          >
            BLOGS
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-[48px] text-[#005BA4] text-center"
            style={{
              fontFamily: "var(--font-fira-sans), 'Fira Sans', sans-serif",
              fontWeight: 275,
              fontStyle: "normal",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            The Aroha Edit
          </h1>
        </Container>
      </section>

      {/* GREEK PATTERN DIVIDER */}
      <div className="w-full max_screen_width overflow-hidden">
        <Image
          src="/images/Greek1.png"
          alt=""
          width={1440}
          height={80}
          className="h-auto w-full object-cover"
        />
      </div>

      {/* BLOGS GRID SECTION */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 lg:gap-x-8 lg:gap-y-10 justify-items-center">
            {blogPostPageData.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="group flex flex-col w-full max-w-[442px] h-[552px] border border-[#D6D6D6] bg-[#F9F9F1] overflow-hidden opacity-100 rotate-0 transition-all duration-300 hover:shadow-md"
                style={{
                  maxWidth: "442px",
                  height: "552px",
                  opacity: 1,
                  transform: "rotate(0deg)",
                }}
              >
                {/* TOP IMAGE */}
                <div className="relative w-full h-[325px] shrink-0 overflow-hidden">
                  <Image
                    src={post.bannerImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 442px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-6 flex flex-col justify-start flex-1 gap-2.5">
                  <p className="text-xs sm:text-[13px] font-light text-[#005BA4]">
                    {post.publishedAt}
                  </p>
                  <h3
                    className="text-xl sm:text-[22px] md:text-[24px] text-[#005BA4] line-clamp-2 leading-[1.3] font-light"
                    style={{
                      fontFamily: "var(--font-fira-sans), 'Fira Sans', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {post.title}
                  </h3>

                  <p className="text-sm sm:text-[14px] font-light text-[#5A5856] line-clamp-3 leading-relaxed mt-1">
                    {post.description.replace(/<[^>]*>?/gm, "").slice(0, 115)}...
                    <span className="text-[#CA9E55] font-medium ml-1">
                      Read More
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

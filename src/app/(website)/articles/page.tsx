import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GFS_Neohellenic } from "next/font/google";
import blogPostPageData from "../[slug]/pageData";
import { Container, Section } from "@/components/sectionComponants";

const gfsNeohellenic = GFS_Neohellenic({
  subsets: ["greek", "latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Arohha Edit | Blogs - Aroha Palms",
  description:
    "Explore stories, guides, and updates from Aroha Palms luxury villas and apartments in North Goa.",
};

export default function ArticlesPage() {
  return (
    <main className="bg-[#FAF8F5] pt-16 md:pt-24 lg:pt-28">
      {/* HEADER / BANNER SECTION */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 text-center">
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
            The Arohha Edit
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
      <Section defaultPadding={false} className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {blogPostPageData.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="group block border border-[#D6D6D6] bg-[#F9F9F1] overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={post.bannerImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col gap-3 sm:gap-4">
                  <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#005BA4]">
                    {post.publishedAt}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#005BA4] line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5A5856] line-clamp-3 leading-relaxed">
                    {post.description.replace(/<[^>]*>?/gm, "").slice(0, 110)}...{" "}
                    <span className="text-[#CA9E55] font-semibold underline underline-offset-4">
                      Read more
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}

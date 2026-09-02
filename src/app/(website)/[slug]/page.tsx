import { Metadata } from "next";
import { SectionWithContainer } from "@/components/sectionComponants";
import { notFound } from "next/navigation";
import blogPostPageData from "./pageData";
import ImageBanner from "@/components/banners/ImageBanner";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/utils/constent";
import { SectionHeading } from "@/components/typography";
import BlogCard from "@/components/cards/BlogCard";
interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await blogPostPageData;

  return posts.map((post) => ({
    slug: post.slug,
    fallback: false,
  }));
}

function getPrevNext(slug: string) {
  const index = blogPostPageData.findIndex((p) => p.slug === slug);

  return {
    prev: index > 0 ? blogPostPageData[index - 1] : null,
    next:
      index < blogPostPageData.length - 1 ? blogPostPageData[index + 1] : null,
  };
}

function getRandomPosts(currentSlug: string, count = 2) {
  return blogPostPageData
    .filter((p) => p.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const path = await params;
  const post = await blogPostPageData.find((post) => post.slug === path.slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  } else {
    return {
      title: post.metaData.title,
      description: post.metaData.description,
      keywords: post.metaData.keyWords,
      alternates: {
        canonical: `https://arohapalms.com/articles/${post.slug}`,
        languages: {
          "en-US": `https://arohapalms.com/articles/${post.slug}`,
        },
      },
      openGraph: {
        title: post.metaData.title,
        description: post.metaData.description,
        images: [post.bannerImage],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          nocache: true,
        },
      },
    };
  }
}

export default async function Page({ params }: Params) {
  const path = await params;
  const pageData = blogPostPageData.find((post) => post.slug === path.slug);

  const { prev, next } = getPrevNext(path.slug);
  const relatedPosts = getRandomPosts(path.slug);

  if (!pageData) return notFound();
  return (
    <main >
      {/* <ImageBanner
        image={pageData?.bannerImage as string}
        title={pageData?.title as string}
        tag=""
        description=""
        benefits=""
      /> */}

      <div className="relative max-w-6xl mx-auto  w-full lg:aspect-3/2 aspect-[3/2] overflow-hidden">
        <Image
          src={pageData?.bannerImage}
          alt={pageData?.title}
          fill
          className="object-cover"
        />
      </div>
      <SectionWithContainer>
        <div
          className="max-w-6xl mx-auto blog-content!"
          dangerouslySetInnerHTML={{ __html: pageData?.content || "" }}
        />
        <div className="sticky bottom-6 z-50 flex justify-center mt-10">
          <Link
            href={contact.WhatsappCta}
            target="_blank"
            className="rounded-2xl bg-[#B8941F] px-10 py-5 text-white font-semibold shadow-xl hover:bg-[#9f7f18] transition-all"
          >
            RESERVE YOUR STAY AT 50% OFF THIS MONSOON
          </Link>
        </div>
      </SectionWithContainer>
      <SectionWithContainer>
        <div className="flex justify-between border-t py-6 text-sm italic max_width text-[#000066] border-[#000066]">
          {prev ? (
            <Link href={`/${prev.slug}`} className="underline">
              Previous
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link href={`/${next.slug}`} className="underline">
              Next
            </Link>
          ) : (
            <span />
          )}
        </div>
        {/* <ShareButtons url={`https://naadwellness.com/${params.slug}`} /> */}
        <SectionHeading title="Related Posts" textCenter />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max_width mt-10">
          {relatedPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </SectionWithContainer>
    </main>
  );
}

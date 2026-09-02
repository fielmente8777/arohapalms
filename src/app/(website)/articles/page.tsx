import Link from "next/link";
import Image from "next/image";
import blogPostPageData from "../[slug]/pageData";
import { SectionWithContainer } from "@/components/sectionComponants";

export default function ArticlesPage() {
  return (
  
      <main>
        <SectionWithContainer sectionClassName="">
        <div className="max_width">
          {/* <h1 className="text-center mb-16">Articles</h1> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPostPageData.map((post) => (
              <Link key={post.slug} href={`/${post.slug}`}>
                <div className="relative md:aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={post.bannerImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-4">{post.title}</h3>

                <p className="mt-2">{post.publishedAt}</p>
              </Link>
            ))}
          </div>
        </div>
        </SectionWithContainer>
      </main>
     
  
  );
}

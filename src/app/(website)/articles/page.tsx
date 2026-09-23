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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPostPageData.map((post) => (
              <Link key={post.slug} href={`/${post.slug}`} className="block border bg-[#F9F9F1] border-[#D6D6D6]">
                <div className="relative md:aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.bannerImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  
                </div>
                <div className="py-6 px-4 flex-col flex gap-4">
                  <p className="text-[#005BA4]">{post.publishedAt}</p>

                <h3 className="text-3xl text-[#005BA4]">{post.title.slice(0,50)}...</h3>
                <p className="text-xl" dangerouslySetInnerHTML={{__html:`${post.description.slice(0,100)}...<span class="text-[#CA9E55]">Read more</span>`}}></p>
                
                </div>
                
              </Link>
            ))}
          </div>
        </div>
        </SectionWithContainer>
      </main>
     
  
  );
}

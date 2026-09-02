
import { BlogPost } from "@/app/(website)/[slug]/pageData";
import Image from "next/image";
import Link from "next/link";

const BlogCard: React.FC<BlogPost> = ({ title, bannerImage, slug, metaData }) => {
  return (
    <Link href={`/${slug}`} className="flex flex-col gap-4">
      <div className="w-full relative aspect-4/2">
        <Image
          src={bannerImage}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3
        className="text-xl text-dark font-semibold  secondary-font"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      <p className="text-xs text-dark">
        {metaData.description.slice(0, 98)} ...
      </p>
      <p className="text-base font-semibold text-primary italic secondary-font">Read more</p>
    </Link>
  );
};

export default BlogCard;

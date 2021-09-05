import Link from "next/link";
import Image from "next/image";

import type { Post } from "../../../lib/interfaces";

interface Props {
  post: Post;
}

const PostItem = (props: Props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const dateFormat = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li>
      <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <Link href={`/posts/${slug}`} passHref>
          <a href="#" className="w-full block h-full">
            <Image
              alt="blog photo"
              src={`/images/posts/${image}`}
              width={300}
              height={200}
              layout="responsive"
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-gray-800 w-full p-4">
              <p className=" text-yellow-600 text-xl font-medium mb-2">
                {title}
              </p>
              <p className="text-gray-400 text-md font-medium mt-3">
                {dateFormat}
              </p>
              <p className=" text-gray-300 font-light text-md">{excerpt}</p>
            </div>
          </a>
        </Link>
      </div>
    </li>
  );
};

export default PostItem;

import Image from "next/image";

import ReactMarkdown from "react-markdown";
interface Props {
  content: string;
  date: string;
}

const PostContent = (props: Props) => {
  const { content, date } = props;

  const dateFormat = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div>
            <Image
              src={`/images/posts/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <div className="max-w-2xl px-8 py-4 mx-auto rounded-lg shadow-md bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light  text-gray-400">{dateFormat}</span>
      </div>

      <div className="mt-2">
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PostContent;

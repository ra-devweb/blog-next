import type { GetStaticProps } from "next";

import { getAllPosts } from "../../../lib/utils";
import PostsList from "../../components/Posts/PostsList";
import type { Post } from "../../../lib/interfaces";

interface Props {
  posts: Post[];
}

function Posts(props: Props) {
  return (
    <section className="section-all-posts container mx-auto">
      <h1 className="my-10 text-4xl uppercase font-bold">All posts</h1>
      <PostsList posts={props.posts} />
    </section>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts();

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};

export default Posts;

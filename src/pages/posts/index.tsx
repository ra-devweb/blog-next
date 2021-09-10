import type { GetStaticProps } from "next";
import Head from "next/head";

import { getAllPosts } from "../../../lib/utils";
import PostsList from "../../components/Posts/PostsList";
import type { Post } from "../../../lib/interfaces";

interface Props {
  posts: Post[];
}

function Posts(props: Props) {
  return (
    <>
      <Head>
        <title>All post Blog</title>
        <meta name="description" content="All post!" />
      </Head>
      <section className="section-all-posts container mx-auto px-6 mb-6">
        <h1 className="my-10 text-4xl uppercase font-bold">All posts</h1>
        <PostsList posts={props.posts} />
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Posts;

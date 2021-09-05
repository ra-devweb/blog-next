import type { ReactElement } from "react";
import type { GetStaticProps } from "next";

import Layout from "../components/Layouts/Layout";
import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";

import type { Post } from "../../lib/interfaces";
import { getAllPosts } from "../../lib/utils";

interface Props {
  posts: Post[];
}
export default function Home(props: Props) {
  return <FeaturedPosts posts={props.posts} />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Hero />
      <main>{page}</main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts();

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
};

import type { ReactElement } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";

import Layout from "../components/Layouts/Layout";
import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";

import type { Post } from "../../lib/interfaces";
import { getFeaturedPosts } from "../../lib/utils";

interface Props {
  posts: Post[];
}
export default function Home(props: Props) {
  return (
    <>
      <Head>
        <title>Tarik Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <FeaturedPosts posts={props.posts} />
    </>
  );
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
  const posts = getFeaturedPosts();

  return {
    props: {
      posts,
    },
  };
};

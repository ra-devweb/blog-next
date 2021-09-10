import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import PostDetails from "../../components/Posts/PostDetails";

import type { Post as PostDetail } from "../../../lib/interfaces";
import { getAllPosts, getPostData, getPostsFiles } from "../../../lib/utils";

interface Props {
  post: PostDetail;
}

function Post(props: Props) {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={`${props.post.excerpt}`} />
      </Head>
      <PostDetails post={props.post} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  const allPaths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths: allPaths,

    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;

  const { slug } = params as any;

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 100,
  };
};

export default Post;

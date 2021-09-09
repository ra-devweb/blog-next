import PostsList from "../Posts/PostsList";

import type { Post } from "../../../lib/interfaces";

interface Props {
  posts: Post[];
}

const FeaturedPosts = (props: Props) => {
  return (
    <>
      <section className="featured-posts container mx-auto px-6 my-12">
        <h2 className="mb-10 text-4xl uppercase font-bold">Featured Posts</h2>
        <PostsList posts={props.posts} />
      </section>
    </>
  );
};

export default FeaturedPosts;

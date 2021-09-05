import PostItem from "./PostItem";

import type { Post } from "../../../lib/interfaces";

interface Props {
  posts: Post[];
}

const PostsList = (props: Props) => {
  return (
    <ul className="flex flex-wrap gap-4">
      {props.posts.map((post) => (
        <PostItem key={post.title} post={post} />
      ))}
    </ul>
  );
};

export default PostsList;

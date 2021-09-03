import PostContent from "./PostContent"
import PostHeader from "./PostHeader"

import type { Post } from '../../../../lib/interfaces'

interface Props {
    post: Post
}

const PostDetails = (props: Props) => {

    const { title, image, content, date } = props.post

    const imagePath = `/images/posts/${image}`

    return (
        <article className='my-8'>
            <PostHeader title={title} image={imagePath} />
            <PostContent content={content} date={date} />
        </article>
    )
}

export default PostDetails
import PostDetails from "../../components/Posts/PostDetails"

import type { Post as PostDetail } from '../../../lib/interfaces'

const post: PostDetail = {
    id: 'p-1',
    title: 'Getting started Nextjs',
    image: 'getting-started-nextjs.png',
    content: 'Magna sint velit amet ex adipisicing velit id exercitation. Sint est ex labore esse deserunt. Sint labore eiusmod dolor qui duis eiusmod culpa qui ea ex adipisicing proident Lorem Lorem. Enim exercitation ea cupidatat sunt reprehenderit exercitation nulla. Tempor in proident et tempor ex pariatur pariatur.',
    excerpt: 'Occaecat culpa velit nostrud pariatur nisi. Minim Lorem minim exercitation reprehenderit nisi labore minim aliqua.',
    date: '2012-09-22',
    slug: 'getting-started-nextjs'
}

function Post() {
    return (
        <PostDetails post={post} />
    )
}

export default Post
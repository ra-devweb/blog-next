import PostsList from '../../components/Posts/PostsList'
import type { Post } from '../../../lib/interfaces'

const posts: Post[] = [
    {
        id: 'p-1',
        title: 'Getting started Nextjs',
        image: 'getting-started-nextjs.png',
        content: 'Magna sint velit amet ex adipisicing velit id exercitation. Sint est ex labore esse deserunt. Sint labore eiusmod dolor qui duis eiusmod culpa qui ea ex adipisicing proident Lorem Lorem. Enim exercitation ea cupidatat sunt reprehenderit exercitation nulla. Tempor in proident et tempor ex pariatur pariatur.',
        excerpt: 'Occaecat culpa velit nostrud pariatur nisi. Minim Lorem minim exercitation reprehenderit nisi labore minim aliqua.',
        date: '2012-09-22',
        slug: 'getting-started-nextjs'
    },
    {
        id: 'p-2',
        title: 'Nextjs file based routing',
        image: 'nextjs-file-based-routing.png',
        content: 'Magna sint velit amet ex adipisicing velit id exercitation. Sint est ex labore esse deserunt. Sint labore eiusmod dolor qui duis eiusmod culpa qui ea ex adipisicing proident Lorem Lorem. Enim exercitation ea cupidatat sunt reprehenderit exercitation nulla. Tempor in proident et tempor ex pariatur pariatur.',
        excerpt: 'Occaecat culpa velit nostrud pariatur nisi. Minim Lorem minim exercitation reprehenderit nisi labore minim aliqua.',
        date: '2021-09-22',
        slug: 'nextjs-file-based-routing'
    }
]

function Posts() {
    return (
        <section className='section-all-posts container mx-auto'>
            <h1 className='my-10 text-4xl uppercase font-bold'>All posts</h1>
            <PostsList posts={posts} />
        </section>
    )
}

export default Posts
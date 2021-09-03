interface Props {
    content: string,
    date: string
}

const PostContent = (props: Props) => {

    const { content, date } = props

    const dateFormat = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return (

        <div className="max-w-2xl px-8 py-4 mx-auto rounded-lg shadow-md bg-gray-800">
            <div className="flex items-center justify-between">
                <span className="text-sm font-light  text-gray-400">{dateFormat}</span>
            </div>

            <div className="mt-2">
                <p className="mt-2 text-gray-300">Lorem {content}</p>
            </div>
        </div>
    )
}

export default PostContent
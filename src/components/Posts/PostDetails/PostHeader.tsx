interface Props {
    title: string,
    image: string
}

const PostHeader = (props: Props) => {

    const { title, image } = props

    return (
        <header className="flex flex-col items-center justify-center max-w-lg mx-auto">
            <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${image})` }}></div>

            <div className="max-w-md p-5 -mt-10 overflow-hidden rounded-lg shadow-lg mb-6 bg-gray-800">
                <h1 className="text-2xl font-bold text-yellow-600 hover:text-yellow-700 hover:underline">{title}</h1>
            </div>
        </header>
    )
}

export default PostHeader
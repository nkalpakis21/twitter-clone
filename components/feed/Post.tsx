import { ChartBarIcon, ChatBubbleLeftIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/outline"
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

interface IProps {
    post: any
}
export default function Post({post}: IProps) {
    return (
        <div className="flex space-x-4 max-h-[400px] hover:cursor-pointer">
            <div>
                <Image className="rounded-full" src={post.userImg} alt="post-image" height={60} width={60}/>
            </div>
            <div className="w-full">
                <div className="mb-2">
                    <div className="flex items-center">
                        <div className="flex space-x-1">
                            <h1 className="font-bold">{post.name}</h1>
                            <span className=" text-gray-500 ">@{post.username} &#8226;</span>
                            <span className=" text-gray-500 ">{post.timestamp}</span>
                        </div>
                        <div className="ml-auto hoverEffect">
                            <EllipsisHorizontalIcon className="h-8 p-1"/>
                        </div>
                    </div>
                    <div className="flex">
                        <h1>{post.text}</h1>
                    </div>
                </div>
                <div>
                    <Image className=" rounded-md" src={post.img} alt="post-image" width={300} height={200}/>
                </div>
                <div className="flex justify-between mt-1">
                    <ChatBubbleLeftIcon  className="h-9 w-8 p-2 hoverEffect hover:bg-sky-100 hover:text-sky-500"/>
                    <TrashIcon className="h-9 w-8 p-2 hoverEffect hover:bg-red-200 hover:text-red-600"/>
                    <HeartIcon  className="h-9 w-8 p-2 hoverEffect hover:bg-red-200 hover:text-red-600"/>
                    <ShareIcon  className="h-9 w-8 p-2 hoverEffect hover:bg-sky-100 hover:text-sky-500"/>
                    <ChartBarIcon  className="h-9 w-8 p-2 hoverEffect hover:bg-sky-100 hover:text-sky-500"/>
                </div>
            </div>

        </div>
    )
}
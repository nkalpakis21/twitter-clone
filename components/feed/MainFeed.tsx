import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "../input/Input";
import ProfilePic from '../../public/profile_picture.jpeg'
import Post from "./Post";

export default function MainFeed() {
    const posts = [
        {
            id: "1",
            name: "Nick Kalpakis",
            username: "kalpizzy7",
            userImg: ProfilePic,
            img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            text: "Nice View!",
            timestamp: "2 hours ago"
        },
        {
            id: "2",
            name: "Nick Kalpakis",
            username: "kalpizzy7",
            userImg: ProfilePic,
            img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            text: "Wow!",
            timestamp: "2 hours ago"
        },
        {
            id: "3",
            name: "Nick Kalpakis",
            username: "kalpizzy7",
            userImg: ProfilePic,
            img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            text: "Insane!",
            timestamp: "2 hours ago"
        },
        {
            id: "4",
            name: "Nick Kalpakis",
            username: "kalpizzy7",
            userImg: ProfilePic,
            img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            text: "Nice View!",
            timestamp: "2 hours ago"
        },
    ]
    return (
        <div className="p-4 xl:ml-[370px] border-l border-r border-gray-200 w-full xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                <h2 className="text-lg my-auto sm:text-xl font-bold cursor-pointer">Home</h2>
                <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                    <SparklesIcon className="h-5"/>
                </div>
            </div>
            <Input/>
            <div className="space-y-10 mt-4">
                {posts.map((post) => (
                        <Post post={post} key={post.id}/>
                ))}
            </div>
        </div>

    )
}


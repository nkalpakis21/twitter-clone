import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import NewsArticle from "./NewsArticle";
import UserCard from "./UserCard";

export default function Widgets({articles, whoToFollow}: any) {
    const viewModel = {
        title: "What's Happening",
        buttonText: "Show More",
    }

    const [maxArticles, setMaxArticles] = useState(3);
    const [maxUsers, setMaxUsers] = useState(6);

    const handleShowMore = () => {
        setMaxArticles((prev) => prev + 3);
    }
    
    const handleShowMoreUsers = () => {
        setMaxUsers((prev) => prev + 3);
    }
    return (
        <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-12">
            <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
                <div className="flex items-center p-3 rounded-full relative">
                    <MagnifyingGlassIcon className="h-5 z-50 text-gray-500"/>
                    <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-50" type="text" placeholder="Search Twitter"></input>
                </div>
            </div>
            <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
                <h4 className="font-bold text-xl px-4">{viewModel.title}</h4>
                {articles.slice(0,maxArticles).map((article: any) => (
                    <NewsArticle key={article.title} article={article} />
                ))}
                <button className="text-blue-300 pl-4 pb-3 hover:text-blue-400" onClick={handleShowMore}>{viewModel.buttonText}</button>
            </div>
            <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
                <h4 className="font-bold text-xl px-4">Who to Follow</h4>
                {whoToFollow.slice(0,maxUsers).map((user: any) => (
                    <UserCard key={user.name} user={user}/>
                ))}
                <button className="text-blue-300 pl-4 pb-3 hover:text-blue-400" onClick={handleShowMoreUsers}>{viewModel.buttonText}</button>
            </div>
        </div>
    )
}
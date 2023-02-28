import Image from 'next/image'
import React from 'react'
import SidebarItem from './SidebarItem'
import {HashtagIcon} from "@heroicons/react/24/solid"
import {BellIcon, BookmarkIcon, ClipboardIcon, EllipsisHorizontalIcon, HomeIcon, InboxIcon, UserIcon} from "@heroicons/react/24/outline"
import ProfilePic from "../../public/profile_picture.jpeg"
export default function Sidebar() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-2 m-3 fixed">
        <div>
            <Image className="hoverEffect p-0 hover:bg-blue-100 xl-px-1 mb-4" height="50" width="50" alt="twitter-logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"/>
            <SidebarItem title="Home" Icon={HomeIcon} active/>
            <SidebarItem title="Explore" Icon={HashtagIcon} />
            <SidebarItem title="Notifications" Icon={BellIcon} />
            <SidebarItem title="Messages" Icon={InboxIcon} />
            <SidebarItem title="Bookmarks" Icon={BookmarkIcon} />
            <SidebarItem title="Lists" Icon={ClipboardIcon} />
            <SidebarItem title="Profile" Icon={UserIcon} />
            <SidebarItem title="More" Icon={EllipsisHorizontalIcon} />
            <button className="bg-blue-400 text-white rounded-full w-52 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
        </div>

        <div className="hoverEffect flex my-10 p-2 mt-2.5 items-center">
            <Image className="rounded-full h-10 w-10" src={ProfilePic} height={100} alt="profile-picture"/>
            <div className="leading-5 ml-2 hidden xl:inline">
                <h1 className="font-bold">NK</h1>
                <h1>@Kalpizzy7</h1>
            </div>
            <EllipsisHorizontalIcon className="h-5 ml-auto hidden xl:inline" />
        </div>
    </div>
    
  )
}

import { FaceSmileIcon, PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'
import ProfilePic from '../../public/profile_picture.jpeg'
export default function Input () {
    const [tweetText, setTweetText] = useState('');

    return (
        <div className="flex w-full space-x-4 p-3 border-b border-gray-200">
            <div>
                <Image src={ProfilePic} alt="profile-pic" height={60} width={60} className="rounded-full" />
            </div>
            <div className="w-full divide-y">
                <textarea value={tweetText} onChange={(e) => setTweetText(e.target.value)} className="w-full focus:outline-none" name="" id="" cols={2} rows={2} placeholder="What's happening?"/>
                <div className="flex mt-2 pt-2.5">
                    <PhotoIcon className="h-6 w-6 text-sky-500 hover:bg-sky-100"/>
                    <FaceSmileIcon className="h-6 w-6 text-sky-500 hover:bg-sky-100"/>
                    <button disabled={true} className={`ml-auto bg-blue-400 text-white rounded-full w-20 h-8 font-bold shadow-md hover:brightness-95`}>Tweet</button>
                </div>
            </div>
        </div>
    )
}
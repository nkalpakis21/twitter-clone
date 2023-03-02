export default function UserCard({user}: any){

    return (
        <div className="flex justify-between px-4 py-2">
            <div className="flex space-x-3">
                <img src={user.picture.thumbnail} alt="profile-image" className="rounded-full"/>
                <div>
                    <div className="font-bold">{user.login.username}</div>
                    <div className=" text-gray-500">{user.name.first + " " + user.name.last}</div>
                </div>
            </div>
          <button className=" bg-black text-white rounded-full w-16 h-6 font-bold shadow-md hover:bg-black/70 text-sm">Follow</button>
        </div>
    )
}
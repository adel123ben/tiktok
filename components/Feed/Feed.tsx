import React from "react"

import LikeSec from "./LikesSect";


interface FeedProps{
    avatar: string;
    nom: string;
    bio: string;
    titre: string;
    videoUrl: string;
}


const Feed: React.FC<FeedProps> = ({
    avatar,
    nom,
    bio,
    titre,
    videoUrl
}) => {
    return(
        <div className="ml-28  lg:ml-32  mt-[87px] flex flex-col mb-5">
            <div className="flex flex-row">
                {/* avatar */}
            <img className="h-14 rounded-full" src={avatar} alt="" />
            {/* nom */}
            <h1 className="ml-2 font-semibold text-lg">{nom}</h1>
            {/* Bio */}
            <p className="flex flex-row w-96 mt-1 ml-1 text-gray-500 text-sm">{bio}</p>
            

           <button className="ml-20 text-rose-500 border border-rose-500 h-10 w-28 rounded-md font-semibold">Suivre</button>
            </div>
            
            
            <div className="flex flex-row ml-16 mt-[-25px]">
                {/* tirtre */}
                <p className="w-96">{titre}</p>
                

               
            </div>

            <div className="mt-5 ml-16 relative min-h-[600px] max-h-[580px] max-w-[260px] min-w-[320px] border-0 flex items-center  rounded-xl cursor-pointer">
            {/* VideoUrl */}
            <video loop controls autoPlay muted className="rounded-xl object-cover mx-auto h-full" src={videoUrl}></video>
           </div>
           

          



          <LikeSec />
        </div>
    )
}

export default Feed;
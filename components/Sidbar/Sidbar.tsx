import {PiHouseFill, PiVideoCameraBold} from "react-icons/pi"
import {MdPersonOutline} from "react-icons/md"
import {MdOutlineExplore} from "react-icons/md"
import {BsCameraVideoFill} from "react-icons/bs"


const Sidbar = () => {
    return(
        <div className=" flex flex-col p-5 mt-[70px] fixed top-0 left-0 h-full dark:bg-neutral-950  bg-white">
            <div className="flex flex-row items-center cursor-pointer">
            <PiHouseFill size={25} className="text-rose-500 mr-3" />
            <h1 className="text-rose-500 font-semibold text-lg hidden xl:flex lg:flex md:flex sm:flex">Pour toi</h1>
            </div>


            <div className="flex flex-row items-center mt-5 cursor-pointer">
            <MdPersonOutline size={25} className=" mr-3" />
            <h1 className=" font-semibold text-lg">Abonnements</h1>
            </div>

            <div className="flex flex-row items-center mt-5 cursor-pointer">
            <MdOutlineExplore size={25} className=" mr-3" />
            <h1 className=" font-semibold text-lg">Explore</h1>
            </div>

            <div className="flex flex-row items-center mt-5 cursor-pointer">
            <PiVideoCameraBold size={25} className=" mr-3" />
            <h1 className=" font-semibold text-lg">LIVE</h1>
            </div>
            


            <div className="mt-14">
                <p className="text-gray-500/70 w-48">Connecte-toi pour suivre des créateurs, aimer des vidéos et voir les commentaires.</p>
            </div>

            <div className="mt-7">
                <button className="text-rose-500 font-semibold text-lg border border-rose-500 p-3 rounded-md cursor-pointer">Connexion</button>
            </div>
        </div>
    )
}

export default Sidbar;
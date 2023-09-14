"use client";


import {AiOutlineSearch, AiOutlinePlus} from "react-icons/ai"
import {FiMoreVertical} from "react-icons/fi"
import { DropdownMenuDemo } from "./DropdownMenuDemo"
import { useTheme } from "next-themes";
import { ModeToggle } from "../ModeToggle";





export default function Hader(){
    const { theme } = useTheme();

    const lightImage = 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png';
  const darkImage = '/tik.png';

  // Sélectionnez l'image en fonction du thème actuel
  const imageUrl = theme === 'dark' ? darkImage : lightImage;
    return(
        <div className="flex flex-row p-3 dark:bg-neutral-950 items-center justify-between border-b fixed top-0 left-0 w-full bg-white z-50">
            {/* Left */}
            <div className="flex flex-row">
                <img className="h-7 dark:h-10 cursor-pointer" src={imageUrl} alt="" />
            </div>

            {/* Middel */}

            <div className="flex dark:bg-neutral-600/50  flex-row   rounded-full items-center border w-96 hover:border-gray-500">
                <input className="flex p-2 bg-transparent flex-1 outline-none ml-2  rounded-full" type="text" placeholder="Rechercher" />
                <AiOutlineSearch size={20} color="gray" className="mr-5" />
            </div>

            {/* Right */}

            <div className="flex flex-row items-center">
                <div className="flex flex-row items-center cursor-pointer border dark:border-0 dark:bg-neutral-600/50 dark:rounded-sm dark:w-36 border-gray-300/60 p-1 w-32">
                <AiOutlinePlus className="mr-2 dark:ml-2" />
                <h1 className="flex flex-row items-center font-semibold dark:ml-2">Téléverser</h1>
                </div>

                <div className="flex flex-row items-center ml-3 p-1 h-9 w-24  cursor-pointer bg-rose-500 rounded-md">
                    <h1 className="text-white font-semibold ml-2">Conexion</h1>
                </div>
               
               <div className="flex flex-row items-center ml-3">
               
               <ModeToggle />
               </div>
               
               
            </div>
            
    </div>
    )
   
}
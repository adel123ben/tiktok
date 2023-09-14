import {AiFillHeart} from "react-icons/ai"
import {BiSolidMessageRoundedDetail} from "react-icons/bi"
import {IoArrowRedoSharp} from "react-icons/io5"
import {BsFillBookmarkFill} from "react-icons/bs"


const LikeSec = () => {
    return(
        <div  className="relative ml-[400px]">
            <div  className="absolute  bottom-0 pl-2 text-sm text-neutral-800 font-semibold">
                <div className="pb-4 text-center">
                    <AiFillHeart size={25}   className="text-neutral-900 dark:text-white  mb-4 ml-3 cursor-pointer" />
                   <p className="dark:text-white">200.9K</p>
                </div>
                <div className="pb-4 text-center">
                    <BiSolidMessageRoundedDetail size={25} className="text-neutral-900 dark:text-white mb-4 ml-3 cursor-pointer" />
                    <p className="dark:text-white">500</p>
                </div>
                <div className="pb-4 text-center">
                    <BsFillBookmarkFill size={25} className="text-neutral-900 mb-4 ml-3 dark:text-white cursor-pointer" />
                    <p className="dark:text-white">30</p>
                </div>
                <div className="pb-4 text-center">
                    <IoArrowRedoSharp size={25} className="text-neutral-900 mb-4 ml-3 dark:text-white cursor-pointer" />
                    <p className="dark:text-white">700</p>
                </div>
            </div>
        </div>
    )
}

export default LikeSec;
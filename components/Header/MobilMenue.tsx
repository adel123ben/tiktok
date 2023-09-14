import { ModeToggle } from "../ModeToggle";
import React from "react";

interface MobilMenueProps{
    isVisible: boolean;
}


const MobilMeneu: React.FC<MobilMenueProps> = ({
    isVisible
}) => {

    if(!isVisible){
        return null;
    }
    return(
        <div className="flex flex-col bg-white shadow-2xl top-8 right-0">
            <ModeToggle />
        </div>
    )
}

export default MobilMeneu;


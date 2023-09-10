/* eslint-disable react/prop-types */
import { useState } from "react";

export default function CodeLogo({tech,desc,imageName}) {
    const [isFlip,setIsFlip] = useState(false);

    function handleFlip() {
        setIsFlip(!isFlip);
    }

    return (
        <div onClick={handleFlip} className="[perspective:1000px] cursor-pointer">
        <div className={`relative w-32 h-24 [transform-style:preserve-3d] transition-all duration-1000 ${isFlip ? "[transform:rotateY(180deg)]": ""} `}>
        <div className="absolute w-full h-full bg-white shadow-lg rounded-md [backface-visibility:hidden] bg-contain bg-center bg-no-repeat" style={{backgroundImage:`url(${imageName})`}}>
        </div>
        <div className="absolute ring shadow-lg w-full h-full rounded-md [transform:rotateY(180deg)] [backface-visibility:hidden] ">
            <div className="w-full h-full flex flex-col items-center px-2 gap-1">
            <h2 className="text-sm font-semibold text-primary">{tech}</h2>
            <p className="text-xs text-primary text-center">Experty Level :</p>
            <div className="text-lg flex justify-center items-center text-primary w-full"> {desc} </div>
            </div>
        </div>
        </div>
        </div>
    )
}
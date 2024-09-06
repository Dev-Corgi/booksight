"use client"
import CloseIcon from "@svg/CloseIcon.svg";
export default function CloseButton({requestClose}){
    return(
        <div
        className="absolute right-0 mt-[33px] mr-[41px] w-[17px] h-[17px]"
        onClick={requestClose}
        >
        <CloseIcon className = "text-textColor-primary" />
        </div>
    )
}

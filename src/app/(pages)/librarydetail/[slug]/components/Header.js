"use client"
import { useRouter } from "next/navigation";
import BackArrowIcon from "@svg/BackArrowIcon.svg"
import logoPic from "@png/logo.png";
import Image from "next/image";
export default function Header(){
  const router = useRouter();

  const handleHomeClick = ()=>{
    router.back();
  }

    return(
        <div className="flex flex-row justify-between items-center w-full mt-[40px]">
        <div className = "relative w-[124px] h-[23px]">
        <Image src={logoPic} fill sizes={1} alt ="logoPic"></Image>
        </div>
        <div className="flex flex-row items-center gap-[6.5px]" onClick = {handleHomeClick}>
          <div className="relative w-[18px] h-[16px]">
            <BackArrowIcon></BackArrowIcon>
          </div>
          <p className="font-NotoSansKRSemiBold text-[16px]">
            돌아가기
          </p>
        </div>
      </div>
    );
}
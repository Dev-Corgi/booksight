import TitleTag from "@/app/components/TitleTag";
import shadow2Img from "@png/shadow2.png";
import Image from "next/image";
import Shimmer from "@/app/components/Simmer";
import AuthorSection_Client from "./AuthorSection_Client";

export default function AuthorSection_Server({ book}) {

  return (
    <div className={"flex flex-col"}>
      <TitleTag title="저자 소개"></TitleTag>
      <div className="relative w-full h-min ml-[28px]">
             <div className="absolute -right-[68px] top-0 -z-[10]">
             <div className="relative w-[626px] h-[338.98px] mt-2">
               <Image src={shadow2Img} alt="shadow" fill sizes={1}></Image>
             </div>
           </div>

          <div className="flex flex-col w-full h-full  mt-[14px] rounded-[15px] bg-discriptionPanel">
              <AuthorSection_Client book = {book}></AuthorSection_Client>
          </div>
      </div>
    </div>
  );
}

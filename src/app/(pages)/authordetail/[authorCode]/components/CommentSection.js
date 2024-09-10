"use client"

import ProfilePic from "@png/profile.jpg";
import TitleTag from "@/app/components/TitleTag";
import Image from "next/image";

export default function CommentSection() {


  return (
    <div className = "flex flex-col w-full">
    <TitleTag title = {"응원의 한마디"}></TitleTag>
    <div className = "flex flex-col flex-grow ml-[28px] mt-[16px] gap-[17px] w-full">
        <div className = "relative w-full h-[77px] rounded-[15px] bg-background">
            <div className = "font-NotoSansKRMedium text-[13px] text-textColor-secondary absolute top-[7px] right-[18px]">12:45 am</div>
            <div className = "flex flex-row gap-[13px] mt-[13px]">
                <div className = "relative w-[56px] h-[56px] ml-[13px] rounded-full overflow-hidden">
                    <Image src = {ProfilePic} alt = "ProfilePic" fill sizes={1} className = "object-cover"></Image>
                </div>

                <div className = "flex flex-col gap-[2px]">
                    <p className = "font-NotoSansKRSemiBold text-[16px]">꾸준한 독서가</p>
                    <p className = "font-NotoSansKRMedium text-[15px] text-textColor-secondary">더미 데이터 입니다.</p>
                </div>
            </div>
        </div>

        <div className = "relative w-full h-[77px] rounded-[15px] bg-background">
            <div className = "font-NotoSansKRMedium text-[13px] text-textColor-secondary absolute top-[7px] right-[18px]">12:45 am</div>
            <div className = "flex flex-row gap-[13px] mt-[13px]">
                <div className = "relative w-[56px] h-[56px] ml-[13px] rounded-full overflow-hidden">
                    <Image src = {ProfilePic} alt = "ProfilePic" fill sizes={1} className = "object-cover"></Image>
                </div>

                <div className = "flex flex-col gap-[2px]">
                    <p className = "font-NotoSansKRSemiBold text-[16px]">꾸준한 독서가</p>
                    <p className = "font-NotoSansKRMedium text-[15px] text-textColor-secondary">더미 데이터 입니다.</p>
                </div>
            </div>
        </div>

        <div className = "relative w-full h-[77px] rounded-[15px] bg-background">
            <div className = "font-NotoSansKRMedium text-[13px] text-textColor-secondary absolute top-[7px] right-[18px]">12:45 am</div>
            <div className = "flex flex-row gap-[13px] mt-[13px]">
                <div className = "relative w-[56px] h-[56px] ml-[13px] rounded-full overflow-hidden">
                    <Image src = {ProfilePic} alt = "ProfilePic" fill sizes={1} className = "object-cover"></Image>
                </div>

                <div className = "flex flex-col gap-[2px]">
                    <p className = "font-NotoSansKRSemiBold text-[16px]">꾸준한 독서가</p>
                    <p className = "font-NotoSansKRMedium text-[15px] text-textColor-secondary">더미 데이터 입니다.</p>
                </div>
            </div>
        </div>


    </div>
   </div>
  );
}

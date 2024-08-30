"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MoreIcon from "@svg/MoreIcon.svg";
import shadow2Img from "@png/shadow2.png";
import TitleTag from "@/app/components/TitleTag";
import Shimmer from "@/app/components/Simmer";
export default function DescriptionSection({ className, book }) {
  const [disc, setdisc] = useState("this is disc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false once books are loaded
    if (book != undefined) {
      setdisc(book.description);
      setIsLoading(false);
    }
  }, [book]);

  return (
    <div className={`${className} flex flex-col`}>
      <TitleTag title="책 살펴보기"></TitleTag>
      <div className="relative w-full h-[250.51px]">
        <div className="absolute -right-[68px] top-2 w-[626px] h-[338.98px]">
          <Image src={shadow2Img} alt="shadow" fill sizes={1}></Image>
        </div>

        <Shimmer isLoading={isLoading}>
          <div className="absolute flex flex-col w-auto h-full ml-[28px] mt-[14px] rounded-[15px] bg-discriptionPanel">
            <p className="mt-[17px] mx-[19px] text-[16px] whitespace-pre-wrap font-NotoSansKRRegular h-[184px] overflow-y-scroll align-text-top no-scrollbar text-textColor-primary">
              {book == undefined ? "this is disc" : disc}
            </p>
            <div className="mt-[12.5px] ml-[19px] gap-[8px] w-min h-min flex flex-row items-center">
              <div className="flex items-center justify-center w-[13px] h-[13px]">
                <div className="relative w-[13px] h-[13px] rotate-90">
                  <MoreIcon className=" text-textColor-primary"></MoreIcon>
                </div>
              </div>
              <p className="font-NotoSansKRMedium text-[14px] text-textColor-primary whitespace-nowrap">
                더 알아보기
              </p>
            </div>
          </div>
        </Shimmer>
      </div>
    </div>
  );
}

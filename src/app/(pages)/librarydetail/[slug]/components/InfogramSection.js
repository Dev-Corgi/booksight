"use client";
import React, { useState, useEffect } from "react";
import PlaceIcon from "@svg/PlaceIcon.svg";
import CallIcon from "@svg/CallIcon.svg";
import ExportIcon from "@svg/ExportIcon.svg";
import ClockIcon from "@svg/ClockIcon.svg";
import Link from "next/link";
import Shimmer from "@/app/components/Simmer";
export default function InfogramSection({ libraryInfo }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false once books are loaded
    if (libraryInfo) {
      setIsLoading(false);
    }
  }, [libraryInfo]);

  return (
    <>
      <div className="flex flex-row gap-[2.37px] mt-[21px]">
        <Shimmer isLoading={isLoading}>
          <div className="relative w-[23px] h-[23px]">
            <ClockIcon></ClockIcon>
          </div>
          <p className="font-NotoSansKRMedium text-[15.8px] whitespace-nowrap">
            {libraryInfo == undefined
              ? "월~금 8:00 ~ 20:00"
              : libraryInfo.libInfo.operatingTime}
          </p>
        </Shimmer>
      </div>
      <div className="flex flex-row gap-[18px] mt-[6px] whitespace-nowrap">
        <Shimmer isLoading={isLoading}>
          <div className="flex flex-row gap-[2.37px]">
            <div className="relative w-[23px] h-[23px]">
              <PlaceIcon></PlaceIcon>
            </div>
            <p className="font-NotoSansKRMedium text-[15.8px]">
              {libraryInfo == undefined
                ? "서울 특별시 중구 91로"
                : libraryInfo.libInfo.address}
            </p>
          </div>
        </Shimmer>

        <Shimmer isLoading={isLoading}>
          <div className="flex flex-row gap-[2.37px]">
            <div className="relative w-[23px] h-[23px]">
              <CallIcon></CallIcon>
            </div>
            <p className="font-NotoSansKRMedium text-[15.8px]">
              {libraryInfo == undefined
                ? "010-1234-5878"
                : libraryInfo.libInfo.tel}
            </p>
          </div>
        </Shimmer>

        <Shimmer isLoading={isLoading}>
          <div className="flex flex-row gap-[2.37px]">
            <div className="relative w-[23px] h-[23px]">
              <ExportIcon></ExportIcon>
            </div>
            <Link
              className="font-NotoSansKRMedium text-[15.8px]"
              href={
                libraryInfo == undefined
                  ? "www.example.com"
                  : libraryInfo.libInfo.homepage
              }
            >
              홈페이지
            </Link>
          </div>
        </Shimmer>
      </div>
    </>
  );
}

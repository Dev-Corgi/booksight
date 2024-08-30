"use client";
import React, { useEffect, useState } from "react";
import PlaceIcon from "@svg/PlaceIcon.svg";
import MenuIcon from "@svg/MenuIcon.svg";
import FindIcon from "@svg/FindIcon.svg";
import reverseGeoCodeHandler from "@handler/reverseGeoCodeHandler";
import Shimmer from "@/app/components/Simmer";
export default function TagList({ isOpen, location }) {
  const [isLoading, setIsLoading] = useState(true);
  const [roadaddr, setRoadaddr] = useState(undefined);

  useEffect(() => {
    if (isOpen) {
      async function fetchData() {
        try {
          const roadAddrResult = reverseGeoCodeHandler(location);
          setRoadaddr(roadAddrResult);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }
  }, [location]);

  return (
    <>
        <div className="flex flex-row gap-[8px]">
          <Shimmer isLoading={isLoading}>
            <div className="flex justify-center items-center py-[8px] px-[9.6px] border-[1.5px] border-textColor-primary rounded-full">
              <div className="flex flex-row">
                <div className="relative w-[20px] h-[20px]">
                  <PlaceIcon className="text-textColor-primary" />
                </div>
                <p className="font-NotoSansKRMedium text-textColor-primary text-[15px] ml-[1px]">
                  {roadaddr == undefined ? "로딩중..." : roadaddr}
                </p>
              </div>
            </div>
          </Shimmer>
          <Shimmer isLoading={isLoading}>
            <div className="flex justify-center items-center py-[8px] px-[9.6px] border-[1.5px] border-textColor-primary rounded-full">
              <div className="flex flex-row">
                <div className="relative w-[20px] h-[20px]">
                  <FindIcon className="text-textColor-primary" />
                </div>
                <p className="font-NotoSansKRMedium text-textColor-primary text-[15px] ml-[1px]">
                  2km
                </p>
              </div>
            </div>
          </Shimmer>
          <Shimmer isLoading={isLoading}>
            <div className="flex justify-center items-center py-[8px] px-[9.6px] border-[1.5px] border-textColor-primary rounded-full">
              <div className="flex flex-row">
                <div className="relative w-[20px] h-[20px]">
                  <MenuIcon className="text-textColor-primary" />
                </div>
                <p className="font-NotoSansKRMedium text-textColor-primary text-[15px] ml-[1px]">
                  10개
                </p>
              </div>
            </div>
          </Shimmer>
        </div>
    </>
  );
}

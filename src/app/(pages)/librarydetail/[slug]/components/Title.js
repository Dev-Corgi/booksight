"use client";
import React, { useState, useEffect } from "react";
import Shimmer from "@/app/components/Simmer";

export default function Title({ libraryInfo }) {
    const [isLoading, setisLoading] = useState(true);
    const [currentLibraryInfo, setcurrentLibraryInfo] = useState(undefined);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setcurrentLibraryInfo(await libraryInfo);
          setisLoading(false);
        } catch (error) {
          console.error("Error fetching book data:", error);
          // 에러 처리 로직을 추가할 수 있습니다.
        }
      };
  
      fetchData();
    }, [libraryInfo]);

  return (
    <Shimmer isLoading = {isLoading}>
    <p className="font-NotoSansKRBold text-[73.73px] w-[497px] h-[154px] leading-[76.9px] mt-[45px] text-pretty overflow-hidden"  style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
      {currentLibraryInfo == undefined ? "부천 상동 시립 도서관" : currentLibraryInfo.libName}
    </p>
    </Shimmer>
  );
}

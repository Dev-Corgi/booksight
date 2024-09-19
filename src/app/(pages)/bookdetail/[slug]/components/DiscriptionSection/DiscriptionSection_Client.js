"use client";
import React, { useState, useEffect } from "react";
import Shimmer from "@/app/components/Simmer";
export function DiscriptionText({ book }) {
  const [disc, setDisc] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // book이 Promise를 반환하므로, 비동기 함수를 useEffect 내부에서 호출합니다.
    const fetchData = async () => {
      try {
        const result = await book;
        setDisc(
          result.fullDescription
            .replace(/<\/?b>/gi, "")
            .replace(/<br\s*\/?>/gi, "")
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching book data:", error);
        // 에러 처리 로직을 추가할 수 있습니다.
        setIsLoading(false);
      }
    };

    fetchData();
  }, [book]);

  return (
    <Shimmer isLoading={isLoading} className={"relative w-full h-full"}>
      <div className="w-[832px] lg:w-[81.25vw] h-[178px] lg:h-[17.38vw] rounded-[10px] lg:rounded-[0.98vw] bg-discriptionPanel overflow-y-scroll align-text-top no-scrollbar">
        <p className="my-[12px] lg:my-[1.17vw] mx-[14px] lg:mx-[1.37vw] text-[11px] lg:text-[1.07vw] whitespace-pre-wrap font-NotoSansKRMedium text-textColor-primary">
          {isLoading ? "this is disc" : disc}
        </p>
      </div>
    </Shimmer>
  );
}

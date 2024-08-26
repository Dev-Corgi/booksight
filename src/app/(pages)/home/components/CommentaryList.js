"use client";

import React, { useEffect, useState } from "react";
import Book from "@/app/components/Book";
import commentaryData from "@data/commentaryData.json";
import aladinISBNSearchHandler from "@handler/aladinISBNSearchHandler";
import TitleTag from "@/app/components/TitleTag";

export default function CommentaryList() {
  const [book, setbook] = useState(null);
  const [isFetching, setisFetching] = useState(true);

  useEffect(() => {
    async function fetchHotTrend() {
      const result = await aladinISBNSearchHandler(9791130605210);
      setbook(result);
      setisFetching(false);
    }

    fetchHotTrend();
  }, []);

  return (
    <>
      {!isFetching && (
        <div className={`w-full h-min`}>
          <TitleTag title="베스트 셀러"></TitleTag>
          <div className="flex flex-row gap-[30px] ml-[28px] mt-[14px]">
            {commentaryData.map((comment, index) => {
              return (
                <div
                  className="relative w-[228.63px] h-[209px] rounded-[23.09px] overflow-clip"
                  style={{
                    backgroundColor: comment.bgColor,
                  }}
                  key={index}
                >
                  <p className="font-NotoSansKRSemiBold text-[19.63px] text-black -tracking-[2px] w-[135px] leading-[24.2px] ml-[20.78px] mt-[18.48px]">
                    {comment.comment}
                  </p>
                  <p className="font-NotoSansKRMedium text-[15px] text-textColor-secondary -tracking-[2px] leading-[19px] ml-[20.78px] mt-[4.12px]">
                    {comment.title}
                  </p>
                  <Book
                    className="w-[134.27px] h-[194.66px] ml-[109.16px] -rotate-[14.62deg] origin-center"
                    book={book}
                  ></Book>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import BookIcon from "@svg/BookIcon.svg";
import NLKeywordSearchHandler from "@handler/NLKeywordSearchHandler";

export default function AutoKeywordModal({ input,isFocus }) {
  const [dataList, setdataList] = useState(undefined);

  function isCompletedHangulString(string) {
    return Array.from(string).every((char) => {
      const code = char.charCodeAt(0);
      return code >= 0xac00 && code <= 0xd7a3;
    });
  }

  useEffect(() => {
    async function fetchNLKeywordSearch(input) {
      setdataList(await NLKeywordSearchHandler(input));
    }

    if (isCompletedHangulString && isFocus) {
      fetchNLKeywordSearch(input);
    }
  }, [input]);

  useEffect(() => {
    if(!isFocus){
      setdataList(undefined);
    }
  }, [isFocus])

  return (
    <>
      {isFocus && dataList && (
        <div className="flex flex-col w-full  bg-searchBar rounded-[11px] lg:rounded-[1.07vw]">
          <p className="font-NotoSansKRMedium text-[10px] lg:text-[0.98vw] mt-[7px] lg:mt-[0.68vw] ml-[15px] lg:ml-[1.46vw]">
            추천 검색어 :
          </p>
          <div className="flex flex-col pb-[6px] lg:pb-[0.59vw]">
            {dataList.map((data,index) => {
              return (
                <div
                  className="flex flex-row w-full h-[36px] lg:h-[3.52vw] gap-[6px] lg:gap-[0.59vw]"
                  key={index}
                >
                  <div className="relative w-[14px] lg:w-[1.37vw] h-[14px] lg:h-[1.37vw] ml-[8px] lg:ml-[0.78vw] mt-[6px] lg:mt-[0.59vw]">
                    <BookIcon className="text-textColor-secondary"></BookIcon>
                  </div>
                  <div className="flex flex-col flex-grow mt-[4px] lg:mt-[0.39vw]">
                    <p className="font-NotoSansKRMedium text-[11px] lg:text-[1.07vw] text-black truncate w-[30%]">
                      {data.title}
                    </p>
                    <p className="font-NotoSansKRMedium text-[8px] lg:text-[0.78vw] text-textColor-secondary truncate w-[30%]">
                      {data.author}
                    </p>
                    <div className="w-full h-[0.7px] lg:h-[0.07vw] bg-textColor-secondary mt-[5px] lg:mt-[0.49vw]"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import BookIcon from "@svg/BookIcon.svg";
import NLKeywordSearchHandler from "@handler/NLKeywordSearchHandler";

export default function AutoKeywordModal({ input,isFocus }) {
  const disc ="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
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

  return (
    <>
      {isFocus && dataList && (
        <div className="flex flex-col w-full  bg-searchBar rounded-[15px]">
          <p className="font-NotoSansKRMedium text-[13px] mt-[10px] ml-[21px]">
            추천 검색어 :
          </p>
          <div className="flex flex-col pb-[8px]">
            {dataList.map((data,index) => {
              return (
                <div
                  className="flex flex-row w-full h-[51px] gap-[8px]"
                  key={index}
                >
                  <div className="relative w-[20px] h-[20px] ml-[11px] mt-[8px]">
                    <BookIcon className="text-textColor-secondary"></BookIcon>
                  </div>
                  <div className="flex flex-col flex-grow mt-[5px]">
                    <p className="font-NotoSansKRMedium text-[15px] text-black truncate w-[30%]">
                      {data.title}
                    </p>
                    <p className="font-NotoSansKRMedium text-[11px] text-textColor-secondary truncate w-[30%]">
                      {data.author}
                    </p>
                    <div className="w-full h-[1px] bg-textColor-secondary mt-[6.5px]"></div>
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

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import aladinKeywordSearchHandler from "root/Handler/aladinKeywordSearchHandler";
import Book from "@components/Book";
import ReviewStars from "./ReviewStars";
export default function Booklist({
  className,
  keyword,
  width = 125.2,
}) {
  const router = useRouter();
  const originWidth = 125.2;
  const scale = width / originWidth;

  const [books, setbooks] = useState(null);
  const [isFetching, setisFetching] = useState(true);

  useEffect(() => {
    async function fetchKeywordSearch() {
      const result = await aladinKeywordSearchHandler(keyword);
      setbooks(result);
      setisFetching(false);
    }

    fetchKeywordSearch();
  }, []);

  // 스코어 다듬기
  function getScore(score) {
    return Math.ceil(score / 2);
  }

  const handleClick = (isbn13) => {
    router.push(`/bookdetail/${isbn13}`);
  };

  if(isFetching){ return}

  return (
          <div className={`${className}`}>
            {books.map((book, index) => {
              return (
                <div className = {`w-[${width}px] aspect-[1/2]`} key = {index}>
                <div
                  className={"flex flex-col w-min h-min origin-top-left"}
                  style={{
                    scale: `${scale}`,
                  }}
                  key={index}
                  onClick={() => handleClick(book.isbn13)}
                >
                  <Book className="w-[125.2px] h-[181.51px]" book={book} shadowType="circle"></Book>
                  <ReviewStars
                    width={67.85}
                    score={getScore(book.customerReviewRank)}
                    className="mt-[15.09px]"
                  ></ReviewStars>
                  <p className="font-KopubWorldBold text-black w-[125.2px] text-[13px] mt-[3.85px] truncate">
                    {book.title}
                  </p>
                  <p className="font-NotoSansKRMedium text-textColor-secondary text-[10px] -mt-[1px]">
                    {book.author}
                  </p>
                </div>
                </div>
              );
            })}
          </div>
  );
}

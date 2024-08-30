"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Book from "@components/Book";
import ReviewStars from "./ReviewStars";
import Shimmer from "./Simmer";

export default function Booklist({ className, width = 125.2, books }) {
  const router = useRouter();
  const originWidth = 125.2;
  const scale = width / originWidth;
  const [isLoading, setIsLoading] = useState(true);
  const [bookDatas, setBookDatas] = useState(Array.from({length : 10}));

  useEffect(() => {
    // Set loading to false once books are loaded
    if (books) {
      setBookDatas(books);
      setIsLoading(false);
    }
  }, [books]);

  // 스코어 다듬기
  function getScore(score) {
    return Math.ceil(score / 2);
  }

  const handleClick = (isbn13) => {
    router.push(`/bookdetail/${isbn13}`);
  };

  return (
    <div className={`${className}`}>
      {bookDatas.map((book, index) => {
        return (
          <div
            className="aspect-[1/2]"
            key={index}
            style={{
              width: width,
            }}
          >
            <div
              className={"flex flex-col w-min h-min origin-top-left"}
              style={{
                scale: `${scale}`,
              }}
              key={index}
              onClick={() => handleClick(book.isbn13)}
            >
              <Shimmer isLoading={isLoading}>
                <Book
                  className="w-[125.2px] h-[181.51px]"
                  book={book}
                  shadowType="circle"
                ></Book>
              </Shimmer>
              <Shimmer isLoading={isLoading}>
                <ReviewStars
                  width={67.85}
                  score={getScore(book == undefined ? 5 : book.customerReviewRank)}
                  className="mt-[15.09px]"
                ></ReviewStars>
              </Shimmer>
              <Shimmer isLoading={isLoading}>
                <p className="font-KopubWorldBold text-black w-[125.2px] text-[13px] mt-[3.85px] truncate">
                  {book == undefined ? "title" : book.title}
                </p>
              </Shimmer>
              <Shimmer isLoading={isLoading}>
                <p className="font-NotoSansKRMedium text-textColor-secondary text-[10px] -mt-[1px]">
                {book == undefined ? "author" : book.author}
                </p>
              </Shimmer>
            </div>
          </div>
        );
      })}
    </div>
  );
}

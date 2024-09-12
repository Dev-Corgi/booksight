"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Book from "@components/Book";
import ReviewStars from "./ReviewStars";
import Shimmer from "./Simmer";
import getScore from "root/utils/getScore";

export default function Booklist({ className, width = 125.2, books }) {
  const router = useRouter();
  const originWidth = 125.2;
  const scale = width / originWidth;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(!books.some(item => item == undefined)){
      setIsLoading(false)
    }
  }, [books])

  const handleClick = (isbn13) => {
    router.push(`/bookdetail/${isbn13}`);
  };

  return (
    <div className={`${className}`}>
      {books.map((book, index) => {
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
                  score={book == undefined ? 5 : getScore(book)}
                  className="mt-[15.09px]"
                ></ReviewStars>
              </Shimmer>
              <Shimmer isLoading={isLoading}>
                <p className="font-KopubWorldBold text-black w-[125.2px] text-[13px] mt-[3.85px] truncate">
                  {book == undefined ? "title" : book.title}
                </p>
              </Shimmer>
              <Shimmer isLoading={isLoading}>
                <p className="font-NotoSansKRMedium text-textColor-secondary text-[10px] -mt-[1px] truncate">
                {book == undefined ? "author" : book.authorName}
                </p>
              </Shimmer>
            </div>
          </div>
        );
      })}
    </div>
  );
}

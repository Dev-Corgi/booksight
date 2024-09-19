"use client";
import React, { useEffect, useState } from "react";
import ReviewStars from "@/app/components/ReviewStars";
import Image from "next/image";
import Shimmer from "@/app/components/Simmer";
import getScore from "root/utils/getScore";
import { useRouter } from "next/navigation";

export default function TimelineComponent({ book }) {
  const router = useRouter();
  const [score, setscore] = useState(undefined);

  useEffect(() => {
    if (book != undefined) {
      setscore(getScore(book));
    }
  }, [book]);

  function handleClick() {
    if (book != undefined) {
      router.push(`/bookdetail/${book.isbn13}`);
    }
  }

  return (
    <div className="flex flex-col w-[260px] lg:w-[25.39vw] h-[110px] lg:h-[10.74vw] text-nowrap">
      <Shimmer isLoading={book == undefined}>
        <p className="font-NotoSansKRSemiBold text-[10px] lg:text-[0.98vw] bg-discriptionPanel">
          {book != undefined ? book.pubDate.replace(/-/g, ".") : "????.??.??"}
        </p>
      </Shimmer>
      <div className="flex flex-row items-center ml-[8px] lg:ml-[0.78vw] mt-[6px] lg:mt-[0.59vw]">
        <div className="relative flex items-center justify-center w-[7px] lg:w-[0.68vw] h-[88px] lg:h-[8.59vw]">
          <div className="absolute w-[0.5px] h-[125px] bg-primary"></div>
          <div className="absolute w-[10px] h-[10px] bg-primary rounded-full"></div>
        </div>

        <div
          onClick={handleClick}
          className="flex flex-col  justify-center ml-[16px] lg:ml-[1.56vw]  rounded-l-[10px] lg:rounded-l-[0.98vw] bg-background w-[230px] lg:w-[22.46vw] h-[76px] lg:h-[7.42vw]"
        >
          <div className="flex flex-row gap-[18px] lg:gap-[1.76vw] ml-[9px] lg:ml-[0.88vw]">
            <Shimmer isLoading={book == undefined}>
              <div className="relative w-[42px] lg:w-[4.1vw] h-[63px] lg:h-[6.15vw] rounded-[4px] lg:rounded-[0.39vw] overflow-hidden">
                {book != undefined && (
                  <Image
                    alt="bookCoverImg"
                    src={book.cover.replace(/coversum/, "cover200")}
                    fill
                    sizes={1}
                    className="object-fill"
                  ></Image>
                )}
              </div>
            </Shimmer>

            <div className="flex flex-col mt-[5px] lg:mt-[0.49vw]">
              <Shimmer isLoading={book == undefined}>
                <p className="font-NotoSansKRSemiBold text-[12px] lg:text-[1.17vw] w-[120px] lg:w-[11.72vw] truncate">
                  {book != undefined ? book.title : "도서제목 로딩중"}
                </p>
              </Shimmer>
              <Shimmer isLoading={book == undefined}>
                <p className="font-NotoSansKRMedium text-[8px] lg:text-[0.78vw] text-textColor-secondary">
                  {book != undefined ? book.author : "작가 로딩중"}
                </p>
              </Shimmer>
              <Shimmer isLoading={book == undefined}>
                <ReviewStars
                  score={score}
                  width={"w-[9px] lg:w-[0.88vw]"}
                  className="mt-[2px] lg:mt-[0.2vw] gap-[1px] lg:gap-[0.1vw]"
                ></ReviewStars> 
              </Shimmer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

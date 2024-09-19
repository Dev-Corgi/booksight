"use client";
import React, { useState, useEffect } from "react";
import ReviewStars from "@/app/components/ReviewStars";
import Book from "@/app/components/Book";
import InfoIcon from "@svg/InfoIcon.svg";
import PurchaseButton from "../PurchaseButton";
import RentButton from "../RentButton";
import Shimmer from "@components/Simmer";
import getScore from "root/utils/getScore";

export default function BookInfo({ book }) {
  const [isLoading, setIsLoading] = useState(true);
  const [score, setscore] = useState(undefined);
  const [currentBook, setcurrentBook] = useState(undefined);

  useEffect(() => {
    // book이 Promise를 반환하므로, 비동기 함수를 useEffect 내부에서 호출합니다.
    const fetchData = async () => {
      try {
        const result = await book;
        setscore(getScore(result));
        setcurrentBook(result);
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
    <>
      <div className="flex flex-col w-[329px] lg:w-[32.13vw] h-min">
        {/* //author */}
        <Shimmer isLoading={isLoading} className={"w-min h-min"}>
          <p className="mt-[36px] lg:mt-[3.52vw] text-[14px] lg:text-[1.37vw] font-NotoSansKRMedium text-textColor-secondary whitespace-nowrap">
            {currentBook == undefined ? "this is author" : currentBook.author}
          </p>
        </Shimmer>
        {/* title */}
        <Shimmer isLoading={isLoading} className={"w-min h-min"}>
          <p
            className="mt-[4px] lg:mt-[0.39vw] text-[45px] lg:text-[4.39vw] w-[267px] lg:w-[26.07vw] font-KopubWorldBold text-textColor-primary leading-[55px] lg:leading-[5.37vw] overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {currentBook == undefined ? "this is title" : currentBook.title}
          </p>
        </Shimmer>
        {/* category */}
        <div className="flex flex-row gap-[5px] lg:gap-[0.49vw] mt-[8px] lg:mt-[7.99px]">
          {(currentBook == undefined
            ? "국내도서>소설/시/희곡>세계의 소설>북유럽소설"
            : currentBook.categoryName
          )
            .split(">")
            .map((tag, index) => {
              return (
                <Shimmer isLoading={isLoading} key={index} className={"flex"}>
                  <div className="flex px-[7px] lg:px-[0.68vw]  py-[3px] lg:py-[0.29vw] rounded-full outline outline-[0.85px] lg:outline-[0.08vw] outline-primary">
                    <p className="text-[10px] lg:text-[0.98vw] font-NotoSansKRSemiBold text-primary whitespace-nowrap">
                      {tag}
                    </p>
                  </div>
                </Shimmer>
              );
            })}
        </div>

        {/* score */}

        <div className="flex flex-row items-center w-min h-min mt-[15px] lg:mt-[1.46vw] gap-[6px] lg:gap-[0.59vw]">
          <Shimmer isLoading={isLoading} className="flex">
            <div className="w-min h-min">
              <ReviewStars
                className="gap-[2px] lg:gap-[0.2vw]"
                width={"w-[13px] lg:w-[1.27vw]"}
                score={currentBook == undefined ? 5 : score}
              ></ReviewStars>
            </div>
          </Shimmer>
          <Shimmer isLoading={isLoading} className="w-min h-min">
            <p className=" text-black text-[10px] lg:text-[0.98vw] font-NotoSansKRMedium  text-nowrap">{`${
              currentBook == undefined ? 5 : score == undefined ? "- " : score
            }/10`}</p>
          </Shimmer>
        </div>

        {/* rentButton */}

        <div className="flex flex-row w-min h-min mt-[15px] lg:mt-[1.46vw] gap-[10px] lg:gap-[0.98vw]">
          <RentButton book={currentBook}></RentButton>
          <PurchaseButton book={currentBook}></PurchaseButton>
        </div>

        <div className="flex flex-row items-center gap-[4px] lg:gap-[0.39vw] mt-[17px] lg:mt-[1.66vw]">
          <div className="relative w-[15px] lg:w-[1.46vw] h-[15px] lg:h-[1.46vw]">
            <InfoIcon className=" text-primary"></InfoIcon>
          </div>
          <p className="font-NotoSansKRMedium text-[11px] lg:text-[1.07vw] text-primary">
            도서 DB 제공 : 알라딘 인터넷서점(www.aladin.co.kr)
          </p>
        </div>
      </div>
      <div className="flex ml-[100px] lg:ml-[9.77vw]">
        <Shimmer isLoading={isLoading} className="flex">
          <Book
            className="w-[288px] lg:w-[28.13vw] h-[420px] lg:h-[41.02vw]"
            book={currentBook}
            shadowType="shadow"
            coverSize={500}
          ></Book>
        </Shimmer>
      </div>
    </>
  );
}

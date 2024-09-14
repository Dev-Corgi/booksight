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
      <div className="flex flex-col w-min h-min">
        {/* //author */}
        <Shimmer isLoading={isLoading} className={"w-min h-min"}>
          <p className="mt-[51px] text-[19px] font-NotoSansKRMedium text-textColor-secondary whitespace-nowrap">
            {currentBook == undefined ? "this is author" : currentBook.author}
          </p>
        </Shimmer>
        {/* title */}
        <Shimmer isLoading={isLoading} className = {"w-min h-min"}>
          <p
            className="mt-[6px] text-[63px] w-[374px] font-KopubWorldBold text-textColor-primary h-[125px] leading-[65px] overflow-hidden"
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
        <div className="flex flex-row gap-[7px] mt-[15px]">
          {(currentBook == undefined
            ? "국내도서>소설/시/희곡>세계의 소설>북유럽소설"
            : currentBook.categoryName
          )
            .split(">")
            .map((tag, index) => {
              return (
                <Shimmer isLoading={isLoading} key={index} className = {"flex"}>
                  <div className="flex px-[9.6px] py-[5px] rounded-full outline outline-[1.5px] outline-primary">
                    <p className="text-[14px] font-NotoSansKRSemiBold text-primary whitespace-nowrap">
                      {tag}
                    </p>
                  </div>
                </Shimmer>
              );
            })}
        </div>

        {/* score */}

        <div className="flex flex-row w-min h-min mt-[20px]">
          <Shimmer isLoading={isLoading} className = "flex">
            <div className="w-[111px] h-[20.94px]">
              <ReviewStars
                width={111}
                score={currentBook == undefined ? 5 : score}
              ></ReviewStars>
            </div>
          </Shimmer>
          <Shimmer isLoading={isLoading} className = "w-min h-min">
            <p className="ml-[10px] text-black text-[14px] font-NotoSansKRMedium -mt-[1px] text-nowrap">{`${
              currentBook == undefined ? 5 : score == undefined ? "- " : score
            }/10`}</p>
          </Shimmer>
        </div>

        {/* rentButton */}

        <div className="flex flex-row w-min h-min mt-[20px] gap-[14px]">
          <RentButton book={currentBook}></RentButton>
          <PurchaseButton book={currentBook}></PurchaseButton>
        </div>

        <div className="flex flex-row gap-[6px] mt-[24px]">
          <div className="relative w-[20px] h-[20px]">
            <InfoIcon className=" text-primary"></InfoIcon>
          </div>
          <p className="font-NotoSansKRMedium text-[15px] text-primary">
            도서 DB 제공 : 알라딘 인터넷서점(www.aladin.co.kr)
          </p>
        </div>
      </div>
        <div className = "flex ml-[200px]">
      <Shimmer isLoading={isLoading} className = "flex">
        <Book
          className="w-[392.37px] h-[589.83px]"
          book={currentBook}
          shadowType="shadow"
          coverSize={500}
        ></Book>
      </Shimmer>
         </div>
    </>
  );
}

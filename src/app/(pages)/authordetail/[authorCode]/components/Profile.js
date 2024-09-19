"use client";
import React, { useState, useEffect } from "react";
import SavedIcon from "@svg/SavedIcon.svg";
import ReviewStars from "@/app/components/ReviewStars";
import Image from "next/image";
import getRandomProfileImage from "root/utils/getRandomProfileImage";
import Shimmer from "@/app/components/Simmer";

export default function Profile({ books, authorName, authorCode }) {
  const [score, setscore] = useState(undefined);
  const [bookCount, setbookCount] = useState(undefined);
  const [src, setSrc] = useState(
    `https://image.aladin.co.kr/Author/Photo/${authorCode}/${authorCode}_2.jpg`
  );
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await books
        setscore(calculateAverageReviewRank(result));
        setbookCount(result.length);
        setisLoading(false);
      } catch (error) {
        console.error("Error fetching book data:", error);
        // 에러 처리 로직을 추가할 수 있습니다.
      }
    };

    fetchData();
  }, [books]);

  const handleError = () => {
    // 이미지가 로드되지 않으면 기본 이미지로 변경
    setSrc(getRandomProfileImage);
  };

  const calculateAverageReviewRank = (books) => {
    // ratingCount가 0이 아닌 객체들만 필터링
    const filteredArray = books.filter((item) => item.customerReviewRank != 0);

    // 필터링된 배열이 비어있는 경우 0 반환
    if (filteredArray.length === 0) return 0;

    // 평균을 계산
    const total = filteredArray.reduce(
      (sum, item) => sum + item.customerReviewRank,
      0
    );
    const average = total / filteredArray.length;

    // 평균을 소수점 한 자리까지 반올림
    return parseFloat(average.toFixed(1));
  };

  return (
    <div className="flex flex-row text-nowrap">
      <div className="relative w-[98px] lg:w-[9.57vw] h-[98px] lg:h-[9.57vw] rounded-full border-[1.8px] lg:border-[0.18vw] overflow-hidden">
        <Image
          alt="ProfilePic"
          src={src}
          fill
          sizes={1}
          className="object-cover"
          onError={handleError}
        ></Image>
      </div>

      <div className="flex flex-col ml-[18px] lg:ml-[1.76vw]">
        <div className="flex flex-row items-center mt-[10px] lg:mt-[0.98vw] gap-[18px] lg:gap-[1.76vw]">
          <p className="font-KopubWorldBold text-[23px] lg:text-[2.25vw]">{authorName}</p>
          <div className="flex justify-center items-center w-[72px] lg:w-[7.03vw] h-[24px] lg:h-[2.34vw] rounded-full bg-primary">
            <div className="flex flex-row gap-[6px] lg:gap-[0.59vw]"></div>
            <div className="relative w-[11px] lg:w-[1.07vw] h-[11px] lg:h-[1.07vw]">
              <SavedIcon></SavedIcon>
            </div>
            <p className="font-NotoSansKRSemiBold text-[9px] lg:text-[0.88vw]">구독하기</p>
          </div>
        </div>

        <div className="flex flex-row mt-[23px] lg:mt-[2.25vw] gap-[3px] lg:gap-[0.29vw]">
          <div className="flex px-[5px] lg:px-[0.49vw] py-[1.5px] lg:py-[0.15vw] rounded-full border-[1px] lg:border-[0.1vw] border-black ">
            <p className="text-[9px] lg:text-[0.88vw] font-NotoSansKRSemiBold whitespace-nowrap">
              #영미소설
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center mt-[6px] lg:mt-[0.59vw] gap-[6px] lg:gap-[0.59vw]">
          <Shimmer isLoading={isLoading}>
              <ReviewStars score={score} 
              className = "gap-[2px] lg:gap-[0.2vw]"
              width="w-[12px] lg:w-[1.17vw]"
              ></ReviewStars>
          </Shimmer>
          <Shimmer isLoading={isLoading}>
            <p className="font-NotoSansKRMedium text-[10px] lg:text-[0.98vw]">
              {score != undefined ? `${score} / 10` : "- / 10"}
            </p>
          </Shimmer>
        </div>

        <Shimmer isLoading={isLoading}>
          <p className="font-NotoSansKRMedium text-[10px] lg:text-[0.98vw] text-black mt-[5px] lg:mt-[0.49vw]">
            {bookCount != undefined
              ? `등록된 저서 : ${bookCount} 권`
              : "등록된 저서: ?? 권"}
          </p>
        </Shimmer>
      </div>
    </div>
  );
}

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
      <div className="relative w-[138px] h-[138px] rounded-full border-[2.5px] overflow-hidden">
        <Image
          alt="ProfilePic"
          src={src}
          fill
          sizes={1}
          className="object-cover"
          onError={handleError}
        ></Image>
      </div>

      <div className="flex flex-col ml-[26px]">
        <div className="flex flex-row items-center mt-[14px] gap-[25px]">
          <p className="font-KopubWorldBold text-[33px]">{authorName}</p>
          <div className="flex justify-center items-center w-[101px] h-[33px] rounded-full bg-primary">
            <div className="flex flex-row gap-[5px]"></div>
            <div className="relative w-[18px] h-[18px]">
              <SavedIcon></SavedIcon>
            </div>
            <p className="font-NotoSansKRSemiBold text-[13px]">구독하기</p>
          </div>
        </div>

        <div className="flex flex-row mt-[32px] gap-[4.5px]">
          <div className="flex px-[9.6px] py-[5px] rounded-full outline outline-[1.5px] outline-black">
            <p className="text-[14px] font-NotoSansKRSemiBold whitespace-nowrap">
              #영미소설
            </p>
          </div>
        </div>

        <div className="flex flex-row mt-[9px] gap-[9px]">
          <Shimmer isLoading={isLoading}>
            <div className="w-[111px] h-[21px]">
              <ReviewStars score={score} width={111}></ReviewStars>
            </div>
          </Shimmer>
          <Shimmer isLoading={isLoading}>
            <p className="font-NotoSansKRMedium text-[15px]">
              {score != undefined ? `${score} / 10` : "- / 10"}
            </p>
          </Shimmer>
        </div>

        <Shimmer isLoading={isLoading}>
          <p className="font-NotoSansKRMedium text-[16px] text-black mt-[8px]">
            {bookCount != undefined
              ? `등록된 저서 : ${bookCount} 권`
              : "등록된 저서: ?? 권"}
          </p>
        </Shimmer>
      </div>
    </div>
  );
}

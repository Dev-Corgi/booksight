"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReviewFrameImg from "@png/reviewSection.png";
import Profile_1 from "@png/profileImages/Profile_1.png";
import Profile_2 from "@png/profileImages/Profile_2.png";
import Profile_3 from "@png/profileImages/Profile_3.png";
import Profile_4 from "@png/profileImages/Profile_4.png";
import Profile_5 from "@png/profileImages/Profile_5.png";
import Profile_6 from "@png/profileImages/Profile_6.png";
import Profile_7 from "@png/profileImages/Profile_7.png";
import Profile_8 from "@png/profileImages/Profile_8.png";
import Profile_9 from "@png/profileImages/Profile_9.png";
import Link from "next/link";
import ReviewStars from "@/app/components/ReviewStars";
import Shimmer from "@/app/components/Simmer";
import reviewCrawlerHandler from "@handler/reviewCrawlerHandler";

export default function ReviewComponent({ book, index }) {
  const [reviewData, setreviewData] = useState(undefined);
  const [isExist, setisExist] = useState(true);

  useEffect(() => {
    // book이 Promise를 반환하므로, 비동기 함수를 useEffect 내부에서 호출합니다.
    const fetchData = async () => {
      try {
        const result = await book;
        const reviewResult = result.reviewList[index];
        if (index + 1 > result.reviewList.length) {
          setisExist(false);
          return;
        }
        reviewResult.text = await reviewCrawlerHandler(
          result.reviewList[index].link
        );
        setreviewData(reviewResult);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };
    if (book != undefined) {
      fetchData();
    }
  }, [book]);

  const localImages = [
    Profile_1,
    Profile_2,
    Profile_3,
    Profile_4,
    Profile_5,
    Profile_6,
    Profile_7,
    Profile_8,
    Profile_9,
    // 추가 이미지 경로
  ];

  function getRandomImage() {
    // 랜덤으로 이미지 선택
    const randomImage =
      localImages[Math.floor(Math.random() * localImages.length)];
    return randomImage;
  }

  return (
    <>
      {isExist && (
        <Shimmer isLoading={reviewData == undefined} className={"flex"}>
          <div className="relative w-[387px] lg:w-[37.79vw] h-[178px] lg:h-[17.38vw] overflow-visible">
            <div className="absolute flex left-0 top-0">
              <div className="relative w-[430px] lg:w-[41.99vw] h-[233px] lg:h-[22.75vw]">
                <Image
                  src={ReviewFrameImg}
                  alt="reviewFrame"
                  fill
                  sizes={1}
                  className="object-cover"
                ></Image>
              </div>
            </div>

            <div className="absolute left-[22px] lg:left-[2.15vw] top-[22px] lg:top-[2.15vw] w-min h-min flex flex-col">
              <ReviewStars
                className={"gap-[2px] lg:gap-[0.2vw]"}
                width="w-[10px] lg:w-[0.98vw]"
                score={reviewData != undefined && reviewData.reviewRank}
              ></ReviewStars>

              <p className="w-[325px] lg:w-[31.74vw] h-[61px] lg:h-[5.96vw] font-NotoSansKRMedium text-[11px] lg:text-[1.07vw] leading-[20px] lg:leading-[1.95vw] mt-[16px] lg:mt-[1.56vw] text-white">
                {reviewData != undefined &&
                  (reviewData.text == "No description found"
                    ? ""
                    : reviewData.text)}
              </p>

              <div className="flex flex-row items-center w-min h-min gap-[8px] lg:gap-[0.78vw] mt-[15px] lg:mt-[1.46vw]">
                <div className="relative w-[28px] lg:w-[2.73vw] h-[28px] lg:h-[2.73vw] rounded-full overflow-hidden">
                  {reviewData && (
                    <Image
                      src={getRandomImage()}
                      alt="profilePic"
                      fill
                      sizes={1}
                    ></Image>
                  )}
                </div>

                <div className="flex flex-col whitespace-nowrap">
                  <p className="font-NotoSansKRSemiBold text-[10px] lg:text-[0.98vw] mt-[1px] lg:mt-[0.1vw] text-white">
                    {reviewData != undefined && reviewData.writer}
                  </p>
                  {reviewData && (
                    <Link
                      className="font-NotoSansKRMedium text-[8px] lg:text-[0.78vw] mt-[1px] lg:mt-[0.1vw] text-white underline-offset-4 underline"
                      href={
                        reviewData == undefined ? "undefined" : reviewData.link
                      }
                    >
                      원문보기
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Shimmer>
      )}
    </>
  );
}

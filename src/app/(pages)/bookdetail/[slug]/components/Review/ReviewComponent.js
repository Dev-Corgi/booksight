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
        if (index+1 > result.reviewList.length) {
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

    fetchData();
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
      {isExist &&
        <div className="relative w-[544.96px] h-[250.99px] overflow-visible">
          <div className="absolute w-[611.37px] h-[331.06px] left-0 top-0">
            <Image
              src={ReviewFrameImg}
              alt="reviewFrame"
              fill
              sizes={1}
              className="object-cover"
            ></Image>
          </div>

          <Shimmer
            isLoading={reviewData == undefined}
            className={"relative w-full h-full"}
          >
            <div className="absolute left-[32.23px] top-[31.25px] w-min h-min">
              <div className="relative w-[91.31px] h-[17.23px]">
                <ReviewStars
                  width={91.31}
                  score={reviewData != undefined && reviewData.reviewRank}
                ></ReviewStars>

                <p className="w-[456px] h-[85px] font-NotoSansKRMedium text-[15px] leading-[28px] mt-[23.76px] text-white">
                  {reviewData != undefined &&
                    (reviewData.text == "No description found"
                      ? ""
                      : reviewData.text)}
                </p>

                <div className="flex flex-row items-center w-min h-min gap-[11.23px] mt-[21.94px]">
                  <div className="relative w-[40.53px] h-[40.53px] rounded-full overflow-clip">
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
                    <p className="font-NotoSansKRSemiBold text-[14px] text-white">
                      {reviewData != undefined && reviewData.writer}
                    </p>
                    {reviewData && (
                      <Link
                        className="font-NotoSansKRMedium text-[11px] text-white underline-offset-4 underline"
                        href={
                          reviewData == undefined
                            ? "undefined"
                            : reviewData.link
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
        </div>
      }
    </>
  );
}

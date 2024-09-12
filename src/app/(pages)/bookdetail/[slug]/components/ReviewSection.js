"use client"
import React,{useState,useEffect} from "react";
import Image from "next/image";
import ReviewFrameImg from "@png/reviewSection.png";
import ReviewStars from "@/app/components/ReviewStars";
import ProfileImg from "@png/profile.jpg";
import TitleTag from "@/app/components/TitleTag";
import reviewCrawlerHandler from "@handler/reviewCrawlerHandler";
import ReviewComponent from "./ReviewComponent";
export default function ReviewSection({ className,book }) {

const [reviewList, setReviewList] = useState(Array.from({length:6}))

useEffect(() => {
  if(book != undefined){
    async function fetchReviewCrawler(){
      const reviews = await Promise.all(
        book.reviewList.map(async (review) => {
          const reviewText = await reviewCrawlerHandler(review.link);
          return { ...review, text: reviewText }; // 리뷰에 텍스트 추가
        })
      );
      setReviewList(reviews);
      }
    fetchReviewCrawler();
  }
}, [book])

  return (
    <div className={`${className} flex flex-col`}>
      <TitleTag title = "독자 서평"></TitleTag>

      <div className="flex flex-col items-start ml-[28px] mt-[14px] w-auto h-min">
        <div className="grid grid-rows-2 grid-flow-col gap-[80.08px] w-full overflow-clip">
          {reviewList.map((reviewData, index) => {
            return (
             <ReviewComponent key = {index} reviewData = {reviewData}></ReviewComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
}

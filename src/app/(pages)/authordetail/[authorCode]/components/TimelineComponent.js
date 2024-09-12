"use client"
import React,{useEffect,useState} from "react"
import ReviewStars from "@/app/components/ReviewStars";
import Image from "next/image";
import Shimmer from "@/app/components/Simmer";
import getScore from "root/utils/getScore";
import { useRouter } from "next/navigation";

export default function TimelineComponent({book}) {

  const router = useRouter();
 const [score, setscore] = useState(undefined)

 useEffect(() => {
  if(book != undefined){
         setscore(getScore(book));
  }
 }, [book])

  function handleClick (){
    if(book != undefined){
      router.push(`/bookdetail/${book.isbn13}`);
    }

  }

  return (
    <div className = "flex flex-col w-[366px] h-[155px] text-nowrap">
    <Shimmer isLoading={book == undefined}>
    <p className = "font-NotoSansKRSemiBold text-[15px] bg-discriptionPanel">{book != undefined ? book.pubDate.replace(/-/g, '.') : "????.??.??"}</p>
    </Shimmer>
    <div className = "flex flex-row ml-[11px] mt-[8px]">
        <div className = "relative flex items-center justify-center w-[10px] h-[125px]">
            <div className = "absolute w-[0.5px] h-[125px] bg-primary"></div>
            <div className = "absolute w-[10px] h-[10px] bg-primary rounded-full"></div>
        </div>

        <div 
        onClick = {handleClick}
        className = "ml-[22px] mt-[11px] flex flex-row rounded-l-[15px] bg-background w-[323px] h-[106px] gap-[25px]">
            <Shimmer isLoading={book == undefined}>
            <div className = "relative ml-[13px] mt-[8px] w-[60px] h-[90px] rounded-[5px] overflow-hidden">
              {book != undefined &&
              <Image alt = "bookCoverImg" src = {book.cover.replace(/coversum/, "cover200")} fill sizes={1} className = "object-fill"></Image>
              }
              </div>
            </Shimmer>

            <div className = "flex flex-col">
                <Shimmer isLoading = {book == undefined}>
                <p className = "font-NotoSansKRSemiBold text-[17px] mt-[15px] w-[190px] truncate">{book != undefined ? book.title : "도서제목 로딩중"}</p>
                </Shimmer>
                <Shimmer isLoading = {book == undefined}>
                <p className = "font-NotoSansKRMedium text-[12px] text-textColor-secondary">{book != undefined ? book.author : "작가 로딩중"}</p>
                </Shimmer>
                <Shimmer isLoading = {book == undefined}>
                <ReviewStars score={score} width={74.21} className="mt-[3px]"></ReviewStars>
                </Shimmer>
            </div>
        </div>
    </div>
</div>
  );
}

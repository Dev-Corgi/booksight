"use client";

import hotTrendList from "root/RealData/hotTrendList.json";
//TODO 레이아웃 전체 수정
import { ClientRouterWrapper } from "root/utils/useClientRouter";
import Image from "next/image";
import quote from "@png/quote.png";
import shelf from "@png/shelf.png";
import Book from "@/app/components/Book";
import Shimmer from "@/app/components/Simmer";

export default function Center(props) {
  const currentBook = 0;

  return (
    <div
      className={
        "w-full h-[348px] mt-[60px] lg:h-[33.98vw] lg:mt-[5.86vw] flex flex-col items-center overflow-x-clip"
      }
    >
      <div className="w-min  h-full flex flex-row">
        <div className="w-[215px] lg:w-[21vw] flex flex-col text-textColor-primary whitespace-break-spaces">
          <p className="w-full mt-[31px] lg:mt-[3.03vw] font-KopubWorldMedium text-[43px] lg:text-[4.2vw] leading-[46px] lg:leading-[4.49vw]">
            {"금주의\n인기 도서들"}
          </p>
          <div className="relative w-full h-min flex flex-col items-center mt-[8px] lg:mt-[0.78vw]">
            <div className="absolute w-[13px] lg:w-[1.27vw] h-[11.23px] lg:h-[1.1vw] top-0 left-0">
              <Image src={quote} alt="quote" fill sizes={1}></Image>
            </div>
            <div className="absolute w-[13px] lg:w-[1.27vw] h-[11.23px] lg:h-[1.1vw] bottom-0 right-0">
              <Image src={quote} alt="quote" fill sizes={1}></Image>
            </div>
            <div className="w-[180px] lg:w-[17.58vw] mt-[8px] lg:mt-[0.78vw] flex flex-col whitespace-pre">
              <p className="font-KopubWorldMedium w-full text-[18px] lg:text-[1.76vw] truncate">
                {hotTrendList[currentBook].title}
              </p>
              <p className="font-NotoSansKRMedium w-full text-[9.5px] lg:text-[0.93vw] ml-[1px] lg:ml-[0.1vw] -mt-[3px] lg:-mt-[0.29vw]">
                {hotTrendList[currentBook].authorName}
              </p>
              <p className="font-NotoSansKRRegular w-full text-[9.5px] lg:text-[0.93vw] ml-[1px] lg:ml-[0.1vw] mt-[8px] lg:mt-[0.78vw] text-pretty">
                {hotTrendList[currentBook].description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-start items-end w-min h-min ml-[34px] lg:ml-[3.32vw] gap-[43px] lg:gap-[4.2vw]">
          <ClientRouterWrapper url={`/bookdetail/${hotTrendList[0].isbn13}`}>
            <div className="w-[226px] h-[339px] lg:w-[22.07vw] lg:h-[33.11vw]">
              <Book
                className="w-full h-full"
                book={hotTrendList[0]}
                shadowType="shadow"
                coverSize={500}
              ></Book>
            </div>
          </ClientRouterWrapper>
          <ClientRouterWrapper url={`/bookdetail/${hotTrendList[1].isbn13}`}>
            <div className="w-[177px] h-[265.5px] lg:w-[17.29vw] lg:h-[25.93vw]">
              <Book
                className="w-full h-full"
                book={hotTrendList[1]}
                shadowType="shadow"
                coverSize={500}
              ></Book>
            </div>
          </ClientRouterWrapper>
          <ClientRouterWrapper url={`/bookdetail/${hotTrendList[2].isbn13}`}>
            <div className="w-[147px] h-[220.5px] lg:w-[14.36vw] lg:h-[21.53vw]">
              <Book
                className="w-full h-full"
                book={hotTrendList[2]}
                shadowType="shadow"
                coverSize={500}
              ></Book>
            </div>
          </ClientRouterWrapper>
        </div>
      </div>

      <div className="w-[1118px] lg:w-[109.18vw] h-[87px] lg:h-[8.5vw] -mt-[20px] lg:-mt-[1.95vw]">
        <Image src={shelf} alt="shelf" layout="responsive"></Image>
      </div>
    </div>
  );
}

"use client";

//TODO 레이아웃 전체 수정
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import quote from "@png/quote.png";
import shelf from "@png/shelf.png";
import Book from "@/app/components/Book";
import hotTrendHandler from "root/Handler/hotTrendHandler";
import Shimmer from "@/app/components/Simmer";

export default function Center(props) {
  const router = useRouter();
  const currentBook = 0;
  const [books, setbooks] = useState(Array.from({ length: 3 }));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchHotTrend() {
      const result = await hotTrendHandler();
      setbooks(result);
      setIsLoading(false);
    }

    fetchHotTrend();
  }, []);

  const handleClick = (book) => {
    if (book != undefined) {
      router.push(`/bookdetail/${book.isbn13}`);
    }
  };

  return (
    <div
      className={`${props.className} flex flex-col items-center w-full h-[33.96vw] st:h-[489px] overflow-visible`}
    >
      <div className="w-min  h-[32.15vw] st:h-[463px] flex flex-row">
        <div className="w-[20.83vw] st:w-[300px] h-full flex flex-col text-textColor-primary whitespace-break-spaces">
        <Shimmer isLoading={isLoading}>
          <p className="mt-[44px] font-KopubWorldMedium w-[17.75vw] st:w-[300px] text-[4.17vw] st:text-[60px] leading-[4.51vw] st:leading-[65px]">
            {"금주의\n인기 도서들"}
          </p>
          </Shimmer>
          <div className="relative w-full h-min flex flex-col mt-[12px]">
            <div className="absolute w-[1.26vw] h-[1.09vw] st:w-[18.17px] st:h-[15.7px] top-0 left-0">
              <Image src={quote} alt="quote" fill sizes={1}></Image>
            </div>
            <div className="absolute w-[1.26vw] h-[1.09vw] st:w-[18.17px] st:h-[15.7px] bottom-0 right-0 rotate-180">
              <Image src={quote} alt="quote" fill sizes={1}></Image>
            </div>
            <div className="mx-[1.88vw] my-[0.69vw] st:mx-[27px] st:my-[10px] whitespace-pre">
              <Shimmer isLoading={isLoading}>
                <p className="font-KopubWorldMedium text-[1.74vw] st:text-[25px] w-[14.56vw] st:w-[246px] truncate">
                  {books[currentBook] == undefined
                    ? "This Is Title"
                    : books[currentBook].title}
                </p>
              </Shimmer>
              <Shimmer isLoading={isLoading}>
                <p className="font-NotoSansKRMedium text-[0.9vw] st:text-[13px] mt-[-0.35vw] st:mt-[-5px]">
                  {books[currentBook] == undefined
                    ? "This Is Author"
                    : books[currentBook].subInfo.authors[0].authorName}
                </p>
              </Shimmer>
              <Shimmer isLoading={isLoading}>
                <p className="font-NotoSansKRRegular w-[14.56vw] st:w-[246px] text-[0.9vw] st:text-[13px] mt-[0.83vw] st:mt-[12px] text-pretty">
                  {books[currentBook] == undefined
                    ? "세계적인 거장 황석영이 장편소설 &lt;철도원 삼대&gt;로 한반도 백년의 역사를 꿰뚫는다. 구상부터 집필까지 30년의 세월이 걸린 이 역작은 철도원 가족을 둘러싼 방대한 서사를 통해 일제시대부터 현재까지 이어지는 노동자의 삶을 실감나게 다루며 대한민국 근현대사를 문학적으로 탁월하게 구현해냈다."
                    : books[currentBook].description}
                </p>
              </Shimmer>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-start w-min h-min ml-[3.33vw] st:ml-[48px] gap-[60.5px]">
          <Shimmer isLoading={isLoading}>
          <div
            className="w-[22.15vw] h-[32.15vw] st:w-[319px] st:h-[463px]"
            onClick={() => handleClick(books[0])}
          >
            <Book
              className="w-full h-full"
              book={books[0]}
              shadowType="shadow"
            ></Book>
          </div>
          </Shimmer>
          <Shimmer isLoading={isLoading}>
          <div
            className="w-[17.92vw] h-[26.04vw] mt-[5.56vw] st:w-[258px] st:h-[375px] st:mt-[80px]"
            onClick={() => handleClick(books[1])}
          >
            <Book
              className="w-full h-full"
              book={books[1]}
              shadowType="shadow"
            ></Book>
          </div>
          </Shimmer>
          <Shimmer isLoading={isLoading}>
          <div
            className="w-[14.34vw] h-[20.81vw] mt-[10.42vw] st:w-[206.46px] st:h-[299.66px] st:mt-[150px]"
            onClick={() => handleClick(books[2])}
          >
            <Book
              className="w-full h-full"
              book={books[2]}
              shadowType="shadow"
            ></Book>
          </div>
          </Shimmer>
        </div>
      </div>

      <div className="w-[109.17vw] h-[8.47vw] -mt-[2.43vw] st:h-[122px] st:-mt-[35px]">
        <Image src={shelf} alt="shelf" layout="responsive"></Image>
      </div>
    </div>
  );
}

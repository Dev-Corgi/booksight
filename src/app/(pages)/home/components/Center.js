"use client"

import React,{useEffect,useState} from "react";
import Image from "next/image";
import quote from "@png/quote.png";
import shelf from "@png/shelf.png";
import bookData from "root/Data/bookData.json";
import Book from "@/app/components/Book";
import hotTrendHandler from "@handler/hotTrendHandler";

export default function Center(props) {
  const currentBook = 0;
  const [books, setbooks] = useState(null)
  const [isFetching, setisFetching] = useState(true)

  useEffect(() => {
    async function  fetchHotTrend(){
    const result = await hotTrendHandler();
    setbooks(result);
    setisFetching(false);
    }

    fetchHotTrend();
  }, [])
  

  return (
    <>
    {!isFetching && 
    <div className={`${props.className} flex flex-col items-center w-full h-[33.96vw] st:h-[489px] overflow-visible`}>
      {console.log(books)}
      <div className="w-min  h-[32.15vw] st:h-[463px] flex flex-row">
        <div className="w-[20.83vw] st:w-[300px] h-full flex flex-col text-textColor-primary whitespace-break-spaces">
          <p className="mt-[44px] font-KopubWorldMedium text-[4.17vw] st:text-[60px] leading-[4.51vw] st:leading-[65px]">
            {"금주의\n인기 도서들"}
          </p>
          <div className="relative w-full h-min flex flex-col mt-[12px]">
            <div className="absolute w-[1.26vw] h-[1.09vw] st:w-[18.17px] st:h-[15.7px] top-0 left-0">
              <Image src={quote} alt="quote"></Image>
            </div>
            <div className="absolute w-[1.26vw] h-[1.09vw] st:w-[18.17px] st:h-[15.7px] bottom-0 right-0 rotate-180">
              <Image src={quote} alt="quote"></Image>
            </div>
            <div className="mx-[1.88vw] my-[0.69vw] st:mx-[27px] st:my-[10px]">
              <p className="font-KopubWorldMedium text-[1.74vw] st:text-[25px]">
                {books[currentBook].title}
              </p>
              <p className="font-NotoSansKRMedium text-[0.9vw] st:text-[13px] mt-[-0.35vw] st:mt-[-5px]">
                {books[currentBook].author}
              </p>
              <p className="font-NotoSansKRRegular text-[0.9vw] st:text-[13px] mt-[0.83vw] st:mt-[12px] text-pretty">
                {books[currentBook].description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-start w-min h-min ml-[3.33vw] st:ml-[48px] gap-[60.5px]">
          <Book
            className="w-[22.15vw] h-[32.15vw] st:w-[319px] st:h-[463px]"
            book={books[0]}
          ></Book>
          <Book
            className="w-[17.92vw] h-[26.04vw] mt-[5.56vw] st:w-[258px] st:h-[375px] st:mt-[80px]"
            book={books[1]}
          ></Book>
          <Book
            className="w-[14.34vw] h-[20.81vw] mt-[10.42vw] st:w-[206.46px] st:h-[299.66px] st:mt-[150px]"
            book={books[2]}
          ></Book>
        </div>
      </div>

      <div className="w-[109.17vw] h-[8.47vw] -mt-[2.43vw] st:h-[122px] st:-mt-[35px]">
        <Image src={shelf} alt="shelf" layout = "responsive"></Image>
      </div>
    </div>
    }
    </>
  );
}

"use client";
import Image from "next/image";
import bookFrame from "@png/bookFrame.png";
import { useEffect, useRef, useState } from "react";
import { ColorExtractor } from "react-color-extractor";
import { useRouter } from 'next/navigation';

export default function Book2({className,book}) {
  const router = useRouter();
  //TODO : 그림자 mt 마진 상대적으로 조절
  // bg-gradient-radial from-[#80C9D3E6] to-[#80C9D300] blur-[5.52]

  const [dominantColor, setDominantColor] = useState("#000000");

  const handleClick = () =>{
    router.push(`/bookdetail/${book.isbn13}`);
  }

  return (
    <div className={`${className} relative overflow-visible`}
    onClick ={handleClick}>
      <div
        className={`absolute w-full pt-[100%]  mt-[6.03vw] st:mt-[86.88px] rounded-full blur-[5.52]`}
        style={{
          background: `radial-gradient(50% 50% at 50% 50%, ${dominantColor}E6, ${dominantColor}00)`,
        }}
      ></div>
      <div
        className="absolute w-[96.55%] h-full rounded-r-[0.56vw] rounded-l-[0.42vw] st:rounded-r-[8px] st:rounded-l-[6px] overflow-clip"
      >
        <ColorExtractor
          getColors={(colors) => {
            setDominantColor(colors[1]);
          }}
        >
          <img
            src={book.cover.replace(/coversum/, 'cover500')}
            layout="fill"
            alt="bookCover"
            className="h-full object-cover"
          ></img>
        </ColorExtractor>
      </div>
      <div className="absolute w-full h-full">
        <Image src={bookFrame} alt="bookFrame" layout="fill"className="h-full object-fill"></Image>
      </div>
    </div>
  );
}

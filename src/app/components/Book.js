"use client";
import React,{useState,useEffect } from "react";
import Image from "next/image";
import bookFrame from "@png/bookFrame.png";
import bookShadow from "@png/bookShadow.png";
import { ColorExtractor } from "react-color-extractor";

export default function Book({ className, book, shadowType = "null" }) {

  const [dominantColor, setDominantColor] = useState("#000000");

  
  return (
    <div className={`${className} relative overflow-visible`}>
      {shadowType == "shadow" && (
        <div className="absolute w-[119.74%] h-full">
          <Image src={bookShadow} alt="bookShadow" fill sizes={1}></Image>
        </div>
      )}
      {shadowType == "circle" && (
        <div
          className={`absolute w-full pt-[100%]  mt-[6.03vw] st:mt-[86.88px] rounded-full blur-[5.52]`}
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, ${dominantColor}E6, ${dominantColor}00)`,
          }}
        ></div>
      )}
      <div className="absolute w-[96.55%] h-full rounded-r-[0.56vw] rounded-l-[0.42vw] st:rounded-r-[8px] st:rounded-l-[6px] overflow-clip">
      
      {book != undefined && 
      <>
      { shadowType == "circle" ? (
          <ColorExtractor
            getColors={(colors) => {
              setDominantColor(colors[1]);
            }}
          >
            <img
              src={book.cover.replace(/coversum/, "cover500")}
              layout="fill"
              alt="bookCover"
              className="h-full object-cover"
            ></img>
           </ColorExtractor>
      ) : (
          <Image
            src={book.cover.replace(/coversum/, "cover500")}
            alt="bookCover"
            fill
            sizes={1}
          ></Image>
      )}
      </>
      }
      </div>
      <div className="absolute w-full h-full">
        <Image src={bookFrame} alt="bookFrame" fill sizes={1}></Image>
      </div>
    </div>
  );
}

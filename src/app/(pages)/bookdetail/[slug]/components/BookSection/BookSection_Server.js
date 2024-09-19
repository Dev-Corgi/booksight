"use client";
import React, { useState, useEffect } from "react";
import shelfImg from "@png/shelf.png";
import Image from "next/image";
import BookInfo from "./BookSection_Client";

export default function BookSection({ book }) {
  return (
    <>
      <div className="relative mt-[70px] lg:mt-[6.84vw] w-full flex flex-col items-center h-[501px] lg:h-[48.93vw]">
        <div className="flex flex-row w-min h-min">
          <BookInfo book={book}></BookInfo>
        </div>
        <div className="absolute w-[1392px] lg:w-[135.94vw] h-[108px] lg:h-[10.55vw] left-[40px] lg:left-[3.91vw] top-[393px] lg:top-[38.38vw] -z-10">
          <Image src={shelfImg} alt="shelf" fill sizes={1}></Image>
        </div>
      </div>
    </>
  );
}

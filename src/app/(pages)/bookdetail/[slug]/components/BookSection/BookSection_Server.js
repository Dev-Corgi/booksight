"use client";
import React, { useState, useEffect } from "react";
import shelfImg from "@png/shelf.png";
import Image from "next/image";
import BookInfo from "./BookSection_Client";

export default function BookSection({ book }) {

  return (
    <>
      <div className="relative mt-[111px] w-full flex flex-col items-center h-[705px]">
        <div className="absolute w-[1958.56px] h-[152px] left-[56px] top-[553px]">
          <Image src={shelfImg} alt="shelf" fill sizes={1}></Image>
        </div>
        <div className="flex flex-row w-min h-min">
          <BookInfo book = {book}></BookInfo>
        </div>
      </div>
    </>
  );
}

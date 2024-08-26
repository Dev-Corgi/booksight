"use client";

import React, { useEffect, useState } from "react";
import Book from "@components/Book";
import categoryData from "@data/categoryData.json";
import TitleTag from "@/app/components/TitleTag";
export default function CategoryList() {
  return (
    <div className={`w-full h-min`}>
<TitleTag title = "베스트 셀러"></TitleTag>
      <div className="flex flex-row gap-[30px] ml-[28px] mt-[14px]">
        {categoryData.map((category, index) => {
          return (
            <div className="flex flex-row items-center w-[327px] h-[173.66px]" key={index}>
              <div
                className={`flex flex-row items-center w-full h-[111px] rounded-[8.76px] overflow-visible`}
                style ={
                  {
                    backgroundColor: category.bgColor
                  }
                }
              >
                <div className="relative ml-[27px] w-[129px] h-[173.66px]">
                <div className = "absolute w-[103.38px] h-[149.87px] z-10">
                  <Book
                    className="w-full h-full"
                    book={category.books[0]}
                  ></Book>
                  </div>
                  <div className = "absolute w-[103.38px] h-[149.87px] ml-[12.81px] mt-[11.89px] z-20">
                  <Book
                    className="w-full h-full"
                    book={category.books[1]}
                  ></Book>
                  </div>
                  <div className = "absolute w-[103.38px] h-[149.87px] ml-[25.62px] mt-[23.79px] z-30">
                  <Book
                    className="w-full h-full"
                    book={category.books[2]}
                  ></Book>
                  </div>
                </div>
                <div className="flex flex-col ml-[27px]">
                  <p className="font-NotoSansKRMedium text-[12px] text-textColor-secondary">
                    {category.subTitle}
                  </p>
                  <p className="font-NotoSansKRBold  text-[20px] text-black">
                    {category.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

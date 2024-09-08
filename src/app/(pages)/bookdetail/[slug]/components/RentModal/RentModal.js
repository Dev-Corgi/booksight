"use client";
import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import TitleTag from "@/app/components/TitleTag";
import CloseButton from "./components/CloseButton";
import Tab from "./components/Tab";
import TagList from "./components/TagList";
import LibraryComponent from "./components/LibraryComponent";

export default function RentModal({ isOpen, requestClose, isbn13 }) {

  if (typeof window === "undefined") {
    return null;
  }

  if(!isOpen){return}


  return ReactDOM.createPortal(
    
        <div className="fixed flex flex-col justify-end inset-0 w-full h-screen bg-black bg-opacity-80">
          <div className="relative flex flex-col items-center w-full h-[86%] bg-background rounded-t-[35px]">
            <CloseButton requestClose={requestClose}></CloseButton>
            <div className="w-[166px] h-[59px] mt-[41.19px]">
              <TitleTag height={59} title="도서 대출" font="KopubWorldBold" />
            </div>
            <div className="flex flex-row justify-between w-full h-[45px] pl-[50px] pr-[58px] -mt-[7.14]">
              <Tab></Tab>
              <TagList
                isOpen={isOpen}
              ></TagList>
            </div>
            <LibraryComponent
              isOpen={isOpen}
              isbn13={isbn13}
            ></LibraryComponent>
          </div>
        </div>
    ,
    typeof window !== "undefined" ? document.getElementById("rentModal") : null
  );
}

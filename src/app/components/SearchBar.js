"use client";

import React, { useState } from "react";
import UserInterfaceIcon from "@svg/UserInterfaceIcon.svg";
import { useRouter } from "next/navigation";
import AutoKeywordModal from "./AutoKeywordModal";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("오베라는 남자");
  const [isFocus, setisFocus] = useState(false)
  const router = useRouter();

  const handleFocus = () => {
    setPlaceholder(""); // 포커스 시 placeholder를 빈 문자열로 설정
    setisFocus(true);
  };

  const handleBlur = () => {
    setInputValue("");
    setPlaceholder("오베라는 남자");
    setisFocus(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      //Action
      handleNavigate(inputValue);
      setInputValue(""); // Clear the input after submission
    }
  };

  const handleNavigate = (inputValue) => {
    router.push(`/searchresult?SearchTarget=All&SearchWord=${inputValue}`);
  };

  return (
    <div className="relative w-[378px] h-[30px] lg:w-[36.91vw] lg:h-[2.93vw] flex flex-col overflow-visible">
      <div className="w-full h-[32px] lg:h-[2.93vw] flex flex-row items-center justify-start gap-[7px] lg:gap-[0.68vw] pl-[14px] lg:pl-[1.37vw] bg-searchBar rounded-full">
        <div className="relative w-[21px] lg:w-[2.05vw] h-[21px] lg:h-[2.05vw]">
          <UserInterfaceIcon className="w-full h-full text-black"></UserInterfaceIcon>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-grow h-full font-NotoSansKRBold text-[11px] lg:text-[1.07vw] text-black  placeholder:text-[11px] lg:placeholder:text-[1.07vw] placeholder:text-black placeholder:font-NotoSansKRBold placeholder:text-opacity-50  bg-transparent focus:outline-none focus:ring-0"
        ></input>
      </div>
      <div className="absolute w-full flex mt-[44px] lg:mt-[4.3vw]">
        <AutoKeywordModal input = {inputValue} isFocus={isFocus}></AutoKeywordModal>
      </div>
    </div>
  );
}

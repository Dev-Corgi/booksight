"use client";

import React, { useState } from "react";
import UserInterfaceIcon from "@svg/UserInterfaceIcon.svg"
import { useRouter } from 'next/navigation';

export default function SearchBar(){
    const [inputValue, setInputValue] = useState("");
    const [placeholder, setPlaceholder] = useState('오베라는 남자');
    const router = useRouter();
  
    const handleFocus = () => {
      setPlaceholder(''); // 포커스 시 placeholder를 빈 문자열로 설정
    };
  
    const handleBlur = () => {
      setInputValue('');
      setPlaceholder('오베라는 남자'); 
    };
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          //Action
          handleNavigate(inputValue);
          setInputValue(''); // Clear the input after submission
        }
      };

      const handleNavigate = (inputValue) => {
        router.push(`/searchresult?SearchTarget=All&SearchWord=${inputValue}`);
      };

    return(
        <div className="w-full h-full flex flex-row items-center justify-start gap-[10px] pl-[10px] bg-searchBar rounded-[40px]">
        <div className="relative w-[30px] h-[30px]">
          <UserInterfaceIcon className = "w-full h-full text-black"></UserInterfaceIcon>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-grow h-full font-NotoSansKRBold text-[15px] text-black  placeholder:text-[15px] placeholder:text-black placeholder:font-NotoSansKRBold placeholder:text-opacity-50  bg-transparent focus:outline-none focus:ring-0"
        ></input>
      </div>
    );
}
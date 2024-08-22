"use client"

import Image from "next/image";
import bookFrame from "@png/bookFrame.png"
import bookShadow from "@png/bookShadow.png"
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Book({className,book}) {
  const router = useRouter();
  
  const handleClick = () =>{
    router.push(`/bookdetail/${book.isbn13}`);
  }
    
  return (
    <div className = {`${className} relative overflow-visible`}
    onClick ={handleClick}>
        <div className = "absolute w-[119.74%] h-full">
            <Image src = {bookShadow} alt = "bookShadow" className="h-full object-cover"></Image>
        </div>
        <div className = "absolute w-[96.55%] h-full rounded-r-[0.56vw] rounded-l-[0.42vw] st:rounded-r-[8px] st:rounded-l-[6px] overflow-clip">
            <Image src = {book.cover.replace(/coversum/, 'cover500')} alt = "bookCover" width = {600} height = {900} className="h-full object-cover"></Image>
        </div>
        <div className = "absolute w-full h-full">
            <Image src = {bookFrame} alt = "bookFrame" className="h-full object-cover"></Image>
        </div>
    </div>
  );
}

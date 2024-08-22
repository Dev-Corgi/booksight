"use client"

import Image from "next/image";
import bookFrame from "@png/bookFrame.png"
import bookShadow from "@png/bookShadow.png"

export default function Book3({className,book}) {
    
  return (
    <div className = {`${className} overflow-visible`}>
        <div className = "absolute w-[96.55%] h-full rounded-r-[0.56vw] rounded-l-[0.42vw] st:rounded-r-[8px] st:rounded-l-[6px] overflow-clip">
            <Image src = {book} alt = "bookCover" width = {600} height = {900} className="h-full object-cover"></Image>
        </div>
        <div className = "absolute w-full h-full">
            <Image src = {bookFrame} alt = "bookFrame" className="h-full object-cover"></Image>
        </div>
    </div>
  );
}

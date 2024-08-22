"use client"
import React,{useEffect,useState} from "react";

import Image from "next/image";
import star_filled from "@png/star_filled.png"
import star_empty from "@png/star_empty.png"
import star_filledSVG from "@svg/star_filled.svg";
import star_emptySVG from "@svg/star_empty.svg"; 

export default function ReviewStars({width,score,className}) {

    const [scale, setScale] = useState(1)

    const originWidth = 67.85

    useEffect(() => {
     setScale( width / originWidth);
    }, [width])


  return (
    <div className = {`${className} flex flex-row w-min h-min gap-[0.08vw] st:gap-[1.12px] origin-top-left`}
    style={{
        scale: `${scale}`
      }}
    >
    {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="w-[0.89vw] h-[0.89vw] st:w-[12.8px] st:h-[12.8px]">
          <Image src={i < score ? star_filledSVG : star_emptySVG} alt=""/>
          {console.log(scale)}
        </div>
      ))}
      </div>
  );
}
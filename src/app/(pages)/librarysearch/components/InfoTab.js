import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Shimmer from "@/app/components/Simmer";

export default function InfoTab() {
  const { addressName,resultNum } = useSelector((state) => state.map);
  return (
    <div className="w-min h-min">
    <Shimmer isLoading={resultNum == undefined}>
    <div className="flex font-KopubWorldBold text-textColor-primary text-[16px] lg:text-[1.56vw] text-nowrap">
      <p>{`${addressName} - 총 ${resultNum == undefined ? 100 : resultNum}곳`}</p>
    </div>
    </Shimmer>

    <div className="relative mt-[3px] lg:mt-[0.29vw] w-[286px] lg:w-[27.93vw] h-[2px] lg:h-[0.2vw]">
      <div className="absolute w-full h-full bg-black opacity-10"></div>
      <div className="absolute w-[102px] h-full bg-primary"></div>
    </div>
  </div>
  );
}

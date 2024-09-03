"use client";
import React, { useState, useEffect } from "react";
import Shimmer from "@/app/components/Simmer";
import Image from "next/image";
export default function LibraryImageSection({ libraryInfo }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (libraryInfo != undefined) {
      setIsLoading(false);
    }
  }, [libraryInfo]);

  return (
    <div className="w-[51.74vw] h-screen py-[16px] mr-[16px]">
        {libraryInfo != undefined && (
        <Shimmer isLoading={isLoading}>
          <div className = "relative w-full h-full object-cover rounded-[40px] overflow-clip">
          <Image
            src={libraryInfo.picture}
            alt="libraryPic"
            fill
            sizes = {1}
          ></Image>
          </div>
        </Shimmer>
        )}
      </div>
  );
}

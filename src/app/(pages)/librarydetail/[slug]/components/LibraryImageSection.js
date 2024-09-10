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
    <div className="flex flex-col justify-center w-[51.74vw] h-screen mr-[16px]">
      <Shimmer isLoading={isLoading}>
      <div className="w-[51.74vw] h-[96.875vh]">
          <div className="relative w-full h-full object-cover rounded-[40px] overflow-clip">
            {libraryInfo != undefined && (
              <Image
                src={libraryInfo.picture}
                alt="libraryPic"
                fill
                sizes={1}
              ></Image>
            )}
          </div>
        </div>
      </Shimmer>
    </div>
  );
}

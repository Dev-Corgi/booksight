"use client";
import React, { useState, useEffect } from "react";
import Shimmer from "@/app/components/Simmer";
import Image from "next/image";
export default function LibraryImageSection({ libPicture }) {
  const [isLoading, setisLoading] = useState(true);
  const [currentLibraryPic, setcurrentLibraryPic] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setcurrentLibraryPic(await libPicture)
        setisLoading(false);
      } catch (error) {
        console.error("Error fetching book data:", error);
        // 에러 처리 로직을 추가할 수 있습니다.
      }
    };

    fetchData();
  }, [libPicture]);

  return (
    <div className="flex flex-col justify-center w-[51.74vw] h-screen mr-[16px]">
      <Shimmer isLoading={isLoading}>
      <div className="w-[51.74vw] h-[96.875vh]">
          <div className="relative w-full h-full object-cover rounded-[40px] overflow-clip">
            {currentLibraryPic != undefined && (
              <Image
                src={currentLibraryPic}
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

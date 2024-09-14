"use client";
import React, { useState, useEffect } from "react";
import getStaticMapHandler from "root/Handler/getStaticMapHandler";
import Image from "next/image";
import Shimmer from "@/app/components/Simmer";
export default function MapSection({ libraryInfo }) {
  const [staticMapImg, setstaticMapImg] = useState(undefined);
  const [isLoading, setisLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await libraryInfo;
        setstaticMapImg(
          await getStaticMapHandler({
            latitude: result.latitude,
            longitude: result.longitude,
          })
        ),
          setisLoading(false);
      } catch (error) {
        console.error("Error fetching book data:", error);
        // 에러 처리 로직을 추가할 수 있습니다.
      }
    };

    fetchData();
  }, [libraryInfo]);

  return (
    <Shimmer isLoading={isLoading}>
      <div className="relative w-[36.18vw] st:w-[521px] h-[262.25px] mt-[40px] rounded-[21px] border-[3px] border-black overflow-clip">
        {staticMapImg != undefined && (
          <Image
            src={staticMapImg}
            alt="mapImage"
            fill
            sizes={1}
            className="absolute object-cover"
          ></Image>
        )}
        <div className="absolute flex items-center justify-center w-[96px] h-[29px] rounded-full bg-white mt-[9px] ml-[10px]">
          <p className="font-NotoSansKRMedium text-[13.69px] text-black">
            오시는 길
          </p>
        </div>
      </div>
    </Shimmer>
  );
}

"use client"
import React, { useEffect, useState } from "react";
import getStaticMapHandler from "@handler/getStaticMapHandler";
import Image from "next/image";
export default function MapSection({ libraryInfo }) {
    const [staticMapImg, setstaticMapImg] = useState("");
    const [isFetching, setisFetching] = useState(true);

    useEffect(() => {
        async function fetchGetStaticMap() {
          const result = await getStaticMapHandler({
            latitude: libraryInfo.libInfo.latitude,
            longitude: libraryInfo.libInfo.longitude,
          });
          setstaticMapImg(result);
          setisFetching(false);
        }
        if (libraryInfo != null) {
          fetchGetStaticMap();
        }
      }, [libraryInfo]);
      
  return (
    <>
    {!isFetching &&
    <div className="relative w-full h-[262.25px] mt-[40px] rounded-[21px] border-[3px] border-black overflow-clip">
    <Image
      src={staticMapImg}
      alt="mapImage"
      fill
      sizes={1}
      className="absolute object-cover"
    ></Image>
    <div className="absolute flex items-center justify-center w-[96px] h-[29px] rounded-full bg-white mt-[9px] ml-[10px]">
      <p className="font-NotoSansKRMedium text-[13.69px] text-black">
        오시는 길
      </p>
    </div>
  </div>
}</>
  );
}

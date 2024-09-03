"use client";
import React, { useState, useEffect } from "react";
import getStaticMapHandler from "root/Handler/getStaticMapHandler";
import Image from "next/image";
import Shimmer from "@/app/components/Simmer";
export default function MapSection({ libraryInfo }) {
  const [staticMapImg, setstaticMapImg] = useState(undefined);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    async function fetchGetStaticMap() {
      if (libraryInfo != undefined) {
        setstaticMapImg(
          await getStaticMapHandler({
            latitude: libraryInfo.libInfo.latitude,
            longitude: libraryInfo.libInfo.longitude,
          })
        ),
          setisLoading(false);
      }
    }

    fetchGetStaticMap();
  }, [libraryInfo]);

  return (
    <Shimmer isLoading={isLoading}>
      <div className="relative w-full h-[262.25px] mt-[40px] rounded-[21px] border-[3px] border-black overflow-clip">
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

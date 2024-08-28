"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import InfogramSection from "./components/InfogramSection";
import getLibraryInfoHandler from "root/Handler/getLibraryInfoHandler";
import getLibraryPictureHandler from "root/Handler/getLibraryPictureHandler";
import DiscriptionSection from "./components/DiscriptionSection";
import StatsSection from "./components/StatsSection";
import MapSection from "./components/MapSection";
import LibraryImageSection from "./components/LibraryImageSection";
export default function LibraryDetailPage({ params }) {
  const libCode = params.slug;

  const [libraryInfo, setlibraryInfo] = useState(null);
  const [isFetching, setisFetching] = useState(true);

  useEffect(() => {
    async function fetchLibraryInfo() {
      const [libraryInfoResult, libraryPictureResult] = await Promise.all([
        getLibraryInfoHandler(libCode),
        getLibraryPictureHandler(libCode),
      ]);

      const library = libraryInfoResult;
      library.picture = libraryPictureResult;

      setlibraryInfo(library);
      setisFetching(false);
    }
    fetchLibraryInfo();
  }, []);

  return (
    <>
      {!isFetching && (
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-grow flex-col items-center">
            <div className="flex flex-col items-start w-[36.18vw] st:w-[521px] h-full text-black">
              <Header />
              <p className="font-NotoSansKRBold text-[73.73px] w-[497px] h-[154px] leading-[76.9px] mt-[45px] text-pretty">
                {libraryInfo.libInfo.libName}
              </p>
              <InfogramSection libraryInfo={libraryInfo}></InfogramSection>
              <DiscriptionSection
                libraryInfo={libraryInfo}
              ></DiscriptionSection>
              <StatsSection libraryInfo={libraryInfo}></StatsSection>
              <MapSection libraryInfo={libraryInfo}></MapSection>
            </div>
          </div>
          <LibraryImageSection libraryInfo={libraryInfo}></LibraryImageSection>
        </div>
      )}
    </>
  );
}

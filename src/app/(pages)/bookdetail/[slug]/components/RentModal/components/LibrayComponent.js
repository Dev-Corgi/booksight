"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PlaceIcon from "@svg/PlaceIcon.svg";
import CallIcon from "@svg/CallIcon.svg";
import { useRouter } from "next/navigation";
import searchNearByLibraryHandler from "@handler/searchNearByLibraryHandler";
import isRentPossibleHandler from "@handler/isRentPossibleHandler";
import getLibraryPictureHandler from "@handler/getLibraryPictureHandler";
import getLibraryInfoHandler from "@handler/getLibraryInfoHandler";

export default function LibraryComponent({ isOpen, location, isbn13 }) {
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(true);
  const [nearbyLibraryCodes, setNearbyLibraryCodes] = useState([]);
  const [libraryInfos,setLibraryInfos] = useState();

  useEffect(() => {
    if (isOpen) {
      async function fetchData() {
        try {
          const librariesResult = await searchNearByLibraryHandler({
            latitude: 37.5666,
            longitude: 126.9782,
          });
          setNearbyLibraryCodes(librariesResult);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }
  }, [isOpen, location]);
  

  useEffect(() => {
    async function fetchLibraryInfo() {
      const promises = nearbyLibraryCodes.map(async (library) => {
        const libraryInfo = await getLibraryInfoHandler(library.libCode);
        const libraryPicture = await getLibraryPictureHandler(library.libCode);
        const rentPossible = await isRentPossibleHandler(
          library.libCode,
          isbn13
        );

        return { libraryInfo, libraryPicture, rentPossible };
      });

      const results = await Promise.all(promises);

      const libraries = results.map((result) => {
        const { libraryInfo, libraryPicture, rentPossible } = result;
        const library = libraryInfo.libInfo;
        library.picture = libraryPicture;
        library.rentState =
          rentPossible.response.result.hasBook === "N"
            ? "미 소장"
            : rentPossible.response.result.loanAvailable === "Y"
            ? "대출 하기"
            : "대출 불가";
        return library;
      });

      const sortedLibraries = libraries.sort((a, b) => {
        const priority = {
          "대출 하기": 1,
          "대출 불가": 2,
          "미 소장": 3,
        };
        return priority[a.rentState] - priority[b.rentState];
      });

      setLibraryInfos(sortedLibraries);
      setIsFetching(false);
    }

    if (isOpen) {
      fetchLibraryInfo();
    }
  }, [nearbyLibraryCodes]);

  const handleLibraryClick = (libCode) => {
    router.push(`/librarydetail/${libCode}`);
  };

  return (
    <>
      {!isFetching && (
        <div className="flex flex-row justify-end w-full pl-[50px]">
          <div className="flex flex-col flex-grow mt-[33.56px] rounded-l-[23.69px] overflow-clip whitespace-nowrap">
            {libraryInfos.map((library, index) => (
              <div className="relative w-full h-[80px]" key={index}>
                <div className="absolute w-full h-[80px]">
                  <Image
                    src={library.picture}
                    alt="libraryThumbnail"
                    className="object-cover"
                    fill
                    sizes={1}
                  />
                </div>
                <div
                  className={`absolute w-full h-full bg-black ${
                    library.rentState === "대출 하기"
                      ? "bg-opacity-50"
                      : "bg-opacity-70"
                  } border-t-[1px] border-b-[1px] border-white border-opacity-30`}
                ></div>
                <div className="absolute flex flex-row h-full  justify-between items-center  w-full">
                  <div className="flex flex-row ml-[18.22px]">
                    <p className="font-MontserratSemiBold text-[14px] text-primary">
                      {"0" + (index + 1)}
                    </p>
                    <p
                      className="ml-[15.53px] w-[280px] font-NotoSansKRBold text-[24px] text-primary"
                      onClick={() => handleLibraryClick(library.libCode)}
                    >
                      {library.libName}
                    </p>
                  </div>
                  <div className="flex flex-row justify-start gap-[60px]">
                    <div className="flex flex-row w-[300px] items-center gap-[2.83px]">
                      <div className="relative w-[19px] h-[19px]">
                        <PlaceIcon className="text-primary" />
                      </div>
                      <p className="font-NotoSansKRBold text-primary text-[14px]">
                        {library.address}
                      </p>
                    </div>
                    <div className="flex flex-row w-[130px] items-center gap-[2.83px]">
                      <div className="relative w-[19px] h-[19px]">
                        <CallIcon className="text-primary" />
                      </div>
                      <p className="font-NotoSansKRBold text-primary text-[14px]">
                        {library.tel}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-[121px] h-[38px] border-[2px] border-primary rounded-[10px] mr-[58px]">
                    <p className="font-NotoSansKRSemiBold text-[14px] text-primary">
                      {library.rentState}
                    </p>
                  </div>
                </div>
                {library.rentState !== "대출 하기" && (
                  <div className="absolute w-full h-full bg-black opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

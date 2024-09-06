"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PlaceIcon from "@svg/PlaceIcon.svg";
import CallIcon from "@svg/CallIcon.svg";
import { useRouter } from "next/navigation";
import searchNearByLibraryHandler from "root/Handler/searchNearByLibraryHandler";
import isRentPossibleHandler from "root/Handler/isRentPossibleHandler";
import getLibraryPictureHandler from "root/Handler/getLibraryPictureHandler";
import getLibraryInfoHandler from "root/Handler/getLibraryInfoHandler";
import Library_1_Comp from "@png/libraryImages_Compressed/Library_1.jpg"
import Library_2_Comp from "@png/libraryImages_Compressed/Library_2.jpg"
import Library_3_Comp from "@png/libraryImages_Compressed/Library_3.jpg"
import Library_4_Comp from "@png/libraryImages_Compressed/Library_4.jpg"
import Library_5_Comp from "@png/libraryImages_Compressed/Library_5.jpg"
import Library_6_Comp from "@png/libraryImages_Compressed/Library_6.jpg"
import Library_7_Comp from "@png/libraryImages_Compressed/Library_7.jpg"
import Library_8_Comp from "@png/libraryImages_Compressed/Library_8.jpg"
import Library_9_Comp from "@png/libraryImages_Compressed/Library_9.jpg"
import Library_10_Comp from "@png/libraryImages_Compressed/Library_10.jpg"

export default function LibraryComponent({ isOpen, location, isbn13 }) {
  const router = useRouter();
  const [nearbyLibraryCodes, setNearbyLibraryCodes] = useState([]);
  const [libraryInfos, setLibraryInfos] = useState([]);

  const localImages = [
    Library_1_Comp,
    Library_2_Comp,
    Library_3_Comp,
    Library_4_Comp,
    Library_5_Comp,
    Library_6_Comp,
    Library_7_Comp,
    Library_8_Comp,
    Library_9_Comp,
    Library_10_Comp
    // 추가 이미지 경로
];

  useEffect(() => {
    if (isOpen) {
      async function fetchData() {
        try {
          const librariesResult = await searchNearByLibraryHandler({
            latitude: location.latitude,
            longitude: location.longitude,
          });
          setNearbyLibraryCodes(librariesResult);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      console.log("시작!")
      setLibraryInfos(Array.from({ length: 10 }));
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
    }

    if (isOpen) {
      fetchLibraryInfo();
    }
  }, [nearbyLibraryCodes]);

  const handleLibraryClick = (libCode) => {
    router.push(`/librarydetail/${libCode}`);
  };

  function getRandomImage(){
    // 랜덤으로 이미지 선택
    const randomImage = localImages[Math.floor(Math.random() * localImages.length)];
    return randomImage;
  }

  return (
    <div className="flex flex-row justify-end w-full pl-[50px]">
      {console.log(libraryInfos)}
        <div className="h-[741px] flex flex-col flex-grow mt-[33.56px] rounded-l-[23.69px] overflow-clip whitespace-nowrap overflow-y-scroll scroll no-scrollbar">
          {libraryInfos.map((library, index) => (
            <div
              className="relative w-full h-[80px]"
              key={index}
              onClick={() =>{if(library != undefined) {handleLibraryClick(library.libCode)}}}
            >
                  <div className="absolute w-full h-[80px]">
                    <Image
                      src={library != undefined ? library.picture : getRandomImage()}
                      alt="libraryThumbnail"
                      className="object-cover"
                      fill
                      sizes={1}
                    />
                  </div>
                  <div
                    className={`absolute w-full h-full bg-black ${
                      library == undefined ? "bg-opacity-50"
                      :
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
                      <p className="ml-[15.53px] w-[280px] font-NotoSansKRBold text-[24px] text-primary">
                        {library == undefined ? "도서관 이름 로딩중": library.libName}
                      </p>
                    </div>
                    <div className="flex flex-row justify-start gap-[60px]">
                      <div className="flex flex-row w-[300px] items-center gap-[2.83px]">
                        <div className="relative w-[19px] h-[19px]">
                          <PlaceIcon className="text-primary" />
                        </div>
                        <p className="font-NotoSansKRBold text-primary text-[14px]">
                          {library == undefined ? "도서관 주소 로딩중" : library.address}
                        </p>
                      </div>
                      <div className="flex flex-row w-[130px] items-center gap-[2.83px]">
                        <div className="relative w-[19px] h-[19px]">
                          <CallIcon className="text-primary" />
                        </div>
                        <p className="font-NotoSansKRBold text-primary text-[14px]">
                          {library == undefined ? "010-1234-5678" : library.tel}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center w-[121px] h-[38px] border-[2px] border-primary rounded-[10px] mr-[58px]">
                      <p className="font-NotoSansKRSemiBold text-[14px] text-primary">
                        {library == undefined ? "로딩중" : library.rentState}
                      </p>
                    </div>
                  </div>
                  {library != undefined && library.rentState !== "대출 하기" && (
                    <div className="absolute w-full h-full bg-black opacity-30"></div>
                  )}
                  {library == undefined && (
                    <div className="absolute w-full h-[80px] backdrop-blur-[6px] bg-[#00000000]"></div>
                  )}
            </div>
          ))}
        </div>
    </div>
  );
}

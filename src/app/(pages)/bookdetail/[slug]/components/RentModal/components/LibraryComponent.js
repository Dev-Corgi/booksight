"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PlaceIcon from "@svg/PlaceIcon.svg";
import CallIcon from "@svg/CallIcon.svg";
import FootprintIcon from "@svg/Footprint.svg"
import { useRouter } from "next/navigation";
import searchNearByLibraryHandler from "root/Handler/searchNearByLibraryHandler";
import isRentPossibleHandler from "root/Handler/isRentPossibleHandler";
import getLibraryPictureHandler from "root/Handler/getLibraryPictureHandler";
import getLibraryInfoHandler from "root/Handler/getLibraryInfoHandler";
import Library_1_Comp from "@png/libraryImages_Compressed/Library_1.jpg";
import Library_2_Comp from "@png/libraryImages_Compressed/Library_2.jpg";
import Library_3_Comp from "@png/libraryImages_Compressed/Library_3.jpg";
import Library_4_Comp from "@png/libraryImages_Compressed/Library_4.jpg";
import Library_5_Comp from "@png/libraryImages_Compressed/Library_5.jpg";
import Library_6_Comp from "@png/libraryImages_Compressed/Library_6.jpg";
import Library_7_Comp from "@png/libraryImages_Compressed/Library_7.jpg";
import Library_8_Comp from "@png/libraryImages_Compressed/Library_8.jpg";
import Library_9_Comp from "@png/libraryImages_Compressed/Library_9.jpg";
import Library_10_Comp from "@png/libraryImages_Compressed/Library_10.jpg";
import NoFoundPic from "@png/NoFoundPic.png";

import { useSelector, useDispatch } from "react-redux";
export default function LibraryComponent({ isOpen, isbn13 }) {
  const router = useRouter();

  const [nearbyLibraryCodes, setNearbyLibraryCodes] = useState([]);
  const [rentPossibleLibraries, setrentPossibleLibraries] = useState([]);
  const [processedLibraries, setProcessedLibraries] = useState([]);
  const [loadIndex, setLoadIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [hasMore, setHasMore] = useState(true);


  const { location, zoom} = useSelector(
    (state) => state.location
  );

  const { isOnlyPossible } = useSelector(
    (state) => state.rentModal
  );

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
    Library_10_Comp,
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
          if (librariesResult.length == 0) {
            return;
          }
          setNearbyLibraryCodes(librariesResult);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      setIsLoading(true);
      setHasMore(true);
      // setProcessedLibraries(Array.from({ length: 10 }));
      setProcessedLibraries([]);
      setNearbyLibraryCodes([]);
      setLoadIndex(0);
      fetchData();
    }
  }, [isOpen, location,isOnlyPossible]);

  useEffect(() => {
    if (
      isOpen &&
      nearbyLibraryCodes != undefined &&
      nearbyLibraryCodes.length != 0
    ) {
      fetchRentPossibleLibrary();
    }
  }, [nearbyLibraryCodes]);

  useEffect(() => {
    async function fetchLibraryInfo() {
      const promises = rentPossibleLibraries.map(async (library) => {
        const libraryInfo = await getLibraryInfoHandler(library.libCode);
        const libraryPicture = await getLibraryPictureHandler(library.libCode);
        const rentState = library.rentState;
        const distance = library.distance;
        return { libraryInfo, libraryPicture, rentState,distance };
      });

      const results = await Promise.all(promises);

      const libraries = results.map((result) => {
        const { libraryInfo, libraryPicture, rentState,distance } = result;
        const library = libraryInfo.libInfo;
        library.picture = libraryPicture;
        library.rentState = rentState;
        library.distance = distance;
        return library;
      });

      // setProcessedLibraries((prev) => [...prev, ...libraries]);

      setProcessedLibraries((prevLibs) => {
        return [
          ...prevLibs.slice(0, prevLibs.length - 10), // 이전 임시 데이터 제거
          ...libraries,
        ];
      });
      setIsLoading(false); // 로딩 끝
    }

    if (
      rentPossibleLibraries != undefined &&
      rentPossibleLibraries.length != 0
    ) {
      fetchLibraryInfo();
    }
  }, [rentPossibleLibraries]);

  ////////////////////////////////////////////////

  async function fetchRentPossibleLibrary() {

    setIsLoading(true);
    setProcessedLibraries((prevLibs) => [
      ...prevLibs,
      ...Array.from({ length: 10 }, () => undefined),
    ]);
    setrentPossibleLibraries([]);
    const tempArr = [];
    var currentIndex = loadIndex;


    while (tempArr.length < 10) {

      //배열 끝일때
      if (nearbyLibraryCodes.length - 1 <= currentIndex) {
        break;
      }

      var slicedArray = [];

      //10개 미만
      if (nearbyLibraryCodes.length < currentIndex + 10) {
        slicedArray = nearbyLibraryCodes.slice(
          currentIndex,
          nearbyLibraryCodes.length
        );
      }
      //10개 이상
      else {
        slicedArray = nearbyLibraryCodes.slice(currentIndex, currentIndex + 10);
      }


      const results = await Promise.all(
        slicedArray.map(
          async (library) =>{
            const result = await isRentPossibleHandler(library.libCode, isbn13)
            result.response.result.distance = library.kiloDistance
            return result
          }
        )
      );

      

      results.map((result) => {
        if (tempArr.length >= 10) return;

        const libCode = result.response.request.libCode;
        const distance = result.response.result.distance;
        const rentState =
          result.response.result.hasBook === "N"
            ? "미 소장"
            : result.response.result.loanAvailable === "Y"
            ? "대출 하기"
            : "대출 불가";

        if (isOnlyPossible == true) {
          if (rentState == "대출 하기") {
            tempArr.push({ libCode: libCode, rentState: rentState,distance :  distance});
          }
        }
        
        else {
          tempArr.push({ libCode: libCode, rentState: rentState,distance:distance });
        }

        if (tempArr.length == 10) {
          // currentIndex = nearbyLibraryCodes.indexOf(libCode);
          currentIndex = nearbyLibraryCodes.findIndex(
            (library) => library.libCode === libCode
          ) +1;
        } else {
          currentIndex += slicedArray.length;
        }
      });
    }


    setLoadIndex(currentIndex);


    if (tempArr.length === 0) {
      setHasMore(false); // 더 이상 데이터가 없을 경우
      setProcessedLibraries((prevLibs) => {
        return [
          ...prevLibs.slice(0, prevLibs.length - 10), // 이전 임시 데이터 제거
        ];
      });
      setIsLoading(false);
      return;
    }
    setrentPossibleLibraries(tempArr);
  }

  const handleLibraryClick = (libCode) => {
    router.push(`/librarydetail/${libCode}`);
  };

  const handleScroll = (e) => {
    if (
      rentPossibleLibraries != undefined &&
      rentPossibleLibraries.length != 0
    ) {
    if (
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1 &&
      hasMore &&
      !isLoading
    ) {
      fetchRentPossibleLibrary();
    }
  }
  };

  function getRandomImage() {
    // 랜덤으로 이미지 선택
    const randomImage =
      localImages[Math.floor(Math.random() * localImages.length)];
    return randomImage;
  }

  return (
    <div className="flex flex-row justify-end w-full pl-[36px] lg:pl-[3.52vw]">
      {processedLibraries.length != 0 && (
        <div
          onScroll={handleScroll}
          className="flex-grow mt-[28px] lg:mt-[2.73vw] rounded-tl-[17px] lg:rounded-tl-[1.66vw] h-[493px] lg:h-[48.14vw] whitespace-nowrap overflow-y-scroll scroll no-scrollbar"
        >
          <div className="flex flex-col w-full">
            {processedLibraries.map((library, index) => (
              <div
                className="relative w-full h-[57px] lg:h-[5.57vw]"
                key={index}
                onClick={() => {
                  if (library != undefined) {
                    handleLibraryClick(library.libCode);
                  }
                }}
              >
                <div className="absolute w-full h-[57px] lg:h-[5.57vw]">
                  <Image
                    src={
                      library != undefined ? library.picture : getRandomImage()
                    }
                    alt="libraryThumbnail"
                    className="object-cover"
                    fill
                    sizes={1}
                  />
                </div>
                <div
                  className={`absolute w-full h-full bg-black ${
                    library == undefined
                      ? "bg-opacity-50"
                      : library.rentState === "대출 하기"
                      ? "bg-opacity-50"
                      : "bg-opacity-70"
                  } border-t-[0.5px] lg:border-t-[0.05vw] border-b-[0.5px] lg:border-b-[0.05vw] border-white border-opacity-30`}
                ></div>
                <div className="absolute flex flex-row h-full  justify-between items-center w-full">

                  <div className="flex flex-row ml-[13px] lg:ml-[1.27vw]">
                    <p className="font-MontserratSemiBold text-[10px] lg:text-[0.98vw] text-primary">
                      {"0" + (index + 1)}
                    </p>
                    <p className="ml-[11px] lg:ml-[1.07vw] w-[200px] lg:w-[19.53vw] font-NotoSansKRBold text-[18px] lg:text-[1.76vw] text-primary">
                      {library == undefined
                        ? "도서관 이름 로딩중"
                        : library.libName}
                    </p>
                  </div>

                  <div className="flex flex-row justify-start gap-[42px] lg:gap-[4.1vw] ml-[126px] lg:ml-[12.3vw]">
                    <div className="flex flex-row w-[142px] lg:w-[13.87vw] items-center gap-[2px] lg:gap-[0.2vw]">
                      <div className="relative w-[14px] lg:w-[1.37vw] h-[14px] lg:h-[1.37vw]">
                        <PlaceIcon className="text-primary" />
                      </div>
                      <p className="font-NotoSansKRBold text-primary text-[10px] lg:text-[0.98vw] w-[126px] lg:w-[12.3vw] truncate">
                        {library == undefined
                          ? "도서관 주소 로딩중"
                          : library.address}
                      </p>
                    </div>
                    <div className="flex flex-row w-[93px] lg:w-[9.08vw] items-center gap-[2px] lg:gap-[0.2vw]">
                      <div className="relative w-[14px] lg:w-[1.37vw] h-[14px] lg:h-[1.37vw]">
                        <CallIcon className="text-primary" />
                      </div>
                      <p className="font-NotoSansKRBold text-primary text-[10px] lg:text-[0.98vw] w-[67px] lg:w-[6.54vw]">
                        {library == undefined ? "010-1234-5678" : library.tel}
                      </p>
                    </div>
                    <div className="flex flex-row w-[53px] lg:w-[5.18vw] items-center gap-[2px] lg:gap-[0.2vw]">
                      <div className="relative w-[14px] lg:w-[1.37vw] h-[14px] lg:h-[1.37vw]">
                        <FootprintIcon className="text-primary" />
                      </div>
                      <p className="font-NotoSansKRBold text-primary text-[10px] lg:text-[0.98vw] w-[37px] lg:w-[3.61vw]">
                        {library == undefined ? "?km" : `${library.distance}km`}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-[86px] lg:w-[8.4vw] h-[27px] lg:h-[2.64vw] border-[1.5px] lg:border-[0.15vw] border-primary rounded-[7px] lg:rounded-[0.68vw] mr-[41px] lg:mr-[4vw]">
                    <p className="font-NotoSansKRSemiBold text-[10px] lg:text-[0.98vw] text-primary">
                      {library == undefined ? "로딩중" : library.rentState}
                    </p>
                  </div>
                </div>
                {library != undefined && library.rentState !== "대출 하기" && (
                  <div className="absolute w-full h-full bg-black opacity-30"></div>
                )}
                {library == undefined && (
                  <div className="absolute w-full h-[57px] lg:h-[5.57vw] backdrop-blur-[6px] bg-[#00000000]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {!isLoading && processedLibraries.length == 0 && (
        <div className="w-full mt-[29px] lg:mt-[2.83vw] flex flex-col items-center">
          <div className="relative mt-[42px] w-[328px] lg:w-[32.03vw] h-[320px] lg:h-[31.25vw]">
            <Image
              src={NoFoundPic}
              alt="noFoundPic"
              fill
              sizes={1}
              className="object-contain"
            ></Image>
          </div>
          <p className="mt-[31px] lg:mt-[3.03vw] text-[17px] lg:text-[1.66vw] text-textColor-secondary">
            주변에 대여가능한 도서관이 존재하지 않습니다
          </p>
        </div>
      )}
    </div>
  );
}

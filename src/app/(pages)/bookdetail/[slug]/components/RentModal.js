"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import TitleTag from "@/app/components/TitleTag";
import closeSVG from "@svg/close.svg";
import Image from "next/image";
import searchSVG from "@svg/search.svg";
import placePrimarySVG from "@svg/place_primary.svg";
import phonePrimarySVG from "@svg/phone_primary.svg";
import searchNearByLibraryHandler from "@handler/searchNearByLibraryHandler";
import isRentPossibleHandler from "@handler/isRentPossibleHandler";
import reverseGeoCodeHandler from "@handler/reverseGeoCodeHandler";
import getLibraryPictureHandler from "@handler/getLibraryPictureHandler";
import getLibraryInfoHandler from "@handler/getLibraryInfoHandler";
import placeImg from "@png/place.png";
import menuImg from "@png/menu.png";
import findImg from "@png/find.png";
import { useRouter } from 'next/navigation';

export default function RentModal({ isOpen, requestClose, isbn13 }) {
  const router = useRouter();
  // 모달 상태 관리
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 위치 상태 관리
  const [location, setLocation] = useState({
    latitude: 37.5666,
    longitude: 126.9782
  });
  const [error, setError] = useState(null);
  const [nearbyLibraryCodes, setNearbyLibraryCodes] = useState([]);
  const [libraryInfos, setLibraryInfos] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [roadaddr,setRoadaddr] = useState("");

  // 위치 정보 가져오기
  useEffect(() => {
    if (isOpen) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (err) => {
            setError(err.message);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    }
  }, [isOpen]);

  //도로명 && 주변 도서관 검색
  useEffect(() => {
    if (isOpen) {
      async function fetchData() {
        try {
          // 두 비동기 작업을 병렬로 실행
          const [roadAddrResult, librariesResult] = await Promise.all([
            reverseGeoCodeHandler(location),
            searchNearByLibraryHandler(location)
          ]);

          // 응답 처리
          setRoadaddr(roadAddrResult);
          setNearbyLibraryCodes(librariesResult);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      fetchData();
    }
  }, [location]);

  //대출 가능 검증 && 도서관 정보 가져오기
  useEffect(() => {
    async function fetchLibraryInfo() {

      const promises = nearbyLibraryCodes.map(async (library) => {
        const libraryInfo = await getLibraryInfoHandler(library.libCode);
        console.log(library.libCode);
        const libraryPicture = await getLibraryPictureHandler(library.libCode);
        const rentPossible = await isRentPossibleHandler(library.libCode, isbn13);
      
        return { libraryInfo, libraryPicture, rentPossible };
      });
      
      const results = await Promise.all(promises);

      const libraries = [];
      
      results.forEach(result => {
        const { libraryInfo, libraryPicture, rentPossible } = result;

        const library = libraryInfo.libInfo;
        library.picture = libraryPicture;
        library.rentState = "미 소장"

        if (rentPossible.response.result.hasBook == "N") {
          library.rentState = "미 소장";
        } else if (rentPossible.response.result.loanAvailable == "Y") {
          library.rentState = "대출 하기";
        } else if (rentPossible.response.result.loanAvailable == "N") {
          library.rentState = "대출 불가";
        }

        libraries.push(library);
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



      //   const isRentPossibleResult = await isRentPossibleHandler(nearbyLibraryCodes, isbn13);

      //   isRentPossibleResult.map((result,index)=>{

      //   const library = nearbyLibraryCodes[index];

      //   library.rentState = "미 소장";

      //   if (result.response.result.hasBook == "N") {
      //     library.rentState = "미 소장";
      //   } else if (result.response.result.loanAvailable == "Y") {
      //     library.rentState = "대출 하기";
      //   } else if (result.response.result.loanAvailable == "N") {
      //     library.rentState = "대출 불가";
      //   }
      //   })

      // const sortedLibraries = nearbyLibraryCodes.sort((a, b) => {
      //   const priority = {
      //     "대출 하기": 1,
      //     "대출 불가": 2,
      //     "미 소장": 3,
      //   };

      //   return priority[a.rentState] - priority[b.rentState];
      // }
      // );

      // setPossibleLibraries(sortedLibraries);
      setIsFetching(false);
    }

    if (isOpen) {
      fetchLibraryInfo();
    }
  }, [nearbyLibraryCodes]);

  // 모달이 닫히면 상태 초기화
  useEffect(() => {
    if (!isOpen) {
      setIsFetching(true);
    }
  }, [isOpen]);

  const handleLibraryClick = (libCode) =>{
    router.push(`/librarydetail/${libCode}`);
  }

  // 모달 렌더링
  return ReactDOM.createPortal(
    <>
      {!isFetching && isOpen && (
        <div className="fixed flex flex-col justify-end inset-0 w-full h-screen bg-black bg-opacity-80">
          <div className="relative flex flex-col items-center w-full h-[86%] bg-background rounded-t-[35px]">
            <div
              className="absolute right-0 mt-[33px] mr-[41px] w-[17px] h-[17px]"
              onClick={requestClose}
            >
              <Image src={closeSVG} alt="closeButton" fill sizes={1}></Image>
            </div>
            <div className="w-[166px] h-[59px] mt-[41.19px]">
              <TitleTag
                height={59}
                title="도서 대출"
                font="KopubWorldBold"
              ></TitleTag>
            </div>
            <div className="flex flex-row justify-between w-full h-[45px] pl-[50px] pr-[58px] -mt-[7.14]">
              <div className="w-min h-min">
                <div className="flex flex-row gap-[37px] font-KopubWorldBold text-textColor-primary text-[23px] whitespace-nowrap">
                  <p>주변 도서관</p>
                  <p>전체 도서관</p>
                  <p>택배 대출</p>
                </div>
                <div className="relative mt-[1px] w-[408px] h-[3px]">
                  <div className="absolute w-full h-full bg-black opacity-10"></div>
                  <div className="absolute w-[102px] h-full bg-primary"></div>
                </div>
              </div>

              {/* <div className="w-[401px] h-full flex flex-row items-center justify-start gap-[10px] pl-[10px] bg-searchBar rounded-[40px]">
                <div className="w-[30px] h-[30px]">
                  <Image src={searchSVG} alt="searchIcon"></Image>
                </div>
                <input
                  type="text"
                  placeholder={"서울 도서관"}
                  className="flex-grow h-full font-NotoSansKRBold text-[15px] text-black  placeholder:text-[15px] placeholder:text-black placeholder:font-NotoSansKRBold placeholder:text-opacity-50  bg-transparent focus:outline-none focus:ring-0"
                ></input>
              </div> */}

              <div className = "flex flex-row gap-[8px]">
                <div className = "flex justify-center items-center py-[8px] px-[9.6px] border-[1.5px] border-textColor-primary rounded-full">
                  <div className = "flex flex-row">
                    <div className = "relative w-[20px] h-[20px]">
                      <Image src={placeImg} alt = "placeIcon" fill sizes={1}></Image>
                    </div>
                    <p className ="font-NotoSansKRMedium text-textColor-primary text-[15px] ml-[1px]">{roadaddr}</p>
                  </div>
                </div>
                <div className = "flex justify-center items-center py-[8px] px-[9.6px] border-[1.5px] border-textColor-primary rounded-full">
                  <div className = "flex flex-row">
                    <div className = "relative w-[20px] h-[20px]">
                      <Image src={findImg} alt = "findIcon" fill sizes={1}></Image>
                    </div>
                    <p className ="font-NotoSansKRMedium text-textColor-primary text-[15px] ml-[1px]">2km</p>
                  </div>
                </div>
                <div className = "flex justify-center items-center py-[8px] px-[9.6px] border-[1.5px] border-textColor-primary rounded-full">
                  <div className = "flex flex-row">
                    <div className = "relative w-[20px] h-[20px]">
                      <Image src={menuImg} alt = "menuIcon"></Image>
                    </div>
                    <p className ="font-NotoSansKRMedium text-textColor-primary text-[15px] ml-[1px]">10개</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex flex-row justify-end w-full pl-[50px]">
              <div className="flex flex-col flex-grow mt-[33.56px] rounded-l-[23.69px] overflow-clip whitespace-nowrap">
                {libraryInfos.map((library, index) => (
                  <div className="relative w-full h-[80px]" key={index}>
                    <div className="absolute w-full h-[80px]">
                      <Image
                        src={library.picture}
                        alt = "libraryThumbnail"
                        className = "object-cover"
                        fill
                        sizes={1}
                      ></Image>
                    </div>
                    <div
                      className={`absolute w-full h-full bg-black ${
                        library.rentState == "대출 하기"
                          ? "bg-opacity-50"
                          : "bg-opacity-70"
                      } border-t-[1px] border-b-[1px] border-white border-opacity-30`}
                    ></div>
                    <div className="absolute flex flex-row h-full  justify-between items-center  w-full">
                      <div className = "flex flex-row ml-[18.22px]">
                      <p className="font-MontserratSemiBold text-[14px] text-primary">
                        {"0" + (index + 1)}
                      </p>
                      <p className="ml-[15.53px] w-[280px] font-NotoSansKRBold text-[24px] text-primary"
                      onClick = {()=>handleLibraryClick(library.libCode)}>
                        {library.libName}
                      </p>
                      </div>
                      <div className="flex flex-row justify-start gap-[60px]">
                        <div className="flex flex-row w-[300px] items-center gap-[2.83px]">
                          <div className="relative w-[19px] h-[19px]">
                            <Image src={placePrimarySVG} alt = "placeIcon" fill sizes={1}></Image>
                          </div>
                          <p className="font-NotoSansKRBold text-primary text-[14px]">
                            {library.address}
                          </p>
                        </div>
                        <div className="flex flex-row w-[130px]items-center gap-[2.83px]">
                        <div className="relative w-[19px] h-[19px]">
                          <Image src={phonePrimarySVG} alt = "callIcon" fill sizes={1}></Image>
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
                    {library.rentState != "대출 하기" && (
                      <div className="absolute w-full h-full bg-black opacity-30"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("rentModal")
  );
}

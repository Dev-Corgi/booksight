"use client";
import React, { useEffect, useState } from "react";
import BackArrowIcon from "@svg/BackArrowIcon.svg"
import Image from "next/image";
import PlaceIcon from "@svg/PlaceIcon.svg";
import CallIcon from "@svg/CallIcon.svg";
import ExportIcon from "@svg/ExportIcon.svg";
import ClockIcon from "@svg/ClockIcon.svg";
import ConnectedIcon from "@svg/ConnectedIcon.svg";
import getLibraryInfoHandler from "@handler/getLibraryInfoHandler";
import getLibraryPictureHandler from "@handler/getLibraryPictureHandler";
import getStaticMapHandler from "@handler/getStaticMapHandler";
import Link from "next/link";
import connectedImg from "@png/connected.png";
export default function LibraryDetailPage({ params }) {
  const libCode = params.slug;
  const [libraryInfo, setLibraryInfo] = useState(null);
  const [staticMapImg, setstaticMapImg] = useState("");
  const [isFetching, setisFetching] = useState(true);

  useEffect(() => {
    async function fetchGetLibraryInfo() {
      const [libraryInfoResult, libraryPictureResult] = await Promise.all([
        getLibraryInfoHandler(libCode),
        getLibraryPictureHandler(libCode),
      ]);

      const library = libraryInfoResult;
      library.picture = libraryPictureResult;

      setLibraryInfo(library);
    }

    fetchGetLibraryInfo();
  }, []);

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

  function stockHandler() {
    const bookCount = libraryInfo.libInfo.BookCount;

    if (bookCount >= 1000) {
      return (bookCount / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return bookCount;
  }

  function weeklyRentHandler() {
    let loanCount = 0;
    for (const data of libraryInfo.loanByDayofWeek) {
      loanCount += data.result.loan;
    }

    if (loanCount >= 1000) {
      return (loanCount / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }

    return loanCount;
  }

  function dailyRentHandler() {
    let loanCount = 0;
    for (const data of libraryInfo.loanByhours) {
      loanCount += data.result.loan;
    }

    if (loanCount >= 1000) {
      return (loanCount / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }

    return loanCount;
  }

  return (
    <>
      {!isFetching && (
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-grow flex-col items-center">
            <div className="flex flex-col items-start w-[36.18vw] st:w-[521px] h-full text-black">

              {/* Header */}
              <div className="flex flex-row justify-between items-center w-full mt-[40px]">
                <p className="font-NotoSansKRBold text-[30px]">BOOKS</p>
                <div className="flex flex-row items-center gap-[6.5px]">
                  <div className="relative w-[18px] h-[16px]">
                    <BackArrowIcon></BackArrowIcon>
                  </div>
                  <p className="font-NotoSansKRSemiBold text-[16px]">
                    돌아가기
                  </p>
                </div>
              </div>

              {/* Title */}
              <p className="font-NotoSansKRBold text-[73.73px] w-[497px] h-[154px] leading-[76.9px] mt-[45px] text-pretty">
                {libraryInfo.libInfo.libName}
              </p>

              {/* Infogram */}
              <div className="flex flex-row gap-[2.37px] mt-[21px]">
                <div className="relative w-[23px] h-[23px]">
                  <ClockIcon></ClockIcon>
                </div>
                <p className="font-NotoSansKRMedium text-[15.8px]">
                  {libraryInfo.libInfo.operatingTime}
                </p>
              </div>
              <div className="flex flex-row gap-[18px] mt-[6px]">
                <div className="flex flex-row gap-[2.37px]">
                  <div className="relative w-[23px] h-[23px]">
                    <PlaceIcon></PlaceIcon>
                  </div>
                  <p className="font-NotoSansKRMedium text-[15.8px]">
                    {libraryInfo.libInfo.address}
                  </p>
                </div>

                <div className="flex flex-row gap-[2.37px]">
                  <div className="relative w-[23px] h-[23px]">
                    <CallIcon></CallIcon>
                  </div>
                  <p className="font-NotoSansKRMedium text-[15.8px]">
                    {libraryInfo.libInfo.tel}
                  </p>
                </div>

                <div className="flex flex-row gap-[2.37px]">
                  <div className="relative w-[23px] h-[23px]">
                    <ExportIcon></ExportIcon>
                  </div>
                  <Link
                    className="font-NotoSansKRMedium text-[15.8px]"
                    href={libraryInfo.libInfo.homepage}
                  >
                    홈페이지
                  </Link>
                </div>
              </div>

              {/* discription */}
              <div className="flex flex-row h-[100px] mt-[40px]">
                <div className="w-[6px] h-full bg-black"></div>

                <p className="font-NotoSansKRMedium text-[13.69px] ml-[13.49px] w-[278.05px] text-pretty">{`시민과 함께 성장하고 소통하는 열린공간!\n${libraryInfo.libInfo.libName}은 지식정보의 보고로서 권역별 주제 전문도서관, 생활 속의 시민 밀착형 작은도서관 사업으로 다양한 지식정보서비스를 제공하고 있습니다.`}</p>

                <div className="flex flex-row justify-center w-[168.52px] h-[46.34px] ml-[47.18px] mt-[23.09px] rounded-full bg-black gap-[3px]">
                  <div className="relative w-[22px] h-[22px] mt-[11px]">
                    <ConnectedIcon className = " text-white"></ConnectedIcon>
                  </div>
                  <p
                    className="font-NotoSansKRMedium text-[15px] text-white mt-[10.9px]"
                    href={libraryInfo.libInfo.homepage}
                  >
                    알아보기
                  </p>
                </div>
              </div>

              {/* stats */}
              <div className="flex flex-row gap-[52.66px] mt-[36.76px]">
                <div className="flex flex-col gap-[5.5px]">
                  <p className="font-MontserratMedium text-[34.76px]">
                    {stockHandler() + "+"}
                  </p>
                  <p className="font-NotoSansKRMedium text-[16px]">
                    도서관 소장 자료
                  </p>
                </div>

                <div className="flex flex-col gap-[5.5px]">
                  <p className="font-MontserratMedium text-[34.76px]">
                    {weeklyRentHandler() + "+"}
                  </p>
                  <p className="font-NotoSansKRMedium text-[16px]">
                    도서관 주간 대출량
                  </p>
                </div>

                <div className="flex flex-col gap-[5.5px]">
                  <p className="font-MontserratMedium text-[34.76px]">
                    {dailyRentHandler() + "+"}
                  </p>
                  <p className="font-NotoSansKRMedium text-[16px]">
                    도서관 일간 대출량
                  </p>
                </div>
              </div>

              {/* map */}
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
            </div>
          </div>

          {/* Image */}
          <div className="w-[51.74vw] h-screen py-[16px] mr-[16px]">
            <Image
              src={libraryInfo.picture}
              alt="libraryPic"
              width={1200}
              height={1200}
              className="w-full h-full object-cover rounded-[40px]"
            ></Image>
          </div>
        </div>
      )}
    </>
  );
}

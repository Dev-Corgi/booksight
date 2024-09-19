import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMapId,
  setMapName,
  setAddressName,
  setPrevMapId,
  setResultNum
} from "@redux/mapSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CallIcon from "@svg/CallIcon.svg";
import PlaceIcon from "@svg/PlaceIcon.svg";
import searchRegionLibraryHandler from "@handler/searchRegionLibraryHandler";
import getLibraryPictureHandler from "root/Handler/getLibraryPictureHandler";
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

export default function LibList() {
  const router = useRouter();
  const [libs, setlibs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  const { mapId } = useSelector((state) => state.map);
  const dispatch = useDispatch();

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
  setlibs([]);
  setHasMore(true);
  setPageNumber(1);
  }, [mapId])

  useEffect(() => {
    async function fetchSearchRegionLibrary() {
      setIsLoading(true); // 로딩 시작
      dispatch(setResultNum(undefined))

      // 로딩 중에 임시 데이터를 넣음
      setlibs((prevLibs) => [...prevLibs, ...Array.from({ length: 10 }, () => undefined)]);
      let thislibs;
      if (mapId == 10) {
        const result = await searchRegionLibraryHandler(null, null, pageNumber);
        thislibs = result.libs;
        dispatch(setResultNum(result.numFound))
      } else if (mapId.toString().length == 2) {
        const result = await searchRegionLibraryHandler(mapId, null, pageNumber);
        thislibs = result.libs;
        dispatch(setResultNum(result.numFound))
      } else if (mapId.toString().length == 5) {
        const result = await searchRegionLibraryHandler(null, mapId, pageNumber);
        thislibs = result.libs;
        dispatch(setResultNum(result.numFound))
      }
      if (thislibs.length === 0) {
        setHasMore(false); // 더 이상 데이터가 없을 경우
      }

      // 라이브러리 이미지 가져오기
      await Promise.all(
        thislibs.map(async (library) => {
          library.lib.picture = await getLibraryPictureHandler(
            library.lib.libCode
          );
        })
      );

      // 임시 데이터를 실제 데이터로 대체
      setlibs((prevLibs) => {
        return [
        ...prevLibs.slice(0, prevLibs.length - 10), // 이전 임시 데이터 제거
        ...thislibs,
      ]});

      setIsLoading(false); // 로딩 끝
    }
   if(!isLoading){
    fetchSearchRegionLibrary();
   }
  }, [mapId,pageNumber]);

  // 스크롤이 끝에 도달했을 때 페이지를 증가시킴
  const handleScroll = (e) => {
    if (
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1 &&
      hasMore &&
      !isLoading
    ) {
      setPageNumber((prevPage) => prevPage + 1);
    }
  };

  function getRandomImage(){
    // 랜덤으로 이미지 선택
    const randomImage = localImages[Math.floor(Math.random() * localImages.length)];
    return randomImage;
  }

  const handleLibraryClick = (libCode) => {
    router.push(`/librarydetail/${libCode}`);
  };

  return (
    <div onScroll={handleScroll} className = "flex-grow mt-[28px] lg:mt-[2.73vw] rounded-tl-[15px] lg:rouned-tl-[1.46vw] h-[494px] lg:h-[48.24vw] overflow-y-scroll scroll no-scrollbar">
      <div  className="flex flex-col w-full">
        {libs.map((library, index) => (
          <div className="relative w-full h-[57px] lg:h-[5.57vw]" key={index} onClick={() => {if(library != undefined) {handleLibraryClick(library.lib.libCode)}}}>
            <div className="absolute w-full h-full">
              <Image
                src={library != undefined ? library.lib.picture : getRandomImage()}
                alt="libraryImg"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute w-full h-full bg-black opacity-60 border-t-[0.5px] lg:border-t-[0.05vw] border-b-[0.5px] lg:boreder-b-[0.05vw] border-white border-opacity-30"></div>
            <div className="absolute flex flex-row w-full h-full">
              <p className="ml-[13px] lg:ml-[1.27vw] mt-[16px] lg:mt-[1.56vw] font-MontserratSemiBold text-[10px] lg:text-[0.98vw] text-primary">
                {"0" + (index + 1)}
              </p>
              <p className="ml-[11px] lg:ml-[1.07vw] mt-[14px] lg:mt-[1.37vw] w-[200px] lg:w-[19.53vw] font-NotoSansKRBold text-[17px] lg:text-[1.66vw] text-primary truncate">
                {library != undefined ? library.lib.libName : "도서관 이름 로딩중"}
              </p>
              <div className="flex flex-row justify-start items-start flex-grow gap-[40px] lg:gap-[3.91vw] mt-[21px] lg:mt-[2.05vw] ml-[50px] lg:ml-[4.88vw]">
                <div className="flex flex-row items-center gap-[2px] lg:gap-[0.2vw]">
                  <div className="relative w-[14px] lg:w-[1.37vw] h-[14px] lg:h-[1.37vw]">
                    <PlaceIcon className="text-primary"></PlaceIcon>
                  </div>
                  <p className="font-NotoSansKRBold text-primary text-[10px] lg:text-[0.98vw] w-[122px] lg:w-[11.91vw] truncate">
                    {library != undefined ? library.lib.address : "도서관 주소 로딩중"}
                  </p>
                </div>

                <div className="flex flex-row items-center gap-[2px] lg:gap-[0.2vw]">
                  <div className="relative w-[14px] lg:w-[1.37vw] h-[14px] lg:h-[1.37vw]">
                    <CallIcon className="text-primary"></CallIcon>
                  </div>
                  <p className="font-NotoSansKRBold text-primary text-[10px] lg:text-[0.98vw]">
                    {library != undefined ? library.lib.tel : "010-1234-5678"}
                  </p>
                </div>
                
              </div>
            </div>
            {library == undefined && (
              <div className="absolute w-full h-full backdrop-blur-[6px] bg-[#00000000]"></div>
            )}
          </div>
        ))}
      </div>
      </div>
  );
}
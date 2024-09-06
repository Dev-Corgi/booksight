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
     console.log(thislibs)
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
    <div onScroll={handleScroll} className = "flex-grow mt-[33.56px] rounded-tl-[23.69px] h-[700px] overflow-y-scroll scroll no-scrollbar">
      {/* {console.log(libs)} */}
      <div  className="flex flex-col w-full">
        {libs.map((library, index) => (
          <div className="relative w-full h-[80px]" key={index} onClick={() => {if(library != undefined) {handleLibraryClick(library.lib.libCode)}}}>
            <div className="absolute w-full h-[80px]">
              <Image
                src={library != undefined ? library.lib.picture : getRandomImage()}
                alt="libraryImg"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute w-full h-full bg-black opacity-60 border-t-[1px] border-b-[1px] border-white border-opacity-30"></div>
            <div className="absolute flex flex-row w-full">
              <p className="ml-[18.22px] mt-[22.42px] font-MontserratSemiBold text-[14px] text-primary">
                {"0" + (index + 1)}
              </p>
              <p className="ml-[15.53px] mt-[19.55px] w-[280px] font-NotoSansKRBold text-[24px] text-primary truncate">
                {library != undefined ? library.lib.libName : "도서관 이름 로딩중"}
              </p>
              <div className="flex flex-row justify-start flex-grow gap-[60px] mt-[30px] ml-[132.08px]">
                <div className="flex flex-row items-center gap-[2.83px]">
                  <div className="relative w-[19px] h-[19px]">
                    <PlaceIcon className="text-primary"></PlaceIcon>
                  </div>
                  <p className="font-NotoSansKRBold text-primary text-[14px] w-[171px] truncate">
                    {library != undefined ? library.lib.address : "도서관 주소 로딩중"}
                  </p>
                </div>

                <div className="flex flex-row items-center gap-[2.83px]">
                  <div className="relative w-[19px] h-[19px]">
                    <CallIcon className="text-primary"></CallIcon>
                  </div>
                  <p className="font-NotoSansKRBold text-primary text-[14px]">
                    {library != undefined ? library.lib.tel : "010-1234-5678"}
                  </p>
                </div>
              </div>
            </div>
            {library == undefined && (
              <div className="absolute w-full h-[80px] backdrop-blur-[6px] bg-[#00000000]"></div>
            )}
          </div>
        ))}
      </div>
      </div>
  );
}
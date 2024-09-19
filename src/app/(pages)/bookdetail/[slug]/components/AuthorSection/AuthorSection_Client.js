"use client";
import React, { useEffect, useState } from "react";
import SavedIcon from "@svg/SavedIcon.svg";
import ExportIcon from "@svg/ExportIcon.svg";
import ReviewStars from "@/app/components/ReviewStars";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import Shimmer from "@/app/components/Simmer";
import aladinAuthorSearchHandler from "@handler/aladinAuthorBooksSearchHandler";
import getRandomProfileImage from "root/utils/getRandomProfileImage";
import { ClientRouterWrapper } from "root/utils/useClientRouter";

export default function AuthorSection_Client({ book }) {
  // const router = useRouter();
  const [authorData, setauthorData] = useState({
    authorName: undefined,
    authorCode: undefined,
    authorScore: 0,
    authorBookCount: undefined,
    authorPic: undefined,
    authorDisc:
      "스웨덴의 한 블로거에서 전 세계를 사로잡은 초대형 작가가 된 프레드릭 배크만. 데뷔작이자 첫 장편소설인 『오베라는 남자』는 출간되자마자 스웨덴 인구의 열 명 중 한 명이 소장하는 책이 되었으며, 46개국에 판권이 수출되었다. 미국에서는 77주간 뉴욕타임스 베스트셀러 목록에 올랐고, 아시아, 유럽, 아프리카의 여러 나라에서 베스트셀러로 등극해 그 이름을 알렸다. 뒤이어 출간한 『할머니가 미안하다고 전해달랬어요』 『브릿마리 여기 있다』 등이 역시 세계인에게 사랑받는 베스트셀러가 되며 초대형 작가로 자리매김했다. 이후 『베어타운』과 후속작 『우리와 당신들』로 돌아온 배크만은 이 소설로 “『오베라는 남자』를 뛰어넘었다” “이 시대의 디킨스다”라는 언론의 열광적인 찬사와 함께 아마존 및 굿리즈 올해의 소설에 오르며 또 한번 커다란 도약을 이루어냈다. 5년 만에 국내에 소개되는 신작 『위너』는 ‘베어타운 3부작’의 정점을 찍는 소설로 현지 및 해외 출간과 동시에 아마존, 굿리즈, 애플북스 베스트셀러에 오르며 ‘문학계의 승리자’라는 평을 받았다. 이 외의 작품으로 『하루하루가 이별의 날』 『일생일대의 거래』 등이 있다.",
  });
  const [isLoading, setisLoading] = useState(true);

  // function handleAuthorPageClick() {
  //   const encodedAuthorName = encodeURIComponent(authorData.authorName);
  //   router.push(
  //     `/authordetail/${authorData.authorCode}?authorName=${encodedAuthorName}`
  //   );
  // }

  const calculateAverageReviewRank = (books) => {
    // ratingCount가 0이 아닌 객체들만 필터링
    const filteredArray = books.filter((item) => item.customerReviewRank != 0);

    // 필터링된 배열이 비어있는 경우 0 반환
    if (filteredArray.length === 0) return 0;

    // 평균을 계산
    const total = filteredArray.reduce(
      (sum, item) => sum + item.customerReviewRank,
      0
    );
    const average = total / filteredArray.length;

    // 평균을 소수점 한 자리까지 반올림
    return parseFloat(average.toFixed(1));
  };

  useEffect(() => {
    // book이 Promise를 반환하므로, 비동기 함수를 useEffect 내부에서 호출합니다.
    const fetchData = async () => {
      try {
        const result = await book;
        const authorName = result.subInfo.authors[0].authorName;
        const authorCode = result.subInfo.authors[0].authorId;
        // const authorBookList = await aladinAuthorSearchHandler(
        //   authorName,
        //   authorCode
        // );
        // const authorScore = calculateAverageReviewRank(authorBookList);
        // const authorBookCount = authorBookList.length;
        const authorPic =
          result.subInfo.authors[0].authorPhoto != ""
            ? result.subInfo.authors[0].authorPhoto
            : getRandomProfileImage();
        const authorDisc = result.subInfo.authors[0].authorInfo;

        setauthorData({
          authorName: authorName,
          authorCode: authorCode,
          // authorScore: authorScore,
          // authorBookCount: authorBookCount,
          authorPic: authorPic,
          authorDisc: authorDisc,
        });

        setisLoading(false);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchData();
  }, [book]);

  return (
    <Shimmer isLoading={isLoading} className={"w-full h-full"}>
      <div className = "flex w-[832px] lg:w-[81.25vw]  rounded-[10px] lg:rounded-[0.98vw] overflow-hidden bg-discriptionPanel">
      <div className="relative flex flex-row mx-[25px] lg:mx-[2.44vw] mt-[27px] lg:mt-[2.64vw] mb-[17px] lg:mb-[1.66vw] gap-[13px] lg:gap-[1.27vw]">

        <div className="absolute right-0 top-0 flex flex-row justify-end gap-[11px] lg:gap-[1.07vw]">

          <div className="flex justify-center items-center w-[77px] lg:w-[7.52vw] h-[27px] lg:h-[2.64vw] bg-primary rounded-[7px] lg:rounded-[0.68vw]">
            <div className="flex flex-row items-center gap-[3px] lg:gap-[0.29vw] h-[22px] lg:h-[2.15vw] text-white">
              <div className="relative w-[13px] lg:w-[1.27vw] h-[13px] lg:h-[1.27vw]">
                <SavedIcon></SavedIcon>
              </div>
              <p className="font-NotoSansKRSemiBold text-[9.5px] lg:text-[0.93vw]">구독하기</p>
            </div>
          </div>

          <ClientRouterWrapper
            url={
              !isLoading
                ? `/authordetail/${authorData.authorCode}?authorName=${authorData.authorName}`
                : null
            }
          >
          <div className="flex justify-center items-center w-[77px] lg:w-[7.52vw] h-[27px] lg:h-[2.64vw] bg-black rounded-[7px] lg:rounded-[0.68vw]">
            <div className="flex flex-row items-center gap-[3px] lg:gap-[0.29vw] h-[22px] lg:h-[2.15vw] text-white">
              <div className="relative w-[13px] lg:w-[1.27vw] h-[13px] lg:h-[1.27vw]">
                <ExportIcon></ExportIcon>
              </div>
              <p className="font-NotoSansKRSemiBold text-[9.5px] lg:text-[0.93vw]">상세 페이지</p>
            </div>
          </div>
          </ClientRouterWrapper>
        </div>

        <div className="relative w-[65px] lg:w-[6.35vw] h-[65px] lg:h-[6.35vw] rounded-full overflow-hidden flex-shrink-0">
          {!isLoading && (
            <Image
              src={authorData.authorPic}
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="flex flex-col w-full">
          <p className="font-NotoSansKRSemiBold text-[17px] lg:text-[1.66vw] text-textColor-primary">
            {!isLoading ? authorData.authorName : "작가명 로딩중"}
          </p>

          <p className="font-NotoSansKRMedium text-[11px] lg:text-[1.07vw] text-textColor-primary mt-[13px] lg:mt-[1.27vw]">
            {authorData.authorDisc}
          </p>
        </div>
      </div>
      </div>
    </Shimmer>
  );
}

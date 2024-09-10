"use client";
import React, { useEffect, useState } from "react";
import TitleTag from "@/app/components/TitleTag";
import authorCrawlerHandler from "@handler/authorCrawlerHander";
import Shimmer from "@/app/components/Simmer";
export default function DiscriptionSection({ authorCode }) {
  const defaultDisc =
    "스웨덴의 한 블로거에서 전 세계를 사로잡은 초대형 작가가 된 프레드릭 배크만. 데뷔작이자 첫 장편소설인 『오베라는 남자』는 출간되자마자 스웨덴 인구의 열 명 중 한 명이 소장하는 책이 되었으며, 46개국에 판권이 수출되었다. 미국에서는 77주간 뉴욕타임스 베스트셀러 목록에 올랐고, 아시아, 유럽, 아프리카의 여러 나라에서 베스트셀러로 등극해 그 이름을 알렸다. 뒤이어 출간한 『할머니가 미안하다고 전해달랬어요』 『브릿마리 여기 있다』 등이 역시 세계인에게 사랑받는 베스트셀러가 되며 초대형 작가로 자리매김했다. 이후 『베어타운』과 후속작 『우리와 당신들』로 돌아온 배크만은 이 소설로 “『오베라는 남자』를 뛰어넘었다” “이 시대의 디킨스다”라는 언론의 열광적인 찬사와 함께 아마존 및 굿리즈 올해의 소설에 오르며 또 한번 커다란 도약을 이루어냈다. 5년 만에 국내에 소개되는 신작 『위너』는 ‘베어타운 3부작’의 정점을 찍는 소설로 현지 및 해외 출간과 동시에 아마존, 굿리즈, 애플북스 베스트셀러에 오르며 ‘문학계의 승리자’라는 평을 받았다. 이 외의 작품으로 『하루하루가 이별의 날』 『일생일대의 거래』 등이 있다.";

  const [authorDisc, setAuthorDisc] = useState(undefined);
  useEffect(() => {
    if (authorCode != undefined) {
      async function fetchAuthorCrawl() {
        setAuthorDisc(
          await authorCrawlerHandler(
            `https://www.aladin.co.kr/author/wauthor_overview.aspx?AuthorSearch=@${authorCode}&amp;partner=openAPI`
          )
        );
      }

      fetchAuthorCrawl();
    }
  }, [authorCode]);

  return (
    <div className="flex flex-col w-full">
      <TitleTag title={"저자 소개"}></TitleTag>
      <div className = "flex ml-[28px]">
      <Shimmer isLoading={authorDisc == undefined}>
        <div className=" flex flex-col justify-start items-center w-full h-[218px] mt-[16px] rounded-[15px] bg-background">
          <div className = "flex flex-col justify-start items-center mx-[18px] my-[17px] overflow-y-scroll scroll no-scrollbar">
          <p className="font-NotoSansKRRegular text-[16px] -tracking-[2px] whitespace-pre-wrap">
            {authorDisc != undefined ? authorDisc : defaultDisc}
          </p>
          </div>
        </div>
      </Shimmer>
      </div>
    </div>
  );
}

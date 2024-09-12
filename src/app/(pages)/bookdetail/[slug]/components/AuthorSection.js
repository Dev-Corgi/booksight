"use client";
import React,{useEffect,useState} from "react";
import SavedIcon from "@svg/SavedIcon.svg";
import ExportIcon from "@svg/ExportIcon.svg";
import ReviewStars from "@/app/components/ReviewStars";
import TitleTag from "@/app/components/TitleTag";
import shadow2Img from "@png/shadow2.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Shimmer from "@/app/components/Simmer";
import aladinAuthorSearchHandler from "@handler/aladinAuthorBooksSearchHandler";
import getRandomProfileImage from "root/utils/getRandomProfileImage";

export default function AuthorSection({ book,setauthorList}) {
  const router = useRouter();
  const[authorData,setauthorData] = useState({
    authorName : undefined,
    authorCode : undefined,
    authorScore : 0,
    authorBookCount : undefined,
    authorPic : undefined,
    authorDisc : "스웨덴의 한 블로거에서 전 세계를 사로잡은 초대형 작가가 된 프레드릭 배크만. 데뷔작이자 첫 장편소설인 『오베라는 남자』는 출간되자마자 스웨덴 인구의 열 명 중 한 명이 소장하는 책이 되었으며, 46개국에 판권이 수출되었다. 미국에서는 77주간 뉴욕타임스 베스트셀러 목록에 올랐고, 아시아, 유럽, 아프리카의 여러 나라에서 베스트셀러로 등극해 그 이름을 알렸다. 뒤이어 출간한 『할머니가 미안하다고 전해달랬어요』 『브릿마리 여기 있다』 등이 역시 세계인에게 사랑받는 베스트셀러가 되며 초대형 작가로 자리매김했다. 이후 『베어타운』과 후속작 『우리와 당신들』로 돌아온 배크만은 이 소설로 “『오베라는 남자』를 뛰어넘었다” “이 시대의 디킨스다”라는 언론의 열광적인 찬사와 함께 아마존 및 굿리즈 올해의 소설에 오르며 또 한번 커다란 도약을 이루어냈다. 5년 만에 국내에 소개되는 신작 『위너』는 ‘베어타운 3부작’의 정점을 찍는 소설로 현지 및 해외 출간과 동시에 아마존, 굿리즈, 애플북스 베스트셀러에 오르며 ‘문학계의 승리자’라는 평을 받았다. 이 외의 작품으로 『하루하루가 이별의 날』 『일생일대의 거래』 등이 있다."
  })
  const [isLoading, setisLoading] = useState(true)



  function handleAuthorPageClick() {
    const encodedAuthorName = encodeURIComponent(authorData.authorName);
    router.push(`/authordetail/${authorData.authorCode}?authorName=${encodedAuthorName}`);
  }

  useEffect(() => {

    if(book !== undefined){

    async function fetchAuthorData() {
      const authorName = book.subInfo.authors[0].authorName;
      const authorCode = book.subInfo.authors[0].authorId;
      const authorBookList = await aladinAuthorSearchHandler(authorName,authorCode);
      const authorScore = calculateAverageReviewRank(authorBookList);
      const authorBookCount = authorBookList.length;
      const authorPic = book.subInfo.authors[0].authorPhoto != "" ? book.subInfo.authors[0].authorPhoto: getRandomProfileImage();
      const authorDisc = book.subInfo.authors[0].authorInfo

     setauthorList(authorBookList);

      setauthorData({
        authorName : authorName,
        authorCode : authorCode,
        authorScore : authorScore,
        authorBookCount : authorBookCount,
        authorPic : authorPic,
        authorDisc : authorDisc
      })
      setisLoading(false)
    }

    fetchAuthorData();
  }
  }, [book])

  const calculateAverageReviewRank = (books) => {
    // ratingCount가 0이 아닌 객체들만 필터링
    const filteredArray = books.filter(item => item.customerReviewRank != 0);
  
    // 필터링된 배열이 비어있는 경우 0 반환
    if (filteredArray.length === 0) return 0;
  
    // 평균을 계산
    const total = filteredArray.reduce((sum, item) => sum + item.customerReviewRank, 0);
    const average = total / filteredArray.length;
  
    // 평균을 소수점 한 자리까지 반올림
    return parseFloat(average.toFixed(1));
  };

  return (
    <div className={"flex flex-col"}>
      <TitleTag title="저자 소개"></TitleTag>
      <div className="relative w-full h-min ml-[28px]">
        {!isLoading && (
             <div className="absolute -right-[68px] top-0 -z-[10]">
             <div className="relative w-[626px] h-[338.98px] mt-2">
               <Image src={shadow2Img} alt="shadow" fill sizes={1}></Image>
             </div>
           </div>
        )}

        <Shimmer isLoading={isLoading}>
          <div className="flex flex-col w-full h-full  mt-[14px] rounded-[15px] bg-discriptionPanel">
            <div className="relative flex flex-row mx-[36px] mt-[38px] mb-[24px] gap-[18px]">
              <div className="absolute right-0 top-0 flex flex-row justify-end gap-[16px]">
                <div className="flex w-[130px] h-[45px] justify-center items-center bg-primary rounded-[14px]">
                  <div className="flex flex-row items-end gap-[8px] h-[22px] text-white">
                    <div className="relative w-[20px] h-[20px]">
                      <SavedIcon></SavedIcon>
                    </div>
                    <p className="font-NotoSansKRSemiBold text-[15px]">
                      구독하기
                    </p>
                  </div>
                </div>
                
                <div
                  className="flex w-[130px] h-[45px] justify-center items-center bg-black rounded-[14px]"
                  onClick={() => {
                    if (!isLoading) {
                      handleAuthorPageClick(authorData.authorCode, authorData.authorName);
                    }
                  }}
                >
                  <div className="flex flex-row items-end gap-[8px] h-[22px] text-white">
                    <div className="relative w-[20px] h-[20px]">
                      <ExportIcon></ExportIcon>
                    </div>
                    <p className="font-NotoSansKRSemiBold text-[15px]">
                      상세 페이지
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-[91px] h-[91px] rounded-full overflow-hidden flex-shrink-0">
                {!isLoading &&
                <Image
                  src={
                    authorData.authorPic
                  }
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                />
              }
              </div>

              <div className="flex flex-col w-full">
                <p className="font-NotoSansKRMedium text-[21px] text-textColor-primary">
                  {!isLoading
                    ? authorData.authorName
                    : "작가명 로딩중"}
                </p>

                <ReviewStars
                  width={111}
                  score={authorData.authorScore}
                  className="mt-[7px]"
                ></ReviewStars>

                <div className="flex flex-row items-end w-min h-min gap-[6px] font-NotoSansKRMedium mt-[15px] text-nowrap">
                  <p className="text-textColor-primary text-[14px]">
                    {`등록된 저서 : ${authorData.authorBookCount} 권`}
                  </p>
                </div>

                <p className="font-NotoSansKRRegular text-[16px] text-textColor-primary -tracking-[2px] mt-[11px]">
                  {authorData.authorDisc}
                </p>

                <div className="flex flex-row mt-[13px]">
                  <div className="flex justify-center items-center py-[6px] px-[8px] border-[1.24px] border-textColor-primary rounded-full">
                    <div className="flex flex-row">
                      <p className="font-NotoSansKRMedium text-textColor-primary text-[12px]">
                        # 추리소설
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Shimmer>
      </div>
    </div>
  );
}

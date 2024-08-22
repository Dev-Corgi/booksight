import backArrowSVG from "@svg/backarrow.svg";
import Image from "next/image";
import loginPicImg from "@png/loginPic.png";
import placeSVG from "@svg/place_black.svg";
import phoneSVG from "@svg/phone_black.svg";
import linkSVG from "@svg/link_black.svg";
import savedSVG from "@svg/saved_white.svg";
export default function LibraryDetailPage() {

  const libdisc = "시민과 함께 성장하고 소통하는 열린공간!\n부천시립도서관은 지식정보의 보고로서 권역별 주제 전문도서관, 생활 속의 시민 밀착형 작은도서관 사업으로 다양한 지식정보서비스를 제공하고 있습니다."
  return (
    <div className="flex flex-row w-full h-full">
      <div className = "flex flex-grow flex-col items-center">
      <div className="flex flex-col items-start w-[36.18vw] st:w-[521px] h-full text-black">
        <div className="flex flex-row justify-between items-center w-full mt-[40px]">
          <p className="font-NotoSansKRBold text-[30px]">BOOKS</p>
          <div className="flex flex-row items-center gap-[6.5px]">
            <div className="w-[18px] h-[16px]">
              <Image src={backArrowSVG}></Image>
            </div>
            <p className="font-NotoSansKRSemiBold text-[16px]">돌아가기</p>
          </div>
        </div>

        <p className = "font-NotoSansKRBold text-[73.73px] w-[497px] h-[154px] leading-[76.9px] mt-[58px]">부천 시립 상동 도서관</p>

        <div className = "flex flex-row gap-[18px] mt-[20.94px]">
         <div className = "flex flex-row gap-[2.37px]">
          <div className = "w-[23px] h-[23px]">
            <Image src = {placeSVG}></Image>
          </div>
          <p className = "font-NotoSansKRMedium text-[15.8px]">경기도 부천시 원미구 상이로 12</p>
         </div>

         <div className = "flex flex-row gap-[2.37px]">
          <div className = "w-[23px] h-[23px]">
            <Image src = {phoneSVG}></Image>
          </div>
          <p className = "font-NotoSansKRMedium text-[15.8px]">010-1234-5678</p>
         </div>

         <div className = "flex flex-row gap-[2.37px]">
          <div className = "w-[23px] h-[23px]">
            <Image src = {linkSVG}></Image>
          </div>
          <p className = "font-NotoSansKRMedium text-[15.8px]">bcl.go.kr</p>
         </div>
        </div>

        <div className = "flex flex-row h-[100px] mt-[45.46px]">
          <div className = "w-[6px] h-full bg-black"></div>

          <p className = "font-NotoSansKRMedium text-[13.69px] ml-[13.49px] w-[278.05px]">{libdisc}</p>

          <div className = "flex flex-row justify-center w-[168.52px] h-[46.34px] ml-[47.18px] mt-[23.09px] rounded-full bg-black gap-[3px]">
            <div className = "w-[22px] h-[22px] mt-[11px]">
              <Image src = {savedSVG}></Image>
            </div>
            <p className = "font-NotoSansKRMedium text-[15px] text-white mt-[10.9px]">구독하기</p>
          </div>

        </div>

        <div className = "flex flex-row gap-[52.66px] mt-[36.76px]">
         <div className = "flex flex-col gap-[5.5px]">
          <p className = "font-MontserratMedium text-[34.76px]">115k+</p>
          <p className = "font-NotoSansKRMedium text-[16px]">도서관 소장 자료</p>
         </div>

         <div className = "flex flex-col gap-[5.5px]">
          <p className = "font-MontserratMedium text-[34.76px]">70k+</p>
          <p className = "font-NotoSansKRMedium text-[16px]">도서관 월간 방문자</p>
         </div>

         <div className = "flex flex-col gap-[5.5px]">
          <p className = "font-MontserratMedium text-[34.76px]">47k+</p>
          <p className = "font-NotoSansKRMedium text-[16px]">도서관 구독 등록자</p>
         </div>
        </div>

      </div>
      </div>
      <div className="w-[51.74vw] h-screen py-[16px] mr-[16px]">
        <Image src={loginPicImg} className="w-full h-full object-cover rounded-[40px]"></Image>
      </div>
    </div>
  );
}

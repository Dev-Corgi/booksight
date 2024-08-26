import Image from "next/image";
import BackArrowIcon from "@svg/BackArrowIcon.svg";
import CallIcon from "@svg/CallIcon.svg";
import PlaceIcon from "@svg/PlaceIcon.svg";

import mapImg from "@png/mapImage.png";

export default function LibrarySearchPage(props) {
  return (
    <div className="flex flex-row">
      <div className="relative flex flex-col items-center ml-[79px] w-[413.2px] h-[725px] rounded-[45px] bg-black overflow-clip">
        <div className="flex flow-row justify-between items-start gap-[83px] mt-[29px] whitespace-nowrap">
          <p className="font-NotoSansKRSemiBold text-[35px] text-primary">
            서울 특별시
          </p>
          <div className="flex flex-row items-center gap-[5px] mt-[9px]">
            <div className="relative w-[18px] h-[16px]">
              <BackArrowIcon className = "text-primary"></BackArrowIcon>
            </div>
            <p className="font-NotoSansKRSemiBold text-[16px] text-primary">
              뒤로 가기
            </p>
          </div>
        </div>
        <div className="mt-[50px] w-[294.51] h-[526.86]">
          <Image src={mapImg} alt = "mapImage" sizes ={1}></Image>
        </div>
      </div>

      <div className="ml-[108.8px] flex-grow h-min flex flex-col">
        <div className="w-min h-min">
          <div className="flex font-KopubWorldBold text-textColor-primary text-[23px]">
            <p>서울 특별시 강서구 - 총 5곳</p>
          </div>

          <div className="relative mt-[1px] w-[344px] h-[3px]">
            <div className="absolute w-full h-full bg-black opacity-10"></div>
            <div className="absolute w-[102px] h-full bg-primary"></div>
          </div>
        </div>

        <div className="flex flex-col flex-grow mt-[33.56px] rounded-l-[23.69px] overflow-clip">
          {Array.from({ length: 9 }).map((library, index) => {
            return (
              <div className="relative w-full h-[80px]" key = {index}>
                <div className="absolute w-full h-[80px]">
                  <Image
                    src={`/assets/png/libraryImages/Library_${index + 1}.jpg`}
                    alt = "libraryImg"
                    fill
                    className = "object-cover"
                  ></Image>
                </div>
                <div className="absolute w-full h-full bg-black opacity-60 border-t-[1px] border-b-[1px] border-white border-opacity-30"></div>
                <div className="absolute flex flex-row w-full">
                  <p className="ml-[18.22px] mt-[22.42px] font-MontserratSemiBold text-[14px] text-primary">
                    {"0" + (index + 1)}
                  </p>
                  <p className="ml-[15.53px] mt-[19.55px] w-[280px] font-NotoSansKRBold text-[24px] text-primary">
                    부평 상동 시립 도서관
                  </p>
                  <div className="flex flex-row justify-start flex-grow gap-[60px]  mt-[30px] ml-[132.08px]">
                    <div className="flex flex-row items-center gap-[2.83px]">
                      <div className="relative w-[19px] h-[19px]">
                        <PlaceIcon className = "text-primary"></PlaceIcon>
                      </div>
                      <p className="font-NotoSansKRBold text-primary text-[14px]">
                        경기 부천시 원미구 상이로 12
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-[2.83px]">
                    <div className="relative w-[19px] h-[19px]">
                      <CallIcon className = "text-primary"></CallIcon>
                      </div>
                      <p className="font-NotoSansKRBold text-primary text-[14px]">
                        010-6440-0688
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

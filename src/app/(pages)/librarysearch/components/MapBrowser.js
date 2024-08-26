import Image from "next/image";
import BackArrowIcon from "@svg/BackArrowIcon.svg"
import mapImg from "@png/mapImage.png";

export default function MapBrowser() {
  return (
    <div className="relative flex flex-col items-center ml-[79px] w-[413.2px] h-[725px] rounded-[45px] bg-black overflow-clip">
      <div className="flex flow-row justify-between items-start gap-[83px] mt-[29px] whitespace-nowrap">
        <p className="font-NotoSansKRSemiBold text-[35px] text-primary">
          서울 특별시
        </p>
        <div className="flex flex-row items-center gap-[5px] mt-[9px]">
          <div className="relative w-[18px] h-[16px]">
            <BackArrowIcon className="text-primary"></BackArrowIcon>
          </div>
          <p className="font-NotoSansKRSemiBold text-[16px] text-primary">
            뒤로 가기
          </p>
        </div>
      </div>
      <div className="mt-[50px] w-[294.51] h-[526.86]">
        <Image src={mapImg} alt="mapImage" sizes={1}></Image>
      </div>
    </div>
  );
}

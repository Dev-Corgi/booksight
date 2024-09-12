import Image from "next/image";
import AuthorProfile from "@png/AuthorSample.jpg"
import CoverBackground from "@png/CoverBackground.png" 

export default function AuthorRecommendComponent() {
  return (
    <div className="relative w-[236px] h-[236px] rounded-[24px] overflow-hidden text-black">
      <div className="absolute w-full h-full">
        <div className="relative w-full h-full">
          <Image src={CoverBackground} fill sizes={1} className="object-fill"></Image>
        </div>
      </div>
      <div className="absolute w-full h-full">
        <div className="relative w-full h-full">
          <div className="absolute flex items-center justify-center w-[76px] h-[21px] right-[34px] top-[11px] -rotate-90 origin-top-right bg-black rounded-full">
            <p className = "font-NotoSansKRMedium text-[10px] text-white">Author</p>
          </div>
          <div className = "absolute w-full h-[82px] px-[13px] bottom-[14px]">
            <div className = "relative w-full h-full bg-[#7BC9D3] rounded-[8px]">
                <div className = "flex flex-col ml-[14px] w-[181px] h-min">
                    <p className = "font-NotoSansKRMedium text-[7px] w-full mt-[18px]">#스페인의 찰스 디킨스</p>
                    <p className = "font-NotoSansKRSemiBold text-[16px] w-full -mt-[2px]">프레드릭 배크만</p>
                    <p className = "font-NotoSansKRMedium text-[10px] w-full leading-[12px] whitespace-pre-wrap">{"#오베라는 남자 #브릿마리 여기있다\n#할머니가 미안하다고 전해달랬어요"}</p>
                </div>
            </div>
          </div>

          <div className = "absolute flex justify-center items-center w-[127px] h-[127px] mx-[54.5px] mt-[34px]">
            <div className = "absolute w-full h-full border-[4px] border-black rounded-full"></div>
            <div className = "absolute w-full h-full p-[10px]">
                <div className = "relative w-full h-full rounded-full overflow-hidden">
                <Image src={AuthorProfile} fill sizes={1} className = "object-cover"></Image>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

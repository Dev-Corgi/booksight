import Image from "next/image";
import AuthorProfile from "@png/AuthorSample.jpg"
import CoverBackground from "@png/CoverBackground.png" 

export default function AuthorRecommendComponent() {
  return (
    <div className="relative w-[168px] lg:w-[16.41vw] h-[168px] lg:h-[16.41vw] rounded-[18px] lg:rounded-[1.76vw] overflow-hidden text-black">
      <div className="absolute w-full h-full">
        <div className="relative w-full h-full">
          <Image src={CoverBackground} fill sizes={1} className="object-fill"></Image>
        </div>
      </div>
      <div className="absolute w-full h-full">
        <div className="flex justify-center items-center w-full h-full">
          <div className="absolute flex items-center justify-center w-[54px] lg:w-[5.27vw] h-[15px] lg:h-[1.46vw] right-[23px] lg:right-[2.25vw] top-[8px] lg:top-[0.78vw] -rotate-90 origin-top-right bg-black rounded-full">
            <p className = "font-NotoSansKRMedium text-[7px] lg:text-[0.68vw] text-white">Author</p>
          </div>

          <div className = "absolute w-full h-[59px] lg:h-[5.76vw] px-[8px] lg:px-[0.78vw] bottom-[10px] lg:bottom-[0.98vwks]">
            <div className = "relative w-full h-full bg-[#7BC9D3] rounded-[6px] lg:rounded-[0.59vw]">
                <div className = "flex flex-col ml-[14px] w-[181px] h-min">
                    <p className = "font-NotoSansKRSemiBold text-[12px] lg:text-[1.17vw] w-full mt-[8px] lg:mt-[0.78vw]">프레드릭 배크만</p>
                    <p className = "font-NotoSansKRMedium text-[7px] lg:text-[0.68vw] w-full leading-[10px] lg:leading-[0.98vw] whitespace-pre-wrap">{"#오베라는 남자 #브릿마리 여기있다\n#할머니가 미안하다고 전해달랬어요"}</p>
                </div>
            </div>
          </div>

          <div className = "absolute flex justify-center items-center w-[90px] lg:w-[8.79vw] h-[90px] lg:h-[8.79vw] mb-[35px] lg:mb-[3.42vw]">
            <div className = "absolute w-full h-full border-[3px] lg:border-[0.29vw] border-black rounded-full"></div>
            <div className = "absolute w-full h-full p-[7px] lg:p-[0.68vw]">
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

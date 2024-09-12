import Image from "next/image"
import SampleBookImage from "@png/bookImages/bookCover_1.png"
import quoteBackgroundSample from "@png/quoteBackgroundSample.jpg"
import QuoteIcon from "@svg/QuoteIcon.svg"

export default function QuoteRecommendationComponent(){

    const sampleText = "그는 흑백으로 이루어진 남자였다. 그녀는 색깔이었다. 그녀는 그가 가진 색깔의 전부였다."
    return(
        <div className = "relative w-[236px] h-[236px] rounded-[14px] overflow-hidden">
            <div className = "absolute w-full h-full">
                <Image alt= "bookCover"  src = {quoteBackgroundSample} fill sizes={1} className = "object-fill"></Image>
            </div>

            <div className = "absolute w-full h-full rounded-[14px] border-[4px] border-primary bg-black bg-opacity-60">
                <div className = "flex flex-col ml-[15px] mt-[26px]">
                   <div className = "relative w-[25px] h-[25px] opacity-60">
                      <QuoteIcon className = "text-white"></QuoteIcon>
                   </div>
                   <p className = "font-NotoSansKRSemiBold text-[20px] text-white w-[205px] text-pretty mt-[13px] leading-[24px]">
                   {sampleText}
                   </p>

                   <div className = "flex flex-row gap-[8px] mt-[29px]">
                    <div className = "relative w-[30px] h-[30px] mt-[2px] rounded-[4px] overflow-hidden border-[1px] border-white">
                        <Image alt= "bookCover"  src = {SampleBookImage} fill sizes={1} className = "object-fill"></Image>
                    </div>

                    <div className = "flex flex-col text-white">
                        <p className = "font-NotoSansKRSemiBold text-[13px] w-[110px] truncate">오베라는 남자</p>
                        <p className = "font-NotoSansKRRegular text-[10px] w-[110px] truncate">프레드릭 배크만</p>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image"
import SampleBookImage from "@png/bookImages/bookCover_1.png"
import quoteBackgroundSample from "@png/quoteBackgroundSample.jpg"
import QuoteIcon from "@svg/QuoteIcon.svg"

export default function QuoteRecommendationComponent(){

    const sampleText = "그는 흑백으로 이루어진 남자였다. 그녀는 색깔이었다. 그녀는 그가 가진 색깔의 전부였다."
    return(
        <div className = "relative w-[168px] lg:w-[16.41vw] h-[168px] lg:h-[16.41vw] rounded-[10px] lg:rounded-[0.98vw] overflow-hidden">
            <div className = "absolute w-full h-full">
                <Image alt= "bookCover"  src = {quoteBackgroundSample} fill sizes={1} className = "object-fill"></Image>
            </div>

            <div className = "absolute flex flex-col items-center w-full h-full rounded-[10px] lg:rounded-[0.98vw] border-[3px] lg:border-[0.29vw] border-primary bg-black bg-opacity-60">
                <div className = "flex flex-col w-[140px] lg:w-[13.67vw] items-start mt-[19px] lg:mt-[1.86vw]">
                   <div className = "relative w-[18px] lg:w-[1.76vw] h-[18px] lg:h-[1.76vw] opacity-60">
                      <QuoteIcon className = "text-white"></QuoteIcon>
                   </div>

                   <p className = "font-NotoSansKRSemiBold text-[14px] lg:text-[1.37vw] text-white w-[140px] lg:w-[13.67vw] text-pretty mt-[9px] lg:mt-[0.88vw] leading-[17px] lg:leading-[1.66vw]">
                   {sampleText}
                   </p>

                   <div className = "flex flex-row gap-[6.5px] lg:gap-[0.63vw] mt-[18px] lg:mt-[1.76vw]">
                    <div className = "relative w-[22px] lg:w-[2.15vw] h-[22px] lg:h-[2.15vw] mt-[1px] lg:mt-[0.1vw] rounded-[3px] lg:rounded-[0.29vw] overflow-hidden border-[0.7px] lg:borded-[0.07vw] border-white">
                        <Image alt= "bookCover"  src = {SampleBookImage} fill sizes={1} className = "object-cover"></Image>
                    </div>

                    <div className = "flex flex-col text-white">
                        <p className = "font-NotoSansKRSemiBold text-[9px] lg:text-[0.88vw] w-[117px] lg:w-[11.43vw] truncate">오베라는 남자</p>
                        <p className = "font-NotoSansKRRegular text-[7px] lg:text-[0.68vw] w-[117px] lg:w-[11.43vw] truncate">프레드릭 배크만</p>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
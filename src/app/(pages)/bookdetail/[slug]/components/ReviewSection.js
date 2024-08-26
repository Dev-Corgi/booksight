import Image from "next/image";
import ReviewFrameImg from "@png/reviewSection.png";
import ReviewStars from "@/app/components/ReviewStars";
import ProfileImg from "@png/profile.jpg";
import TitleTag from "@/app/components/TitleTag";
export default function ReviewSection({ className }) {
  return (
    <div className={`${className} flex flex-col`}>
      <TitleTag title = "독자 서평"></TitleTag>

      <div className="flex flex-col items-start ml-[28px] mt-[14px] w-auto h-min">
        <div className="grid grid-rows-2 grid-flow-col gap-[80.08px] w-full overflow-clip">
          {Array.from({ length: 6 }).map((value, index) => {
            return (
              <div
                key={index}
                className="relative w-[544.96px] h-[250.99px] overflow-visible"
              >
                <div className="absolute w-[611.37px] h-[331.06px] left-0 top-0">
                  <Image src={ReviewFrameImg} alt = "reviewFrame" fill sizes={1} className = "object-cover"></Image>
                </div>

                <div className="absolute left-[32.23px] top-[31.25px] w-min h-min">
                  <div className="w-[91.31px] h-[17.23px]">
                    <ReviewStars width={91.31} score={3}></ReviewStars>

                    <p className="w-[456px] h-[85px] font-NotoSansKRMedium text-[15px] leading-[28px] mt-[23.76px] text-white">
                      매일 아침 6시 15분 전, 알람도 없이 한 남자가 일어난다.
                      항상 같은 시간, 같은 양의 커피를 내려 마신다. 커피포트에
                      남는 커피의 양도 언제나 일정하다. 그러고는 마을 시찰을
                      나선다. 시설물들이 고장 난 것은 없는지,
                    </p>

                    <div className="flex flex-row items-center w-min h-min gap-[11.23px] mt-[21.94px]">
                      <div className="relative w-[40.53px] h-[40.53px] rounded-full overflow-clip">
                        <Image src={ProfileImg} alt = "profilePic" fill sizes={1}></Image>
                      </div>

                      <div className="flex flex-col whitespace-nowrap">
                        <p className="font-NotoSansKRSemiBold text-[14px] text-white">
                          꿈꾸는 독서가
                        </p>
                        <p className="font-NotoSansKRMedium text-[11px] text-white ">
                          2024.07.11
                        </p>
                      </div>
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

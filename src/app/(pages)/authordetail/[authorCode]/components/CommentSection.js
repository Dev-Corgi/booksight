import ProfilePic from "@png/profile.jpg";
import TitleTag from "@/app/components/TitleTag";
import Image from "next/image";

export default function CommentSection() {
  return (
    <div className="flex flex-col">
      <TitleTag title={"응원의 한마디"}></TitleTag>
      <div className="flex flex-row mt-[10px] lg:mt-[0.98vw]">
        <div className="relative ml-[20px] lg:ml-[1.95vw]">
          <div className="flex flex-col gap-[9px] lg:gap-[0.88vw] w-full">
            {Array.from({length:3}).map((_,index)=>{
                return(
                    <div className="relative w-[643px] lg:w-[62.79vw] h-[55px] lg:h-[5.37vw] rounded-[15px] bg-background" key = {index}>
                    <div className="font-NotoSansKRMedium text-[13px] text-textColor-secondary absolute top-[7px] right-[18px]">
                      12:45 am
                    </div>
                    <div className="flex flex-row gap-[13px] mt-[13px]">
                      <div className="relative w-[56px] h-[56px] ml-[13px] rounded-full overflow-hidden">
                        <Image
                          src={ProfilePic}
                          alt="ProfilePic"
                          fill
                          sizes={1}
                          className="object-cover"
                        ></Image>
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <p className="font-NotoSansKRSemiBold text-[16px]">
                          꾸준한 독서가
                        </p>
                        <p className="font-NotoSansKRMedium text-[15px] text-textColor-secondary">
                          더미 데이터 입니다.
                        </p>
                      </div>
                    </div>
                  </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

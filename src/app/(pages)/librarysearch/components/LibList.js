import Image from "next/image";
import CallIcon from "@svg/CallIcon.svg";
import PlaceIcon from "@svg/PlaceIcon.svg";

export default function LibList() {
    return (
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
    );
  }
  
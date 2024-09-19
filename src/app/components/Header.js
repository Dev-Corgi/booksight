"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import profilePic from "@png/profile.jpg";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import NotificationIcon from "@svg/NotificationIcon.svg";
import SavedIcon from "@svg/SavedIcon.svg";
import MoreIcon from "@svg/MoreIcon.svg";
import logoPic from "@png/logo.png";
export default function Header(props) {
  const pathName = usePathname();

  const homeLayout = [
    "/home",
    "/librarysearch",
    "/mypage",
    "/bookdetail",
    "/searchresult",
    "/authordetail",
  ];

  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/home");
  };

  const handleLibrarySearchClick = () => {
    router.push("/librarysearch");
  };

  return (
    <>
      {homeLayout.some((p) => pathName.startsWith(p)) && (
        <div className="absolute w-full h-[32px] lg:h-[3.13vw] mt-[30px] flex flex-row justify-center bg-background">
          <div
            className={"w-min h-full flex flex-row items-center gap-[36px] lg:gap-[3.52vw] font-NotoSansKRMedium text-nowrap"}
          >
            <div className="relative w-[108px] h-[20px] lg:w-[10.55vw] lg:h-[1.95vw]">
              <Image
                src={logoPic}
                fill
                sizes={1}
                alt="logoPic"
                className="object-contain"
                onClick={handleHomeClick}
              ></Image>
            </div>

            <SearchBar></SearchBar>

            <div className="w-min h-full flex flex-row items-center justify-start gap-[20px] lg:gap-[1.95vw] text-[12px] lg:text-[1.17vw] font-NotoSansKRSemiBold">
              <p onClick={handleHomeClick}>홈으로</p>
              <p onClick={handleLibrarySearchClick}>도서관 탐색</p>
              <p>사이트 정보</p>
            </div>

            <div className="w-min h-full flex flex-row items-center justify-start gap-[28px] lg:gap-[2.73vw]">
              <div className="w-min h-full flex flex-row justify-start items-center gap-[18px] lg:gap-[1.76vw]">
                <div className="relative w-[16px] h-[16px] lg:w-[1.56vw] lg:h-[1.56vw]">
                  <SavedIcon className="absolute w-full h-full text-black" />
                  <div className="absolute ml-[-5px] lg:ml-[-0.49vw] mt-[-5px] lg:mt-[-0.49vw] flex items-center justify-center w-[10px] lg:w-[0.98vw] h-[10px] lg:h-[0.98vw] rounded-full bg-primary overflow-visible">
                    <p className="text-[8px] lg:text-[0.78vw] text-white">5</p>
                  </div>
                </div>
                <div className="relative w-[16px] lg:w-[1.56vw] h-[16px] lg:h-[1.56vw]">
                  <NotificationIcon className="absolute w-full h-full text-black"></NotificationIcon>
                  <div className="absolute ml-[-5px] lg:ml-[-0.49vw] mt-[-5px] lg:mt-[-0.49vw] flex items-center justify-center w-[10px] lg:w-[0.98vw] h-[10px] lg:h-[0.98vw] rounded-full bg-primary overflow-visible">
                    <p className="text-[8px] lg:text-[0.78vw] text-white">5</p>
                  </div>
                </div>
              </div>

              <div className="w-min h-full flex flex-row justify-start items-center gap-[14px] lg:gap-[1.37vw]">
                <div className="relative w-[30px] h-[30px] lg:w-[2.93vw] lg:h-[2.93vw] rounded-full overflow-clip">
                  <Image
                    src={profilePic}
                    alt="profilePic"
                    fill
                    sizes={1}
                  ></Image>
                </div>
                <div className="relative w-[11px] h-[11px] lg:w-[1.07vw] lg:h-[1.07vw]">
                  <MoreIcon className="absolute" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client"
import { usePathname } from 'next/navigation';
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
        <div
          className={`${props.className} w-full h-[45px] flex flex-row items-center px-[80px] gap-[40px] font-NotoSansKRMedium text-nowrap`}
        >
          <div className="relative w-[243px] h-[45px]">
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

          <div className="w-min h-full flex flex-row items-center justify-start gap-[29px] text-[16px] font-NotoSansKRSemiBold">
            <p onClick={handleHomeClick}>홈으로</p>
            <p onClick={handleLibrarySearchClick}>도서관 탐색</p>
            <p>사이트 정보</p>
          </div>

          <div className="w-min h-full flex flex-row items-center justify-start gap-[40px]">
            <div className="w-min h-full flex flex-row justify-start items-center gap-[25px]">
              <div className="relative w-[22px] h-[22px]">
                <SavedIcon className="absolute w-full h-full text-black" />
                <div className="absolute ml-[-7px] mt-[-6px] flex items-center justify-center w-[14px] h-[14px] rounded-full bg-primary overflow-visible">
                  <p className="text-[11px] text-white">5</p>
                </div>
              </div>
              <div className="relative w-[22px] h-[22px]">
                <NotificationIcon className="absolute"></NotificationIcon>
                <div className="absolute ml-[-7px] mt-[-6px] flex items-center justify-center w-[14px] h-[14px] rounded-full bg-primary overflow-visible">
                  <p className="text-[11px] text-white">5</p>
                </div>
              </div>
            </div>

            <div className="w-min h-full flex flex-row justify-start items-center gap-[14.5px]">
              <div className="relative w-[42px] h-[42px] rounded-full overflow-clip">
                <Image src={profilePic} alt="profilePic" fill sizes={1}></Image>
              </div>
              <div className="relative w-[15px] h-[15px]">
                <MoreIcon className="absolute" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

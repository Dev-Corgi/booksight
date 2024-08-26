"use client";

import Image from "next/image";
import shoppingBagSVG from "@svg/shopping-bag.svg";
import notificationSVG from "@svg/notification.svg";
import menuSVG from "@svg/menu.svg";
import profilePic from "@png/profile.jpg";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
export default function Header(props) {

  const router = useRouter();

  const handleHomeClick = ()=>{
    router.push("/home");
  }

  return (
    <div
      className={`${props.className} w-full h-[45px] flex flex-row items-center px-[80px] gap-[50px] font-NotoSansKRMedium text-nowrap`}
    >
      {/* <p className="font-NotoSansKRBold text-[30px] -tracking-tighter" onClick={handleHomeClick}>북사이트</p> */}
      <p className="font-NotoSansKRBold text-[25px] -tracking-tighter" onClick={handleHomeClick}>북사이트</p>

     <SearchBar></SearchBar>

      <div className="w-min h-full flex flex-row items-center justify-start gap-[29px] text-[16px] font-NotoSansKRSemiBold">
        <p onClick = {handleHomeClick}>홈으로</p>
        <p>도서관 정보</p>
        <p>사이트 정보</p>
      </div>

      <div className="w-min h-full flex flex-row items-center justify-start gap-[40px]">
        <div className="w-min h-full flex flex-row justify-start items-center gap-[25px]">
          <div className="relative w-[22px] h-[22px]">
            <Image
              src={notificationSVG}
              alt="notificationIcon"
              className="absolute w-[22px] h-[22px]"
              fill
              sizes={1}
            ></Image>
            <div className="absolute ml-[-7px] mt-[-6px] flex items-center justify-center w-[14px] h-[14px] rounded-full bg-primary overflow-visible">
              <p className="text-[11px] text-white">5</p>
            </div>
          </div>
          <div className="relative w-[22px] h-[22px]">
            <Image
              src={shoppingBagSVG}
              alt="shoppingBagIcon"
              className="absolute w-[22px] h-[22px]"
              fill
              sizes = {1}
            ></Image>
            <div className="absolute ml-[-7px] mt-[-6px] flex items-center justify-center w-[14px] h-[14px] rounded-full bg-primary overflow-visible">
              <p className="text-[11px] text-white">5</p>
            </div>
          </div>
        </div>

        <div className="w-min h-full flex flex-row justify-start items-center gap-[20px]">
          <div className="relative w-[42px] h-[42px] rounded-full overflow-clip">
            <Image src={profilePic} alt="profilePic" fill sizes={1}></Image>
          </div>
          <div className="relative w-[4px] h-[15px]">
            <Image src={menuSVG} alt="searchIcon" fill sizes={1}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

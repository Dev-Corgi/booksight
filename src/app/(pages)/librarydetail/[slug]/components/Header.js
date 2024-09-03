"use client";
import { useRouter } from "next/navigation";
import BackArrowIcon from "@svg/BackArrowIcon.svg";
import logoPic from "@png/logo.png";
import Image from "next/image";
import Shimmer from "@/app/components/Simmer";
export default function Header({ isLoading }) {
  const router = useRouter();

  const handleHomeClick = () => {
    router.back();
  };

  return (
    <div className="flex flex-row justify-between items-center w-full mt-[40px]">
      <Shimmer isLoading={isLoading}>
        <div className="relative w-[124px] h-[23px]">
          <Image src={logoPic} fill sizes={1} alt="logoPic"></Image>
        </div>
      </Shimmer>
      <Shimmer isLoading={isLoading}>
        <div
          className="flex flex-row items-center gap-[6.5px] whitespace-nowrap"
          onClick={handleHomeClick}
        >
          <div className="relative w-[18px] h-[16px]">
            <BackArrowIcon></BackArrowIcon>
          </div>
          <p className="font-NotoSansKRSemiBold text-[16px]">돌아가기</p>
        </div>
      </Shimmer>
    </div>
  );
}

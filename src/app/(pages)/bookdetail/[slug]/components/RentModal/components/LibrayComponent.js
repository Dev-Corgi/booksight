"use client";
import Image from "next/image";
import PlaceIcon from "@svg/PlaceIcon.svg";
import CallIcon from "@svg/CallIcon.svg";
import { useRouter } from 'next/navigation';

export default function LibraryComponent({ library }) {
    const router = useRouter();
    
  const handleLibraryClick = (libCode) => {
    router.push(`/librarydetail/${libCode}`);
  };

  return (
    <div className="relative w-full h-[80px]">
      <div className="absolute w-full h-[80px]">
        <Image
          src={library.picture}
          alt="libraryThumbnail"
          className="object-cover"
          fill
          sizes={1}
        ></Image>
      </div>
      <div
        className={`absolute w-full h-full bg-black ${
          library.rentState == "대출 하기" ? "bg-opacity-50" : "bg-opacity-70"
        } border-t-[1px] border-b-[1px] border-white border-opacity-30`}
      ></div>
      <div className="absolute flex flex-row h-full  justify-between items-center  w-full">
        <div className="flex flex-row ml-[18.22px]">
          <p className="font-MontserratSemiBold text-[14px] text-primary">
            {"0" + (index + 1)}
          </p>
          <p
            className="ml-[15.53px] w-[280px] font-NotoSansKRBold text-[24px] text-primary"
            onClick={() => handleLibraryClick(library.libCode)}
          >
            {library.libName}
          </p>
        </div>
        <div className="flex flex-row justify-start gap-[60px]">
          <div className="flex flex-row w-[300px] items-center gap-[2.83px]">
            <div className="relative w-[19px] h-[19px]">
              <PlaceIcon className=" text-primary"></PlaceIcon>
            </div>
            <p className="font-NotoSansKRBold text-primary text-[14px]">
              {library.address}
            </p>
          </div>
          <div className="flex flex-row w-[130px]items-center gap-[2.83px]">
            <div className="relative w-[19px] h-[19px]">
              <CallIcon className=" text-primary"></CallIcon>
            </div>
            <p className="font-NotoSansKRBold text-primary text-[14px]">
              {library.tel}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-[121px] h-[38px] border-[2px] border-primary rounded-[10px] mr-[58px]">
          <p className="font-NotoSansKRSemiBold text-[14px] text-primary">
            {library.rentState}
          </p>
        </div>
      </div>
      {library.rentState != "대출 하기" && (
        <div className="absolute w-full h-full bg-black opacity-30"></div>
      )}
    </div>
  );
}

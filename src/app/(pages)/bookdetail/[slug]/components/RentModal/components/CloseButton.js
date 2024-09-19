"use client";
import CloseIcon from "@svg/CloseIcon.svg";
export default function CloseButton({ requestClose }) {
  return (
    <div
      className="absolute right-0 mt-[23px] lg:mt-[2.25vw] mr-[29px] lg:mr-[2.83vw] w-[12px] lg:w-[1.17vw] h-[12px] lg:h-[1.17vw] flex justify-center items-center"
      onClick={requestClose}
    >
      <div className="relative w-[12px] lg:w-[1.17vw] h-[12px] lg:h-[1.17vw]">
        <CloseIcon className="w-full h-full" />
      </div>
    </div>
  );
}

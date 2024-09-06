"use client";
import CloseIcon from "@svg/CloseIcon.svg";
export default function CloseButton({ requestClose }) {
  return (
    <div
      className="absolute right-0 mt-[33px] mr-[41px] w-[17px] h-[17px] flex justify-center items-center"
      onClick={requestClose}
    >
      <div className="relative w-[17px] h-[17px]">
        <CloseIcon className="w-full h-full" />
      </div>
    </div>
  );
}

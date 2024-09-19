"use client";
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import TitleTag from "@/app/components/TitleTag";
import CloseButton from "./components/CloseButton";
import Tab from "./components/Tab";
import TagList from "./components/TagList";
import LibraryComponent from "./components/LibraryComponent";
import LocationSetModal from "../LocationSetModal";
import { useDispatch } from "react-redux";
import { setLocation } from "@redux/locationSlice";

export default function RentModal({
  isRentModalOpen,
  setisRentModalOpen,
  isbn13,
}) {
  const dispatch = useDispatch();
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  useEffect(() => {
    if (isRentModalOpen) {
      // 처음 페이지 로드 시 geolocation 권한을 확인
      if (localStorage.getItem("userAddress") == null) {
        setisRentModalOpen(false);
        setIsLocationModalOpen(true);
      } else {
        const location = JSON.parse(localStorage.getItem("userAddress"));
        dispatch(setLocation(location));
      }
    }
  }, [isRentModalOpen]);

  if (typeof window === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      {isRentModalOpen && (
        <div className="fixed flex flex-col justify-end inset-0 w-full h-screen bg-black bg-opacity-80">
          <div className="relative flex flex-col items-center w-full h-[86%] bg-background rounded-t-[35px]">
            <CloseButton
              requestClose={() => setisRentModalOpen(false)}
            ></CloseButton>
            <div className="relative flex mt-[33px] lg:mt-[3.22vw]">
              <p className="font-KopubWorldBold whitespace-nowrap z-10 text-[27px] lg:text-[2.64vw] pr-[8px] lg:pr-[0.78vw]">
                도서 대출
              </p>
              <div className="absolute w-full h-[10px] lg:h-[0.98vw] mt-[23px] lg:mt-[2.25vw] bg-primary z-0"></div>
            </div>
            <div className="flex flex-row justify-between w-full h-[33px] lg:h-[3.22vw] pl-[36px] lg:pl-[3.52vw] pr-[47px] lg:pr-[4.59vw] -mt-[5px] lg:-mt-[0.49vw]">
              <Tab></Tab>
              <TagList isOpen={isRentModalOpen}></TagList>
            </div>
            <LibraryComponent
              isOpen={isRentModalOpen}
              isbn13={isbn13}
            ></LibraryComponent>
          </div>
        </div>
      )}
      {isLocationModalOpen && (
        <LocationSetModal
          isOpen={isLocationModalOpen}
          requestOpen={() => setIsLocationModalOpen(true)}
          requestClose={() => setIsLocationModalOpen(false)}
          requestOpenRentModal={() => setisRentModalOpen(true)}
          index={0}
        ></LocationSetModal>
      )}
    </>,
    typeof window !== "undefined" ? document.getElementById("rentModal") : null
  );
}

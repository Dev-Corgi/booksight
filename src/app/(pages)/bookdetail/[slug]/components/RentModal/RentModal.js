"use client";
import ReactDOM from "react-dom";
import React,{useState,useEffect} from "react";
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
    console.log("오픈 제로!")
    if (isRentModalOpen) {
      console.log("오픈 시작!")
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
            <CloseButton requestClose={() => setisRentModalOpen(false)}></CloseButton>
            <div className="w-[166px] h-[59px] mt-[41.19px]">
              <TitleTag height={59} title="도서 대출" font="KopubWorldBold" />
            </div>
            <div className="flex flex-row justify-between w-full h-[45px] pl-[50px] pr-[58px] -mt-[7.14]">
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

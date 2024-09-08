"use client";

import React, { useState } from "react";
import RentModal from "./RentModal/RentModal";
import LocationModal from "./LocationModal";
import EmptyModal from "./EmptyModal";
import LocationSetModal from "./LocationSetModal";
import { useSelector, useDispatch } from "react-redux";
import {
  setLocation,
  setZoom
} from "@redux/locationSlice";

export default function RentButton({ book }) {
  const dispatch = useDispatch();
  

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isRentModalOpen, setisRentModalOpen] = useState(false);
  const [isEmptyModalOpen, setisEmptyModalOpen] = useState(false);

  const handleRentButtonClick = () => {
    if (book != undefined) {
      // 처음 페이지 로드 시 geolocation 권한을 확인
      if(localStorage.getItem('userAddress') == null){
        setIsLocationModalOpen(true);
      }
      else{
        const location = JSON.parse(localStorage.getItem('userAddress'));
        dispatch(setLocation(location));
        setisRentModalOpen(true);
      }
    }
  };

  return (
    <>
      <div
        className="flex items-center justify-center w-[165px] h-[58px] rounded-[18px] bg-primary"
        onClick={handleRentButtonClick}
      >
        <p className="font-NotoSansKRSemiBold text-[19px] text-white">
          대여하기
        </p>
      </div>
      {book && (
        <RentModal
          isOpen={isRentModalOpen}
          requestClose={() => setisRentModalOpen(false)}
          isbn13={book.isbn13}
        ></RentModal>
      )}
            {book && (
        <LocationSetModal
          isOpen={isLocationModalOpen}
          requestOpen={() => setIsLocationModalOpen(true)}
          requestClose={() => setIsLocationModalOpen(false)}
          requestOpenRentModal={() => setisRentModalOpen(true)}
          requestOpenEmptyModal={() => setisEmptyModalOpen(true)}
          requestCloseEmptyModal = {() => setisEmptyModalOpen(false)}
          index={0}
        ></LocationSetModal>
      )}
      {book && (
        <EmptyModal
          isOpen={isEmptyModalOpen}
          requestClose={() => setisEmptyModalOpen(false)}
        ></EmptyModal>
      )}
    </>
  );
}

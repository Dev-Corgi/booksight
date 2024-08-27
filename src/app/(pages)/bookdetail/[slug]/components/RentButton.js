"use client";

import React, { useState } from "react";
import RentModal from "./RentModal/RentModal";

export default function RentButton({ book }) {
  const [isOpen, setisOpen] = useState(false);

  const handleRentButtonClick = () => {
    setisOpen(true);
  };

  const handleRequestClose = () => {
    setisOpen(false);
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
      <RentModal
        isOpen={isOpen}
        requestClose={handleRequestClose}
        isbn13={book.isbn13}
      ></RentModal>
    </>
  );
}

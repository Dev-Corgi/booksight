"use client";
import React, { useState,useEffect } from "react";
import RentModal from "./RentModal/RentModal";
import { Provider } from "react-redux";
import store from "@redux/store";

export default function RentButton({ book }) {
  

  const [isRentModalOpen, setisRentModalOpen] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-center w-[165px] h-[58px] rounded-[18px] bg-primary"
        onClick={() => {
          console.log("오픈!")
          setisRentModalOpen(true)
        }}
      >
        <p className="font-NotoSansKRSemiBold text-[19px] text-white">
          대여하기
        </p>
      </div>
      {book && (
        <Provider store={store}>
        <RentModal
          isRentModalOpen={isRentModalOpen}
          setisRentModalOpen={setisRentModalOpen}
          isbn13={book.isbn13}
        ></RentModal>
        </Provider>
      )}
    </>
  );
}

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
        className="flex items-center justify-center w-[118px] lg:w-[11.52vw] h-[42px] lg:h-[4.1vw] rounded-[13px] lg:rounded-[1.27vw] bg-primary"
        onClick={() => {
          console.log("오픈!")
          setisRentModalOpen(true)
        }}
      >
        <p className="font-NotoSansKRSemiBold text-[14px] lg:text-[1.37vw] text-white">
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

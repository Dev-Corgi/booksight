// components/LocationModal.js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
export default function LocationModal({
  isOpen,
  requestClose,
  requestOpen,
  requestOpenRentModal,
  requestOpenEmptyModal,
  requestCloseEmptyModal
}) {
  if (!isOpen) return null;

  //   const requestLocation = () => {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setLocation({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         });
  //         setIsPermissionModalOpen(false); // 모달 닫기
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   };

  const handleConfirm = () => {
    requestClose();
    requestOpenEmptyModal();
    // 확인 버튼을 누르면 브라우저의 권한 요청 팝업 띄우기
    navigator.geolocation.getCurrentPosition(
      () => {
        // 위치 정보는 사용하지 않고 권한만 확인
        console.log("위치 권한이 허용되었습니다.");
        requestCloseEmptyModal();
        requestOpenRentModal();
      },
      (error) => {
        if (error.code === 1) {
          console.log("사용자가 위치 권한을 거부했습니다.");
        } else {
          console.log("권한 요청 중 다른 오류가 발생했습니다.", error);
        }
        requestCloseEmptyModal();
        requestOpenRentModal();
      }
    );
  };

  return ReactDOM.createPortal(
      <div className="fixed flex flex-col justify-end inset-0 w-full h-screen bg-black bg-opacity-80">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Geolocation 권한 요청</h2>
          <p className="mb-4">위치 정보를 제공하시겠습니까?</p>
          <div className="flex justify-end">
            <button
              className="bg-gray-500 text-white px-4 py-2 mr-2 rounded"
              onClick={requestClose}
            >
              취소
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleConfirm}
            >
              확인
            </button>
          </div>
        </div>
      </div>
,
    typeof window !== "undefined" ? document.getElementById("rentModal") : null
  );
}

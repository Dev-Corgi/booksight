"use client";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import CloseIcon from "@svg/CloseIcon.svg";
import ConfirmPic from "@png/ConfirmPic.png";
import ErrorPic from "@png/ErrorPic.png";
import LostPic from "@png/LostPic.png";
import Image from "next/image";
import getStaticMapHandler from "@handler/getStaticMapHandler";
import { useSelector, useDispatch } from "react-redux";
import {
  setLocation,
  setZoom
} from "@redux/locationSlice";



const MapComponent = ({tempLocation,tempZoom,setTempLocation,setTempZoom}) => {

  const mapRef = useRef(null); // Reference for the map div

  useEffect(() => {
      const { naver } = window;

      const mapOptions = {
        center: new naver.maps.LatLng(tempLocation.latitude, tempLocation.longitude),
        zoom: tempZoom,
      };

      const map = new naver.maps.Map(mapRef.current, mapOptions);

      // Create a div element for the menuLayer
      const menuLayer = document.createElement("div");
      menuLayer.style.position = "absolute";
      menuLayer.style.zIndex = 10000;
      menuLayer.style.backgroundColor = "#fff";
      menuLayer.style.border = "solid 1px #333";
      menuLayer.style.padding = "10px";
      menuLayer.style.display = "none";
      document.body.appendChild(menuLayer); // Append to the body

      let marker = null;

      naver.maps.Event.addListener(map, "click", function (e) {
        if (marker) {
          marker.setMap(null);
        }

        marker = new naver.maps.Marker({
          position: e.coord,
          map: map,
        });

        // setLocation(e.coord); // Update location state
        setTempLocation({latitude : e.coord._lat, longitude : e.coord._lng});
        setTempZoom(map.zoom);
      });

      naver.maps.Event.addListener(map, "mousedown", function () {
        menuLayer.style.display = "none"; // Hide the menuLayer
      });

    

    return () => {
      // Clean up the menuLayer when the component is unmounted
      if (menuLayer) {
        menuLayer.remove();
      }
    };
  }, []);

  return (
    <div ref={mapRef} id="map"className= "w-full h-full" />
  );
};

export default function LocationSetModal({
  isOpen,
  index,
  requestClose,
  requestOpenRentModal =null,
}) {

  const { location,zoom } = useSelector(
    (state) => state.location
  );
  const dispatch = useDispatch();

  const [currentIndex, setcurrentIndex] = useState(index);
  const [staticMapImg, setstaticMapImg] = useState(undefined);
  const [tempLocation, setTempLocation] = useState(location);
  const [tempZoom, setTempZoom] = useState(zoom);

  const modalData = [
    {
      content: (
        <Image
          src={LostPic}
          alt="lostpic"
          fill
          sizes={1}
          className="object-contain"
        ></Image>
      ),
      title: "주소지가 등록되어 있지 않습니다",
      subTitle:
        "등록된 기본 주소지가 없습니다,\n주변 도서관의 대출정보를 조회하기 위해 주소지를 등록해 주세요",
      secondaryButtonText: "직접 등록하기",
      primaryButtonText: "현 위치로 등록",
      secondaryButtonAction: () => {
        setcurrentIndex(3);
      },
      primaryButtonAction: () => {
        navigator.permissions.query({ name: 'geolocation' }).then((result) => {
          if (result.state === 'granted') {
            handleGetPermission();
          } else if (result.state === 'prompt') {
            setcurrentIndex(1);
          } else if (result.state === 'denied') {
            setcurrentIndex(2);
          }
        });
      },
    },
    {
      content: (
        <Image
          src={ConfirmPic}
          alt="confirmpic"
          fill
          sizes={1}
          className="object-contain"
        ></Image>
      ),
      title: "위치 권한을 허용해 주세요",
      subTitle:
        "아래 “권한얻기” 버튼을 누르고, 위치 권한 허용 팝업에서\n“허용”을 선택해 주세요, 혹은 직접 등록할수도 있습니다. ",
      secondaryButtonText: "직접 등록하기",
      primaryButtonText: "권한 얻기",
      secondaryButtonAction: () => {
        setcurrentIndex(3);
      },
      primaryButtonAction: () => {
        handleGetPermission();
      },
    },
    {
      content: (
        <Image
          src={ErrorPic}
          alt="errorpic"
          fill
          sizes={1}
          className="object-contain"
        ></Image>
      ),
      title: "위치 정보를 얻는데 실패하였습니다",
      subTitle:
        "죄송합니다, 현재 위치 정보를 얻는 과정에서 문제가 발생했습니다.\n수동으로 주소지를 등록해주세요.",
      secondaryButtonText: "",
      primaryButtonText: "직접 등록하기",
      secondaryButtonAction: () => {},
      primaryButtonAction: () => {
        setcurrentIndex(3);
      },
    },
    {
      content: (
        <MapComponent tempLocation={tempLocation} tempZoom={tempZoom} setTempLocation={setTempLocation} setTempZoom={setTempZoom}
        ></MapComponent>
      ),
      title: "지도에서 등록할 주소지를 선택해 주세요",
      subTitle:
        "드래그 하여 이동하고, 스크롤로  줌인/아웃 을 할수 있습니다.\n지도상에서 등록할 주소지를 클릭한후, 확인 버튼을 눌러주세요",
      secondaryButtonText: "",
      primaryButtonText: "확인",
      secondaryButtonAction: () => {},
      primaryButtonAction: () => {
          handleSet();
      },
    },
    {
      content: (
        <>
          {staticMapImg != undefined && (
            <Image
              src={staticMapImg}
              alt="mapImage"
              fill
              sizes={1}
              className="absolute object-cover"
            ></Image>
          )}
        </>
      ),
      title: "주소지를 확인해 주세요",
      subTitle:
        "해당 주소지로 조회하시겠습니까?\n아니라면 다시 직접 등록할 수 있습니다.",
      secondaryButtonText: "다시 등록",
      primaryButtonText: "주소지 등록",
      secondaryButtonAction: () => {
        setcurrentIndex(3);
      },
      primaryButtonAction: () => {
        handleConfirm();
      },
    },
  ];

  const handleGetPermission = () => {
    // 확인 버튼을 누르면 브라우저의 권한 요청 팝업 띄우기
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setTempLocation({latitude : position.coords.latitude, longitude : position.coords.longitude});
        setTempZoom(10);
        // console.log("위치 권한이 허용되었습니다.");
        setcurrentIndex(4);
      },
      (error) => {
        if (error.code === 1) {
          // console.log("사용자가 위치 권한을 거부했습니다.");
        } else {
          // console.log("권한 요청 중 다른 오류가 발생했습니다.", error);
        }
        setcurrentIndex(2);
      }
    );
  };

  const handleSet = () => {
    setcurrentIndex(4);
  };

  const handleConfirm = () => {
    localStorage.setItem('userAddress', JSON.stringify(tempLocation));
    dispatch(setLocation(tempLocation));
    dispatch(setZoom(tempZoom))
    requestClose()
    if(requestOpenRentModal != null){requestOpenRentModal()}
  };

  useEffect(() => {
    async function fetchGetStaticMap() {
      setstaticMapImg(
        await getStaticMapHandler({
          latitude: tempLocation.latitude,
          longitude: tempLocation.longitude,
          level: tempZoom
        })
      );
    }
    if (currentIndex == 4) {
      fetchGetStaticMap();
    }
  }, [tempLocation, currentIndex]);

  useEffect(() => {
  setcurrentIndex(index);
  }, [isOpen])

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed flex items-center justify-center inset-0 w-full h-screen bg-black bg-opacity-80">
      <div className="relative flex flex-col items-center w-[542px] h-[580px] bg-background rounded-[15px]">
        <div className="absolute right-[19px] top-[19px] w-[13px] h-[13px]">
          <CloseIcon onClick={requestClose}></CloseIcon>
        </div>
        <div className="relative mt-[48px] w-[504px] h-[288px]">
          {modalData[currentIndex].content}
        </div>
        <p className="mt-[21px] font-NotoSansKRMedium text-[23px] text-black w-[456px]">
          {modalData[currentIndex].title}
        </p>

        <p className="mt-[10px] font-NotoSansKRRegular text-[17px] text-textColor-secondary w-[456px]">
          {modalData[currentIndex].subTitle}
        </p>

        <div className="w-full h-[1px] bg-textColor-secondary mt-[27px]"></div>

        <div className="mt-[21px] flex flex-row w-[486px] justify-between">
          {modalData[currentIndex].secondaryButtonText != "" && (
            <div
              className="flex justify-center items-center w-[165px] h-[58px] bg-black rounded-[18px]"
              onClick={modalData[currentIndex].secondaryButtonAction}
            >
              {modalData[currentIndex].secondaryButtonText != "" && (
                <p className="w-full font-NotoSansKRSemiBold text-[19px] text-white text-center align-middle">
                  {modalData[currentIndex].secondaryButtonText}
                </p>
              )}
            </div>
          )}

          <div
            className="flex justify-center items-center w-[165px] h-[58px] bg-primary rounded-[18px]"
            onClick={modalData[currentIndex].primaryButtonAction}
          >
            <p className="w-full font-NotoSansKRSemiBold text-[19px] text-white text-center align-middle">
              {modalData[currentIndex].primaryButtonText}
            </p>
          </div>
        </div>
      </div>
    </div>,
    typeof window !== "undefined" ? document.getElementById("rentModal") : null
  );
}

"use client";
import React, { useEffect, useState } from "react";
import PlaceIcon from "@svg/PlaceIcon.svg";
import MenuIcon from "@svg/MenuIcon.svg";
import FindIcon from "@svg/FindIcon.svg";
import EyeIcon from "@svg/EyeIcon.svg";
import reverseGeoCodeHandler from "@handler/reverseGeoCodeHandler";
import Shimmer from "@/app/components/Simmer";
import LocationSetModal from "../../LocationSetModal";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsOnlyPossible
} from "@redux/rentModalSlice";

export default function TagList({ isOpen }) {
  const dispatch = useDispatch();

  const { location } = useSelector((state) => state.location);
  const { isOnlyPossible } = useSelector((state) => state.rentModal);

  const [isLoading, setIsLoading] = useState(true);
  const [roadaddr, setRoadaddr] = useState(undefined);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      async function fetchData() {
        try {
          const roadAddrResult = reverseGeoCodeHandler(location);
          setRoadaddr(roadAddrResult);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }
  }, [location]);

  return (
    <>
      <div className="flex flex-row justify-end gap-[6px] lg:gap-[0.59vw]">
      <Shimmer isLoading={isLoading}>
          <div className="flex justify-center items-center py-[6px] lg:py-[0.59vw] px-[7px] lg:px-[0.68vw] border-[1px] lg:border-[0.1vw] border-textColor-primary rounded-full"
          onClick={() => dispatch(setIsOnlyPossible(!isOnlyPossible))}>
            <div className="flex flex-row gap-[1px] lg:gap-[0.1vw]">
              <div className="relative w-[14px] lg:w-[1.37vw] h-[14px] lg:h-[1.37vw]">
                <EyeIcon className="text-textColor-primary" />
              </div>
              <p className="font-NotoSansKRMedium text-textColor-primary text-[11px] lg:text-[1.07vw]">
                {isOnlyPossible ? "대출 가능 도서관만" : "모든 도서관"}
              </p>
            </div>
          </div>
        </Shimmer>
        <Shimmer isLoading={isLoading}>
          <div
            className="flex justify-center items-center py-[6px] lg:py-[0.59vw] px-[7px] lg:px-[0.68vw] border-[1px] lg:border-[0.1vw] border-textColor-primary rounded-full"
            onClick={() => setIsLocationModalOpen(true)}
          >
            <div className="flex flex-row gap-[1px] lg:gap-[0.1vw]">
              <div className="relative w-[14px] lg:w-[1.37vw] h-[14px] lg:h-[1.37vw]">
                <PlaceIcon className="text-textColor-primary" />
              </div>
              <p className="font-NotoSansKRMedium text-textColor-primary text-[11px] lg:text-[1.07vw]">
                {roadaddr == undefined ? "로딩중..." : roadaddr}
              </p>
            </div>
          </div>
        </Shimmer>
      </div>

      {isLocationModalOpen && (
        <LocationSetModal
          isOpen={isLocationModalOpen}
          requestOpen={() => setIsLocationModalOpen(true)}
          requestClose={() => setIsLocationModalOpen(false)}
          index={3}
        ></LocationSetModal>
      )}
    </>
  );
}

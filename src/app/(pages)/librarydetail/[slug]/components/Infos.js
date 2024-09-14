"use client";
import React, { useState, useEffect } from "react";
import Shimmer from "@/app/components/Simmer";
import Link from "next/link";

export function OprerationTime({ libraryInfo }) {
  const [isLoading, setisLoading] = useState(true);
  const [currentLibraryInfo, setcurrentLibraryInfo] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setcurrentLibraryInfo(await libraryInfo);
        setisLoading(false);
      } catch (error) {
        console.error("Error fetching book data:", error);
        // 에러 처리 로직을 추가할 수 있습니다.
      }
    };

    fetchData();
  }, [libraryInfo]);

  return (
    <Shimmer isLoading={isLoading} className="w-min h-min">
      <p className="font-NotoSansKRMedium text-[15.8px] whitespace-nowrap">
        {currentLibraryInfo == undefined
          ? "월~금 8:00 ~ 20:00"
          : currentLibraryInfo.operatingTime}
      </p>
    </Shimmer>
  );
}

export function Location({ libraryInfo }) {
  const [isLoading, setisLoading] = useState(true);
  const [currentLibraryInfo, setcurrentLibraryInfo] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setcurrentLibraryInfo(await libraryInfo);
        setisLoading(false);
      } catch (error) {
        console.error("Error fetching book data:", error);
        // 에러 처리 로직을 추가할 수 있습니다.
      }
    };

    fetchData();
  }, [libraryInfo]);
  return (
    <Shimmer isLoading={isLoading} className={"w-min h-min"}>
      <p className="font-NotoSansKRMedium text-[15.8px]">
        {currentLibraryInfo == undefined
          ? "서울 특별시 중구 91로"
          : currentLibraryInfo.address}
      </p>
    </Shimmer>
  );
}

export function Tel({ libraryInfo }) {
  const [isLoading, setisLoading] = useState(true);
  const [currentLibraryInfo, setcurrentLibraryInfo] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setcurrentLibraryInfo(await libraryInfo);
        setisLoading(false);
      } catch (error) {
        console.error("Error fetching book data:", error);
        // 에러 처리 로직을 추가할 수 있습니다.
      }
    };

    fetchData();
  }, [libraryInfo]);
  return (
    <Shimmer isLoading={isLoading} className={"w-min h-min"}>
      <p className="font-NotoSansKRMedium text-[15.8px]">
        {currentLibraryInfo == undefined
          ? "010-1234-5878"
          : currentLibraryInfo.tel}
      </p>
    </Shimmer>
  );
}

export function HomePageLink({ libraryInfo }) {
  const [isLoading, setisLoading] = useState(true);
  const [currentLibraryInfo, setcurrentLibraryInfo] = useState(undefined);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setcurrentLibraryInfo(await libraryInfo);
        setisLoading(false);
      } catch (error) {
        console.error("Error fetching book data:", error);
        // 에러 처리 로직을 추가할 수 있습니다.
      }
    };

    fetchData();
  }, [libraryInfo]);
  return (
    <Shimmer isLoading={isLoading} className={"w-min h-min"}>
      <Link
        className="font-NotoSansKRMedium text-[15.8px]"
        href={
          currentLibraryInfo == undefined
            ? "www.example.com"
            : currentLibraryInfo.homepage
        }
      >
        홈페이지
      </Link>
    </Shimmer>
  );
}

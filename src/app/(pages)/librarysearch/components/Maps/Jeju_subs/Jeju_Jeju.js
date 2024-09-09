"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMapId,
  setMapName,
  setPrevMapId,
  setAddressName,
} from "@redux/mapSlice";
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeju_Jeju() {
  const mapName = "제주시";
  const addressName = "제주도 제주시";
  const prevId = 39;
  // const mapId = 39010;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
    <svg
      viewBox="0 0 328 149"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <MapHoverAnimation>
        <path
          id="Jeju"
          d="M1 113.078L39.717 77.0309L40.7851 67.1514L54.1358 58.3399L61.8792 48.9945L88.8476 47.9264L111.277 36.9788L133.706 24.6962H165.214L182.569 16.9528L202.061 10.8115L229.03 9.7434L237.574 2L265.077 3.06806L271.218 18.0208L290.176 23.0941L298.721 23.6281L300.323 35.9108L298.721 46.8583L263.475 65.0153L252.26 66.0833L242.648 77.5649H216.213L207.936 84.2403L197.255 85.8424L181.501 97.591L155.601 98.125L148.392 105.334L114.748 106.936L113.146 117.35L87.7795 114.146L68.0205 117.884L38.916 138.444L32.2406 146.722L13.2826 134.973L1 138.978V113.078ZM317.679 27.3663L313.139 37.2458L319.281 44.4552L323.82 40.717L326.49 30.3035L317.679 27.3663Z"
          fill="black"
          stroke="#DAAA63"
          strokeWidth="2"
        />
      </MapHoverAnimation>
    </svg>
  );
}

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
export default function Jeollabukdo_Buan() {
  const mapName = "부안군";
  const addressName = "전라북도 부안군";
  const prevId = 35;
  // const mapId = 35380;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
<svg width="329" height="251" viewBox="0 0 329 251" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Buan" d="M184.239 249.314L152.74 211.981L85.659 217.815L52.4101 234.731L1.66162 192.149L3.41156 163.566L73.4094 119.818L96.742 116.318L141.657 65.5692L146.907 1.40454L216.905 8.40435L262.987 25.9038L274.653 42.2366L305.569 89.4852L327.152 109.901L317.235 124.484L264.737 126.817L232.071 147.817L223.905 189.232L229.738 245.23L184.239 249.314Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

  );
}

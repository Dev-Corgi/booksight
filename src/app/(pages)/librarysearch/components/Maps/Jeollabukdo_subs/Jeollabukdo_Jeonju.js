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
export default function Jeollabukdo_Jeonju() {
  const mapName = "전주시";
  const addressName = "전라북도 전주시";
  const prevId = 35;
  // const mapId = 35010;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
<svg width="329" height="292" viewBox="0 0 329 292" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jeonju" d="M308.435 132.131L284.572 74.8596L233.983 80.5866L193.893 1.36182H106.077L62.1696 10.907L27.8071 3.27086L2.03516 14.7251L31.6251 56.7237L25.8981 52.9057L2.03516 106.359L27.8071 169.357L75.5329 195.129L103.214 206.583L93.6687 228.537L86.0325 252.4L126.122 289.626L133.758 263.854L197.711 250.491L225.392 211.355L265.482 213.264L315.116 161.721L327.525 139.767L308.435 132.131Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

  );
}

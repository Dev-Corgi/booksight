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
export default function Jeollabukdo_Gochang() {
  const mapName = "고창군";
  const addressName = "전라북도 고창군";
  const prevId = 35;
  // const mapId = 35370;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
    <svg viewBox="0 0 329 322" fill="none" xmlns="http://www.w3.org/2000/svg">
    <MapHoverAnimation>
<path id="Gochang" d="M1.9873 163.912L56.5605 65.1607L112.433 40.4728L159.21 39.8231L189.745 13.1862L228.726 22.9314L230.675 9.93781L280.7 5.39002L291.745 9.28809L313.834 1.49194L318.382 53.4664L327.477 61.2625L320.98 84.0014L326.828 123.632L298.242 154.817L308.637 173.657L301.49 204.842C301.49 204.842 284.598 213.288 283.949 217.186C283.299 221.084 283.299 249.02 283.299 249.02L225.477 268.511L198.191 297.746L165.707 287.351L144.267 289.95L144.917 319.835C144.917 319.835 90.3439 309.441 89.0445 306.842C88.3948 304.243 85.1464 262.664 85.1464 262.664L67.6051 260.714L50.0637 222.383L57.2102 172.358L1.9873 163.912Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
    </svg>
    
  );
}

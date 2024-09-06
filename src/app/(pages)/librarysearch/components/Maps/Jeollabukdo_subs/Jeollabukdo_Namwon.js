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
export default function Jeollabukdo_Namwon() {
  const mapName = "남원시";
  const addressName = "전라북도 남원시";
  const prevId = 35;
  // const mapId = 35050;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
<svg width="328" height="231" viewBox="0 0 328 231" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Namwon" d="M3.48585 190.88L18.6356 169.762L29.6536 143.594L47.5578 141.758L50.3123 125.231L70.0529 121.099L88.4162 94.0133L84.2845 76.5682L88.4162 63.7138H118.716L114.125 47.1868L107.698 37.087L105.861 19.6418L120.552 14.1328L146.261 21.9372L151.311 12.2965L174.265 24.6917L194.005 25.6099L223.387 54.5321L225.682 76.1091L250.014 77.9454L264.245 55.9094V18.7237L272.968 2.65576L293.167 26.069L312.908 61.8775L303.726 77.9454L308.776 97.2269L326.68 105.949L317.499 133.035L291.79 156.449L288.576 177.107L299.594 196.389L266.54 224.852L244.045 202.357L207.319 178.485L171.051 177.107L137.538 223.016L113.666 211.08L86.1208 228.984L64.5439 215.67L46.1806 214.293L29.6536 195.012L17.7174 215.67L1.19043 209.702L3.48585 190.88Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

  );
}

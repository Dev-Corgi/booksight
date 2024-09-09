"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daejeon_Dong() {

  const mapName = "동구"
  const addressName = "대전광역시 동구"
  const prevId = 25
  // const mapId = 25010;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 671" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dong" d="M62.2427 668.938L9.29221 628.447L62.2427 528.775L40.4396 488.284L49.7838 443.12L34.2101 399.514L90.2754 369.924L37.3249 330.989L1.50537 290.498L3.06275 251.564L45.1117 212.629L74.7017 226.646L112.078 203.285L85.6033 122.302L169.701 2.38477L207.078 67.7942L231.996 28.86L288.061 36.6469L297.405 66.2369L326.995 81.8106L288.061 111.401L250.684 117.63L244.455 211.072L191.504 259.351L177.488 337.219L191.504 405.743L171.259 463.366L174.373 541.234L62.2427 668.938Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}

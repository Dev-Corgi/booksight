"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Namyangju() {

  const mapName = "남양주시"
  const addressName = "경기도 남양주시"
  const prevId = 31
  // const mapId = 31130;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 379" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Namyangju" d="M234.33 4.08514L279.036 37.8106L298.644 81.7322L307.271 119.379L326.879 142.124L320.605 182.909L286.095 225.261L282.958 287.222L243.742 343.693L245.311 375.85L220.997 377.418L191.193 341.34L161.389 309.183L125.311 263.693L108.84 260.556L72.7617 245.654L62.5656 185.261L42.9578 196.242L16.2911 193.105L6.09503 176.634L1.38916 123.301L39.0362 76.2419L43.7421 58.2028L61.7813 32.3204L108.056 30.7518L134.722 21.34L157.468 27.6145L202.173 1.73218L234.33 4.08514Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

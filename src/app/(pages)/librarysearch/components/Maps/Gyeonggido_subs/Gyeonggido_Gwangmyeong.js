"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Gwangmyeong() {

  const mapName = "광명시"
  const addressName = "경기도 광명시"
  const prevId = 31
  // const mapId = 31060;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 447" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gwangmyeong" d="M71.7576 176.315L1.60889 153.867L18.4445 94.9423L113.847 55.6588L195.219 2.34595L237.309 61.2706L327.099 277.329L256.95 392.373L234.503 445.686L116.653 428.85L88.5933 207.18L71.7576 176.315Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

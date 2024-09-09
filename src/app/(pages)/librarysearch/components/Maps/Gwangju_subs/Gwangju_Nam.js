"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gwangju_Nam() {

  const mapName = "남구"
  const addressName = "광주광역시 남구"
  const prevId = 24
  // const mapId = 24030;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 240" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Nam" d="M124.345 148.297L165.373 116.842L232.386 97.696L257.003 82.6523L255.635 37.5213L282.987 3.33121L306.237 1.96362L315.81 25.2129L328.118 66.241L311.707 93.5931L310.339 152.4L248.797 179.752L166.741 200.266L116.14 238.559L29.9805 234.456L2.62842 213.942L88.7875 146.93L124.345 148.297Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}

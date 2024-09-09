"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Yongsan() {

  const mapName = "용산구"
  const addressName = "서울특별시 용산구"
  const prevId = 11
  // const mapId = 11030;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 238" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yongsan" d="M64.0713 198.948L1.47705 126.965L104.757 1.77661L214.297 4.90633L236.205 20.5549L305.059 36.2034L326.967 108.187L292.54 158.262L192.389 236.505H126.665L64.0713 198.948Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

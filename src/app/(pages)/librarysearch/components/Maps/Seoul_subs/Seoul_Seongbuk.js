"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Seongbuk() {

  const mapName = "성북구"
  const addressName = "서울특별시 성북구"
  const prevId = 11
  // const mapId = 11080;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 269" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Seongbuk" d="M208.697 113.646L131.975 111.321L108.725 60.1728L20.3782 2.04956L1.77881 32.2736L27.353 85.747L41.3026 143.87L20.3782 164.795L22.7032 183.394L80.8264 201.993L127.325 267.091H164.524L180.798 229.893L222.647 206.643L264.496 162.47L327.269 148.52L320.294 113.646L280.77 88.0719L243.571 55.5229L208.697 113.646Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

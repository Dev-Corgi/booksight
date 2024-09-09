"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Jungnang() {

  const mapName = "중랑구"
  const addressName = "서울특별시 중랑구"
  const prevId = 11
  // const mapId = 11070;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 541" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jungnang" d="M1.49316 72.2689L31.0832 539.791L131.689 522.037L326.983 326.743L315.147 60.4329L285.557 1.25293L113.935 7.1709L1.49316 72.2689Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

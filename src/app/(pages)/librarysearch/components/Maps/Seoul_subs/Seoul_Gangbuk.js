"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Gangbuk() {

  const mapName = "강북구"
  const addressName = "서울특별시 강북구"
  const prevId = 11
  // const mapId = 11090;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="328" height="473" viewBox="0 0 328 473" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gangbuk" d="M207.069 245.271L124.036 195.451L147.285 85.8476L124.036 2.81445L31.039 95.8116L1.14697 285.127L4.46831 324.983L114.072 391.41L163.892 467.8L273.496 471.122L326.637 388.088L207.069 245.271Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

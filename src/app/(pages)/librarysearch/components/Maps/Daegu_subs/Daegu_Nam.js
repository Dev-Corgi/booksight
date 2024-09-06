"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daegu_Nam() {

  const mapName = "남구"
  const addressName = "대구광역시 남구"
  const prevId = 22
  // const mapId = 22040;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="328" height="410" viewBox="0 0 328 410" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Nam" d="M37.0117 149.49L1.34155 287.711L224.28 408.098L308.997 332.299L326.832 73.6903L121.728 55.8552V2.3501L45.9292 46.9378L37.0117 149.49Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>











  );
}

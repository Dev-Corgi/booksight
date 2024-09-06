"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Sancheong() {

  const mapName = "산청군"
  const addressName = "경상남도 산청군"
  const prevId = 38
  // const mapId = 38370;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="328" height="356" viewBox="0 0 328 356" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Sancheong" d="M146.397 319.309L119.32 353.155H66.2937L38.0884 324.95L1.42139 301.821L3.67781 249.359L31.8832 225.103L76.4477 122.999L91.1145 95.3581L95.6273 58.1271L102.397 37.8192L126.653 1.71631L143.012 10.1779L150.91 37.8192L207.321 57.563L265.424 152.897L293.065 155.718L324.655 197.462L326.911 232.436L298.706 244.282L292.501 265.154L261.475 271.924L232.141 308.027L222.551 330.027H184.756L176.295 354.283L163.32 352.027L155.987 327.77L146.397 319.309Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>
















  );
}

"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Yeongju() {

  const mapName = "영주시"
  const addressName = "경상북도 영주시"
  const prevId = 37
  // const mapId = 37060;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="493" viewBox="0 0 329 493" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yeongju" d="M324.081 483.557L321.122 367.417L312.984 341.525L327.04 297.14L305.587 269.77L253.065 275.688V303.058L227.913 270.509L246.407 189.137L267.86 126.258L287.833 26.3919L236.79 1.9801L213.118 29.3509L159.856 30.0906L121.389 98.8873L99.1968 106.285L17.8243 185.438L1.5498 230.563L14.8653 263.112L23.0026 286.784L49.6335 319.333L45.1951 392.568L87.3608 403.664L126.568 405.144L153.199 452.488L171.692 475.42L241.229 472.461L272.298 490.955L292.271 480.598L324.081 483.557Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}

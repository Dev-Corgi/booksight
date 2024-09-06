"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daegu_Dong() {

  const mapName = "동구"
  const addressName = "대구광역시 동구"
  const prevId = 22
  // const mapId = 22020;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="402" viewBox="0 0 329 402" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dong" d="M104.517 356.823L51.2037 386.286L30.1591 356.823L56.8156 304.913L68.0394 258.615L49.8007 188.466L2.09961 69.2134L55.4126 1.87061H197.113L258.844 20.1093L278.486 77.6312L286.903 223.541L327.59 251.6L320.575 373.659L279.888 400.315L173.262 389.091L164.845 359.629L104.517 356.823Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>











  );
}

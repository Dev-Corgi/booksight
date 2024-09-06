"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Yangsan() {

  const mapName = "양산시"
  const addressName = "경상남도 양산시"
  const prevId = 38
  // const mapId = 38100;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="308" viewBox="0 0 329 308" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id=" Yangsan" d="M248.244 199.588L237.394 269.791L149.959 306.808L100.816 267.877L95.0721 236.604L54.8645 205.332L12.7422 201.502L1.89258 166.4L23.5919 138.319L52.9498 140.234L44.0149 108.961L89.9664 92.3673L88.0517 42.5865L109.751 1.74072L135.28 22.1636L182.508 27.9076L218.886 54.0744L265.476 119.811L306.321 117.258L327.383 145.339L312.704 173.421L306.321 201.502L284.622 216.181L262.923 199.588H248.244Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>
















  );
}

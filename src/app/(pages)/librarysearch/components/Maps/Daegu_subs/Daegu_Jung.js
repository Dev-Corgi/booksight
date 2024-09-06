"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daegu_Jung() {

  const mapName = "중구"
  const addressName = "대구광역시 중구"
  const prevId = 22
  // const mapId = 22010;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="223" viewBox="0 0 329 223" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jung" d="M1.38086 208.154L28.887 56.8705L239.768 1.85791L326.871 125.636L212.262 221.908L1.38086 208.154Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>











  );
}

"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Seongnam() {

  const mapName = "성남시"
  const addressName = "경기도 성남시"
  const prevId = 31
  // const mapId = 31020;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="328" height="345" viewBox="0 0 328 345" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Seongnam" d="M31.2957 120.391L1.35059 241.473L93.7898 289.646L158.888 343.026H194.041V307.873L261.743 247.983L272.158 194.603L326.841 99.5596L274.762 1.9126L257.837 12.3283L210.966 1.9126L186.229 31.8577L141.962 34.4616L79.4682 122.995L41.7114 107.371L31.2957 120.391Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

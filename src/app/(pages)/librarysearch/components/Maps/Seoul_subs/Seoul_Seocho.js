"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Seocho() {

  const mapName = "서초구"
  const addressName = "서울특별시 서초구"
  const prevId = 11
  // const mapId = 11220;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 350" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Seocho" d="M43.4049 58.6656L105.854 1.89404L139.917 87.0514L149.378 128.684L191.011 166.532L217.504 217.626L247.782 211.949L261.029 193.025L308.339 196.81V227.088L327.262 238.442L255.352 348.2L198.58 331.169L166.41 242.227L49.0821 234.657L32.0506 187.348L37.7277 109.76L22.5887 88.9438L3.66485 81.3742L1.77246 60.558L43.4049 58.6656Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

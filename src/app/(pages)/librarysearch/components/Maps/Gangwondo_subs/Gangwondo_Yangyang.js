"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Yangyang() {

  const mapName = "양양군"
  const addressName = "강원도 양양군"
  const prevId = 32
  const mapId = 32410;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 324" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M189.685 274.918L142.707 322.455L111.389 283.866L85.6626 290.577L61.0552 284.985L54.9033 248.073L56.0218 210.044L75.0367 189.351L77.2737 142.932L58.2589 125.595L11.2809 117.206L1.77344 78.0579L9.04385 56.2467L47.6328 38.9096L71.1218 26.0466L99.0848 24.9281L129.844 7.59096L161.722 1.99835L165.078 26.6059L210.937 81.9727L213.174 100.428L246.171 136.221L260.152 138.458L262.389 162.506L283.641 185.436L292.03 205.01L327.263 257.021L283.641 259.259L267.422 267.088L213.174 284.425L189.685 274.918Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}

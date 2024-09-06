"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Wonju() {

  const mapName = "원주시"
  const addressName = "강원도 원주시"
  const prevId = 32
  const mapId = 32020;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="311" viewBox="0 0 329 311" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M290.988 243.649L314.036 220.602L323.443 216.368L322.032 204.139L327.206 189.087L313.565 175.447L297.573 194.732L266.529 196.143L254.3 170.273L220.434 159.455L212.438 148.636L211.027 117.122L232.663 111.478L229.841 89.8412L244.893 79.023L218.082 48.9199L163.99 32.4572L155.994 43.2755L134.358 22.5796L132.947 1.88379L119.306 7.528L115.073 22.5796L92.0252 39.0423L93.4363 87.9598L77.444 95.956L70.8589 67.264L46.4001 58.3271L16.7674 116.652L18.6489 163.218L10.1823 228.598L1.71582 264.816L46.4001 309.03L88.2623 293.978L115.073 299.622L133.887 285.982L135.298 269.519L131.065 235.183L159.287 214.487L187.509 220.131L201.149 250.234V265.286L248.185 255.879L265.589 227.187L290.988 243.649Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}

"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Uljin() {

  const mapName = "울진군"
  const addressName = "경상북도 울진군"
  const prevId = 37
  // const mapId = 37420;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 511" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id=" Uljin" d="M288.411 494.879L233.693 496.007L218.462 508.982L192.513 492.622L161.487 486.981L176.718 443.545L156.41 414.212L191.949 369.647L159.795 325.083L157.538 290.108L144.564 284.467L128.204 301.954L102.255 282.21L60.5116 272.621L45.2807 235.389L1.28027 206.056L9.74189 185.184L3.53667 140.619L42.4601 118.619L62.768 129.337L83.0759 104.517L119.743 103.388L117.486 68.4137L155.282 31.1826L178.974 28.9262L202.667 1.849H225.231L241.59 47.5417L281.642 85.901L266.411 104.517L272.052 155.85L265.847 178.979L279.949 210.569L274.308 251.185L279.949 301.39L309.283 330.724L325.642 380.929L321.129 398.417L326.77 420.417L321.693 467.802L288.411 494.879Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}

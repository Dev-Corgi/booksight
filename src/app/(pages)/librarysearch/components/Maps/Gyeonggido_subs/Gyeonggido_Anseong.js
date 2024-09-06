"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Anseong() {

  const mapName = "안성시"
  const addressName = "경기도 안성시"
  const prevId = 31
  // const mapId = 31220;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="330" height="249" viewBox="0 0 330 249" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Anseong" d="M116.417 220.989L145.957 247.247L156.351 236.306L172.762 205.125H209.414L232.937 183.79L223.637 171.755L225.278 147.138L254.819 142.215L278.342 123.068V98.9986L322.105 90.2459L328.122 57.4234L312.258 28.4302L284.906 21.3186L274.512 5.45445L261.383 9.28372L250.442 31.1654L244.972 55.2352L220.902 48.6707H191.909L171.668 31.7124L157.992 42.1062L132.828 18.0363L120.246 2.71924L113.135 25.1479L81.9534 43.7474L66.0892 66.7231L33.8137 58.5175L12.4791 48.1236L7.55571 78.2109L22.3258 89.1518L2.63232 112.128L37.0959 120.88L33.8137 127.445L37.0959 143.856L31.0785 150.968L25.6081 173.943L69.3715 191.996L89.612 218.801L116.417 220.989Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

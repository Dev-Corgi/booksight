"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Bonghwa() {

  const mapName = "봉화군"
  const addressName = "경상북도 봉화군"
  const prevId = 37
  // const mapId = 37410;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 278" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Bonghwa" d="M215.228 273.573L202.14 276.106L183.565 256.686L158.657 254.997L114.33 227.979L102.087 233.889L95.7547 221.646L78.0236 232.2L53.1159 240.221L50.5829 227.134L57.7597 205.182L45.5169 189.562L15.5431 192.939V208.559L1.18945 189.984L11.7436 143.545L23.9865 107.661L35.3849 50.6689L63.67 57.8457L60.2927 43.0699L84.3561 16.0513L110.953 34.6266L134.172 40.9591L154.436 37.5817L168.789 6.76362L189.898 19.0064L204.251 13.9404L250.267 24.4946L253.645 13.0961L267.154 1.69763L284.885 5.91929L326.679 41.8034L309.793 61.223L296.284 52.3576L267.154 68.822L271.798 102.173L265.465 117.793L298.394 139.746L309.793 167.609L290.373 184.918L280.663 206.026L249.845 226.29L232.959 244.865L206.362 249.931L209.739 263.018L215.228 273.573Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}

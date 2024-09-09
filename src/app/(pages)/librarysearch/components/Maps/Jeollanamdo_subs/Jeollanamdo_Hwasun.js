"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Hwasun() {

  const mapName = "화순군"
  const addressName = "전라남도 화순군"
  const prevId = 36
  // const mapId = 36370;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 427" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Hwasun" d="M1.0752 382.015L33.743 357.663L46.2162 289.952L65.2229 254.314L45.0283 219.864L61.0652 174.129L63.441 146.807L82.4478 139.68L108.582 158.093L115.116 147.995L139.468 136.71L166.79 93.9449L184.609 89.1932L225.592 111.17L234.501 89.1932L217.277 44.6462H235.689L251.726 26.2334L292.709 25.0455L312.904 1.8811L326.565 23.8576L324.189 49.3979L326.565 92.163L312.904 123.049L318.844 164.626L315.28 209.173L316.468 259.66L280.236 274.509L230.344 321.431V364.791L219.059 389.143L206.585 412.307L138.28 411.119L128.183 399.834L95.5149 425.374L69.3806 401.022L59.2833 367.76L34.337 382.609H1.0752V382.015Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}

"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daegu_Gunwi() {

  const mapName = "군위군"
  const addressName = "대구광역시 군위군"
  const prevId = 22
  // const mapId = 37310;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="253" viewBox="0 0 329 253" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gunwi" d="M193.979 251.763L197.627 206.625L221.791 174.71L250.515 184.285L268.752 188.844L291.549 151.914L327.066 145.531L323.464 115.439L316.625 102.217L286.989 85.3475L258.266 100.393H213.128L169.815 83.5237L150.666 90.3627L148.842 60.2712L112.367 35.6509L93.2181 37.4746L88.2028 21.517L54.4638 17.8695L36.2265 1H25.7401L1.57568 29.2678L2.48755 56.6237L26.652 84.8915L50.3604 79.4203L58.1113 112.703L78.1723 102.217L96.4096 122.278L91.8503 135.5L105.984 165.592L108.72 206.17L147.018 196.595L147.93 251.763H193.979Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>











  );
}

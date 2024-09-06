"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Gimpo() {

  const mapName = "김포시"
  const addressName = "경기도 김포시"
  const prevId = 31
  // const mapId = 31230;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="296" viewBox="0 0 329 296" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gimpo" d="M315.19 249.089L166.875 146.472L192.53 95.1631L175.694 59.8883L169.28 1.36426L141.221 4.57107L110.756 44.656L52.2322 39.8459L35.3965 19.8034L1.7251 21.4067L10.5438 47.8629L13.7506 69.5087L8.94039 77.5257L17.7591 127.231V152.084L25.7761 183.35L24.1727 211.41L49.8271 237.866V262.718L57.8441 285.968L128.394 254.701L151.643 213.013L251.054 287.571L311.983 293.985L327.215 264.322L315.19 249.089Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Pyeongtaek() {

  const mapName = "평택시"
  const addressName = "경기도 평택시"
  const prevId = 31
  // const mapId = 31070;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 269" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Pyeongtaek" d="M117.977 265.962L190.308 229.173L225.226 241.021L271.369 220.444L294.44 189.89H314.393L320.629 163.701L327.488 155.595L325.617 140.006L327.488 129.406L288.204 119.429L310.652 93.2405L293.816 83.2639L299.428 46.4747L293.816 40.2393V9.68568L283.839 1.57959L273.863 14.0505L237.074 16.5447L218.367 8.43861L191.555 22.1566L179.708 78.2755L136.06 88.2523L92.4114 83.8874L53.1282 140.63L14.4684 146.242L1.99756 159.96L40.6573 171.807L50.634 211.714L98.6469 240.397L109.247 267.833H117.977V265.962Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Hapcheon() {

  const mapName = "합천군"
  const addressName = "경상남도 합천군"
  const prevId = 38
  // const mapId = 38400;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="448" viewBox="0 0 329 448" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Hapcheon" d="M113.54 446.292L81.8362 403.492H59.1153L22.6562 345.369L1.52051 306.796L33.2241 236.52L43.7919 187.379L78.6659 150.392L101.387 144.051L73.9103 61.0932L69.1548 45.7698L107.199 1.38477L125.164 9.31066L141.545 45.2414L159.51 54.2241L181.702 85.9276L195.969 127.671L159.51 154.09L163.209 165.187L184.873 173.112L192.799 182.095L216.048 186.322L232.957 174.169L280.512 172.056L307.988 185.265L327.011 212.742L314.329 230.707L315.914 261.354L305.346 278.263L322.255 305.739V324.233L260.433 310.495L222.389 336.386L193.855 346.954L190.685 386.583L183.288 420.4L148.414 423.571L113.54 446.292Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}

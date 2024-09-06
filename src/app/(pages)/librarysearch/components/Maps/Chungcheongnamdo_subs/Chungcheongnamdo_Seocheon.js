"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongnamdo_Seocheon() {

  const mapName = "서천군"
  const addressName = "충청남도 서천군"
  const prevId = 34
  // const mapId = 34340;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="330" height="203" viewBox="0 0 330 203" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Seocheon" d="M181.74 201.949L207.874 197.791L232.821 170.469L277.962 168.687L314.787 139.583L327.26 119.982L305.284 122.358L299.344 87.3147L281.525 64.1502L258.361 55.2408L257.767 18.4153L197.183 22.573L165.109 1.78442L141.351 14.8515L82.5488 20.7911L64.73 2.97233L25.5287 3.56632L17.2132 27.9187L1.77026 36.8281L2.36421 59.3985L20.183 49.3012L49.881 62.3683L70.0756 66.5261L103.337 101.57L122.344 103.352L106.901 124.14L118.78 138.989L130.066 152.056L140.163 168.687L146.696 198.979L181.74 201.949Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>










  );
}

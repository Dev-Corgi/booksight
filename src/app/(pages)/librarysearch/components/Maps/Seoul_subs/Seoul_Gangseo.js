"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Gangseo() {

  const mapName = "강서구"
  const addressName = "서울특별시 강서구"
  const prevId = 11
  // const mapId = 11160;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 248" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gangseo" d="M181.287 195.464L226.608 244.905L271.929 246.965L292.53 193.404L327.551 189.284V160.443L245.148 78.0402L214.248 73.9201L111.244 1.81787L2.06104 172.803L144.205 234.605L181.287 195.464Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

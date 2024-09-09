"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Mapo() {

  const mapName = "마포구"
  const addressName = "서울특별시 마포구"
  const prevId = 11
  // const mapId = 11140;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 227" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Mapo" d="M216.087 197.21L107.59 145.921L46.4377 96.6043L3.03906 49.2603L50.3831 51.2329L103.645 1.91626L119.426 3.88893L152.962 37.4243L168.743 43.3423L229.896 108.44L291.048 120.276L306.83 118.304L328.529 149.866L253.568 224.828L216.087 197.21Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Bucheon() {

  const mapName = "부천시"
  const addressName = "경기도 부천시"
  const prevId = 31
  // const mapId = 31050;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 451" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Bucheon" d="M284.661 444.159L300.539 388.588L266.137 277.444L327.001 227.166L282.015 78.9748L88.8378 2.2334L67.6677 166.301L1.51123 211.288L12.0963 333.016L128.532 449.451L284.661 444.159Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

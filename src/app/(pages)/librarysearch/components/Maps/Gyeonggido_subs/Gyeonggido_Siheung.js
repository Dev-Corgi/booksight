"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Siheung() {

  const mapName = "시흥시"
  const addressName = "경기도 시흥시"
  const prevId = 31
  // const mapId = 31150;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="311" viewBox="0 0 329 311" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Siheung" d="M2.13428 260.928L56.3826 199.604L82.3275 161.866L158.983 13.2726L228.562 1.47949L258.045 10.914L265.121 30.9623L278.093 117.052L327.624 124.128L322.907 151.252L327.624 167.763C327.624 167.763 322.485 187.403 314.652 197.245C295.521 221.285 237.997 214.935 237.997 214.935L190.824 253.852L123.603 260.928L64.6378 309.28L2.13428 260.928Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

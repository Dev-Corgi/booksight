"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daegu_Dalseo() {

  const mapName = "달서구"
  const addressName = "대구광역시 달서구"
  const prevId = 22
  // const mapId = 22070;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 323" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Dalseo" d="M57.0702 201.124L104.656 229.676L163.663 288.683L262.643 321.041L302.615 258.227L327.36 191.607L232.188 140.214L247.415 69.7859L251.222 37.4273L226.477 41.2341H186.505L121.788 1.26172L17.0977 16.4894L13.2908 142.117L1.87012 185.896L57.0702 201.124Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>











  );
}

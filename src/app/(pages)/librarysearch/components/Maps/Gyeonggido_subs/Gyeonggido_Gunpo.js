"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Gunpo() {

  const mapName = "군포시"
  const addressName = "경기도 군포시"
  const prevId = 31
  // const mapId = 31160;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="356" viewBox="0 0 329 356" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gunpo" d="M104.852 301.047L218.641 353.972L321.845 113.162L327.137 68.1758L231.872 2.01929L147.192 9.95816L83.6815 70.8218L46.6339 81.4071L1.64746 261.353L104.852 301.047Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

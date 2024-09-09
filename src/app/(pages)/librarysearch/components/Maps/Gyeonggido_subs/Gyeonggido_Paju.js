"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Paju() {

  const mapName = "파주시"
  const addressName = "경기도 파주시"
  const prevId = 31
  // const mapId = 31200;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 375" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Paju" d="M8.98184 206.946L32.7017 194.427L88.0482 189.156L42.585 114.043L1.0752 111.407L2.39297 61.9909L46.5384 90.323L67.6227 67.262L66.305 53.4254L85.4127 26.411L97.9315 44.201L106.497 87.6875L101.226 110.749L119.016 112.066L125.605 137.763L144.712 131.174L157.231 52.1076L173.703 27.7288L212.578 46.8365L216.531 8.62109L242.887 25.0933L271.878 23.7755L292.303 2.03223L326.565 23.7755L286.373 82.4164L265.948 108.113L258.7 181.908L252.111 202.334L234.321 199.698L229.05 224.077L233.003 258.339L252.111 270.858L250.793 316.98L228.391 315.662L205.989 343.994L179.633 328.84L145.371 335.429L127.581 328.84L109.791 361.784L63.0105 365.738L31.384 373.644L8.98184 371.009L20.1829 346.63L6.34628 317.639L1.0752 269.54L8.98184 206.946Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Jung() {

  const mapName = "중구"
  const addressName = "서울특별시 중구"
  const prevId = 11
  // const mapId = 21010;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 175" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jung" d="M2.12793 66.1403L45.0497 16.0649L123.74 1.75757L163.085 23.2185L327.618 16.0649L316.887 80.4475L273.966 123.369L252.505 173.445L195.276 151.984L148.777 119.792H30.7424L2.12793 66.1403Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}

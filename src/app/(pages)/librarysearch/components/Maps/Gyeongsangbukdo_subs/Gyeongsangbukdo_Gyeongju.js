"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Gyeongju() {

  const mapName = "경주시"
  const addressName = "경상북도 경주시"
  const prevId = 37
  // const mapId = 37020;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 336" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gyeongju" d="M234.581 299.402L200.078 322.265L178.462 316.03L175.968 282.358L145.206 274.045L113.198 275.292L107.378 270.303L93.2443 282.358L70.7967 286.1L55.416 317.277L69.5496 334.32L49.1805 330.579L35.8782 295.661L25.0702 289.425L1.37549 244.946L26.3173 175.109L32.137 168.873L34.6312 133.955L51.259 104.856H73.7066L85.7617 118.159L99.0641 113.17L83.6833 91.554L76.6164 47.0745L98.2326 52.0629L94.4914 30.4466L99.0641 14.6502L112.366 15.8973L127.747 29.1996L153.936 22.1327L159.756 3.8421L180.125 1.3479L185.945 14.6502L177.631 38.7605L202.572 77.4203L219.2 131.877L228.761 143.932L232.502 159.728L262.433 162.222L273.241 143.932L295.688 168.042L324.371 183.839L326.865 197.141L313.563 212.937L311.069 255.338L302.755 284.437L304.002 297.739L283.633 320.603L234.581 299.402Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}

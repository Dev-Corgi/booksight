"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Daegu_Suseong() {

  const mapName = "수성구"
  const addressName = "대구광역시 수성구"
  const prevId = 22
  // const mapId = 22060;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 254" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Suseong" d="M32.2335 157.856L38.4333 67.9589L77.1821 33.86L136.08 1.31104L201.178 4.41091L210.478 36.9599L328.274 49.3595L283.326 123.757L291.076 207.455L233.727 252.403L142.28 219.854L83.382 193.505L2.78442 184.205L32.2335 157.856Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>











  );
}

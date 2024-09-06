"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Yongin() {

  const mapName = "용인시"
  const addressName = "경기도 용인시"
  const prevId = 31
  // const mapId = 31190;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="290" viewBox="0 0 329 290" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yongin" d="M15.3982 36.6418L1.81348 25.2307L9.96429 1.86499L48.545 21.9704L75.7144 44.2493L105.601 42.0757L130.597 26.3175L137.661 37.7286L155.049 42.0757L158.309 18.71L209.388 35.5551L208.301 105.109L248.512 101.849L247.425 144.776L255.576 167.055L282.746 177.38L283.832 195.311L307.741 196.398L315.892 218.677L327.303 229.002L316.979 252.911L311.545 276.82L287.636 270.299L256.663 268.126L239.274 253.454L225.69 263.778L198.52 238.783L188.196 225.198L181.132 247.477L152.332 266.495L134.944 288.774L102.884 280.624L75.7144 267.039L78.9747 238.783L94.733 209.44L112.121 196.942L102.884 161.078L51.8053 156.731L40.3941 142.059L57.2392 111.63L41.4809 101.305L56.1524 84.4601L36.5904 80.113L32.2433 66.5282L18.6586 62.1811L15.3982 36.6418Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}

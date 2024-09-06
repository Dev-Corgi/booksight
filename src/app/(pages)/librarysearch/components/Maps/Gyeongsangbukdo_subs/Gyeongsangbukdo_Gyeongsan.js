"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Gyeongsan() {

  const mapName = "경산시"
  const addressName = "경상북도 경산시"
  const prevId = 37
  // const mapId = 37100;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="436" viewBox="0 0 329 436" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gyeongsan" d="M287.881 333.24L249.975 340.657L200.534 359.609L124.724 364.553L89.2906 433.772L37.377 404.931L1.94385 364.553L13.4803 338.185L4.41595 306.872L34.9049 282.975V237.654L48.9133 201.396L81.8743 182.444V110.754L57.9776 94.2731L53.0334 8.57451L100.003 1.1582L126.372 27.5271L194.766 46.4796L199.71 104.161L216.19 140.419L211.246 169.259L251.624 217.053L327.434 229.413L318.37 279.679L287.881 333.24Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}

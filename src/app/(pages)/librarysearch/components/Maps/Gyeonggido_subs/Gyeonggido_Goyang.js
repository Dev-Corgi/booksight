"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Goyang() {

  const mapName = "고양시"
  const addressName = "경기도 고양시"
  const prevId = 31
  // const mapId = 31100;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="329" height="209" viewBox="0 0 329 209" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Goyang" d="M17.6341 59.5457L37.7176 62.3158L70.9591 54.0055L120.129 49.8503L138.827 15.2237L157.526 22.149L193.537 15.2237L221.239 31.1519L244.785 1.37305L264.868 4.14313L257.943 24.2266V69.9337L251.017 90.0171L280.104 85.8619L296.032 65.7785L327.888 84.4769L320.963 127.414L314.038 143.342L295.339 127.414L282.181 104.56L260.713 128.799L244.785 134.339L242.014 186.279L221.931 191.819L206.003 207.748L178.302 206.363L142.29 182.124L130.517 166.196L2.39844 77.5516L17.6341 59.5457Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

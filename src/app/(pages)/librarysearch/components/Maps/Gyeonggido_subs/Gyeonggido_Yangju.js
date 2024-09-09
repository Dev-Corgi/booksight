"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Yangju() {

  const mapName = "양주시"
  const addressName = "경기도 양주시"
  const prevId = 31
  // const mapId = 31260;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 532" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yangju" d="M156.696 17.7126L102.084 1.32886L62.7631 46.111L50.7483 168.443L39.8259 202.302L10.3351 197.934L1.59717 238.347L8.15064 295.144L39.8259 315.896L37.6414 392.354L21.2576 426.213V498.302L10.3351 529.977L56.2096 523.424L81.3313 491.748L131.575 521.239L173.08 473.18L154.512 412.014L131.575 369.417L168.711 339.926L216.77 350.848L267.014 332.28L312.888 311.527L327.087 235.07L308.519 158.613L210.217 137.86L193.833 90.8932L145.774 67.956L156.696 17.7126Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

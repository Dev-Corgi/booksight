"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Taebaek() {

  const mapName = "태백시"
  const addressName = "강원도 태백시"
  const prevId = 32
  const mapId = 32050;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="330" height="524" viewBox="0 0 330 524" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M77.5595 176.697L90.3817 162.888L92.3545 119.49L139.698 18.8837L197.892 2.11609L187.043 30.7197L211.701 73.1321L198.878 111.599L213.673 134.285L198.878 172.752L176.193 184.588L204.796 207.273L196.906 249.686L225.51 300.975L297.512 321.688L328.088 365.087L326.115 430.185L294.553 456.816L286.662 483.447L243.263 475.556L179.152 458.788L145.616 470.624L96.2998 442.021L69.6687 514.023L15.4205 521.914L11.4751 489.365L38.1062 446.952L2.59814 420.321L27.2565 405.526L38.1062 354.237L83.4776 346.346L70.6551 250.672L77.5595 176.697Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}

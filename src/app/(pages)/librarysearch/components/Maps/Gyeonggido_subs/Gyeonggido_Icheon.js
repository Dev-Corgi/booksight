"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Icheon() {

  const mapName = "이천시"
  const addressName = "경기도 이천시"
  const prevId = 31
  // const mapId = 31210;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 432" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Icheon" d="M205.359 364.114L197.013 409.637L230.397 418.742L252.399 430.122L259.987 387.634L278.954 383.082L297.922 390.669L296.405 367.149L326.754 356.527L323.719 273.068L275.92 230.579L253.917 252.582L209.152 248.03L210.67 229.062V169.123L223.568 150.155L215.981 112.219L231.914 84.1468L191.702 29.5191L168.182 20.4145L147.696 1.44653L118.865 4.48135L66.5134 51.5219L44.5106 54.5568L2.78109 116.013L1.26367 175.952L12.6445 207.059L49.0629 226.027L52.0978 246.512L85.4815 248.03L96.8622 279.137L112.795 293.553L131.763 292.035L146.179 314.038L181.08 321.626L205.359 364.114Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

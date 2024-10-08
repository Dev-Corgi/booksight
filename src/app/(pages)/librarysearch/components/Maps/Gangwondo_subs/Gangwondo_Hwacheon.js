"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Hwacheon() {

  const mapName = "화천군"
  const addressName = "강원도 화천군"
  const prevId = 32
  const mapId = 32370;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 314" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M99.191 242.694L97.2903 263.127L108.219 277.857L95.3897 293.537L77.3333 304.466L76.3829 311.118L29.3413 307.317L25.54 299.239L20.7883 274.531L12.7105 221.312L2.73193 212.284L47.3977 202.305L54.5252 182.823L44.5467 170.944L54.5252 136.257L78.2836 129.604L79.234 111.073L100.141 102.995L120.098 69.7331L105.368 55.0029L122.474 26.4929L120.574 19.8405L132.453 20.7908L178.544 23.6418L187.572 10.8123L207.529 16.5143L229.387 1.78412L239.366 6.5358L255.521 26.0177L268.351 32.67L291.159 103.47L288.308 131.03L307.315 138.157L309.215 214.659L324.421 230.34L328.222 258.85L314.442 270.729H292.584L287.833 286.41L294.01 290.211L252.195 312.069L232.238 289.261L222.26 279.282L207.529 281.183L200.402 292.112L185.196 277.382L169.991 279.282L158.112 285.935L153.36 265.027L138.155 269.779L123.425 255.999L112.496 244.12L99.191 242.694Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}

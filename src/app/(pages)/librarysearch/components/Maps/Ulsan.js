"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../MapHoverAnimation";
export default function Ulsan() {

  const mapName = "울산광역시"
  const addressName = "울산광역시"
  const prevId = 10
  const mapId = 26;

  const dispatch = useDispatch();

  const handlePathClick = (id) => {
    dispatch(setMapId(id))
  };

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="326" height="335" viewBox="0 0 326 335" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="&#236;&#154;&#184;&#236;&#130;&#176;&#234;&#180;&#145;&#236;&#151;&#173;&#236;&#139;&#156; 1">
<g id="&#235;&#160;&#136;&#236;&#157;&#180;&#236;&#150;&#180; 1">
<g id="Group">
<MapHoverAnimation>
<path id="Buk" onClick={() => handlePathClick(26040,"북구")} d="M245.521 109.477H227.87L215.651 116.718L212.935 79.155L214.293 60.5995L251.857 35.708L304.807 57.8841L311.143 81.4178L322.005 97.2578L320.648 114.908L312.954 125.317L297.566 129.39L283.989 142.515V167.407L250.951 142.515L247.783 118.981L245.521 109.477Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Jung" onClick={() => handlePathClick(26010,"중구")} d="M240.995 144.325L217.461 144.778L212.483 149.304L201.621 142.062L190.759 140.705L188.949 123.054L205.694 115.361L216.103 116.718L228.323 109.477H245.973L248.689 121.244L251.857 142.968L240.995 144.325Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Nam" onClick={() => handlePathClick(26020,"남구")} d="M273.127 205.423L253.214 218.095L240.995 199.087L222.892 188.677L198.453 161.976L180.35 156.545L191.212 141.61L202.074 142.968L212.935 150.209L217.914 145.683L251.404 143.873L277.201 162.881L272.675 176.005L271.317 188.677L273.127 205.423Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Ulju" onClick={() => handlePathClick(26310,"울주군")} d="M260.003 300.01L255.477 277.834L260.003 264.257L256.835 249.775L263.171 238.008L252.762 218.095L240.542 199.087L218.366 187.32L197.548 161.523L179.445 156.092L190.307 141.157L188.496 123.507L207.504 114.908L216.103 116.718L213.388 79.1549L212.935 62.8623L191.664 52.4531L188.949 17.6051L155.459 8.55362L120.611 9.91134L114.275 4.48047L98.8871 17.6051L74.4481 21.6782L57.703 55.6211L69.9224 73.2715L50.9144 73.724L23.76 84.1332L34.6218 100.426L30.5486 120.339L3.39429 136.179V151.114L18.7817 164.238L26.4755 171.932L59.9658 176.458L90.2882 198.634L121.968 242.081L150.933 240.271L165.868 260.184L155.459 280.097L182.613 284.17L194.832 279.644L207.957 290.959L209.767 321.281L219.271 329.88L243.71 309.514L257.287 306.346L260.003 300.01Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Dong" onClick={() => handlePathClick(26030,"동구")} d="M284.442 167.859L279.463 180.984L288.515 185.509L290.325 207.685L305.713 195.013L314.311 179.173L314.764 149.756L320.647 134.821L313.406 125.77L298.019 129.843L284.442 142.968V167.859Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</g>
</g>
</g>
</svg>

  );
}

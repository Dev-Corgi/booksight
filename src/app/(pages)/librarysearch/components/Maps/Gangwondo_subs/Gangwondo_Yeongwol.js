"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Yeongwol() {

  const mapName = "영월군"
  const addressName = "강원도 영월군"
  const prevId = 32
  const mapId = 32330;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 196" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M317.919 151.656L327.169 159.461L319.364 171.891L320.521 181.43L307.224 177.383L284.676 164.086L276.293 174.782L269.645 182.587L272.825 193.86L256.926 189.524L232.644 178.251L216.167 164.954L195.643 167.844L169.049 151.656L152.572 155.125L132.049 155.703L118.173 134.89H99.384L78.8602 143.273L69.8991 128.242L95.3371 107.14L94.1808 99.3352L88.1104 97.6008L67.5866 105.406L58.3364 94.7101L44.1721 86.0381L43.3049 78.5223L46.4847 69.2722L38.1017 60.8892L28.2734 72.741L9.19493 73.6082L1.6792 57.7095L3.41358 44.9905L25.6718 45.8577L34.922 36.6075L28.2734 21.576L32.3203 11.4587L58.0474 10.5915L64.6959 1.34131L75.1023 4.23198L85.5088 18.6854L90.4229 36.0294L91.5792 56.2641L103.72 53.3735L113.548 65.2252L125.111 59.1548L128.002 36.8966L137.252 35.1622L149.393 47.8812L151.705 55.1078H163.268L169.916 66.3815L185.815 62.9127L197.956 70.7175L188.995 81.413L199.401 100.491L211.542 101.648L221.949 115.523L247.387 119.57L269.934 104.538L307.513 124.773L326.302 126.508L325.724 133.156L323.989 147.32L317.919 151.656Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}

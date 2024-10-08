"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongbukdo_Danyang() {

  const mapName = "단양군"
  const addressName = "충청북도 단양군"
  const prevId = 33
  // const mapId = 33380;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 330" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Danyang" d="M40.5452 262.147L78.4763 307.255L100.517 315.456L113.844 328.27L134.348 308.28L156.901 309.817L178.943 275.474L173.304 259.072L163.565 239.081L175.354 205.763L231.738 150.917L247.116 145.791L260.443 123.237L273.77 98.1208L310.676 97.6082L327.079 78.6427L297.862 55.0639L261.468 60.1897L214.311 31.4851L191.244 36.0983L148.7 38.1486L124.096 1.24268H90.7782L54.3849 16.1076L66.6869 34.048L56.9478 43.787L38.4948 33.5354L27.7306 43.2745L36.4445 61.7274L4.66439 86.844L1.58887 116.574L15.4286 120.162L27.7306 148.354L34.3941 183.21L26.1929 190.898L13.8908 212.427L21.067 257.534L40.5452 262.147Z" fill="black" stroke="#DAAA63" strokeWidth="2.43691"/>
</MapHoverAnimation>
</svg>








  );
}

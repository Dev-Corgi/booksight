"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Goseong() {

  const mapName = "고성군"
  const addressName = "경상남도 고성군"
  const prevId = 38
  // const mapId = 38340;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="328" height="238" viewBox="0 0 328 238" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Goseong" d="M4.23103 213.451L36.3134 143.453L54.3961 139.953L46.8131 104.954L71.3123 89.2048V74.6219L92.3116 51.8727L73.6456 39.623L90.5617 13.9572L119.727 1.70752L211.891 4.04083L210.141 11.0406L237.557 20.9569L262.056 41.373L284.806 45.4562L296.472 57.1225L278.973 62.3724L244.557 71.1221L231.141 95.038L221.224 121.871L248.057 95.038L262.64 81.6218L281.306 80.4551L301.139 64.7056L313.388 60.0391L302.305 82.7884L326.804 100.871L325.638 127.704L287.722 137.62L265.556 132.953L264.39 141.703L291.222 151.62L250.973 163.869L235.224 183.119L208.391 195.368L192.642 177.285L175.726 191.868L163.476 229.2L143.643 226.867L131.394 195.368L88.2285 197.701L85.8952 236.2H24.6471L1.31445 227.451L4.23103 213.451Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>
















  );
}

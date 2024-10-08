"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongbukdo_Cheongju() {

  const mapName = "청주시"
  const addressName = "충청북도 청주시"
  const prevId = 33
  // const mapId = 33040;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 316" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Cheongju" d="M93.2794 23.2663L79.5263 28.7675L66.2316 20.9741L49.2694 19.5988L35.9748 26.4753L37.3501 40.2284L22.6801 48.0219L19.4711 64.0672L7.55172 70.9437L10.3023 82.4046H19.0126L16.262 103.034L1.59204 113.12L8.92703 126.873L18.5542 141.543V165.382L36.4332 169.966L53.3954 188.762L52.0201 213.517L61.1888 227.271L50.6448 238.731L63.0225 240.107L70.3575 232.772L82.7353 242.857L83.1938 268.071L107.491 272.656L115.284 278.157L127.662 259.361L135.456 250.192L140.498 268.988L146.916 274.948L142.332 291.452L153.335 312.54L159.753 299.245L162.503 283.2L180.382 277.24L198.261 238.731L189.551 210.767L224.851 184.178L225.309 168.132L245.48 143.377L274.362 158.047L289.032 151.17L300.034 152.545L310.578 165.382L327.082 142.918L285.823 98.4499L296.825 78.2787L261.526 49.8556L251.898 57.1906L250.523 63.1503H230.352L217.974 40.6869L201.47 12.2638L189.551 9.05477L186.8 2.17822L165.712 16.3897L141.874 4.47041L117.577 19.5988L93.2794 23.2663Z" fill="black" stroke="#DAAA63" strokeWidth="2.43691"/>
</MapHoverAnimation>
</svg>








  );
}

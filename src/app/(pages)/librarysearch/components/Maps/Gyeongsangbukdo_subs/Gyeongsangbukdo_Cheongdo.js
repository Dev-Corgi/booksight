"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Cheongdo() {

  const mapName = "청도군"
  const addressName = "경상북도 청도군"
  const prevId = 37
  // const mapId = 37360;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 223" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Cheongdo" d="M86.1886 205.1L59.6952 217.295L15.1191 180.709L5.44688 155.057L1.66211 136.554L5.44688 115.948L27.3144 98.7059L62.2184 99.9676L59.6952 121.835L93.3376 109.64L103.01 86.5106L116.467 103.752L147.586 122.256L165.669 86.9312L195.947 83.1464L229.589 74.7358L248.934 70.951L264.493 42.7755L269.119 17.1232L282.576 19.6464L304.444 3.66626L290.987 35.206L278.791 74.3153L302.761 119.312L313.695 125.62L327.152 164.729L301.92 174.401L285.099 190.381L268.278 173.14L247.672 164.729L217.394 175.663L205.198 201.315L178.705 202.577L165.248 221.08L130.344 217.295L105.112 208.885L86.1886 205.1Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}

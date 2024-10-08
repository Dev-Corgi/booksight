"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Ulleung() {

  const mapName = "울릉군"
  const addressName = "경상북도 울릉군"
  const prevId = 37
  // const mapId = 37430;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 193" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Ulleung" d="M183.484 4.86054L147.642 1.95435L122.455 18.4226L80.7999 46.5155L33.3327 49.4217L2.3335 55.234L15.8955 83.3269L26.5515 111.42V133.7L115.674 167.606L124.392 145.325L168.953 114.326L171.86 46.5155L183.484 4.86054ZM305.543 151.137L291.981 179.23L314.261 190.855L327.823 162.762L305.543 151.137Z" fill="black" stroke="#DAAA63" strokeWidth="2" stroke-miterlimit="10"/>
</MapHoverAnimation>
</svg>















  );
}

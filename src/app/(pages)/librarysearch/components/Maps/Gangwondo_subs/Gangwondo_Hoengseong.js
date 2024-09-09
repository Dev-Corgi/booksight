"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Hoengseong() {

  const mapName = "횡성군"
  const addressName = "강원도 횡성군"
  const prevId = 32
  const mapId = 32320;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 287" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M178.342 265.956L177.087 237.925L196.332 232.905L193.822 213.66L207.21 204.038L183.363 177.262L154.495 170.15L135.25 163.038L128.138 172.66L108.893 154.252L107.638 135.844L95.5055 140.864L91.7401 154.252L71.2401 168.895L72.4952 195.67V212.823L58.2707 219.936L52.4136 194.415L30.6585 186.466L24.383 155.925L2.20947 139.609L37.3524 106.558L58.2707 100.701L76.6789 91.9152L85.4646 65.1397L121.444 53.8437L131.903 31.2519L151.985 40.0376L163.281 51.3336L197.587 19.956L211.812 18.2825L217.25 1.96619L230.638 2.80291L242.771 14.9355L276.24 23.7213L280.842 40.8744L300.087 40.0376L313.475 56.354L327.699 125.385L294.23 160.527V181.028L306.363 204.038L296.74 217.425L259.506 218.681L253.648 233.323L263.271 255.079L249.883 268.466L217.669 267.211L215.159 285.619L185.036 275.997L178.342 265.956Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}

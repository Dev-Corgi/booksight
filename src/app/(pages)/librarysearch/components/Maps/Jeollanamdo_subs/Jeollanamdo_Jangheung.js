"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Jangheung() {

  const mapName = "장흥군"
  const addressName = "전라남도 장흥군"
  const prevId = 36
  // const mapId = 36380;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 750" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jangheung" d="M61.086 444.593L97.7609 439.092L87.6753 368.492L68.421 332.734V277.722L24.4111 217.208L1.48926 154.861L3.32298 88.8461L59.2523 60.423L78.5065 24.665L117.015 1.74316L132.602 53.0881L172.945 90.6798L223.373 51.2543L238.959 68.6749H314.143L285.72 148.443L303.14 178.7L287.554 203.455V249.299L238.959 293.309L242.627 329.067L305.891 334.568L326.979 395.082L297.639 432.674L234.375 427.172L232.541 438.175L265.549 457.429L253.629 493.187L246.294 512.441L267.382 521.61L253.629 563.786L211.453 584.875L234.375 615.131L225.206 652.723L248.128 677.479L202.284 700.4L175.695 677.479V716.904L95.0103 707.736L116.098 748.078L48.2498 725.156L53.751 618.799L106.013 558.285L96.844 505.107L61.086 444.593Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}

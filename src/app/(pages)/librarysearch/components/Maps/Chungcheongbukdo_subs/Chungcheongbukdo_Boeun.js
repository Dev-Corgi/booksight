"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongbukdo_Boeun() {

  const mapName = "보은군"
  const addressName = "충청북도 보은군"
  const prevId = 33
  // const mapId = 33320;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 252" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Boeun" d="M24.4968 206.581L2.29102 200.737L7.55027 183.79L28.003 172.688L49.6244 120.679L39.6902 87.955L84.6861 54.062L85.2705 33.6093L110.982 2.05371L147.797 20.7533L166.497 11.9879L180.522 13.741L193.962 26.0126L214.999 3.22246L230.777 4.39117L238.374 22.5064L268.76 39.4529H292.135L298.563 64.5805L327.781 94.9674L325.444 114.251L303.238 127.692L302.069 189.634L306.744 203.074L292.135 222.358L310.834 248.07L274.02 250.408L206.818 233.461L185.781 239.305L148.966 210.087L139.032 195.478L129.098 178.531L98.7109 182.037L85.2705 198.984L80.5956 215.93L61.896 212.424L55.468 207.749L37.3528 222.358L26.2499 216.515L24.4968 206.581Z" fill="black" stroke="#DAAA63" strokeWidth="2.43691"/>
</MapHoverAnimation>
</svg>








  );
}

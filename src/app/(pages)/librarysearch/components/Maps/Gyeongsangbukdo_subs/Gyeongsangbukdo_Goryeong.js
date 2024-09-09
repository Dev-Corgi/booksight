"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangbukdo_Goryeong() {

  const mapName = "고령군"
  const addressName = "경상북도 고령군"
  const prevId = 37
  // const mapId = 37370;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 311" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Goryeong" d="M1.87256 247.813L4.67849 231.679L53.0811 196.604L34.141 141.187L4.67849 99.0976L15.2008 84.3663L10.9919 57.0084L53.7826 48.5905L83.245 86.4708L126.036 37.3667L196.886 69.6352L235.468 11.4117L274.049 1.59082L327.363 28.9489L321.751 49.292L269.841 53.5009L250.9 96.9931L238.975 120.142L287.378 159.425L281.766 201.515L208.11 193.097L213.722 230.977L252.303 267.454V306.738L225.647 309.544L200.393 273.066L163.916 255.529L100.782 258.335L78.3347 274.469L47.4692 268.857L36.9469 256.932L1.87256 247.813Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>















  );
}

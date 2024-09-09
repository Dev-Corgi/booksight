"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Suwon() {

  const mapName = "수원시"
  const addressName = "경기도 수원시"
  const prevId = 31
  // const mapId = 31010;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 314" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Suwon" d="M25.5734 142.414L1.8252 184.322L10.2069 224.834C10.2069 224.834 50.7186 230.422 50.7186 237.407C50.7186 244.392 102.406 312.842 102.406 312.842L198.796 308.651L230.925 277.919L284.01 291.888L327.315 213.659L286.804 187.117L324.521 143.811L274.231 132.635L263.055 97.7114L228.132 86.5358L219.75 22.2761L187.62 1.32178L145.711 36.2456L85.6423 75.3603L73.0698 121.46L28.3673 115.872L25.5734 142.414Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

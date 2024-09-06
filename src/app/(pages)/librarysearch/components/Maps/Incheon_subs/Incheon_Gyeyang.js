"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Incheon_Gyeyang() {

  const mapName = "계양구"
  const addressName = "인천광역시 계양구"
  const prevId = 23
  // const mapId = 23070;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="330" height="279" viewBox="0 0 330 279" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gyeyang" d="M128.167 1.69482L91.2783 51.6033L2.31104 49.4334L47.8796 99.3419L63.0691 149.25L78.2587 170.95L4.48094 238.218L21.8403 277.276L238.834 270.767L254.023 149.25L327.801 49.4334L312.612 36.4137L167.226 21.2243L128.167 1.69482Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

















  );
}

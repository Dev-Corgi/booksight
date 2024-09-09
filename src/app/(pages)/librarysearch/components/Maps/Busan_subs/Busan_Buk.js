"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Buk() {

  const mapName = "북구"
  const addressName = "부산광역시 북구"
  const prevId = 21
  // const mapId = 21080;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 553" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Buk" d="M1.25244 490.683L33.1632 283.262L36.3543 235.396L119.322 21.5939L154.424 50.3136L272.494 2.44739L240.583 155.619L326.742 337.511L259.73 481.109L135.278 551.313L1.25244 490.683Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}

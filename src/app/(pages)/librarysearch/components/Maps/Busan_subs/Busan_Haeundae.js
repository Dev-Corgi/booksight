"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Busan_Haeundae() {

  const mapName = "해운대구"
  const addressName = "부산광역시 해운대구"
  const prevId = 21
  // const mapId = 21090;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="330" height="344" viewBox="0 0 330 344" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Haeundae" d="M9.91076 239.659L68.1775 322.036L108.361 342.128L142.518 318.018L162.61 338.11H226.904L255.033 249.705L327.364 197.466L253.024 183.402L140.509 123.126L134.481 46.7763L92.2879 2.57397L80.2327 40.7487L1.87402 149.245L9.91076 239.659Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>







  );
}

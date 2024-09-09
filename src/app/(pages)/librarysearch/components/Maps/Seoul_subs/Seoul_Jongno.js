"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Seoul_Jongno() {

  const mapName = "종로구"
  const addressName = "서울특별시 종로구"
  const prevId = 11
  // const mapId = 11010;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 402" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jongno" d="M1.30566 65.6934L10.8789 199.719L30.0254 228.438L36.4075 295.451L17.2611 340.126L61.9362 397.566L128.949 384.801L173.624 400.757L310.84 387.992L326.796 333.744L278.929 330.553L205.535 247.585L122.567 218.865L157.669 170.999L132.14 72.0755L55.554 1.87183L1.30566 65.6934Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

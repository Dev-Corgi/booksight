"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Gwangju() {

  const mapName = "광주시"
  const addressName = "경기도 광주시"
  const prevId = 31
  // const mapId = 31250;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="328" height="352" viewBox="0 0 328 352" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Gwangju" d="M215.045 347.178L255.184 288.065L276.348 285.146L326.704 239.898V196.11L283.646 156.701L250.075 108.534L263.941 104.156L274.888 93.9385L267.59 72.7744L258.103 31.9057L235.479 3.44357L212.855 1.98389L182.204 28.9865L155.931 31.9057L129.658 39.2036L134.037 61.8274L120.171 81.5319L107.764 72.7744L57.4083 69.8551L49.3805 80.8021L57.4083 94.6683L75.6532 131.158L61.7871 161.08L45.0018 185.163L39.1633 215.085L1.21387 248.656V268.36L22.378 265.441L55.9487 244.277L65.4361 259.603L88.7896 265.441L93.1684 234.06L134.767 249.385L161.04 256.683L159.58 350.098L215.045 347.178Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongnamdo_Hongseong() {

  const mapName = "홍성군"
  const addressName = "충청남도 홍성군"
  const prevId = 34
  // const mapId = 34360;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 261" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Hongseong" d="M31.0064 192.568L1.22754 145.476L5.38275 92.1509L27.5438 83.148L16.4632 60.9869V3.50682L29.6214 32.5931L75.3285 33.2857L118.265 29.1305L139.041 4.89186L141.119 54.0616L173.668 54.7541L175.746 21.5126L247.076 1.4292H286.551L302.479 36.7483L324.64 78.9928L299.016 135.088L303.864 172.485L326.718 171.792L317.715 200.186L294.861 242.43H251.924L212.45 259.744L171.59 239.66L150.814 236.89L137.656 214.036L107.185 211.266L80.1762 197.416L56.6301 190.49L31.0064 192.568Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>










  );
}

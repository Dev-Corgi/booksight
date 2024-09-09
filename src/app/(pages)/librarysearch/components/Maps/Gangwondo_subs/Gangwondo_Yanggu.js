"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Yanggu() {

  const mapName = "양구군"
  const addressName = "강원도 양구군"
  const prevId = 32
  const mapId = 32380;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 427" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M230.942 41.4073L285.877 9.81973L327.078 22.1801L325.018 97.7157L293.43 139.604L289.31 167.758L261.843 231.62L252.229 245.354L275.576 285.182L257.722 309.216L289.31 342.863L281.756 394.365L246.049 374.451L236.435 410.159L194.547 409.472L167.08 425.266L164.333 401.232L129.999 388.185L123.132 418.399L91.544 402.605L88.1105 364.151L83.3037 317.456L61.3298 294.795L58.583 184.238L24.9353 172.565L34.5489 134.11L1.58789 31.7937L28.3687 19.4334L53.7762 1.57947L116.951 9.81973L142.359 21.4934L181.5 29.7337L230.942 41.4073Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}

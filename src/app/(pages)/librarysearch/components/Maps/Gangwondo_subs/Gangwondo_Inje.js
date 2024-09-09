"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Inje() {

  const mapName = "인제군"
  const addressName = "인제군"
  const prevId = 32
  const mapId = 32390;

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 462" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M142.711 2.09875L82.2065 40.5216L107.38 48.0295L106.055 96.6101L85.7395 123.55L83.0897 141.658L59.241 191.563L74.2569 217.178L62.7742 232.636L83.0897 254.276L78.2316 287.399L55.2663 274.592L49.0833 297.557L22.1432 297.115L27.0012 303.74L17.7267 318.314L4.03585 323.614L1.82764 354.087L13.3103 364.687L31.8593 362.92L66.3073 396.043L114.446 402.226L117.979 428.725L143.153 460.523L170.976 442.416L180.251 423.425L200.566 418.125L211.607 440.207L235.898 448.599L243.406 435.791L261.955 417.684L273.879 400.46L286.687 415.034L314.51 396.926L309.652 367.778L311.419 335.538L325.551 321.847L327.318 285.191L314.51 270.617L274.762 264.434L269.021 231.311L273.437 216.737L303.911 203.046L270.346 160.207L283.153 147.399V119.134L272.112 106.326L252.68 115.601L234.131 110.301L229.273 90.8688L208.074 89.1022C208.074 89.1022 204.541 67.0201 204.541 64.3703C204.541 61.7204 198.8 42.2882 198.8 42.2882L187.759 44.0547L173.626 50.2377L167.885 28.1556L172.743 18.8811L155.961 13.5815L142.711 2.09875Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}

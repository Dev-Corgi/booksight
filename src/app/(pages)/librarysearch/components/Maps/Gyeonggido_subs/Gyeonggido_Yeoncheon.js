"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Yeoncheon() {

  const mapName = "연천군"
  const addressName = "경기도 연천군"
  const prevId = 31
  // const mapId = 31350;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 343" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yeoncheon" d="M114.318 204.538L104.455 239.839L100.302 262.161L68.6352 246.068L61.8866 276.177L47.8703 285.002L53.5806 311.997L66.5587 310.958L79.5368 291.751L110.165 306.805L113.28 279.811L134.045 289.674L156.886 288.636L172.979 271.505L199.973 288.636L171.422 333.8L194.263 341.067L232.159 297.98L259.153 303.172L260.192 288.117H273.17L288.224 290.193L298.088 278.254L292.896 240.358L278.88 237.243L277.842 223.227L299.645 206.096L324.563 213.882V172.872L327.678 99.6754L314.699 78.3914L301.721 46.2058L280.956 57.1073L270.055 43.091L271.093 2.08032L215.547 30.113L177.651 59.1838L164.673 85.14L151.695 76.3149L126.777 88.2547L112.761 84.1017L95.1105 60.2221L2.1875 156.779L25.0289 179.101L32.8157 198.309L69.6735 200.385L95.6296 187.407L114.318 204.538Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

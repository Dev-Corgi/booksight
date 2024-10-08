"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongnamdo_Cheonan() {

  const mapName = "천안시"
  const addressName = "충청남도 천안시"
  const prevId = 34
  // const mapId = 34010;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 328 350" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Cheonan" d="M1.35376 314.95L32.6187 273.077L51.0427 267.494C51.0427 267.494 58.3005 239.021 58.3005 236.788C58.3005 234.554 64.4419 218.922 64.4419 218.922L81.1909 213.339L82.8659 187.657L70.0249 175.375L64.4419 184.307L61.092 144.668L77.8411 127.919L75.6079 111.17L66.1168 109.495L57.1839 39.1488L59.4172 26.3079L80.0744 1.18433H97.94L140.371 21.2832L163.82 46.9651L187.268 50.8732L235.282 87.1628L243.098 111.728L260.964 118.986V147.459L300.045 167.558L316.236 181.516L315.678 196.032L326.844 213.897L324.611 222.272L311.211 227.855L292.787 221.155L272.13 219.48L255.939 227.855L257.614 244.604L237.515 255.77L232.491 275.869L221.325 281.452L193.41 282.01L169.403 266.378L136.463 247.954L106.873 249.629L95.7068 270.844L112.456 287.035L116.364 321.65L110.223 347.331L83.9824 322.208L69.4666 326.116L58.8589 336.724L40.4349 335.049L34.2936 325.558L2.47035 323.883L1.35376 314.95Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>










  );
}

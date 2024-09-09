"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Chungcheongbukdo_Yeongdong() {

  const mapName = "영동군"
  const addressName = "충청북도 영동군"
  const prevId = 33
  // const mapId = 33340;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 263" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yeongdong" d="M68.4779 215.011L51.4217 229.698L34.3654 206.956L20.6257 174.739L1.67432 156.261L9.72864 136.836L8.78109 115.042L43.3674 122.149L51.4217 77.1393L69.4255 68.1375L94.0623 43.5007L117.752 41.6055L128.649 21.2328L156.602 1.80762L171.763 3.70273L183.608 32.1298L201.611 34.9725C201.611 34.9725 214.404 9.38814 216.773 13.1784C219.615 16.9687 234.776 35.9201 234.776 35.9201L263.677 51.555L278.365 37.8153L302.054 38.7628L313.898 49.6599L301.106 65.2947L327.164 102.724L310.108 104.619L285.471 97.5121L269.363 100.355L274.574 123.097L281.681 139.679L265.572 163.368L260.834 182.793L257.044 213.116L221.984 224.96L197.347 252.44L176.501 242.49L161.813 248.176L121.068 260.968L114.909 248.176L86.9555 241.069L76.0585 227.329L68.4779 215.011Z" fill="black" stroke="#DAAA63" strokeWidth="2.43691"/>
</MapHoverAnimation>
</svg>








  );
}

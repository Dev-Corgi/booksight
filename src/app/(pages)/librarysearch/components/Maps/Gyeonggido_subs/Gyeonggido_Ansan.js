"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Ansan() {

  const mapName = "안산시"
  const addressName = "경기도 안산시"
  const prevId = 31
  // const mapId = 31090;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 192" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<g id="Ansan">
<path d="M153.691 68.7727L189.546 88.3806L227.081 90.6215L236.605 90.0613L254.532 115.271L290.386 102.386L317.837 111.35L327.361 94.543L327.921 83.3385L279.742 63.1705L287.025 25.0752L294.868 22.8344L278.061 2.66626L271.899 16.6719L235.484 25.0752L215.876 43.5626L181.142 46.3638L153.691 68.7727Z" fill="black"/>
<path d="M62.3751 126.476L73.0194 142.162L74.7001 150.566L66.8569 157.848L67.4172 183.059L43.3275 165.131L26.5208 190.902L7.47317 190.341L6.91295 155.608L23.1594 146.644L16.997 127.036L2.43115 101.266L31.5628 105.187L42.2071 123.115L62.3751 126.476Z" fill="black"/>
<path d="M153.691 68.7727L189.546 88.3806L227.081 90.6215L236.605 90.0613L254.532 115.271L290.386 102.386L317.837 111.35L327.361 94.543L327.921 83.3385L279.742 63.1705L287.025 25.0752L294.868 22.8344L278.061 2.66626L271.899 16.6719L235.484 25.0752L215.876 43.5626L181.142 46.3638L153.691 68.7727Z" stroke="#DAAA63" strokeWidth="2"/>
<path d="M62.3751 126.476L73.0194 142.162L74.7001 150.566L66.8569 157.848L67.4172 183.059L43.3275 165.131L26.5208 190.902L7.47317 190.341L6.91295 155.608L23.1594 146.644L16.997 127.036L2.43115 101.266L31.5628 105.187L42.2071 123.115L62.3751 126.476Z" stroke="#DAAA63" strokeWidth="2"/>
</g>
</MapHoverAnimation>
</svg>














  );
}

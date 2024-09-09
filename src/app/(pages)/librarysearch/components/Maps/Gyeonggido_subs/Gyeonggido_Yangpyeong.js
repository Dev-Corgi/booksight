"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeonggido_Yangpyeong() {

  const mapName = "양평군"
  const addressName = "경기도 양평군"
  const prevId = 31
  // const mapId = 31380;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 228" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yangpyeong" d="M60.243 13.3194L78.604 2.05249L82.3597 15.4059L99.0515 38.7744L103.642 68.8196H130.766L149.961 63.8121L150.796 32.515L180.424 17.9097L239.263 57.5527H277.654L296.849 65.4813L327.312 89.6844L306.447 95.5266L271.394 128.493L294.345 144.35L300.605 174.813L274.315 226.557H245.522L242.184 215.29L241.349 200.685L222.153 194.425L202.123 196.929L182.928 189.835L167.905 194.843L144.119 194.008L124.924 175.647L103.224 187.749L75.2656 173.978L60.243 191.922L41.0475 164.38L48.9761 161.876L56.0701 153.113L51.4799 144.35L46.055 120.981L33.1189 104.707L20.1828 103.872L2.65636 119.312L1.82178 102.203L22.6865 72.158L24.3557 39.1917L42.7167 16.6578L60.243 13.3194Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>














  );
}

"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gyeongsangnamdo_Jinju() {

  const mapName = "진주시"
  const addressName = "경상남도 진주시"
  const prevId = 38
  // const mapId = 38030;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg width="328" height="247" viewBox="0 0 328 247" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Jinju" d="M191.198 211.147L176.445 194.089L142.789 206.537L131.264 192.245L113.744 184.407L82.855 196.855L69.485 160.433L35.8295 161.355L23.3816 141.07L2.17401 127.7L1.25195 104.648L13.6999 105.57L20.6154 85.7457H51.5046L59.3422 67.7654L83.316 38.2592L108.673 32.7268L113.744 15.6685L136.796 5.9868L155.237 17.5127L172.757 1.37646L193.964 17.5127L190.276 43.3306L204.568 65.4602L226.698 74.2198L257.587 73.2978L269.113 79.7522L293.086 118.018H308.762L326.742 130.005L321.671 177.03L313.372 190.4L241.912 187.634L218.86 197.316L205.49 217.601L222.087 227.283L203.646 245.263L179.672 230.049L191.198 211.147Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>
















  );
}

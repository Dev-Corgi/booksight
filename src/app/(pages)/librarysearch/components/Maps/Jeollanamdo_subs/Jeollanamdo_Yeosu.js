"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Yeosu() {

  const mapName = "여수시"
  const addressName = "전라남도 여수시"
  const prevId = 36
  // const mapId = 36020;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 586" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Yeosu" d="M128.962 380.681L99.23 357.991H76.5397V379.116L46.8074 344.689L33.5061 293.049L46.8074 281.313L36.6358 250.798L87.4936 208.547L48.3722 172.555L43.6776 130.304L2.20898 127.174L18.6399 84.9232L26.4642 59.103L23.3345 12.1574L62.4559 1.20337L92.1882 41.8897L135.222 77.8813L143.046 109.961L175.908 79.4462L207.205 45.8018L244.762 48.9315L262.758 62.2328L277.624 45.8018L295.619 65.3625L287.013 101.354L283.883 152.994L264.322 183.509L269.017 222.63L247.891 251.58L200.163 245.321L162.607 211.677L141.481 247.668L107.054 265.664L115.661 294.614L118.791 314.175L135.222 330.606L128.962 380.681ZM323.004 443.275L281.536 438.581L230.678 393.2L232.243 359.555L263.54 304.785L261.975 259.405L270.582 246.103L297.184 264.099L290.925 312.61L319.092 339.995L311.268 404.936C311.268 404.936 327.699 412.761 327.699 416.673C327.699 420.585 323.004 443.275 323.004 443.275ZM239.285 495.698L207.988 524.648L239.285 532.472L261.975 559.857L296.402 584.112L309.703 569.246L285.448 548.121L291.707 537.167L272.147 503.522L239.285 495.698ZM151.653 441.71L133.657 461.271L143.828 491.786L178.255 485.526V465.966L151.653 441.71Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>













  );
}

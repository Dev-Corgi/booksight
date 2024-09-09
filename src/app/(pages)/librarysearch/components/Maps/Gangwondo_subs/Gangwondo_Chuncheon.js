"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Gangwondo_Chuncheon() {

  const mapName = "춘천시"
  const addressName = "강원도 춘천시"
  const prevId = 32
  const mapId = 32010;

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 338" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path d="M62.7668 334.572L73.2225 315.024L82.769 330.026L95.0431 316.843H108.226L105.499 300.932L137.775 285.93L209.146 281.384L218.693 259.564L204.6 235.015L199.6 215.468L198.691 206.831L202.327 200.012L229.149 206.376L239.604 184.555L250.969 185.465L274.608 210.922L285.064 178.191L290.973 169.554L312.794 118.639L298.702 104.547L303.248 76.3618L317.34 70.9066L326.886 55.905L321.886 49.0861L303.702 59.5418L301.884 43.6309L279.154 34.9936L274.608 54.9958L253.697 44.5401L251.878 15.446L238.695 26.8109H217.784L213.238 41.8125L216.875 48.6315L179.598 66.3607L160.505 44.5401L148.231 35.9028L136.866 36.812L130.047 47.2677L115.5 33.1752L100.953 34.9936L89.5879 41.358L85.042 21.3558L70.4949 25.9017L46.4014 1.35358L32.3089 2.26275L30.4906 21.8104L40.9463 35.9028L27.763 53.632L11.3976 61.3601L8.67001 100.91L50.4927 102.728L52.3111 122.276L63.676 137.277L58.6755 167.281H44.1284L9.57919 200.466L14.1251 225.014L4.57865 240.016L17.7619 263.655L3.21487 281.384L1.39648 301.386L26.3992 297.75L47.3106 307.296L59.5846 322.298L62.7668 334.572Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>






  );
}

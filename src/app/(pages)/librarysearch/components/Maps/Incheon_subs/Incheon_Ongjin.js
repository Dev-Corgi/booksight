"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Incheon_Ongjin() {

  const mapName = "옹진군"
  const addressName = "인천광역시 옹진군"
  const prevId = 23
  // const mapId = 23320;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 330 218" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Ongjin" d="M305.441 169.938L292.182 178.225L292.845 200.764L302.458 204.741L313.064 195.792L317.373 190.157L327.648 188.168L322.013 177.23L305.441 169.938ZM135.072 176.899L130.763 190.489L127.449 208.387L138.718 211.039L146.342 216.674L155.291 214.022L163.577 204.41L150.982 192.146L141.37 187.174L140.044 178.225L135.072 176.899ZM242.795 184.191L222.577 176.567L223.239 185.517L242.795 198.444L253.071 189.494L242.795 184.191ZM41.27 18.4628L56.517 11.8336L47.8992 2.22142L30.6634 1.22705L19.3939 6.19889L5.14131 5.20452L2.1582 9.18199L9.7817 19.7886L14.4221 29.4008L27.6803 30.3952L39.9442 34.3727L38.9498 24.7604L41.27 18.4628ZM44.2531 75.1418L37.624 71.1643L28.0118 79.7822L21.3827 83.7597L30.0005 93.3719L41.27 91.3831L44.2531 82.7653V75.1418ZM131.426 85.7484L119.162 84.754L118.168 91.3831L129.437 97.0179V91.3831L131.426 85.7484Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

















  );
}

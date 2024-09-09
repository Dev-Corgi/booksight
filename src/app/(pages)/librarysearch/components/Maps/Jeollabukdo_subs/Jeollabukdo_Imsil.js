"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMapId,
  setMapName,
  setPrevMapId,
  setAddressName,
} from "@redux/mapSlice";
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollabukdo_Imsil() {
  const mapName = "임실군";
  const addressName = "전라북도 임실군";
  const prevId = 35;
  // const mapId = 35350;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
<svg viewBox="0 0 329 376" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Imsil" d="M79.9966 374.569L52.0604 370.021L38.4171 328.442L2.03492 317.397V296.607L19.5763 280.365L2.03492 264.123L1.38525 228.391L13.7292 216.047L2.68464 201.104L41.6655 160.174V91.3083L84.5444 54.9261L100.786 57.5248L113.13 78.9643L128.073 86.7605L151.461 105.601L160.557 102.353L159.258 66.6204L148.213 30.2383L174.2 2.95166L175.5 30.2383L197.589 65.321L196.939 123.792L216.43 130.289L264.506 132.888L320.378 165.372L326.875 181.614L284.646 192.009L278.799 237.486L259.958 264.773L242.417 272.569L245.016 297.257L254.111 311.55L260.608 334.939H217.729L211.882 353.13L147.563 357.028L124.175 350.531L113.13 338.187L92.3405 353.13L86.4934 374.569H79.9966Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

  );
}

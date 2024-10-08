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
export default function Jeollabukdo_Wanju() {
  const mapName = "완주군";
  const addressName = "전라북도 완주군";
  const prevId = 35;
  // const mapId = 35310;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
<svg viewBox="0 0 329 634" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Wanju" d="M133.521 478.242L92.1789 513.679L90.8664 560.927L89.5539 585.208L46.899 631.144L45.5866 557.646L25.2435 541.24L44.2741 481.524L52.8051 459.868L96.7725 450.681L115.803 423.775L143.365 425.088L166.989 400.807L186.02 373.902L173.551 368.652L157.146 329.278L122.365 333.216L94.8038 278.749H34.4306L4.24407 285.311L1.61914 258.405L31.8057 257.093L56.7424 220.344L63.3047 164.565L88.2415 145.534L81.6792 115.347L88.8977 92.3793L81.6792 75.9735L102.022 54.318H154.521L170.926 40.5371L205.05 49.7244L210.956 18.2253L241.143 30.0375L275.923 1.81958L300.86 22.1627L317.266 95.6604L327.109 112.066L309.391 162.596L289.048 184.251L298.891 194.095L294.954 260.374L283.798 261.687L279.861 295.81L260.83 354.215L224.737 420.494L195.863 451.993L201.113 468.399L207.675 488.742L211.613 526.803L200.457 528.116L179.457 507.773L161.739 501.21L149.271 479.555L133.521 478.242Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

  );
}

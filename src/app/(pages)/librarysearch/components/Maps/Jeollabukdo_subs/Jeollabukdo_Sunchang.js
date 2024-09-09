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
export default function Jeollabukdo_Sunchang() {
  const mapName = "순창군";
  const addressName = "전라북도 순창군";
  const prevId = 35;
  // const mapId = 35360;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId));
    dispatch(setMapName(mapName));
    dispatch(setAddressName(addressName));
  }, []);

  return (
<svg viewBox="0 0 329 224" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<path id="Sunchang" d="M2.08596 67.0181L57.8434 65.1119L59.7496 41.7605L58.3199 27.4637L87.8666 1.72949L101.687 13.6435L117.413 8.87788L144.101 39.8542H167.929L194.616 47.9558L207.006 78.4555L230.834 81.3149L235.123 65.5884L250.373 54.6276L258.475 63.6822L275.631 68.4478L322.81 65.5884L327.099 83.6977L306.131 112.768L287.545 116.104L284.686 133.26L266.1 135.166L256.092 159.947L238.936 184.252L191.28 222.853L146.96 209.033L140.765 191.877L153.632 188.541L149.343 153.275L133.14 149.939L127.898 136.596L144.101 129.447V113.721L135.999 106.573L131.234 83.6977L107.882 86.5571L98.3509 109.908L88.8197 117.533L87.39 133.26L64.9918 137.549L44.4997 116.104L39.7341 97.5179L20.6717 85.6039L1.60938 76.0727L2.08596 67.0181Z" fill="black" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</svg>

  );
}

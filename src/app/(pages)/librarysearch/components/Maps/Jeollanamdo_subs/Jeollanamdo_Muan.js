"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../../MapHoverAnimation";
export default function Jeollanamdo_Muan() {

  const mapName = "무안군"
  const addressName = "전라남도 무안군"
  const prevId = 36
  // const mapId = 36420;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 329 404" fill="none" xmlns="http://www.w3.org/2000/svg">
<MapHoverAnimation>
<g id="Muan">
<path d="M153.408 159.11L167.56 173.262L176.051 168.734L181.711 190.81L190.202 209.491L193.599 250.814L203.222 259.305L190.202 280.249L199.826 305.156L202.09 318.176L221.336 326.101L234.356 347.045L243.979 352.706L248.507 378.745L267.754 390.633L283.038 402.52L299.454 375.349L320.964 344.781L327.191 304.024L290.397 238.36L301.152 236.096L317.568 246.851L305.681 225.907L311.341 188.546L277.943 169.866L276.811 143.826L259.263 134.203L253.036 114.391L260.395 95.7106L246.243 87.2195L234.356 101.371L216.242 114.391L210.581 141.562L199.826 128.543L191.334 120.052L185.108 138.732L173.22 146.657L153.408 159.11ZM153.408 2.30908L127.369 22.1215L97.933 13.6305C97.933 13.6305 69.6295 17.0269 69.6295 20.4233C69.6295 23.8197 67.3653 50.9911 67.3653 50.9911L65.101 62.8785L22.0797 52.1232L1.70117 65.1428L11.3244 90.0499L48.1189 98.5409L51.5153 124.58L57.176 146.657L89.4419 129.109L83.7813 104.768L100.197 103.636L110.953 122.316L127.369 102.503V73.0678H138.124L147.747 47.0286L153.974 24.9519L153.408 2.30908ZM164.163 75.8981L147.747 81.5588L139.256 106.466L158.502 124.014L180.013 113.259L200.392 110.994V86.6535L180.013 72.5017L173.786 91.182L164.163 75.8981Z" fill="black"/>
<path d="M148.313 188.546C144.917 188.546 130.199 184.017 130.199 184.017L117.179 182.885L110.953 203.83L144.351 242.323L150.011 254.21C150.011 254.21 169.258 233.265 169.258 229.869V201.566L163.031 182.885L148.313 188.546ZM191.334 331.762L176.051 349.31L161.899 370.254L183.41 391.199L216.808 384.406L232.092 383.274L249.64 381.01L243.979 352.706L234.356 347.045L221.336 326.101L204.92 318.176L191.334 331.762Z" fill="black"/>
<path d="M221.336 326.101L202.09 318.176L199.826 305.156L190.202 280.249L203.222 259.305L193.599 250.814L190.202 209.491L181.711 190.81L176.051 168.734L167.56 173.262L153.408 159.11L173.22 146.657L185.108 138.732L191.334 120.052L199.826 128.543L210.581 141.562L216.242 114.391L234.356 101.371L246.243 87.2195L260.395 95.7106L253.036 114.391L259.263 134.203L276.811 143.826L277.943 169.866L311.341 188.546L305.681 225.907L317.568 246.851L301.152 236.096L290.397 238.36L327.191 304.024L320.964 344.781L299.454 375.349L283.038 402.52L267.754 390.633L248.507 378.745L243.979 352.706M221.336 326.101L234.356 347.045L243.979 352.706M221.336 326.101L204.92 318.176L191.334 331.762L176.051 349.31L161.899 370.254L183.41 391.199L216.808 384.406L232.092 383.274L249.64 381.01L243.979 352.706M153.408 2.30908L127.369 22.1215L97.933 13.6305C97.933 13.6305 69.6295 17.0269 69.6295 20.4233C69.6295 23.8197 67.3653 50.9911 67.3653 50.9911L65.101 62.8785L22.0797 52.1232L1.70117 65.1428L11.3244 90.0499L48.1189 98.5409L51.5153 124.58L57.176 146.657L89.4419 129.109L83.7813 104.768L100.197 103.636L110.953 122.316L127.369 102.503V73.0678H138.124L147.747 47.0286L153.974 24.9519L153.408 2.30908ZM164.163 75.8981L147.747 81.5588L139.256 106.466L158.502 124.014L180.013 113.259L200.392 110.994V86.6535L180.013 72.5017L173.786 91.182L164.163 75.8981ZM148.313 188.546C144.917 188.546 130.199 184.017 130.199 184.017L117.179 182.885L110.953 203.83L144.351 242.323L150.011 254.21C150.011 254.21 169.258 233.265 169.258 229.869V201.566L163.031 182.885L148.313 188.546Z" stroke="#DAAA63" strokeWidth="2"/>
</g>
</MapHoverAnimation>
</svg>













  );
}

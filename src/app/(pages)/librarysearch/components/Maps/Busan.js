"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../MapHoverAnimation";
export default function Busan() {

  const mapName = "부산광역시"
  const addressName = "부산광역시"
  const prevId = 10
  const mapId = 21;

  const dispatch = useDispatch();

  const handlePathClick = (id) => {
    dispatch(setMapId(id))
  };

  useEffect(() => {
    dispatch(setPrevMapId(prevId))
    dispatch(setMapName(mapName))
    dispatch(setAddressName(addressName))
  }, [])

  return (
<svg viewBox="0 0 326 333" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="&#235;&#182;&#128;&#236;&#130;&#176;&#234;&#180;&#145;&#236;&#151;&#173;&#236;&#139;&#156; 1">
<g id="&#235;&#160;&#136;&#236;&#157;&#180;&#236;&#150;&#180; 1">
<g id="Group">

<MapHoverAnimation>
<path id="Gijang" onClick={() => handlePathClick(21310,"기장군")} d="M278.542 158.98L260.367 155.086L237.433 145.133L237.001 126.094L219.692 106.189L215.365 102.294V76.7641L209.74 69.8406L217.096 22.2417L228.779 21.809L241.761 32.627L256.473 22.6745L262.531 3.63489L286.763 7.52934L297.148 4.93304L310.995 13.5874L312.726 39.9831L321.813 50.8011L318.784 59.4554L307.534 53.8301L298.447 70.2734L305.803 79.7931L295.85 94.0728L288.927 100.564L298.014 107.92L291.956 121.767L287.629 133.017L279.407 134.748L278.542 158.98Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Buk" onClick={() => handlePathClick(21080,"북구")} d="M129.253 154.653L133.58 126.527L134.013 120.036L145.263 91.0437L150.023 94.9381L166.034 88.4474L161.706 109.218L173.39 133.883L164.303 153.355L147.427 162.875L129.253 154.653Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Geumjeong" onClick={() => handlePathClick(21110,"금정구")} d="M208.874 148.163L225.75 124.796L227.048 114.843L216.663 100.564L216.23 76.7643L210.605 69.8408L167.333 88.8804L163.006 109.651L174.689 134.316L194.594 139.508L208.874 148.163Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Dongrae" onClick={() => handlePathClick(21060,"동래구")} d="M185.939 155.086L200.651 163.74L210.604 167.635L208.873 148.162L195.891 139.941L174.688 135.614L164.736 153.355L185.939 155.086Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Gangseo" onClick={() => handlePathClick(21120,"강서구")} d="M34.5593 249.651L64.4168 249.219L70.0422 223.688L77.3984 219.361L77.8311 247.488L86.4854 244.892L95.5725 225.852L105.525 221.958L108.554 205.514L109.852 172.195L128.892 154.454L133.219 122L99.0342 134.116L86.4854 146.665L60.5224 147.963L50.5699 170.464L51.868 188.206L34.5593 179.551L25.905 190.802L6 192.533L10.3272 204.649L31.963 221.525L33.6939 232.776L22.0105 242.295L34.5593 249.651ZM30.2322 259.171L6 275.615L14.2216 280.807L17.2507 295.952L25.4723 306.77L29.3667 324.512L36.2902 313.694L33.6939 300.712L39.752 287.731L44.5118 272.586L39.752 263.931L30.2322 259.171ZM60.5224 256.575L45.81 258.306L50.5699 266.527L63.1187 264.797L60.5224 256.575Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Sasang" onClick={() => handlePathClick(21150,"사상구")} d="M115.838 220.426H131.849L145.696 200.954L145.263 174.558L148.292 162.442L129.685 154.22L110.646 171.962L109.348 205.281L106.319 221.724L115.838 220.426Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Yeonje" onClick={() => handlePathClick(21130,"연제구")} d="M166.035 162.875L177.718 170.231L187.671 177.154L188.104 184.511L197.191 183.212V173.26L210.172 167.635L200.22 163.74L185.507 155.086L164.304 153.355L166.035 162.875Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Busanjin" onClick={() => handlePathClick(21050,"부산진구")} d="M154.783 203.983L165.168 194.463L176.419 200.954L188.102 184.511L186.371 174.991L166.034 162.442L164.735 152.922L150.023 162.442L145.263 174.558L145.696 200.954L154.783 203.983Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Nam" onClick={() => handlePathClick(21070,"남구")} d="M213.2 231.244L201.949 229.946L198.055 223.455L186.371 227.782L182.477 216.964L177.717 208.743L176.419 200.521L188.102 184.078L197.189 182.78L208.873 197.059L212.767 199.656L218.393 210.474L213.2 231.244Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Dong" onClick={() => handlePathClick(21030,"동구")} d="M171.66 219.128L156.948 221.724L152.188 214.368L155.217 204.416L165.602 194.896L176.853 201.387L178.151 209.608L171.66 219.128Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Seo" onClick={() => handlePathClick(21020,"서구")} d="M150.024 270.621L140.937 258.505L141.37 242.062L137.043 227.782L134.014 219.561L145.697 200.521L154.784 203.55L151.755 213.503L156.515 220.859L150.457 230.811L158.679 237.735L150.024 248.553V270.621Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Yeongdo" onClick={() => handlePathClick(21040,"영도구")} d="M183.775 236.869L165.601 238.168L163.005 249.418L185.939 268.458L194.16 264.131L189.4 248.985L188.968 240.764L183.775 236.869Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Saha" onClick={() => handlePathClick(21100,"사하구")} d="M142.668 242.495L133.581 243.793L131.418 252.015L134.447 263.265V278.41L127.091 267.16L115.84 282.737L107.618 257.207L105.887 222.157L131.85 220.859L136.61 228.215L142.668 242.495Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Haeundae" onClick={() => handlePathClick(21090,"해운대구")} d="M210.605 167.635L223.154 185.376L231.808 189.703L239.164 184.511L243.491 188.838H257.338L263.396 169.798L278.974 158.548L262.964 155.519L238.732 142.537L237.433 126.094L228.346 116.574L225.75 124.796L208.874 148.162L210.605 167.635Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Suyeong" onClick={() => handlePathClick(21140,"수영구")} d="M197.622 183.645L209.305 197.925L212.767 200.954L215.796 192.732L231.374 190.136L222.72 185.809L208.44 168.067L199.353 173.693L197.622 183.645Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Jung" onClick={() => handlePathClick(21010,"중구")} d="M166.034 220.426V229.08L159.11 238.6L150.889 231.677L156.947 221.724L166.034 220.426Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</g>
</g>
</g>
</svg>





  );
}

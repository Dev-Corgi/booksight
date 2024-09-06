"use client"
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setMapId,setMapName,setPrevMapId,setAddressName } from '@redux/mapSlice';
import MapHoverAnimation from "../MapHoverAnimation";
export default function Seoul() {

  const mapName = "서울특별시"
  const addressName = "서울특별시"
  const prevId = 10
  const mapId = 11;

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
<svg width="326" height="280" viewBox="0 0 326 280" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="&#236;&#132;&#156;&#236;&#154;&#184;&#237;&#138;&#185;&#235;&#179;&#132;&#236;&#139;&#156; 1">
<g id="&#235;&#160;&#136;&#236;&#157;&#180;&#236;&#150;&#180; 1">
<g id="Group">
<MapHoverAnimation>
<path id="Gangdong" onClick={() => handlePathClick(11250,"강동구")} d="M272 143.013V156.664L279.098 164.308L277.46 170.86L284.013 181.781L295.479 185.603L297.664 176.321L321.143 158.848L318.959 143.559L314.044 133.184L291.657 131L272 143.013Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Songpa" onClick={() => handlePathClick(11240,"송파구")} d="M271.979 156.329L258.328 176.532L238.125 179.262V194.551L255.598 208.748L261.604 208.202L265.426 214.209L272.525 219.669L280.169 234.958L303.103 206.564L296.004 187.999V184.723L284.538 180.901L279.077 168.888L279.623 163.428L271.979 156.329Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Gwangjin" onClick={() => handlePathClick(11050,"광진구")} d="M254.506 132.304L245.223 133.942L241.401 144.862L233.757 163.427L229.934 175.44L237.579 179.262L257.782 176.532L271.433 156.329L270.887 144.316L259.966 125.205L254.506 132.304Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Jungnang" onClick={() => handlePathClick(11070,"중랑구")} d="M242.493 90.8052L245.223 133.942L254.506 132.304L272.525 114.285L271.433 89.7131L268.703 84.2528L252.868 84.7988L242.493 90.8052Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Gangnam" onClick={() => handlePathClick(11230,"강남구")} d="M230.48 175.44L214.099 170.526L197.718 168.888L192.804 174.894L199.357 192.367L202.633 198.92L204.817 212.57L215.738 221.307L220.652 232.774L224.474 237.688L233.211 234.958L237.579 230.043L249.046 231.136L250.684 238.78L256.144 242.056L260.512 237.142L278.531 236.05L271.433 219.123L264.334 213.662L260.512 207.656L254.506 208.202L237.033 194.005L237.579 179.808L230.48 175.44Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Seongdong" onClick={() => handlePathClick(11040,"성동구")} d="M205.363 133.942L203.725 143.77L197.172 150.323L193.896 155.783L197.718 168.342L214.099 169.98L229.934 175.986L240.855 150.869L241.947 144.862L226.658 139.402L221.198 132.85L214.645 133.396L209.731 136.672L205.363 133.942Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Dongdaemun" onClick={() => handlePathClick(11060,"동대문구")} d="M205.909 126.297L209.731 117.561L220.106 110.462L227.204 101.726L244.131 98.4496L245.769 133.942L241.947 146.5L227.204 139.402L219.56 134.488L213.553 135.58L210.277 136.672L206.455 134.488L205.909 126.297Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Seongbuk" onClick={() => handlePathClick(11080,"성북구")} d="M217.376 90.2591L199.357 89.7131L193.896 77.7004L173.147 64.0496L168.779 71.148L174.785 83.7067L178.061 97.3575L173.147 102.272L173.693 106.64L187.344 111.008L198.265 126.297H207.001L210.823 117.561L220.652 112.1L230.48 101.726L245.223 98.4496L243.585 90.2591L234.303 84.2528L225.566 76.6083L217.376 90.2591Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Gangbuk" onClick={() => handlePathClick(11090,"강북구")} d="M207.001 53.675L193.35 45.4845L197.172 27.4654L193.35 13.8146L178.061 29.1035L173.147 60.2273L173.693 66.7797L191.712 77.7004L199.903 90.2591L217.922 90.8052L226.658 77.1544L207.001 53.675Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Seocho" onClick={() => handlePathClick(11220,"서초구")} d="M174.785 191.275L192.804 174.894L202.633 199.466L205.363 211.478L217.376 222.399L225.02 237.142L233.757 235.504L237.579 230.043L251.23 231.136V239.872L256.69 243.148L235.941 274.818L219.56 269.904L210.277 244.24L176.423 242.056L171.509 228.405L173.147 206.018L168.779 200.012L163.318 197.828L162.772 191.821L174.785 191.275Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Yongsan" onClick={() => handlePathClick(11030,"용산구")} d="M152.398 184.177L141.477 171.618L159.496 149.777L178.607 150.323L182.429 153.053L194.442 155.783L198.264 168.342L192.258 177.078L174.785 190.729H163.318L152.398 184.177Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Jung" onClick={() => handlePathClick(21010,"중구")} d="M155.128 141.586L161.68 133.942L173.693 131.758L179.699 135.034L204.817 133.942L203.179 143.77L196.626 150.323L193.35 157.967L184.614 154.691L177.515 149.777H159.496L155.128 141.586Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Jongno" onClick={() => handlePathClick(11010,"종로구")} d="M151.306 78.7925L152.944 101.726L156.22 106.64L157.312 118.107L154.036 125.751L161.68 135.58L173.147 133.396L180.791 136.126L204.271 133.942L207.001 124.659L198.81 124.113L186.252 109.916L172.055 105.002L178.061 96.8115L173.693 79.8845L160.588 67.8718L151.306 78.7925Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Eunpyeong" onClick={() => handlePathClick(11120,"은평구")} d="M113.629 121.383L101.617 111.008L111.991 104.456L114.175 66.2337L127.28 61.3194L144.207 43.3003L154.036 62.4114L161.68 70.0559L152.944 79.3384V97.3575L145.299 97.9035L140.931 105.002L134.379 107.186L130.556 113.738L122.366 114.285L113.629 121.383Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Seodaemun" onClick={() => handlePathClick(11130,"서대문구")} d="M134.379 141.586L115.268 119.745L122.366 113.739L130.556 113.193L134.379 106.64L140.931 104.456L145.299 97.3576L152.944 96.8115L153.49 102.818L157.858 106.094L157.312 117.015L154.582 123.021L161.68 134.488L155.128 140.494L150.214 143.77L134.379 141.586Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Mapo" onClick={() => handlePathClick(11140,"마포구")} d="M130.01 163.973L99.9785 149.777L83.0515 136.126L71.0388 123.021L84.1436 123.567L98.8865 109.916L103.255 110.462L112.537 119.745L116.906 121.383L133.833 139.402L150.76 142.678L155.128 142.132L161.134 150.869L140.385 171.618L130.01 163.973Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Gangseo" onClick={() => handlePathClick(11160,"강서구")} d="M53.5659 154.145L65.5786 167.25L77.5913 167.796L83.0516 153.599L92.3342 152.507V144.862L70.4929 123.021L62.3024 121.929L35.0008 102.818L6.06104 148.139L43.7373 164.52L53.5659 154.145Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Yangcheon" onClick={() => handlePathClick(11150,"양천구")} d="M69.9468 187.999L77.0452 188.545L81.4135 195.097L88.5119 192.913L93.9722 186.361L92.3342 173.802L98.8865 167.796L97.7945 161.789L91.7881 152.507H82.5056L76.4992 166.704L66.1246 167.25L53.0198 153.599L45.9214 165.612L53.0198 194.551L63.3944 194.005L69.9468 187.999Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Guro" onClick={() => handlePathClick(11170,"구로구")} d="M102.709 214.755L101.617 201.65L97.7946 190.729L91.7882 185.815L86.8739 192.913L82.5056 192.367L77.0453 186.907H67.7628L62.3024 192.913L53.0199 194.551L42.6453 206.018L50.8358 229.497L68.8548 221.307L84.1437 211.478L88.512 217.485L102.709 214.755Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Geumcheon" onClick={() => handlePathClick(11180,"금천구")} d="M121.274 244.786L116.906 221.853L112.538 215.301L101.071 212.57L89.0581 217.485L108.715 263.351L126.734 252.431L123.458 246.424L121.274 244.786Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Gwanak" onClick={() => handlePathClick(11210,"관악구")} d="M129.464 207.656L151.306 208.748L158.404 224.037L172.055 227.313L176.423 238.78L155.674 265.536L142.569 264.99L119.636 245.332L115.267 221.853L113.629 216.939L121.82 213.662L126.734 207.656H129.464Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Dongjak" onClick={() => handlePathClick(11200,"동작구")} d="M131.648 182.539L124.004 195.097L120.728 204.926L110.899 211.478L109.807 215.847L113.083 217.485L121.82 215.847L126.734 209.294L150.214 211.478L158.404 224.583L172.055 227.859L173.693 205.472L169.325 199.466L162.226 196.189L162.772 191.275L151.306 182.539H131.648Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Yeongdeungpo" onClick={() => handlePathClick(11190,"영등포구")} d="M93.9722 149.231L92.8802 144.316L130.556 163.428L141.477 171.618L149.668 181.447L131.648 184.177L122.912 196.736L121.274 204.38L108.169 214.209L100.525 210.932L99.9786 201.104L96.7024 191.275L92.3341 186.361L91.7881 174.894L99.4325 168.342L92.3341 153.053L93.9722 149.231Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Dobong" onClick={() => handlePathClick(11100,"도봉구")} d="M221.032 19.8349L230.314 14.9207L228.13 31.3016L232.498 45.4985L229.768 68.9779L223.216 72.8001L206.289 52.5969L192.092 44.9524L194.822 25.8413L191 13.2826L197.552 4L221.032 19.8349Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
<MapHoverAnimation>
<path id="Nowon" onClick={() => handlePathClick(11110,"노원구")} d="M227.204 31.8336L232.118 14.3606L250.137 16.5447L253.414 53.6749L271.433 86.9829L253.414 84.7988L243.585 91.8972L232.118 85.8909L221.198 72.7861L227.75 70.0559L231.026 46.5765L227.204 31.8336Z" fill="currentColor" stroke="#DAAA63" strokeWidth="2"/>
</MapHoverAnimation>
</g>
</g>
</g>
</svg>






  );
}

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{3497:function(e,t,r){Promise.resolve().then(r.bind(r,6026))},6327:function(e,t,r){"use strict";async function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Keyword";async function r(e,t){try{let r=await fetch("/api/aladinKeywordSearch?SearchWord=".concat(e,"&QueryType=").concat(t));if(!r.ok)throw Error("Failed to fetch aladinKeywordSearch");return await r.json()}catch(e){console.log(e)}}let l=(await r(e,t)).item.filter(e=>""!==e.isbn13);for(let e of l)e.author=function(e){let t=e.match(/^(.*?)\s*\(지은이\)/);return t?t[1]:e}(e.author);return l}r.d(t,{Z:function(){return l}})},6026:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var l=r(7437),n=r(2265),a=r(6463),c=r(8586),i=r(6327);function o(){let e=(0,a.useSearchParams)().get("SearchWord")||"default",[t,r]=(0,n.useState)(null);return(0,n.useEffect)(()=>{(async function(){r(await (0,i.Z)(e))})()},[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"flex flex-col items-center overflow-y-scroll scroll no-scrollbar",children:(0,l.jsx)(c.default,{className:"flex flex-wrap w-[80.56vw] st:w-[1160px] h-hull  gap-x-[28.98px] gap-y-[25.99px] overflow-y-clip",width:169.02,books:t})})})}},7475:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var l=r(7437),n=r(2265),a=r(6648),c={src:"/_next/static/media/bookFrame.0973a626.png",height:463,width:319,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAACVBMVEVMaXGlnpVsaml5thnzAAAAA3RSTlMAMxVjwEUFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAE0lEQVR4nGNgYmBgYGBkIJFiAgAC7QAacLCzXwAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},i={src:"/_next/static/media/bookShadow.6888558b.png",height:463,width:382,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAABlBMVEUAAABMaXFP2lwvAAAAAnRSTlMPAPEL0fcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2CEAAYIyUAqDQAF2wArWtPrSAAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},o=r(8084);function s(e){let{className:t,book:r,shadowType:s="null"}=e,[u,d]=(0,n.useState)("#000000");return(0,l.jsxs)("div",{className:"".concat(t," relative overflow-visible"),children:["shadow"==s&&(0,l.jsx)("div",{className:"absolute w-[119.74%] h-full",children:(0,l.jsx)(a.default,{src:i,alt:"bookShadow",fill:!0,sizes:1})}),"circle"==s&&(0,l.jsx)("div",{className:"absolute w-full pt-[100%]  mt-[6.03vw] st:mt-[86.88px] rounded-full blur-[5.52]",style:{background:"radial-gradient(50% 50% at 50% 50%, ".concat(u,"E6, ").concat(u,"00)")}}),(0,l.jsx)("div",{className:"absolute w-[96.55%] h-full rounded-r-[0.56vw] rounded-l-[0.42vw] st:rounded-r-[8px] st:rounded-l-[6px] overflow-clip",children:void 0!=r&&(0,l.jsx)(l.Fragment,{children:"circle"==s?(0,l.jsx)(o.r,{getColors:e=>{d(e[1])},children:(0,l.jsx)("img",{src:r.cover.replace(/coversum/,"cover500"),layout:"fill",alt:"bookCover",className:"h-full object-cover"})}):(0,l.jsx)(a.default,{src:r.cover.replace(/coversum/,"cover500"),alt:"bookCover",fill:!0,sizes:1})})}),(0,l.jsx)("div",{className:"absolute w-full h-full",children:(0,l.jsx)(a.default,{src:c,alt:"bookFrame",fill:!0,sizes:1})})]})}},8586:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var l=r(7437),n=r(2265),a=r(6463),c=r(7475),i=r(8817),o=r(4839);function s(e){let{className:t,width:r=125.2,books:s}=e,u=(0,a.useRouter)(),d=r/125.2,[A,h]=(0,n.useState)(!0),[f,x]=(0,n.useState)(Array.from({length:10}));(0,n.useEffect)(()=>{s&&(x(s),h(!1))},[s]);let v=e=>{u.push("/bookdetail/".concat(e))};return(0,l.jsx)("div",{className:"".concat(t),children:f.map((e,t)=>(0,l.jsx)("div",{className:"aspect-[1/2]",style:{width:r},children:(0,l.jsxs)("div",{className:"flex flex-col w-min h-min origin-top-left",style:{scale:"".concat(d)},onClick:()=>v(e.isbn13),children:[(0,l.jsx)(o.Z,{isLoading:A,children:(0,l.jsx)(c.Z,{className:"w-[125.2px] h-[181.51px]",book:e,shadowType:"circle"})}),(0,l.jsx)(o.Z,{isLoading:A,children:(0,l.jsx)(i.Z,{width:67.85,score:void 0==e?5:e.customerReviewRank,className:"mt-[15.09px]"})}),(0,l.jsx)(o.Z,{isLoading:A,children:(0,l.jsx)("p",{className:"font-KopubWorldBold text-black w-[125.2px] text-[13px] mt-[3.85px] truncate",children:void 0==e?"title":e.title})}),(0,l.jsx)(o.Z,{isLoading:A,children:(0,l.jsx)("p",{className:"font-NotoSansKRMedium text-textColor-secondary text-[10px] -mt-[1px] truncate",children:void 0==e?"author":e.author})})]},t)},t))})}},8817:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var l,n,a,c,i=r(7437),o=r(4410);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)({}).hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(null,arguments)}var u=function(e){return o.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),l||(l=o.createElement("path",{fill:"currentColor",d:"M240.131 12.81c4.919-16.006 27.45-16.006 32.369 0l48.375 157.419c2.193 7.137 8.756 12.005 16.185 12.005h158.283c16.203 0 23.159 20.679 10.283 30.571L376.134 312.28c-5.641 4.334-7.997 11.745-5.901 18.566l49.113 159.819c4.869 15.845-13.363 28.633-26.469 18.565l-126.278-97.006a16.865 16.865 0 0 0-20.567 0L119.754 509.23c-13.107 10.068-31.338-2.72-26.469-18.566l49.113-159.818c2.096-6.821-.26-14.232-5.901-18.566L7.005 212.805c-12.876-9.892-5.92-30.571 10.283-30.571h158.283c7.429 0 13.992-4.868 16.185-12.005z"})))};function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)({}).hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(null,arguments)}var A=function(e){return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),n||(n=o.createElement("path",{stroke:"currentColor",d:"m262.941 15.748 48.375 157.418c3.474 11.306 13.892 19.068 25.744 19.068h158.282c6.527 0 9.593 8.491 4.192 12.64L370.042 304.35c-8.966 6.887-12.685 18.638-9.368 29.433l49.113 159.819c2.069 6.732-5.602 11.705-10.818 7.698l-126.278-97.007a26.87 26.87 0 0 0-32.751 0L113.662 501.3c-5.216 4.007-12.887-.966-10.818-7.698l49.113-159.819c3.317-10.795-.402-22.546-9.368-29.433L13.097 204.874c-5.401-4.149-2.335-12.64 4.191-12.64h158.283c11.852 0 22.27-7.762 25.744-19.068L249.69 15.748c2.025-6.59 11.226-6.59 13.251 0Z"})))};function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)({}).hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(null,arguments)}var f=function(e){return o.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),a||(a=o.createElement("path",{fill:"currentColor",d:"M256 .806c-6.863 0-13.725 4.001-16.185 12.005L191.44 170.229c-2.193 7.137-8.755 12.005-16.184 12.005H16.973c-16.204 0-23.16 20.679-10.284 30.571l129.492 99.475c5.642 4.334 7.998 11.745 5.902 18.566L92.97 490.664c-4.87 15.846 13.362 28.634 26.468 18.566l126.278-97.006A16.86 16.86 0 0 1 256 408.726z"})),c||(c=o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M256 408.92c3.624 0 7.248 1.166 10.284 3.498l126.278 97.006c13.106 10.069 31.337-2.72 26.468-18.565L369.917 331.04c-2.096-6.821.26-14.232 5.902-18.566l129.492-99.475c12.876-9.891 5.92-30.571-10.284-30.571H336.744c-7.429 0-13.991-4.867-16.184-12.005L272.185 13.005C269.725 5.002 262.863 1 256 1v27.424l45.442 147.874c4.755 15.473 19.028 26.13 35.302 26.13h149.497l-122.606 94.186c-12.291 9.441-17.374 25.531-12.835 40.301l46.344 150.809-118.677-91.166A36.82 36.82 0 0 0 256 388.92z",clipRule:"evenodd"})))};function x(e){let{width:t,score:r,className:l}=e,n=Math.floor(r/2),a=Math.floor(r%2);return(0,i.jsx)("div",{className:"".concat(l," flex flex-row w-min h-min gap-[0.08vw] st:gap-[1.12px] origin-top-left"),style:{scale:"".concat(t/67.85)},children:Array.from({length:5},(e,t)=>(0,i.jsx)("div",{className:"relative w-[0.89vw] h-[0.89vw] st:w-[12.8px] st:h-[12.8px] text-primary",children:t<n?(0,i.jsx)(u,{}):t==n&&1==a?(0,i.jsx)(f,{}):(0,i.jsx)(A,{})},t))})}},4839:function(e,t,r){"use strict";var l=r(7437),n=r(5678);t.Z=e=>{let{isLoading:t,children:r}=e;return(0,l.jsx)(l.Fragment,{children:t?(0,l.jsx)(n.E.div,{initial:{backgroundPositionX:"100%"},animate:{backgroundPositionX:"0%"},transition:{duration:1,ease:"linear",repeat:1/0},className:"flex w-min h-min bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:300%] bg-[position-x:100%]",children:(0,l.jsx)("div",{className:"flex w-min h-min invisible",children:r})}):r})}}},function(e){e.O(0,[534,594,84,971,23,744],function(){return e(e.s=3497)}),_N_E=e.O()}]);
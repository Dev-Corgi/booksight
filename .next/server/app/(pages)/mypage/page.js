(()=>{var e={};e.id=934,e.ids=[934],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},15206:e=>{"use strict";e.exports=require("zlib")},98793:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>n}),r(34711),r(35866),r(14562);var A=r(23191),s=r(88716),l=r(37922),i=r.n(l),a=r(95231),o={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);r.d(t,o);let n=["",{children:["(pages)",{children:["mypage",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,34711)),"C:\\Users\\bora5\\Working\\booksight\\src\\app\\(pages)\\mypage\\page.js"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,14562)),"C:\\Users\\bora5\\Working\\booksight\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\bora5\\Working\\booksight\\src\\app\\(pages)\\mypage\\page.js"],d="/(pages)/mypage/page",x={require:r,loadChunk:()=>Promise.resolve()},p=new A.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(pages)/mypage/page",pathname:"/mypage",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},99551:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,92481,23)),Promise.resolve().then(r.bind(r,5419)),Promise.resolve().then(r.bind(r,30200)),Promise.resolve().then(r.bind(r,18936))},51823:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var A=r(10326),s=r(17577),l=r(46226);let i={src:"/_next/static/media/bookFrame.0973a626.png",height:463,width:319,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAACVBMVEVMaXGlnpVsaml5thnzAAAAA3RSTlMAMxVjwEUFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAE0lEQVR4nGNgYmBgYGBkIJFiAgAC7QAacLCzXwAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},a={src:"/_next/static/media/bookShadow.6888558b.png",height:463,width:382,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAABlBMVEUAAABMaXFP2lwvAAAAAnRSTlMPAPEL0fcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2CEAAYIyUAqDQAF2wArWtPrSAAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8};var o=r(57298);function n({className:e,book:t,shadowType:r="null"}){let[n,c]=(0,s.useState)("#000000");return(0,A.jsxs)("div",{className:`${e} relative overflow-visible`,children:["shadow"==r&&A.jsx("div",{className:"absolute w-[119.74%] h-full",children:A.jsx(l.default,{src:a,alt:"bookShadow",fill:!0,sizes:1})}),"circle"==r&&A.jsx("div",{className:"absolute w-full pt-[100%]  mt-[6.03vw] st:mt-[86.88px] rounded-full blur-[5.52]",style:{background:`radial-gradient(50% 50% at 50% 50%, ${n}E6, ${n}00)`}}),A.jsx("div",{className:"absolute w-[96.55%] h-full rounded-r-[0.56vw] rounded-l-[0.42vw] st:rounded-r-[8px] st:rounded-l-[6px] overflow-clip",children:void 0!=t&&A.jsx(A.Fragment,{children:"circle"==r?A.jsx(o.r,{getColors:e=>{c(e[1])},children:A.jsx("img",{src:t.cover.replace(/coversum/,"cover500"),layout:"fill",alt:"bookCover",className:"h-full w-full object-fill"})}):A.jsx(l.default,{src:t.cover.replace(/coversum/,"cover500"),alt:"bookCover",fill:!0,sizes:1,className:"h-full w-full object-fill"})})}),A.jsx("div",{className:"absolute w-full h-full",children:A.jsx(l.default,{src:i,alt:"bookFrame",fill:!0,sizes:1})})]})}},18936:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var A=r(10326),s=r(17577),l=r(35047),i=r(51823),a=r(23871),o=r(4919);function n({className:e,width:t=125.2,books:r}){let n=(0,l.useRouter)(),c=t/125.2,[d,x]=(0,s.useState)(!0),[p,u]=(0,s.useState)(Array.from({length:10})),g=e=>{n.push(`/bookdetail/${e}`)};return A.jsx("div",{className:`${e}`,children:p.map((e,r)=>A.jsx("div",{className:"aspect-[1/2]",style:{width:t},children:(0,A.jsxs)("div",{className:"flex flex-col w-min h-min origin-top-left",style:{scale:`${c}`},onClick:()=>g(e.isbn13),children:[A.jsx(o.Z,{isLoading:d,children:A.jsx(i.Z,{className:"w-[125.2px] h-[181.51px]",book:e,shadowType:"circle"})}),A.jsx(o.Z,{isLoading:d,children:A.jsx(a.Z,{width:67.85,score:void 0==e?5:e.customerReviewRank,className:"mt-[15.09px]"})}),A.jsx(o.Z,{isLoading:d,children:A.jsx("p",{className:"font-KopubWorldBold text-black w-[125.2px] text-[13px] mt-[3.85px] truncate",children:void 0==e?"title":e.title})}),A.jsx(o.Z,{isLoading:d,children:A.jsx("p",{className:"font-NotoSansKRMedium text-textColor-secondary text-[10px] -mt-[1px] truncate",children:void 0==e?"author":e.subInfo.authors[0].authorName})})]},r)},r))})}},23871:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var A,s,l,i,a=r(10326),o=r(95746);function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var A in r)({}).hasOwnProperty.call(r,A)&&(e[A]=r[A])}return e}).apply(null,arguments)}let c=function(e){return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),A||(A=o.createElement("path",{fill:"currentColor",d:"M240.131 12.81c4.919-16.006 27.45-16.006 32.369 0l48.375 157.419c2.193 7.137 8.756 12.005 16.185 12.005h158.283c16.203 0 23.159 20.679 10.283 30.571L376.134 312.28c-5.641 4.334-7.997 11.745-5.901 18.566l49.113 159.819c4.869 15.845-13.363 28.633-26.469 18.565l-126.278-97.006a16.865 16.865 0 0 0-20.567 0L119.754 509.23c-13.107 10.068-31.338-2.72-26.469-18.566l49.113-159.818c2.096-6.821-.26-14.232-5.901-18.566L7.005 212.805c-12.876-9.892-5.92-30.571 10.283-30.571h158.283c7.429 0 13.992-4.868 16.185-12.005z"})))};function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var A in r)({}).hasOwnProperty.call(r,A)&&(e[A]=r[A])}return e}).apply(null,arguments)}let x=function(e){return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),s||(s=o.createElement("path",{stroke:"currentColor",strokeWidth:20,d:"m261.503 18.139 47.079 151.749c4.273 13.775 16.791 23.694 31.551 23.694h152.349c2.457 0 4.545 1.412 5.503 4.502.97 3.126.113 6.074-2.31 7.918l-123.253 93.786c-11.544 8.784-16.09 24.015-11.843 37.703l47.078 151.75c1.088 3.507-.196 6.309-2.31 7.918-1.077.819-2.195 1.173-3.128 1.202-.814.026-1.901-.169-3.258-1.202l-123.253-93.786c-11.707-8.908-27.709-8.908-39.416 0l-123.253 93.786c-1.357 1.033-2.444 1.228-3.258 1.202-.933-.029-2.051-.383-3.128-1.202-2.114-1.609-3.398-4.411-2.31-7.918l47.078-151.749c4.247-13.689-.298-28.92-11.843-37.704L16.325 206.002c-2.423-1.844-3.28-4.792-2.31-7.918.958-3.09 3.046-4.502 5.503-4.502h152.349c14.76 0 27.278-9.919 31.551-23.694l47.079-151.75c.596-1.92 1.52-2.938 2.328-3.515.882-.629 1.99-.986 3.175-.986s2.293.357 3.175.986c.808.577 1.732 1.595 2.328 3.516Z"})))};function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var A in r)({}).hasOwnProperty.call(r,A)&&(e[A]=r[A])}return e}).apply(null,arguments)}let u=function(e){return o.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),l||(l=o.createElement("path",{fill:"currentColor",d:"M256 .806c-6.863 0-13.725 4.001-16.185 12.005L191.44 170.229c-2.193 7.137-8.755 12.005-16.184 12.005H16.973c-16.204 0-23.16 20.679-10.284 30.571l129.492 99.475c5.642 4.334 7.998 11.745 5.902 18.566L92.97 490.664c-4.87 15.846 13.362 28.634 26.468 18.566l126.278-97.006A16.86 16.86 0 0 1 256 408.726z"})),i||(i=o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M256 408.92c3.624 0 7.248 1.166 10.284 3.498l126.278 97.006c13.106 10.069 31.337-2.72 26.468-18.565L369.917 331.04c-2.096-6.821.26-14.232 5.902-18.566l129.492-99.475c12.876-9.891 5.92-30.571-10.284-30.571H336.744c-7.429 0-13.991-4.867-16.184-12.005L272.185 13.005C269.725 5.002 262.863 1 256 1v27.424l45.442 147.874c4.755 15.473 19.028 26.13 35.302 26.13h149.497l-122.606 94.186c-12.291 9.441-17.374 25.531-12.835 40.301l46.344 150.809-118.677-91.166A36.82 36.82 0 0 0 256 388.92z",clipRule:"evenodd"})))};function g({width:e,score:t,className:r}){let A=Math.floor(t/2),s=Math.floor(t%2);return a.jsx("div",{className:`${r} flex flex-row w-min h-min gap-[0.08vw] st:gap-[1.12px] origin-top-left`,style:{scale:`${e/67.85}`},children:Array.from({length:5},(e,t)=>a.jsx("div",{className:"relative w-[0.89vw] h-[0.89vw] st:w-[12.8px] st:h-[12.8px] text-primary",children:t<A?a.jsx(c,{}):t==A&&1==s?a.jsx(u,{}):a.jsx(x,{})},t))})}},4919:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var A=r(10326),s=r(85428);let l=({isLoading:e,children:t})=>A.jsx(A.Fragment,{children:e?A.jsx(s.E.div,{initial:{backgroundPositionX:"100%"},animate:{backgroundPositionX:"0%"},transition:{duration:1,ease:"linear",repeat:1/0},className:"flex w-min h-min bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:300%] bg-[position-x:100%]",children:A.jsx("div",{className:"flex w-min h-min invisible",children:t})}):t})},34711:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var A=r(19510),s=r(17710);let l={src:"/_next/static/media/bookmarkPic.e8902819.png",height:385,width:414,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAaVBMVEWJW1ve3+WYRUXo38ng4MHFxbqPODfm5vPUnDPcozWeVVXExLji6umElJWgY3CxZjONNze4dTNFAFzXtEYzX3XspyJicG1qiqrYnjBsgoegVlY9X3NTU19he4Xw7umWQD6pUlW/lUBObX6I1t1jAAAAIHRSTlMBhjM5FGmTBtX6RXuXxGSVgLYLOlBSWzCeXN+da7Vtkto4NcwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA+SURBVHicFcRFEsAgEADBgSBLjLj7/x+Zog/Npi+1hFe4j3MeQxDYv6FrJbLaqW8eV1MVGO3yEpvhwah04n9rjAKWNalmFQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7},i={src:"/_next/static/media/profile.8630784d.jpg",height:720,width:720,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABvhf/xAAXEAADAQAAAAAAAAAAAAAAAAABAgMU/9oACAEBAAEFAjVNH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABkQAAEFAAAAAAAAAAAAAAAAACEAERITIv/aAAgBAQAGPwKvUmIC/8QAGRABAAIDAAAAAAAAAAAAAAAAAQARITFh/9oACAEBAAE/ITVWrwSB1yf/2gAMAwEAAgADAAAAEPP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxCP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAFxABAQEBAAAAAAAAAAAAAAAAAREhAP/aAAgBAQABPxAMmSUoUpho6zv/2Q==",blurWidth:8,blurHeight:8};var a=r(68570);let o=(0,a.createProxy)(String.raw`C:\Users\bora5\Working\booksight\src\app\components\Booklist.js`),{__esModule:n,$$typeof:c}=o;function d(e){return(0,A.jsxs)("div",{className:"flex flex-row",children:[A.jsx("div",{className:"relative ml-[79px] w-[413.2px] h-[725px] rounded-[45px] bg-white overflow-clip",children:(0,A.jsxs)("div",{className:"w-full h-full flex flex-col items-center",children:[(0,A.jsxs)("div",{className:"relative flex flex-col items-center w-full h-[384.26px]",children:[A.jsx(s.default,{src:l,alt:"bookmarkFramePic",fill:!0,sizes:1}),A.jsx("div",{className:"absolute w-[32.22px] h-[32.22px] rounded-full bg-background mt-[15.16px]"}),A.jsx("div",{className:"relative w-[267.25px] h-[267.25px] rounded-full mt-[73.92px] border-primary border-[4.74px] overflow-clip",children:A.jsx(s.default,{src:i,alt:"profilePic",fill:!0,sizes:1})})]}),(0,A.jsxs)("div",{className:"relative flex flex-col justify-center  items-center w-[413.2px] h-[33px] -mt-[12.26px]",children:[A.jsx("div",{className:"absolute w-full h-[4px] bg-primary flex items-center justify-center"}),A.jsx("div",{className:"absolute rounded-full bg-primary flex items-center justify-center px-[20px] pt-[6px] pb-[8px]",children:A.jsx("p",{className:"font-NotoSansKRMedium text-[15px] text-white",children:"월간 독서량 : 2권"})})]}),A.jsx("p",{className:"font-KopubWorldBold text-black text-[47px] mt-[52px]",children:"이명준"}),A.jsx("p",{className:"font-NotoSansKRMedium text-black text-[25px]",children:"노련한 독서가"}),(0,A.jsxs)("div",{className:"flex flex-row items-center mt-[11.34px] font-NotoSansKRMedium text-black text-[15px] gap-[10.42px]",children:[A.jsx("p",{children:"영미 소설"}),A.jsx("div",{className:"w-[4.74px] h-[4.74px] rounded-full bg-primary"}),A.jsx("p",{children:"스릴러"}),A.jsx("div",{className:"w-[4.74px] h-[4.74px] rounded-full bg-primary"}),A.jsx("p",{children:"코미디"})]})]})}),(0,A.jsxs)("div",{className:"ml-[108.8px] w-full h-min flex flex-col",children:[(0,A.jsxs)("div",{className:"flex flex-row gap-[37px] font-KopubWorldBold text-textColor-primary text-[23px]",children:[A.jsx("p",{children:"읽은 책들"}),A.jsx("p",{children:"내 서고"}),A.jsx("p",{children:"대출 현황"})]}),(0,A.jsxs)("div",{className:"relative mt-[1px] w-[344px] h-[3px]",children:[A.jsx("div",{className:"absolute w-full h-full bg-black opacity-10"}),A.jsx("div",{className:"absolute w-[102px] h-full bg-primary"})]})]})]})}o.default,(0,a.createProxy)(String.raw`C:\Users\bora5\Working\booksight\src\app\components\Booklist.js#default`)},5419:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>A});let A={src:"/_next/static/media/bookmarkPic.e8902819.png",height:385,width:414,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAaVBMVEWJW1ve3+WYRUXo38ng4MHFxbqPODfm5vPUnDPcozWeVVXExLji6umElJWgY3CxZjONNze4dTNFAFzXtEYzX3XspyJicG1qiqrYnjBsgoegVlY9X3NTU19he4Xw7umWQD6pUlW/lUBObX6I1t1jAAAAIHRSTlMBhjM5FGmTBtX6RXuXxGSVgLYLOlBSWzCeXN+da7Vtkto4NcwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA+SURBVHicFcRFEsAgEADBgSBLjLj7/x+Zog/Npi+1hFe4j3MeQxDYv6FrJbLaqW8eV1MVGO3yEpvhwah04n9rjAKWNalmFQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7}},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var A=r(66621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,A.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),A=t.X(0,[948,351,621,428,298,36],()=>r(98793));module.exports=A})();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{124:function(e,t,n){"use strict";var r,l,a,s=n(4410);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}t.Z=function(e){return s.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),r||(r=s.createElement("circle",{cx:68.267,cy:68.267,r:68.267,fill:"currentColor",transform:"matrix(1 0 0 -1 187.733 136.533)"})),l||(l=s.createElement("circle",{cx:68.267,cy:68.267,r:68.267,fill:"currentColor",transform:"matrix(1 0 0 -1 187.733 324.267)"})),a||(a=s.createElement("circle",{cx:68.267,cy:68.267,r:68.267,fill:"currentColor",transform:"matrix(1 0 0 -1 187.733 512)"})))}},9039:function(e,t,n){"use strict";var r,l=n(4410);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}t.Z=function(e){return l.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),r||(r=l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M228.5 47.5q52.5-2.815 104 7.5 78.2 22.7 88.5 103.5 1 129 0 258-5.726 38.226-43.5 46.5-15.888 2.007-31-3a3729 3729 0 0 1-71-41q-15.122-9.523-32-4a3729 3729 0 0 0-71 41q-27.746 14.44-56 1-23.191-13.605-26.5-40.5-1-129 0-258Q98.878 85.132 167.5 58q30.26-7.875 61-10.5m25 32a346.8 346.8 0 0 1 78 9.5q49.126 18.494 56.5 70.5 1 127 0 254-5.985 19.869-26.5 16.5l-82-46q-24-9-48 0a427545 427545 0 0 0-82 46q-17.712 3.772-25.5-12.5a8388 8388 0 0 1-1-258q7.374-52.006 56.5-70.5 36.717-8.715 74-9.5",clipRule:"evenodd"})))}},6397:function(e,t,n){Promise.resolve().then(n.t.bind(n,4080,23)),Promise.resolve().then(n.t.bind(n,5326,23)),Promise.resolve().then(n.t.bind(n,3054,23)),Promise.resolve().then(n.bind(n,395))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return l.a}});var r=n(5601),l=n.n(r)},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},905:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return s},isEqualNode:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?l[a]=!!n[e]:l.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:s}=n;return s?l.innerHTML=s.__html||"":a&&(l.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),l}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function s(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),s=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<s;t++,n=(null==n?void 0:n.previousElementSibling)||null){var o;(null==n?void 0:null==(o=n.tagName)?void 0:o.toLowerCase())===e&&i.push(n)}let u=t.map(l).filter(e=>{for(let t=0,n=i.length;t<n;t++)if(a(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(s-i.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return x}});let r=n(9920),l=n(1452),a=n(7437),s=r._(n(4887)),i=l._(n(2265)),o=n(6590),u=n(905),c=n(9189),A=new Map,f=new Set,d=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(s.default.preinit){e.forEach(e=>{s.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:a,children:s="",strategy:i="afterInteractive",onError:o,stylesheets:c}=e,h=n||t;if(h&&f.has(h))return;if(A.has(t)){f.add(h),A.get(t).then(r,o);return}let m=()=>{l&&l(),f.add(h)},x=document.createElement("script"),g=new Promise((e,t)=>{x.addEventListener("load",function(t){e(),r&&r.call(this,t),m()}),x.addEventListener("error",function(e){t(e)})}).catch(function(e){o&&o(e)});for(let[n,r]of(a?(x.innerHTML=a.__html||"",m()):s?(x.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):"",m()):t&&(x.src=t,A.set(t,g)),Object.entries(e))){if(void 0===r||d.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();x.setAttribute(e,r)}"worker"===i&&x.setAttribute("type","text/partytown"),x.setAttribute("data-nscript",i),c&&p(c),document.body.appendChild(x)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))}):h(e)}function x(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:u="afterInteractive",onError:A,stylesheets:d,...p}=e,{updateScripts:m,scripts:x,getIsSsr:g,appDir:v,nonce:b}=(0,i.useContext)(o.HeadManagerContext),y=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;y.current||(l&&e&&f.has(e)&&l(),y.current=!0)},[l,t,n]);let w=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!w.current&&("afterInteractive"===u?h(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))})),w.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(m?(x[u]=(x[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:A,...p}]),m(x)):g&&g()?f.add(t||n):g&&!g()&&h(e)),v){if(d&&d.forEach(e=>{s.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(s.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:b}:{as:"script",nonce:b}),(0,a.jsx)("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...p,id:t}])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p,id:t}])+")"}}));"afterInteractive"===u&&n&&s.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:b}:{as:"script",nonce:b})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let v=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return i}});let r=n(9920),l=n(497),a=n(8173),s=r._(n(1241));function i(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=a.Image},395:function(e,t,n){"use strict";n.d(t,{default:function(){return y}});var r,l,a=n(7437),s=n(6463),i=n(6648),o=n(4480),u=n(2265),c=n(4410);function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var f=function(e){return c.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),r||(r=c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M210.5 76.5q105.022-5.884 154.5 86 31.015 71.193-5 140a139.5 139.5 0 0 1-14.5 20.5l86.5 86.5q6.657 13.168-4.5 22.5-8.958 4.898-18 0L323 345.5q-54.171 42.357-122.5 31.5-81.681-17.683-114.5-94.5-31.756-96.21 39.5-167.5 36.798-31.848 85-38.5m3 32q91.977-4.174 127.5 80 22.506 77.242-36.5 131.5-59.204 45.15-128 16-78.973-43.7-65.5-133.5 21.435-79.692 102.5-94",clipRule:"evenodd"})))};function d(){let[e,t]=(0,u.useState)(""),[n,r]=(0,u.useState)("오베라는 남자"),l=(0,s.useRouter)(),i=e=>{l.push("/searchresult?SearchTarget=All&SearchWord=".concat(e))};return(0,a.jsxs)("div",{className:"w-full h-full flex flex-row items-center justify-start gap-[10px] pl-[10px] bg-searchBar rounded-[40px]",children:[(0,a.jsx)("div",{className:"relative w-[30px] h-[30px]",children:(0,a.jsx)(f,{className:"w-full h-full text-black"})}),(0,a.jsx)("input",{type:"text",value:e,onChange:e=>{t(e.target.value)},onFocus:()=>{r("")},onBlur:()=>{t(""),r("오베라는 남자")},onKeyDown:n=>{"Enter"===n.key&&(n.preventDefault(),i(e),t(""))},placeholder:n,className:"flex-grow h-full font-NotoSansKRBold text-[15px] text-black  placeholder:text-[15px] placeholder:text-black placeholder:font-NotoSansKRBold placeholder:text-opacity-50  bg-transparent focus:outline-none focus:ring-0"})]})}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var h=function(e){return c.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 512 512"},e),l||(l=c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M243.5 46.5q96.267-.77 140.5 84a154.4 154.4 0 0 1 11 39 25779 25779 0 0 0 3 91 54 54 0 0 0 8 15q15.738 13.726 27 31 19.745 51.748-27.5 80.5a74.3 74.3 0 0 1-16 5q-137 1-274 0-46.868-10.416-51-58.5.577-22.486 14.5-40l20-20a51.4 51.4 0 0 0 7-15q1.551-45.977 3-92Q128.42 73.577 220.5 50a404 404 0 0 1 23-3.5m1 33q71.86-.713 107.5 61a111.7 111.7 0 0 1 10 32 2140 2140 0 0 1 2 87q2.774 18.036 13 33a424 424 0 0 0 24 25q11.673 21.487-6.5 37.5a54 54 0 0 1-9 4q-133 1-266 0-27.282-8.81-19.5-36.5 10.831-15.34 25-28 10.643-13.79 14-31a2029 2029 0 0 0 2-86q10.938-68.93 76.5-92.5 13.507-3.745 27-5.5M212.5 431.5q39.503-.25 79 .5 16.617 10.801 5.5 27.5l-5.5 3.5a1560 1560 0 0 1-79 0q-15.97-9.127-7.5-25.5 3.171-3.931 7.5-6",clipRule:"evenodd"})))},m=n(9039),x=n(124),g=n(4325);function v(e){let t=(0,s.useRouter)(),n=()=>{t.push("/home")};return(0,a.jsxs)("div",{className:"".concat(e.className," w-full h-[45px] flex flex-row items-center px-[80px] gap-[40px] font-NotoSansKRMedium text-nowrap"),children:[(0,a.jsx)("div",{className:"relative w-[243px] h-[45px]",children:(0,a.jsx)(i.default,{src:g.Z,fill:!0,sizes:1,alt:"logoPic",className:"object-contain",onClick:n})}),(0,a.jsx)(d,{}),(0,a.jsxs)("div",{className:"w-min h-full flex flex-row items-center justify-start gap-[29px] text-[16px] font-NotoSansKRSemiBold",children:[(0,a.jsx)("p",{onClick:n,children:"홈으로"}),(0,a.jsx)("p",{onClick:()=>{t.push("/librarysearch")},children:"도서관 탐색"}),(0,a.jsx)("p",{children:"사이트 정보"})]}),(0,a.jsxs)("div",{className:"w-min h-full flex flex-row items-center justify-start gap-[40px]",children:[(0,a.jsxs)("div",{className:"w-min h-full flex flex-row justify-start items-center gap-[25px]",children:[(0,a.jsxs)("div",{className:"relative w-[22px] h-[22px]",children:[(0,a.jsx)(m.Z,{className:"absolute w-full h-full text-black"}),(0,a.jsx)("div",{className:"absolute ml-[-7px] mt-[-6px] flex items-center justify-center w-[14px] h-[14px] rounded-full bg-primary overflow-visible",children:(0,a.jsx)("p",{className:"text-[11px] text-white",children:"5"})})]}),(0,a.jsxs)("div",{className:"relative w-[22px] h-[22px]",children:[(0,a.jsx)(h,{className:"absolute"}),(0,a.jsx)("div",{className:"absolute ml-[-7px] mt-[-6px] flex items-center justify-center w-[14px] h-[14px] rounded-full bg-primary overflow-visible",children:(0,a.jsx)("p",{className:"text-[11px] text-white",children:"5"})})]})]}),(0,a.jsxs)("div",{className:"w-min h-full flex flex-row justify-start items-center gap-[14.5px]",children:[(0,a.jsx)("div",{className:"relative w-[42px] h-[42px] rounded-full overflow-clip",children:(0,a.jsx)(i.default,{src:o.default,alt:"profilePic",fill:!0,sizes:1})}),(0,a.jsx)("div",{className:"relative w-[15px] h-[15px]",children:(0,a.jsx)(x.Z,{className:"absolute"})})]})]})]})}function b(e){let{pathName:t}=e;return(0,a.jsxs)("div",{className:"flex flex-col items-center w-full h-min mt-[47px]",children:[(0,a.jsxs)("div",{className:"flex flex-col w-min h-min",children:[(0,a.jsx)("p",{className:"font-KopubWorldBold whitespace-nowrap z-10 text-[38px] pr-[0.49vw]",children:{"/librarysearch":"도서관 탐색","/mypage":"마이 페이지","/searchresult":"검색 결과"}[t]}),(0,a.jsx)("div",{className:"w-full h-[14px] -mt-[24px] bg-primary z-0"})]}),(0,a.jsx)("div",{className:"w-full mt-[50px]"})]})}function y(){let e=(0,s.usePathname)();return(0,a.jsxs)(a.Fragment,{children:[["/home","/librarysearch","/mypage","/bookdetail","/searchresult","/authordetail"].some(t=>e.startsWith(t))&&(0,a.jsx)(v,{className:"mt-[30px]"}),["/librarysearch","/mypage","/searchresult"].some(t=>e.startsWith(t))&&(0,a.jsx)(b,{pathName:e})]})}},3054:function(){},4325:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.a46bff25.png",height:280,width:1624,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEUsFxArGBAsGBArGRCC3QWNAAAABHRSTlNAUZ+NICkTaAAAAAlwSFlzAAAsSwAALEsBpT2WqQAAABFJREFUeJxjYGJgYGBmZGQAAAAqAAjJmBvnAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1}},4480:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/profile.8630784d.jpg",height:720,width:720,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABvhf/xAAXEAADAQAAAAAAAAAAAAAAAAABAgMU/9oACAEBAAEFAjVNH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABkQAAEFAAAAAAAAAAAAAAAAACEAERITIv/aAAgBAQAGPwKvUmIC/8QAGRABAAIDAAAAAAAAAAAAAAAAAQARITFh/9oACAEBAAE/ITVWrwSB1yf/2gAMAwEAAgADAAAAEPP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxCP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAFxABAQEBAAAAAAAAAAAAAAAAAREhAP/aAAgBAQABPxAMmSUoUpho6zv/2Q==",blurWidth:8,blurHeight:8}},5326:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}}},function(e){e.O(0,[370,534,971,23,744],function(){return e(e.s=6397)}),_N_E=e.O()}]);
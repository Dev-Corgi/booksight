"use strict";(()=>{var e={};e.id=363,e.ids=[363],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},52138:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>h,patchFetch:()=>g,requestAsyncStorage:()=>p,routeModule:()=>l,serverHooks:()=>c,staticGenerationAsyncStorage:()=>d});var o={};t.r(o),t.d(o,{GET:()=>u});var s=t(49303),a=t(88716),n=t(60670),i=t(87070);async function u(e){let r=process.env.NARU_API_KEY,{searchParams:t}=new URL(e.url),o=t.get("libCode");if(!o)return i.NextResponse.json({error:"Missing required parameter: libCode"},{status:400});let s=`http://data4library.kr/api/extends/libSrch?authKey=${r}&libCode=${o}&format=json`;try{let e=await fetch(s);if(!e.ok){let r=await e.text();return console.error(`API request failed: ${e.status} ${e.statusText}. ${r}`),i.NextResponse.json({error:"Failed to fetch data from external API"},{status:e.status})}let r=await e.json(),t=i.NextResponse.json(r);return t.headers.set("Access-Control-Allow-Origin","*"),t.headers.set("Access-Control-Allow-Methods","GET, POST, OPTIONS"),t.headers.set("Access-Control-Allow-Headers","X-Requested-With, Content-Type"),t}catch(e){return console.error("Error occurred while fetching library info:",e.message),i.NextResponse.json({error:"Server error occurred",details:e.message},{status:500})}}let l=new s.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/getLibraryInfo/route",pathname:"/api/getLibraryInfo",filename:"route",bundlePath:"app/api/getLibraryInfo/route"},resolvedPagePath:"C:\\Users\\bora5\\Working\\booksight\\src\\app\\api\\getLibraryInfo\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:p,staticGenerationAsyncStorage:d,serverHooks:c}=l,h="/api/getLibraryInfo/route";function g(){return(0,n.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:d})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948,972],()=>t(52138));module.exports=o})();
"use strict";(()=>{var e={};e.id=293,e.ids=[293],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},24119:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>h,patchFetch:()=>w,requestAsyncStorage:()=>p,routeModule:()=>d,serverHooks:()=>l,staticGenerationAsyncStorage:()=>c});var o={};t.r(o),t.d(o,{GET:()=>i});var s=t(49303),a=t(88716),n=t(60670),u=t(87070);async function i(e){let{searchParams:r}=new URL(e.url),t=r.get("keyword"),o=process.env.NARU_API_KEY;if(!t)return u.NextResponse.json({error:"Missing required parameter: keyword"},{status:400});try{let e=`http://data4library.kr/api/srchBooks?authKey=${o}&keyword=${t}&sort=loan&order=desc&format=json`,r=await fetch(e,{method:"GET"});if(!r.ok)throw Error(`API request failed: ${r.status} ${r.statusText}`);let s=await r.json(),a=u.NextResponse.json(s);return a.headers.set("Access-Control-Allow-Origin","*"),a.headers.set("Access-Control-Allow-Methods","GET, POST, OPTIONS"),a.headers.set("Access-Control-Allow-Headers","X-Requested-With, Content-Type"),a}catch(e){return console.error("Error occurred:",e.message),u.NextResponse.json({error:e.message},{status:500})}}let d=new s.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/naruKeywordSearch/route",pathname:"/api/naruKeywordSearch",filename:"route",bundlePath:"app/api/naruKeywordSearch/route"},resolvedPagePath:"C:\\Users\\bora5\\Working\\booksight\\src\\app\\api\\naruKeywordSearch\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:p,staticGenerationAsyncStorage:c,serverHooks:l}=d,h="/api/naruKeywordSearch/route";function w(){return(0,n.patchFetch)({serverHooks:l,staticGenerationAsyncStorage:c})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948,972],()=>t(24119));module.exports=o})();
"use strict";(()=>{var e={};e.id=224,e.ids=[224],e.modules={98860:e=>{e.exports=require("jsdom")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},91460:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>x,patchFetch:()=>q,requestAsyncStorage:()=>h,routeModule:()=>d,serverHooks:()=>m,staticGenerationAsyncStorage:()=>c});var o={};t.r(o),t.d(o,{GET:()=>l});var s=t(49303),a=t(88716),i=t(60670),u=t(29712),p=t(98860),n=t(87070);async function l(e){let{searchParams:r}=new URL(e.url),t=r.get("authorName"),o=r.get("authorCode"),s=1,a=[],i=!0;for(;i;)try{let e=`https://www.aladin.co.kr/m/msearch.aspx?AuthorSearch=${t}@${o}&BranchType=1&page=${s}`,r=await u.Z.get(e),n=new p.JSDOM(r.data).window.document.querySelectorAll("div.browse_list_box[itemId]");if(0===n.length){i=!1;break}n.forEach(e=>{let r=e.getAttribute("itemId");a.push(r)}),s+=1}catch(e){console.error(`Error fetching page ${s}:`,e);break}a=a.map(Number);let l=n.NextResponse.json({itemIds:a});return l.headers.set("Access-Control-Allow-Origin","*"),l.headers.set("Access-Control-Allow-Methods","GET, POST, OPTIONS"),l.headers.set("Access-Control-Allow-Headers","X-Requested-With, Content-Type"),l}let d=new s.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/authorItemIdCrawler/route",pathname:"/api/authorItemIdCrawler",filename:"route",bundlePath:"app/api/authorItemIdCrawler/route"},resolvedPagePath:"C:\\Users\\bora5\\Working\\booksight\\src\\app\\api\\authorItemIdCrawler\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:h,staticGenerationAsyncStorage:c,serverHooks:m}=d,x="/api/authorItemIdCrawler/route";function q(){return(0,i.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:c})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948,972,712],()=>t(91460));module.exports=o})();
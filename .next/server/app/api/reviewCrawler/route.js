"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/reviewCrawler/route";
exports.ids = ["app/api/reviewCrawler/route"];
exports.modules = {

/***/ "jsdom":
/*!************************!*\
  !*** external "jsdom" ***!
  \************************/
/***/ ((module) => {

module.exports = require("jsdom");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FreviewCrawler%2Froute&page=%2Fapi%2FreviewCrawler%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FreviewCrawler%2Froute.js&appDir=C%3A%5CUsers%5Cbora5%5CWorking%5Cbooksight%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbora5%5CWorking%5Cbooksight&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FreviewCrawler%2Froute&page=%2Fapi%2FreviewCrawler%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FreviewCrawler%2Froute.js&appDir=C%3A%5CUsers%5Cbora5%5CWorking%5Cbooksight%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbora5%5CWorking%5Cbooksight&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_bora5_Working_booksight_src_app_api_reviewCrawler_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/reviewCrawler/route.js */ \"(rsc)/./src/app/api/reviewCrawler/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/reviewCrawler/route\",\n        pathname: \"/api/reviewCrawler\",\n        filename: \"route\",\n        bundlePath: \"app/api/reviewCrawler/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\bora5\\\\Working\\\\booksight\\\\src\\\\app\\\\api\\\\reviewCrawler\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_bora5_Working_booksight_src_app_api_reviewCrawler_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/reviewCrawler/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyZXZpZXdDcmF3bGVyJTJGcm91dGUmcGFnZT0lMkZhcGklMkZyZXZpZXdDcmF3bGVyJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcmV2aWV3Q3Jhd2xlciUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNib3JhNSU1Q1dvcmtpbmclNUNib29rc2lnaHQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2JvcmE1JTVDV29ya2luZyU1Q2Jvb2tzaWdodCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNEI7QUFDekc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rc2lnaHQvP2NhNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcYm9yYTVcXFxcV29ya2luZ1xcXFxib29rc2lnaHRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccmV2aWV3Q3Jhd2xlclxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmV2aWV3Q3Jhd2xlci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Jldmlld0NyYXdsZXJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Jldmlld0NyYXdsZXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxib3JhNVxcXFxXb3JraW5nXFxcXGJvb2tzaWdodFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyZXZpZXdDcmF3bGVyXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9yZXZpZXdDcmF3bGVyL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FreviewCrawler%2Froute&page=%2Fapi%2FreviewCrawler%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FreviewCrawler%2Froute.js&appDir=C%3A%5CUsers%5Cbora5%5CWorking%5Cbooksight%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbora5%5CWorking%5Cbooksight&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/reviewCrawler/route.js":
/*!********************************************!*\
  !*** ./src/app/api/reviewCrawler/route.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var jsdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsdom */ \"jsdom\");\n/* harmony import */ var jsdom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsdom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n// app/api/reviewCrawler/route.js (Next.js 13+ API routes)\n\n\n\nasync function GET(request) {\n    const url = new URL(request.url).searchParams.get(\"url\");\n    if (!url) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: \"Missing required parameter: url\"\n        }, {\n            status: 400\n        });\n    }\n    try {\n        // HTML 가져오기\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(url);\n        // jsdom을 사용하여 HTML 파싱\n        const dom = new jsdom__WEBPACK_IMPORTED_MODULE_0__.JSDOM(data);\n        const document = dom.window.document;\n        // 원하는 텍스트 추출\n        const metaDescription = document.querySelector('meta[property=\"og:description\"]');\n        const text = metaDescription ? metaDescription.getAttribute(\"content\") : \"No description found\";\n        // 상태에 텍스트 설정\n        const res = next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            text: text\n        });\n        res.headers.set(\"Access-Control-Allow-Origin\", \"*\"); // 모든 도메인 허용\n        res.headers.set(\"Access-Control-Allow-Methods\", \"GET, POST, OPTIONS\"); // 허용된 메소드 설정\n        res.headers.set(\"Access-Control-Allow-Headers\", \"X-Requested-With, Content-Type\"); // 허용된 헤더 설정\n        return res;\n    } catch (error) {\n        console.error(\"Error fetching data:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: \"Failed to fetch data\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yZXZpZXdDcmF3bGVyL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMERBQTBEO0FBQ2hDO0FBQ0k7QUFDYTtBQUVwQyxlQUFlRyxJQUFJQyxPQUFPO0lBQy9CLE1BQU1DLE1BQU0sSUFBSUMsSUFBSUYsUUFBUUMsR0FBRyxFQUFFRSxZQUFZLENBQUNDLEdBQUcsQ0FBQztJQUVsRCxJQUFJLENBQUNILEtBQUs7UUFDUixPQUFPSCxxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBa0MsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDdkY7SUFFQSxJQUFJO1FBQ0YsWUFBWTtRQUNaLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVosNkNBQUtBLENBQUNRLEdBQUcsQ0FBQ0g7UUFFakMsc0JBQXNCO1FBQ3RCLE1BQU1RLE1BQU0sSUFBSVosd0NBQUtBLENBQUNXO1FBQ3RCLE1BQU1FLFdBQVdELElBQUlFLE1BQU0sQ0FBQ0QsUUFBUTtRQUVwQyxhQUFhO1FBQ2IsTUFBTUUsa0JBQWtCRixTQUFTRyxhQUFhLENBQUM7UUFDL0MsTUFBTUMsT0FBT0Ysa0JBQWtCQSxnQkFBZ0JHLFlBQVksQ0FBQyxhQUFhO1FBRXpFLGFBQWE7UUFFYixNQUFNQyxNQUFNbEIscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFUyxNQUFNQTtRQUFLO1FBQzNDRSxJQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsTUFBTSxZQUFZO1FBQ2pFRixJQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQ0FBZ0MsdUJBQXVCLGFBQWE7UUFDcEZGLElBQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdDQUFnQyxtQ0FBbUMsWUFBWTtRQUUvRixPQUFPRjtJQUNULEVBQUUsT0FBT1YsT0FBTztRQUNkYSxRQUFRYixLQUFLLENBQUMsd0JBQXdCQTtRQUN0QyxPQUFPUixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBdUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDNUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tzaWdodC8uL3NyYy9hcHAvYXBpL3Jldmlld0NyYXdsZXIvcm91dGUuanM/YzM4MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYXBpL3Jldmlld0NyYXdsZXIvcm91dGUuanMgKE5leHQuanMgMTMrIEFQSSByb3V0ZXMpXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEpTRE9NIH0gZnJvbSAnanNkb20nO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QpIHtcclxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5zZWFyY2hQYXJhbXMuZ2V0KCd1cmwnKTtcclxuXHJcbiAgaWYgKCF1cmwpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXI6IHVybCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBIVE1MIOqwgOyguOyYpOq4sFxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcclxuXHJcbiAgICAvLyBqc2RvbeydhCDsgqzsmqntlZjsl6wgSFRNTCDtjIzsi7FcclxuICAgIGNvbnN0IGRvbSA9IG5ldyBKU0RPTShkYXRhKTtcclxuICAgIGNvbnN0IGRvY3VtZW50ID0gZG9tLndpbmRvdy5kb2N1bWVudDtcclxuXHJcbiAgICAvLyDsm5DtlZjripQg7YWN7Iqk7Yq4IOy2lOy2nFxyXG4gICAgY29uc3QgbWV0YURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJdJyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gbWV0YURlc2NyaXB0aW9uID8gbWV0YURlc2NyaXB0aW9uLmdldEF0dHJpYnV0ZSgnY29udGVudCcpIDogJ05vIGRlc2NyaXB0aW9uIGZvdW5kJztcclxuXHJcbiAgICAvLyDsg4Htg5zsl5Ag7YWN7Iqk7Yq4IOyEpOyglVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IE5leHRSZXNwb25zZS5qc29uKHsgdGV4dDogdGV4dCB9KTtcclxuICAgIHJlcy5oZWFkZXJzLnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTsgLy8g66qo65OgIOuPhOuplOyduCDtl4jsmqlcclxuICAgIHJlcy5oZWFkZXJzLnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsIFBPU1QsIE9QVElPTlMnKTsgLy8g7ZeI7Jqp65CcIOuplOyGjOuTnCDshKTsoJVcclxuICAgIHJlcy5oZWFkZXJzLnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUnKTsgLy8g7ZeI7Jqp65CcIO2XpOuNlCDshKTsoJVcclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGRhdGEnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkpTRE9NIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVxdWVzdCIsInVybCIsIlVSTCIsInNlYXJjaFBhcmFtcyIsImdldCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImRhdGEiLCJkb20iLCJkb2N1bWVudCIsIndpbmRvdyIsIm1ldGFEZXNjcmlwdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0IiwiZ2V0QXR0cmlidXRlIiwicmVzIiwiaGVhZGVycyIsInNldCIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/reviewCrawler/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/axios","vendor-chunks/asynckit","vendor-chunks/debug","vendor-chunks/mime-db","vendor-chunks/form-data","vendor-chunks/follow-redirects","vendor-chunks/supports-color","vendor-chunks/proxy-from-env","vendor-chunks/mime-types","vendor-chunks/has-flag","vendor-chunks/delayed-stream","vendor-chunks/combined-stream"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FreviewCrawler%2Froute&page=%2Fapi%2FreviewCrawler%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FreviewCrawler%2Froute.js&appDir=C%3A%5CUsers%5Cbora5%5CWorking%5Cbooksight%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbora5%5CWorking%5Cbooksight&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
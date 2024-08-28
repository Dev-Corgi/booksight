"use strict";
(() => {
var exports = {};
exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 2254:
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ 8849:
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ 2286:
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ 7503:
/***/ ((module) => {

module.exports = require("node:net");

/***/ }),

/***/ 9411:
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ 7742:
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ 1360:
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ 2477:
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ 1041:
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ 7261:
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ 5628:
/***/ ((module) => {

module.exports = require("node:zlib");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1267:
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ 1563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/reverseGeoCode/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  handler: () => (handler)
});

// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6783);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(6649);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(4908);
// EXTERNAL MODULE: ./node_modules/node-fetch/src/index.js + 12 modules
var src = __webpack_require__(4868);
;// CONCATENATED MODULE: ./src/app/api/reverseGeoCode/route.js
// node-fetch를 ES 모듈 방식으로 가져오기

const handler = async (event)=>{
    const authID = process.env.NAVER_MAP_API_ID;
    const authKEY = process.env.NAVER_MAP_API_KEY;
    const coords = event.queryStringParameters.coords;
    const apiUrl = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${coords}&orders=roadaddr&output=json`;
    const response = await (0,src/* default */.ZP)(apiUrl, {
        method: "GET",
        headers: {
            "X-NCP-APIGW-API-KEY-ID": authID,
            "X-NCP-APIGW-API-KEY": authKEY
        }
    });
    const data = await response.json();
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};

;// CONCATENATED MODULE: ../../AppData/Roaming/npm/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FreverseGeoCode%2Froute&name=app%2Fapi%2FreverseGeoCode%2Froute&pagePath=private-next-app-dir%2Fapi%2FreverseGeoCode%2Froute.js&appDir=C%3A%5CUsers%5Cbora5%5CWorking%5Cbooksight%5Csrc%5Capp&appPaths=%2Fapi%2FreverseGeoCode%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/reverseGeoCode/route",
        pathname: "/api/reverseGeoCode",
        filename: "route",
        bundlePath: "app/api/reverseGeoCode/route"
    },
    resolvedPagePath: "C:\\Users\\bora5\\Working\\booksight\\src\\app\\api\\reverseGeoCode\\route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/reverseGeoCode/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [284,792,324,868], () => (__webpack_exec__(1563)));
module.exports = __webpack_exports__;

})();
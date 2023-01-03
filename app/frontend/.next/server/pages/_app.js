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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIsMounted\": () => (/* reexport safe */ _useIsMounted__WEBPACK_IMPORTED_MODULE_0__.useIsMounted)\n/* harmony export */ });\n/* harmony import */ var _useIsMounted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIsMounted */ \"./hooks/useIsMounted.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QyIsInNvdXJjZXMiOlsid2VicGFjazovL0BjcmVhdGUtd2ViMy9mcm9udGVuZC8uL2hvb2tzL2luZGV4LmpzPzQ4MjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgdXNlSXNNb3VudGVkIH0gZnJvbSBcIi4vdXNlSXNNb3VudGVkXCI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VJc01vdW50ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/index.js\n");

/***/ }),

/***/ "./hooks/useIsMounted.js":
/*!*******************************!*\
  !*** ./hooks/useIsMounted.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useIsMounted\": () => (/* binding */ useIsMounted)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useIsMounted = ()=>{\n    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>setMounted(true)\n    , []);\n    return mounted;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VJc01vdW50ZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRXhCLE1BQU1DLFlBQVksR0FBRyxJQUFNO0lBQ2hDLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR0gsMkNBQWMsQ0FBQyxLQUFLLENBQUM7SUFFbkRBLDRDQUFlLENBQUMsSUFBTUcsVUFBVSxDQUFDLElBQUksQ0FBQztJQUFBLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFNUMsT0FBT0QsT0FBTyxDQUFDO0NBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY3JlYXRlLXdlYjMvZnJvbnRlbmQvLi9ob29rcy91c2VJc01vdW50ZWQuanM/Y2E5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VJc01vdW50ZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pO1xyXG5cclxuICByZXR1cm4gbW91bnRlZDtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlSXNNb3VudGVkIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useIsMounted.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks */ \"./hooks/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// Imports\n\n// import { alchemyProvider } from 'wagmi/providers/alchemy';\n\n\n\n\n\n// Get environment variables\n// const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;\n// const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;\nconst hardhatChain = {\n    id: 31337,\n    name: \"Hardhat\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Hardhat\",\n        symbol: \"HARD\"\n    },\n    network: \"hardhat\",\n    rpcUrls: {\n        default: \"http://127.0.0.1:8545\"\n    },\n    testnet: true\n};\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.polygonMumbai\n], // [alchemyProvider({ alchemyId }), publicProvider()]\n[\n    // jsonRpcProvider({ rpc: () => ({ http: 'https://rpc.ankr.com/eth_goerli' }) }),\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_5__.jsonRpcProvider)({\n        rpc: ()=>({\n                http: \"https://dimensional-patient-arrow.matic-testnet.discover.quiknode.pro/b0d1a3580a1576c880015164cf6cb5ded2496f25/\"\n            })\n    })\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.getDefaultWallets)({\n    appName: \"Expir3\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst App = ({ Component , pageProps  })=>{\n    const isMounted = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useIsMounted)();\n    if (!isMounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.RainbowKitProvider, {\n            coolMode: true,\n            chains: chains,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Expir3\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/incase_dapp/app/frontend/pages/_app.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/workspace/incase_dapp/app/frontend/pages/_app.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/workspace/incase_dapp/app/frontend/pages/_app.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/incase_dapp/app/frontend/pages/_app.js\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspace/incase_dapp/app/frontend/pages/_app.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDRTtBQUNGO0FBRS9CLFVBQVU7QUFDZ0U7QUFDMUUsNkRBQTZEO0FBQ0g7QUFDRjtBQUViO0FBQ29DO0FBRXZDO0FBRXhDLDRCQUE0QjtBQUM1Qix3REFBd0Q7QUFDeEQsc0RBQXNEO0FBRXRELE1BQU1XLFlBQVksR0FBRztJQUNuQkMsRUFBRSxFQUFFLEtBQUs7SUFDVEMsSUFBSSxFQUFFLFNBQVM7SUFDZkMsY0FBYyxFQUFFO1FBQ2RDLFFBQVEsRUFBRSxFQUFFO1FBQ1pGLElBQUksRUFBRSxTQUFTO1FBQ2ZHLE1BQU0sRUFBRSxNQUFNO0tBQ2Y7SUFDREMsT0FBTyxFQUFFLFNBQVM7SUFDbEJDLE9BQU8sRUFBRTtRQUNQQyxPQUFPLEVBQUUsdUJBQXVCO0tBQ2pDO0lBQ0RDLE9BQU8sRUFBRSxJQUFJO0NBQ2Q7QUFFRCxNQUFNLEVBQUVDLE1BQU0sR0FBRUMsUUFBUSxHQUFFLEdBQUdqQixzREFBZSxDQUMxQztJQUFDSCxzREFBbUI7Q0FBQyxFQUNyQixxREFBcUQ7QUFDckQ7SUFDRSxpRkFBaUY7SUFDakZJLHdFQUFlLENBQUM7UUFBRWtCLEdBQUcsRUFBRSxJQUFNLENBQUM7Z0JBQUVDLElBQUksRUFBRSxpSEFBaUg7YUFBRSxDQUFDO0tBQUUsQ0FBQztDQUU5SixDQUNGO0FBRUQsTUFBTSxFQUFFQyxVQUFVLEdBQUUsR0FBR2xCLHlFQUFpQixDQUFDO0lBQ3ZDbUIsT0FBTyxFQUFFLFFBQVE7SUFDakJOLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTU8sV0FBVyxHQUFHekIsbURBQVksQ0FBQztJQUMvQjBCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVO0lBQ1ZKLFFBQVE7Q0FDVCxDQUFDO0FBRUYsTUFBTVEsR0FBRyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsR0FBSztJQUN4QyxNQUFNQyxTQUFTLEdBQUd2QixvREFBWSxFQUFFO0lBRWhDLElBQUksQ0FBQ3VCLFNBQVMsRUFBRSxPQUFPLElBQUksQ0FBQztJQUM1QixxQkFDRSw4REFBQzdCLDhDQUFXO1FBQUM4QixNQUFNLEVBQUVOLFdBQVc7a0JBQzlCLDRFQUFDbkIsc0VBQWtCO1lBQUMwQixRQUFRO1lBQUNkLE1BQU0sRUFBRUEsTUFBTTs7OEJBQ3pDLDhEQUFDcEIsa0RBQVE7OEJBQ1AsNEVBQUNtQyxPQUFLO2tDQUFDLFFBQU07Ozs7O2lDQUFROzs7Ozs2QkFDWjs4QkFDWCw4REFBQ0wsU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozs2QkFBSTs7Ozs7O3FCQUNUOzs7OztpQkFDVCxDQUNkO0NBQ0g7QUFFRCxpRUFBZUYsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGNyZWF0ZS13ZWIzL2Zyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOZXh0SGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG4vLyBJbXBvcnRzXG5pbXBvcnQgeyBjaGFpbiwgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZywgY29uZmlndXJlQ2hhaW5zIH0gZnJvbSAnd2FnbWknO1xuLy8gaW1wb3J0IHsgYWxjaGVteVByb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL2FsY2hlbXknO1xuaW1wb3J0IHsganNvblJwY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL2pzb25ScGMnO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvcHVibGljJztcblxuaW1wb3J0ICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFdhbGxldHMsIFJhaW5ib3dLaXRQcm92aWRlciB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuXG5pbXBvcnQgeyB1c2VJc01vdW50ZWQgfSBmcm9tICcuLi9ob29rcyc7XG5cbi8vIEdldCBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbi8vIGNvbnN0IGFsY2hlbXlJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FMQ0hFTVlfSUQ7XG4vLyBjb25zdCBpbmZ1cmFJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lORlVSQV9JRDtcblxuY29uc3QgaGFyZGhhdENoYWluID0ge1xuICBpZDogMzEzMzcsXG4gIG5hbWU6ICdIYXJkaGF0JyxcbiAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICBkZWNpbWFsczogMTgsXG4gICAgbmFtZTogJ0hhcmRoYXQnLFxuICAgIHN5bWJvbDogJ0hBUkQnLFxuICB9LFxuICBuZXR3b3JrOiAnaGFyZGhhdCcsXG4gIHJwY1VybHM6IHtcbiAgICBkZWZhdWx0OiAnaHR0cDovLzEyNy4wLjAuMTo4NTQ1JyxcbiAgfSxcbiAgdGVzdG5ldDogdHJ1ZSxcbn07XG5cbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbY2hhaW4ucG9seWdvbk11bWJhaV0sXG4gIC8vIFthbGNoZW15UHJvdmlkZXIoeyBhbGNoZW15SWQgfSksIHB1YmxpY1Byb3ZpZGVyKCldXG4gIFtcbiAgICAvLyBqc29uUnBjUHJvdmlkZXIoeyBycGM6ICgpID0+ICh7IGh0dHA6ICdodHRwczovL3JwYy5hbmtyLmNvbS9ldGhfZ29lcmxpJyB9KSB9KSxcbiAgICBqc29uUnBjUHJvdmlkZXIoeyBycGM6ICgpID0+ICh7IGh0dHA6ICdodHRwczovL2RpbWVuc2lvbmFsLXBhdGllbnQtYXJyb3cubWF0aWMtdGVzdG5ldC5kaXNjb3Zlci5xdWlrbm9kZS5wcm8vYjBkMWEzNTgwYTE1NzZjODgwMDE1MTY0Y2Y2Y2I1ZGVkMjQ5NmYyNS8nIH0pIH0pLFxuICAvLyBwdWJsaWNQcm92aWRlcigpXG4gIF1cbik7XG5cbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICBhcHBOYW1lOiAnRXhwaXIzJyxcbiAgY2hhaW5zLFxufSk7XG5cbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnMsXG4gIHByb3ZpZGVyLFxufSk7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgaXNNb3VudGVkID0gdXNlSXNNb3VudGVkKCk7XG5cbiAgaWYgKCFpc01vdW50ZWQpIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY29vbE1vZGUgY2hhaW5zPXtjaGFpbnN9PlxuICAgICAgICA8TmV4dEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkV4cGlyMzwvdGl0bGU+XG4gICAgICAgIDwvTmV4dEhlYWQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgIDwvV2FnbWlDb25maWc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOZXh0SGVhZCIsImNoYWluIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJjb25maWd1cmVDaGFpbnMiLCJqc29uUnBjUHJvdmlkZXIiLCJwdWJsaWNQcm92aWRlciIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwidXNlSXNNb3VudGVkIiwiaGFyZGhhdENoYWluIiwiaWQiLCJuYW1lIiwibmF0aXZlQ3VycmVuY3kiLCJkZWNpbWFscyIsInN5bWJvbCIsIm5ldHdvcmsiLCJycGNVcmxzIiwiZGVmYXVsdCIsInRlc3RuZXQiLCJjaGFpbnMiLCJwcm92aWRlciIsInBvbHlnb25NdW1iYWkiLCJycGMiLCJodHRwIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNNb3VudGVkIiwiY2xpZW50IiwiY29vbE1vZGUiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
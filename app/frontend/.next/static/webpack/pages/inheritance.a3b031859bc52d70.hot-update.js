"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/inheritance",{

/***/ "./pages/inheritance/index.js":
/*!************************************!*\
  !*** ./pages/inheritance/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar contractAddress = \"0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD\";\nvar beneficiaryAddress = \"0x42e8d1BBB613dc63A6fDbF39B0b016E78dF4E4f6\";\nfunction Index() {\n    var _this = this;\n    _s();\n    var ref6 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), address = ref6.address, isConnected = ref6.isConnected;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), myNFTs = ref1[0], setMyNFTs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), tokenType = ref2[0], setTokenType = ref2[1];\n    var getMyNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, signer, contract, nfts;\n            return _Users_user_Documents_Incase_app_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!isConnected) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAbi, signer);\n                        _ctx.next = 7;\n                        return contract.getBeneficiaryLegacies();\n                    case 7:\n                        nfts = _ctx.sent;\n                        setMyNFTs(nfts);\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error getting NFTs: \", _ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    11\n                ]\n            ]);\n        }));\n        return function getMyNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // useEffect(() => {\n    //   getMyNFTs();\n    // }, [address, isConnected]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        // console.log(`LegacyNFTs[${nftId}]: ${data?.toString()}`)\n        // getMyNFTs();\n        getMyNFTs();\n        console.log(myNFTs);\n    }, [\n        myNFTs\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: myNFTs.map(function(legacy, index) {\n                        var ref, ref3, ref4, ref5;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"truncate\",\n                                    children: legacy === null || legacy === void 0 ? void 0 : (ref = legacy.token) === null || ref === void 0 ? void 0 : ref.toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"truncate\",\n                                    children: legacy === null || legacy === void 0 ? void 0 : (ref3 = legacy.beneficiary) === null || ref3 === void 0 ? void 0 : ref3.toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, _this),\n                                tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"justify-self-center truncate\",\n                                    children: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(legacy === null || legacy === void 0 ? void 0 : legacy.amount).toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"justify-self-center\",\n                                    children: legacy === null || legacy === void 0 ? void 0 : (ref4 = legacy.amount) === null || ref4 === void 0 ? void 0 : ref4.toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"justify-self-center\",\n                                    children: legacy === null || legacy === void 0 ? void 0 : (ref5 = legacy.tokenId) === null || ref5 === void 0 ? void 0 : ref5.toString()\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    className: \"justify-self-center\",\n                                    children: tokenType\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                    onClick: function() {\n                                        return removeLegacy();\n                                    },\n                                    children: \"X\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"3f0dC03LLiwlIvGkeWnyRTblvLw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Z0JBQ0g7cUJBRVAsQ0FDSDtDQUNIO0dBMUVRNUIsS0FBSzs7UUFDcUJQLDZDQUFVOzs7QUFEcENPLEtBQUFBLEtBQUs7QUE0RWQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmhlcml0YW5jZS9pbmRleC5qcz82YTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbnRyYWN0UmVhZCB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgIGNvbnRyYWN0QWJpIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5cbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHhEOUM0MmIwRWQzRTJENTE0MmZjZjRFNTMzNjQ5OTdlZTg5MDhGQ2VEXCI7XG5jb25zdCBiZW5lZmljaWFyeUFkZHJlc3MgPSBcIjB4NDJlOGQxQkJCNjEzZGM2M0E2ZkRiRjM5QjBiMDE2RTc4ZEY0RTRmNlwiO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCBbbXlORlRzLCBzZXRNeU5GVHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdG9rZW5UeXBlLCBzZXRUb2tlblR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgZ2V0TXlORlRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgY29udHJhY3RBYmksXG4gICAgICAgICAgc2lnbmVyXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5mdHMgPSBhd2FpdCBjb250cmFjdC5nZXRCZW5lZmljaWFyeUxlZ2FjaWVzKCk7XG4gICAgICAgIHNldE15TkZUcyhuZnRzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIE5GVHM6IFwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBnZXRNeU5GVHMoKTtcbiAgLy8gfSwgW2FkZHJlc3MsIGlzQ29ubmVjdGVkXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYExlZ2FjeU5GVHNbJHtuZnRJZH1dOiAke2RhdGE/LnRvU3RyaW5nKCl9YClcbiAgICAvLyBnZXRNeU5GVHMoKTtcbiAgICBnZXRNeU5GVHMoKTtcbiAgICBjb25zb2xlLmxvZyhteU5GVHMpXG4gICAgXG4gIH0sIFtteU5GVHNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNDb25uZWN0ZWQgJiYgYWRkcmVzcyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdyb3cgbXgtNVwiPlxuICAgICAgICAgICAge215TkZUcy5tYXAoKGxlZ2FjeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgZ3JpZC1yb3ctZmxvdyBnYXAtNCB3LWZ1bGwgbXgtYXV0byBtdC01IG1sLTVcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e2xlZ2FjeT8udG9rZW4/LnRvU3RyaW5nKCl9PC9oMz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRydW5jYXRlXCI+e2xlZ2FjeT8uYmVuZWZpY2lhcnk/LnRvU3RyaW5nKCl9PC9oMz5cbiAgICAgICAgICAgICAge3Rva2VuVHlwZSA9PSBcIkVSQzIwXCIgPyAoXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXIgdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgIHtldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIobGVnYWN5Py5hbW91bnQpLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAge2xlZ2FjeT8uYW1vdW50Py50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge2xlZ2FjeT8udG9rZW5JZD8udG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj57dG9rZW5UeXBlfTwvaDM+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyIHRleHQtd2hpdGUgYmctYmxhY2sgaG92ZXI6YmctcmVkLTUwMCB0ZXh0LWJvbGQgcm91bmRlZC1mdWxsIHB4LTYgc206dy1hdXRvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVMZWdhY3koKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBY2NvdW50IiwidXNlQ29udHJhY3RSZWFkIiwiZXRoZXJzIiwiY29udHJhY3RBYmkiLCJIZWFkZXIiLCJjb250cmFjdEFkZHJlc3MiLCJiZW5lZmljaWFyeUFkZHJlc3MiLCJJbmRleCIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsIm15TkZUcyIsInNldE15TkZUcyIsInRva2VuVHlwZSIsInNldFRva2VuVHlwZSIsImdldE15TkZUcyIsInByb3ZpZGVyIiwic2lnbmVyIiwiY29udHJhY3QiLCJuZnRzIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImdldEJlbmVmaWNpYXJ5TGVnYWNpZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJociIsIm1haW4iLCJtYXAiLCJsZWdhY3kiLCJpbmRleCIsImgzIiwidG9rZW4iLCJ0b1N0cmluZyIsImJlbmVmaWNpYXJ5IiwidXRpbHMiLCJmb3JtYXRFdGhlciIsImFtb3VudCIsInRva2VuSWQiLCJidXR0b24iLCJvbkNsaWNrIiwicmVtb3ZlTGVnYWN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});
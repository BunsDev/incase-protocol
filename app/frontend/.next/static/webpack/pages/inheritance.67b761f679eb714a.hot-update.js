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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar contractAddress = \"0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD\";\nfunction Index() {\n    var ref, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)(), address = ref4.address, isConnected = ref4.isConnected;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), myNFTs = ref5[0], setMyNFTs = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), tokenType = ref6[0], setTokenType = ref6[1];\n    // Check If any Beneficiaries\n    var data = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useContractRead)(_objectSpread({\n        address: \"0xecb504d39723b0be0e3a9aa33d646642d1051ee1\"\n    }, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.contractConfig, {\n        functionName: \"getBeneficiaryLegacies\",\n        args: []\n    })).data;\n    // const getMyNFTs = async () => {\n    //   if (isConnected) {\n    //     try {\n    //       const provider = new ethers.providers.Web3Provider(window.ethereum);\n    //       const signer = provider.getSigner();\n    //       const contract = new ethers.Contract(\n    //         contractAddress,\n    //         contractAbi,\n    //         signer\n    //       );\n    //       const nfts = await contract.getBeneficiaryLegacies();\n    //       console.log(nfts);\n    //       setMyNFTs(nfts);\n    //     } catch (error) {\n    //       console.error(\"Error getting NFTs: \", error);\n    //     }\n    //   }\n    // };\n    // getMyNFTs();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(data);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"flex flex-col items-center justify-center grow mx-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref = myNFTs.token) === null || ref === void 0 ? void 0 : ref.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"truncate\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref1 = myNFTs.beneficiary) === null || ref1 === void 0 ? void 0 : ref1.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this),\n                            tokenType == \"ERC20\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center truncate\",\n                                children: ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(myNFTs === null || myNFTs === void 0 ? void 0 : myNFTs.amount).toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref2 = myNFTs.amount) === null || ref2 === void 0 ? void 0 : ref2.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: myNFTs === null || myNFTs === void 0 ? void 0 : (ref3 = myNFTs.tokenId) === null || ref3 === void 0 ? void 0 : ref3.toString()\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"justify-self-center\",\n                                children: tokenType\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto\",\n                                onClick: function() {\n                                    return removeLegacy();\n                                },\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/inheritance/index.js\",\n            lineNumber: 56,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Index, \"tqFfNeIWPcGGuDN4/aQo81j2GGU=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useContractRead\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxDQUFFcUIsTUFBTSxDQUFDLENBQUNKLFFBQVEsRUFBRTs7Ozs7b0NBQ2pELGlCQUVMLDhEQUFDRixJQUFFO2dDQUFDSCxTQUFTLEVBQUMscUJBQXFCOzBDQUNoQ1osTUFBTSxhQUFOQSxNQUFNLFdBQVEsR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxDQUFBQSxJQUFjLEdBQWRBLE1BQU0sQ0FBRXFCLE1BQU0sY0FBZHJCLElBQWMsY0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxJQUFjLENBQUVpQixRQUFRLEVBQUU7Ozs7O29DQUN4QjswQ0FFUCw4REFBQ0YsSUFBRTtnQ0FBQ0gsU0FBUyxFQUFDLHFCQUFxQjswQ0FDaENaLE1BQU0sYUFBTkEsTUFBTSxXQUFTLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsQ0FBQUEsSUFBZSxHQUFmQSxNQUFNLENBQUVzQixPQUFPLGNBQWZ0QixJQUFlLGNBQWZBLEtBQUFBLENBQWUsR0FBZkEsSUFBZSxDQUFFaUIsUUFBUSxFQUFFOzs7OztvQ0FDekI7MENBQ0wsOERBQUNGLElBQUU7Z0NBQUNILFNBQVMsRUFBQyxxQkFBcUI7MENBQUVSLFNBQVM7Ozs7O29DQUFNOzBDQUNwRCw4REFBQ21CLFFBQU07Z0NBQ0xYLFNBQVMsRUFBQyxnR0FBZ0c7Z0NBQzFHWSxPQUFPLEVBQUU7MkNBQU1DLFlBQVksRUFBRTtpQ0FBQTswQ0FDOUIsR0FFRDs7Ozs7b0NBQVM7Ozs7Ozs0QkFDTDs7Ozs7d0JBQ0Q7Ozs7OztnQkFDSDtxQkFFUCxDQUNIO0NBQ0g7R0EzRVExQixLQUFLOztRQUNxQlAsNkNBQVU7UUFLMUJDLGtEQUFlOzs7QUFOekJNLEtBQUFBLEtBQUs7QUE2RWQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmhlcml0YW5jZS9pbmRleC5qcz82YTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbnRyYWN0UmVhZCB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHtcbiAgY29udHJhY3RDb25maWcsXG4gIGNvbnRyYWN0UmVja2xlc3NXcml0ZUNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5cblxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweEQ5QzQyYjBFZDNFMkQ1MTQyZmNmNEU1MzM2NDk5N2VlODkwOEZDZURcIjtcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgW215TkZUcywgc2V0TXlORlRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Rva2VuVHlwZSwgc2V0VG9rZW5UeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIENoZWNrIElmIGFueSBCZW5lZmljaWFyaWVzXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlQ29udHJhY3RSZWFkKHtcbiAgICBhZGRyZXNzOiBcIjB4ZWNiNTA0ZDM5NzIzYjBiZTBlM2E5YWEzM2Q2NDY2NDJkMTA1MWVlMVwiLFxuICAgIC4uLmNvbnRyYWN0Q29uZmlnLFxuICAgIGZ1bmN0aW9uTmFtZTogXCJnZXRCZW5lZmljaWFyeUxlZ2FjaWVzXCIsXG4gICAgYXJnczogW10sXG4gIH0pO1xuXG4gIC8vIGNvbnN0IGdldE15TkZUcyA9IGFzeW5jICgpID0+IHtcbiAgLy8gICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgLy8gICAgIHRyeSB7XG4gIC8vICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gIC8vICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAvLyAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gIC8vICAgICAgICAgY29udHJhY3RBZGRyZXNzLFxuICAvLyAgICAgICAgIGNvbnRyYWN0QWJpLFxuICAvLyAgICAgICAgIHNpZ25lclxuICAvLyAgICAgICApO1xuICAvLyAgICAgICBjb25zdCBuZnRzID0gYXdhaXQgY29udHJhY3QuZ2V0QmVuZWZpY2lhcnlMZWdhY2llcygpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhuZnRzKTtcbiAgLy8gICAgICAgc2V0TXlORlRzKG5mdHMpO1xuICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgTkZUczogXCIsIGVycm9yKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgLy8gZ2V0TXlORlRzKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzQ29ubmVjdGVkICYmIGFkZHJlc3MgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8aHI+PC9ocj5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncm93IG14LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNiBncmlkLXJvdy1mbG93IGdhcC00IHctZnVsbCBteC1hdXRvIG10LTUgbWwtNVwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57bXlORlRzPy50b2tlbj8udG9TdHJpbmcoKX08L2gzPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj57bXlORlRzPy5iZW5lZmljaWFyeT8udG9TdHJpbmcoKX08L2gzPlxuICAgICAgICAgICAgICB7dG9rZW5UeXBlID09IFwiRVJDMjBcIiA/IChcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlciB0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgICAge2V0aGVycy51dGlscy5mb3JtYXRFdGhlcihteU5GVHM/LmFtb3VudCkudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqdXN0aWZ5LXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICB7bXlORlRzPy5hbW91bnQ/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7bXlORlRzPy50b2tlbklkPy50b1N0cmluZygpfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwianVzdGlmeS1zZWxmLWNlbnRlclwiPnt0b2tlblR5cGV9PC9oMz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktc2VsZi1jZW50ZXIgdGV4dC13aGl0ZSBiZy1ibGFjayBob3ZlcjpiZy1yZWQtNTAwIHRleHQtYm9sZCByb3VuZGVkLWZ1bGwgcHgtNiBzbTp3LWF1dG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUxlZ2FjeSgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFjY291bnQiLCJ1c2VDb250cmFjdFJlYWQiLCJldGhlcnMiLCJjb250cmFjdENvbmZpZyIsImNvbnRyYWN0UmVja2xlc3NXcml0ZUNvbmZpZyIsIkhlYWRlciIsImNvbnRyYWN0QWRkcmVzcyIsIkluZGV4IiwibXlORlRzIiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwic2V0TXlORlRzIiwidG9rZW5UeXBlIiwic2V0VG9rZW5UeXBlIiwiZGF0YSIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHIiLCJtYWluIiwiaDMiLCJ0b2tlbiIsInRvU3RyaW5nIiwiYmVuZWZpY2lhcnkiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwiYW1vdW50IiwidG9rZW5JZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZW1vdmVMZWdhY3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/inheritance/index.js\n");

/***/ })

});
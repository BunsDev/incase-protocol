"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./pages/dashboard/index.js":
/*!**********************************!*\
  !*** ./pages/dashboard/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _components_legacyAddModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/legacyAddModal */ \"./components/legacyAddModal.js\");\n/* harmony import */ var _components_resolveDomain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/resolveDomain */ \"./components/resolveDomain.js\");\n/* harmony import */ var _components_checkIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/checkIn */ \"./components/checkIn.js\");\n/* harmony import */ var _components_legacyList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/legacyList */ \"./components/legacyList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar index = function() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount)(), address = ref.address, isConnected = ref.isConnected;\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useSigner)(), signerData = ref1.data;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0), legacyCount = ref3[0], setLegacyCount = ref3[1];\n    var ref4 = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useContractRead)(_objectSpread({}, _utils_constants__WEBPACK_IMPORTED_MODULE_6__.contractConfig, {\n        functionName: \"legacyCount\",\n        args: [\n            address\n        ]\n    })), legacyCountData = ref4.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        console.log(\"LOGS\");\n        console.log(\"Legacy Count:\", legacyCountData === null || legacyCountData === void 0 ? void 0 : legacyCountData.toString());\n        console.log(\"___________\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (!legacyCountData) return;\n        setLegacyCount(legacyCountData.toNumber());\n    }, [\n        legacyCountData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_8__.Header, {}, void 0, false, {\n                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col items-center justify-center grow mx-5\",\n                children: isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        address && legacyCount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_checkIn__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                            lineNumber: 55,\n                            columnNumber: 44\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-semibold max-w-50 justify-center\",\n                            children: \"Register your beneficiary\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl self-start mt-2 w-11/12 text-gray-400 border-b-2 border-gray-300 pb-3 just\",\n                            children: \"Schedule automatic payouts to accounts of your choice as your will or as a fall back.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5 justify-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-semibold\",\n                                    children: \"Token\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-semibold\",\n                                    children: \"Beneficiary\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-semibold\",\n                                    children: \"Amount\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-semibold\",\n                                    children: \"Token ID\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-semibold\",\n                                    children: \"Type\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-semibold\",\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, _this),\n                        isConnected && address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_legacyList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                            lineNumber: 75,\n                            columnNumber: 40\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_legacyAddModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_resolveDomain__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Please Connect Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Incase/app/frontend/pages/dashboard/index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n};\n_s(index, \"OuXNjHaTZhOccN+rdbNBEGiKxpg=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_9__.useSigner,\n        wagmi__WEBPACK_IMPORTED_MODULE_9__.useContractRead\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxVQUFROzs7Ozt5Q0FBSzs4Q0FDM0MsOERBQUNLLElBQUU7b0NBQUNMLFNBQVMsRUFBQyxlQUFlOzhDQUFDLE1BQUk7Ozs7O3lDQUFLOzhDQUN2Qyw4REFBQ0ssSUFBRTtvQ0FBQ0wsU0FBUyxFQUFDLGVBQWU7OENBQUMsUUFBTTs7Ozs7eUNBQUs7Ozs7OztpQ0FDckM7d0JBRUxmLFdBQVcsSUFBSUQsT0FBTyxrQkFBSSw4REFBQ1YsOERBQVU7Ozs7aUNBQUc7c0NBRXpDLDhEQUFDeUIsS0FBRzs7OENBQ0YsOERBQUM1QixrRUFBYzs7Ozt5Q0FBRzs4Q0FDbEIsOERBQUNDLGlFQUFhOzs7O3lDQUFHOzs7Ozs7aUNBQ2I7O2dDQUNMLGlCQUVIOzhCQUNFLDRFQUFDZ0MsR0FBQztrQ0FBQyx1QkFBcUI7Ozs7OzZCQUFJO2lDQUMzQjs7Ozs7cUJBRUE7Ozs7OzthQUNILENBQ047Q0FDSDtHQW5FS3JCLEtBQUs7O1FBQ3dCakIsNkNBQVU7UUFDZEksNENBQVM7UUFJSkQsa0RBQWU7OztBQStEbkQsK0RBQWVjLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanM/NmQ4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0QnV0dG9uIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcclxuaW1wb3J0IHtcclxuICB1c2VBY2NvdW50LFxyXG4gIHVzZVByZXBhcmVDb250cmFjdFdyaXRlLFxyXG4gIHVzZUNvbnRyYWN0V3JpdGUsXHJcbiAgdXNlQ29udHJhY3RSZWFkLFxyXG4gIHVzZVNpZ25lcixcclxufSBmcm9tIFwid2FnbWlcIjtcclxuaW1wb3J0IExlZ2FjeUFkZE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xlZ2FjeUFkZE1vZGFsXCI7XHJcbmltcG9ydCBSZXNvbHZlRG9tYWluIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Jlc29sdmVEb21haW5cIjtcclxuaW1wb3J0IENoZWNrSW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2hlY2tJblwiO1xyXG5pbXBvcnQgTGVnYWN5TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sZWdhY3lMaXN0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNvbnRyYWN0Q29uZmlnLFxyXG4gIGNvbnRyYWN0QWRkcmVzcyxcclxuICBjb250cmFjdEFiaSxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xyXG4gIGNvbnN0IHsgZGF0YTogc2lnbmVyRGF0YSB9ID0gdXNlU2lnbmVyKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsZWdhY3lDb3VudCwgc2V0TGVnYWN5Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogbGVnYWN5Q291bnREYXRhIH0gPSB1c2VDb250cmFjdFJlYWQoe1xyXG4gICAgLi4uY29udHJhY3RDb25maWcsXHJcbiAgICBmdW5jdGlvbk5hbWU6IFwibGVnYWN5Q291bnRcIixcclxuICAgIGFyZ3M6IFthZGRyZXNzXSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiTE9HU1wiKTtcclxuICAgIGNvbnNvbGUubG9nKFwiTGVnYWN5IENvdW50OlwiLCBsZWdhY3lDb3VudERhdGE/LnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiX19fX19fX19fX19cIik7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFsZWdhY3lDb3VudERhdGEpIHJldHVybjtcclxuICAgIHNldExlZ2FjeUNvdW50KGxlZ2FjeUNvdW50RGF0YS50b051bWJlcigpKTtcclxuICB9LCBbbGVnYWN5Q291bnREYXRhXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8aHI+PC9ocj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ3JvdyBteC01XCI+XHJcbiAgICAgICAge2lzQ29ubmVjdGVkID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge2FkZHJlc3MgJiYgbGVnYWN5Q291bnQgPiAwICYmIDxDaGVja0luIC8+fVxyXG5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbWF4LXctNTAganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICBSZWdpc3RlciB5b3VyIGJlbmVmaWNpYXJ5XHJcbiAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHNlbGYtc3RhcnQgbXQtMiB3LTExLzEyIHRleHQtZ3JheS00MDAgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgcGItMyBqdXN0XCI+XHJcbiAgICAgICAgICAgICAgU2NoZWR1bGUgYXV0b21hdGljIHBheW91dHMgdG8gYWNjb3VudHMgb2YgeW91ciBjaG9pY2UgYXMgeW91ciB3aWxsXHJcbiAgICAgICAgICAgICAgb3IgYXMgYSBmYWxsIGJhY2suXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNiBncmlkLXJvdy1mbG93IGdhcC00IHctZnVsbCBteC1hdXRvIG10LTUgbWwtNSBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+VG9rZW48L2gzPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+QmVuZWZpY2lhcnk8L2gzPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+QW1vdW50PC9oMz5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlRva2VuIElEPC9oMz5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlR5cGU8L2gzPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+RGVsZXRlPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7aXNDb25uZWN0ZWQgJiYgYWRkcmVzcyAmJiA8TGVnYWN5TGlzdCAvPn1cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPExlZ2FjeUFkZE1vZGFsIC8+XHJcbiAgICAgICAgICAgICAgPFJlc29sdmVEb21haW4gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHA+UGxlYXNlIENvbm5lY3QgV2FsbGV0PC9wPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsiQ29ubmVjdEJ1dHRvbiIsInVzZUFjY291bnQiLCJ1c2VQcmVwYXJlQ29udHJhY3RXcml0ZSIsInVzZUNvbnRyYWN0V3JpdGUiLCJ1c2VDb250cmFjdFJlYWQiLCJ1c2VTaWduZXIiLCJMZWdhY3lBZGRNb2RhbCIsIlJlc29sdmVEb21haW4iLCJDaGVja0luIiwiTGVnYWN5TGlzdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb250cmFjdENvbmZpZyIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0QWJpIiwiRm9vdGVyIiwiSGVhZGVyIiwiaW5kZXgiLCJhZGRyZXNzIiwiaXNDb25uZWN0ZWQiLCJkYXRhIiwic2lnbmVyRGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibGVnYWN5Q291bnQiLCJzZXRMZWdhY3lDb3VudCIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJsZWdhY3lDb3VudERhdGEiLCJjb25zb2xlIiwibG9nIiwidG9TdHJpbmciLCJ0b051bWJlciIsImRpdiIsImNsYXNzTmFtZSIsImhyIiwibWFpbiIsImgyIiwicCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard/index.js\n");

/***/ })

});
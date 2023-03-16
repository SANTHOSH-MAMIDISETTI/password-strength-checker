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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_crackTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/crackTime */ \"./src/utils/crackTime.ts\");\n\n\n\n\n\nconst HomePage = ()=>{\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (searchTerm?.length > 0) {\n            (0,_utils_crackTime__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(searchTerm).then((r)=>setResult(r));\n        }\n    }, [\n        searchTerm\n    ]);\n    console.log(result);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Password Strength Checker\"\n                    }, void 0, false, {\n                        fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-center text-3xl\",\n                            children: \"Password Strength Checker\"\n                        }, void 0, false, {\n                            fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Enter password\"\n                            }, void 0, false, {\n                                fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                className: \"outline-red-600\",\n                                placeholder: \"Enter Your Password\",\n                                value: searchTerm,\n                                onChange: (e)=>setSearchTerm(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 10\n                            }, undefined),\n                            result && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            result.score / 5 * 100,\n                                            \"% (\",\n                                            result.score,\n                                            \"/5)\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            result?.calcTime,\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 34\n                                            }, undefined),\n                                            result?.feedback?.warning,\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 43\n                                            }, undefined),\n                                            result?.feedback?.suggestions,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 46\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/santu/Documents/GHub/password-strength-checker/src/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNjO0FBQ2dCO0FBRS9CO0FBRTNCLE1BQU1JLFdBQVcsSUFBTTtJQUVuQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDSyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFvQixJQUFJO0lBRTVERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBR0ksWUFBWUksU0FBUyxHQUFHO1lBQ3ZCTiw0REFBeUJBLENBQUNFLFlBQVlLLElBQUksQ0FBQyxDQUFDQyxJQUFNSCxVQUFVRztRQUVoRSxDQUFDO0lBQ0wsR0FBRztRQUFDTjtLQUFXO0lBQ2ZPLFFBQVFDLEdBQUcsQ0FBQ047SUFFZCxxQkFDRTs7MEJBQ0UsOERBQUNQLGtEQUFJQTs7a0NBQ0gsOERBQUNjO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDOztrQ0FDQyw4REFBQ0M7a0NBQ0MsNEVBQUNDOzRCQUFHQyxXQUFVO3NDQUF1Qjs7Ozs7Ozs7Ozs7a0NBRXZDLDhEQUFDRjt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNEOzBDQUFHOzs7Ozs7MENBQ0wsOERBQUNFO2dDQUNFQyxNQUFLO2dDQUNMRixXQUFVO2dDQUNWRyxhQUFZO2dDQUNaQyxPQUFPdkI7Z0NBQ1B3QixVQUFVLENBQUNDLElBQU14QixjQUFjd0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7NEJBRTlDckIsd0JBQ0QsOERBQUNlOztrREFDRyw4REFBQ0E7OzRDQUNJZixPQUFPeUIsS0FBSyxHQUFDLElBQUk7NENBQUk7NENBQUl6QixPQUFPeUIsS0FBSzs0Q0FBQzs7Ozs7OztrREFFM0MsOERBQUNWOzs0Q0FFQWYsUUFBUTBCOzRDQUFTOzBEQUFDLDhEQUFDQzs7Ozs7NENBQ25CM0IsUUFBUTRCLFVBQVVDOzRDQUFROzBEQUFDLDhEQUFDRjs7Ozs7NENBQzVCM0IsUUFBUTRCLFVBQVVFOzBEQUFZLDhEQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSXBDLDhEQUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0FBRUEsaUVBQWVsQixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFzc3dvcmQtY2hlY2tlci8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNhbGN1bGF0ZVBhc3N3b3JkU3RyZW5ndGggZnJvbSBcIkAvdXRpbHMvY3JhY2tUaW1lXCI7XG5pbXBvcnQge1p4Y3ZiblJlc3VsdH0gZnJvbSBcIkB6eGN2Ym4tdHMvY29yZVwiO1xuaW1wb3J0IFwiLi4vdXRpbHMvY3JhY2tUaW1lXCJcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPFp4Y3ZiblJlc3VsdHxudWxsPihudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoc2VhcmNoVGVybT8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY2FsY3VsYXRlUGFzc3dvcmRTdHJlbmd0aChzZWFyY2hUZXJtKS50aGVuKChyKSA9PiBzZXRSZXN1bHQocikpO1xuXG4gICAgICAgIH1cbiAgICB9LCBbc2VhcmNoVGVybV0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZCA+XG4gICAgICAgIDx0aXRsZT5QYXNzd29yZCBTdHJlbmd0aCBDaGVja2VyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluID5cbiAgICAgICAgPGRpdiAgPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtM3hsJz5QYXNzd29yZCBTdHJlbmd0aCBDaGVja2VyPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXhsJz5cbiAgICAgICAgICA8aDE+RW50ZXIgcGFzc3dvcmQ8L2gxPlxuICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZS1yZWQtNjAwXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBQYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAvPlxuICAgICAgICAgIHtyZXN1bHQgJiYgKFxuICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bHQuc2NvcmUvNSAqIDEwMH0lICh7cmVzdWx0LnNjb3JlfS81KVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAge3Jlc3VsdD8uY2FsY1RpbWV9IDxiciAvPlxuICAgICAgICAgICAgICB7cmVzdWx0Py5mZWVkYmFjaz8ud2FybmluZ30gPGJyIC8+XG4gICAgICAgICAgICAgIHtyZXN1bHQ/LmZlZWRiYWNrPy5zdWdnZXN0aW9uc308YnIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+KX1cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjYWxjdWxhdGVQYXNzd29yZFN0cmVuZ3RoIiwiSG9tZVBhZ2UiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInJlc3VsdCIsInNldFJlc3VsdCIsImxlbmd0aCIsInRoZW4iLCJyIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic2NvcmUiLCJjYWxjVGltZSIsImJyIiwiZmVlZGJhY2siLCJ3YXJuaW5nIiwic3VnZ2VzdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/utils/crackTime.ts":
/*!********************************!*\
  !*** ./src/utils/crackTime.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxcvbn-ts/core */ \"@zxcvbn-ts/core\");\n/* harmony import */ var _zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _zxcvbn_ts_language_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zxcvbn-ts/language-common */ \"@zxcvbn-ts/language-common\");\n/* harmony import */ var _zxcvbn_ts_language_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zxcvbn_ts_language_common__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _zxcvbn_ts_language_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zxcvbn-ts/language-en */ \"@zxcvbn-ts/language-en\");\n/* harmony import */ var _zxcvbn_ts_language_en__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_zxcvbn_ts_language_en__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _zxcvbn_ts_matcher_pwned__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zxcvbn-ts/matcher-pwned */ \"@zxcvbn-ts/matcher-pwned\");\n/* harmony import */ var _zxcvbn_ts_matcher_pwned__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_zxcvbn_ts_matcher_pwned__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst calculatePasswordStrength = async (password)=>{\n    const options = {\n        translations: (_zxcvbn_ts_language_en__WEBPACK_IMPORTED_MODULE_2___default().translations),\n        graphs: (_zxcvbn_ts_language_common__WEBPACK_IMPORTED_MODULE_1___default().adjacencyGraphs),\n        dictionary: {\n            ...(_zxcvbn_ts_language_common__WEBPACK_IMPORTED_MODULE_1___default().dictionary),\n            ...(_zxcvbn_ts_language_en__WEBPACK_IMPORTED_MODULE_2___default().dictionary)\n        }\n    };\n    const matcherPwned = _zxcvbn_ts_matcher_pwned__WEBPACK_IMPORTED_MODULE_3___default()(fetch, _zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_0__.zxcvbnOptions);\n    _zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_0__.zxcvbnOptions.addMatcher(\"pwned\", matcherPwned);\n    _zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_0__.zxcvbnOptions.setOptions(options);\n    return await (0,_zxcvbn_ts_core__WEBPACK_IMPORTED_MODULE_0__.zxcvbnAsync)(password);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculatePasswordStrength);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY3JhY2tUaW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNDO0FBQ1I7QUFDTztBQUUzRCxNQUFNSyw0QkFBNEIsT0FBT0MsV0FBcUI7SUFFNUQsTUFBTUMsVUFBVTtRQUNkQyxjQUFjTCw0RUFBNEI7UUFDMUNNLFFBQVFQLG1GQUFtQztRQUMzQ1MsWUFBWTtZQUNWLEdBQUdULDhFQUE4QjtZQUNqQyxHQUFHQywwRUFBMEI7UUFDL0I7SUFDRjtJQUNBLE1BQU1TLGVBQWVSLCtEQUFtQkEsQ0FBQ1MsT0FBT1osMERBQWFBO0lBQzdEQSxxRUFBd0IsQ0FBQyxTQUFTVztJQUNsQ1gscUVBQXdCLENBQUNNO0lBQ3pCLE9BQU8sTUFBTVAsNERBQVdBLENBQUNNO0FBRTNCO0FBRUEsaUVBQWVELHlCQUF5QkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bhc3N3b3JkLWNoZWNrZXIvLi9zcmMvdXRpbHMvY3JhY2tUaW1lLnRzP2E5NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgenhjdmJuQXN5bmMsIHp4Y3Zibk9wdGlvbnN9IGZyb20gJ0B6eGN2Ym4tdHMvY29yZSdcbmltcG9ydCB6eGN2Ym5Db21tb25QYWNrYWdlIGZyb20gJ0B6eGN2Ym4tdHMvbGFuZ3VhZ2UtY29tbW9uJ1xuaW1wb3J0IHp4Y3ZibkVuUGFja2FnZSBmcm9tICdAenhjdmJuLXRzL2xhbmd1YWdlLWVuJ1xuaW1wb3J0IG1hdGNoZXJQd25lZEZhY3RvcnkgZnJvbSBcIkB6eGN2Ym4tdHMvbWF0Y2hlci1wd25lZFwiO1xuXG5jb25zdCBjYWxjdWxhdGVQYXNzd29yZFN0cmVuZ3RoID0gYXN5bmMgKHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHRyYW5zbGF0aW9uczogenhjdmJuRW5QYWNrYWdlLnRyYW5zbGF0aW9ucyxcbiAgICBncmFwaHM6IHp4Y3ZibkNvbW1vblBhY2thZ2UuYWRqYWNlbmN5R3JhcGhzLFxuICAgIGRpY3Rpb25hcnk6IHtcbiAgICAgIC4uLnp4Y3ZibkNvbW1vblBhY2thZ2UuZGljdGlvbmFyeSxcbiAgICAgIC4uLnp4Y3ZibkVuUGFja2FnZS5kaWN0aW9uYXJ5LFxuICAgIH0sXG4gIH1cbiAgY29uc3QgbWF0Y2hlclB3bmVkID0gbWF0Y2hlclB3bmVkRmFjdG9yeShmZXRjaCwgenhjdmJuT3B0aW9ucyk7XG4gIHp4Y3Zibk9wdGlvbnMuYWRkTWF0Y2hlcihcInB3bmVkXCIsIG1hdGNoZXJQd25lZCk7XG4gIHp4Y3Zibk9wdGlvbnMuc2V0T3B0aW9ucyhvcHRpb25zKVxuICByZXR1cm4gYXdhaXQgenhjdmJuQXN5bmMocGFzc3dvcmQpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZVBhc3N3b3JkU3RyZW5ndGg7Il0sIm5hbWVzIjpbInp4Y3ZibkFzeW5jIiwienhjdmJuT3B0aW9ucyIsInp4Y3ZibkNvbW1vblBhY2thZ2UiLCJ6eGN2Ym5FblBhY2thZ2UiLCJtYXRjaGVyUHduZWRGYWN0b3J5IiwiY2FsY3VsYXRlUGFzc3dvcmRTdHJlbmd0aCIsInBhc3N3b3JkIiwib3B0aW9ucyIsInRyYW5zbGF0aW9ucyIsImdyYXBocyIsImFkamFjZW5jeUdyYXBocyIsImRpY3Rpb25hcnkiLCJtYXRjaGVyUHduZWQiLCJmZXRjaCIsImFkZE1hdGNoZXIiLCJzZXRPcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/crackTime.ts\n");

/***/ }),

/***/ "@zxcvbn-ts/core":
/*!**********************************!*\
  !*** external "@zxcvbn-ts/core" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@zxcvbn-ts/core");

/***/ }),

/***/ "@zxcvbn-ts/language-common":
/*!*********************************************!*\
  !*** external "@zxcvbn-ts/language-common" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@zxcvbn-ts/language-common");

/***/ }),

/***/ "@zxcvbn-ts/language-en":
/*!*****************************************!*\
  !*** external "@zxcvbn-ts/language-en" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@zxcvbn-ts/language-en");

/***/ }),

/***/ "@zxcvbn-ts/matcher-pwned":
/*!*******************************************!*\
  !*** external "@zxcvbn-ts/matcher-pwned" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@zxcvbn-ts/matcher-pwned");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Carousel/index.js":
/*!**************************************!*\
  !*** ./components/Carousel/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/Carousel/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction Carousel() {\n    var _this = this;\n    var info = [\n        {\n            description: 'Organize your daily job enhance your life performance',\n            image: \"/images/card_1.png\"\n        },\n        {\n            description: 'Mark one activity as done makes your brain understands the power of doing.',\n            image: \"/images/card_2.png\"\n        },\n        {\n            description: 'Careful with missunderstanding the difference between a list of things and a list of desires.',\n            image: \"/images/card_3.png\"\n        },\n        {\n            description: 'Planning meetings as easy as one step.',\n            image: \"/images/card_4.jpg\"\n        },\n        {\n            description: 'Teams are meant to be together, to be in touch.',\n            image: \"/images/card_5.png\"\n        },\n        {\n            description: 'Teams are meant to be together, to be in touch.',\n            image: \"/images/card_6.png\"\n        },\n        {\n            description: 'Results are undeniable as are facts.',\n            image: \"/images/card_7.png\"\n        },\n        {\n            description: 'Want to band together to build something awesome ? Plan ahead.',\n            image: \"/images/card_8.png\"\n        },\n        {\n            description: 'Planning acordingly your desires and fits.',\n            image: \"/images/card_9.png\"\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSection),\n        __source: {\n            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n            lineNumber: 59,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSection_Background),\n            __source: {\n                fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSection_Paragraph),\n                    __source: {\n                        fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"good things\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                    className: \"carouselSwiper\",\n                    modules: [\n                        swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination, \n                    ],\n                    spaceBetween: 20,\n                    slidesPerView: 3,\n                    listperpage: 3,\n                    pagination: {\n                        clickable: true\n                    },\n                    onSlideChange: function() {\n                        return console.log('slide change');\n                    },\n                    onSwiper: function(swiper) {\n                        return console.log(swiper);\n                    },\n                    __source: {\n                        fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        info.map(function(cards, index) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                                className: \"slide\",\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSlide_Cards),\n                                    __source: {\n                                        fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSlide_Card),\n                                            src: cards.image,\n                                            alt: \"business card\",\n                                            __source: {\n                                                fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSlide_Logo),\n                                            src: \"/images/icon_coopers.png\",\n                                            alt: \"Logo\",\n                                            __source: {\n                                                fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            },\n                                            __self: _this\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSlide_DivParagraph),\n                                            __source: {\n                                                fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSlide_Button),\n                                                    __source: {\n                                                        fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this,\n                                                    children: \"function\"\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                                    __source: {\n                                                        fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this,\n                                                    children: cards.description\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: \"/development\",\n                                                    __source: {\n                                                        fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this,\n                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                                        __source: {\n                                                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 45\n                                                        },\n                                                        __self: _this,\n                                                        children: \" Read more \"\n                                                    })\n                                                })\n                                            ]\n                                        })\n                                    ]\n                                })\n                            }, index);\n                        }),\n                        \"...\"\n                    ]\n                })\n            ]\n        })\n    }));\n}\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztxSEFDckJSLGtEQUFJO29EQUFDd0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7bUlBQUVGLENBQU07Ozs7Ozs7a0VBQUMsQ0FBVzs7Ozs7OzsrQkFUaENULEtBQUs7O3dCQWF2QixDQUVIOzs7Ozs7QUFJVixDQUFDO0tBcEZRdkIsUUFBUTtBQXVGakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nhcm91c2VsL2luZGV4LmpzPzBhYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rICBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcbmltcG9ydCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24sIH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xuXG5mdW5jdGlvbiBDYXJvdXNlbCAoKSB7XG5cbiAgY29uc3QgaW5mbyA9IFtcbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogJ09yZ2FuaXplIHlvdXIgZGFpbHkgam9iIGVuaGFuY2UgeW91ciBsaWZlIHBlcmZvcm1hbmNlJyxcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvY2FyZF8xLnBuZ1wiLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogJ01hcmsgb25lIGFjdGl2aXR5IGFzIGRvbmUgbWFrZXMgeW91ciBicmFpbiB1bmRlcnN0YW5kcyB0aGUgcG93ZXIgb2YgZG9pbmcuJyxcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvY2FyZF8yLnBuZ1wiLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0NhcmVmdWwgd2l0aCBtaXNzdW5kZXJzdGFuZGluZyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgbGlzdCBvZiB0aGluZ3MgYW5kIGEgbGlzdCBvZiBkZXNpcmVzLicsXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2NhcmRfMy5wbmdcIixcbiAgICB9LFxuXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246ICdQbGFubmluZyBtZWV0aW5ncyBhcyBlYXN5IGFzIG9uZSBzdGVwLicsXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2NhcmRfNC5qcGdcIixcbiAgICB9LFxuXG4gICAge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ1RlYW1zIGFyZSBtZWFudCB0byBiZSB0b2dldGhlciwgdG8gYmUgaW4gdG91Y2guJyxcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jYXJkXzUucG5nXCIsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGVhbXMgYXJlIG1lYW50IHRvIGJlIHRvZ2V0aGVyLCB0byBiZSBpbiB0b3VjaC4nLFxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jYXJkXzYucG5nXCIsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVzdWx0cyBhcmUgdW5kZW5pYWJsZSBhcyBhcmUgZmFjdHMuJyxcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvY2FyZF83LnBuZ1wiLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogJ1dhbnQgdG8gYmFuZCB0b2dldGhlciB0byBidWlsZCBzb21ldGhpbmcgYXdlc29tZSA/IFBsYW4gYWhlYWQuJyxcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvY2FyZF84LnBuZ1wiLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogJ1BsYW5uaW5nIGFjb3JkaW5nbHkgeW91ciBkZXNpcmVzIGFuZCBmaXRzLicsXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2NhcmRfOS5wbmdcIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybihcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbFNlY3Rpb259PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsU2VjdGlvbl9CYWNrZ3JvdW5kfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXsgc3R5bGVzLmNhcm91c2VsU2VjdGlvbl9QYXJhZ3JhcGggfT5nb29kIHRoaW5nczwvcD5cblxuICAgICAgICA8U3dpcGVyIGNsYXNzTmFtZT1cImNhcm91c2VsU3dpcGVyXCJcbiAgICAgICAgICBtb2R1bGVzPXtbUGFnaW5hdGlvbixdfVxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MjB9XG4gICAgICAgICAgc2xpZGVzUGVyVmlldz17M31cbiAgICAgICAgICBsaXN0cGVycGFnZT17M31cbiAgICAgICAgICBwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxuICAgICAgICAgIG9uU2xpZGVDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCdzbGlkZSBjaGFuZ2UnKX1cbiAgICAgICAgICBvblN3aXBlcj17KHN3aXBlcikgPT4gY29uc29sZS5sb2coc3dpcGVyKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpbmZvLm1hcCgoY2FyZHMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXsgaW5kZXggfSBjbGFzc05hbWU9XCJzbGlkZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsU2xpZGVfQ2FyZHN9PlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW1hZ2VcIj4gKi99XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17IHN0eWxlcy5jYXJvdXNlbFNsaWRlX0NhcmQgfSBzcmM9e2NhcmRzLmltYWdlfSBhbHQ9XCJidXNpbmVzcyBjYXJkXCIvPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWUgPXsgc3R5bGVzLmNhcm91c2VsU2xpZGVfTG9nbyB9IHNyYz0nL2ltYWdlcy9pY29uX2Nvb3BlcnMucG5nJyBhbHQgPVwiTG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5jYXJvdXNlbFNsaWRlX0RpdlBhcmFncmFwaCB9PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9IHsgc3R5bGVzLmNhcm91c2VsU2xpZGVfQnV0dG9uIH0+ZnVuY3Rpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxwPnsgY2FyZHMuZGVzY3JpcHRpb24gfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGV2ZWxvcG1lbnRcIj48YnV0dG9uPiBSZWFkIG1vcmUgPC9idXR0b24+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgLi4uXG4gICAgICAgICAgPC9Td2lwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsInN0eWxlcyIsIkNhcm91c2VsIiwiaW5mbyIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiY2Fyb3VzZWxTZWN0aW9uIiwiZGl2IiwiY2Fyb3VzZWxTZWN0aW9uX0JhY2tncm91bmQiLCJwIiwiY2Fyb3VzZWxTZWN0aW9uX1BhcmFncmFwaCIsIm1vZHVsZXMiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwibGlzdHBlcnBhZ2UiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwib25TbGlkZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJvblN3aXBlciIsInN3aXBlciIsIm1hcCIsImluZGV4IiwiY2FyZHMiLCJjYXJvdXNlbFNsaWRlX0NhcmRzIiwiaW1nIiwiY2Fyb3VzZWxTbGlkZV9DYXJkIiwic3JjIiwiYWx0IiwiY2Fyb3VzZWxTbGlkZV9Mb2dvIiwiY2Fyb3VzZWxTbGlkZV9EaXZQYXJhZ3JhcGgiLCJidXR0b24iLCJjYXJvdXNlbFNsaWRlX0J1dHRvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel/index.js\n");

/***/ })

});
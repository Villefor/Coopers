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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/Carousel/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction Carousel() {\n    var _this = this;\n    var info = [\n        {\n            description: 'Organize your daily job enhance your life performance',\n            image: \"/images/card_1.png\"\n        },\n        {\n            description: 'Mark one activity as done makes your brain understands the power of doing.',\n            image: \"/images/card_2.png\"\n        },\n        {\n            description: 'Careful with missunderstanding the difference between a list of things and a list of desires.',\n            image: \"/images/card_3.png\"\n        },\n        {\n            description: 'Planning meetings as easy as one step.',\n            image: \"/images/card_4.jpg\"\n        },\n        {\n            description: 'Teams are meant to be together, to be in touch.',\n            image: \"/images/card_5.png\"\n        },\n        {\n            description: 'Teams are meant to be together, to be in touch.',\n            image: \"/images/card_6.png\"\n        },\n        {\n            description: 'Results are undeniable as are facts.',\n            image: \"/images/card_7.png\"\n        },\n        {\n            description: 'Want to band together to build something awesome ? Plan ahead.',\n            image: \"/images/card_8.png\"\n        },\n        {\n            description: 'Planning acordingly your desires and fits.',\n            image: \"/images/card_9.png\"\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSection),\n        __source: {\n            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n            lineNumber: 59,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSection_Background),\n                __source: {\n                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSection_Paragraph),\n                __source: {\n                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: \"good things\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                className: \"carouselSwiper\",\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination, \n                ],\n                spaceBetween: 20,\n                slidesPerView: 3,\n                listperpage: 3,\n                pagination: {\n                    clickable: true\n                },\n                onSlideChange: function() {\n                    return console.log('slide change');\n                },\n                onSwiper: function(swiper) {\n                    return console.log(swiper);\n                },\n                __source: {\n                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: [\n                    info.map(function(cards, index) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"slide\",\n                            __source: {\n                                fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSlide_Cards),\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSlide_Card),\n                                        src: cards.image,\n                                        alt: \"business card\",\n                                        __source: {\n                                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSlide_Logo),\n                                        src: \"/images/icon_coopers.png\",\n                                        alt: \"Logo\",\n                                        __source: {\n                                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSlide_DivParagraph),\n                                        __source: {\n                                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default().carouselSlide_Button),\n                                                __source: {\n                                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this,\n                                                children: \"function\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                                __source: {\n                                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this,\n                                                children: cards.description\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/development\",\n                                                __source: {\n                                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 19\n                                                },\n                                                __self: _this,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                                    __source: {\n                                                        fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 45\n                                                    },\n                                                    __self: _this,\n                                                    children: \" Read more \"\n                                                })\n                                            })\n                                        ]\n                                    })\n                                ]\n                            })\n                        }, index);\n                    }),\n                    \"...\"\n                ]\n            })\n        ]\n    }));\n}\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVc7O2lIQUNyQlIsa0RBQUk7Z0RBQUN3QyxJQUFJLEVBQUMsQ0FBYzs7Ozs7OzsrSEFBRUYsQ0FBTTs7Ozs7Ozs4REFBQyxDQUFXOzs7Ozs7OzJCQVRoQ1QsS0FBSzs7b0JBYXZCLENBRUg7Ozs7O0FBR1YsQ0FBQztLQW5GUXZCLFFBQVE7QUFzRmpCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC9pbmRleC5qcz8wYWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayAgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCB9IGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcblxuZnVuY3Rpb24gQ2Fyb3VzZWwgKCkge1xuXG4gIGNvbnN0IGluZm8gPSBbXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246ICdPcmdhbml6ZSB5b3VyIGRhaWx5IGpvYiBlbmhhbmNlIHlvdXIgbGlmZSBwZXJmb3JtYW5jZScsXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2NhcmRfMS5wbmdcIixcbiAgICB9LFxuXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246ICdNYXJrIG9uZSBhY3Rpdml0eSBhcyBkb25lIG1ha2VzIHlvdXIgYnJhaW4gdW5kZXJzdGFuZHMgdGhlIHBvd2VyIG9mIGRvaW5nLicsXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2NhcmRfMi5wbmdcIixcbiAgICB9LFxuXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246ICdDYXJlZnVsIHdpdGggbWlzc3VuZGVyc3RhbmRpbmcgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGxpc3Qgb2YgdGhpbmdzIGFuZCBhIGxpc3Qgb2YgZGVzaXJlcy4nLFxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jYXJkXzMucG5nXCIsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnUGxhbm5pbmcgbWVldGluZ3MgYXMgZWFzeSBhcyBvbmUgc3RlcC4nLFxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jYXJkXzQuanBnXCIsXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgZGVzY3JpcHRpb246ICdUZWFtcyBhcmUgbWVhbnQgdG8gYmUgdG9nZXRoZXIsIHRvIGJlIGluIHRvdWNoLicsXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvY2FyZF81LnBuZ1wiLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogJ1RlYW1zIGFyZSBtZWFudCB0byBiZSB0b2dldGhlciwgdG8gYmUgaW4gdG91Y2guJyxcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvY2FyZF82LnBuZ1wiLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogJ1Jlc3VsdHMgYXJlIHVuZGVuaWFibGUgYXMgYXJlIGZhY3RzLicsXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2NhcmRfNy5wbmdcIixcbiAgICB9LFxuXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246ICdXYW50IHRvIGJhbmQgdG9nZXRoZXIgdG8gYnVpbGQgc29tZXRoaW5nIGF3ZXNvbWUgPyBQbGFuIGFoZWFkLicsXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2NhcmRfOC5wbmdcIixcbiAgICB9LFxuXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246ICdQbGFubmluZyBhY29yZGluZ2x5IHlvdXIgZGVzaXJlcyBhbmQgZml0cy4nLFxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jYXJkXzkucG5nXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4oXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWxTZWN0aW9ufT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbFNlY3Rpb25fQmFja2dyb3VuZH0+PC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17IHN0eWxlcy5jYXJvdXNlbFNlY3Rpb25fUGFyYWdyYXBoIH0+Z29vZCB0aGluZ3M8L3A+XG5cbiAgICAgICAgPFN3aXBlciBjbGFzc05hbWU9XCJjYXJvdXNlbFN3aXBlclwiXG4gICAgICAgICAgbW9kdWxlcz17W1BhZ2luYXRpb24sXX1cbiAgICAgICAgICBzcGFjZUJldHdlZW49ezIwfVxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezN9XG4gICAgICAgICAgbGlzdHBlcnBhZ2U9ezN9XG4gICAgICAgICAgcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cbiAgICAgICAgICBvblNsaWRlQ2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZygnc2xpZGUgY2hhbmdlJyl9XG4gICAgICAgICAgb25Td2lwZXI9eyhzd2lwZXIpID0+IGNvbnNvbGUubG9nKHN3aXBlcil9XG4gICAgICAgID5cbiAgICAgICAgICB7aW5mby5tYXAoKGNhcmRzLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17IGluZGV4IH0gY2xhc3NOYW1lPVwic2xpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbFNsaWRlX0NhcmRzfT5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWltYWdlXCI+ICovfVxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9eyBzdHlsZXMuY2Fyb3VzZWxTbGlkZV9DYXJkIH0gc3JjPXtjYXJkcy5pbWFnZX0gYWx0PVwiYnVzaW5lc3MgY2FyZFwiLz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lID17IHN0eWxlcy5jYXJvdXNlbFNsaWRlX0xvZ28gfSBzcmM9Jy9pbWFnZXMvaWNvbl9jb29wZXJzLnBuZycgYWx0ID1cIkxvZ29cIiAvPlxuICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY2Fyb3VzZWxTbGlkZV9EaXZQYXJhZ3JhcGggfT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSB7IHN0eWxlcy5jYXJvdXNlbFNsaWRlX0J1dHRvbiB9PmZ1bmN0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8cD57IGNhcmRzLmRlc2NyaXB0aW9uIH08L3A+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RldmVsb3BtZW50XCI+PGJ1dHRvbj4gUmVhZCBtb3JlIDwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIC4uLlxuICAgICAgICAgIDwvU3dpcGVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwic3R5bGVzIiwiQ2Fyb3VzZWwiLCJpbmZvIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJjYXJvdXNlbFNlY3Rpb24iLCJkaXYiLCJjYXJvdXNlbFNlY3Rpb25fQmFja2dyb3VuZCIsInAiLCJjYXJvdXNlbFNlY3Rpb25fUGFyYWdyYXBoIiwibW9kdWxlcyIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJsaXN0cGVycGFnZSIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJvblNsaWRlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsIm9uU3dpcGVyIiwic3dpcGVyIiwibWFwIiwiaW5kZXgiLCJjYXJkcyIsImNhcm91c2VsU2xpZGVfQ2FyZHMiLCJpbWciLCJjYXJvdXNlbFNsaWRlX0NhcmQiLCJzcmMiLCJhbHQiLCJjYXJvdXNlbFNsaWRlX0xvZ28iLCJjYXJvdXNlbFNsaWRlX0RpdlBhcmFncmFwaCIsImJ1dHRvbiIsImNhcm91c2VsU2xpZGVfQnV0dG9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel/index.js\n");

/***/ })

});
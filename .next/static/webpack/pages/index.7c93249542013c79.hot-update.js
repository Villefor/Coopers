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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/Carousel/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Carousel() {\n    var _this = this;\n    _s();\n    var carousel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var info = [\n        {\n            description: 'Organize your daily job enhance your life performance',\n            image: \"/images/card_1.png\"\n        },\n        {\n            description: 'Mark one activity as done makes your brain understands the power of doing.',\n            image: \"/images/card_2.png\"\n        },\n        {\n            description: 'Careful with missunderstanding the difference between a list of things and a list of desires.',\n            image: \"/images/card_3.png\"\n        },\n        {\n            description: 'Planning meetings as easy as one step.',\n            image: \"/images/card_4.jpg\"\n        },\n        {\n            description: 'Teams are meant to be together, to be in touch.',\n            image: \"/images/card_5.png\"\n        },\n        {\n            description: 'Teams are meant to be together, to be in touch.',\n            image: \"/images/card_6.png\"\n        },\n        {\n            description: 'Results are undeniable as are facts.',\n            image: \"/images/card_7.png\"\n        },\n        {\n            description: 'Want to band together to build something awesome ? Plan ahead.',\n            image: \"/images/card_8.png\"\n        },\n        {\n            description: 'Planning acordingly your desires and fits.',\n            image: \"/images/card_9.png\"\n        }, \n    ];\n    var handleLeftClick = function(event) {\n        event.preventDefault();\n        carousel.current.scrollLeft -= carousel.current.offsetWidth;\n    };\n    var handleRightClick = function(event) {\n        event.preventDefault();\n        carousel.current.scrollLeft += carousel.current.offsetWidth;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().carouselSection),\n        __source: {\n            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n            lineNumber: 69,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().carouselSection_Background),\n                __source: {\n                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                    lineNumber: 71,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().carouselSection_Paragraph),\n                    __source: {\n                        fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"good things\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().carrouselCardContainer),\n                ref: carousel,\n                __source: {\n                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: info.map(function(item, index) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().carrouselCardContent),\n                        __source: {\n                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().carroselHeaderImg),\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                    src: item.image,\n                                    __source: {\n                                        fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this\n                                }, index)\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().carroselHeaderLogo),\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                    src: \"/images/icon_coopers.png\",\n                                    __source: {\n                                        fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().carroselDescription),\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                        __source: {\n                                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: \"function\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: item.description\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: \"read more\"\n                                    })\n                                ]\n                            })\n                        ]\n                    });\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().buttonsCarrousel),\n                __source: {\n                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                    lineNumber: 94,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        onClick: handleLeftClick,\n                        __source: {\n                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                            lineNumber: 95,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        onClick: handleRightClick,\n                        __source: {\n                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/Carousel/index.js\",\n                            lineNumber: 96,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s(Carousel, \"QFYGCCjo3/rT4Mo0T/pQp4P0fC8=\");\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQVM7Ozs7Ozs7O2tGQU1yQkYsQ0FBRztnQkFBQ0YsU0FBUyxFQUFFZCw2RUFBdUI7Ozs7Ozs7O3lGQUNwQytCLENBQU07d0JBQUNFLE9BQU8sRUFBRTNCLGVBQWU7Ozs7Ozs7O3lGQUMvQnlCLENBQU07d0JBQUNFLE9BQU8sRUFBRXJCLGdCQUFnQjs7Ozs7Ozs7Ozs7O0FBS3pDLENBQUM7R0EvRlFYLFFBQVE7S0FBUkEsUUFBUTtBQWtHakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nhcm91c2VsL2luZGV4LmpzPzBhYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcblxuZnVuY3Rpb24gQ2Fyb3VzZWwgKCkge1xuICBjb25zdCBjYXJvdXNlbCA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBpbmZvID0gW1xuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnT3JnYW5pemUgeW91ciBkYWlseSBqb2IgZW5oYW5jZSB5b3VyIGxpZmUgcGVyZm9ybWFuY2UnLFxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jYXJkXzEucG5nXCIsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnTWFyayBvbmUgYWN0aXZpdHkgYXMgZG9uZSBtYWtlcyB5b3VyIGJyYWluIHVuZGVyc3RhbmRzIHRoZSBwb3dlciBvZiBkb2luZy4nLFxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jYXJkXzIucG5nXCIsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2FyZWZ1bCB3aXRoIG1pc3N1bmRlcnN0YW5kaW5nIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYSBsaXN0IG9mIHRoaW5ncyBhbmQgYSBsaXN0IG9mIGRlc2lyZXMuJyxcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvY2FyZF8zLnBuZ1wiLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogJ1BsYW5uaW5nIG1lZXRpbmdzIGFzIGVhc3kgYXMgb25lIHN0ZXAuJyxcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvY2FyZF80LmpwZ1wiLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGVhbXMgYXJlIG1lYW50IHRvIGJlIHRvZ2V0aGVyLCB0byBiZSBpbiB0b3VjaC4nLFxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2NhcmRfNS5wbmdcIixcbiAgICB9LFxuXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246ICdUZWFtcyBhcmUgbWVhbnQgdG8gYmUgdG9nZXRoZXIsIHRvIGJlIGluIHRvdWNoLicsXG4gICAgICBpbWFnZTogXCIvaW1hZ2VzL2NhcmRfNi5wbmdcIixcbiAgICB9LFxuXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246ICdSZXN1bHRzIGFyZSB1bmRlbmlhYmxlIGFzIGFyZSBmYWN0cy4nLFxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jYXJkXzcucG5nXCIsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2FudCB0byBiYW5kIHRvZ2V0aGVyIHRvIGJ1aWxkIHNvbWV0aGluZyBhd2Vzb21lID8gUGxhbiBhaGVhZC4nLFxuICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9jYXJkXzgucG5nXCIsXG4gICAgfSxcblxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnUGxhbm5pbmcgYWNvcmRpbmdseSB5b3VyIGRlc2lyZXMgYW5kIGZpdHMuJyxcbiAgICAgIGltYWdlOiBcIi9pbWFnZXMvY2FyZF85LnBuZ1wiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgaGFuZGxlTGVmdENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNhcm91c2VsLmN1cnJlbnQuc2Nyb2xsTGVmdCAtPSBjYXJvdXNlbC5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlUmlnaHRDbGljayA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjYXJvdXNlbC5jdXJyZW50LnNjcm9sbExlZnQgKz0gY2Fyb3VzZWwuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIHJldHVybihcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXJvdXNlbFNlY3Rpb259PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcm91c2VsU2VjdGlvbl9CYWNrZ3JvdW5kfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXsgc3R5bGVzLmNhcm91c2VsU2VjdGlvbl9QYXJhZ3JhcGggfT5nb29kIHRoaW5nczwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnJvdXNlbENhcmRDb250YWluZXJ9IHJlZj17Y2Fyb3VzZWx9PlxuICAgICAgICB7XG4gICAgICAgICAgaW5mby5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnJvdXNlbENhcmRDb250ZW50fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJyb3NlbEhlYWRlckltZ30+XG4gICAgICAgICAgICAgICAgPGltZyBrZXkgPXtpbmRleH0gc3JjPXtpdGVtLmltYWdlfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnJvc2VsSGVhZGVyTG9nb30+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25fY29vcGVycy5wbmdcIi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnJvc2VsRGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgIDxidXR0b24+ZnVuY3Rpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHA+cmVhZCBtb3JlPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zQ2Fycm91c2VsfT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMZWZ0Q2xpY2t9PjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJpZ2h0Q2xpY2t9PjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJzdHlsZXMiLCJDYXJvdXNlbCIsImNhcm91c2VsIiwiaW5mbyIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJoYW5kbGVMZWZ0Q2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJvZmZzZXRXaWR0aCIsImhhbmRsZVJpZ2h0Q2xpY2siLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiY2Fyb3VzZWxTZWN0aW9uIiwiZGl2IiwiY2Fyb3VzZWxTZWN0aW9uX0JhY2tncm91bmQiLCJwIiwiY2Fyb3VzZWxTZWN0aW9uX1BhcmFncmFwaCIsImNhcnJvdXNlbENhcmRDb250YWluZXIiLCJyZWYiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjYXJyb3VzZWxDYXJkQ29udGVudCIsImNhcnJvc2VsSGVhZGVySW1nIiwiaW1nIiwic3JjIiwiY2Fycm9zZWxIZWFkZXJMb2dvIiwiY2Fycm9zZWxEZXNjcmlwdGlvbiIsImJ1dHRvbiIsImJ1dHRvbnNDYXJyb3VzZWwiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel/index.js\n");

/***/ })

});
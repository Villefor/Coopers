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

/***/ "./components/ToDoList/index.js":
/*!**************************************!*\
  !*** ./components/ToDoList/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/ToDoList/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _s1 = $RefreshSig$();\nfunction ToDoList() {\n    var _this = this;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        count: 0,\n        task: []\n    }), list = ref[0], setList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), taskName = ref1[0], setTaskName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), listTodo = ref2[0], setListTodo = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), count = ref3[0], setCount = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        check: false,\n        tasks: list,\n        count: 0\n    }), assigments = ref4[0], setAssigment = ref4[1];\n    var ref5 = _slicedToArray((0,react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrag)(function() {\n        return {\n            // \"type\" is required. It is used by the \"accept\" specification of drop targets.\n            type: 'BOX',\n            // The collect function utilizes a \"monitor\" instance (see the Overview for what this is)\n            // to pull important pieces of state from the DnD system.\n            collect: function(monitor) {\n                return {\n                    isDragging: monitor.isDragging()\n                };\n            }\n        };\n    }), 3), isDragging = ref5[0].isDragging, drag = ref5[1], dragPreview = ref5[2];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n    // showList()\n    }, [\n        count\n    ]);\n    var handleClick = function() {\n        setCount(count + 1);\n        setListTodo(_toConsumableArray(listTodo).concat([\n            taskName\n        ]));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sectionMain),\n        __source: {\n            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),\n                __source: {\n                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 10\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sectionMain_Div),\n                    __source: {\n                        fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            className: \"section-main__h1\",\n                            __source: {\n                                fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: \"To-do List\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: \"section-main__paragraph\",\n                            __source: {\n                                fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: \" Drag and drop to set your main priorities, check when done and create what's new.\"\n                        })\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().toDo_Section),\n                __source: {\n                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().toDo_Div),\n                        __source: {\n                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().toDo_image),\n                                src: \"/images/orange_rec.png\",\n                                alt: \"Orange Rectangle\",\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                },\n                                __self: this,\n                                children: \"To-do\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                },\n                                __self: this,\n                                children: [\n                                    \"Take a breath. \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                        __source: {\n                                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 33\n                                        },\n                                        __self: this\n                                    }),\n                                    \" Start doing.\"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                type: \"text\",\n                                onChange: function(event) {\n                                    return setTaskName(event.target.value);\n                                },\n                                placeholder: \"Please, write a daily assigment\",\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                ref: dragPreview,\n                                style: {\n                                    opacity: isDragging ? 0.5 : 1\n                                },\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    role: \"Handle\",\n                                    ref: drag,\n                                    __source: {\n                                        fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                        __source: {\n                                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        },\n                                        __self: this,\n                                        children: listTodo.length > 0 && listTodo.map(function(item, index) {\n                                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                                __source: {\n                                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 23\n                                                },\n                                                __self: _this,\n                                                children: item\n                                            }, index);\n                                        })\n                                    })\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                onClick: handleClick,\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                },\n                                __self: this,\n                                children: \"Submit Task\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                },\n                                __self: this,\n                                children: \"Erase all\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().toDoDiv_Done),\n                        __source: {\n                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().toDo_image),\n                                src: \"/images/green_rec.png\",\n                                alt: \"Green Rectangle\",\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                },\n                                __self: this,\n                                children: \"Done\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                },\n                                __self: this,\n                                children: [\n                                    \"Congratulions! \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                        __source: {\n                                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 33\n                                        },\n                                        __self: this\n                                    }),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"strong\", {\n                                        __source: {\n                                            fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 39\n                                        },\n                                        __self: this,\n                                        children: [\n                                            \"You have done \",\n                                            count,\n                                            \" tasks\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                __source: {\n                                    fileName: \"/home/dario/Teste_trabalho/Coopers_test/Coopers/components/ToDoList/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                },\n                                __self: this,\n                                children: \"Erase all\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s1(ToDoList, \"d3oaGF7CWIkeCeohcqAa/zDbgp8=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrag\n    ];\n});\n_c = ToDoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDoList);\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzswR0FBQ29CLENBQU07Ozs7Ozs7OzRDQUFDLENBQWM7NENBQUV2RCxLQUFLOzRDQUFFLENBQU07Ozs7O2lHQUM1RG9ELENBQU07Ozs7Ozs7MENBQUMsQ0FBUzs7Ozs7Ozs7QUFPL0IsQ0FBQztJQWhGUXJELFFBQVE7O1FBaUIyQkYsOENBQU87OztLQWpCMUNFLFFBQVE7QUFrRmpCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9Eb0xpc3QvaW5kZXguanM/NDQ1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEcmFnIH0gZnJvbSAncmVhY3QtZG5kJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcblxuZnVuY3Rpb24gVG9Eb0xpc3QgKCkge1xuXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKHtcbiAgICBjb3VudDogMCxcbiAgICB0YXNrOiBbXSxcbiAgfSk7XG5cbiAgY29uc3QgW3Rhc2tOYW1lLCBzZXRUYXNrTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbGlzdFRvZG8sIHNldExpc3RUb2RvXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgW2Fzc2lnbWVudHMsIHNldEFzc2lnbWVudF0gPSB1c2VTdGF0ZSh7XG4gICAgY2hlY2s6IGZhbHNlLFxuICAgIHRhc2tzOiBsaXN0LFxuICAgIGNvdW50OiAwLFxuICB9KTtcblxuY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnLCBkcmFnUHJldmlld10gPSB1c2VEcmFnKCgpID0+ICh7XG4gIC8vIFwidHlwZVwiIGlzIHJlcXVpcmVkLiBJdCBpcyB1c2VkIGJ5IHRoZSBcImFjY2VwdFwiIHNwZWNpZmljYXRpb24gb2YgZHJvcCB0YXJnZXRzLlxuICB0eXBlOiAnQk9YJyxcbiAgLy8gVGhlIGNvbGxlY3QgZnVuY3Rpb24gdXRpbGl6ZXMgYSBcIm1vbml0b3JcIiBpbnN0YW5jZSAoc2VlIHRoZSBPdmVydmlldyBmb3Igd2hhdCB0aGlzIGlzKVxuICAvLyB0byBwdWxsIGltcG9ydGFudCBwaWVjZXMgb2Ygc3RhdGUgZnJvbSB0aGUgRG5EIHN5c3RlbS5cbiAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XG4gICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKClcbiAgfSlcbn0pKVxuXG51c2VFZmZlY3QoKCkgPT4ge1xuICAvLyBzaG93TGlzdCgpXG59LCBbY291bnRdKVxuXG5jb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgc2V0Q291bnQoY291bnQgKyAxKVxuICBzZXRMaXN0VG9kbyhbLi4ubGlzdFRvZG8sIHRhc2tOYW1lXSlcbn1cblxuICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbk1haW59PlxuXG4gICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25NYWluX0Rpdn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbi1tYWluX19oMVwiPlRvLWRvIExpc3Q8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbi1tYWluX19wYXJhZ3JhcGhcIj4gRHJhZyBhbmQgZHJvcCB0byBzZXQgeW91ciBtYWluIHByaW9yaXRpZXMsIGNoZWNrIHdoZW4gZG9uZSBhbmQgY3JlYXRlIHdoYXQncyBuZXcuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMudG9Eb19TZWN0aW9ufT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b0RvX0Rpdn0+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lID17c3R5bGVzLnRvRG9faW1hZ2V9IHNyYyA9XCIvaW1hZ2VzL29yYW5nZV9yZWMucG5nXCIgYWx0ID1cIk9yYW5nZSBSZWN0YW5nbGVcIiAgLz5cbiAgICAgICAgICAgICAgPGgyPlRvLWRvPC9oMj5cbiAgICAgICAgICAgICAgPHA+VGFrZSBhIGJyZWF0aC4gPGJyLz4gU3RhcnQgZG9pbmcuPC9wPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9XCJ0ZXh0XCIgb25DaGFuZ2U9eyAoZXZlbnQpID0+IHNldFRhc2tOYW1lKGV2ZW50LnRhcmdldC52YWx1ZSkgfSBwbGFjZWhvbGRlcj1cIlBsZWFzZSwgd3JpdGUgYSBkYWlseSBhc3NpZ21lbnRcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IHJlZj17ZHJhZ1ByZXZpZXd9IHN0eWxlPXt7IG9wYWNpdHk6IGlzRHJhZ2dpbmcgPyAwLjUgOiAxfX0+XG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiSGFuZGxlXCIgcmVmPXtkcmFnfT5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdFRvZG8ubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICBsaXN0VG9kby5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+U3VibWl0IFRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiA+RXJhc2UgYWxsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b0RvRGl2X0RvbmV9PlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZSA9e3N0eWxlcy50b0RvX2ltYWdlfSBzcmMgPVwiL2ltYWdlcy9ncmVlbl9yZWMucG5nXCIgYWx0ID1cIkdyZWVuIFJlY3RhbmdsZVwiICAvPlxuICAgICAgICAgICAgICA8aDI+RG9uZTwvaDI+XG4gICAgICAgICAgICAgIDxwPkNvbmdyYXR1bGlvbnMhIDxici8+IDxzdHJvbmc+WW91IGhhdmUgZG9uZSB7IGNvdW50IH0gdGFza3M8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgIDxidXR0b24+RXJhc2UgYWxsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9MaXN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VEcmFnIiwic3R5bGVzIiwiVG9Eb0xpc3QiLCJjb3VudCIsInRhc2siLCJsaXN0Iiwic2V0TGlzdCIsInRhc2tOYW1lIiwic2V0VGFza05hbWUiLCJsaXN0VG9kbyIsInNldExpc3RUb2RvIiwic2V0Q291bnQiLCJjaGVjayIsInRhc2tzIiwiYXNzaWdtZW50cyIsInNldEFzc2lnbWVudCIsInR5cGUiLCJjb2xsZWN0IiwibW9uaXRvciIsImlzRHJhZ2dpbmciLCJkcmFnIiwiZHJhZ1ByZXZpZXciLCJoYW5kbGVDbGljayIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzZWN0aW9uTWFpbiIsIm1haW4iLCJkaXYiLCJzZWN0aW9uTWFpbl9EaXYiLCJoMSIsInAiLCJ0b0RvX1NlY3Rpb24iLCJ0b0RvX0RpdiIsImltZyIsInRvRG9faW1hZ2UiLCJzcmMiLCJhbHQiLCJoMiIsImJyIiwiaW5wdXQiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInJlZiIsInN0eWxlIiwib3BhY2l0eSIsInJvbGUiLCJ1bCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxpIiwiYnV0dG9uIiwib25DbGljayIsInRvRG9EaXZfRG9uZSIsInN0cm9uZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ToDoList/index.js\n");

/***/ })

});
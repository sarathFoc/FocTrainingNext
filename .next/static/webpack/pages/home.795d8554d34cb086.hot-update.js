"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/pages/home.tsx":
/*!****************************!*\
  !*** ./src/pages/home.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"getBlogHeader\": function() { return /* binding */ getBlogHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BlogModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BlogModal */ \"./src/components/BlogModal.tsx\");\n/* harmony import */ var _components_Blogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Blogs */ \"./src/components/Blogs.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _subcomponents_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subcomponents/button */ \"./src/subcomponents/button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// import { getblogModal } from \"../apis/apis\";\nconst Home = (props)=>{\n    _s();\n    console.log(\"props\", props.blogHeader);\n    const blogHeder = props.blogHeader[0].fields;\n    const [blogData, setBlogData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [showBlogModal, setShowBlogModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [blogPageForm, setBlogPageForm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [blogModal, setBlogModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const fetchBlogPageData = async ()=>{\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/blogPage\").then((res)=>{\n            setBlogPageForm(res.data?.includes.Entry);\n        });\n    };\n    const getBlogs = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/blog\").then((res)=>{\n            setBlogData(res.data);\n        });\n    };\n    const getblogModal = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/blogModal\").then((res)=>{\n            console.log(\"blogModal data\", res);\n            setBlogModal(res.data?.includes.Entry);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchBlogPageData();\n        getBlogs();\n        getblogModal();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                \"data-testid\": \"sign-in-head\",\n                blogHeader: blogHeder\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    blogPageForm && blogPageForm[0] && blogPageForm.map((each, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    justifyContent: \"space-between\",\n                                    paddingLeft: 20\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        display: \"flex\",\n                                        alignItems: \"center\",\n                                        marginTop: 20,\n                                        justifyContent: \"space-between\",\n                                        paddingRight: 20\n                                    },\n                                    children: each[\"fields\"][\"friendlyName\"] === \"create\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_subcomponents_button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        color: each[\"fields\"][\"theme\"],\n                                        text: each[\"fields\"][\"text\"],\n                                        handleButtonAction: ()=>setShowBlogModal(true)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Blogs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            blogs: blogData\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    blogPageForm && blogPageForm[0] && blogPageForm.map((each, index)=>{\n                        if (each[\"fields\"][\"friendlyName\"] === \"footer\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                blogFooter: each[\"fields\"]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 22\n                            }, undefined);\n                        }\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                closeBlogModal: ()=>setShowBlogModal(false),\n                showBlogModal: showBlogModal,\n                blogdata: blogModal\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"yP7m+g4bBXWXVx5eR+65t6cmVkc=\");\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nconst getBlogHeader = async ()=>{\n    const result = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/blogHeader\").then((res)=>{\n        return res.data;\n    // setBlogData(res.data)\n    });\n    return result.items;\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFVOUI7Ozs7Ozs7O0FBSWxCO0dBNUZNYjtLQUFBQTs7QUE4Rk4sK0RBQWVBLElBQUlBLEVBQUM7QUFFYixNQUFNNEMsZ0JBQWdCLFVBQVk7SUFDdkMsTUFBTUMsU0FBUyxNQUFNakQsaURBQ2YsQ0FBQyxvQ0FDSnFCLElBQUksQ0FBQyxDQUFDQyxNQUFRO1FBQ2IsT0FBT0EsSUFBSUMsSUFBSTtJQUNmLHdCQUF3QjtJQUMxQjtJQUNGLE9BQU8wQixPQUFPQyxLQUFLO0FBQ3JCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4PzkyZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IEJsb2dNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9CbG9nTW9kYWxcIjtcclxuaW1wb3J0IEJsb2dzIGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2dzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IEJ1dHRvbk1vZGVsIGZyb20gXCIuLi9zdWJjb21wb25lbnRzL2J1dHRvblwiO1xyXG4vLyBpbXBvcnQgeyBnZXRibG9nTW9kYWwgfSBmcm9tIFwiLi4vYXBpcy9hcGlzXCI7XHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzOiB7IGJsb2dIZWFkZXI6IGFueSB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJwcm9wc1wiLCBwcm9wcy5ibG9nSGVhZGVyKVxyXG4gIGNvbnN0IGJsb2dIZWRlciA9IHByb3BzLmJsb2dIZWFkZXJbMF0uZmllbGRzO1xyXG5cclxuICBjb25zdCBbYmxvZ0RhdGEsIHNldEJsb2dEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2hvd0Jsb2dNb2RhbCwgc2V0U2hvd0Jsb2dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Jsb2dQYWdlRm9ybSwgc2V0QmxvZ1BhZ2VGb3JtXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYmxvZ01vZGFsLCBzZXRCbG9nTW9kYWxdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBmZXRjaEJsb2dQYWdlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ibG9nUGFnZVwiKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0QmxvZ1BhZ2VGb3JtKHJlcy5kYXRhPy5pbmNsdWRlcy5FbnRyeSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRCbG9ncyA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ibG9nXCIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRCbG9nRGF0YShyZXMuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRibG9nTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYmxvZ01vZGFsXCIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJsb2dNb2RhbCBkYXRhXCIsIHJlcyk7XHJcbiAgICAgIHNldEJsb2dNb2RhbChyZXMuZGF0YT8uaW5jbHVkZXMuRW50cnkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoQmxvZ1BhZ2VEYXRhKCk7XHJcbiAgICBnZXRCbG9ncygpO1xyXG4gICAgZ2V0YmxvZ01vZGFsKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmlnYXRpb25CYXIgIGRhdGEtdGVzdGlkPSdzaWduLWluLWhlYWQnIGJsb2dIZWFkZXI9e2Jsb2dIZWRlcn0gLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7YmxvZ1BhZ2VGb3JtICYmXHJcbiAgICAgICAgICBibG9nUGFnZUZvcm1bMF0gJiZcclxuICAgICAgICAgIGJsb2dQYWdlRm9ybS5tYXAoKGVhY2gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDB2d1wiIH19PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWFjaFtcImZpZWxkc1wiXVtcImZyaWVuZGx5TmFtZVwiXSA9PT0gXCJjcmVhdGVcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Nb2RlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtlYWNoW1wiZmllbGRzXCJdW1widGhlbWVcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17ZWFjaFtcImZpZWxkc1wiXVtcInRleHRcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQnV0dG9uQWN0aW9uPXsoKSA9PiBzZXRTaG93QmxvZ01vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyMCB9fT5cclxuICAgICAgICAgIDxCbG9ncyBibG9ncz17YmxvZ0RhdGF9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtibG9nUGFnZUZvcm0gJiZcclxuICAgICAgICAgIGJsb2dQYWdlRm9ybVswXSAmJlxyXG4gICAgICAgICAgYmxvZ1BhZ2VGb3JtLm1hcCgoZWFjaCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVhY2hbXCJmaWVsZHNcIl1bXCJmcmllbmRseU5hbWVcIl0gPT09IFwiZm9vdGVyXCIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gPEZvb3RlciBibG9nRm9vdGVyPXtlYWNoW1wiZmllbGRzXCJdfSAvPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QmxvZ01vZGFsXHJcbiAgICAgICAgY2xvc2VCbG9nTW9kYWw9eygpID0+IHNldFNob3dCbG9nTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgIHNob3dCbG9nTW9kYWw9e3Nob3dCbG9nTW9kYWx9XHJcbiAgICAgICAgYmxvZ2RhdGE9e2Jsb2dNb2RhbH1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJsb2dIZWFkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3NcclxuICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYmxvZ0hlYWRlclwiKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICAgIC8vIHNldEJsb2dEYXRhKHJlcy5kYXRhKVxyXG4gICAgfSk7XHJcbiAgcmV0dXJuIHJlc3VsdC5pdGVtcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogKCkgPT4gUHJvbWlzZTx7XHJcbiAgcHJvcHM6IHtcclxuICAgIGJsb2dIZWFkZXI6IGFueTtcclxuICB9O1xyXG59PiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJsb2dIZWFkZXIoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYmxvZ0hlYWRlcjogcmVzcG9uc2UsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJCbG9nTW9kYWwiLCJCbG9ncyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJOYXZpZ2F0aW9uQmFyIiwiRm9vdGVyIiwiQnV0dG9uTW9kZWwiLCJIb21lIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiYmxvZ0hlYWRlciIsImJsb2dIZWRlciIsImZpZWxkcyIsImJsb2dEYXRhIiwic2V0QmxvZ0RhdGEiLCJzaG93QmxvZ01vZGFsIiwic2V0U2hvd0Jsb2dNb2RhbCIsImJsb2dQYWdlRm9ybSIsInNldEJsb2dQYWdlRm9ybSIsImJsb2dNb2RhbCIsInNldEJsb2dNb2RhbCIsImZldGNoQmxvZ1BhZ2VEYXRhIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJpbmNsdWRlcyIsIkVudHJ5IiwiZ2V0QmxvZ3MiLCJnZXRibG9nTW9kYWwiLCJkYXRhLXRlc3RpZCIsImRpdiIsIm1hcCIsImVhY2giLCJpbmRleCIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ0xlZnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luVG9wIiwicGFkZGluZ1JpZ2h0IiwiY29sb3IiLCJ0ZXh0IiwiaGFuZGxlQnV0dG9uQWN0aW9uIiwibWFyZ2luTGVmdCIsImJsb2dzIiwiYmxvZ0Zvb3RlciIsImNsb3NlQmxvZ01vZGFsIiwiYmxvZ2RhdGEiLCJnZXRCbG9nSGVhZGVyIiwicmVzdWx0IiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home.tsx\n"));

/***/ })

});
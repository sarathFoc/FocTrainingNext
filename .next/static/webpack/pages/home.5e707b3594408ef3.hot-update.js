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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"getBlogHeader\": function() { return /* binding */ getBlogHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BlogModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BlogModal */ \"./src/components/BlogModal.tsx\");\n/* harmony import */ var _components_Blogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Blogs */ \"./src/components/Blogs.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _subcomponents_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subcomponents/button */ \"./src/subcomponents/button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// import { getblogModal } from \"../apis/apis\";\nconst Home = (props)=>{\n    _s();\n    console.log(\"props\", props);\n    const blogHeder = props.blogHeader[0].fields;\n    const [blogData, setBlogData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [showBlogModal, setShowBlogModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [blogPageForm, setBlogPageForm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [blogModal, setBlogModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const fetchBlogPageData = async ()=>{\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/blogPage\").then((res)=>{\n            setBlogPageForm(res.data?.includes.Entry);\n        });\n    };\n    const getBlogs = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/blog\").then((res)=>{\n            setBlogData(res.data);\n        });\n    };\n    const getblogModal = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/blogModal\").then((res)=>{\n            console.log(\"blogModal data\", res);\n            setBlogModal(res.data?.includes.Entry);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchBlogPageData();\n        getBlogs();\n        getblogModal();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                blogHeader: blogHeder\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    blogPageForm && blogPageForm[0] && blogPageForm.map((each, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    justifyContent: \"space-between\",\n                                    paddingLeft: 20\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        display: \"flex\",\n                                        alignItems: \"center\",\n                                        marginTop: 20,\n                                        justifyContent: \"space-between\",\n                                        paddingRight: 20\n                                    },\n                                    children: each[\"fields\"][\"friendlyName\"] === \"create\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_subcomponents_button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        color: each[\"fields\"][\"theme\"],\n                                        text: each[\"fields\"][\"text\"],\n                                        handleButtonAction: ()=>setShowBlogModal(true)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: 20\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Blogs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            blogs: blogData\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    blogPageForm && blogPageForm[0] && blogPageForm.map((each, index)=>{\n                        if (each[\"fields\"][\"friendlyName\"] === \"footer\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                blogFooter: each[\"fields\"]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 22\n                            }, undefined);\n                        }\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                closeBlogModal: ()=>setShowBlogModal(false),\n                showBlogModal: showBlogModal,\n                blogdata: blogModal\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"yP7m+g4bBXWXVx5eR+65t6cmVkc=\");\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nconst getBlogHeader = async ()=>{\n    const result = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/blogHeader\").then((res)=>{\n        return res.data;\n    // setBlogData(res.data)\n    });\n    return result.items;\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rk1iO0tBQUFBOztBQThGTiwrREFBZUEsSUFBSUEsRUFBQztBQUViLE1BQU0yQyxnQkFBZ0IsVUFBWTtJQUN2QyxNQUFNQyxTQUFTLE1BQU1oRCxpREFDZixDQUFDLG9DQUNKcUIsSUFBSSxDQUFDLENBQUNDLE1BQVE7UUFDYixPQUFPQSxJQUFJQyxJQUFJO0lBQ2Ysd0JBQXdCO0lBQzFCO0lBQ0YsT0FBT3lCLE9BQU9DLEtBQUs7QUFDckIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaG9tZS50c3g/OTJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgQmxvZ01vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2dNb2RhbFwiO1xyXG5pbXBvcnQgQmxvZ3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmxvZ3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgQnV0dG9uTW9kZWwgZnJvbSBcIi4uL3N1YmNvbXBvbmVudHMvYnV0dG9uXCI7XHJcbi8vIGltcG9ydCB7IGdldGJsb2dNb2RhbCB9IGZyb20gXCIuLi9hcGlzL2FwaXNcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAocHJvcHM6IHsgYmxvZ0hlYWRlcjogYW55IH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhcInByb3BzXCIsIHByb3BzKVxyXG4gIGNvbnN0IGJsb2dIZWRlciA9IHByb3BzLmJsb2dIZWFkZXJbMF0uZmllbGRzO1xyXG5cclxuICBjb25zdCBbYmxvZ0RhdGEsIHNldEJsb2dEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2hvd0Jsb2dNb2RhbCwgc2V0U2hvd0Jsb2dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Jsb2dQYWdlRm9ybSwgc2V0QmxvZ1BhZ2VGb3JtXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYmxvZ01vZGFsLCBzZXRCbG9nTW9kYWxdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBmZXRjaEJsb2dQYWdlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ibG9nUGFnZVwiKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0QmxvZ1BhZ2VGb3JtKHJlcy5kYXRhPy5pbmNsdWRlcy5FbnRyeSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRCbG9ncyA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ibG9nXCIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRCbG9nRGF0YShyZXMuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRibG9nTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYmxvZ01vZGFsXCIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJsb2dNb2RhbCBkYXRhXCIsIHJlcyk7XHJcbiAgICAgIHNldEJsb2dNb2RhbChyZXMuZGF0YT8uaW5jbHVkZXMuRW50cnkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoQmxvZ1BhZ2VEYXRhKCk7XHJcbiAgICBnZXRCbG9ncygpO1xyXG4gICAgZ2V0YmxvZ01vZGFsKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmlnYXRpb25CYXIgYmxvZ0hlYWRlcj17YmxvZ0hlZGVyfSAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtibG9nUGFnZUZvcm0gJiZcclxuICAgICAgICAgIGJsb2dQYWdlRm9ybVswXSAmJlxyXG4gICAgICAgICAgYmxvZ1BhZ2VGb3JtLm1hcCgoZWFjaCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMjAsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMHZ3XCIgfX0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlYWNoW1wiZmllbGRzXCJdW1wiZnJpZW5kbHlOYW1lXCJdID09PSBcImNyZWF0ZVwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbk1vZGVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2VhY2hbXCJmaWVsZHNcIl1bXCJ0aGVtZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtlYWNoW1wiZmllbGRzXCJdW1widGV4dFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVCdXR0b25BY3Rpb249eygpID0+IHNldFNob3dCbG9nTW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDIwIH19PlxyXG4gICAgICAgICAgPEJsb2dzIGJsb2dzPXtibG9nRGF0YX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2Jsb2dQYWdlRm9ybSAmJlxyXG4gICAgICAgICAgYmxvZ1BhZ2VGb3JtWzBdICYmXHJcbiAgICAgICAgICBibG9nUGFnZUZvcm0ubWFwKChlYWNoLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWFjaFtcImZpZWxkc1wiXVtcImZyaWVuZGx5TmFtZVwiXSA9PT0gXCJmb290ZXJcIikge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8Rm9vdGVyIGJsb2dGb290ZXI9e2VhY2hbXCJmaWVsZHNcIl19IC8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCbG9nTW9kYWxcclxuICAgICAgICBjbG9zZUJsb2dNb2RhbD17KCkgPT4gc2V0U2hvd0Jsb2dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgc2hvd0Jsb2dNb2RhbD17c2hvd0Jsb2dNb2RhbH1cclxuICAgICAgICBibG9nZGF0YT17YmxvZ01vZGFsfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QmxvZ0hlYWRlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvc1xyXG4gICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ibG9nSGVhZGVyXCIpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuZGF0YTtcclxuICAgICAgLy8gc2V0QmxvZ0RhdGEocmVzLmRhdGEpXHJcbiAgICB9KTtcclxuICByZXR1cm4gcmVzdWx0Lml0ZW1zO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiAoKSA9PiBQcm9taXNlPHtcclxuICBwcm9wczoge1xyXG4gICAgYmxvZ0hlYWRlcjogYW55O1xyXG4gIH07XHJcbn0+ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmxvZ0hlYWRlcigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBibG9nSGVhZGVyOiByZXNwb25zZSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkJsb2dNb2RhbCIsIkJsb2dzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIk5hdmlnYXRpb25CYXIiLCJGb290ZXIiLCJCdXR0b25Nb2RlbCIsIkhvbWUiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJibG9nSGVkZXIiLCJibG9nSGVhZGVyIiwiZmllbGRzIiwiYmxvZ0RhdGEiLCJzZXRCbG9nRGF0YSIsInNob3dCbG9nTW9kYWwiLCJzZXRTaG93QmxvZ01vZGFsIiwiYmxvZ1BhZ2VGb3JtIiwic2V0QmxvZ1BhZ2VGb3JtIiwiYmxvZ01vZGFsIiwic2V0QmxvZ01vZGFsIiwiZmV0Y2hCbG9nUGFnZURhdGEiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImluY2x1ZGVzIiwiRW50cnkiLCJnZXRCbG9ncyIsImdldGJsb2dNb2RhbCIsImRpdiIsIm1hcCIsImVhY2giLCJpbmRleCIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ0xlZnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luVG9wIiwicGFkZGluZ1JpZ2h0IiwiY29sb3IiLCJ0ZXh0IiwiaGFuZGxlQnV0dG9uQWN0aW9uIiwibWFyZ2luTGVmdCIsImJsb2dzIiwiYmxvZ0Zvb3RlciIsImNsb3NlQmxvZ01vZGFsIiwiYmxvZ2RhdGEiLCJnZXRCbG9nSGVhZGVyIiwicmVzdWx0IiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"getBlogHeader\": function() { return /* binding */ getBlogHeader; }\n/* harmony export */ });\n/* harmony import */ var _components_BlogModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/BlogModal */ \"./src/components/BlogModal.tsx\");\n/* harmony import */ var _components_Blogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Blogs */ \"./src/components/Blogs.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\home.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n// import { getblogModal } from \"../apis/apis\";\nconst Home = props => {\n  _s();\n\n  console.log(\"props\", props.blogHeader);\n  const blogHeder = props.blogHeader[0].fields;\n  const {\n    0: blogData,\n    1: setBlogData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n  const {\n    0: showBlogModal,\n    1: setShowBlogModal\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const {\n    0: blogPageForm,\n    1: setBlogPageForm\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n  const {\n    0: blogModal,\n    1: setBlogModal\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n\n  const fetchBlogPageData = async () => {\n    await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/blogPage\").then(res => {\n      setBlogPageForm(res.data?.includes.Entry);\n    });\n  };\n\n  const getBlogs = () => {\n    axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/blog\").then(res => {\n      setBlogData(res.data);\n    });\n  };\n\n  const getblogModal = () => {\n    axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/blogModal\").then(res => {\n      console.log(\"blogModal data\", res);\n      setBlogModal(res.data?.includes.Entry);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    fetchBlogPageData();\n    getBlogs();\n    getblogModal();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      blogHeader: blogHeder\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      \"data-testid\": \"mainDiv\",\n      children: [blogPageForm && blogPageForm[0] && blogPageForm.map((each, index) => {\n        console.log(\"each\", each[\"fields\"][\"friendlyName\"]);\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            \"data-testid\": each[\"fields\"][\"friendlyName\"],\n            style: {\n              display: \"flex\",\n              justifyContent: \"space-between\",\n              paddingLeft: 20\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 17\n          }, undefined)\n        }, void 0, false);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        \"data-testid\": \"blogsDiv\",\n        style: {\n          marginLeft: 20\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Blogs__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          blogs: blogData\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, undefined), blogPageForm && blogPageForm[0] && blogPageForm.map((each, index) => {\n        if (each[\"fields\"][\"friendlyName\"] === \"footer\") {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            blogFooter: each[\"fields\"]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 22\n          }, undefined);\n        }\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_BlogModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      closeBlogModal: () => setShowBlogModal(false),\n      showBlogModal: showBlogModal,\n      blogdata: blogModal\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s(Home, \"yP7m+g4bBXWXVx5eR+65t6cmVkc=\");\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nconst getBlogHeader = async () => {\n  const result = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/blogHeader\").then(res => {\n    return res.data; // setBlogData(res.data)\n  });\n  return result.items;\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBQTtRQUFBO01BQUEsYUF2Q0YsRUEyQ0dJLFlBQVksSUFDWEEsWUFBWSxDQUFDLENBQUQsQ0FEYixJQUVDQSxZQUFZLENBQUNhLEdBQWIsQ0FBaUIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO1FBQ2hDLElBQUlELElBQUksQ0FBQyxRQUFELENBQUosQ0FBZSxjQUFmLE1BQW1DLFFBQXZDLEVBQWlEO1VBQy9DLG9CQUFPLDhEQUFDLDBEQUFEO1lBQVEsVUFBVSxFQUFFQSxJQUFJLENBQUMsUUFBRDtVQUF4QjtZQUFBO1lBQUE7WUFBQTtVQUFBLGFBQVA7UUFDRDtNQUNGLENBSkQsQ0E3Q0o7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBRkYsZUFxREUsOERBQUMsNkRBQUQ7TUFDRSxjQUFjLEVBQUUsTUFBTWYsZ0JBQWdCLENBQUMsS0FBRCxDQUR4QztNQUVFLGFBQWEsRUFBRUQsYUFGakI7TUFHRSxRQUFRLEVBQUVJO0lBSFo7TUFBQTtNQUFBO01BQUE7SUFBQSxhQXJERjtFQUFBLGdCQURGO0FBNkRELENBL0ZEOztHQUFNYjs7S0FBQUE7O0FBaUdOLCtEQUFlQSxJQUFmO0FBRU8sTUFBTStCLGFBQWEsR0FBRyxZQUFZO0VBQ3ZDLE1BQU1DLE1BQU0sR0FBRyxNQUFNbkMsaURBQUEsQ0FDZCxrQ0FEYyxFQUVsQm9CLElBRmtCLENBRVpDLEdBQUQsSUFBUztJQUNiLE9BQU9BLEdBQUcsQ0FBQ0MsSUFBWCxDQURhLENBRWI7RUFDRCxDQUxrQixDQUFyQjtFQU1BLE9BQU9hLE1BQU0sQ0FBQ0MsS0FBZDtBQUNELENBUk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4PzkyZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IEJsb2dNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9CbG9nTW9kYWxcIjtcclxuaW1wb3J0IEJsb2dzIGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2dzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IEJ1dHRvbk1vZGVsIGZyb20gXCIuLi9zdWJjb21wb25lbnRzL2J1dHRvblwiO1xyXG4vLyBpbXBvcnQgeyBnZXRibG9nTW9kYWwgfSBmcm9tIFwiLi4vYXBpcy9hcGlzXCI7XHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzOiB7IGJsb2dIZWFkZXI6IGFueSB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJwcm9wc1wiLCBwcm9wcy5ibG9nSGVhZGVyKVxyXG4gIGNvbnN0IGJsb2dIZWRlciA9IHByb3BzLmJsb2dIZWFkZXJbMF0uZmllbGRzO1xyXG5cclxuICBjb25zdCBbYmxvZ0RhdGEsIHNldEJsb2dEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2hvd0Jsb2dNb2RhbCwgc2V0U2hvd0Jsb2dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Jsb2dQYWdlRm9ybSwgc2V0QmxvZ1BhZ2VGb3JtXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYmxvZ01vZGFsLCBzZXRCbG9nTW9kYWxdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBmZXRjaEJsb2dQYWdlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ibG9nUGFnZVwiKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0QmxvZ1BhZ2VGb3JtKHJlcy5kYXRhPy5pbmNsdWRlcy5FbnRyeSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRCbG9ncyA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ibG9nXCIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRCbG9nRGF0YShyZXMuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRibG9nTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYmxvZ01vZGFsXCIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJsb2dNb2RhbCBkYXRhXCIsIHJlcyk7XHJcbiAgICAgIHNldEJsb2dNb2RhbChyZXMuZGF0YT8uaW5jbHVkZXMuRW50cnkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoQmxvZ1BhZ2VEYXRhKCk7XHJcbiAgICBnZXRCbG9ncygpO1xyXG4gICAgZ2V0YmxvZ01vZGFsKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmlnYXRpb25CYXIgICBibG9nSGVhZGVyPXtibG9nSGVkZXJ9IC8+XHJcbiAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9J21haW5EaXYnPlxyXG4gICAgICAgIHtibG9nUGFnZUZvcm0gJiZcclxuICAgICAgICAgIGJsb2dQYWdlRm9ybVswXSAmJlxyXG4gICAgICAgICAgYmxvZ1BhZ2VGb3JtLm1hcCgoZWFjaCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlYWNoXCIsZWFjaFtcImZpZWxkc1wiXVtcImZyaWVuZGx5TmFtZVwiXSlcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17ZWFjaFtcImZpZWxkc1wiXVtcImZyaWVuZGx5TmFtZVwiXX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDB2d1wiIH19PiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9J3RlcnRpYXJ5LWRpdidcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlYWNoW1wiZmllbGRzXCJdW1wiZnJpZW5kbHlOYW1lXCJdID09PSBcImNyZWF0ZVwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbk1vZGVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2VhY2hbXCJmaWVsZHNcIl1bXCJ0aGVtZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtlYWNoW1wiZmllbGRzXCJdW1widGV4dFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVCdXR0b25BY3Rpb249eygpID0+IHNldFNob3dCbG9nTW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiAgZGF0YS10ZXN0aWQ9J2Jsb2dzRGl2JyBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyMCB9fT5cclxuICAgICAgICAgIDxCbG9ncyBibG9ncz17YmxvZ0RhdGF9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtibG9nUGFnZUZvcm0gJiZcclxuICAgICAgICAgIGJsb2dQYWdlRm9ybVswXSAmJlxyXG4gICAgICAgICAgYmxvZ1BhZ2VGb3JtLm1hcCgoZWFjaCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVhY2hbXCJmaWVsZHNcIl1bXCJmcmllbmRseU5hbWVcIl0gPT09IFwiZm9vdGVyXCIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gPEZvb3RlciBibG9nRm9vdGVyPXtlYWNoW1wiZmllbGRzXCJdfSAvPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QmxvZ01vZGFsXHJcbiAgICAgICAgY2xvc2VCbG9nTW9kYWw9eygpID0+IHNldFNob3dCbG9nTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgIHNob3dCbG9nTW9kYWw9e3Nob3dCbG9nTW9kYWx9XHJcbiAgICAgICAgYmxvZ2RhdGE9e2Jsb2dNb2RhbH1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJsb2dIZWFkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3NcclxuICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYmxvZ0hlYWRlclwiKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICAgIC8vIHNldEJsb2dEYXRhKHJlcy5kYXRhKVxyXG4gICAgfSk7XHJcbiAgcmV0dXJuIHJlc3VsdC5pdGVtcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogKCkgPT4gUHJvbWlzZTx7XHJcbiAgcHJvcHM6IHtcclxuICAgIGJsb2dIZWFkZXI6IGFueTtcclxuICB9O1xyXG59PiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJsb2dIZWFkZXIoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYmxvZ0hlYWRlcjogcmVzcG9uc2UsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJCbG9nTW9kYWwiLCJCbG9ncyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJOYXZpZ2F0aW9uQmFyIiwiRm9vdGVyIiwiSG9tZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImJsb2dIZWFkZXIiLCJibG9nSGVkZXIiLCJmaWVsZHMiLCJibG9nRGF0YSIsInNldEJsb2dEYXRhIiwic2hvd0Jsb2dNb2RhbCIsInNldFNob3dCbG9nTW9kYWwiLCJibG9nUGFnZUZvcm0iLCJzZXRCbG9nUGFnZUZvcm0iLCJibG9nTW9kYWwiLCJzZXRCbG9nTW9kYWwiLCJmZXRjaEJsb2dQYWdlRGF0YSIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiaW5jbHVkZXMiLCJFbnRyeSIsImdldEJsb2dzIiwiZ2V0YmxvZ01vZGFsIiwibWFwIiwiZWFjaCIsImluZGV4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5MZWZ0IiwiZ2V0QmxvZ0hlYWRlciIsInJlc3VsdCIsIml0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home.tsx\n"));

/***/ })

});
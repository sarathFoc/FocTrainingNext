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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_sarar_Desktop_Training_pradeep_focTalksFinal_client_nextjs_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _subcomponents_dropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subcomponents/dropDown */ \"./src/subcomponents/dropDown.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n/* harmony import */ var _subcomponents_textInputWithLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../subcomponents/textInputWithLabel */ \"./src/subcomponents/textInputWithLabel.tsx\");\n/* harmony import */ var _subcomponents_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subcomponents/button */ \"./src/subcomponents/button.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\sarar\\\\Desktop\\\\Training-pradeep\\\\focTalksFinal\\\\client -nextjs\\\\src\\\\pages\\\\index.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_Users_sarar_Desktop_Training_pradeep_focTalksFinal_client_nextjs_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\nconst SignUp = () => {\n  _s();\n\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  const {\n    0: name,\n    1: setName\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n  const {\n    0: email,\n    1: setEmail\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n  const {\n    0: password,\n    1: setPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n  const {\n    0: confirmPassword,\n    1: setConfirmPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n  const {\n    0: signUpPageForm,\n    1: setSignUpPageForm\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n  const {\n    0: textInputForms,\n    1: setTextInputForms\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n  const {\n    0: welcomeText,\n    1: setWelcomeText\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n  const {\n    0: buttonForms,\n    1: setButtonForms\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n  const {\n    0: inputDatas,\n    1: setInputDats\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n  const {\n    0: accountType,\n    1: setAccountType\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n  const {\n    0: role,\n    1: setRole\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n\n  const validateFormAndSignUp = () => {\n    if (!inputDatas.name) {\n      return alert(\"Please enter your name\");\n    } else if (!/\\S+@\\S+\\.\\S+/.test(inputDatas.email)) {\n      return alert(\"Please enter a valid email\");\n    } else if (inputDatas.password.length < 5) {\n      return alert(\"Please provide password of minimum 5 characters\");\n    } else if (!role) {\n      return alert(\"select your role\");\n    }\n\n    signUp();\n  };\n\n  const signUp = async () => {\n    let userType = 1;\n    if (role !== 'admin') userType = 2;\n\n    const postData = _objectSpread(_objectSpread({}, inputDatas), {}, {\n      role: userType\n    });\n\n    await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:8000/user/signup\", postData).then(res => {\n      alert(\"You are successfully registered\");\n      router.push(\"/logIn\");\n    }).catch(err => console.log(\"err\", err));\n  };\n\n  const getSignUpPageData = async () => {\n    await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:8000/signUpPage\").then(res => {\n      res.data?.includes.Entry.forEach(each => {\n        if (each.fields.placeholder) {\n          setTextInputForms(oldElement => [...oldElement, each]);\n        } else if (each.fields.welcomeText) {\n          setWelcomeText(each.fields.welcomeText.content[0].content[0].value);\n        } else if (each.fields.theme) {\n          setButtonForms(oldElement => [...oldElement, each]);\n        } else {\n          console.log(\"each\", each);\n          setAccountType(each.fields.dropdown);\n        }\n      });\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    getSignUpPageData();\n  }, []);\n\n  const handleInputData = e => {\n    console.log(\"e.target.value\", e.target.value);\n    console.log(\"e.target.value\", e.target.name);\n    setInputDats(oldState => {\n      oldState[e.target.name] = e.target.value;\n      return oldState;\n    });\n  };\n\n  const handleRole = role => {\n    setRole(role);\n  };\n\n  const handleButtonAction = action => {\n    if (action !== 'Sign Up') {\n      router.push({\n        pathname: '/logIn'\n      });\n    } else {\n      validateFormAndSignUp();\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Container, {\n    \"data-testid\": \"container\",\n    fluid: true,\n    style: {\n      width: \"100%\",\n      marginLeft: \"10%\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h2\", {\n      style: {\n        marginTop: \"25vh\",\n        marginBottom: 50,\n        color: \"#d40c0c\"\n      },\n      children: welcomeText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_subcomponents_dropDown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      roles: accountType,\n      handleRoles: role => handleRole(role)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }, undefined), textInputForms && textInputForms[0] && textInputForms.map((each, index) => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        style: {\n          marginRight: \"50%\",\n          marginBottom: 20\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_subcomponents_textInputWithLabel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          each: each[\"fields\"],\n          handleChangeData: e => handleInputData(e)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 15\n        }, undefined)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 13\n      }, undefined);\n    }), buttonForms && buttonForms[0] && buttonForms.map((each, index) => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        style: {\n          marginTop: 10,\n          display: \"flex\"\n        },\n        children: [each[\"fields\"][\"text\"] === \"Log In\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n          style: {\n            marginRight: 10\n          },\n          children: \"Already have an acoount?\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_subcomponents_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          color: each[\"fields\"][\"theme\"],\n          text: each[\"fields\"][\"text\"],\n          handleButtonAction: () => handleButtonAction(each[\"fields\"][\"text\"])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 15\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 13\n      }, undefined);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 114,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(SignUp, \"jFowACB4QWA/W0zOvuDVhKohLPs=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = SignUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignUp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsYUFERjtBQWdERCxDQTdJRDs7R0FBTTdDO1VBQ1dKOzs7S0FEWEk7QUErSU4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBEcm9wRG93biBmcm9tIFwiLi4vc3ViY29tcG9uZW50cy9kcm9wRG93blwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDb2wsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEZvcm0sXHJcbiAgRm9ybUdyb3VwLFxyXG4gIElucHV0LFxyXG4gIFJvdyxcclxuICBTcGlubmVyLFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBUZXh0SW5wdXRXaXRoTGFiZWwgZnJvbSBcIi4uL3N1YmNvbXBvbmVudHMvdGV4dElucHV0V2l0aExhYmVsXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3N1YmNvbXBvbmVudHMvYnV0dG9uXCI7XHJcblxyXG5jb25zdCBTaWduVXAgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29uZmlybVBhc3N3b3JkLCBzZXRDb25maXJtUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NpZ25VcFBhZ2VGb3JtLCBzZXRTaWduVXBQYWdlRm9ybV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RleHRJbnB1dEZvcm1zLCBzZXRUZXh0SW5wdXRGb3Jtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3dlbGNvbWVUZXh0LCBzZXRXZWxjb21lVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYnV0dG9uRm9ybXMsIHNldEJ1dHRvbkZvcm1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW5wdXREYXRhcywgc2V0SW5wdXREYXRzXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbYWNjb3VudFR5cGUsIHNldEFjY291bnRUeXBlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlRm9ybUFuZFNpZ25VcCA9ICgpID0+IHtcclxuICAgIGlmICghaW5wdXREYXRhcy5uYW1lKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIik7XHJcbiAgICB9IGVsc2UgaWYgKCEvXFxTK0BcXFMrXFwuXFxTKy8udGVzdChpbnB1dERhdGFzLmVtYWlsKSkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbFwiKTtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXREYXRhcy5wYXNzd29yZC5sZW5ndGggPCA1KSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBwcm92aWRlIHBhc3N3b3JkIG9mIG1pbmltdW0gNSBjaGFyYWN0ZXJzXCIpO1xyXG4gICAgfSBcclxuICAgIGVsc2UgaWYgKCFyb2xlKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcInNlbGVjdCB5b3VyIHJvbGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnblVwKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2lnblVwID0gYXN5bmMoKSA9PiB7XHJcbiAgICBsZXQgdXNlclR5cGUgPSAxXHJcblxyXG4gICAgaWYgKHJvbGUgIT09ICdhZG1pbicpIHVzZXJUeXBlID0gMlxyXG4gICAgY29uc3QgcG9zdERhdGEgPSB7XHJcbiAgICAgIC4uLmlucHV0RGF0YXMsXHJcbiAgICAgIHJvbGU6IHVzZXJUeXBlXHJcbiAgICB9XHJcbiAgICBcclxuICAgYXdhaXQgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3VzZXIvc2lnbnVwXCIsIHBvc3REYXRhKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgYXJlIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkXCIpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ0luXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U2lnblVwUGFnZURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvc2lnblVwUGFnZVwiKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmVzLmRhdGE/LmluY2x1ZGVzLkVudHJ5LmZvckVhY2goKGVhY2g6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChlYWNoLmZpZWxkcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgc2V0VGV4dElucHV0Rm9ybXMoKG9sZEVsZW1lbnQpID0+IFsuLi5vbGRFbGVtZW50LCBlYWNoXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlYWNoLmZpZWxkcy53ZWxjb21lVGV4dCkge1xyXG4gICAgICAgICAgc2V0V2VsY29tZVRleHQoZWFjaC5maWVsZHMud2VsY29tZVRleHQuY29udGVudFswXS5jb250ZW50WzBdLnZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVhY2guZmllbGRzLnRoZW1lKSB7XHJcbiAgICAgICAgICBzZXRCdXR0b25Gb3Jtcygob2xkRWxlbWVudCkgPT4gWy4uLm9sZEVsZW1lbnQsIGVhY2hdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJlYWNoXCIsIGVhY2gpO1xyXG4gICAgICAgICAgc2V0QWNjb3VudFR5cGUoZWFjaC5maWVsZHMuZHJvcGRvd24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0U2lnblVwUGFnZURhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0RGF0YSA9IChlOiBhbnkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZS50YXJnZXQudmFsdWVcIiwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJlLnRhcmdldC52YWx1ZVwiLCBlLnRhcmdldC5uYW1lKTtcclxuICAgIFxyXG5cclxuICAgIHNldElucHV0RGF0cyhvbGRTdGF0ZSA9PiB7XHJcbiAgICAgIG9sZFN0YXRlW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgcmV0dXJuIG9sZFN0YXRlO1xyXG4gICAgfSlcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVJvbGUgPSAocm9sZTogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRSb2xlKHJvbGUpXHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV0dG9uQWN0aW9uID0gKGFjdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICBpZihhY3Rpb24gIT09ICdTaWduIFVwJykge1xyXG4gICAgICByb3V0ZXIucHVzaCh7cGF0aG5hbWU6Jy9sb2dJbid9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsaWRhdGVGb3JtQW5kU2lnblVwKClcclxuICAgIH1cclxuICB9IFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBkYXRhLXRlc3RpZD0nY29udGFpbmVyJyBmbHVpZCBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkxlZnQ6IFwiMTAlXCIgfX0+XHJcbiAgICAgIDxoMlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjV2aFwiLFxyXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiA1MCxcclxuICAgICAgICAgIGNvbG9yOiBcIiNkNDBjMGNcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3dlbGNvbWVUZXh0fVxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8RHJvcERvd24gcm9sZXM9e2FjY291bnRUeXBlfSBoYW5kbGVSb2xlcz17KHJvbGU6IHN0cmluZykgPT4gaGFuZGxlUm9sZShyb2xlKX0gLz5cclxuXHJcblxyXG4gICAgICB7dGV4dElucHV0Rm9ybXMgJiZcclxuICAgICAgICB0ZXh0SW5wdXRGb3Jtc1swXSAmJlxyXG4gICAgICAgIHRleHRJbnB1dEZvcm1zLm1hcCgoZWFjaCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNTAlXCIsIG1hcmdpbkJvdHRvbTogMjAgfX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPFRleHRJbnB1dFdpdGhMYWJlbFxyXG4gICAgICAgICAgICAgICAgZWFjaD17ZWFjaFtcImZpZWxkc1wiXX1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZURhdGE9eyhlKSA9PiBoYW5kbGVJbnB1dERhdGEoZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG5cclxuICAgICAge2J1dHRvbkZvcm1zICYmXHJcbiAgICAgICAgYnV0dG9uRm9ybXNbMF0gJiZcclxuICAgICAgICBidXR0b25Gb3Jtcy5tYXAoKGVhY2gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAxMCwgZGlzcGxheTogXCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlYWNoW1wiZmllbGRzXCJdW1widGV4dFwiXSA9PT0gXCJMb2cgSW5cIiAmJlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5SaWdodDogMTB9fT5BbHJlYWR5IGhhdmUgYW4gYWNvb3VudD88L3A+XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17ZWFjaFtcImZpZWxkc1wiXVtcInRoZW1lXCJdfVxyXG4gICAgICAgICAgICAgICAgdGV4dD17ZWFjaFtcImZpZWxkc1wiXVtcInRleHRcIl19XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVCdXR0b25BY3Rpb249eygpID0+IGhhbmRsZUJ1dHRvbkFjdGlvbihlYWNoW1wiZmllbGRzXCJdW1widGV4dFwiXSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEcm9wRG93biIsInVzZVJvdXRlciIsIkNvbnRhaW5lciIsIlRleHRJbnB1dFdpdGhMYWJlbCIsIkJ1dHRvbiIsIlNpZ25VcCIsInJvdXRlciIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJzaWduVXBQYWdlRm9ybSIsInNldFNpZ25VcFBhZ2VGb3JtIiwidGV4dElucHV0Rm9ybXMiLCJzZXRUZXh0SW5wdXRGb3JtcyIsIndlbGNvbWVUZXh0Iiwic2V0V2VsY29tZVRleHQiLCJidXR0b25Gb3JtcyIsInNldEJ1dHRvbkZvcm1zIiwiaW5wdXREYXRhcyIsInNldElucHV0RGF0cyIsImFjY291bnRUeXBlIiwic2V0QWNjb3VudFR5cGUiLCJyb2xlIiwic2V0Um9sZSIsInZhbGlkYXRlRm9ybUFuZFNpZ25VcCIsImFsZXJ0IiwidGVzdCIsImxlbmd0aCIsInNpZ25VcCIsInVzZXJUeXBlIiwicG9zdERhdGEiLCJwb3N0IiwidGhlbiIsInJlcyIsInB1c2giLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRTaWduVXBQYWdlRGF0YSIsImdldCIsImRhdGEiLCJpbmNsdWRlcyIsIkVudHJ5IiwiZm9yRWFjaCIsImVhY2giLCJmaWVsZHMiLCJwbGFjZWhvbGRlciIsIm9sZEVsZW1lbnQiLCJjb250ZW50IiwidmFsdWUiLCJ0aGVtZSIsImRyb3Bkb3duIiwiaGFuZGxlSW5wdXREYXRhIiwiZSIsInRhcmdldCIsIm9sZFN0YXRlIiwiaGFuZGxlUm9sZSIsImhhbmRsZUJ1dHRvbkFjdGlvbiIsImFjdGlvbiIsInBhdGhuYW1lIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJtYXAiLCJpbmRleCIsIm1hcmdpblJpZ2h0IiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Rubik', sans-serif;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n/* Styling for Header Starts Here */\\r\\n\\r\\nheader {\\r\\n  align-items: center;\\r\\n  min-height: 3em;\\r\\n  width: 70%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\nheader > a {\\r\\n  flex: 0.25;\\r\\n}\\r\\n\\r\\nheader > a > img {\\r\\n  height: 2em;\\r\\n}\\r\\n\\r\\nheader,\\r\\n.nav-links {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.nav-links {\\r\\n  flex: 1;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n/* Styling for Header Ends Here */\\r\\n\\r\\n/* Styling for Main section starts Here */\\r\\n\\r\\n#items-count {\\r\\n  width: 70%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  min-height: 82vh;\\r\\n  margin: 1em auto;\\r\\n  margin: auto;\\r\\n  padding: 0;\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  row-gap: 30px;\\r\\n  width: 70%;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.list-item {\\r\\n  padding: 0.5em;\\r\\n  min-width: 250px;\\r\\n  max-width: 250px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.list-item > img {\\r\\n  height: 50px;\\r\\n  width: 50px;\\r\\n}\\r\\n\\r\\n.list-item-head {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 0.5em 0;\\r\\n}\\r\\n\\r\\n.list-item > button {\\r\\n  width: 100%;\\r\\n  padding: 0.5em;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.list-item-head h4 {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.list-item-head i {\\r\\n  margin-left: 10px;\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.list-item-likes {\\r\\n  text-align: end;\\r\\n  padding: 0 0 0.5em 0;\\r\\n}\\r\\n\\r\\n.list-item > button:hover {\\r\\n  background-color: rgb(250, 235, 215);\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n/* Styling for Main section ends Here */\\r\\n\\r\\n/* popup styling starts */\\r\\n\\r\\n.popup {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  padding: 20px;\\r\\n  text-align: center;\\r\\n  background-color: rgba(122, 106, 106, 0.596);\\r\\n  z-index: 1;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.popup-content {\\r\\n  position: relative;\\r\\n  text-align: center;\\r\\n  background-color: #fff;\\r\\n  padding: 30px;\\r\\n  margin: 50px auto;\\r\\n  max-width: 600px;\\r\\n  max-height: 80%;\\r\\n  border-radius: 10px;\\r\\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.popup-img {\\r\\n  height: 150px;\\r\\n  border-radius: 5px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.city-details {\\r\\n  padding: 20px;\\r\\n  max-width: 500px;\\r\\n  text-align: center;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.comment-item {\\r\\n  background-color: rgb(21, 83, 21);\\r\\n  color: #fff;\\r\\n  padding: 10px;\\r\\n  margin-bottom: 10px;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.comments-section {\\r\\n  overflow-y: auto;\\r\\n  text-align: left;\\r\\n  width: 100%;\\r\\n  max-height: 300px;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.comment-submit {\\r\\n  align-self: flex-start;\\r\\n}\\r\\n\\r\\n.close-button {\\r\\n  position: absolute;\\r\\n  top: 10px;\\r\\n  right: 10px;\\r\\n  font-size: 20px;\\r\\n  color: #fff;\\r\\n  background-color: #000;\\r\\n  border: none;\\r\\n  border-radius: 50%;\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  cursor: pointer;\\r\\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n/* Form styling */\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\nlabel {\\r\\n  font-weight: bold;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\\r\\ninput[type=\\\"text\\\"],\\r\\ntextarea {\\r\\n  padding: 10px;\\r\\n  border-radius: 3px;\\r\\n  border: 2px solid rgb(241, 238, 238);\\r\\n  margin-bottom: 10px;\\r\\n  width: 100%;\\r\\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  resize: vertical;\\r\\n}\\r\\n\\r\\nbutton[type=\\\"submit\\\"] {\\r\\n  background-color: #4caf50;\\r\\n  color: #fff;\\r\\n  padding: 10px;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\nbutton[type=\\\"submit\\\"]:hover {\\r\\n  background-color: #3e8e41;\\r\\n}\\r\\n\\r\\n/* popup styling ends */\\r\\n\\r\\n/* Footer styling starts here */\\r\\n\\r\\nfooter {\\r\\n  background-color: rgb(241, 219, 189);\\r\\n  height: 30px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/* Footer styling ends here */\\r\\n\\r\\n/* Wait Animations Starts Here */\\r\\n\\r\\n/* KEYFRAMES */\\r\\n@keyframes configure-clockwise {\\r\\n  0% {\\r\\n    transform: rotate(0);\\r\\n  }\\r\\n\\r\\n  25% {\\r\\n    transform: rotate(90deg);\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    transform: rotate(180deg);\\r\\n  }\\r\\n\\r\\n  75% {\\r\\n    transform: rotate(270deg);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes configure-xclockwise {\\r\\n  0% {\\r\\n    transform: rotate(45deg);\\r\\n  }\\r\\n\\r\\n  25% {\\r\\n    transform: rotate(-45deg);\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    transform: rotate(-135deg);\\r\\n  }\\r\\n\\r\\n  75% {\\r\\n    transform: rotate(-225deg);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: rotate(-315deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n/* GRID STYLING */\\r\\n\\r\\n.spinner-box {\\r\\n  height: auto;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/* X-ROTATING BOXES */\\r\\n\\r\\n.configure-border-1 {\\r\\n  width: 115px;\\r\\n  height: 115px;\\r\\n  padding: 3px;\\r\\n  position: absolute;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background: #fb5b53;\\r\\n  animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\\r\\n}\\r\\n\\r\\n.configure-border-2 {\\r\\n  width: 115px;\\r\\n  height: 115px;\\r\\n  padding: 3px;\\r\\n  left: -115px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background: rgb(63, 249, 220);\\r\\n  transform: rotate(45deg);\\r\\n  animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\\r\\n}\\r\\n\\r\\n.configure-core {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: #1d2630;\\r\\n}\\r\\n\\r\\n/* Wait Animations Ends Here */\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-dashboard/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-dashboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-dashboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-dashboard/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-dashboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-dashboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-dashboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-dashboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-dashboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-dashboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/API.js */ \"./src/modules/API.js\");\n/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_API_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n\r\n\r\n\r\n\r\nconst mutateLikes = (weatherList, likesList) => {\r\n  weatherList.forEach((weatherListItem) => {\r\n    likesList.forEach((likesListItem) => {\r\n      if (weatherListItem.id === likesListItem.item_id) {\r\n        weatherListItem.likes = likesListItem.likes;\r\n      }\r\n    });\r\n  });\r\n  return weatherList;\r\n};\r\n\r\nconst displayWeather = (dataList) => {\r\n  const list = document.getElementById('list');\r\n  list.innerHTML = '';\r\n\r\n  dataList.forEach((element) => {\r\n    const listItem = document.createElement('li');\r\n    listItem.className = 'list-item';\r\n    listItem.innerHTML = `<img src='https://openweathermap.org/img/w/${element.weather[0].icon}.png'/>`;\r\n    const listItemHead = document.createElement('div');\r\n    listItemHead.className = 'list-item-head';\r\n    listItemHead.innerHTML = `<h4>${element.name}</h4>`;\r\n    const likeBtn = document.createElement('i');\r\n    const likes = document.createElement('p');\r\n    likeBtn.className = 'fa-regular fa-heart';\r\n    likeBtn.addEventListener('click', () => {\r\n      (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_1__.addLikes)(element.id);\r\n      element.likes += 1;\r\n      likes.innerText = `${element.likes ? element.likes : 0} Likes`;\r\n    });\r\n    listItemHead.appendChild(likeBtn);\r\n    listItem.appendChild(listItemHead);\r\n\r\n    likes.className = 'list-item-likes';\r\n    likes.innerText = `${element.likes ? element.likes : 0} Likes`;\r\n    listItem.appendChild(likes);\r\n\r\n    const listItemBody = document.createElement('div');\r\n    listItemBody.className = 'list-item-head';\r\n    listItemBody.innerHTML = `<p>Temprature: ${element.main.temp} &deg;F</p><p>Humidity: ${element.main.humidity}%</p>`;\r\n    listItem.appendChild(listItemBody);\r\n\r\n    const button = document.createElement('button');\r\n    button.innerText = 'Comments';\r\n    button.className = 'comment-button';\r\n    button.addEventListener('click', () => {\r\n      (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_2__.openPopup)(element);\r\n    });\r\n    listItem.appendChild(button);\r\n    list.appendChild(listItem);\r\n  });\r\n};\r\n\r\nwindow.addEventListener('load', async () => {\r\n  const likesData = await (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\r\n  const dataList = await (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_1__.getData)();\r\n\r\n  (0,_modules_API_js__WEBPACK_IMPORTED_MODULE_1__.itemsCounter)(dataList);\r\n\r\n  const newDataList = await mutateLikes(dataList, likesData);\r\n\r\n  displayWeather(newDataList);\r\n\r\n  const closeBtns = document.querySelectorAll('.close-button');\r\n  closeBtns.forEach((button) => {\r\n    button.addEventListener('click', () => {\r\n      (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_2__.closePopup)();\r\n    });\r\n  });\r\n});\n\n//# sourceURL=webpack://weather-dashboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((module) => {

eval("const getData = async () => {\r\n  const API_KEY = '358eb180ada51f6235f6ecc20247a6d1';\r\n  const URL = `https://api.openweathermap.org/data/2.5/find?lat=37&lon=-122&APPID=${API_KEY}`;\r\n  const res = await fetch(URL);\r\n  const data = await res.json();\r\n  return data.list;\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const APP_ID = 'zgPe1uPVdPIz90V51Wzt';\r\n  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`;\r\n  const res = await fetch(URL);\r\n  const likes = await res.json();\r\n  return likes;\r\n};\r\n\r\nconst addLikes = async (id) => {\r\n  const APP_ID = 'zgPe1uPVdPIz90V51Wzt';\r\n  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`;\r\n  await fetch(URL, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n  });\r\n};\r\n\r\nconst itemsCounter = (list) => {\r\n  document.getElementById('items-count').innerText = `Total Items: ${list.length}`;\r\n};\r\n\r\nconst postComment = async (id, name, comment) => {\r\n  const APP_ID = 'zgPe1uPVdPIz90V51Wzt';\r\n  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments`;\r\n  const res = await fetch(URL, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username: name,\r\n      comment,\r\n    }),\r\n  });\r\n  return res;\r\n};\r\n\r\nconst getComments = async (id) => {\r\n  const APP_ID = 'zgPe1uPVdPIz90V51Wzt';\r\n  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/comments?item_id=${id}`;\r\n  const res = await fetch(URL, {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  return res.json();\r\n};\r\n\r\nconst commentsCounter = (comments) => comments.length;\r\n\r\nmodule.exports = {\r\n  getData, getLikes, addLikes, itemsCounter, postComment, getComments, commentsCounter,\r\n};\n\n//# sourceURL=webpack://weather-dashboard/./src/modules/API.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup),\n/* harmony export */   \"openPopup\": () => (/* binding */ openPopup)\n/* harmony export */ });\n/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ \"./src/modules/API.js\");\n/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_API_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst closePopup = () => {\r\n  const commentsPopup = document.getElementById('comments-popup');\r\n  commentsPopup.style.display = 'none';\r\n};\r\n\r\nconst openPopup = async (data) => {\r\n  const commentsPopup = document.getElementById('comments-popup');\r\n  const cityDetails = document.getElementById('city-details');\r\n\r\n  const nameInput = document.getElementById('name-input');\r\n  const commentInput = document.getElementById('comment-input');\r\n  const submitComment = document.getElementById('submit-comment');\r\n\r\n  const commentsList = document.getElementById('comments-list');\r\n\r\n  const comments = await (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(data.id);\r\n\r\n  if (!comments.error) {\r\n    commentsList.innerHTML = '';\r\n    commentsList.innerHTML = `<p id=\"comments-count\">${(0,_API_js__WEBPACK_IMPORTED_MODULE_0__.commentsCounter)(comments)} comments</p>`;\r\n    comments.forEach((comment) => {\r\n      const commentItem = document.createElement('li');\r\n      commentItem.className = 'comment-item';\r\n      commentItem.innerHTML = `<p>\"${comment.comment}\" By '${comment.username}' on \"${comment.creation_date}\"</p>`;\r\n      commentsList.appendChild(commentItem);\r\n    });\r\n  } else {\r\n    commentsList.innerHTML = '<p>No comments added yet</p>';\r\n  }\r\n\r\n  submitComment.addEventListener('click', async(e) => {\r\n    e.preventDefault();\r\n    await (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(data.id, nameInput.value, commentInput.value);\r\n    closePopup();\r\n    openPopup(data);\r\n    nameInput.value = '';\r\n    commentInput.value = '';\r\n  });\r\n\r\n  const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;\r\n  cityDetails.innerHTML = `\r\n      <h2>${data.name}</h2>\r\n      <img class=\"popup-img\" src=\"${iconUrl}\" alt=\"Weather Icon\">\r\n      <p>Temperature: <span id=\"temp\">${data.main.temp}&deg;F</span></p>\r\n      <p>Humidity: <span id=\"humidity\">${data.main.humidity}%</span></p>\r\n      <p>Wind Speed: <span id=\"wind-speed\">${data.wind.speed} mph</span></p>\r\n    `;\r\n\r\n  commentsPopup.style.display = 'block';\r\n};\r\n\n\n//# sourceURL=webpack://weather-dashboard/./src/modules/comments.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
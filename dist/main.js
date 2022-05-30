/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


/*
Element generating functions as well as isPositiveInt function
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getElem = exports.setInnerText = exports.clearInnerText = exports.isPositiveInteger = exports.createSimilarElems = exports.toggleClasses = exports.removeClasses = exports.addClasses = exports.appendSiblings = void 0;
/* Append a set of elements to the same parent
Parameters can be elements or arrays of elements
Returns flat array of siblings regardless of array struc of input */
function appendSiblings(elemParent, ...elemSiblings) {
    let siblingArray = [];
    elemSiblings.forEach(elem => {
        if (Array.isArray(elem)) { // passing in array of siblings
            appendSiblings(elemParent, ...elem);
            return; // do not attempt to append array itself
        }
        elemParent.appendChild(elem);
        siblingArray.push(elem);
    });
    return siblingArray;
}
exports.appendSiblings = appendSiblings;
/* Add multiple classes to singe element / array of elements
Class parameters can be array of classes or classes
Returns the element/array of elements itself */
function addClasses(elem, ...classes) {
    if (Array.isArray(elem)) { // inputting array of elements instead of one element
        elem.forEach((subElem) => {
            addClasses(subElem, ...classes);
            return; // do not attempt to add classes to array
        });
        return elem; // returning input array
    }
    classes.forEach((subClass) => {
        if (Array.isArray(subClass)) { // passing in arrays of classes
            addClasses(elem, ...subClass);
            return; // do not add array as a class
        }
        elem.classList.add(subClass);
    });
    return elem; // returning single elem input
}
exports.addClasses = addClasses;
/* input a single element or array of elements, and multiple classes to remove
Class parameters can be array of classes or classes
returns this element/array of elements */
function removeClasses(elem, ...classes) {
    if (Array.isArray(elem)) { // inputting array of elements instead of one element
        elem.forEach((subElem) => {
            removeClasses(subElem, ...classes);
            return; // do not attempt to remove classes from array
        });
        return elem; // returning input array
    }
    classes.forEach((subClass) => {
        if (Array.isArray(subClass)) { // passing in arrays of classes
            removeClasses(elem, ...subClass);
            return; // do not remove the array as a class
        }
        elem.classList.remove(subClass);
    });
    return elem; // returning single elem input
}
exports.removeClasses = removeClasses;
/* input a single element or array of elements, and multiple classes to remove
Class parameters can be array of classes or classes
returns this element/array of elements */
function toggleClasses(elem, ...classes) {
    if (Array.isArray(elem)) { // inputting array of elements instead of one element
        elem.forEach((subElem) => {
            toggleClasses(subElem, ...classes);
            return; // do not attempt to remove classes from array
        });
        return elem; // returning input array
    }
    classes.forEach((subClass) => {
        if (Array.isArray(subClass)) { // passing in arrays of classes
            toggleClasses(elem, ...subClass);
            return; // do not remove the array as a class
        }
        elem.classList.toggle(subClass);
    });
    return elem; // returning single elem input
}
exports.toggleClasses = toggleClasses;
/* input a tag, number of elems to generate, array of
        classes to add, and id's
classes are an array due to ability to
        input specific id parameters
returns an array of these new elements */
function createSimilarElems(tagName, numElem, classArray, ...elemIdList) {
    let valid = true;
    // mandatory parameters
    if (tagName === undefined) {
        valid = false;
    }
    if (!isPositiveInteger(numElem)) {
        numElem = 0;
    }
    // if attempting to add less elements
    // than # of ids inputted, will default to amount of id
    if ((numElem <= elemIdList.length)) {
        if (elemIdList.length === 0) { // no id's passed into func
            valid = false;
        }
        numElem = elemIdList.length;
    }
    let similarElemArray = [];
    let currentElem;
    if (!valid) {
        console.log('invalid input to createSimilarElems');
    }
    else {
        for (let currentIndex = 0; currentIndex < numElem; currentIndex++) {
            currentElem = document.createElement(tagName); // create elem
            if (elemIdList[currentIndex] !== undefined) { // set its id if exists
                currentElem.setAttribute('id', elemIdList[currentIndex]);
            }
            addClasses(currentElem, classArray); // add the input classes
            similarElemArray.push(currentElem);
        }
    }
    return similarElemArray;
}
exports.createSimilarElems = createSimilarElems;
// clear inner text of array of (for ex.) paragraphs
// returns flat array of its parameters regardless of input struc
function clearInnerText(...elems) {
    let elemArray = [];
    elems.forEach(subElem => {
        if (Array.isArray(subElem)) { // input array as single param
            clearInnerText(...subElem);
            return; // do not set inner text of array itself
        }
        subElem.innerText = '';
        elemArray.push(subElem); // flat array
    });
    return elemArray;
}
exports.clearInnerText = clearInnerText;
// specify inner text as first param
// rest params is array or list of elements to set text to
// returns array of elems with same structure as input 
function setInnerText(text, ...elems) {
    let elemArray = [];
    elems.forEach((subElem) => {
        if (Array.isArray(subElem)) { // input array as single param
            setInnerText(text, ...subElem);
            return; // do not set inner text of array itself
        }
        subElem.innerText = text;
        elemArray.push(subElem); // flat array
    });
    return elemArray;
}
exports.setInnerText = setInnerText;
// Returns a bool of if passed input is positive integer
function isPositiveInteger(num) {
    if (Number.isInteger(num) && num > 0) {
        return true;
    }
    else {
        return false;
    }
}
exports.isPositiveInteger = isPositiveInteger;
// input an element's id string to get this element
// shorter than typing full line
function getElem(destIdString) {
    const destElem = document.getElementById(destIdString);
    return destElem;
}
exports.getElem = getElem;


/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.concatenate = exports.operate = void 0;
function add(num1, num2) {
    return (num1 + num2);
}
function subtract(num1, num2) {
    return (num1 - num2);
}
function multiply(num1, num2) {
    return (num1 * num2);
}
function divide(num1, num2) {
    if (divide0test(num2)) {
        return 'Divide by 0 error';
    }
    return (num1 / num2);
}
function divide0test(divisor) {
    if (divisor === 0) {
        return true;
    }
    return false;
}
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return (add(num1, num2));
        case '-':
            return (subtract(num1, num2));
        case '×': // multiplication sign , not letter x
            return (multiply(num1, num2));
        case '÷':
            return (divide(num1, num2));
    }
}
exports.operate = operate;
// input two numbers to concatenate instead of add
// ex: 4, 5 returns '45' (as a number)
function concatenate(digit1, digit2) {
    let numStr = ("" + digit1 + digit2);
    return Number(numStr);
}
exports.concatenate = concatenate;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!**************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0px;\n    padding: 0px;\n    font-family: 'Courier New', Courier, monospace;\n    font-size: larger;\n}\n\n#calcBorder {\n    background-color: hsl(164, 100%, 25%);\n    width: 80vh;\n    height: 100vh;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 2.5vh;\n}\n\n#calcBody {\n    background-color: hsl(238, 41%, 23%);\n    width: 70vh;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 2.5vh;\n}\n\n#displayContainer {\n    background-color: hsl(259, 100%, 96%);\n    width: 65vh;\n    margin-left: auto;\n    margin-right: auto;\n    justify-content: center;\n    height: 20vh;\n    display: flex; /* center the display */\n    align-items: center;\n    justify-content: flex-start;\n}\n\n#divDisplay {\n    color: rgb(0, 0, 0);\n    width: 50vh;\n    margin-left: 1vh;\n}\n\n#calcMeat {\n    padding: 2.5vh;\n    background-color: hsl(246, 37%, 65%);\n    width: 60vh;\n    margin-left: auto;\n    margin-right: auto;\n    justify-content: center;\n    display: grid;\n    /* first column is numDiv, second is funcDiv */\n    grid-template-columns: 45vh 15vh;\n    gap: 0.5vh;\n}\n\n#numDiv { /* 0-9 btns */\n    display: grid;\n    grid-template-columns: repeat(3, 15vh);\n    grid-template-rows: repeat(4, 15vh);\n    gap: .5vh;\n}\n\n#btn0 { /* move the 0 to the bottom */\n    grid-row: 4;\n}\n\n#btnEquals {\n    grid-column: span 2;\n    background-color: greenyellow;\n}\n\n#funcDiv {\n    justify-self: end;\n    display: grid;\n    grid-template-columns: repeat(1, 12vh);\n    grid-template-rows: repeat(5, 12vh);\n    gap: .375vh;\n}\n\nbody {\n    background-color: rgb(5, 4, 5);\n}\n\n.calcBtn {\n    border-radius: 10%;\n}\n\n.numBtn {\n    background-color: hsl(240, 56%, 87%);\n}\n\n.funcBtn {\n    border-radius: 50%;\n    background-color: hsl(39, 100%, 50%);\n}\n\n.pressed {\n    background-color: aliceblue;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,8CAA8C;IAC9C,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;IACrC,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,oCAAoC;IACpC,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,qCAAqC;IACrC,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,aAAa,EAAE,uBAAuB;IACtC,mBAAmB;IACnB,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,oCAAoC;IACpC,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,8CAA8C;IAC9C,gCAAgC;IAChC,UAAU;AACd;;AAEA,UAAU,aAAa;IACnB,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,SAAS;AACb;;AAEA,QAAQ,6BAA6B;IACjC,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,WAAW;AACf;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,2BAA2B;AAC/B","sourcesContent":["* {\n    margin: 0px;\n    padding: 0px;\n    font-family: 'Courier New', Courier, monospace;\n    font-size: larger;\n}\n\n#calcBorder {\n    background-color: hsl(164, 100%, 25%);\n    width: 80vh;\n    height: 100vh;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 2.5vh;\n}\n\n#calcBody {\n    background-color: hsl(238, 41%, 23%);\n    width: 70vh;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 2.5vh;\n}\n\n#displayContainer {\n    background-color: hsl(259, 100%, 96%);\n    width: 65vh;\n    margin-left: auto;\n    margin-right: auto;\n    justify-content: center;\n    height: 20vh;\n    display: flex; /* center the display */\n    align-items: center;\n    justify-content: flex-start;\n}\n\n#divDisplay {\n    color: rgb(0, 0, 0);\n    width: 50vh;\n    margin-left: 1vh;\n}\n\n#calcMeat {\n    padding: 2.5vh;\n    background-color: hsl(246, 37%, 65%);\n    width: 60vh;\n    margin-left: auto;\n    margin-right: auto;\n    justify-content: center;\n    display: grid;\n    /* first column is numDiv, second is funcDiv */\n    grid-template-columns: 45vh 15vh;\n    gap: 0.5vh;\n}\n\n#numDiv { /* 0-9 btns */\n    display: grid;\n    grid-template-columns: repeat(3, 15vh);\n    grid-template-rows: repeat(4, 15vh);\n    gap: .5vh;\n}\n\n#btn0 { /* move the 0 to the bottom */\n    grid-row: 4;\n}\n\n#btnEquals {\n    grid-column: span 2;\n    background-color: greenyellow;\n}\n\n#funcDiv {\n    justify-self: end;\n    display: grid;\n    grid-template-columns: repeat(1, 12vh);\n    grid-template-rows: repeat(5, 12vh);\n    gap: .375vh;\n}\n\nbody {\n    background-color: rgb(5, 4, 5);\n}\n\n.calcBtn {\n    border-radius: 10%;\n}\n\n.numBtn {\n    background-color: hsl(240, 56%, 87%);\n}\n\n.funcBtn {\n    border-radius: 50%;\n    background-color: hsl(39, 100%, 50%);\n}\n\n.pressed {\n    background-color: aliceblue;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const math_1 = __webpack_require__(/*! ./math */ "./src/math.js");
const function_1 = __webpack_require__(/*! ./function */ "./src/function.js");
__webpack_require__(/*! ./style.css */ "./src/style.css");
// create 0-9 buttons:
const numBtns = (0, function_1.createSimilarElems)('button', 0, ['numBtn', 'calcBtn'], 'btn0', 'btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8', 'btn9');
// set the text to be 0-9, and add data:
for (let i = 0; i <= 9; i++) {
    numBtns[i].innerText = i.toString();
    numBtns[i].dataset.num = i.toString();
}
// append the 0-9 buttons:
(0, function_1.appendSiblings)((0, function_1.getElem)('numDiv'), numBtns);
// create the function(operator) btns:
const funcBtns = (0, function_1.createSimilarElems)('button', 0, ['funcBtn', 'calcBtn'], 'btnAdd', 'btnSubtract', 'btnMultiply', 'btnDivide');
// append the func btns:
(0, function_1.appendSiblings)((0, function_1.getElem)('funcDiv'), funcBtns);
// set inner text (done here bc using getElem), and set data:
(0, function_1.getElem)('btnAdd').innerText = '+';
(0, function_1.getElem)('btnAdd').dataset.operator = '+';
(0, function_1.getElem)('btnSubtract').innerText = '-';
(0, function_1.getElem)('btnSubtract').dataset.operator = '-';
(0, function_1.getElem)('btnMultiply').innerText = '×';
(0, function_1.getElem)('btnMultiply').dataset.operator = '×';
(0, function_1.getElem)('btnDivide').innerText = '÷';
(0, function_1.getElem)('btnDivide').dataset.operator = '÷';
// create clear btn:
let settingsBtns = (0, function_1.createSimilarElems)('button', 1, ['settingsBtn', 'calcBtn'], 'btnClear');
// append:
(0, function_1.appendSiblings)((0, function_1.getElem)('funcDiv'), settingsBtns);
// set inner text to 'AC' like on real calculator:
(0, function_1.getElem)('btnClear').innerText = 'AC';
// create equals btn:
let resultBtns = ((0, function_1.createSimilarElems)('button', 0, ['resultBtn', 'calcBtn'], 'btnEquals'));
// append:
(0, function_1.appendSiblings)((0, function_1.getElem)('numDiv'), resultBtns);
// equals sign for the text:
(0, function_1.getElem)('btnEquals').innerText = '=';
// create the display:
// create similar elems returns an arr, so we get the first elem, which is our div
let divDisplay = ((0, function_1.createSimilarElems)('div', 0, ['display'], 'divDisplay'))[0];
// append:
(0, function_1.appendSiblings)((0, function_1.getElem)('displayContainer'), divDisplay);
// init num and operator variables:
// when these vars are 'undefined', usually it means user has hit AC button, or
// for operator and num2, haven't entered anything yet
let num1 = undefined;
let num2 = undefined;
let operator = undefined;
// when clicking a number button:
function setNum(num) {
    if (operator === undefined) { // we have not set our first number yet, so we set it:
        if (num1 === undefined) { // setting the first digit
            num1 = num;
        }
        else if (checkBelowMaxLength(num1)) { // we are still typing in our first num
            num1 = (0, math_1.concatenate)(num1, num); // (concatenate input because that is how 'real' calculators work)
        } // if too long just stop letting add input, idk what normal calculators do?
        return num1;
    }
    // both the operator and all of num1 are defined if reach here:
    if (num2 == undefined) { // this is first/only dig of num2
        num2 = num;
    }
    else if (checkBelowMaxLength(num2)) { // we have already set first digit of num2
        num2 = (0, math_1.concatenate)(num2, num); // if too long, keep whatever 13 chars are (same logic)
    }
    return num2;
}
// want nums to be >= 13 chars to not overflow 'calculator screen'
function checkBelowMaxLength(num) {
    let numStr = num.toString();
    if (numStr.length <= 13) {
        return true;
    }
    return false; // num too long
}
// when clicking an operator (+, - etc) button
function setOperator(str) {
    // if num1 is undefined, we don't have anything to operate on, so do nothing
    if (num1 !== undefined) {
        operator = str;
        return operator;
    }
}
// event listeners to our 0-9 buttons:
numBtns.forEach((btn) => {
    // each btn has relevant 0-9 as data:
    let dataNum = parseInt(btn.dataset.num); // cast str data to num for param type
    btn.addEventListener('click', () => {
        let currentNum = setNum(dataNum); // concatenates if already nums
        display(currentNum);
    });
});
// event listeners to our operator (+,- etc) btns:
funcBtns.forEach((btn) => {
    let operator = btn.dataset.operator; // each operator has ex. 'multiply' as data
    btn.addEventListener('click', () => {
        setOperator(operator);
        display(operator);
    });
});
// event listener to equals btn, which uses current operator on num1 and 2:
(0, function_1.getElem)('btnEquals').addEventListener('click', () => {
    if (typeof num1 !== 'undefined' &&
        typeof num2 !== 'undefined' &&
        typeof operator !== 'undefined') {
        let result = (0, math_1.operate)(operator, num1, num2);
        display(result);
        // set variables for performing more operations:
        if (typeof result === 'number') { // result will be str if user div by 0
            num1 = result; // for operating on prev results
            operator = undefined;
            num2 = undefined;
        }
        else { // user div by 0
            clearData(); // all 3 vars are now undefined
        }
    }
});
// event listener to AC (all clear(?)) button:
(0, function_1.getElem)('btnClear').addEventListener('click', () => {
    clearAll();
});
// event listener to all buttons, which adds class ('pressed') that changes color
let calcBtns = Array.from((document.querySelectorAll('.calcBtn')));
calcBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // first remove all other pressed effects
        (0, function_1.removeClasses)(calcBtns, 'pressed');
        // then add it to current button
        btn.classList.add('pressed');
    });
});
// display the number received from setNum or setOperator in the display btn
// operators and error (div 0) are strings, while numbers are trimmed to <= 13 chars and typecast
function display(input) {
    if (typeof input === 'number') {
        input = trimNumberToStr(input);
    }
    (0, function_1.getElem)('divDisplay').innerText = input;
}
// keep numbers to 13 chars, return them as str for display
function trimNumberToStr(num) {
    let numStr = num.toString();
    if (!checkBelowMaxLength(num)) {
        numStr = numStr.substring(0, 14); // [0,14) range
    }
    return numStr;
}
function clearAll() {
    clearData();
    clearDisplay();
}
function clearData() {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
}
// set the 'display' to blank
function clearDisplay() {
    (0, function_1.getElem)('divDisplay').innerText = '';
}

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
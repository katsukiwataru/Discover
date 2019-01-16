/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_elementControler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/elementControler */ \"./src/js/modules/elementControler.js\");\n\n; (() => {\n  const wrapper = document.getElementById('wrapper')\n  const mainElements = {\n    htmlBox: document.getElementById('htmlBox'),\n    cssBox: document.getElementById('cssBox'),\n    jsBox: document.getElementById('jsBox'),\n  }\n\n  const languagesItems = {\n    htmlItems: [\"emmet\", \"pug\", \"BEM\", \"camelcase\", \"snakecase\", \"kebabcase\"],\n    cssItems: [\"mixin\", \"CSS Modules\", \"scss\", \"RWD\", \"grid layout\", \"import\"],\n    jsItems: [\"this\", \"コールバック関数\", \"class\", \"スコープ\", \"クロージャ\", \"Gulp\", \"Webpack\", \"npm\",]\n  }\n\n  let didCreateHtmlItem = true\n  let didCreateCssItem = true\n  let didCreateJsItem = true\n  let existsHtmlItem = false\n  let existsCssItem = false\n  let existsJsItem = false\n  let createdhtmlItem = []\n  let createdcssItem = []\n  let createdjsItem = []\n\n\n  const htmlControler = new _modules_elementControler__WEBPACK_IMPORTED_MODULE_0__[\"default\"](languagesItems.htmlItems, createdhtmlItem, \"htmlItem\", )\n\n  const cssControler = new _modules_elementControler__WEBPACK_IMPORTED_MODULE_0__[\"default\"](languagesItems.cssItems, createdcssItem, \"cssItem\", )\n\n  const jsControler = new _modules_elementControler__WEBPACK_IMPORTED_MODULE_0__[\"default\"](languagesItems.jsItems, createdjsItem, \"jsItem\")\n\n\n  const techSearch = (createdItems, languagesList) => {\n    for (let item = 0; item < languagesList.length; item++) {\n      createdItems[item].addEventListener('click', () => {\n        const searchURL = 'https://www.google.com/search?q=';\n        window.open(searchURL + languagesList[item])\n      })\n    }\n  }\n\n\n  const animateTranslate = (target, time, length, index, offset) => {\n    const angle = 360 / length\n    const degree = angle * index + Math.floor(Math.random() * 10) + offset\n    const hypotenuse = 100 + (200 - 100)\n    const start = {\n      X: -50,\n      Y: -50,\n    }\n    const end = {\n      X: Math.floor(Math.cos(degree * (Math.PI / 180)) * hypotenuse),\n      Y: Math.floor(Math.sin(degree * (Math.PI / 180)) * hypotenuse),\n    }\n    const startTime = Date.now()\n    const update = () => {\n      const now = Date.now()\n      const timeDiff = (now - startTime)\n      const progress = timeDiff / time\n      if (progress < 0 || progress > 1) {\n        return\n      }\n      const resultX = Math.floor((start.X + end.X - start.X) * progress)\n      const resultY = Math.floor((start.Y + end.Y - start.Y) * progress)\n      target.style.transform = `translate( ${resultX - 50}%, ${resultY - 50}% )`\n      requestAnimationFrame(update)\n    }\n    update()\n  }\n\n  const chnageTranslate = (target, time, length, index, offset) => {\n    const angle = 240 / length\n    const degree = angle * index + Math.floor(Math.random() * 4) + offset\n    const hypotenuse = 100 + (200 - 100)\n    const start = {\n      X: -50,\n      Y: -50,\n    }\n    const end = {\n      X: Math.floor(Math.cos(degree * (Math.PI / 180)) * hypotenuse),\n      Y: Math.floor(Math.sin(degree * (Math.PI / 180)) * hypotenuse),\n    }\n    const startTime = Date.now()\n    const update = () => {\n      const now = Date.now()\n      const timeDiff = (now - startTime)\n      const progress = timeDiff / time\n      if (progress < 0 || progress > 1) {\n        return\n      }\n      const resultX = Math.floor((start.X + end.X - start.X) * progress)\n      const resultY = Math.floor((start.Y + end.Y - start.Y) * progress)\n      target.style.transform = `translate( ${resultX - 50}%, ${resultY - 50}% )`\n      requestAnimationFrame(update)\n    }\n    update()\n  }\n\n  mainElements.htmlBox.addEventListener('click', (element) => {\n    if (didCreateHtmlItem) {\n      htmlControler.createElements()\n      htmlControler.appendElements()\n      techSearch(createdhtmlItem, languagesItems.htmlItems)\n      const offset = Math.random() * 360\n      for (let itemIndex = 0; itemIndex < languagesItems.htmlItems.length; itemIndex++) {\n        createdhtmlItem[itemIndex].style.left = Math.floor((element.pageX / window.innerWidth) * 100) + \"%\"\n        createdhtmlItem[itemIndex].style.top = Math.floor((element.pageY / window.innerHeight) * 100) + \"%\"\n        animateTranslate(createdhtmlItem[itemIndex], 1000, languagesItems.htmlItems.length, itemIndex, offset)\n      }\n      existsHtmlItem = true\n      if (existsCssItem === true || existsJsItem === true) {\n        const offset = Math.random() + 160\n        for (let itemIndex = 0; itemIndex < languagesItems.htmlItems.length; itemIndex++) {\n          createdhtmlItem[itemIndex].style.left = Math.floor((element.pageX / window.innerWidth) * 100) + \"%\"\n          createdhtmlItem[itemIndex].style.top = Math.floor((element.pageY / window.innerHeight) * 100) + \"%\"\n          chnageTranslate(createdhtmlItem[itemIndex], 1000, languagesItems.htmlItems.length, itemIndex, offset)\n        }\n      }\n    }\n    didCreateHtmlItem = false\n  })\n\n  mainElements.cssBox.addEventListener('click', (element) => {\n    if (didCreateCssItem) {\n      cssControler.createElements()\n      cssControler.appendElements()\n      techSearch(createdcssItem, languagesItems.cssItems)\n      const offset = Math.random() * 360\n      for (let itemIndex = 0; itemIndex < languagesItems.cssItems.length; itemIndex++) {\n        createdcssItem[itemIndex].style.left = Math.floor((element.pageX / window.innerWidth) * 100) + \"%\"\n        createdcssItem[itemIndex].style.top = Math.floor((element.pageY / window.innerHeight) * 100) + \"%\"\n        animateTranslate(createdcssItem[itemIndex], 1000, languagesItems.cssItems.length, itemIndex, offset)\n      }\n      existsCssItem = true\n      if (existsHtmlItem === true || existsJsItem === true) {\n        // const offset = Math.random() + 30\n        const offset = Math.random() + 50\n        for (let itemIndex = 0; itemIndex < languagesItems.cssItems.length; itemIndex++) {\n          createdcssItem[itemIndex].style.left = Math.floor((element.pageX / window.innerWidth) * 100) + \"%\"\n          createdcssItem[itemIndex].style.top = Math.floor((element.pageY / window.innerHeight) * 100) + \"%\"\n          chnageTranslate(createdcssItem[itemIndex], 1000, languagesItems.cssItems.length, itemIndex, offset)\n        }\n      }\n    }\n    didCreateCssItem = false\n  })\n\n  mainElements.jsBox.addEventListener('click', (element) => {\n    if (didCreateJsItem) {\n      jsControler.createElements()\n      jsControler.appendElements()\n      techSearch(createdjsItem, languagesItems.jsItems)\n      const offset = Math.random() * 360\n      for (let itemIndex = 0; itemIndex < languagesItems.jsItems.length; itemIndex++) {\n        createdjsItem[itemIndex].style.left = Math.floor((element.pageX / window.innerWidth) * 100) + \"%\"\n        createdjsItem[itemIndex].style.top = Math.floor((element.pageY / window.innerHeight) * 100) + \"%\"\n        animateTranslate(createdjsItem[itemIndex], 1000, languagesItems.jsItems.length, itemIndex, offset)\n      }\n      existsJsItem = true\n      if (existsHtmlItem === true || existsCssItem === true) {\n        // const offset = Math.random() + -80\n        const offset = Math.random() - 80\n        for (let itemIndex = 0; itemIndex < languagesItems.jsItems.length; itemIndex++) {\n          // const offset = Math.random() + 330\n          createdjsItem[itemIndex].style.left = Math.floor((element.pageX / window.innerWidth) * 100) + \"%\"\n          createdjsItem[itemIndex].style.top = Math.floor((element.pageY / window.innerHeight) * 100) + \"%\"\n          chnageTranslate(createdjsItem[itemIndex], 1000, languagesItems.jsItems.length, itemIndex, offset)\n        }\n      }\n    }\n    didCreateJsItem = false\n  })\n\n})()\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/elementControler.js":
/*!********************************************!*\
  !*** ./src/js/modules/elementControler.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return elementControler; });\nclass elementControler {\n  constructor(languageItems, createdItems, languageTypeItem, ) {\n    this.languageItems = languageItems\n    this.createdItems = createdItems\n    this.languageTypeItem = languageTypeItem\n  }\n  createElements() {\n    for (let index = 0; index < this.languageItems.length; index++) {\n      const createdDiv = document.createElement('div')\n      const createdParagraph = document.createElement('p')\n      createdDiv.className = \"box \" + this.languageTypeItem\n      createdParagraph.className = \"boxText\"\n      createdParagraph.innerHTML = this.languageItems[index]\n      createdDiv.appendChild(createdParagraph)\n      this.createdItems.push(createdDiv)\n    }\n  }\n  appendElements() {\n    this.createdItems.slice().forEach(element => {\n      wrapper.appendChild(element)\n    })\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/elementControler.js?");

/***/ })

/******/ });
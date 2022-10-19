/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://website1/./src/scss/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\r\n\r\nconst swiper = new Swiper('.swiper', {\r\n\tloop: true,\r\n\tnavigation: {\r\n\t\tnextEl: '.swiper-button-next',\r\n\t\tprevEl: '.swiper-button-prev',\r\n\t},\r\n\t\r\n\tpagination: {\r\n\t\tel: '.swiper-pagination',\r\n\t\tclickable: true,\r\n\t\ttype: 'bullets',\r\n\t\tslideToClickedSlide: true,\r\n\t},\r\n\t\r\n\tkeyboard: {\r\n\t\tenabled: true,\r\n\t\tonlyInViewport: true,\r\n\t\tpageUpDown: true,\r\n\t},\r\n\t\r\n\tmousewheel: {\r\n\t\tsensitivity: 1,\r\n\t\teventsTarget: \".swiper-slide\",\r\n\t},\r\n\t\r\n\tslidesPerView: 3.2,\r\n\tslidesPerGroup: 1,\r\n\tinitialSlide: 1,\r\n\tspaceBetween: 30,\r\n\tcenteredSlides: true,\r\n\tfreeMode: true,\r\n\t\r\n\tbreakpoints: {\r\n\t\t20: {slidesPerView: 1,},\r\n\t\t480: {slidesPerView: 2,},\r\n\t\t1000: {slidesPerView: 3,},\r\n\t\t1290: {slidesPerView: 3.2,}\r\n\t},\r\n\t\r\n\tpreloadImages: false,\r\n\t\r\n\tlazy: {\r\n\t\tloadOnTransitionStart: false,\r\n\t\tloadPrevNext: true,\r\n\t},\r\n\t\r\n\twatchSlidesProgress: true,\r\n\twatchSlidesVisibility: true,\r\n})\r\n\r\n\r\n// Modal window\r\nconst modal = document.querySelector(\".modal\");\r\nconst modalOverlay = document.querySelector(\".modal__overlay\");\r\nconst triggers = document.querySelectorAll(\".trigger-modal\");\r\nconst closeButton = document.querySelector(\".modal__close-button\");\r\n\r\nfunction toggleModal() {\r\n\tmodal.classList.toggle(\"show-modal\");\r\n\tdocument.body.classList.toggle(\"lock\");\r\n}\r\n\r\nfunction windowOnClick(event) {\r\n\tif (event.target === modalOverlay) {\r\n\t\ttoggleModal();\r\n\t}\r\n}\r\n\r\ntriggers.forEach((trigger) => {\r\n\ttrigger.addEventListener(\"click\", toggleModal);\r\n})\r\ncloseButton.addEventListener(\"click\", toggleModal);\r\nwindow.addEventListener(\"click\", windowOnClick);\r\n\r\n\r\n// Smooth Scrolling - плавная прокрутка\r\n\r\nconst menuLinks = document.querySelectorAll('.header-menu__link[data-goto]');\r\nif (menuLinks.length > 0) {\r\n\tmenuLinks.forEach(menuLink => {\r\n\t\tmenuLink.addEventListener(\"click\", onMenuLinkClick);\r\n\t});\r\n\t\r\n\tfunction onMenuLinkClick(event) {\r\n\t\tconst menuLink = event.target\r\n\t\tconst gotoBlock = document.querySelector(menuLink.dataset.goto);\r\n\t\t\r\n\t\t\r\n\t\tif (menuLink.dataset.goto && gotoBlock) {\r\n\t\t\tevent.preventDefault();\r\n\t\t\t\r\n\t\t\tconst gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;\r\n\t\t\t\r\n\t\t\tif (iconMenu.classList.contains('active')) {\r\n\t\t\t\tdocument.body.classList.remove(\"lock\");\r\n\t\t\t\ticonMenu.classList.remove(\"active\");\r\n\t\t\t\tmenuBody.classList.remove(\"active\");\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\twindow.scrollTo({\r\n\t\t\t\ttop: gotoBlockValue,\r\n\t\t\t\tbehavior: \"smooth\"\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Menu burger\r\n\r\nconst iconMenu = document.querySelector('.header-nav__menu-icon');\r\nconst menuBody = document.querySelector('.header-nav__body');\r\niconMenu?.addEventListener(\"click\", () => {\r\n\ticonMenu.classList.toggle(\"active\");\r\n\tmenuBody.classList.toggle(\"active\");\r\n})\r\n\n\n//# sourceURL=webpack://website1/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
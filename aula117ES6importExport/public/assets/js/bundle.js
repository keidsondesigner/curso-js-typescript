/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pessoa),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "sobrenome": () => (/* binding */ sobrenome),
/* harmony export */   "idade": () => (/* binding */ idade),
/* harmony export */   "soma": () => (/* binding */ soma),
/* harmony export */   "Carro": () => (/* binding */ Carro)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = "Luiz";
var sobrenome = "Miranda";
var idade = 30;

function soma(x, y) {
  return x + y;
}

var Carro = /*#__PURE__*/_createClass(function Carro(carro, marca) {
  _classCallCheck(this, Carro);

  this.carro = carro;
  this.marca = marca;
});

var Pessoa = /*#__PURE__*/_createClass(function Pessoa(sexo, cor) {
  _classCallCheck(this, Pessoa);

  this.sexo = sexo;
  this.cor = cor;
});


 //renomeado export com mesmo nome de variaveis
// export { name as name2, sobrenome as sobrenome2, idade as idade2, soma as soma2 };
// no deve ficar assim import { name2, sobrenome2, idade2, soma2 }

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
// import { name, sobrenome, idade, soma } from "./modulo1";
//renomeado import com mesmo nome de variaveis
 // Pessoa é um export default, não precisa de chaves
//para ser importado
// import tudo do modulo1 e ronomeando com as
// import * as meuModulo1 from "./modulo1";

var name = "keidson";
var carro1 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__.Carro("Fusca", "fiat");
var p1 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__["default"]("masculino", "Parda");
console.log(carro1);
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__.idade);
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__.name);
console.log(name);
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__.sobrenome);
console.log((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.soma)(4, 16));
console.log(p1);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
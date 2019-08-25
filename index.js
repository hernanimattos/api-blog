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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/schemas */ "./src/utils/schemas.js");
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    type User {\n      firstName: String!\n      email: String!\n      role: Int!\n    }\n\n\t\ttype Query {\n\t\t\tuser: User\n    }\n    schema {\n      query: Query\n    }\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/* eslint-disable no-tabs */




Object(_utils_schemas__WEBPACK_IMPORTED_MODULE_1__["default"])().then(function (res) {
  console.log(res);
});
console.log(_utils_schemas__WEBPACK_IMPORTED_MODULE_1__["default"], 'schemas');
var port = 3000;

var Api =
/*#__PURE__*/
function () {
  function Api() {
    _classCallCheck(this, Api);

    this.main();
  }

  _createClass(Api, [{
    key: "main",
    value: function main() {
      // const app = express();
      var rootSchema = Object(apollo_server__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject()); // Provide resolver functions for your schema fields

      var resolvers = {
        Query: {
          user: function user() {
            return {
              name: 'nois'
            };
          }
        }
      };
      var server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
        typeDefs: [rootSchema],
        resolvers: resolvers,
        query: _objectSpread({}, resolvers.Query)
      });
      server.listen(port).then(function (_ref) {
        var url = _ref.url;
        console.log("\uD83D\uDE80 ta rodando na ".concat(url));
      });
    }
  }]);

  return Api;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Api());

/***/ }),

/***/ "./src/utils/schemas.js":
/*!******************************!*\
  !*** ./src/utils/schemas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);



var allschemas = function allschemas(type) {
  return new Promise(function (resolve, reject) {
    var pathFile = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), "src/types/");
    fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdir(pathFile, function (err, folder) {
      var folderValid = folder.filter(function (f) {
        return f.indexOf('.');
      });
      console.log(folderValid);
    }); // fs.readFile(pathFile, { encoding: 'utf-8' }, (err, schema) => {
    //   if (err) {
    //     reject(err);
    //   }
    //   resolve(schema);
    // });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (allschemas);

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2NoZW1hcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOlsic2NoZW1hcyIsImNvbnNvbGUiLCJwb3J0IiwiQXBpIiwicm9vdFNjaGVtYSIsImdxbCIsInJlc29sdmVycyIsIlF1ZXJ5IiwidXNlciIsIm5hbWUiLCJzZXJ2ZXIiLCJ0eXBlRGVmcyIsInF1ZXJ5IiwidXJsIiwiYWxsc2NoZW1hcyIsInBhdGhGaWxlIiwicGF0aCIsInByb2Nlc3MiLCJmcyIsImZvbGRlclZhbGlkIiwiZiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7O0FBQ0E7QUFLQTtBQUVBQSw4REFBTyxHQUFQQSxLQUFlLGVBQVM7QUFFdEJDLFNBQU8sQ0FBUEE7QUFGRkQ7QUFNQUMsT0FBTyxDQUFQQTtBQUVBLElBQU1DLElBQUksR0FBVjs7SUFDTUMsRzs7O0FBQ0osaUJBQWM7QUFBQTs7QUFDWjtBQUNEOzs7OzJCQUVNO0FBQ0w7QUFDQSxVQUFNQyxVQUFVLEdBQUdDLHlEQUFILGdCQUZYLEVBRVcsQ0FBaEIsQ0FGSyxDQWlCTDs7QUFDQSxVQUFNQyxTQUFTLEdBQUc7QUFDaEJDLGFBQUssRUFBRTtBQUNMQyxjQUFJLEVBQUU7QUFBQSxtQkFBTztBQUFFQyxrQkFBSSxFQUFFO0FBQVIsYUFBUDtBQUFBO0FBREQ7QUFEUyxPQUFsQjtBQUtBLFVBQU1DLE1BQU0sR0FBRywrREFBaUI7QUFDOUJDLGdCQUFRLEVBQUUsQ0FEb0IsVUFDcEIsQ0FEb0I7QUFFOUJMLGlCQUFTLEVBRnFCO0FBRzlCTSxhQUFLLG9CQUFPTixTQUFTLENBQWhCO0FBSHlCLE9BQWpCLENBQWY7QUFPQUksWUFBTSxDQUFOQSxrQkFBeUIsZ0JBQWE7QUFBQSxZQUFWRyxHQUFVLFFBQVZBLEdBQVU7QUFDcENaLGVBQU8sQ0FBUEE7QUFERlM7QUFHRDs7Ozs7O0FBR1ksbUVBQWYsR0FBZSxFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFHQSxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFJO0FBQUEsU0FBSSxZQUFZLDJCQUFxQjtBQUMxRCxRQUFNQyxRQUFRLEdBQUdDLDJDQUFJLENBQUpBLEtBQ2ZDLE9BQU8sQ0FEUUQsR0FDZkMsRUFEZUQsRUFBakIsWUFBaUJBLENBQWpCO0FBSUFFLDZDQUFFLENBQUZBLGtCQUFxQix1QkFBaUI7QUFFcEMsVUFBTUMsV0FBVyxHQUFHLE1BQU0sQ0FBTixPQUFjO0FBQUEsZUFBTUMsQ0FBQyxDQUFEQSxRQUFOLEdBQU1BLENBQU47QUFBbEMsT0FBb0IsQ0FBcEI7QUFFQW5CLGFBQU8sQ0FBUEE7QUFUd0QsS0FLMURpQixFQUwwRCxDQWExRDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFuQnFCLEdBQUksQ0FBSjtBQUF2Qjs7QUFzQkEsMkU7Ozs7Ozs7Ozs7O0FDMUJBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdGFicyAqL1xuaW1wb3J0IHtcbiAgQXBvbGxvU2VydmVyLFxuICBncWwsXG59IGZyb20gJ2Fwb2xsby1zZXJ2ZXInO1xuXG5pbXBvcnQgc2NoZW1hcyBmcm9tICcuL3V0aWxzL3NjaGVtYXMnO1xuXG5zY2hlbWFzKCkudGhlbigocmVzKSA9PiB7XG5cbiAgY29uc29sZS5sb2cocmVzKVxuXG59KVxuXG5jb25zb2xlLmxvZyhzY2hlbWFzLCAnc2NoZW1hcycpO1xuXG5jb25zdCBwb3J0ID0gMzAwMDtcbmNsYXNzIEFwaSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbigpO1xuICB9XG5cbiAgbWFpbigpIHtcbiAgICAvLyBjb25zdCBhcHAgPSBleHByZXNzKCk7XG4gICAgY29uc3Qgcm9vdFNjaGVtYSA9IGdxbGBcbiAgICB0eXBlIFVzZXIge1xuICAgICAgZmlyc3ROYW1lOiBTdHJpbmchXG4gICAgICBlbWFpbDogU3RyaW5nIVxuICAgICAgcm9sZTogSW50IVxuICAgIH1cblxuXHRcdHR5cGUgUXVlcnkge1xuXHRcdFx0dXNlcjogVXNlclxuICAgIH1cbiAgICBzY2hlbWEge1xuICAgICAgcXVlcnk6IFF1ZXJ5XG4gICAgfVxuXHRcdGA7XG5cbiAgICAvLyBQcm92aWRlIHJlc29sdmVyIGZ1bmN0aW9ucyBmb3IgeW91ciBzY2hlbWEgZmllbGRzXG4gICAgY29uc3QgcmVzb2x2ZXJzID0ge1xuICAgICAgUXVlcnk6IHtcbiAgICAgICAgdXNlcjogKCkgPT4gKHsgbmFtZTogJ25vaXMnIH0pLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAgICAgdHlwZURlZnM6IFtyb290U2NoZW1hXSxcbiAgICAgIHJlc29sdmVycyxcbiAgICAgIHF1ZXJ5OiB7IC4uLnJlc29sdmVycy5RdWVyeSB9LFxuICAgIH0pO1xuXG5cbiAgICBzZXJ2ZXIubGlzdGVuKHBvcnQpLnRoZW4oKHsgdXJsIH0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGDwn5qAIHRhIHJvZGFuZG8gbmEgJHt1cmx9YCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwaSgpO1xuIiwiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5cbmNvbnN0IGFsbHNjaGVtYXMgPSB0eXBlID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgY29uc3QgcGF0aEZpbGUgPSBwYXRoLmpvaW4oXG4gICAgcHJvY2Vzcy5jd2QoKSxcbiAgICBgc3JjL3R5cGVzL2AsXG4gICk7XG4gIGZzLnJlYWRkaXIocGF0aEZpbGUsIChlcnIsIGZvbGRlcikgPT4ge1xuXG4gICAgY29uc3QgZm9sZGVyVmFsaWQgPSBmb2xkZXIuZmlsdGVyKChmKT0+IGYuaW5kZXhPZignLicpKTtcblxuICAgIGNvbnNvbGUubG9nKGZvbGRlclZhbGlkKVxuXG4gIH0pXG5cbiAgLy8gZnMucmVhZEZpbGUocGF0aEZpbGUsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSwgKGVyciwgc2NoZW1hKSA9PiB7XG4gIC8vICAgaWYgKGVycikge1xuICAvLyAgICAgcmVqZWN0KGVycik7XG4gIC8vICAgfVxuXG4gIC8vICAgcmVzb2x2ZShzY2hlbWEpO1xuICAvLyB9KTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhbGxzY2hlbWFzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
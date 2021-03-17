(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static-pages-shared-static-pages"], {
    /***/
    "DEKV":
    /*!***********************************************************************!*\
      !*** ./node_modules/@scullyio/ng-lib/node_modules/tslib/tslib.es6.js ***!
      \***********************************************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

    /***/
    function DEKV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
        return __createBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArray", function () {
        return __spreadArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      var __createBinding = Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      };

      function __exportStar(m, o) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
        }
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }
      /** @deprecated */


      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }
      /** @deprecated */


      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
          to[j] = from[i];
        }

        return to;
      }

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      var __setModuleDefault = Object.create ? function (o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function (o, v) {
        o["default"] = v;
      };

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }

        __setModuleDefault(result, mod);

        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    },

    /***/
    "ElqU":
    /*!***********************************************!*\
      !*** ./libs/shared/static-pages/src/index.ts ***!
      \***********************************************/

    /*! exports provided: StaticPagesModule */

    /***/
    function ElqU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_static_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/static-pages.module */
      "uJg1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StaticPagesModule", function () {
        return _lib_static_pages_module__WEBPACK_IMPORTED_MODULE_0__["StaticPagesModule"];
      });
      /***/

    },

    /***/
    "FKr1":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js ***!
      \**********************************************************************/

    /*! exports provided: AnimationCurves, AnimationDurations, DateAdapter, ErrorStateMatcher, MATERIAL_SANITY_CHECKS, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY, MAT_NATIVE_DATE_FORMATS, MAT_OPTGROUP, MAT_OPTION_PARENT_COMPONENT, MAT_RIPPLE_GLOBAL_OPTIONS, MatCommonModule, MatLine, MatLineModule, MatNativeDateModule, MatOptgroup, MatOption, MatOptionModule, MatOptionSelectionChange, MatPseudoCheckbox, MatPseudoCheckboxModule, MatRipple, MatRippleModule, NativeDateAdapter, NativeDateModule, RippleRef, RippleRenderer, ShowOnDirtyErrorStateMatcher, VERSION, _MatOptgroupBase, _MatOptionBase, _countGroupLabelsBeforeOption, _getOptionScrollPosition, defaultRippleAnimationConfig, mixinColor, mixinDisableRipple, mixinDisabled, mixinErrorState, mixinInitialized, mixinTabIndex, setLines, ɵ0, ɵangular_material_src_material_core_core_a */

    /***/
    function FKr1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationCurves", function () {
        return AnimationCurves;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationDurations", function () {
        return AnimationDurations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
        return DateAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function () {
        return ErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function () {
        return MATERIAL_SANITY_CHECKS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function () {
        return MAT_DATE_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function () {
        return MAT_DATE_LOCALE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function () {
        return MAT_DATE_LOCALE_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function () {
        return MAT_NATIVE_DATE_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_OPTGROUP", function () {
        return MAT_OPTGROUP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function () {
        return MAT_OPTION_PARENT_COMPONENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function () {
        return MAT_RIPPLE_GLOBAL_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCommonModule", function () {
        return MatCommonModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLine", function () {
        return MatLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLineModule", function () {
        return MatLineModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function () {
        return MatNativeDateModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptgroup", function () {
        return MatOptgroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOption", function () {
        return MatOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptionModule", function () {
        return MatOptionModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function () {
        return MatOptionSelectionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function () {
        return MatPseudoCheckbox;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function () {
        return MatPseudoCheckboxModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRipple", function () {
        return MatRipple;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatRippleModule", function () {
        return MatRippleModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function () {
        return NativeDateAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NativeDateModule", function () {
        return NativeDateModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RippleRef", function () {
        return RippleRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RippleRenderer", function () {
        return RippleRenderer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function () {
        return ShowOnDirtyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatOptgroupBase", function () {
        return _MatOptgroupBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatOptionBase", function () {
        return _MatOptionBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function () {
        return _countGroupLabelsBeforeOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function () {
        return _getOptionScrollPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function () {
        return defaultRippleAnimationConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinColor", function () {
        return mixinColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function () {
        return mixinDisableRipple;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinDisabled", function () {
        return mixinDisabled;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinErrorState", function () {
        return mixinErrorState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinInitialized", function () {
        return mixinInitialized;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function () {
        return mixinTabIndex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setLines", function () {
        return setLines;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_core_core_a", function () {
        return MATERIAL_SANITY_CHECKS_FACTORY;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk */
      "xz+E");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Current version of Angular Material. */


      var _c0 = ["*", [["mat-option"], ["ng-container"]]];
      var _c1 = ["*", "mat-option, ng-container"];

      function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 4);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
        }
      }

      function MatOption_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r1.group.label, ")");
        }
      }

      var _c2 = ["*"];
      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.2.5');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */

      var AnimationCurves = function AnimationCurves() {
        _classCallCheck(this, AnimationCurves);
      };

      AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
      AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
      AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
      AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
      /** @docs-private */

      var AnimationDurations = function AnimationDurations() {
        _classCallCheck(this, AnimationDurations);
      };

      AnimationDurations.COMPLEX = '375ms';
      AnimationDurations.ENTERING = '225ms';
      AnimationDurations.EXITING = '195ms';
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Private version constant to circumvent test/build issues,
      // i.e. avoid core to depend on the @angular/material primary entry-point
      // Can be removed once the Material primary entry-point no longer
      // re-exports all secondary entry-points

      var VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.2.5');
      /** @docs-private */

      function MATERIAL_SANITY_CHECKS_FACTORY() {
        return true;
      }
      /** Injection token that configures whether the Material sanity checks are enabled. */


      var MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
        providedIn: 'root',
        factory: MATERIAL_SANITY_CHECKS_FACTORY
      });
      /**
       * Module that captures anything that should be loaded and/or run for *all* Angular Material
       * components. This includes Bidi, etc.
       *
       * This module should be imported to each top-level component module (e.g., MatTabsModule).
       */

      var MatCommonModule = /*#__PURE__*/function () {
        function MatCommonModule(highContrastModeDetector, sanityChecks, document) {
          _classCallCheck(this, MatCommonModule);

          /** Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype). */
          this._hasDoneGlobalChecks = false;
          this._document = document; // While A11yModule also does this, we repeat it here to avoid importing A11yModule
          // in MatCommonModule.

          highContrastModeDetector._applyBodyHighContrastModeCssClasses(); // Note that `_sanityChecks` is typed to `any`, because AoT
          // throws an error if we use the `SanityChecks` type directly.


          this._sanityChecks = sanityChecks;

          if (!this._hasDoneGlobalChecks) {
            this._checkDoctypeIsDefined();

            this._checkThemeIsPresent();

            this._checkCdkVersionMatch();

            this._hasDoneGlobalChecks = true;
          }
        }
        /** Use defaultView of injected document if available or fallback to global window reference */


        _createClass(MatCommonModule, [{
          key: "_getWindow",
          value: function _getWindow() {
            var win = this._document.defaultView || window;
            return typeof win === 'object' && win ? win : null;
          }
          /** Whether any sanity checks are enabled. */

        }, {
          key: "_checksAreEnabled",
          value: function _checksAreEnabled() {
            // TODO(crisbeto): we can't use `ngDevMode` here yet, because ViewEngine apps might not support
            // it. Since these checks can have performance implications and they aren't tree shakeable
            // in their current form, we can leave the `isDevMode` check in for now.
            // tslint:disable-next-line:ban
            return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
          }
          /** Whether the code is running in tests. */

        }, {
          key: "_isTestEnv",
          value: function _isTestEnv() {
            var window = this._getWindow();

            return window && (window.__karma__ || window.jasmine);
          }
        }, {
          key: "_checkDoctypeIsDefined",
          value: function _checkDoctypeIsDefined() {
            var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true || this._sanityChecks.doctype);

            if (isEnabled && !this._document.doctype) {
              console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
            }
          }
        }, {
          key: "_checkThemeIsPresent",
          value: function _checkThemeIsPresent() {
            // We need to assert that the `body` is defined, because these checks run very early
            // and the `body` won't be defined if the consumer put their scripts in the `head`.
            var isDisabled = !this._checksAreEnabled() || this._sanityChecks === false || !this._sanityChecks.theme;

            if (isDisabled || !this._document.body || typeof getComputedStyle !== 'function') {
              return;
            }

            var testElement = this._document.createElement('div');

            testElement.classList.add('mat-theme-loaded-marker');

            this._document.body.appendChild(testElement);

            var computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
            // Firefox, the computed style is null if an application is running inside of a hidden iframe.
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

            if (computedStyle && computedStyle.display !== 'none') {
              console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
            }

            this._document.body.removeChild(testElement);
          }
          /** Checks whether the material version matches the cdk version */

        }, {
          key: "_checkCdkVersionMatch",
          value: function _checkCdkVersionMatch() {
            var isEnabled = this._checksAreEnabled() && (this._sanityChecks === true || this._sanityChecks.version);

            if (isEnabled && VERSION$1.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
              console.warn('The Angular Material version (' + VERSION$1.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
            }
          }
        }]);

        return MatCommonModule;
      }();

      MatCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatCommonModule
      });
      MatCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatCommonModule_Factory(t) {
          return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
      });

      MatCommonModule.ctorParameters = function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MATERIAL_SANITY_CHECKS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCommonModule, {
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCommonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
            exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
          }]
        }], function () {
          return [{
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MATERIAL_SANITY_CHECKS]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with a `disabled` property. */


      function mixinDisabled(base) {
        return /*#__PURE__*/function (_base) {
          _inherits(_class, _base);

          var _super = _createSuper(_class);

          function _class() {
            var _this;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            _this._disabled = false;
            return _this;
          }

          _createClass(_class, [{
            key: "disabled",
            get: function get() {
              return this._disabled;
            },
            set: function set(value) {
              this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
            }
          }]);

          return _class;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with a `color` property. */


      function mixinColor(base, defaultColor) {
        return /*#__PURE__*/function (_base2) {
          _inherits(_class2, _base2);

          var _super2 = _createSuper(_class2);

          function _class2() {
            var _this2;

            _classCallCheck(this, _class2);

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            _this2 = _super2.call.apply(_super2, [this].concat(args));
            _this2.defaultColor = defaultColor; // Set the default color that can be specified from the mixin.

            _this2.color = defaultColor;
            return _this2;
          }

          _createClass(_class2, [{
            key: "color",
            get: function get() {
              return this._color;
            },
            set: function set(value) {
              var colorPalette = value || this.defaultColor;

              if (colorPalette !== this._color) {
                if (this._color) {
                  this._elementRef.nativeElement.classList.remove("mat-".concat(this._color));
                }

                if (colorPalette) {
                  this._elementRef.nativeElement.classList.add("mat-".concat(colorPalette));
                }

                this._color = colorPalette;
              }
            }
          }]);

          return _class2;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with a `disableRipple` property. */


      function mixinDisableRipple(base) {
        var Mixin = /*#__PURE__*/function (_base3) {
          _inherits(Mixin, _base3);

          var _super3 = _createSuper(Mixin);

          function Mixin() {
            var _this3;

            _classCallCheck(this, Mixin);

            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            _this3 = _super3.call.apply(_super3, [this].concat(args));
            _this3._disableRipple = false;
            return _this3;
          }
          /** Whether the ripple effect is disabled or not. */


          _createClass(Mixin, [{
            key: "disableRipple",
            get: function get() {
              return this._disableRipple;
            },
            set: function set(value) {
              this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
            }
          }]);

          return Mixin;
        }(base); // Since we don't directly extend from `base` with it's original types, and we instruct
        // TypeScript that `T` actually is instantiatable through `new`, the types don't overlap.
        // This is a limitation in TS as abstract classes cannot be typed properly dynamically.


        return Mixin;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with a `tabIndex` property. */


      function mixinTabIndex(base) {
        var defaultTabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        // Note: We cast `base` to `unknown` and then `Constructor`. It could be an abstract class,
        // but given we `extend` it from another class, we can assume a constructor being accessible.
        var Mixin = /*#__PURE__*/function (_base4) {
          _inherits(Mixin, _base4);

          var _super4 = _createSuper(Mixin);

          function Mixin() {
            var _this4;

            _classCallCheck(this, Mixin);

            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            _this4 = _super4.call.apply(_super4, [this].concat(args));
            _this4._tabIndex = defaultTabIndex;
            _this4.defaultTabIndex = defaultTabIndex;
            return _this4;
          }

          _createClass(Mixin, [{
            key: "tabIndex",
            get: function get() {
              return this.disabled ? -1 : this._tabIndex;
            },
            set: function set(value) {
              // If the specified tabIndex value is null or undefined, fall back to the default value.
              this._tabIndex = value != null ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value) : this.defaultTabIndex;
            }
          }]);

          return Mixin;
        }(base); // Since we don't directly extend from `base` with it's original types, and we instruct
        // TypeScript that `T` actually is instantiatable through `new`, the types don't overlap.
        // This is a limitation in TS as abstract classes cannot be typed properly dynamically.


        return Mixin;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Mixin to augment a directive with updateErrorState method.
       * For component with `errorState` and need to update `errorState`.
       */


      function mixinErrorState(base) {
        return /*#__PURE__*/function (_base5) {
          _inherits(_class3, _base5);

          var _super5 = _createSuper(_class3);

          function _class3() {
            var _this5;

            _classCallCheck(this, _class3);

            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            _this5 = _super5.call.apply(_super5, [this].concat(args));
            /** Whether the component is in an error state. */

            _this5.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */

            _this5.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            return _this5;
          }

          _createClass(_class3, [{
            key: "updateErrorState",
            value: function updateErrorState() {
              var oldState = this.errorState;
              var parent = this._parentFormGroup || this._parentForm;
              var matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
              var control = this.ngControl ? this.ngControl.control : null;
              var newState = matcher.isErrorState(control, parent);

              if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
              }
            }
          }]);

          return _class3;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Mixin to augment a directive with an initialized property that will emits when ngOnInit ends. */


      function mixinInitialized(base) {
        return /*#__PURE__*/function (_base6) {
          _inherits(_class4, _base6);

          var _super6 = _createSuper(_class4);

          function _class4() {
            var _this6;

            _classCallCheck(this, _class4);

            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }

            _this6 = _super6.call.apply(_super6, [this].concat(args));
            /** Whether this directive has been marked as initialized. */

            _this6._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */

            _this6._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */

            _this6.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (subscriber) {
              // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
              // when _markInitialized is called.
              if (_this6._isInitialized) {
                _this6._notifySubscriber(subscriber);
              } else {
                _this6._pendingSubscribers.push(subscriber);
              }
            });
            return _this6;
          }
          /**
           * Marks the state as initialized and notifies pending subscribers. Should be called at the end
           * of ngOnInit.
           * @docs-private
           */


          _createClass(_class4, [{
            key: "_markInitialized",
            value: function _markInitialized() {
              if (this._isInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
              }

              this._isInitialized = true;

              this._pendingSubscribers.forEach(this._notifySubscriber);

              this._pendingSubscribers = null;
            }
            /** Emits and completes the subscriber stream (should only emit once). */

          }, {
            key: "_notifySubscriber",
            value: function _notifySubscriber(subscriber) {
              subscriber.next();
              subscriber.complete();
            }
          }]);

          return _class4;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** InjectionToken for datepicker that can be used to override default locale code. */


      var MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
        providedIn: 'root',
        factory: MAT_DATE_LOCALE_FACTORY
      });
      /** @docs-private */

      function MAT_DATE_LOCALE_FACTORY() {
        return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
      }
      /** Adapts type `D` to be usable as a date by cdk-based components that work with dates. */


      var DateAdapter = /*#__PURE__*/function () {
        function DateAdapter() {
          _classCallCheck(this, DateAdapter);

          this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** A stream that emits when the locale changes. */

          this.localeChanges = this._localeChanges;
        }
        /**
         * Given a potential date object, returns that same date object if it is
         * a valid date, or `null` if it's not a valid date.
         * @param obj The object to check.
         * @returns A date or `null`.
         */


        _createClass(DateAdapter, [{
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
          }
          /**
           * Attempts to deserialize a value to a valid date object. This is different from parsing in that
           * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
           * string). The default implementation does not allow any deserialization, it simply checks that
           * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
           * method on all of its `@Input()` properties that accept dates. It is therefore possible to
           * support passing values from your backend directly to these properties by overriding this method
           * to also deserialize the format used by your backend.
           * @param value The value to be deserialized into a date object.
           * @returns The deserialized date object, either a valid date, null if the value can be
           *     deserialized into a null date (e.g. the empty string), or an invalid date.
           */

        }, {
          key: "deserialize",
          value: function deserialize(value) {
            if (value == null || this.isDateInstance(value) && this.isValid(value)) {
              return value;
            }

            return this.invalid();
          }
          /**
           * Sets the locale used for all dates.
           * @param locale The new locale.
           */

        }, {
          key: "setLocale",
          value: function setLocale(locale) {
            this.locale = locale;

            this._localeChanges.next();
          }
          /**
           * Compares two dates.
           * @param first The first date to compare.
           * @param second The second date to compare.
           * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
           *     a number greater than 0 if the first date is later.
           */

        }, {
          key: "compareDate",
          value: function compareDate(first, second) {
            return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
          }
          /**
           * Checks if two dates are equal.
           * @param first The first date to check.
           * @param second The second date to check.
           * @returns Whether the two dates are equal.
           *     Null dates are considered equal to other null dates.
           */

        }, {
          key: "sameDate",
          value: function sameDate(first, second) {
            if (first && second) {
              var firstValid = this.isValid(first);
              var secondValid = this.isValid(second);

              if (firstValid && secondValid) {
                return !this.compareDate(first, second);
              }

              return firstValid == secondValid;
            }

            return first == second;
          }
          /**
           * Clamp the given date between min and max dates.
           * @param date The date to clamp.
           * @param min The minimum value to allow. If null or omitted no min is enforced.
           * @param max The maximum value to allow. If null or omitted no max is enforced.
           * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
           *     otherwise `date`.
           */

        }, {
          key: "clampDate",
          value: function clampDate(date, min, max) {
            if (min && this.compareDate(date, min) < 0) {
              return min;
            }

            if (max && this.compareDate(date, max) > 0) {
              return max;
            }

            return date;
          }
        }]);

        return DateAdapter;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(mmalerba): Remove when we no longer support safari 9.

      /** Whether the browser supports the Intl API. */

      var SUPPORTS_INTL_API; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
      // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
      // the consumer is providing a polyfilled `Map`. See:
      // https://github.com/Microsoft/ChakraCore/issues/3189
      // https://github.com/angular/components/issues/15687

      try {
        SUPPORTS_INTL_API = typeof Intl != 'undefined';
      } catch (_a) {
        SUPPORTS_INTL_API = false;
      }
      /** The default month names to use if Intl API is not available. */


      var DEFAULT_MONTH_NAMES = {
        'long': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
      };

      var ɵ0 = function ɵ0(i) {
        return String(i + 1);
      };
      /** The default date names to use if Intl API is not available. */


      var DEFAULT_DATE_NAMES = range(31, ɵ0);
      /** The default day of the week names to use if Intl API is not available. */

      var DEFAULT_DAY_OF_WEEK_NAMES = {
        'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      };
      /**
       * Matches strings that have the form of a valid RFC 3339 string
       * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
       * because the regex will match strings an with out of bounds month, date, etc.
       */

      var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
      /** Creates an array and fills it with values. */

      function range(length, valueFunction) {
        var valuesArray = Array(length);

        for (var i = 0; i < length; i++) {
          valuesArray[i] = valueFunction(i);
        }

        return valuesArray;
      }
      /** Adapts the native JS Date for use with cdk-based components that work with dates. */


      var NativeDateAdapter = /*#__PURE__*/function (_DateAdapter) {
        _inherits(NativeDateAdapter, _DateAdapter);

        var _super7 = _createSuper(NativeDateAdapter);

        function NativeDateAdapter(matDateLocale, platform) {
          var _thisSuper, _this7;

          _classCallCheck(this, NativeDateAdapter);

          _this7 = _super7.call(this);
          /**
           * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
           * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
           * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
           * will produce `'8/13/1800'`.
           *
           * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
           * getting the string representation of a Date object from its utc representation. We're keeping
           * it here for sometime, just for precaution, in case we decide to revert some of these changes
           * though.
           */

          _this7.useUtcForDisplay = true;

          _get((_thisSuper = _assertThisInitialized(_this7), _getPrototypeOf(NativeDateAdapter.prototype)), "setLocale", _thisSuper).call(_thisSuper, matDateLocale); // IE does its own time zone correction, so we disable this on IE.


          _this7.useUtcForDisplay = !platform.TRIDENT;
          _this7._clampDate = platform.TRIDENT || platform.EDGE;
          return _this7;
        }

        _createClass(NativeDateAdapter, [{
          key: "getYear",
          value: function getYear(date) {
            return date.getFullYear();
          }
        }, {
          key: "getMonth",
          value: function getMonth(date) {
            return date.getMonth();
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            return date.getDate();
          }
        }, {
          key: "getDayOfWeek",
          value: function getDayOfWeek(date) {
            return date.getDay();
          }
        }, {
          key: "getMonthNames",
          value: function getMonthNames(style) {
            var _this8 = this;

            if (SUPPORTS_INTL_API) {
              var dtf = new Intl.DateTimeFormat(this.locale, {
                month: style,
                timeZone: 'utc'
              });
              return range(12, function (i) {
                return _this8._stripDirectionalityCharacters(_this8._format(dtf, new Date(2017, i, 1)));
              });
            }

            return DEFAULT_MONTH_NAMES[style];
          }
        }, {
          key: "getDateNames",
          value: function getDateNames() {
            var _this9 = this;

            if (SUPPORTS_INTL_API) {
              var dtf = new Intl.DateTimeFormat(this.locale, {
                day: 'numeric',
                timeZone: 'utc'
              });
              return range(31, function (i) {
                return _this9._stripDirectionalityCharacters(_this9._format(dtf, new Date(2017, 0, i + 1)));
              });
            }

            return DEFAULT_DATE_NAMES;
          }
        }, {
          key: "getDayOfWeekNames",
          value: function getDayOfWeekNames(style) {
            var _this10 = this;

            if (SUPPORTS_INTL_API) {
              var dtf = new Intl.DateTimeFormat(this.locale, {
                weekday: style,
                timeZone: 'utc'
              });
              return range(7, function (i) {
                return _this10._stripDirectionalityCharacters(_this10._format(dtf, new Date(2017, 0, i + 1)));
              });
            }

            return DEFAULT_DAY_OF_WEEK_NAMES[style];
          }
        }, {
          key: "getYearName",
          value: function getYearName(date) {
            if (SUPPORTS_INTL_API) {
              var dtf = new Intl.DateTimeFormat(this.locale, {
                year: 'numeric',
                timeZone: 'utc'
              });
              return this._stripDirectionalityCharacters(this._format(dtf, date));
            }

            return String(this.getYear(date));
          }
        }, {
          key: "getFirstDayOfWeek",
          value: function getFirstDayOfWeek() {
            // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
            return 0;
          }
        }, {
          key: "getNumDaysInMonth",
          value: function getNumDaysInMonth(date) {
            return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
          }
        }, {
          key: "clone",
          value: function clone(date) {
            return new Date(date.getTime());
          }
        }, {
          key: "createDate",
          value: function createDate(year, month, date) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              // Check for invalid month and date (except upper bound on date which we have to check after
              // creating the Date).
              if (month < 0 || month > 11) {
                throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
              }

              if (date < 1) {
                throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
              }
            }

            var result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


            if (result.getMonth() != month && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
            }

            return result;
          }
        }, {
          key: "today",
          value: function today() {
            return new Date();
          }
        }, {
          key: "parse",
          value: function parse(value) {
            // We have no way using the native JS Date to set the parse format or locale, so we ignore these
            // parameters.
            if (typeof value == 'number') {
              return new Date(value);
            }

            return value ? new Date(Date.parse(value)) : null;
          }
        }, {
          key: "format",
          value: function format(date, displayFormat) {
            if (!this.isValid(date)) {
              throw Error('NativeDateAdapter: Cannot format invalid date.');
            }

            if (SUPPORTS_INTL_API) {
              // On IE and Edge the i18n API will throw a hard error that can crash the entire app
              // if we attempt to format a date whose year is less than 1 or greater than 9999.
              if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
              }

              displayFormat = Object.assign(Object.assign({}, displayFormat), {
                timeZone: 'utc'
              });
              var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
              return this._stripDirectionalityCharacters(this._format(dtf, date));
            }

            return this._stripDirectionalityCharacters(date.toDateString());
          }
        }, {
          key: "addCalendarYears",
          value: function addCalendarYears(date, years) {
            return this.addCalendarMonths(date, years * 12);
          }
        }, {
          key: "addCalendarMonths",
          value: function addCalendarMonths(date, months) {
            var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
            // month. In this case we want to go to the last day of the desired month.
            // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
            // guarantee this.


            if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
              newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
            }

            return newDate;
          }
        }, {
          key: "addCalendarDays",
          value: function addCalendarDays(date, days) {
            return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
          }
        }, {
          key: "toIso8601",
          value: function toIso8601(date) {
            return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
          }
          /**
           * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
           * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
           * invalid date for all other values.
           */

        }, {
          key: "deserialize",
          value: function deserialize(value) {
            if (typeof value === 'string') {
              if (!value) {
                return null;
              } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
              // string is the right format first.


              if (ISO_8601_REGEX.test(value)) {
                var date = new Date(value);

                if (this.isValid(date)) {
                  return date;
                }
              }
            }

            return _get(_getPrototypeOf(NativeDateAdapter.prototype), "deserialize", this).call(this, value);
          }
        }, {
          key: "isDateInstance",
          value: function isDateInstance(obj) {
            return obj instanceof Date;
          }
        }, {
          key: "isValid",
          value: function isValid(date) {
            return !isNaN(date.getTime());
          }
        }, {
          key: "invalid",
          value: function invalid() {
            return new Date(NaN);
          }
          /** Creates a date but allows the month and date to overflow. */

        }, {
          key: "_createDateWithOverflow",
          value: function _createDateWithOverflow(year, month, date) {
            // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
            // To work around this we use `setFullYear` and `setHours` instead.
            var d = new Date();
            d.setFullYear(year, month, date);
            d.setHours(0, 0, 0, 0);
            return d;
          }
          /**
           * Pads a number to make it two digits.
           * @param n The number to pad.
           * @returns The padded number.
           */

        }, {
          key: "_2digit",
          value: function _2digit(n) {
            return ('00' + n).slice(-2);
          }
          /**
           * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
           * other browsers do not. We remove them to make output consistent and because they interfere with
           * date parsing.
           * @param str The string to strip direction characters from.
           * @returns The stripped string.
           */

        }, {
          key: "_stripDirectionalityCharacters",
          value: function _stripDirectionalityCharacters(str) {
            return str.replace(/[\u200e\u200f]/g, '');
          }
          /**
           * When converting Date object to string, javascript built-in functions may return wrong
           * results because it applies its internal DST rules. The DST rules around the world change
           * very frequently, and the current valid rule is not always valid in previous years though.
           * We work around this problem building a new Date object which has its internal UTC
           * representation with the local date and time.
           * @param dtf Intl.DateTimeFormat object, containg the desired string format. It must have
           *    timeZone set to 'utc' to work fine.
           * @param date Date from which we want to get the string representation according to dtf
           * @returns A Date object with its UTC representation based on the passed in date info
           */

        }, {
          key: "_format",
          value: function _format(dtf, date) {
            // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
            // To work around this we use `setUTCFullYear` and `setUTCHours` instead.
            var d = new Date();
            d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
            d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
            return dtf.format(d);
          }
        }]);

        return NativeDateAdapter;
      }(DateAdapter);

      NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) {
        return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]));
      };

      NativeDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NativeDateAdapter,
        factory: NativeDateAdapter.ɵfac
      });

      NativeDateAdapter.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_DATE_LOCALE]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_DATE_LOCALE]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MAT_NATIVE_DATE_FORMATS = {
        parse: {
          dateInput: null
        },
        display: {
          dateInput: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          },
          monthYearLabel: {
            year: 'numeric',
            month: 'short'
          },
          dateA11yLabel: {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          },
          monthYearA11yLabel: {
            year: 'numeric',
            month: 'long'
          }
        }
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var NativeDateModule = function NativeDateModule() {
        _classCallCheck(this, NativeDateModule);
      };

      NativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NativeDateModule
      });
      NativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NativeDateModule_Factory(t) {
          return new (t || NativeDateModule)();
        },
        providers: [{
          provide: DateAdapter,
          useClass: NativeDateAdapter
        }],
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NativeDateModule, {
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
            providers: [{
              provide: DateAdapter,
              useClass: NativeDateAdapter
            }]
          }]
        }], null, null);
      })();

      var ɵ0$1 = MAT_NATIVE_DATE_FORMATS;

      var MatNativeDateModule = function MatNativeDateModule() {
        _classCallCheck(this, MatNativeDateModule);
      };

      MatNativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatNativeDateModule
      });
      MatNativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatNativeDateModule_Factory(t) {
          return new (t || MatNativeDateModule)();
        },
        providers: [{
          provide: MAT_DATE_FORMATS,
          useValue: ɵ0$1
        }],
        imports: [[NativeDateModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatNativeDateModule, {
          imports: [NativeDateModule]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNativeDateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [NativeDateModule],
            providers: [{
              provide: MAT_DATE_FORMATS,
              useValue: ɵ0$1
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Error state matcher that matches when a control is invalid and dirty. */


      var ShowOnDirtyErrorStateMatcher = /*#__PURE__*/function () {
        function ShowOnDirtyErrorStateMatcher() {
          _classCallCheck(this, ShowOnDirtyErrorStateMatcher);
        }

        _createClass(ShowOnDirtyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            return !!(control && control.invalid && (control.dirty || form && form.submitted));
          }
        }]);

        return ShowOnDirtyErrorStateMatcher;
      }();

      ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
        return new (t || ShowOnDirtyErrorStateMatcher)();
      };

      ShowOnDirtyErrorStateMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ShowOnDirtyErrorStateMatcher,
        factory: ShowOnDirtyErrorStateMatcher.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /** Provider that defines how form controls behave with regards to displaying error messages. */


      var ErrorStateMatcher = /*#__PURE__*/function () {
        function ErrorStateMatcher() {
          _classCallCheck(this, ErrorStateMatcher);
        }

        _createClass(ErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            return !!(control && control.invalid && (control.touched || form && form.submitted));
          }
        }]);

        return ErrorStateMatcher;
      }();

      ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) {
        return new (t || ErrorStateMatcher)();
      };

      ErrorStateMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function ErrorStateMatcher_Factory() {
          return new ErrorStateMatcher();
        },
        token: ErrorStateMatcher,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorStateMatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Shared directive to count lines inside a text area, such as a list item.
       * Line elements can be extracted with a @ContentChildren(MatLine) query, then
       * counted by checking the query list's length.
       */


      var MatLine = function MatLine() {
        _classCallCheck(this, MatLine);
      };

      MatLine.ɵfac = function MatLine_Factory(t) {
        return new (t || MatLine)();
      };

      MatLine.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatLine,
        selectors: [["", "mat-line", ""], ["", "matLine", ""]],
        hostAttrs: [1, "mat-line"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLine, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-line], [matLine]',
            host: {
              'class': 'mat-line'
            }
          }]
        }], null, null);
      })();
      /**
       * Helper that takes a query list of lines and sets the correct class on the host.
       * @docs-private
       */


      function setLines(lines, element) {
        var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'mat';
        // Note: doesn't need to unsubscribe, because `changes`
        // gets completed by Angular when the view is destroyed.
        lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(lines)).subscribe(function (_ref) {
          var length = _ref.length;
          setClass(element, "".concat(prefix, "-2-line"), false);
          setClass(element, "".concat(prefix, "-3-line"), false);
          setClass(element, "".concat(prefix, "-multi-line"), false);

          if (length === 2 || length === 3) {
            setClass(element, "".concat(prefix, "-").concat(length, "-line"), true);
          } else if (length > 3) {
            setClass(element, "".concat(prefix, "-multi-line"), true);
          }
        });
      }
      /** Adds or removes a class from an element. */


      function setClass(element, className, isAdd) {
        var classList = element.nativeElement.classList;
        isAdd ? classList.add(className) : classList.remove(className);
      }

      var MatLineModule = function MatLineModule() {
        _classCallCheck(this, MatLineModule);
      };

      MatLineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatLineModule
      });
      MatLineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatLineModule_Factory(t) {
          return new (t || MatLineModule)();
        },
        imports: [[MatCommonModule], MatCommonModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatLineModule, {
          declarations: [MatLine],
          imports: [MatCommonModule],
          exports: [MatLine, MatCommonModule]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLineModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatCommonModule],
            exports: [MatLine, MatCommonModule],
            declarations: [MatLine]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Reference to a previously launched ripple element.
       */


      var RippleRef = /*#__PURE__*/function () {
        function RippleRef(_renderer,
        /** Reference to the ripple HTML element. */
        element,
        /** Ripple configuration used for the ripple. */
        config) {
          _classCallCheck(this, RippleRef);

          this._renderer = _renderer;
          this.element = element;
          this.config = config;
          /** Current state of the ripple. */

          this.state = 3
          /* HIDDEN */
          ;
        }
        /** Fades out the ripple element. */


        _createClass(RippleRef, [{
          key: "fadeOut",
          value: function fadeOut() {
            this._renderer.fadeOutRipple(this);
          }
        }]);

        return RippleRef;
      }();
      /**
       * Default ripple animation configuration for ripples without an explicit
       * animation config specified.
       */


      var defaultRippleAnimationConfig = {
        enterDuration: 450,
        exitDuration: 400
      };
      /**
       * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
       * events to avoid synthetic mouse events.
       */

      var ignoreMouseEventsTimeout = 800;
      /** Options that apply to all the event listeners that are bound by the ripple renderer. */

      var passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /** Events that signal that the pointer is down. */

      var pointerDownEvents = ['mousedown', 'touchstart'];
      /** Events that signal that the pointer is up. */

      var pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
      /**
       * Helper service that performs DOM manipulations. Not intended to be used outside this module.
       * The constructor takes a reference to the ripple directive's host element and a map of DOM
       * event handlers to be installed on the element that triggers ripple animations.
       * This will eventually become a custom renderer once Angular support exists.
       * @docs-private
       */

      var RippleRenderer = /*#__PURE__*/function () {
        function RippleRenderer(_target, _ngZone, elementOrElementRef, platform) {
          _classCallCheck(this, RippleRenderer);

          this._target = _target;
          this._ngZone = _ngZone;
          /** Whether the pointer is currently down or not. */

          this._isPointerDown = false;
          /** Set of currently active ripple references. */

          this._activeRipples = new Set();
          /** Whether pointer-up event listeners have been registered. */

          this._pointerUpEventsRegistered = false; // Only do anything if we're on the browser.

          if (platform.isBrowser) {
            this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);
          }
        }
        /**
         * Fades in a ripple at the given coordinates.
         * @param x Coordinate within the element, along the X axis at which to start the ripple.
         * @param y Coordinate within the element, along the Y axis at which to start the ripple.
         * @param config Extra ripple options.
         */


        _createClass(RippleRenderer, [{
          key: "fadeInRipple",
          value: function fadeInRipple(x, y) {
            var _this11 = this;

            var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();

            var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), config.animation);

            if (config.centered) {
              x = containerRect.left + containerRect.width / 2;
              y = containerRect.top + containerRect.height / 2;
            }

            var radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
            var offsetX = x - containerRect.left;
            var offsetY = y - containerRect.top;
            var duration = animationConfig.enterDuration;
            var ripple = document.createElement('div');
            ripple.classList.add('mat-ripple-element');
            ripple.style.left = "".concat(offsetX - radius, "px");
            ripple.style.top = "".concat(offsetY - radius, "px");
            ripple.style.height = "".concat(radius * 2, "px");
            ripple.style.width = "".concat(radius * 2, "px"); // If a custom color has been specified, set it as inline style. If no color is
            // set, the default color will be applied through the ripple theme styles.

            if (config.color != null) {
              ripple.style.backgroundColor = config.color;
            }

            ripple.style.transitionDuration = "".concat(duration, "ms");

            this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
            // ripple elements. This is critical because then the `scale` would not animate properly.


            enforceStyleRecalculation(ripple);
            ripple.style.transform = 'scale(1)'; // Exposed reference to the ripple that will be returned.

            var rippleRef = new RippleRef(this, ripple, config);
            rippleRef.state = 0
            /* FADING_IN */
            ; // Add the ripple reference to the list of all active ripples.

            this._activeRipples.add(rippleRef);

            if (!config.persistent) {
              this._mostRecentTransientRipple = rippleRef;
            } // Wait for the ripple element to be completely faded in.
            // Once it's faded in, the ripple can be hidden immediately if the mouse is released.


            this._runTimeoutOutsideZone(function () {
              var isMostRecentTransientRipple = rippleRef === _this11._mostRecentTransientRipple;
              rippleRef.state = 1
              /* VISIBLE */
              ; // When the timer runs out while the user has kept their pointer down, we want to
              // keep only the persistent ripples and the latest transient ripple. We do this,
              // because we don't want stacked transient ripples to appear after their enter
              // animation has finished.

              if (!config.persistent && (!isMostRecentTransientRipple || !_this11._isPointerDown)) {
                rippleRef.fadeOut();
              }
            }, duration);

            return rippleRef;
          }
          /** Fades out a ripple reference. */

        }, {
          key: "fadeOutRipple",
          value: function fadeOutRipple(rippleRef) {
            var wasActive = this._activeRipples["delete"](rippleRef);

            if (rippleRef === this._mostRecentTransientRipple) {
              this._mostRecentTransientRipple = null;
            } // Clear out the cached bounding rect if we have no more ripples.


            if (!this._activeRipples.size) {
              this._containerRect = null;
            } // For ripples that are not active anymore, don't re-run the fade-out animation.


            if (!wasActive) {
              return;
            }

            var rippleEl = rippleRef.element;
            var animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), rippleRef.config.animation);
            rippleEl.style.transitionDuration = "".concat(animationConfig.exitDuration, "ms");
            rippleEl.style.opacity = '0';
            rippleRef.state = 2
            /* FADING_OUT */
            ; // Once the ripple faded out, the ripple can be safely removed from the DOM.

            this._runTimeoutOutsideZone(function () {
              rippleRef.state = 3
              /* HIDDEN */
              ;
              rippleEl.parentNode.removeChild(rippleEl);
            }, animationConfig.exitDuration);
          }
          /** Fades out all currently active ripples. */

        }, {
          key: "fadeOutAll",
          value: function fadeOutAll() {
            this._activeRipples.forEach(function (ripple) {
              return ripple.fadeOut();
            });
          }
          /** Sets up the trigger event listeners */

        }, {
          key: "setupTriggerEvents",
          value: function setupTriggerEvents(elementOrElementRef) {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);

            if (!element || element === this._triggerElement) {
              return;
            } // Remove all previously registered event listeners from the trigger element.


            this._removeTriggerEvents();

            this._triggerElement = element;

            this._registerEvents(pointerDownEvents);
          }
          /**
           * Handles all registered events.
           * @docs-private
           */

        }, {
          key: "handleEvent",
          value: function handleEvent(event) {
            if (event.type === 'mousedown') {
              this._onMousedown(event);
            } else if (event.type === 'touchstart') {
              this._onTouchStart(event);
            } else {
              this._onPointerUp();
            } // If pointer-up events haven't been registered yet, do so now.
            // We do this on-demand in order to reduce the total number of event listeners
            // registered by the ripples, which speeds up the rendering time for large UIs.


            if (!this._pointerUpEventsRegistered) {
              this._registerEvents(pointerUpEvents);

              this._pointerUpEventsRegistered = true;
            }
          }
          /** Function being called whenever the trigger is being pressed using mouse. */

        }, {
          key: "_onMousedown",
          value: function _onMousedown(event) {
            // Screen readers will fire fake mouse events for space/enter. Skip launching a
            // ripple in this case for consistency with the non-screen-reader experience.
            var isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["isFakeMousedownFromScreenReader"])(event);
            var isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;

            if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
              this._isPointerDown = true;
              this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
            }
          }
          /** Function being called whenever the trigger is being pressed using touch. */

        }, {
          key: "_onTouchStart",
          value: function _onTouchStart(event) {
            if (!this._target.rippleDisabled && !Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["isFakeTouchstartFromScreenReader"])(event)) {
              // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
              // events will launch a second ripple if we don't ignore mouse events for a specific
              // time after a touchstart event.
              this._lastTouchStartEvent = Date.now();
              this._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
              // their finger down, but used another finger to tap the element again.

              var touches = event.changedTouches;

              for (var i = 0; i < touches.length; i++) {
                this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
              }
            }
          }
          /** Function being called whenever the trigger is being released. */

        }, {
          key: "_onPointerUp",
          value: function _onPointerUp() {
            if (!this._isPointerDown) {
              return;
            }

            this._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

            this._activeRipples.forEach(function (ripple) {
              // By default, only ripples that are completely visible will fade out on pointer release.
              // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
              var isVisible = ripple.state === 1
              /* VISIBLE */
              || ripple.config.terminateOnPointerUp && ripple.state === 0
              /* FADING_IN */
              ;

              if (!ripple.config.persistent && isVisible) {
                ripple.fadeOut();
              }
            });
          }
          /** Runs a timeout outside of the Angular zone to avoid triggering the change detection. */

        }, {
          key: "_runTimeoutOutsideZone",
          value: function _runTimeoutOutsideZone(fn) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            this._ngZone.runOutsideAngular(function () {
              return setTimeout(fn, delay);
            });
          }
          /** Registers event listeners for a given list of events. */

        }, {
          key: "_registerEvents",
          value: function _registerEvents(eventTypes) {
            var _this12 = this;

            this._ngZone.runOutsideAngular(function () {
              eventTypes.forEach(function (type) {
                _this12._triggerElement.addEventListener(type, _this12, passiveEventOptions);
              });
            });
          }
          /** Removes previously registered event listeners from the trigger element. */

        }, {
          key: "_removeTriggerEvents",
          value: function _removeTriggerEvents() {
            var _this13 = this;

            if (this._triggerElement) {
              pointerDownEvents.forEach(function (type) {
                _this13._triggerElement.removeEventListener(type, _this13, passiveEventOptions);
              });

              if (this._pointerUpEventsRegistered) {
                pointerUpEvents.forEach(function (type) {
                  _this13._triggerElement.removeEventListener(type, _this13, passiveEventOptions);
                });
              }
            }
          }
        }]);

        return RippleRenderer;
      }();
      /** Enforces a style recalculation of a DOM element by computing its styles. */


      function enforceStyleRecalculation(element) {
        // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
        // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
        // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
        window.getComputedStyle(element).getPropertyValue('opacity');
      }
      /**
       * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
       */


      function distanceToFurthestCorner(x, y, rect) {
        var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
        var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
        return Math.sqrt(distX * distX + distY * distY);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to specify the global ripple options. */


      var MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');

      var MatRipple = /*#__PURE__*/function () {
        function MatRipple(_elementRef, ngZone, platform, globalOptions, _animationMode) {
          _classCallCheck(this, MatRipple);

          this._elementRef = _elementRef;
          this._animationMode = _animationMode;
          /**
           * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
           * will be the distance from the center of the ripple to the furthest corner of the host element's
           * bounding rectangle.
           */

          this.radius = 0;
          this._disabled = false;
          /** Whether ripple directive is initialized and the input bindings are set. */

          this._isInitialized = false;
          this._globalOptions = globalOptions || {};
          this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
        }
        /**
         * Whether click events will not trigger the ripple. Ripples can be still launched manually
         * by using the `launch()` method.
         */


        _createClass(MatRipple, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = value;

            this._setupTriggerEventsIfEnabled();
          }
          /**
           * The element that triggers the ripple when click events are received.
           * Defaults to the directive's host element.
           */

        }, {
          key: "trigger",
          get: function get() {
            return this._trigger || this._elementRef.nativeElement;
          },
          set: function set(trigger) {
            this._trigger = trigger;

            this._setupTriggerEventsIfEnabled();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._isInitialized = true;

            this._setupTriggerEventsIfEnabled();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rippleRenderer._removeTriggerEvents();
          }
          /** Fades out all currently showing ripple elements. */

        }, {
          key: "fadeOutAll",
          value: function fadeOutAll() {
            this._rippleRenderer.fadeOutAll();
          }
          /**
           * Ripple configuration from the directive's input values.
           * @docs-private Implemented as part of RippleTarget
           */

        }, {
          key: "rippleConfig",
          get: function get() {
            return {
              centered: this.centered,
              radius: this.radius,
              color: this.color,
              animation: Object.assign(Object.assign(Object.assign({}, this._globalOptions.animation), this._animationMode === 'NoopAnimations' ? {
                enterDuration: 0,
                exitDuration: 0
              } : {}), this.animation),
              terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
            };
          }
          /**
           * Whether ripples on pointer-down are disabled or not.
           * @docs-private Implemented as part of RippleTarget
           */

        }, {
          key: "rippleDisabled",
          get: function get() {
            return this.disabled || !!this._globalOptions.disabled;
          }
          /** Sets up the trigger event listeners if ripples are enabled. */

        }, {
          key: "_setupTriggerEventsIfEnabled",
          value: function _setupTriggerEventsIfEnabled() {
            if (!this.disabled && this._isInitialized) {
              this._rippleRenderer.setupTriggerEvents(this.trigger);
            }
          }
          /** Launches a manual ripple at the specified coordinated or just by the ripple config. */

        }, {
          key: "launch",
          value: function launch(configOrX) {
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var config = arguments.length > 2 ? arguments[2] : undefined;

            if (typeof configOrX === 'number') {
              return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign(Object.assign({}, this.rippleConfig), config));
            } else {
              return this._rippleRenderer.fadeInRipple(0, 0, Object.assign(Object.assign({}, this.rippleConfig), configOrX));
            }
          }
        }]);

        return MatRipple;
      }();

      MatRipple.ɵfac = function MatRipple_Factory(t) {
        return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatRipple.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatRipple,
        selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function MatRipple_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
          }
        },
        inputs: {
          radius: ["matRippleRadius", "radius"],
          disabled: ["matRippleDisabled", "disabled"],
          trigger: ["matRippleTrigger", "trigger"],
          color: ["matRippleColor", "color"],
          unbounded: ["matRippleUnbounded", "unbounded"],
          centered: ["matRippleCentered", "centered"],
          animation: ["matRippleAnimation", "animation"]
        },
        exportAs: ["matRipple"]
      });

      MatRipple.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_RIPPLE_GLOBAL_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatRipple.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleColor']
        }],
        unbounded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleUnbounded']
        }],
        centered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleCentered']
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleRadius']
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleAnimation']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleDisabled']
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleTrigger']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRipple, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-ripple], [matRipple]',
            exportAs: 'matRipple',
            host: {
              'class': 'mat-ripple',
              '[class.mat-ripple-unbounded]': 'unbounded'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_RIPPLE_GLOBAL_OPTIONS]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleRadius']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleDisabled']
          }],
          trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleTrigger']
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleColor']
          }],
          unbounded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleUnbounded']
          }],
          centered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleCentered']
          }],
          animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleAnimation']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatRippleModule = function MatRippleModule() {
        _classCallCheck(this, MatRippleModule);
      };

      MatRippleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatRippleModule
      });
      MatRippleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatRippleModule_Factory(t) {
          return new (t || MatRippleModule)();
        },
        imports: [[MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]], MatCommonModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRippleModule, {
          declarations: function declarations() {
            return [MatRipple];
          },
          imports: function imports() {
            return [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]];
          },
          exports: function exports() {
            return [MatRipple, MatCommonModule];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRippleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
            exports: [MatRipple, MatCommonModule],
            declarations: [MatRipple]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Component that shows a simplified checkbox without including any kind of "real" checkbox.
       * Meant to be used when the checkbox is purely decorative and a large number of them will be
       * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
       * Note that theming is meant to be handled by the parent element, e.g.
       * `mat-primary .mat-pseudo-checkbox`.
       *
       * Note that this component will be completely invisible to screen-reader users. This is *not*
       * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
       * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
       * of more complex components that appropriately handle selected / checked state.
       * @docs-private
       */


      var MatPseudoCheckbox = function MatPseudoCheckbox(_animationMode) {
        _classCallCheck(this, MatPseudoCheckbox);

        this._animationMode = _animationMode;
        /** Display state of the checkbox. */

        this.state = 'unchecked';
        /** Whether the checkbox is disabled. */

        this.disabled = false;
      };

      MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) {
        return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatPseudoCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatPseudoCheckbox,
        selectors: [["mat-pseudo-checkbox"]],
        hostAttrs: [1, "mat-pseudo-checkbox"],
        hostVars: 8,
        hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          state: "state",
          disabled: "disabled"
        },
        decls: 0,
        vars: 0,
        template: function MatPseudoCheckbox_Template(rf, ctx) {},
        styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatPseudoCheckbox.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatPseudoCheckbox.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckbox, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'mat-pseudo-checkbox',
            template: '',
            host: {
              'class': 'mat-pseudo-checkbox',
              '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
              '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
              '[class.mat-pseudo-checkbox-disabled]': 'disabled',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"]
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatPseudoCheckboxModule = function MatPseudoCheckboxModule() {
        _classCallCheck(this, MatPseudoCheckboxModule);
      };

      MatPseudoCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatPseudoCheckboxModule
      });
      MatPseudoCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatPseudoCheckboxModule_Factory(t) {
          return new (t || MatPseudoCheckboxModule)();
        },
        imports: [[MatCommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatPseudoCheckboxModule, {
          declarations: [MatPseudoCheckbox],
          imports: [MatCommonModule],
          exports: [MatPseudoCheckbox]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckboxModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatCommonModule],
            exports: [MatPseudoCheckbox],
            declarations: [MatPseudoCheckbox]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to provide the parent component to options.
       */


      var MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Notes on the accessibility pattern used for `mat-optgroup`.
      // The option group has two different "modes": regular and inert. The regular mode uses the
      // recommended a11y pattern which has `role="group"` on the group element with `aria-labelledby`
      // pointing to the label. This works for `mat-select`, but it seems to hit a bug for autocomplete
      // under VoiceOver where the group doesn't get read out at all. The bug appears to be that if
      // there's __any__ a11y-related attribute on the group (e.g. `role` or `aria-labelledby`),
      // VoiceOver on Safari won't read it out.
      // We've introduced the `inert` mode as a workaround. Under this mode, all a11y attributes are
      // removed from the group, and we get the screen reader to read out the group label by mirroring it
      // inside an invisible element in the option. This is sub-optimal, because the screen reader will
      // repeat the group label on each navigation, whereas the default pattern only reads the group when
      // the user enters a new group. The following alternate approaches were considered:
      // 1. Reading out the group label using the `LiveAnnouncer` solves the problem, but we can't control
      //    when the text will be read out so sometimes it comes in too late or never if the user
      //    navigates quickly.
      // 2. `<mat-option aria-describedby="groupLabel"` - This works on Safari, but VoiceOver in Chrome
      //    won't read out the description at all.
      // 3. `<mat-option aria-labelledby="optionLabel groupLabel"` - This works on Chrome, but Safari
      //     doesn't read out the text at all. Furthermore, on
      // Boilerplate for applying mixins to MatOptgroup.

      /** @docs-private */

      var MatOptgroupBase = function MatOptgroupBase() {
        _classCallCheck(this, MatOptgroupBase);
      };

      var _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase); // Counter for unique group ids.


      var _uniqueOptgroupIdCounter = 0;

      var _MatOptgroupBase = /*#__PURE__*/function (_MatOptgroupMixinBase2) {
        _inherits(_MatOptgroupBase, _MatOptgroupMixinBase2);

        var _super8 = _createSuper(_MatOptgroupBase);

        function _MatOptgroupBase(parent) {
          var _this14;

          _classCallCheck(this, _MatOptgroupBase);

          var _a;

          _this14 = _super8.call(this);
          /** Unique id for the underlying label. */

          _this14._labelId = "mat-optgroup-label-".concat(_uniqueOptgroupIdCounter++);
          _this14._inert = (_a = parent === null || parent === void 0 ? void 0 : parent.inertGroups) !== null && _a !== void 0 ? _a : false;
          return _this14;
        }

        return _MatOptgroupBase;
      }(_MatOptgroupMixinBase);

      _MatOptgroupBase.ɵfac = function _MatOptgroupBase_Factory(t) {
        return new (t || _MatOptgroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8));
      };

      _MatOptgroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatOptgroupBase,
        inputs: {
          label: "label"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _MatOptgroupBase.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_OPTION_PARENT_COMPONENT]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      _MatOptgroupBase.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatOptgroupBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_OPTION_PARENT_COMPONENT]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Injection token that can be used to reference instances of `MatOptgroup`. It serves as
       * alternative token to the actual `MatOptgroup` class which could cause unnecessary
       * retention of the class and its component metadata.
       */


      var MAT_OPTGROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MatOptgroup');
      /**
       * Component that is used to group instances of `mat-option`.
       */

      var MatOptgroup = /*#__PURE__*/function (_MatOptgroupBase2) {
        _inherits(MatOptgroup, _MatOptgroupBase2);

        var _super9 = _createSuper(MatOptgroup);

        function MatOptgroup() {
          _classCallCheck(this, MatOptgroup);

          return _super9.apply(this, arguments);
        }

        return MatOptgroup;
      }(_MatOptgroupBase);

      MatOptgroup.ɵfac = function MatOptgroup_Factory(t) {
        return ɵMatOptgroup_BaseFactory(t || MatOptgroup);
      };

      MatOptgroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatOptgroup,
        selectors: [["mat-optgroup"]],
        hostAttrs: [1, "mat-optgroup"],
        hostVars: 5,
        hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled"
        },
        exportAs: ["matOptgroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_OPTGROUP,
          useExisting: MatOptgroup
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 2,
        consts: [["aria-hidden", "true", 1, "mat-optgroup-label", 3, "id"]],
        template: function MatOptgroup_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._labelId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
          }
        },
        styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵMatOptgroup_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatOptgroup);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptgroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-optgroup',
            exportAs: 'matOptgroup',
            template: "<span class=\"mat-optgroup-label\" aria-hidden=\"true\" [id]=\"_labelId\">{{ label }} <ng-content></ng-content></span>\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            inputs: ['disabled'],
            host: {
              'class': 'mat-optgroup',
              '[attr.role]': '_inert ? null : "group"',
              '[attr.aria-disabled]': '_inert ? null : disabled.toString()',
              '[attr.aria-labelledby]': '_inert ? null : _labelId',
              '[class.mat-optgroup-disabled]': 'disabled'
            },
            providers: [{
              provide: MAT_OPTGROUP,
              useExisting: MatOptgroup
            }],
            styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Option IDs need to be unique across components, so this counter exists outside of
       * the component definition.
       */


      var _uniqueIdCounter = 0;
      /** Event object emitted by MatOption when selected or deselected. */

      var MatOptionSelectionChange = function MatOptionSelectionChange(
      /** Reference to the option that emitted the event. */
      source) {
        var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, MatOptionSelectionChange);

        this.source = source;
        this.isUserInput = isUserInput;
      };

      var _MatOptionBase = /*#__PURE__*/function () {
        function _MatOptionBase(_element, _changeDetectorRef, _parent, group) {
          _classCallCheck(this, _MatOptionBase);

          this._element = _element;
          this._changeDetectorRef = _changeDetectorRef;
          this._parent = _parent;
          this.group = group;
          this._selected = false;
          this._active = false;
          this._disabled = false;
          this._mostRecentViewValue = '';
          /** The unique ID of the option. */

          this.id = "mat-option-".concat(_uniqueIdCounter++);
          /** Event emitted when the option is selected or deselected. */
          // tslint:disable-next-line:no-output-on-prefix

          this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Emits when the state of the option changes and any parents have to be notified. */

          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }
        /** Whether the wrapping component is in multiple selection mode. */


        _createClass(_MatOptionBase, [{
          key: "multiple",
          get: function get() {
            return this._parent && this._parent.multiple;
          }
          /** Whether or not the option is currently selected. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          }
          /** Whether the option is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this.group && this.group.disabled || this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** Whether ripples for the option are disabled. */

        }, {
          key: "disableRipple",
          get: function get() {
            return this._parent && this._parent.disableRipple;
          }
          /**
           * Whether or not the option is currently active and ready to be selected.
           * An active option displays styles as if it is focused, but the
           * focus is actually retained somewhere else. This comes in handy
           * for components like autocomplete where focus must remain on the input.
           */

        }, {
          key: "active",
          get: function get() {
            return this._active;
          }
          /**
           * The displayed value of the option. It is necessary to show the selected option in the
           * select's trigger.
           */

        }, {
          key: "viewValue",
          get: function get() {
            // TODO(kara): Add input property alternative for node envs.
            return (this._getHostElement().textContent || '').trim();
          }
          /** Selects the option. */

        }, {
          key: "select",
          value: function select() {
            if (!this._selected) {
              this._selected = true;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent();
            }
          }
          /** Deselects the option. */

        }, {
          key: "deselect",
          value: function deselect() {
            if (this._selected) {
              this._selected = false;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent();
            }
          }
          /** Sets focus onto this option. */

        }, {
          key: "focus",
          value: function focus(_origin, options) {
            // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
            // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
            var element = this._getHostElement();

            if (typeof element.focus === 'function') {
              element.focus(options);
            }
          }
          /**
           * This method sets display styles on the option to make it appear
           * active. This is used by the ActiveDescendantKeyManager so key
           * events will display the proper options as active on arrow key events.
           */

        }, {
          key: "setActiveStyles",
          value: function setActiveStyles() {
            if (!this._active) {
              this._active = true;

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * This method removes display styles on the option that made it appear
           * active. This is used by the ActiveDescendantKeyManager so key
           * events will display the proper options as active on arrow key events.
           */

        }, {
          key: "setInactiveStyles",
          value: function setInactiveStyles() {
            if (this._active) {
              this._active = false;

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Gets the label to be used when determining whether the option should be focused. */

        }, {
          key: "getLabel",
          value: function getLabel() {
            return this.viewValue;
          }
          /** Ensures the option is selected when activated from the keyboard. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
              this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


              event.preventDefault();
            }
          }
          /**
           * `Selects the option while indicating the selection came from the user. Used to
           * determine if the select's view -> model callback should be invoked.`
           */

        }, {
          key: "_selectViaInteraction",
          value: function _selectViaInteraction() {
            if (!this.disabled) {
              this._selected = this.multiple ? !this._selected : true;

              this._changeDetectorRef.markForCheck();

              this._emitSelectionChangeEvent(true);
            }
          }
          /**
           * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
           * attribute from single-selection, unselected options. Including the `aria-selected="false"`
           * attributes adds a significant amount of noise to screen-reader users without providing useful
           * information.
           */

        }, {
          key: "_getAriaSelected",
          value: function _getAriaSelected() {
            return this.selected || (this.multiple ? false : null);
          }
          /** Returns the correct tabindex for the option depending on disabled state. */

        }, {
          key: "_getTabIndex",
          value: function _getTabIndex() {
            return this.disabled ? '-1' : '0';
          }
          /** Gets the host DOM element. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._element.nativeElement;
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            // Since parent components could be using the option's label to display the selected values
            // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
            // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
            // relatively cheap, however we still limit them only to selected options in order to avoid
            // hitting the DOM too often.
            if (this._selected) {
              var viewValue = this.viewValue;

              if (viewValue !== this._mostRecentViewValue) {
                this._mostRecentViewValue = viewValue;

                this._stateChanges.next();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
          /** Emits the selection change event. */

        }, {
          key: "_emitSelectionChangeEvent",
          value: function _emitSelectionChangeEvent() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
          }
        }]);

        return _MatOptionBase;
      }();

      _MatOptionBase.ɵfac = function _MatOptionBase_Factory(t) {
        return new (t || _MatOptionBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatOptgroupBase));
      };

      _MatOptionBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatOptionBase,
        inputs: {
          id: "id",
          disabled: "disabled",
          value: "value"
        },
        outputs: {
          onSelectionChange: "onSelectionChange"
        }
      });

      _MatOptionBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined
        }, {
          type: _MatOptgroupBase
        }];
      };

      _MatOptionBase.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSelectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatOptionBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: undefined
          }, {
            type: _MatOptgroupBase
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onSelectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Single option inside of a `<mat-select>` element.
       */


      var MatOption = /*#__PURE__*/function (_MatOptionBase2) {
        _inherits(MatOption, _MatOptionBase2);

        var _super10 = _createSuper(MatOption);

        function MatOption(element, changeDetectorRef, parent, group) {
          _classCallCheck(this, MatOption);

          return _super10.call(this, element, changeDetectorRef, parent, group);
        }

        return MatOption;
      }(_MatOptionBase);

      MatOption.ɵfac = function MatOption_Factory(t) {
        return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTGROUP, 8));
      };

      MatOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatOption,
        selectors: [["mat-option"]],
        hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"],
        hostVars: 12,
        hostBindings: function MatOption_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
              return ctx._selectViaInteraction();
            })("keydown", function MatOption_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
          }
        },
        exportAs: ["matOption"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c2,
        decls: 5,
        vars: 4,
        consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["class", "cdk-visually-hidden", 4, "ngIf"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"], [1, "cdk-visually-hidden"]],
        template: function MatOption_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatOption_span_3_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.group && ctx.group._inert);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], MatRipple, MatPseudoCheckbox],
        styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_OPTION_PARENT_COMPONENT]
          }]
        }, {
          type: MatOptgroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_OPTGROUP]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-option',
            exportAs: 'matOption',
            host: {
              'role': 'option',
              '[attr.tabindex]': '_getTabIndex()',
              '[class.mat-selected]': 'selected',
              '[class.mat-option-multiple]': 'multiple',
              '[class.mat-active]': 'active',
              '[id]': 'id',
              '[attr.aria-selected]': '_getAriaSelected()',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[class.mat-option-disabled]': 'disabled',
              '(click)': '_selectViaInteraction()',
              '(keydown)': '_handleKeydown($event)',
              'class': 'mat-option mat-focus-indicator'
            },
            template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mat-option-text\"><ng-content></ng-content></span>\n\n<!-- See a11y notes inside optgroup.ts for context behind this element. -->\n<span class=\"cdk-visually-hidden\" *ngIf=\"group && group._inert\">({{ group.label }})</span>\n\n<div class=\"mat-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_OPTION_PARENT_COMPONENT]
            }]
          }, {
            type: MatOptgroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_OPTGROUP]
            }]
          }];
        }, null);
      })();
      /**
       * Counts the amount of option group labels that precede the specified option.
       * @param optionIndex Index of the option at which to start counting.
       * @param options Flat list of all of the options.
       * @param optionGroups Flat list of all of the option groups.
       * @docs-private
       */


      function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
        if (optionGroups.length) {
          var optionsArray = options.toArray();
          var groups = optionGroups.toArray();
          var groupCounter = 0;

          for (var i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
              groupCounter++;
            }
          }

          return groupCounter;
        }

        return 0;
      }
      /**
       * Determines the position to which to scroll a panel in order for an option to be into view.
       * @param optionOffset Offset of the option from the top of the panel.
       * @param optionHeight Height of the options.
       * @param currentScrollPosition Current scroll position of the panel.
       * @param panelHeight Height of the panel.
       * @docs-private
       */


      function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
        if (optionOffset < currentScrollPosition) {
          return optionOffset;
        }

        if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
          return Math.max(0, optionOffset - panelHeight + optionHeight);
        }

        return currentScrollPosition;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatOptionModule = function MatOptionModule() {
        _classCallCheck(this, MatOptionModule);
      };

      MatOptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatOptionModule
      });
      MatOptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatOptionModule_Factory(t) {
          return new (t || MatOptionModule)();
        },
        imports: [[MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatCommonModule, MatPseudoCheckboxModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatOptionModule, {
          declarations: function declarations() {
            return [MatOption, MatOptgroup];
          },
          imports: function imports() {
            return [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatCommonModule, MatPseudoCheckboxModule];
          },
          exports: function exports() {
            return [MatOption, MatOptgroup];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatCommonModule, MatPseudoCheckboxModule],
            exports: [MatOption, MatOptgroup],
            declarations: [MatOption, MatOptgroup]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=core.js.map

      /***/

    },

    /***/
    "FtGj":
    /*!*********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js ***!
      \*********************************************************************/

    /*! exports provided: A, ALT, APOSTROPHE, AT_SIGN, B, BACKSLASH, BACKSPACE, C, CAPS_LOCK, CLOSE_SQUARE_BRACKET, COMMA, CONTEXT_MENU, CONTROL, D, DASH, DELETE, DOWN_ARROW, E, EIGHT, END, ENTER, EQUALS, ESCAPE, F, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FF_EQUALS, FF_MINUS, FF_MUTE, FF_SEMICOLON, FF_VOLUME_DOWN, FF_VOLUME_UP, FIRST_MEDIA, FIVE, FOUR, G, H, HOME, I, INSERT, J, K, L, LAST_MEDIA, LEFT_ARROW, M, MAC_ENTER, MAC_META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, META, MUTE, N, NINE, NUMPAD_DIVIDE, NUMPAD_EIGHT, NUMPAD_FIVE, NUMPAD_FOUR, NUMPAD_MINUS, NUMPAD_MULTIPLY, NUMPAD_NINE, NUMPAD_ONE, NUMPAD_PERIOD, NUMPAD_PLUS, NUMPAD_SEVEN, NUMPAD_SIX, NUMPAD_THREE, NUMPAD_TWO, NUMPAD_ZERO, NUM_CENTER, NUM_LOCK, O, ONE, OPEN_SQUARE_BRACKET, P, PAGE_DOWN, PAGE_UP, PAUSE, PLUS_SIGN, PRINT_SCREEN, Q, QUESTION_MARK, R, RIGHT_ARROW, S, SCROLL_LOCK, SEMICOLON, SEVEN, SHIFT, SINGLE_QUOTE, SIX, SLASH, SPACE, T, TAB, THREE, TILDE, TWO, U, UP_ARROW, V, VOLUME_DOWN, VOLUME_UP, W, X, Y, Z, ZERO, hasModifierKey */

    /***/
    function FtGj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ALT", function () {
        return ALT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function () {
        return APOSTROPHE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AT_SIGN", function () {
        return AT_SIGN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BACKSLASH", function () {
        return BACKSLASH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BACKSPACE", function () {
        return BACKSPACE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function () {
        return CAPS_LOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function () {
        return CLOSE_SQUARE_BRACKET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COMMA", function () {
        return COMMA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function () {
        return CONTEXT_MENU;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONTROL", function () {
        return CONTROL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DASH", function () {
        return DASH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DELETE", function () {
        return DELETE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function () {
        return DOWN_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EIGHT", function () {
        return EIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "END", function () {
        return END;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ENTER", function () {
        return ENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EQUALS", function () {
        return EQUALS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ESCAPE", function () {
        return ESCAPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F1", function () {
        return F1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F10", function () {
        return F10;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F11", function () {
        return F11;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F12", function () {
        return F12;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F2", function () {
        return F2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F3", function () {
        return F3;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F4", function () {
        return F4;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F5", function () {
        return F5;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F6", function () {
        return F6;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F7", function () {
        return F7;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F8", function () {
        return F8;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F9", function () {
        return F9;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function () {
        return FF_EQUALS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_MINUS", function () {
        return FF_MINUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_MUTE", function () {
        return FF_MUTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function () {
        return FF_SEMICOLON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function () {
        return FF_VOLUME_DOWN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function () {
        return FF_VOLUME_UP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function () {
        return FIRST_MEDIA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FIVE", function () {
        return FIVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOUR", function () {
        return FOUR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "G", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "H", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HOME", function () {
        return HOME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "INSERT", function () {
        return INSERT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "J", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "K", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "L", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function () {
        return LAST_MEDIA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function () {
        return LEFT_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "M", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function () {
        return MAC_ENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_META", function () {
        return MAC_META;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function () {
        return MAC_WK_CMD_LEFT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function () {
        return MAC_WK_CMD_RIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "META", function () {
        return META;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MUTE", function () {
        return MUTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "N", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NINE", function () {
        return NINE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function () {
        return NUMPAD_DIVIDE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function () {
        return NUMPAD_EIGHT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function () {
        return NUMPAD_FIVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function () {
        return NUMPAD_FOUR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function () {
        return NUMPAD_MINUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function () {
        return NUMPAD_MULTIPLY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function () {
        return NUMPAD_NINE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function () {
        return NUMPAD_ONE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function () {
        return NUMPAD_PERIOD;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function () {
        return NUMPAD_PLUS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function () {
        return NUMPAD_SEVEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function () {
        return NUMPAD_SIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function () {
        return NUMPAD_THREE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function () {
        return NUMPAD_TWO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function () {
        return NUMPAD_ZERO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function () {
        return NUM_CENTER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function () {
        return NUM_LOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "O", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ONE", function () {
        return ONE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function () {
        return OPEN_SQUARE_BRACKET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function () {
        return PAGE_DOWN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAGE_UP", function () {
        return PAGE_UP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAUSE", function () {
        return PAUSE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function () {
        return PLUS_SIGN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function () {
        return PRINT_SCREEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Q", function () {
        return Q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function () {
        return QUESTION_MARK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "R", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function () {
        return RIGHT_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function () {
        return SCROLL_LOCK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SEMICOLON", function () {
        return SEMICOLON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SEVEN", function () {
        return SEVEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SHIFT", function () {
        return SHIFT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function () {
        return SINGLE_QUOTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SIX", function () {
        return SIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SLASH", function () {
        return SLASH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SPACE", function () {
        return SPACE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "T", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TAB", function () {
        return TAB;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "THREE", function () {
        return THREE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TILDE", function () {
        return TILDE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TWO", function () {
        return TWO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "U", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UP_ARROW", function () {
        return UP_ARROW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "V", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function () {
        return VOLUME_DOWN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function () {
        return VOLUME_UP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "W", function () {
        return W;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "X", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Y", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Z", function () {
        return Z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZERO", function () {
        return ZERO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasModifierKey", function () {
        return hasModifierKey;
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MAC_ENTER = 3;
      var BACKSPACE = 8;
      var TAB = 9;
      var NUM_CENTER = 12;
      var ENTER = 13;
      var SHIFT = 16;
      var CONTROL = 17;
      var ALT = 18;
      var PAUSE = 19;
      var CAPS_LOCK = 20;
      var ESCAPE = 27;
      var SPACE = 32;
      var PAGE_UP = 33;
      var PAGE_DOWN = 34;
      var END = 35;
      var HOME = 36;
      var LEFT_ARROW = 37;
      var UP_ARROW = 38;
      var RIGHT_ARROW = 39;
      var DOWN_ARROW = 40;
      var PLUS_SIGN = 43;
      var PRINT_SCREEN = 44;
      var INSERT = 45;
      var DELETE = 46;
      var ZERO = 48;
      var ONE = 49;
      var TWO = 50;
      var THREE = 51;
      var FOUR = 52;
      var FIVE = 53;
      var SIX = 54;
      var SEVEN = 55;
      var EIGHT = 56;
      var NINE = 57;
      var FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

      var FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

      var QUESTION_MARK = 63;
      var AT_SIGN = 64;
      var A = 65;
      var B = 66;
      var C = 67;
      var D = 68;
      var E = 69;
      var F = 70;
      var G = 71;
      var H = 72;
      var I = 73;
      var J = 74;
      var K = 75;
      var L = 76;
      var M = 77;
      var N = 78;
      var O = 79;
      var P = 80;
      var Q = 81;
      var R = 82;
      var S = 83;
      var T = 84;
      var U = 85;
      var V = 86;
      var W = 87;
      var X = 88;
      var Y = 89;
      var Z = 90;
      var META = 91; // WIN_KEY_LEFT

      var MAC_WK_CMD_LEFT = 91;
      var MAC_WK_CMD_RIGHT = 93;
      var CONTEXT_MENU = 93;
      var NUMPAD_ZERO = 96;
      var NUMPAD_ONE = 97;
      var NUMPAD_TWO = 98;
      var NUMPAD_THREE = 99;
      var NUMPAD_FOUR = 100;
      var NUMPAD_FIVE = 101;
      var NUMPAD_SIX = 102;
      var NUMPAD_SEVEN = 103;
      var NUMPAD_EIGHT = 104;
      var NUMPAD_NINE = 105;
      var NUMPAD_MULTIPLY = 106;
      var NUMPAD_PLUS = 107;
      var NUMPAD_MINUS = 109;
      var NUMPAD_PERIOD = 110;
      var NUMPAD_DIVIDE = 111;
      var F1 = 112;
      var F2 = 113;
      var F3 = 114;
      var F4 = 115;
      var F5 = 116;
      var F6 = 117;
      var F7 = 118;
      var F8 = 119;
      var F9 = 120;
      var F10 = 121;
      var F11 = 122;
      var F12 = 123;
      var NUM_LOCK = 144;
      var SCROLL_LOCK = 145;
      var FIRST_MEDIA = 166;
      var FF_MINUS = 173;
      var MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

      var VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

      var VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

      var FF_MUTE = 181;
      var FF_VOLUME_DOWN = 182;
      var LAST_MEDIA = 183;
      var FF_VOLUME_UP = 183;
      var SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

      var EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

      var COMMA = 188;
      var DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

      var SLASH = 191;
      var APOSTROPHE = 192;
      var TILDE = 192;
      var OPEN_SQUARE_BRACKET = 219;
      var BACKSLASH = 220;
      var CLOSE_SQUARE_BRACKET = 221;
      var SINGLE_QUOTE = 222;
      var MAC_META = 224;
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Checks whether a modifier key is pressed.
       * @param event Event to be checked.
       */

      function hasModifierKey(event) {
        for (var _len7 = arguments.length, modifiers = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
          modifiers[_key7 - 1] = arguments[_key7];
        }

        if (modifiers.length) {
          return modifiers.some(function (modifier) {
            return event[modifier];
          });
        }

        return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=keycodes.js.map

      /***/

    },

    /***/
    "GU7r":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js ***!
      \**********************************************************************/

    /*! exports provided: CdkObserveContent, ContentObserver, MutationObserverFactory, ObserversModule */

    /***/
    function GU7r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function () {
        return CdkObserveContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentObserver", function () {
        return ContentObserver;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function () {
        return MutationObserverFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObserversModule", function () {
        return ObserversModule;
      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
       * @docs-private
       */


      var MutationObserverFactory = /*#__PURE__*/function () {
        function MutationObserverFactory() {
          _classCallCheck(this, MutationObserverFactory);
        }

        _createClass(MutationObserverFactory, [{
          key: "create",
          value: function create(callback) {
            return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
          }
        }]);

        return MutationObserverFactory;
      }();

      MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
        return new (t || MutationObserverFactory)();
      };

      MutationObserverFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function MutationObserverFactory_Factory() {
          return new MutationObserverFactory();
        },
        token: MutationObserverFactory,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MutationObserverFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** An injectable service that allows watching elements for changes to their content. */


      var ContentObserver = /*#__PURE__*/function () {
        function ContentObserver(_mutationObserverFactory) {
          _classCallCheck(this, ContentObserver);

          this._mutationObserverFactory = _mutationObserverFactory;
          /** Keeps track of the existing MutationObservers so they can be reused. */

          this._observedElements = new Map();
        }

        _createClass(ContentObserver, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this15 = this;

            this._observedElements.forEach(function (_, element) {
              return _this15._cleanupObserver(element);
            });
          }
        }, {
          key: "observe",
          value: function observe(elementOrRef) {
            var _this16 = this;

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var stream = _this16._observeElement(element);

              var subscription = stream.subscribe(observer);
              return function () {
                subscription.unsubscribe();

                _this16._unobserveElement(element);
              };
            });
          }
          /**
           * Observes the given element by using the existing MutationObserver if available, or creating a
           * new one if not.
           */

        }, {
          key: "_observeElement",
          value: function _observeElement(element) {
            if (!this._observedElements.has(element)) {
              var stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

              var observer = this._mutationObserverFactory.create(function (mutations) {
                return stream.next(mutations);
              });

              if (observer) {
                observer.observe(element, {
                  characterData: true,
                  childList: true,
                  subtree: true
                });
              }

              this._observedElements.set(element, {
                observer: observer,
                stream: stream,
                count: 1
              });
            } else {
              this._observedElements.get(element).count++;
            }

            return this._observedElements.get(element).stream;
          }
          /**
           * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
           * observing this element.
           */

        }, {
          key: "_unobserveElement",
          value: function _unobserveElement(element) {
            if (this._observedElements.has(element)) {
              this._observedElements.get(element).count--;

              if (!this._observedElements.get(element).count) {
                this._cleanupObserver(element);
              }
            }
          }
          /** Clean up the underlying MutationObserver for the specified element. */

        }, {
          key: "_cleanupObserver",
          value: function _cleanupObserver(element) {
            if (this._observedElements.has(element)) {
              var _this$_observedElemen = this._observedElements.get(element),
                  observer = _this$_observedElemen.observer,
                  stream = _this$_observedElemen.stream;

              if (observer) {
                observer.disconnect();
              }

              stream.complete();

              this._observedElements["delete"](element);
            }
          }
        }]);

        return ContentObserver;
      }();

      ContentObserver.ɵfac = function ContentObserver_Factory(t) {
        return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MutationObserverFactory));
      };

      ContentObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ContentObserver_Factory() {
          return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MutationObserverFactory));
        },
        token: ContentObserver,
        providedIn: "root"
      });

      ContentObserver.ctorParameters = function () {
        return [{
          type: MutationObserverFactory
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentObserver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: MutationObserverFactory
          }];
        }, null);
      })();
      /**
       * Directive that triggers a callback whenever the content of
       * its associated element has changed.
       */


      var CdkObserveContent = /*#__PURE__*/function () {
        function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
          _classCallCheck(this, CdkObserveContent);

          this._contentObserver = _contentObserver;
          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          /** Event emitted for each change in the element's content. */

          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._disabled = false;
          this._currentSubscription = null;
        }
        /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         */


        _createClass(CdkObserveContent, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
            this._disabled ? this._unsubscribe() : this._subscribe();
          }
          /** Debounce interval for emitting the changes. */

        }, {
          key: "debounce",
          get: function get() {
            return this._debounce;
          },
          set: function set(value) {
            this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);

            this._subscribe();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (!this._currentSubscription && !this.disabled) {
              this._subscribe();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._unsubscribe();
          }
        }, {
          key: "_subscribe",
          value: function _subscribe() {
            var _this17 = this;

            this._unsubscribe();

            var stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
            // Consider brining it back inside the zone next time we're making breaking changes.
            // Bringing it back inside can cause things like infinite change detection loops and changed
            // after checked errors if people's code isn't handling it properly.


            this._ngZone.runOutsideAngular(function () {
              _this17._currentSubscription = (_this17.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(_this17.debounce)) : stream).subscribe(_this17.event);
            });
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var _a;

            (_a = this._currentSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }]);

        return CdkObserveContent;
      }();

      CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
        return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      CdkObserveContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkObserveContent,
        selectors: [["", "cdkObserveContent", ""]],
        inputs: {
          disabled: ["cdkObserveContentDisabled", "disabled"],
          debounce: "debounce"
        },
        outputs: {
          event: "cdkObserveContent"
        },
        exportAs: ["cdkObserveContent"]
      });

      CdkObserveContent.ctorParameters = function () {
        return [{
          type: ContentObserver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CdkObserveContent.propDecorators = {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['cdkObserveContent']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkObserveContentDisabled']
        }],
        debounce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkObserveContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkObserveContent]',
            exportAs: 'cdkObserveContent'
          }]
        }], function () {
          return [{
            type: ContentObserver
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['cdkObserveContent']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkObserveContentDisabled']
          }],
          debounce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var ObserversModule = function ObserversModule() {
        _classCallCheck(this, ObserversModule);
      };

      ObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ObserversModule
      });
      ObserversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ObserversModule_Factory(t) {
          return new (t || ObserversModule)();
        },
        providers: [MutationObserverFactory]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ObserversModule, {
          declarations: [CdkObserveContent],
          exports: [CdkObserveContent]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ObserversModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [CdkObserveContent],
            declarations: [CdkObserveContent],
            providers: [MutationObserverFactory]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=observers.js.map

      /***/

    },

    /***/
    "N1wD":
    /*!************************************************************************!*\
      !*** ./libs/shared/static-pages/src/lib/staticpages-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: StaticpagesRoutingModule */

    /***/
    function N1wD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaticpagesRoutingModule", function () {
        return StaticpagesRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_static_pages_staticpages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/static-pages/staticpages.component */
      "lV9u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: ':id',
        component: _components_static_pages_staticpages_component__WEBPACK_IMPORTED_MODULE_1__["StaticpagesComponent"],
        data: {
          markdown: true
        }
      }];

      var StaticpagesRoutingModule = function StaticpagesRoutingModule() {
        _classCallCheck(this, StaticpagesRoutingModule);
      };

      StaticpagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: StaticpagesRoutingModule
      });
      StaticpagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function StaticpagesRoutingModule_Factory(t) {
          return new (t || StaticpagesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StaticpagesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Wp6s":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js ***!
      \**********************************************************************/

    /*! exports provided: MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardModule, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage */

    /***/
    function Wp6s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCard", function () {
        return MatCard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardActions", function () {
        return MatCardActions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardAvatar", function () {
        return MatCardAvatar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardContent", function () {
        return MatCardContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardFooter", function () {
        return MatCardFooter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardHeader", function () {
        return MatCardHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardImage", function () {
        return MatCardImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardLgImage", function () {
        return MatCardLgImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardMdImage", function () {
        return MatCardMdImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardModule", function () {
        return MatCardModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardSmImage", function () {
        return MatCardSmImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardSubtitle", function () {
        return MatCardSubtitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardTitle", function () {
        return MatCardTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardTitleGroup", function () {
        return MatCardTitleGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardXlImage", function () {
        return MatCardXlImage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Content of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var _c0 = ["*", [["mat-card-footer"]]];
      var _c1 = ["*", "mat-card-footer"];
      var _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
      var _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
      var _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
      var _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];

      var MatCardContent = function MatCardContent() {
        _classCallCheck(this, MatCardContent);
      };

      MatCardContent.ɵfac = function MatCardContent_Factory(t) {
        return new (t || MatCardContent)();
      };

      MatCardContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardContent,
        selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]],
        hostAttrs: [1, "mat-card-content"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-card-content, [mat-card-content], [matCardContent]',
            host: {
              'class': 'mat-card-content'
            }
          }]
        }], null, null);
      })();
      /**
       * Title of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var MatCardTitle = function MatCardTitle() {
        _classCallCheck(this, MatCardTitle);
      };

      MatCardTitle.ɵfac = function MatCardTitle_Factory(t) {
        return new (t || MatCardTitle)();
      };

      MatCardTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardTitle,
        selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
        hostAttrs: [1, "mat-card-title"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "mat-card-title, [mat-card-title], [matCardTitle]",
            host: {
              'class': 'mat-card-title'
            }
          }]
        }], null, null);
      })();
      /**
       * Sub-title of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var MatCardSubtitle = function MatCardSubtitle() {
        _classCallCheck(this, MatCardSubtitle);
      };

      MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) {
        return new (t || MatCardSubtitle)();
      };

      MatCardSubtitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardSubtitle,
        selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
        hostAttrs: [1, "mat-card-subtitle"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]",
            host: {
              'class': 'mat-card-subtitle'
            }
          }]
        }], null, null);
      })();
      /**
       * Action section of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var MatCardActions = function MatCardActions() {
        _classCallCheck(this, MatCardActions);

        /** Position of the actions inside the card. */
        this.align = 'start';
      };

      MatCardActions.ɵfac = function MatCardActions_Factory(t) {
        return new (t || MatCardActions)();
      };

      MatCardActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardActions,
        selectors: [["mat-card-actions"]],
        hostAttrs: [1, "mat-card-actions"],
        hostVars: 2,
        hostBindings: function MatCardActions_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-card-actions-align-end", ctx.align === "end");
          }
        },
        inputs: {
          align: "align"
        },
        exportAs: ["matCardActions"]
      });
      MatCardActions.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-card-actions',
            exportAs: 'matCardActions',
            host: {
              'class': 'mat-card-actions',
              '[class.mat-card-actions-align-end]': 'align === "end"'
            }
          }]
        }], function () {
          return [];
        }, {
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Footer of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var MatCardFooter = function MatCardFooter() {
        _classCallCheck(this, MatCardFooter);
      };

      MatCardFooter.ɵfac = function MatCardFooter_Factory(t) {
        return new (t || MatCardFooter)();
      };

      MatCardFooter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardFooter,
        selectors: [["mat-card-footer"]],
        hostAttrs: [1, "mat-card-footer"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-card-footer',
            host: {
              'class': 'mat-card-footer'
            }
          }]
        }], null, null);
      })();
      /**
       * Image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardImage = function MatCardImage() {
        _classCallCheck(this, MatCardImage);
      };

      MatCardImage.ɵfac = function MatCardImage_Factory(t) {
        return new (t || MatCardImage)();
      };

      MatCardImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardImage,
        selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
        hostAttrs: [1, "mat-card-image"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-image], [matCardImage]',
            host: {
              'class': 'mat-card-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardSmImage = function MatCardSmImage() {
        _classCallCheck(this, MatCardSmImage);
      };

      MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) {
        return new (t || MatCardSmImage)();
      };

      MatCardSmImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardSmImage,
        selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
        hostAttrs: [1, "mat-card-sm-image"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-sm-image], [matCardImageSmall]',
            host: {
              'class': 'mat-card-sm-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardMdImage = function MatCardMdImage() {
        _classCallCheck(this, MatCardMdImage);
      };

      MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) {
        return new (t || MatCardMdImage)();
      };

      MatCardMdImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardMdImage,
        selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
        hostAttrs: [1, "mat-card-md-image"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-md-image], [matCardImageMedium]',
            host: {
              'class': 'mat-card-md-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardLgImage = function MatCardLgImage() {
        _classCallCheck(this, MatCardLgImage);
      };

      MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) {
        return new (t || MatCardLgImage)();
      };

      MatCardLgImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardLgImage,
        selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
        hostAttrs: [1, "mat-card-lg-image"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-lg-image], [matCardImageLarge]',
            host: {
              'class': 'mat-card-lg-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Large image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardXlImage = function MatCardXlImage() {
        _classCallCheck(this, MatCardXlImage);
      };

      MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) {
        return new (t || MatCardXlImage)();
      };

      MatCardXlImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardXlImage,
        selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
        hostAttrs: [1, "mat-card-xl-image"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-xl-image], [matCardImageXLarge]',
            host: {
              'class': 'mat-card-xl-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Avatar image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardAvatar = function MatCardAvatar() {
        _classCallCheck(this, MatCardAvatar);
      };

      MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) {
        return new (t || MatCardAvatar)();
      };

      MatCardAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardAvatar,
        selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
        hostAttrs: [1, "mat-card-avatar"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-avatar], [matCardAvatar]',
            host: {
              'class': 'mat-card-avatar'
            }
          }]
        }], null, null);
      })();
      /**
       * A basic content container component that adds the styles of a Material design card.
       *
       * While this component can be used alone, it also provides a number
       * of preset styles for common card sections, including:
       * - mat-card-title
       * - mat-card-subtitle
       * - mat-card-content
       * - mat-card-actions
       * - mat-card-footer
       */


      var MatCard = // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
      function MatCard(_animationMode) {
        _classCallCheck(this, MatCard);

        this._animationMode = _animationMode;
      };

      MatCard.ɵfac = function MatCard_Factory(t) {
        return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatCard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCard,
        selectors: [["mat-card"]],
        hostAttrs: [1, "mat-card", "mat-focus-indicator"],
        hostVars: 2,
        hostBindings: function MatCard_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        exportAs: ["matCard"],
        ngContentSelectors: _c1,
        decls: 2,
        vars: 0,
        template: function MatCard_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
          }
        },
        styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatCard.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-card',
            exportAs: 'matCard',
            template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
              'class': 'mat-card mat-focus-indicator',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"]
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, null);
      })();
      /**
       * Component intended to be used within the `<mat-card>` component. It adds styles for a
       * preset header section (i.e. a title, subtitle, and avatar layout).
       * @docs-private
       */


      var MatCardHeader = function MatCardHeader() {
        _classCallCheck(this, MatCardHeader);
      };

      MatCardHeader.ɵfac = function MatCardHeader_Factory(t) {
        return new (t || MatCardHeader)();
      };

      MatCardHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCardHeader,
        selectors: [["mat-card-header"]],
        hostAttrs: [1, "mat-card-header"],
        ngContentSelectors: _c3,
        decls: 4,
        vars: 0,
        consts: [[1, "mat-card-header-text"]],
        template: function MatCardHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-card-header',
            template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
              'class': 'mat-card-header'
            }
          }]
        }], null, null);
      })();
      /**
       * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
       * layout that groups an image with a title section.
       * @docs-private
       */


      var MatCardTitleGroup = function MatCardTitleGroup() {
        _classCallCheck(this, MatCardTitleGroup);
      };

      MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) {
        return new (t || MatCardTitleGroup)();
      };

      MatCardTitleGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCardTitleGroup,
        selectors: [["mat-card-title-group"]],
        hostAttrs: [1, "mat-card-title-group"],
        ngContentSelectors: _c5,
        decls: 4,
        vars: 0,
        template: function MatCardTitleGroup_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-card-title-group',
            template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
              'class': 'mat-card-title-group'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatCardModule = function MatCardModule() {
        _classCallCheck(this, MatCardModule);
      };

      MatCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatCardModule
      });
      MatCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatCardModule_Factory(t) {
          return new (t || MatCardModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCardModule, {
          declarations: function declarations() {
            return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=card.js.map

      /***/

    },

    /***/
    "cH1L":
    /*!*****************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js ***!
      \*****************************************************************/

    /*! exports provided: BidiModule, DIR_DOCUMENT, Dir, Directionality, ɵangular_material_src_cdk_bidi_bidi_a */

    /***/
    function cH1L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BidiModule", function () {
        return BidiModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function () {
        return DIR_DOCUMENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Dir", function () {
        return Dir;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Directionality", function () {
        return Directionality;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_bidi_bidi_a", function () {
        return DIR_DOCUMENT_FACTORY;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to inject the document into Directionality.
       * This is used so that the value can be faked in tests.
       *
       * We can't use the real document in tests because changing the real `dir` causes geometry-based
       * tests in Safari to fail.
       *
       * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
       * themselves use things like `querySelector` in test code.
       *
       * This token is defined in a separate file from Directionality as a workaround for
       * https://github.com/angular/angular/issues/22559
       *
       * @docs-private
       */


      var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-dir-doc', {
        providedIn: 'root',
        factory: DIR_DOCUMENT_FACTORY
      });
      /** @docs-private */

      function DIR_DOCUMENT_FACTORY() {
        return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The directionality (LTR / RTL) context for the application (or a subtree of it).
       * Exposes the current direction and a stream of direction changes.
       */


      var Directionality = /*#__PURE__*/function () {
        function Directionality(_document) {
          _classCallCheck(this, Directionality);

          /** The current 'ltr' or 'rtl' value. */
          this.value = 'ltr';
          /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            var bodyDir = _document.body ? _document.body.dir : null;
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            var value = bodyDir || htmlDir;
            this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
          }
        }

        _createClass(Directionality, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.change.complete();
          }
        }]);

        return Directionality;
      }();

      Directionality.ɵfac = function Directionality_Factory(t) {
        return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
      };

      Directionality.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function Directionality_Factory() {
          return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DIR_DOCUMENT, 8));
        },
        token: Directionality,
        providedIn: "root"
      });

      Directionality.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [DIR_DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [DIR_DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive to listen for changes of direction of part of the DOM.
       *
       * Provides itself as Directionality such that descendant directives only need to ever inject
       * Directionality to get the closest direction.
       */


      var Dir = /*#__PURE__*/function () {
        function Dir() {
          _classCallCheck(this, Dir);

          /** Normalized direction that accounts for invalid/unsupported values. */
          this._dir = 'ltr';
          /** Whether the `value` has been set to its initial value. */

          this._isInitialized = false;
          /** Event emitted when the direction changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /** @docs-private */


        _createClass(Dir, [{
          key: "dir",
          get: function get() {
            return this._dir;
          },
          set: function set(value) {
            var old = this._dir;
            var normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

            if (old !== this._dir && this._isInitialized) {
              this.change.emit(this._dir);
            }
          }
          /** Current layout direction of the element. */

        }, {
          key: "value",
          get: function get() {
            return this.dir;
          }
          /** Initialize once default value has been set. */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._isInitialized = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.change.complete();
          }
        }]);

        return Dir;
      }();

      Dir.ɵfac = function Dir_Factory(t) {
        return new (t || Dir)();
      };

      Dir.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: Dir,
        selectors: [["", "dir", ""]],
        hostVars: 1,
        hostBindings: function Dir_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
          }
        },
        inputs: {
          dir: "dir"
        },
        outputs: {
          change: "dirChange"
        },
        exportAs: ["dir"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: Directionality,
          useExisting: Dir
        }])]
      });
      Dir.propDecorators = {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['dirChange']
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[dir]',
            providers: [{
              provide: Directionality,
              useExisting: Dir
            }],
            host: {
              '[attr.dir]': '_rawDir'
            },
            exportAs: 'dir'
          }]
        }], function () {
          return [];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['dirChange']
          }],
          dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var BidiModule = function BidiModule() {
        _classCallCheck(this, BidiModule);
      };

      BidiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BidiModule
      });
      BidiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BidiModule_Factory(t) {
          return new (t || BidiModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BidiModule, {
          declarations: [Dir],
          exports: [Dir]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [Dir],
            declarations: [Dir]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=bidi.js.map

      /***/

    },

    /***/
    "lV9u":
    /*!*******************************************************************************************!*\
      !*** ./libs/shared/static-pages/src/lib/components/static-pages/staticpages.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: StaticpagesComponent */

    /***/
    function lV9u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaticpagesComponent", function () {
        return StaticpagesComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @scullyio/ng-lib */
      "sbAP");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var StaticpagesComponent = function StaticpagesComponent(router, scully) {
        var _this18 = this;

        _classCallCheck(this, StaticpagesComponent);

        this.router = router;
        this.scully = scully;
        this.current$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_) {
          return _this18.scully.getCurrent();
        }));
      };

      StaticpagesComponent.ɵfac = function StaticpagesComponent_Factory(t) {
        return new (t || StaticpagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyRoutesService"]));
      };

      StaticpagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: StaticpagesComponent,
        selectors: [["scheibentoenung-schmieder-staticpages"]],
        decls: 19,
        vars: 3,
        consts: [[1, "section", "profile-content"], [1, "container"], [1, "row"], [1, "col-md-12", "ml-auto", "mr-auto"]],
        template: function StaticpagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "scully-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n");
          }

          if (rf & 2) {
            var tmp_0_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 1, ctx.current$)) == null ? null : tmp_0_0.title);
          }
        },
        directives: [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__["ScullyContentComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aWNwYWdlcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "sbAP":
    /*!********************************************************************************!*\
      !*** ./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js ***!
      \********************************************************************************/

    /*! exports provided: IdleMonitorService, ScullyContentComponent, ScullyContentModule, ScullyLibModule, ScullyRoutesService, TransferStateService, dropEndingSlash, isScullyGenerated, isScullyRunning, ɵb */

    /***/
    function sbAP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdleMonitorService", function () {
        return IdleMonitorService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScullyContentComponent", function () {
        return ScullyContentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScullyContentModule", function () {
        return ScullyContentModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScullyLibModule", function () {
        return ScullyLibModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScullyRoutesService", function () {
        return ScullyRoutesService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransferStateService", function () {
        return TransferStateService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dropEndingSlash", function () {
        return dropEndingSlash;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isScullyGenerated", function () {
        return isScullyGenerated;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isScullyRunning", function () {
        return isScullyRunning;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return SCULLY_LIB_CONFIG;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "DEKV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/config/scully-config.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      var _c0 = ["*"];

      function ScullyLibConfig() {}

      if (false) {}
      /** @type {?} */


      var ScullyDefaultSettings = {
        useTransferState: true,
        alwaysMonitor: false,
        manualIdle: false,
        baseURIForScullyContent: 'http://localhost:1668'
      };
      /** @type {?} */

      var SCULLY_LIB_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('scullyLibConfig', {
        factory:
        /**
        * @return {?}
        */
        function factory() {
          return ScullyDefaultSettings;
        }
      });
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/utils/basePathOnly.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Take a string, preferably resembling an URL, take out the search params, the anchors, and the ending slash
       * \@param str
       * @type {?}
       */

      var basePathOnly =
      /**
      * @param {?} str
      * @return {?}
      */
      function basePathOnly(str) {
        if (str.includes('#')) {
          str = str.split('#')[0];
        }

        if (str.includes('?')) {
          str = str.split('?')[0];
        }
        /** @type {?} */


        var cleanedUpVersion = str.endsWith('/') ? str.slice(0, -1) : str;
        return cleanedUpVersion;
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/utils/fetchHttp.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @template T
       * @param {?} url
       * @param {?=} responseType
       * @return {?}
       */


      function fetchHttp(url) {
        var responseType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
        return new Promise(
        /**
        * @param {?} resolve
        * @param {?} reject
        * @return {?}
        */
        function (resolve, reject) {
          /** @type {?} */
          var xhr = new XMLHttpRequest();
          xhr.responseType = responseType;
          xhr.addEventListener('load',
          /**
          * @param {?} ev
          * @return {?}
          */
          function (ev) {
            if (xhr.status !== 200) {
              return reject(xhr);
            }

            resolve(xhr.response);
          });
          xhr.addEventListener('error',
          /**
          * @param {...?} err
          * @return {?}
          */
          function () {
            for (var _len8 = arguments.length, err = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              err[_key8] = arguments[_key8];
            }

            return reject(err);
          });
          xhr.open('get', url, true);
          xhr.send();
        });
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/utils/isScully.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // tslint:disable: no-string-literal

      /** @type {?} */


      var isScullyRunning =
      /**
      * @return {?}
      */
      function isScullyRunning() {
        return window && window['ScullyIO'] === 'running';
      };
      /** @type {?} */


      var isScullyGenerated =
      /**
      * @return {?}
      */
      function isScullyGenerated() {
        return window && window['ScullyIO'] === 'generated';
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/utils/merge-paths.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} base
       * @param {?} path
       * @return {?}
       */


      function mergePaths(base, path) {
        if (base.endsWith('/') && path.startsWith('/')) {
          return "".concat(base).concat(path.substr(1));
        }

        if (!base.endsWith('/') && !path.startsWith('/')) {
          return "".concat(base, "/").concat(path);
        }

        return "".concat(base).concat(path);
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/transfer-state/transfer-state.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var SCULLY_SCRIPT_ID = "ScullyIO-transfer-state";
      /** @type {?} */

      var SCULLY_STATE_START = "/** ___SCULLY_STATE_START___ */";
      /** @type {?} */

      var SCULLY_STATE_END = "/** ___SCULLY_STATE_END___ */";
      /** @type {?} */

      var initialStateDone = '__done__with__Initial__navigation__';
      /**
       * @record
       */

      function State() {} // Adding this dynamic comment to suppress ngc error around Document as a DI token.
      // https://github.com/angular/angular/issues/20351#issuecomment-344009887

      /**
       * \@dynamic
       */


      var TransferStateService = /*#__PURE__*/function () {
        /**
         * @param {?} document
         * @param {?} router
         */
        function TransferStateService(document, router) {
          var _this19 = this;

          _classCallCheck(this, TransferStateService);

          this.document = document;
          this.router = router;
          /**
           * parse from index, or load from data.json, according to scullConfig setting
           */

          this.inlineOnly = false;
          /**
           * set the currentBase to something that it can never be
           */

          this.currentBaseUrl = '//';
          /**
           * subject to fire off incoming states
           */

          this.stateBS = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
          this.state$ = this.stateBS.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state !== undefined;
          })); // emit the next url when routing is complete

          this.nextUrl = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            if (basePathOnly(_this19.initialUrl) === basePathOnly(e.url)) {
              /** don't kick off on initial load to prevent flicker */
              _this19.initialUrl = initialStateDone;
              return rxjs__WEBPACK_IMPORTED_MODULE_3__["NEVER"];
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(e);
          }),
          /** reset the state, so new components will never get stale data */
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this19.stateBS.next(undefined);
          }),
          /** prevent emitting before navigation to _this_ URL is done. */
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return _this19.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} ev
            * @return {?}
            */
            function (ev) {
              return ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && ev.url === e.url;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])());
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} ev
          * @return {?}
          */
          function (ev) {
            return basePathOnly(ev.urlAfterRedirects || ev.url);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        }
        /**
         * @return {?}
         */


        _createClass(TransferStateService, [{
          key: "startMonitoring",
          value: function startMonitoring() {
            if (window && window['ScullyIO-injected'] && window['ScullyIO-injected'].inlineStateOnly) {
              this.inlineOnly = true;
            }

            this.setupEnvForTransferState();
            this.setupStartNavMonitoring();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "setupEnvForTransferState",
          value: function setupEnvForTransferState() {
            if (isScullyRunning()) {
              this.injectScript(); // In Scully puppeteer

              /** @type {?} */

              var exposed = window['ScullyIO-exposed'] || {};

              if (exposed.transferState) {
                this.stateBS.next(exposed.transferState);
                this.saveState(exposed.transferState);
              }
            } else if (isScullyGenerated()) {
              // On the client AFTER scully rendered it
              this.initialUrl = window.location.pathname || '__no_NO_no__';
              this.initialUrl = this.initialUrl !== '/' && this.initialUrl.endsWith('/') ? this.initialUrl.slice(0, -1) : this.initialUrl;
              /** set the initial state */

              this.stateBS.next(window && window[SCULLY_SCRIPT_ID] || {});
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "injectScript",
          value: function injectScript() {
            this.script = this.document.createElement('script');
            this.script.setAttribute('id', SCULLY_SCRIPT_ID);
            /** @type {?} */

            var last = document.body.lastChild;

            while (last.previousSibling.nodeName === 'SCRIPT') {
              last =
              /** @type {?} */
              last.previousSibling;
            }

            document.body.insertBefore(this.script, last);
          }
          /**
           * Getstate will return an observable that containes the data.
           * It does so right after the navigation for the page has finished.
           * please note, this works SYNC on initial route, preventing a flash of content.
           * @template T
           * @param {?} name The name of the state to
           * @return {?}
           */

        }, {
          key: "getState",
          value: function getState(name) {
            /** start of the fetch for the current active route. */
            this.fetchTransferState();
            return this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])(name) // tap((data) => console.log('tss', data))
            );
          }
          /**
           * Read the current state, and see if it has an value for the name.
           * (note the value it containes still can be undefined!)
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "stateHasKey",
          value: function stateHasKey(name) {
            return this.stateBS.value && this.stateBS.value.hasOwnProperty(name);
          }
          /**
           * Read the current state, and see if it has an value for the name.
           * ys also if there is actually an value in the state.
           * @param {?} name
           * @return {?}
           */

        }, {
          key: "stateKeyHasValue",
          value: function stateKeyHasValue(name) {
            return this.stateBS.value && this.stateBS.value.hasOwnProperty(name) && this.stateBS.value[name] != null;
          }
          /**
           * SetState will update the script in the generated page with data added.
           * @template T
           * @param {?} name
           * @param {?} val
           * @return {?}
           */

        }, {
          key: "setState",
          value: function setState(name, val) {
            /** @type {?} */
            var newState = Object.assign(Object.assign({}, this.stateBS.value), _defineProperty({}, name, val));
            this.stateBS.next(newState);
            this.saveState(newState);
          }
          /**
           * @private
           * @param {?} newState
           * @return {?}
           */

        }, {
          key: "saveState",
          value: function saveState(newState) {
            if (isScullyRunning()) {
              this.script.textContent = "{window['".concat(SCULLY_SCRIPT_ID, "']=_u(`").concat(SCULLY_STATE_START).concat(escapeHtml(JSON.stringify(newState))).concat(SCULLY_STATE_END, "`);function _u(t) {t=t.split('").concat(SCULLY_STATE_START, "')[1].split('").concat(SCULLY_STATE_END, "')[0];const u={'_~b~': \"", '`', "\",'_~q~': \"'\",'_~s~': '/','_~l~': '<','_~g~': '>'};return JSON.parse(t.replace(/\\'/g,`\\\\\"`).replace(/_~[^]~/g, (s) => u[s]).replace(/\\n/g,`\\\\n`).replace(/\\r/g,`\\\\r`));}}");
            }
          }
          /**
           * starts monitoring the router, and keep the url from the last completed navigation handy.
           * @private
           * @return {?}
           */

        }, {
          key: "setupStartNavMonitoring",
          value: function setupStartNavMonitoring() {
            if (!isScullyGenerated()) {
              return;
            }
            /** start monitoring the routes */


            this.nextUrl.subscribe();
          }
          /**
           * Wraps an observable into scully's transfer state. If data for the provided `name` is
           * available in the state, it gets returned. Otherwise, the `originalState` observable will
           * be returned.
           *
           * On subsequent calls, the data in the state will always be returned. The `originalState` will
           * be returned only once.
           *
           * This is a convenience method which does not require you to use `getState`/`setState` manually.
           *
           * @template T
           * @param {?} name state key
           * @param {?} originalState an observable which yields the desired data
           * @return {?}
           */

        }, {
          key: "useScullyTransferState",
          value: function useScullyTransferState(name, originalState) {
            var _this20 = this;

            if (isScullyGenerated()) {
              return this.getState(name);
            }

            return originalState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
            /**
            * @param {?} state
            * @return {?}
            */
            function (state) {
              return _this20.setState(name, state);
            }));
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "fetchTransferState",
          value: function fetchTransferState() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this21 = this;

              var base, currentUrl, baseUrl;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      /**
                       * helper to read the part before the first slash (ignores leading slash)
                       * @type {?}
                       */
                      base =
                      /**
                      * @param {?} url
                      * @return {?}
                      */
                      function base(url) {
                        return url.split('/').filter(
                        /**
                        * @param {?} part
                        * @return {?}
                        */
                        function (part) {
                          return part.trim() !== '';
                        })[0];
                      };
                      /** put this in the next event cycle so the correct route can be read */


                      _context.next = 3;
                      return new Promise(
                      /**
                      * @param {?} r
                      * @return {?}
                      */
                      function (r) {
                        return setTimeout(r, 0);
                      });

                    case 3:
                      _context.next = 5;
                      return this.nextUrl.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise();

                    case 5:
                      currentUrl = _context.sent;

                      /** @type {?} */
                      baseUrl = base(currentUrl);

                      if (!(this.currentBaseUrl === baseUrl)) {
                        _context.next = 9;
                        break;
                      }

                      return _context.abrupt("return");

                    case 9:
                      /** keep the baseUrl for later reference */
                      this.currentBaseUrl = baseUrl;
                      this.nextUrl.pipe(
                      /** keep updating till we move to another route */
                      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(
                      /**
                      * @param {?} url
                      * @return {?}
                      */
                      function (url) {
                        return base(url) === _this21.currentBaseUrl;
                      }), // Get the next route's data from the the index or data file
                      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(
                      /**
                      * @param {?} url
                      * @return {?}
                      */
                      function (url) {
                        return _this21.inlineOnly ? _this21.readFromIndex(url) : _this21.readFromJson(url);
                      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(
                      /**
                      * @param {?} e
                      * @return {?}
                      */
                      function (e) {
                        // TODO: come up with better error text.

                        /** the developer needs to know, but its not fatal, so just return an empty state */
                        console.warn('Error while loading of parsing Scully state:', e);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
                      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
                      /**
                      * @param {?} newState
                      * @return {?}
                      */
                      function (newState) {
                        /** and activate the state in the components. on any error it will be empty */
                        _this21.stateBS.next(newState);
                      })).subscribe({
                        /**
                         * when completes (different URL)
                         */
                        complete:
                        /**
                        * @return {?}
                        */
                        function complete() {
                          /** reset the currentBaseUrl */
                          _this21.currentBaseUrl = '//';
                        }
                      });

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /**
           * @private
           * @param {?} url
           * @return {?}
           */

        }, {
          key: "readFromJson",
          value: function readFromJson(url) {
            return fetchHttp(dropPreSlash(mergePaths(url, '/data.json')));
          }
          /**
           * @private
           * @param {?} url
           * @return {?}
           */

        }, {
          key: "readFromIndex",
          value: function readFromIndex(url) {
            return fetchHttp(dropPreSlash(mergePaths(url, '/index.html')), 'text').then(
            /**
            * @param {?} html
            * @return {?}
            */
            function (html) {
              /** @type {?} */
              var newStateStr = html.split(SCULLY_STATE_START)[1].split(SCULLY_STATE_END)[0];
              return JSON.parse(unescapeHtml(newStateStr));
            });
          }
        }]);

        return TransferStateService;
      }();

      TransferStateService.ɵfac = function TransferStateService_Factory(t) {
        return new (t || TransferStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };
      /** @nocollapse */


      TransferStateService.ctorParameters = function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };
      /** @nocollapse */


      TransferStateService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function TransferStateService_Factory() {
          return new TransferStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
        },
        token: TransferStateService,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TransferStateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @param {?} string
       * @return {?}
       */


      function dropPreSlash(string) {
        return string.startsWith('/') ? string.slice(1) : string;
      }
      /**
       * we need to escape our HTML to prevent XXS,
       * It needs to be custom, because the content can already contain html-escaped sequences
       *
       * @param {?} text
       * @return {?}
       */


      function escapeHtml(text) {
        /** @type {?} */
        var escapedText = {
          "'": '_~q~',
          '`': '_~b~',
          '/': '_~s~',
          '<': '_~l~',
          '>': '_~g~'
        };
        return text
        /** escape the json */
        .replace(/[`'<>\/]/g,
        /**
        * @param {?} s
        * @return {?}
        */
        function (s) {
          return escapedText[s];
        })
        /** replace escaped double-quotes with single */
        .replace(/\\\"/g, "\\'");
      }
      /**
       * Unescape our custom escaped texts
       * @param {?} text
       * @return {?}
       */


      function unescapeHtml(text) {
        /** @type {?} */
        var unescapedText = {
          '_~q~': "'",
          '_~b~': '`',
          '_~s~': '/',
          '_~l~': '<',
          '_~g~': '>'
        };
        return text
        /** put back escaped double quotes to make valid json again */
        .replace(/\\'/g, "\\\"")
        /** replace the custom escapes */
        .replace(/_~[^]~/g,
        /**
        * @param {?} s
        * @return {?}
        */
        function (s) {
          return unescapedText[s];
        })
        /** restore newlines+cr */
        .replace(/\n/g, '/n').replace(/\r/g, '/r');
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/idleMonitor/idle-monitor.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function LocalState() {}

      if (false) {} // if (window) {
      //   window.addEventListener('AngularReady', ev => {
      //     console.log('appReady fired', ev);
      //   });
      // }


      var IdleMonitorService = /*#__PURE__*/function () {
        /**
         * @param {?} zone
         * @param {?} router
         * @param {?} conf
         * @param {?} tss
         */
        function IdleMonitorService(zone, router, conf, tss) {
          var _this22 = this;

          _classCallCheck(this, IdleMonitorService);

          this.zone = zone;
          this.router = router;
          /**
           * store the 'landing' url so we can skip it in idle-check.
           */

          this.initialUrl = dropEndingSlash(window && window.location.pathname) || '';
          this.imState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            idle: false,
            timeOut: 5 * 1000 // 5 seconds timeout as default

          });
          this.idle$ = this.imState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('idle'));
          this.initApp = new Event('AngularInitialized', {
            bubbles: true,
            cancelable: false
          });
          this.appReady = new Event('AngularReady', {
            bubbles: true,
            cancelable: false
          });
          this.appTimeout = new Event('AngularTimeout', {
            bubbles: true,
            cancelable: false
          });
          /** provide the default for missing conf paramter */

          this.scullyLibConfig = Object.assign({}, ScullyDefaultSettings, conf);
          /** @type {?} */

          var exposed = window['ScullyIO-exposed'] || {};
          /** @type {?} */

          var manualIdle = !!exposed.manualIdle;

          if (!this.scullyLibConfig.manualIdle && window && (this.scullyLibConfig.alwaysMonitor || isScullyRunning())) {
            window.dispatchEvent(this.initApp);
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} ev
            * @return {?}
            */
            function (ev) {
              return ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && ev.urlAfterRedirects !== undefined;
            }),
            /** don't check the page that has this setting. event is only importand on page load */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} ev
            * @return {?}
            */
            function (ev) {
              return manualIdle ? ev.urlAfterRedirects !== _this22.initialUrl : true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
            /**
            * @return {?}
            */
            function () {
              return _this22.zoneIdleCheck();
            })).subscribe();
          }

          if (this.scullyLibConfig.manualIdle) {
            /** we still need the init event. */
            window.dispatchEvent(this.initApp);
          }

          if (this.scullyLibConfig.useTransferState) {
            /** don't start monitoring if people don't use the transferState */
            tss.startMonitoring();
          }
        }
        /**
         * @return {?}
         */


        _createClass(IdleMonitorService, [{
          key: "fireManualMyAppReadyEvent",
          value: function fireManualMyAppReadyEvent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", window.dispatchEvent(this.appReady));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           * @return {?}
           */

        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", this.idle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise());

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "zoneIdleCheck",
          value: function zoneIdleCheck() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this23 = this;

              var taskTrackingZone;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(Zone === undefined)) {
                        _context4.next = 2;
                        break;
                      }

                      return _context4.abrupt("return", this.simpleTimeout());

                    case 2:
                      /** @type {?} */
                      taskTrackingZone = Zone.current.get('TaskTrackingZone');

                      if (!(taskTrackingZone === undefined)) {
                        _context4.next = 5;
                        break;
                      }

                      return _context4.abrupt("return", this.simpleTimeout());

                    case 5:
                      if (!this.imState.value.idle) {
                        _context4.next = 8;
                        break;
                      }

                      _context4.next = 8;
                      return this.setState('idle', false);

                    case 8:
                      /** run the actual check for 'idle' outsides zone, otherwise it will never come to an end. */
                      this.zone.runOutsideAngular(
                      /**
                      * @return {?}
                      */
                      function () {
                        /** @type {?} */
                        var tCancel;
                        /** @type {?} */

                        var count = 0;
                        /** @type {?} */

                        var startTime = Date.now();
                        /** @type {?} */

                        var monitor =
                        /**
                        * @return {?}
                        */
                        function monitor() {
                          clearTimeout(tCancel); // console.table(taskTrackingZone.macroTasks);

                          if (Date.now() - startTime > 30 * 1000) {
                            /** bail out after 30 seconds. */
                            window.dispatchEvent(_this23.appTimeout);
                            return;
                          }

                          if (taskTrackingZone.macroTasks.length > 0 && taskTrackingZone.macroTasks.find(
                          /**
                          * @param {?} z
                          * @return {?}
                          */
                          function (z) {
                            return z.source.includes('XMLHttpRequest');
                          }) !== undefined || count < 1 // make sure it runs at least once!
                          ) {
                              tCancel = setTimeout(
                              /**
                              * @return {?}
                              */
                              function () {
                                count += 1;
                                monitor();
                              }, 50);
                              return;
                            }

                          _this23.zone.run(
                          /**
                          * @return {?}
                          */
                          function () {
                            /** run this inside the zone, and give the app 250Ms to wrap up, before scraping starts */
                            setTimeout(
                            /**
                            * @return {?}
                            */
                            function () {
                              window.dispatchEvent(_this23.appReady);

                              _this23.setState('idle', true);
                            }, 250);
                          });
                        };

                        monitor();
                      });

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "simpleTimeout",
          value: function simpleTimeout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this24 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      /** zone not available, use a timeout instead. */
                      console.warn('Scully is using timeouts, add the needed polyfills instead!');
                      _context5.next = 3;
                      return new Promise(
                      /**
                      * @param {?} r
                      * @return {?}
                      */
                      function (r) {
                        return setTimeout(r, _this24.imState.value.timeOut);
                      });

                    case 3:
                      window.dispatchEvent(this.appReady);

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
          /**
           * @param {?} milliseconds
           * @return {?}
           */

        }, {
          key: "setPupeteerTimeoutValue",
          value: function setPupeteerTimeoutValue(milliseconds) {
            this.imState.next(Object.assign(Object.assign({}, this.imState.value), {
              timeOut: milliseconds
            }));
          }
          /**
           * @private
           * @param {?} key
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setState",
          value: function setState(key, value) {
            this.imState.next(Object.assign(Object.assign({}, this.imState.value), _defineProperty({}, key, value)));
          }
        }]);

        return IdleMonitorService;
      }();

      IdleMonitorService.ɵfac = function IdleMonitorService_Factory(t) {
        return new (t || IdleMonitorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](SCULLY_LIB_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TransferStateService));
      };
      /** @nocollapse */


      IdleMonitorService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [SCULLY_LIB_CONFIG]
          }]
        }, {
          type: TransferStateService
        }];
      };
      /** @nocollapse */


      IdleMonitorService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function IdleMonitorService_Factory() {
          return new IdleMonitorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(SCULLY_LIB_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(TransferStateService));
        },
        token: IdleMonitorService,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IdleMonitorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [SCULLY_LIB_CONFIG]
            }]
          }, {
            type: TransferStateService
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @param {?} str
       * @return {?}
       */


      function dropEndingSlash(str) {
        return str.endsWith('/') ? str.slice(0, -1) : str;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/route-service/scully-routes.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function ScullyRoute() {}

      if (false) {}

      var ScullyRoutesService = /*#__PURE__*/function () {
        /**
         * @param {?} router
         */
        function ScullyRoutesService(router) {
          _classCallCheck(this, ScullyRoutesService);

          this.router = router;
          this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
          /**
           * An observable with all routes, published and unpublished alike
           */

          this.allRoutes$ = this.refresh.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return fetchHttp('assets/scully-routes.json');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(
          /**
          * @return {?}
          */
          function () {
            console.warn('Scully routes file not found, are you running the Scully generated version of your site?');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(
            /** @type {?} */
            []);
          }),
          /** filter out all non-array results */
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} routes
          * @return {?}
          */
          function (routes) {
            return Array.isArray(routes);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.cleanDups), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])({
            refCount: false,
            bufferSize: 1
          }));
          /**
           * An observable with available routes (all published routes)
           */

          this.available$ = this.allRoutes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} list
          * @return {?}
          */
          function (list) {
            return list.filter(
            /**
            * @param {?} r
            * @return {?}
            */
            function (r) {
              return r.hasOwnProperty('published') ? r.published !== false : true;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])({
            refCount: false,
            bufferSize: 1
          }));
          /**
           * an observable with all unpublished routes
           */

          this.unPublished$ = this.allRoutes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} list
          * @return {?}
          */
          function (list) {
            return list.filter(
            /**
            * @param {?} r
            * @return {?}
            */
            function (r) {
              return r.hasOwnProperty('published') ? r.published === false : false;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])({
            refCount: false,
            bufferSize: 1
          }));
          /**
           * An observable with the top-level off all published routes.
           * (in an urls it would be `http://www.sample.org/__thisPart__/subroutes`)
           */

          this.topLevel$ = this.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} routes
          * @return {?}
          */
          function (routes) {
            return routes.filter(
            /**
            * @param {?} r
            * @return {?}
            */
            function (r) {
              return !r.route.slice(1).includes('/');
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])({
            refCount: false,
            bufferSize: 1
          }));
          /** kick off first cycle */

          this.reload();
        }
        /**
         * returns an observable that returns the route information for the
         * route currently selected. subscribes to route-events to update when needed
         * @return {?}
         */


        _createClass(ScullyRoutesService, [{
          key: "getCurrent",
          value: function getCurrent() {
            var _this25 = this;

            if (!location) {
              /** probably not in a browser, no current location available */
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
            }
            /** fire off at start, and when navigation is done. */


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"](0, '', '')), this.router.events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              return _this25.available$;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} list
            * @return {?}
            */
            function (list) {
              /** @type {?} */
              var curLocation = basePathOnly(encodeURI(location.pathname).trim());
              return list.find(
              /**
              * @param {?} r
              * @return {?}
              */
              function (r) {
                return curLocation === basePathOnly(r.route.trim()) || r.slugs && Array.isArray(r.slugs) && r.slugs.find(
                /**
                * @param {?} slug
                * @return {?}
                */
                function (slug) {
                  return curLocation.endsWith(basePathOnly(slug.trim()));
                });
              });
            }));
          }
          /**
           * internal, as routes can have multiple slugs, and so occur multiple times
           * this util function collapses all slugs back into 1 route.
           * @private
           * @param {?} routes
           * @return {?}
           */

        }, {
          key: "cleanDups",
          value: function cleanDups(routes) {
            /** @type {?} */
            var m = new Map();
            /** check for duplicates by comparing all, include route in comparison if its the only thing, or the only thing with only the tile  */

            routes.forEach(
            /**
            * @param {?} r
            * @return {?}
            */
            function (r) {
              return m.set(JSON.stringify(Object.assign(Object.assign({}, r), {
                route: hasOtherprops(r) ? '' : r.route
              })), r);
            });
            return _toConsumableArray(m.values());
          }
          /**
           * an utility that will force a reload of the `scully-routes.json` file
           * @return {?}
           */

        }, {
          key: "reload",
          value: function reload() {
            this.refresh.next();
          }
        }]);

        return ScullyRoutesService;
      }();

      ScullyRoutesService.ɵfac = function ScullyRoutesService_Factory(t) {
        return new (t || ScullyRoutesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };
      /** @nocollapse */


      ScullyRoutesService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };
      /** @nocollapse */


      ScullyRoutesService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ScullyRoutesService_Factory() {
          return new ScullyRoutesService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
        },
        token: ScullyRoutesService,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScullyRoutesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @param {?} obj
       * @return {?}
       */


      function hasOtherprops(obj) {
        /** @type {?} */
        var keys = Object.keys(obj);

        if (keys.length === 1 && keys.includes('route')) {
          return false;
        }

        if (keys.length === 2 && keys.includes('route') && keys.includes('title')) {
          return false;
        }

        return true;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/utils/findComments.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Returns an array of nodes coninting all the html comments in the element.
       * When a searchText is given this is narrowed down to only comments that contian this text
       * @param {?} rootElem Element to search nto
       * @param {?=} searchText optional string that needs to be in a HTML comment
       * @return {?}
       */


      function findComments(rootElem, searchText) {
        /** @type {?} */
        var comments = []; // Fourth argument, which is actually obsolete according to the DOM4 standard, seems required in IE 11

        /** @type {?} */

        var iterator = document.createNodeIterator(rootElem, NodeFilter.SHOW_COMMENT, {
          acceptNode:
          /**
          * @param {?} node
          * @return {?}
          */
          function acceptNode(node) {
            // Logic to determine whether to accept, reject or skip node
            // In this case, only accept nodes that have content
            // that is containing our searchText, by rejecting any other nodes.
            if (searchText && node.nodeValue && !node.nodeValue.includes(searchText)) {
              return NodeFilter.FILTER_REJECT;
            }

            return NodeFilter.FILTER_ACCEPT;
          }
        } // , false // IE-11 support requires this parameter.
        );
        /** @type {?} */

        var curNode; // tslint:disable-next-line: no-conditional-assignment

        while (curNode = iterator.nextNode()) {
          comments.push(curNode);
        }

        return comments;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/scully-content/scully-content.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */


      function ScullyContent() {}

      if (false) {}
      /**
       * this is needed, because otherwise the CLI borks while building
       * @type {?}
       */


      var scullyBegin = '<!--scullyContent-begin-->';
      /** @type {?} */

      var scullyEnd = '<!--scullyContent-end-->';
      /**
       * use the module's closure to keep a system-wide check for the last handled URL.
       * @type {?}
       */

      var lastHandled;

      var ScullyContentComponent = /*#__PURE__*/function () {
        /**
         * @param {?} elmRef
         * @param {?} srs
         * @param {?} router
         * @param {?} location
         * @param {?} conf
         */
        function ScullyContentComponent(elmRef, srs, router, location, conf) {
          var _this26 = this;

          _classCallCheck(this, ScullyContentComponent);

          this.elmRef = elmRef;
          this.srs = srs;
          this.router = router;
          this.location = location;
          this.conf = conf;
          this.baseUrl = this.conf.useTransferState || ScullyDefaultSettings.useTransferState;
          this.elm =
          /** @type {?} */
          this.elmRef.nativeElement;
          /**
           * pull in all  available routes into an eager promise
           */

          this.routes = this.srs.allRoutes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise();
          /**
           * monitor the router, so we can update while navigating in the same 'page' see #311
           */

          this.routeUpdates$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} ev
          * @return {?}
          */
          function (ev) {
            return ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          }),
          /** don't replace if we are already there */
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} ev
          * @return {?}
          */
          function (ev) {
            return lastHandled && !lastHandled.endsWith(ev.urlAfterRedirects);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
          /**
          * @param {?} r
          * @return {?}
          */
          function (r) {
            return _this26.replaceContent();
          }));
          this.routeSub = this.routeUpdates$.subscribe();
          /** do this from constructor, so it runs ASAP */
        }
        /**
         * @return {?}
         */


        _createClass(ScullyContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.elm) {
              /** this will only fire in a browser environment */
              this.handlePage();
            }
          }
          /**
           * Loads the static content from scully into the view
           * Will fetch the content from sibling links with xmlHTTPrequest
           * @private
           * @return {?}
           */

        }, {
          key: "handlePage",
          value: function handlePage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this27 = this;

              var curPage, template, currentCssId, htmlString, parent, begin, end;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      /** @type {?} */
                      curPage = basePathOnly(location.href);

                      if (!(lastHandled === curPage)) {
                        _context6.next = 3;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 3:
                      lastHandled = curPage;
                      /** @type {?} */

                      template = document.createElement('template');
                      /** @type {?} */

                      currentCssId = this.getCSSId(this.elm);

                      if (!window.scullyContent) {
                        _context6.next = 11;
                        break;
                      }

                      /**
                       * upgrade existing static content
                       * @type {?}
                       */
                      htmlString = window.scullyContent.html;

                      if (currentCssId !== window.scullyContent.cssId) {
                        /** replace the angular cssId */
                        template.innerHTML = htmlString.split(window.scullyContent.cssId).join(currentCssId);
                      } else {
                        template.innerHTML = htmlString;
                      }

                      _context6.next = 13;
                      break;

                    case 11:
                      _context6.next = 13;
                      return fetchHttp(curPage + '/index.html', 'text')["catch"](
                      /**
                      * @param {?} e
                      * @return {?}
                      */
                      function (e) {
                        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
                          /**
                           * in devmode (usually in `ng serve`) check the scully server for the content too
                           * @type {?}
                           */
                          var uri = new URL(location.href);
                          /** @type {?} */

                          var url = "".concat(_this27.conf.baseURIForScullyContent, "/").concat(basePathOnly(uri.pathname), "/index.html");
                          return fetchHttp(url, 'text');
                        } else {
                          return Promise.reject(e);
                        }
                      }).then(
                      /**
                      * @param {?} html
                      * @return {?}
                      */
                      function (html) {
                        try {
                          /** @type {?} */
                          var _htmlString = html.split(scullyBegin)[1].split(scullyEnd)[0];

                          if (_htmlString.includes('_ngcontent')) {
                            /**
                             * update the angular cssId
                             * @type {?}
                             */
                            var atr = '_ngcontent' + _htmlString.split('_ngcontent')[1].split('=')[0];

                            template.innerHTML = _htmlString.split(atr).join(currentCssId);
                          } else {
                            template.innerHTML = _htmlString;
                          }
                        } catch (e) {
                          template.innerHTML = "<h2 id=\"___scully-parsing-error___\">Sorry, could not parse static page content</h2>\n            <p>This might happen if you are not using the static generated pages.</p>";
                        }
                      })["catch"](
                      /**
                      * @param {?} e
                      * @return {?}
                      */
                      function (e) {
                        template.innerHTML = '<h2 id="___scully-parsing-error___">Sorry, could not load static page content</h2>';
                        console.error('problem during loading static scully content', e);
                      });

                    case 13:
                      /**
                       * insert the whole thing just before the `<scully-content>` element
                       * @type {?}
                       */
                      parent = this.elm.parentElement || document.body;
                      /** @type {?} */

                      begin = document.createComment('scullyContent-begin');
                      /** @type {?} */

                      end = document.createComment('scullyContent-end');
                      parent.insertBefore(begin, this.elm);
                      parent.insertBefore(template.content, this.elm);
                      parent.insertBefore(end, this.elm);
                      /** upgrade all hrefs to simulated routelinks (in next microtask) */

                      setTimeout(
                      /**
                      * @return {?}
                      */
                      function () {
                        return document.querySelectorAll('[href]').forEach(_this27.upgradeToRoutelink.bind(_this27));
                      }, 10); // document.querySelectorAll('[href]').forEach(this.upgradeToRoutelink.bind(this));

                    case 20:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
          /**
           * upgrade a **href** attributes to links that respect the Angular router
           * and don't do a full page reload. Only works on links that are found in the
           * Scully route config file.
           * @param {?} elm the element containing the **hrefs**
           * @return {?}
           */

        }, {
          key: "upgradeToRoutelink",
          value: function upgradeToRoutelink(elm) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this28 = this;

              var hash, routes, href, lnk, route;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (['A', 'BUTTON'].includes(elm.tagName)) {
                        _context8.next = 2;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 2:
                      /** @type {?} */
                      hash = elm.dataset.hash;

                      if (!hash) {
                        _context8.next = 8;
                        break;
                      }

                      elm.setAttribute('href', '#' + hash);
                      elm.setAttribute('onclick', '');

                      elm.onclick =
                      /**
                      * @param {?} ev
                      * @return {?}
                      */
                      function (ev) {
                        ev.preventDefault();
                        /** @type {?} */

                        var destination = document.getElementById(hash);

                        if (destination) {
                          /** @type {?} */
                          var url = new URL(window.location.href);
                          url.hash = hash;
                          history.replaceState('', '', url.toString());
                          destination.scrollIntoView();
                        }
                      };

                      return _context8.abrupt("return");

                    case 8:
                      _context8.next = 10;
                      return this.routes;

                    case 10:
                      routes = _context8.sent;

                      /** @type {?} */
                      href = elm.getAttribute('href');
                      /** @type {?} */

                      lnk = basePathOnly(href.toLowerCase());
                      /** @type {?} */

                      route = routes.find(
                      /**
                      * @param {?} r
                      * @return {?}
                      */
                      function (r) {
                        return basePathOnly(r.route.toLowerCase()) === lnk;
                      });
                      /** only upgrade routes known by scully. */

                      if (lnk && route && !lnk.startsWith('#')) {
                        elm.onclick =
                        /**
                        * @param {?} ev
                        * @return {?}
                        */
                        function (ev) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this28, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                            var _this29 = this;

                            var splitRoute, curSplit, routed;
                            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                              while (1) {
                                switch (_context7.prev = _context7.next) {
                                  case 0:
                                    /** @type {?} */
                                    splitRoute = route.route.split("/");
                                    /** @type {?} */

                                    curSplit = location.pathname.split('/'); // loose last "part" of route

                                    curSplit.pop();
                                    ev.preventDefault();
                                    /** @type {?} */

                                    _context7.next = 6;
                                    return this.router.navigate(splitRoute)["catch"](
                                    /**
                                    * @param {?} e
                                    * @return {?}
                                    */
                                    function (e) {
                                      console.error('routing error', e);
                                      return false;
                                    });

                                  case 6:
                                    routed = _context7.sent;

                                    if (routed) {
                                      _context7.next = 9;
                                      break;
                                    }

                                    return _context7.abrupt("return");

                                  case 9:
                                    /** check for the same route with different "data", and NOT a 1 level higher (length), and is not a fragment of th same page */
                                    if (curSplit.every(
                                    /**
                                    * @param {?} part
                                    * @param {?} i
                                    * @return {?}
                                    */
                                    function (part, i) {
                                      return splitRoute[i] === part;
                                    }) && splitRoute.length !== curSplit.length + 1) {
                                      setTimeout(
                                      /**
                                      * @return {?}
                                      */
                                      function () {
                                        return _this29.replaceContent();
                                      }, 10); // a small delay, so we are sure the angular parts in the page are settled enough
                                    }

                                  case 10:
                                  case "end":
                                    return _context7.stop();
                                }
                              }
                            }, _callee7, this);
                          }));
                        };
                      }

                    case 15:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "replaceContent",
          value: function replaceContent() {
            /**
             * as Angular doesn't destroy the component if we stay on the same page,
             * we have to manually delete old content. Also we need to kick of loading
             * the new content. handlePage() takes care of that.
             */

            /** delete the content, as it is now out of date! */
            window.scullyContent = undefined;
            /** @type {?} */

            var parent = this.elm.parentElement;
            /** @type {?} */

            var cur =
            /** @type {?} */
            findComments(parent, 'scullyContent-begin')[0];

            while (cur && cur !== this.elm) {
              /** @type {?} */
              var next = cur.nextSibling;
              parent.removeChild(cur);
              cur = next;
            }

            this.handlePage();
          }
          /**
           * @param {?} elm
           * @return {?}
           */

        }, {
          key: "getCSSId",
          value: function getCSSId(elm) {
            return elm.getAttributeNames().find(
            /**
            * @param {?} a
            * @return {?}
            */
            function (a) {
              return a.startsWith('_ngcontent');
            }) || '';
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.routeSub.unsubscribe();
            /** reset the lastused */

            lastHandled = '//';
          }
        }]);

        return ScullyContentComponent;
      }();

      ScullyContentComponent.ɵfac = function ScullyContentComponent_Factory(t) {
        return new (t || ScullyContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScullyRoutesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SCULLY_LIB_CONFIG));
      };

      ScullyContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ScullyContentComponent,
        selectors: [["scully-content"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function ScullyContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          }
        },
        styles: ["\n      :host {\n        display: none;\n      }\n      scully-content {\n        display: none;\n      }\n    "],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      ScullyContentComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ScullyRoutesService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [SCULLY_LIB_CONFIG]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScullyContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            // tslint:disable-next-line: component-selector
            selector: 'scully-content',
            template: '<ng-content></ng-content>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            preserveWhitespaces: true,
            styles: ["\n      :host {\n        display: none;\n      }\n      scully-content {\n        display: none;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: ScullyRoutesService
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [SCULLY_LIB_CONFIG]
            }]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/scully-content/scully-content.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ScullyContentModule = function ScullyContentModule() {
        _classCallCheck(this, ScullyContentModule);
      };

      ScullyContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ScullyContentModule
      });
      ScullyContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ScullyContentModule_Factory(t) {
          return new (t || ScullyContentModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScullyContentModule, {
          declarations: [ScullyContentComponent],
          exports: [ScullyContentComponent]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScullyContentModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [ScullyContentComponent],
            exports: [ScullyContentComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/scully-lib.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ScullyLibModule = /*#__PURE__*/function () {
        /**
         * @param {?} idle
         */
        function ScullyLibModule(idle) {
          _classCallCheck(this, ScullyLibModule);

          this.idle = idle;
        }
        /**
         * We use a little trick to get a working idle-service.
         * First, we separate out the component in a separate module to prevent a circulair injection
         * second we create a constuctor that activates the IdleMonitorService. as that is provided for 'root'
         * there will be only 1 instance in our app.
         * We don't need forRoot, as we are not configuring anything in here.
         * @param {?=} config
         * @return {?}
         */


        _createClass(ScullyLibModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ScullyDefaultSettings;
            config = Object.assign({}, ScullyDefaultSettings, config);
            return {
              ngModule: ScullyLibModule,
              providers: [{
                provide: SCULLY_LIB_CONFIG,
                useValue: config
              }]
            };
          }
        }]);

        return ScullyLibModule;
      }();

      ScullyLibModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ScullyLibModule
      });
      ScullyLibModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ScullyLibModule_Factory(t) {
          return new (t || ScullyLibModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](IdleMonitorService));
        },
        imports: [[ScullyContentModule], ScullyContentModule]
      });
      /** @nocollapse */

      ScullyLibModule.ctorParameters = function () {
        return [{
          type: IdleMonitorService
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScullyLibModule, {
          imports: [ScullyContentModule],
          exports: [ScullyContentModule]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScullyLibModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [ScullyContentModule],
            exports: [ScullyContentModule]
          }]
        }], function () {
          return [{
            type: IdleMonitorService
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: scullyio-ng-lib.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=scullyio-ng-lib.js.map

      /***/

    },

    /***/
    "u47x":
    /*!*****************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js ***!
      \*****************************************************************/

    /*! exports provided: A11yModule, ActiveDescendantKeyManager, AriaDescriber, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, CDK_DESCRIBEDBY_ID_PREFIX, CdkAriaLive, CdkMonitorFocus, CdkTrapFocus, ConfigurableFocusTrap, ConfigurableFocusTrapFactory, EventListenerFocusTrapInertStrategy, FOCUS_MONITOR_DEFAULT_OPTIONS, FOCUS_TRAP_INERT_STRATEGY, FocusKeyManager, FocusMonitor, FocusTrap, FocusTrapFactory, HighContrastModeDetector, InteractivityChecker, IsFocusableConfig, LIVE_ANNOUNCER_DEFAULT_OPTIONS, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, ListKeyManager, LiveAnnouncer, MESSAGES_CONTAINER_ID, TOUCH_BUFFER_MS, isFakeMousedownFromScreenReader, isFakeTouchstartFromScreenReader, ɵangular_material_src_cdk_a11y_a11y_a, ɵangular_material_src_cdk_a11y_a11y_b */

    /***/
    function u47x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A11yModule", function () {
        return A11yModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function () {
        return ActiveDescendantKeyManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AriaDescriber", function () {
        return AriaDescriber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function () {
        return CDK_DESCRIBEDBY_HOST_ATTRIBUTE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function () {
        return CDK_DESCRIBEDBY_ID_PREFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function () {
        return CdkAriaLive;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function () {
        return CdkMonitorFocus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function () {
        return CdkTrapFocus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrap", function () {
        return ConfigurableFocusTrap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrapFactory", function () {
        return ConfigurableFocusTrapFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventListenerFocusTrapInertStrategy", function () {
        return EventListenerFocusTrapInertStrategy;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_DEFAULT_OPTIONS", function () {
        return FOCUS_MONITOR_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FOCUS_TRAP_INERT_STRATEGY", function () {
        return FOCUS_TRAP_INERT_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function () {
        return FocusKeyManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusMonitor", function () {
        return FocusMonitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusTrap", function () {
        return FocusTrap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function () {
        return FocusTrapFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighContrastModeDetector", function () {
        return HighContrastModeDetector;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function () {
        return InteractivityChecker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsFocusableConfig", function () {
        return IsFocusableConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_DEFAULT_OPTIONS", function () {
        return LIVE_ANNOUNCER_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function () {
        return LIVE_ANNOUNCER_ELEMENT_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function () {
        return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListKeyManager", function () {
        return ListKeyManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function () {
        return LiveAnnouncer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function () {
        return MESSAGES_CONTAINER_ID;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function () {
        return TOUCH_BUFFER_MS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function () {
        return isFakeMousedownFromScreenReader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isFakeTouchstartFromScreenReader", function () {
        return isFakeTouchstartFromScreenReader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_a", function () {
        return FocusTrapManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_b", function () {
        return ConfigurableFocusTrapConfig;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "GU7r");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** IDs are delimited by an empty space, as per the spec. */


      var ID_DELIMITER = ' ';
      /**
       * Adds the given ID to the specified ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       */

      function addAriaReferencedId(el, attr, id) {
        var ids = getAriaReferenceIds(el, attr);

        if (ids.some(function (existingId) {
          return existingId.trim() == id.trim();
        })) {
          return;
        }

        ids.push(id.trim());
        el.setAttribute(attr, ids.join(ID_DELIMITER));
      }
      /**
       * Removes the given ID from the specified ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       */


      function removeAriaReferencedId(el, attr, id) {
        var ids = getAriaReferenceIds(el, attr);
        var filteredIds = ids.filter(function (val) {
          return val != id.trim();
        });

        if (filteredIds.length) {
          el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
        } else {
          el.removeAttribute(attr);
        }
      }
      /**
       * Gets the list of IDs referenced by the given ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       */


      function getAriaReferenceIds(el, attr) {
        // Get string array of all individual ids (whitespace delimited) in the attribute value
        return (el.getAttribute(attr) || '').match(/\S+/g) || [];
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** ID used for the body container where all messages are appended. */


      var MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
      /** ID prefix used for each created message element. */

      var CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
      /** Attribute given to each host element that is described by a message element. */

      var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
      /** Global incremental identifier for each registered message element. */

      var nextId = 0;
      /** Global map of all registered message elements that have been placed into the document. */

      var messageRegistry = new Map();
      /** Container for all registered messages. */

      var messagesContainer = null;
      /**
       * Utility that creates visually hidden elements with a message content. Useful for elements that
       * want to use aria-describedby to further describe themselves without adding additional visual
       * content.
       */

      var AriaDescriber = /*#__PURE__*/function () {
        function AriaDescriber(_document) {
          _classCallCheck(this, AriaDescriber);

          this._document = _document;
        }

        _createClass(AriaDescriber, [{
          key: "describe",
          value: function describe(hostElement, message, role) {
            if (!this._canBeDescribed(hostElement, message)) {
              return;
            }

            var key = getKey(message, role);

            if (typeof message !== 'string') {
              // We need to ensure that the element has an ID.
              setMessageId(message);
              messageRegistry.set(key, {
                messageElement: message,
                referenceCount: 0
              });
            } else if (!messageRegistry.has(key)) {
              this._createMessageElement(message, role);
            }

            if (!this._isElementDescribedByMessage(hostElement, key)) {
              this._addMessageReference(hostElement, key);
            }
          }
        }, {
          key: "removeDescription",
          value: function removeDescription(hostElement, message, role) {
            if (!message || !this._isElementNode(hostElement)) {
              return;
            }

            var key = getKey(message, role);

            if (this._isElementDescribedByMessage(hostElement, key)) {
              this._removeMessageReference(hostElement, key);
            } // If the message is a string, it means that it's one that we created for the
            // consumer so we can remove it safely, otherwise we should leave it in place.


            if (typeof message === 'string') {
              var registeredMessage = messageRegistry.get(key);

              if (registeredMessage && registeredMessage.referenceCount === 0) {
                this._deleteMessageElement(key);
              }
            }

            if (messagesContainer && messagesContainer.childNodes.length === 0) {
              this._deleteMessagesContainer();
            }
          }
          /** Unregisters all created message elements and removes the message container. */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var describedElements = this._document.querySelectorAll("[".concat(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, "]"));

            for (var i = 0; i < describedElements.length; i++) {
              this._removeCdkDescribedByReferenceIds(describedElements[i]);

              describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
            }

            if (messagesContainer) {
              this._deleteMessagesContainer();
            }

            messageRegistry.clear();
          }
          /**
           * Creates a new element in the visually hidden message container element with the message
           * as its content and adds it to the message registry.
           */

        }, {
          key: "_createMessageElement",
          value: function _createMessageElement(message, role) {
            var messageElement = this._document.createElement('div');

            setMessageId(messageElement);
            messageElement.textContent = message;

            if (role) {
              messageElement.setAttribute('role', role);
            }

            this._createMessagesContainer();

            messagesContainer.appendChild(messageElement);
            messageRegistry.set(getKey(message, role), {
              messageElement: messageElement,
              referenceCount: 0
            });
          }
          /** Deletes the message element from the global messages container. */

        }, {
          key: "_deleteMessageElement",
          value: function _deleteMessageElement(key) {
            var registeredMessage = messageRegistry.get(key);
            var messageElement = registeredMessage && registeredMessage.messageElement;

            if (messagesContainer && messageElement) {
              messagesContainer.removeChild(messageElement);
            }

            messageRegistry["delete"](key);
          }
          /** Creates the global container for all aria-describedby messages. */

        }, {
          key: "_createMessagesContainer",
          value: function _createMessagesContainer() {
            if (!messagesContainer) {
              var preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID); // When going from the server to the client, we may end up in a situation where there's
              // already a container on the page, but we don't have a reference to it. Clear the
              // old container so we don't get duplicates. Doing this, instead of emptying the previous
              // container, should be slightly faster.


              if (preExistingContainer && preExistingContainer.parentNode) {
                preExistingContainer.parentNode.removeChild(preExistingContainer);
              }

              messagesContainer = this._document.createElement('div');
              messagesContainer.id = MESSAGES_CONTAINER_ID; // We add `visibility: hidden` in order to prevent text in this container from
              // being searchable by the browser's Ctrl + F functionality.
              // Screen-readers will still read the description for elements with aria-describedby even
              // when the description element is not visible.

              messagesContainer.style.visibility = 'hidden'; // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
              // the description element doesn't impact page layout.

              messagesContainer.classList.add('cdk-visually-hidden');

              this._document.body.appendChild(messagesContainer);
            }
          }
          /** Deletes the global messages container. */

        }, {
          key: "_deleteMessagesContainer",
          value: function _deleteMessagesContainer() {
            if (messagesContainer && messagesContainer.parentNode) {
              messagesContainer.parentNode.removeChild(messagesContainer);
              messagesContainer = null;
            }
          }
          /** Removes all cdk-describedby messages that are hosted through the element. */

        }, {
          key: "_removeCdkDescribedByReferenceIds",
          value: function _removeCdkDescribedByReferenceIds(element) {
            // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
            var originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(function (id) {
              return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0;
            });
            element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
          }
          /**
           * Adds a message reference to the element using aria-describedby and increments the registered
           * message's reference count.
           */

        }, {
          key: "_addMessageReference",
          value: function _addMessageReference(element, key) {
            var registeredMessage = messageRegistry.get(key); // Add the aria-describedby reference and set the
            // describedby_host attribute to mark the element.

            addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
            element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
            registeredMessage.referenceCount++;
          }
          /**
           * Removes a message reference from the element using aria-describedby
           * and decrements the registered message's reference count.
           */

        }, {
          key: "_removeMessageReference",
          value: function _removeMessageReference(element, key) {
            var registeredMessage = messageRegistry.get(key);
            registeredMessage.referenceCount--;
            removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
            element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
          }
          /** Returns true if the element has been described by the provided message ID. */

        }, {
          key: "_isElementDescribedByMessage",
          value: function _isElementDescribedByMessage(element, key) {
            var referenceIds = getAriaReferenceIds(element, 'aria-describedby');
            var registeredMessage = messageRegistry.get(key);
            var messageId = registeredMessage && registeredMessage.messageElement.id;
            return !!messageId && referenceIds.indexOf(messageId) != -1;
          }
          /** Determines whether a message can be described on a particular element. */

        }, {
          key: "_canBeDescribed",
          value: function _canBeDescribed(element, message) {
            if (!this._isElementNode(element)) {
              return false;
            }

            if (message && typeof message === 'object') {
              // We'd have to make some assumptions about the description element's text, if the consumer
              // passed in an element. Assume that if an element is passed in, the consumer has verified
              // that it can be used as a description.
              return true;
            }

            var trimmedMessage = message == null ? '' : "".concat(message).trim();
            var ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
            // element, because screen readers will end up reading out the same text twice in a row.

            return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
          }
          /** Checks whether a node is an Element node. */

        }, {
          key: "_isElementNode",
          value: function _isElementNode(element) {
            return element.nodeType === this._document.ELEMENT_NODE;
          }
        }]);

        return AriaDescriber;
      }();

      AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
        return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      AriaDescriber.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function AriaDescriber_Factory() {
          return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
        },
        token: AriaDescriber,
        providedIn: "root"
      });

      AriaDescriber.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AriaDescriber, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /** Gets a key that can be used to look messages up in the registry. */


      function getKey(message, role) {
        return typeof message === 'string' ? "".concat(role || '', "/").concat(message) : message;
      }
      /** Assigns a unique ID to an element, if it doesn't have one already. */


      function setMessageId(element) {
        if (!element.id) {
          element.id = "".concat(CDK_DESCRIBEDBY_ID_PREFIX, "-").concat(nextId++);
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * This class manages keyboard events for selectable lists. If you pass it a query list
       * of items, it will set the active item correctly when arrow events occur.
       */


      var ListKeyManager = /*#__PURE__*/function () {
        function ListKeyManager(_items) {
          var _this30 = this;

          _classCallCheck(this, ListKeyManager);

          this._items = _items;
          this._activeItemIndex = -1;
          this._activeItem = null;
          this._wrap = false;
          this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
          this._vertical = true;
          this._allowedModifierKeys = [];
          this._homeAndEnd = false;
          /**
           * Predicate function that can be used to check whether an item should be skipped
           * by the key manager. By default, disabled items are skipped.
           */

          this._skipPredicateFn = function (item) {
            return item.disabled;
          }; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


          this._pressedLetters = [];
          /**
           * Stream that emits any time the TAB key is pressed, so components can react
           * when focus is shifted off of the list.
           */

          this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Stream that emits whenever the active item of the list manager changes. */

          this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // We allow for the items to be an array because, in some cases, the consumer may
          // not have access to a QueryList of the items they want to manage (e.g. when the
          // items aren't being collected via `ViewChildren` or `ContentChildren`).

          if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
            _items.changes.subscribe(function (newItems) {
              if (_this30._activeItem) {
                var itemArray = newItems.toArray();
                var newIndex = itemArray.indexOf(_this30._activeItem);

                if (newIndex > -1 && newIndex !== _this30._activeItemIndex) {
                  _this30._activeItemIndex = newIndex;
                }
              }
            });
          }
        }
        /**
         * Sets the predicate function that determines which items should be skipped by the
         * list key manager.
         * @param predicate Function that determines whether the given item should be skipped.
         */


        _createClass(ListKeyManager, [{
          key: "skipPredicate",
          value: function skipPredicate(predicate) {
            this._skipPredicateFn = predicate;
            return this;
          }
          /**
           * Configures wrapping mode, which determines whether the active item will wrap to
           * the other end of list when there are no more items in the given direction.
           * @param shouldWrap Whether the list should wrap when reaching the end.
           */

        }, {
          key: "withWrap",
          value: function withWrap() {
            var shouldWrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._wrap = shouldWrap;
            return this;
          }
          /**
           * Configures whether the key manager should be able to move the selection vertically.
           * @param enabled Whether vertical selection should be enabled.
           */

        }, {
          key: "withVerticalOrientation",
          value: function withVerticalOrientation() {
            var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._vertical = enabled;
            return this;
          }
          /**
           * Configures the key manager to move the selection horizontally.
           * Passing in `null` will disable horizontal movement.
           * @param direction Direction in which the selection can be moved.
           */

        }, {
          key: "withHorizontalOrientation",
          value: function withHorizontalOrientation(direction) {
            this._horizontal = direction;
            return this;
          }
          /**
           * Modifier keys which are allowed to be held down and whose default actions will be prevented
           * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
           */

        }, {
          key: "withAllowedModifierKeys",
          value: function withAllowedModifierKeys(keys) {
            this._allowedModifierKeys = keys;
            return this;
          }
          /**
           * Turns on typeahead mode which allows users to set the active item by typing.
           * @param debounceInterval Time to wait after the last keystroke before setting the active item.
           */

        }, {
          key: "withTypeAhead",
          value: function withTypeAhead() {
            var _this31 = this;

            var debounceInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

            if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._items.length && this._items.some(function (item) {
              return typeof item.getLabel !== 'function';
            })) {
              throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
            }

            this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
            // and convert those letters back into a string. Afterwards find the first item that starts
            // with that string and select it.


            this._typeaheadSubscription = this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (letter) {
              return _this31._pressedLetters.push(letter);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () {
              return _this31._pressedLetters.length > 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
              return _this31._pressedLetters.join('');
            })).subscribe(function (inputString) {
              var items = _this31._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
              // following the current active item.


              for (var i = 1; i < items.length + 1; i++) {
                var index = (_this31._activeItemIndex + i) % items.length;
                var item = items[index];

                if (!_this31._skipPredicateFn(item) && item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
                  _this31.setActiveItem(index);

                  break;
                }
              }

              _this31._pressedLetters = [];
            });
            return this;
          }
          /**
           * Configures the key manager to activate the first and last items
           * respectively when the Home or End key is pressed.
           * @param enabled Whether pressing the Home or End key activates the first/last item.
           */

        }, {
          key: "withHomeAndEnd",
          value: function withHomeAndEnd() {
            var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._homeAndEnd = enabled;
            return this;
          }
        }, {
          key: "setActiveItem",
          value: function setActiveItem(item) {
            var previousActiveItem = this._activeItem;
            this.updateActiveItem(item);

            if (this._activeItem !== previousActiveItem) {
              this.change.next(this._activeItemIndex);
            }
          }
          /**
           * Sets the active item depending on the key event passed in.
           * @param event Keyboard event to be used for determining which element should be active.
           */

        }, {
          key: "onKeydown",
          value: function onKeydown(event) {
            var _this32 = this;

            var keyCode = event.keyCode;
            var modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
            var isModifierAllowed = modifiers.every(function (modifier) {
              return !event[modifier] || _this32._allowedModifierKeys.indexOf(modifier) > -1;
            });

            switch (keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
                this.tabOut.next();
                return;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                  this.setNextItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                  this.setPreviousItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                  this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                  this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
                if (this._homeAndEnd && isModifierAllowed) {
                  this.setFirstItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
                if (this._homeAndEnd && isModifierAllowed) {
                  this.setLastItemActive();
                  break;
                } else {
                  return;
                }

              default:
                if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event, 'shiftKey')) {
                  // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                  // otherwise fall back to resolving alphanumeric characters via the keyCode.
                  if (event.key && event.key.length === 1) {
                    this._letterKeyStream.next(event.key.toLocaleUpperCase());
                  } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"] || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"]) {
                    this._letterKeyStream.next(String.fromCharCode(keyCode));
                  }
                } // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.


                return;
            }

            this._pressedLetters = [];
            event.preventDefault();
          }
          /** Index of the currently active item. */

        }, {
          key: "activeItemIndex",
          get: function get() {
            return this._activeItemIndex;
          }
          /** The active item. */

        }, {
          key: "activeItem",
          get: function get() {
            return this._activeItem;
          }
          /** Gets whether the user is currently typing into the manager using the typeahead feature. */

        }, {
          key: "isTyping",
          value: function isTyping() {
            return this._pressedLetters.length > 0;
          }
          /** Sets the active item to the first enabled item in the list. */

        }, {
          key: "setFirstItemActive",
          value: function setFirstItemActive() {
            this._setActiveItemByIndex(0, 1);
          }
          /** Sets the active item to the last enabled item in the list. */

        }, {
          key: "setLastItemActive",
          value: function setLastItemActive() {
            this._setActiveItemByIndex(this._items.length - 1, -1);
          }
          /** Sets the active item to the next enabled item in the list. */

        }, {
          key: "setNextItemActive",
          value: function setNextItemActive() {
            this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
          }
          /** Sets the active item to a previous enabled item in the list. */

        }, {
          key: "setPreviousItemActive",
          value: function setPreviousItemActive() {
            this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
          }
        }, {
          key: "updateActiveItem",
          value: function updateActiveItem(item) {
            var itemArray = this._getItemsArray();

            var index = typeof item === 'number' ? item : itemArray.indexOf(item);
            var activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

            this._activeItem = activeItem == null ? null : activeItem;
            this._activeItemIndex = index;
          }
          /**
           * This method sets the active item, given a list of items and the delta between the
           * currently active item and the new active item. It will calculate differently
           * depending on whether wrap mode is turned on.
           */

        }, {
          key: "_setActiveItemByDelta",
          value: function _setActiveItemByDelta(delta) {
            this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
          }
          /**
           * Sets the active item properly given "wrap" mode. In other words, it will continue to move
           * down the list until it finds an item that is not disabled, and it will wrap if it
           * encounters either end of the list.
           */

        }, {
          key: "_setActiveInWrapMode",
          value: function _setActiveInWrapMode(delta) {
            var items = this._getItemsArray();

            for (var i = 1; i <= items.length; i++) {
              var index = (this._activeItemIndex + delta * i + items.length) % items.length;
              var item = items[index];

              if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
              }
            }
          }
          /**
           * Sets the active item properly given the default mode. In other words, it will
           * continue to move down the list until it finds an item that is not disabled. If
           * it encounters either end of the list, it will stop and not wrap.
           */

        }, {
          key: "_setActiveInDefaultMode",
          value: function _setActiveInDefaultMode(delta) {
            this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
          }
          /**
           * Sets the active item to the first enabled item starting at the index specified. If the
           * item is disabled, it will move in the fallbackDelta direction until it either
           * finds an enabled item or encounters the end of the list.
           */

        }, {
          key: "_setActiveItemByIndex",
          value: function _setActiveItemByIndex(index, fallbackDelta) {
            var items = this._getItemsArray();

            if (!items[index]) {
              return;
            }

            while (this._skipPredicateFn(items[index])) {
              index += fallbackDelta;

              if (!items[index]) {
                return;
              }
            }

            this.setActiveItem(index);
          }
          /** Returns the items as an array. */

        }, {
          key: "_getItemsArray",
          value: function _getItemsArray() {
            return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
          }
        }]);

        return ListKeyManager;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var ActiveDescendantKeyManager = /*#__PURE__*/function (_ListKeyManager) {
        _inherits(ActiveDescendantKeyManager, _ListKeyManager);

        var _super11 = _createSuper(ActiveDescendantKeyManager);

        function ActiveDescendantKeyManager() {
          _classCallCheck(this, ActiveDescendantKeyManager);

          return _super11.apply(this, arguments);
        }

        _createClass(ActiveDescendantKeyManager, [{
          key: "setActiveItem",
          value: function setActiveItem(index) {
            if (this.activeItem) {
              this.activeItem.setInactiveStyles();
            }

            _get(_getPrototypeOf(ActiveDescendantKeyManager.prototype), "setActiveItem", this).call(this, index);

            if (this.activeItem) {
              this.activeItem.setActiveStyles();
            }
          }
        }]);

        return ActiveDescendantKeyManager;
      }(ListKeyManager);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var FocusKeyManager = /*#__PURE__*/function (_ListKeyManager2) {
        _inherits(FocusKeyManager, _ListKeyManager2);

        var _super12 = _createSuper(FocusKeyManager);

        function FocusKeyManager() {
          var _this33;

          _classCallCheck(this, FocusKeyManager);

          _this33 = _super12.apply(this, arguments);
          _this33._origin = 'program';
          return _this33;
        }
        /**
         * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
         * @param origin Focus origin to be used when focusing items.
         */


        _createClass(FocusKeyManager, [{
          key: "setFocusOrigin",
          value: function setFocusOrigin(origin) {
            this._origin = origin;
            return this;
          }
        }, {
          key: "setActiveItem",
          value: function setActiveItem(item) {
            _get(_getPrototypeOf(FocusKeyManager.prototype), "setActiveItem", this).call(this, item);

            if (this.activeItem) {
              this.activeItem.focus(this._origin);
            }
          }
        }]);

        return FocusKeyManager;
      }(ListKeyManager);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Configuration for the isFocusable method.
       */


      var IsFocusableConfig = function IsFocusableConfig() {
        _classCallCheck(this, IsFocusableConfig);

        /**
         * Whether to count an element as focusable even if it is not currently visible.
         */
        this.ignoreVisibility = false;
      }; // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
      // Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
      // supported.

      /**
       * Utility for checking the interactivity of an element, such as whether is is focusable or
       * tabbable.
       */


      var InteractivityChecker = /*#__PURE__*/function () {
        function InteractivityChecker(_platform) {
          _classCallCheck(this, InteractivityChecker);

          this._platform = _platform;
        }
        /**
         * Gets whether an element is disabled.
         *
         * @param element Element to be checked.
         * @returns Whether the element is disabled.
         */


        _createClass(InteractivityChecker, [{
          key: "isDisabled",
          value: function isDisabled(element) {
            // This does not capture some cases, such as a non-form control with a disabled attribute or
            // a form control inside of a disabled form, but should capture the most common cases.
            return element.hasAttribute('disabled');
          }
          /**
           * Gets whether an element is visible for the purposes of interactivity.
           *
           * This will capture states like `display: none` and `visibility: hidden`, but not things like
           * being clipped by an `overflow: hidden` parent or being outside the viewport.
           *
           * @returns Whether the element is visible.
           */

        }, {
          key: "isVisible",
          value: function isVisible(element) {
            return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
          }
          /**
           * Gets whether an element can be reached via Tab key.
           * Assumes that the element has already been checked with isFocusable.
           *
           * @param element Element to be checked.
           * @returns Whether the element is tabbable.
           */

        }, {
          key: "isTabbable",
          value: function isTabbable(element) {
            // Nothing is tabbable on the server 😎
            if (!this._platform.isBrowser) {
              return false;
            }

            var frameElement = getFrameElement(getWindow(element));

            if (frameElement) {
              // Frame elements inherit their tabindex onto all child elements.
              if (getTabIndexValue(frameElement) === -1) {
                return false;
              } // Browsers disable tabbing to an element inside of an invisible frame.


              if (!this.isVisible(frameElement)) {
                return false;
              }
            }

            var nodeName = element.nodeName.toLowerCase();
            var tabIndexValue = getTabIndexValue(element);

            if (element.hasAttribute('contenteditable')) {
              return tabIndexValue !== -1;
            }

            if (nodeName === 'iframe' || nodeName === 'object') {
              // The frame or object's content may be tabbable depending on the content, but it's
              // not possibly to reliably detect the content of the frames. We always consider such
              // elements as non-tabbable.
              return false;
            } // In iOS, the browser only considers some specific elements as tabbable.


            if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
              return false;
            }

            if (nodeName === 'audio') {
              // Audio elements without controls enabled are never tabbable, regardless
              // of the tabindex attribute explicitly being set.
              if (!element.hasAttribute('controls')) {
                return false;
              } // Audio elements with controls are by default tabbable unless the
              // tabindex attribute is set to `-1` explicitly.


              return tabIndexValue !== -1;
            }

            if (nodeName === 'video') {
              // For all video elements, if the tabindex attribute is set to `-1`, the video
              // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
              // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
              // tabindex attribute is the source of truth here.
              if (tabIndexValue === -1) {
                return false;
              } // If the tabindex is explicitly set, and not `-1` (as per check before), the
              // video element is always tabbable (regardless of whether it has controls or not).


              if (tabIndexValue !== null) {
                return true;
              } // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
              // has controls enabled. Firefox is special as videos are always tabbable regardless
              // of whether there are controls or not.


              return this._platform.FIREFOX || element.hasAttribute('controls');
            }

            return element.tabIndex >= 0;
          }
          /**
           * Gets whether an element can be focused by the user.
           *
           * @param element Element to be checked.
           * @param config The config object with options to customize this method's behavior
           * @returns Whether the element is focusable.
           */

        }, {
          key: "isFocusable",
          value: function isFocusable(element, config) {
            // Perform checks in order of left to most expensive.
            // Again, naive approach that does not capture many edge cases and browser quirks.
            return isPotentiallyFocusable(element) && !this.isDisabled(element) && ((config === null || config === void 0 ? void 0 : config.ignoreVisibility) || this.isVisible(element));
          }
        }]);

        return InteractivityChecker;
      }();

      InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
        return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
      };

      InteractivityChecker.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function InteractivityChecker_Factory() {
          return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
        },
        token: InteractivityChecker,
        providedIn: "root"
      });

      InteractivityChecker.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InteractivityChecker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
          }];
        }, null);
      })();
      /**
       * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
       * the frameElement property is being accessed from a different host address, this property
       * should be accessed carefully.
       */


      function getFrameElement(window) {
        try {
          return window.frameElement;
        } catch (_a) {
          return null;
        }
      }
      /** Checks whether the specified element has any geometry / rectangles. */


      function hasGeometry(element) {
        // Use logic from jQuery to check for an invisible element.
        // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
        return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
      }
      /** Gets whether an element's  */


      function isNativeFormElement(element) {
        var nodeName = element.nodeName.toLowerCase();
        return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
      }
      /** Gets whether an element is an `<input type="hidden">`. */


      function isHiddenInput(element) {
        return isInputElement(element) && element.type == 'hidden';
      }
      /** Gets whether an element is an anchor that has an href attribute. */


      function isAnchorWithHref(element) {
        return isAnchorElement(element) && element.hasAttribute('href');
      }
      /** Gets whether an element is an input element. */


      function isInputElement(element) {
        return element.nodeName.toLowerCase() == 'input';
      }
      /** Gets whether an element is an anchor element. */


      function isAnchorElement(element) {
        return element.nodeName.toLowerCase() == 'a';
      }
      /** Gets whether an element has a valid tabindex. */


      function hasValidTabIndex(element) {
        if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
          return false;
        }

        var tabIndex = element.getAttribute('tabindex'); // IE11 parses tabindex="" as the value "-32768"

        if (tabIndex == '-32768') {
          return false;
        }

        return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
      }
      /**
       * Returns the parsed tabindex from the element attributes instead of returning the
       * evaluated tabindex from the browsers defaults.
       */


      function getTabIndexValue(element) {
        if (!hasValidTabIndex(element)) {
          return null;
        } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054


        var tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
        return isNaN(tabIndex) ? -1 : tabIndex;
      }
      /** Checks whether the specified element is potentially tabbable on iOS */


      function isPotentiallyTabbableIOS(element) {
        var nodeName = element.nodeName.toLowerCase();
        var inputType = nodeName === 'input' && element.type;
        return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
      }
      /**
       * Gets whether an element is potentially focusable without taking current visible/disabled state
       * into account.
       */


      function isPotentiallyFocusable(element) {
        // Inputs are potentially focusable *unless* they're type="hidden".
        if (isHiddenInput(element)) {
          return false;
        }

        return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
      }
      /** Gets the parent window of a DOM node with regards of being inside of an iframe. */


      function getWindow(node) {
        // ownerDocument is null if `node` itself *is* a document.
        return node.ownerDocument && node.ownerDocument.defaultView || window;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class that allows for trapping focus within a DOM element.
       *
       * This class currently uses a relatively simple approach to focus trapping.
       * It assumes that the tab order is the same as DOM order, which is not necessarily true.
       * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to misalign.
       *
       * @deprecated Use `ConfigurableFocusTrap` instead.
       * @breaking-change for 11.0.0 Remove this class.
       */


      var FocusTrap = /*#__PURE__*/function () {
        function FocusTrap(_element, _checker, _ngZone, _document) {
          var _this34 = this;

          var deferAnchors = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

          _classCallCheck(this, FocusTrap);

          this._element = _element;
          this._checker = _checker;
          this._ngZone = _ngZone;
          this._document = _document;
          this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

          this.startAnchorListener = function () {
            return _this34.focusLastTabbableElement();
          };

          this.endAnchorListener = function () {
            return _this34.focusFirstTabbableElement();
          };

          this._enabled = true;

          if (!deferAnchors) {
            this.attachAnchors();
          }
        }
        /** Whether the focus trap is active. */


        _createClass(FocusTrap, [{
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            this._enabled = value;

            if (this._startAnchor && this._endAnchor) {
              this._toggleAnchorTabIndex(value, this._startAnchor);

              this._toggleAnchorTabIndex(value, this._endAnchor);
            }
          }
          /** Destroys the focus trap by cleaning up the anchors. */

        }, {
          key: "destroy",
          value: function destroy() {
            var startAnchor = this._startAnchor;
            var endAnchor = this._endAnchor;

            if (startAnchor) {
              startAnchor.removeEventListener('focus', this.startAnchorListener);

              if (startAnchor.parentNode) {
                startAnchor.parentNode.removeChild(startAnchor);
              }
            }

            if (endAnchor) {
              endAnchor.removeEventListener('focus', this.endAnchorListener);

              if (endAnchor.parentNode) {
                endAnchor.parentNode.removeChild(endAnchor);
              }
            }

            this._startAnchor = this._endAnchor = null;
            this._hasAttached = false;
          }
          /**
           * Inserts the anchors into the DOM. This is usually done automatically
           * in the constructor, but can be deferred for cases like directives with `*ngIf`.
           * @returns Whether the focus trap managed to attach successfuly. This may not be the case
           * if the target element isn't currently in the DOM.
           */

        }, {
          key: "attachAnchors",
          value: function attachAnchors() {
            var _this35 = this;

            // If we're not on the browser, there can be no focus to trap.
            if (this._hasAttached) {
              return true;
            }

            this._ngZone.runOutsideAngular(function () {
              if (!_this35._startAnchor) {
                _this35._startAnchor = _this35._createAnchor();

                _this35._startAnchor.addEventListener('focus', _this35.startAnchorListener);
              }

              if (!_this35._endAnchor) {
                _this35._endAnchor = _this35._createAnchor();

                _this35._endAnchor.addEventListener('focus', _this35.endAnchorListener);
              }
            });

            if (this._element.parentNode) {
              this._element.parentNode.insertBefore(this._startAnchor, this._element);

              this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);

              this._hasAttached = true;
            }

            return this._hasAttached;
          }
          /**
           * Waits for the zone to stabilize, then either focuses the first element that the
           * user specified, or the first tabbable element.
           * @returns Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfully.
           */

        }, {
          key: "focusInitialElementWhenReady",
          value: function focusInitialElementWhenReady() {
            var _this36 = this;

            return new Promise(function (resolve) {
              _this36._executeOnStable(function () {
                return resolve(_this36.focusInitialElement());
              });
            });
          }
          /**
           * Waits for the zone to stabilize, then focuses
           * the first tabbable element within the focus trap region.
           * @returns Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfully.
           */

        }, {
          key: "focusFirstTabbableElementWhenReady",
          value: function focusFirstTabbableElementWhenReady() {
            var _this37 = this;

            return new Promise(function (resolve) {
              _this37._executeOnStable(function () {
                return resolve(_this37.focusFirstTabbableElement());
              });
            });
          }
          /**
           * Waits for the zone to stabilize, then focuses
           * the last tabbable element within the focus trap region.
           * @returns Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfully.
           */

        }, {
          key: "focusLastTabbableElementWhenReady",
          value: function focusLastTabbableElementWhenReady() {
            var _this38 = this;

            return new Promise(function (resolve) {
              _this38._executeOnStable(function () {
                return resolve(_this38.focusLastTabbableElement());
              });
            });
          }
          /**
           * Get the specified boundary element of the trapped region.
           * @param bound The boundary to get (start or end of trapped region).
           * @returns The boundary element.
           */

        }, {
          key: "_getRegionBoundary",
          value: function _getRegionBoundary(bound) {
            // Contains the deprecated version of selector, for temporary backwards comparability.
            var markers = this._element.querySelectorAll("[cdk-focus-region-".concat(bound, "], ") + "[cdkFocusRegion".concat(bound, "], ") + "[cdk-focus-".concat(bound, "]"));

            for (var i = 0; i < markers.length; i++) {
              // @breaking-change 8.0.0
              if (markers[i].hasAttribute("cdk-focus-".concat(bound))) {
                console.warn("Found use of deprecated attribute 'cdk-focus-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated ") + "attribute will be removed in 8.0.0.", markers[i]);
              } else if (markers[i].hasAttribute("cdk-focus-region-".concat(bound))) {
                console.warn("Found use of deprecated attribute 'cdk-focus-region-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated attribute ") + "will be removed in 8.0.0.", markers[i]);
              }
            }

            if (bound == 'start') {
              return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
            }

            return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
          }
          /**
           * Focuses the element that should be focused when the focus trap is initialized.
           * @returns Whether focus was moved successfully.
           */

        }, {
          key: "focusInitialElement",
          value: function focusInitialElement() {
            // Contains the deprecated version of selector, for temporary backwards comparability.
            var redirectToElement = this._element.querySelector("[cdk-focus-initial], " + "[cdkFocusInitial]");

            if (redirectToElement) {
              // @breaking-change 8.0.0
              if (redirectToElement.hasAttribute("cdk-focus-initial")) {
                console.warn("Found use of deprecated attribute 'cdk-focus-initial', " + "use 'cdkFocusInitial' instead. The deprecated attribute " + "will be removed in 8.0.0", redirectToElement);
              } // Warn the consumer if the element they've pointed to
              // isn't focusable, when not in production mode.


              if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
                console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
              }

              if (!this._checker.isFocusable(redirectToElement)) {
                var focusableChild = this._getFirstTabbableElement(redirectToElement);

                focusableChild === null || focusableChild === void 0 ? void 0 : focusableChild.focus();
                return !!focusableChild;
              }

              redirectToElement.focus();
              return true;
            }

            return this.focusFirstTabbableElement();
          }
          /**
           * Focuses the first tabbable element within the focus trap region.
           * @returns Whether focus was moved successfully.
           */

        }, {
          key: "focusFirstTabbableElement",
          value: function focusFirstTabbableElement() {
            var redirectToElement = this._getRegionBoundary('start');

            if (redirectToElement) {
              redirectToElement.focus();
            }

            return !!redirectToElement;
          }
          /**
           * Focuses the last tabbable element within the focus trap region.
           * @returns Whether focus was moved successfully.
           */

        }, {
          key: "focusLastTabbableElement",
          value: function focusLastTabbableElement() {
            var redirectToElement = this._getRegionBoundary('end');

            if (redirectToElement) {
              redirectToElement.focus();
            }

            return !!redirectToElement;
          }
          /**
           * Checks whether the focus trap has successfully been attached.
           */

        }, {
          key: "hasAttached",
          value: function hasAttached() {
            return this._hasAttached;
          }
          /** Get the first tabbable element from a DOM subtree (inclusive). */

        }, {
          key: "_getFirstTabbableElement",
          value: function _getFirstTabbableElement(root) {
            if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
              return root;
            } // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
            // back to `childNodes` which includes text nodes, comments etc.


            var children = root.children || root.childNodes;

            for (var i = 0; i < children.length; i++) {
              var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;

              if (tabbableChild) {
                return tabbableChild;
              }
            }

            return null;
          }
          /** Get the last tabbable element from a DOM subtree (inclusive). */

        }, {
          key: "_getLastTabbableElement",
          value: function _getLastTabbableElement(root) {
            if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
              return root;
            } // Iterate in reverse DOM order.


            var children = root.children || root.childNodes;

            for (var i = children.length - 1; i >= 0; i--) {
              var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;

              if (tabbableChild) {
                return tabbableChild;
              }
            }

            return null;
          }
          /** Creates an anchor element. */

        }, {
          key: "_createAnchor",
          value: function _createAnchor() {
            var anchor = this._document.createElement('div');

            this._toggleAnchorTabIndex(this._enabled, anchor);

            anchor.classList.add('cdk-visually-hidden');
            anchor.classList.add('cdk-focus-trap-anchor');
            anchor.setAttribute('aria-hidden', 'true');
            return anchor;
          }
          /**
           * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
           * @param isEnabled Whether the focus trap is enabled.
           * @param anchor Anchor on which to toggle the tabindex.
           */

        }, {
          key: "_toggleAnchorTabIndex",
          value: function _toggleAnchorTabIndex(isEnabled, anchor) {
            // Remove the tabindex completely, rather than setting it to -1, because if the
            // element has a tabindex, the user might still hit it when navigating with the arrow keys.
            isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
          }
          /**
           * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
           * @param enabled: Whether the anchors should trap Tab.
           */

        }, {
          key: "toggleAnchors",
          value: function toggleAnchors(enabled) {
            if (this._startAnchor && this._endAnchor) {
              this._toggleAnchorTabIndex(enabled, this._startAnchor);

              this._toggleAnchorTabIndex(enabled, this._endAnchor);
            }
          }
          /** Executes a function when the zone is stable. */

        }, {
          key: "_executeOnStable",
          value: function _executeOnStable(fn) {
            if (this._ngZone.isStable) {
              fn();
            } else {
              this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
            }
          }
        }]);

        return FocusTrap;
      }();
      /**
       * Factory that allows easy instantiation of focus traps.
       * @deprecated Use `ConfigurableFocusTrapFactory` instead.
       * @breaking-change for 11.0.0 Remove this class.
       */


      var FocusTrapFactory = /*#__PURE__*/function () {
        function FocusTrapFactory(_checker, _ngZone, _document) {
          _classCallCheck(this, FocusTrapFactory);

          this._checker = _checker;
          this._ngZone = _ngZone;
          this._document = _document;
        }
        /**
         * Creates a focus-trapped region around the given element.
         * @param element The element around which focus will be trapped.
         * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
         *     manually by the user.
         * @returns The created focus trap instance.
         */


        _createClass(FocusTrapFactory, [{
          key: "create",
          value: function create(element) {
            var deferCaptureElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
          }
        }]);

        return FocusTrapFactory;
      }();

      FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
        return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      FocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FocusTrapFactory_Factory() {
          return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
        },
        token: FocusTrapFactory,
        providedIn: "root"
      });

      FocusTrapFactory.ctorParameters = function () {
        return [{
          type: InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: InteractivityChecker
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /** Directive for trapping focus within a region. */


      var CdkTrapFocus = /*#__PURE__*/function () {
        function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
          _classCallCheck(this, CdkTrapFocus);

          this._elementRef = _elementRef;
          this._focusTrapFactory = _focusTrapFactory;
          /** Previously focused element to restore focus to upon destroy when using autoCapture. */

          this._previouslyFocusedElement = null;
          this._document = _document;
          this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
        }
        /** Whether the focus trap is active. */


        _createClass(CdkTrapFocus, [{
          key: "enabled",
          get: function get() {
            return this.focusTrap.enabled;
          },
          set: function set(value) {
            this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /**
           * Whether the directive should automatically move focus into the trapped region upon
           * initialization and return focus to the previous activeElement upon destruction.
           */

        }, {
          key: "autoCapture",
          get: function get() {
            return this._autoCapture;
          },
          set: function set(value) {
            this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
            // element now that the trapped region is being destroyed.

            if (this._previouslyFocusedElement) {
              this._previouslyFocusedElement.focus();

              this._previouslyFocusedElement = null;
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.focusTrap.attachAnchors();

            if (this.autoCapture) {
              this._captureFocus();
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (!this.focusTrap.hasAttached()) {
              this.focusTrap.attachAnchors();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var autoCaptureChange = changes['autoCapture'];

            if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap.hasAttached()) {
              this._captureFocus();
            }
          }
        }, {
          key: "_captureFocus",
          value: function _captureFocus() {
            this._previouslyFocusedElement = this._document.activeElement;
            this.focusTrap.focusInitialElementWhenReady();
          }
        }]);

        return CdkTrapFocus;
      }();

      CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
        return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      CdkTrapFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkTrapFocus,
        selectors: [["", "cdkTrapFocus", ""]],
        inputs: {
          enabled: ["cdkTrapFocus", "enabled"],
          autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
        },
        exportAs: ["cdkTrapFocus"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      CdkTrapFocus.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusTrapFactory
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };

      CdkTrapFocus.propDecorators = {
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocus']
        }],
        autoCapture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTrapFocusAutoCapture']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTrapFocus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkTrapFocus]',
            exportAs: 'cdkTrapFocus'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: FocusTrapFactory
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, {
          enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTrapFocus']
          }],
          autoCapture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTrapFocusAutoCapture']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class that allows for trapping focus within a DOM element.
       *
       * This class uses a strategy pattern that determines how it traps focus.
       * See FocusTrapInertStrategy.
       */


      var ConfigurableFocusTrap = /*#__PURE__*/function (_FocusTrap) {
        _inherits(ConfigurableFocusTrap, _FocusTrap);

        var _super13 = _createSuper(ConfigurableFocusTrap);

        function ConfigurableFocusTrap(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
          var _this39;

          _classCallCheck(this, ConfigurableFocusTrap);

          _this39 = _super13.call(this, _element, _checker, _ngZone, _document, config.defer);
          _this39._focusTrapManager = _focusTrapManager;
          _this39._inertStrategy = _inertStrategy;

          _this39._focusTrapManager.register(_assertThisInitialized(_this39));

          return _this39;
        }
        /** Whether the FocusTrap is enabled. */


        _createClass(ConfigurableFocusTrap, [{
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            this._enabled = value;

            if (this._enabled) {
              this._focusTrapManager.register(this);
            } else {
              this._focusTrapManager.deregister(this);
            }
          }
          /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */

        }, {
          key: "destroy",
          value: function destroy() {
            this._focusTrapManager.deregister(this);

            _get(_getPrototypeOf(ConfigurableFocusTrap.prototype), "destroy", this).call(this);
          }
          /** @docs-private Implemented as part of ManagedFocusTrap. */

        }, {
          key: "_enable",
          value: function _enable() {
            this._inertStrategy.preventFocus(this);

            this.toggleAnchors(true);
          }
          /** @docs-private Implemented as part of ManagedFocusTrap. */

        }, {
          key: "_disable",
          value: function _disable() {
            this._inertStrategy.allowFocus(this);

            this.toggleAnchors(false);
          }
        }]);

        return ConfigurableFocusTrap;
      }(FocusTrap);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** IE 11 compatible closest implementation that is able to start from non-Element Nodes. */


      function closest(element, selector) {
        if (!(element instanceof Node)) {
          return null;
        }

        var curr = element;

        while (curr != null && !(curr instanceof Element)) {
          curr = curr.parentNode;
        }

        return curr && (hasNativeClosest ? curr.closest(selector) : polyfillClosest(curr, selector));
      }
      /** Polyfill for browsers without Element.closest. */


      function polyfillClosest(element, selector) {
        var curr = element;

        while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
          curr = curr.parentNode;
        }

        return curr || null;
      }

      var hasNativeClosest = typeof Element != 'undefined' && !!Element.prototype.closest;
      /** IE 11 compatible matches implementation. */

      function matches(element, selector) {
        return element.matches ? element.matches(selector) : element['msMatchesSelector'](selector);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Lightweight FocusTrapInertStrategy that adds a document focus event
       * listener to redirect focus back inside the FocusTrap.
       */


      var EventListenerFocusTrapInertStrategy = /*#__PURE__*/function () {
        function EventListenerFocusTrapInertStrategy() {
          _classCallCheck(this, EventListenerFocusTrapInertStrategy);

          /** Focus event handler. */
          this._listener = null;
        }
        /** Adds a document event listener that keeps focus inside the FocusTrap. */


        _createClass(EventListenerFocusTrapInertStrategy, [{
          key: "preventFocus",
          value: function preventFocus(focusTrap) {
            var _this40 = this;

            // Ensure there's only one listener per document
            if (this._listener) {
              focusTrap._document.removeEventListener('focus', this._listener, true);
            }

            this._listener = function (e) {
              return _this40._trapFocus(focusTrap, e);
            };

            focusTrap._ngZone.runOutsideAngular(function () {
              focusTrap._document.addEventListener('focus', _this40._listener, true);
            });
          }
          /** Removes the event listener added in preventFocus. */

        }, {
          key: "allowFocus",
          value: function allowFocus(focusTrap) {
            if (!this._listener) {
              return;
            }

            focusTrap._document.removeEventListener('focus', this._listener, true);

            this._listener = null;
          }
          /**
           * Refocuses the first element in the FocusTrap if the focus event target was outside
           * the FocusTrap.
           *
           * This is an event listener callback. The event listener is added in runOutsideAngular,
           * so all this code runs outside Angular as well.
           */

        }, {
          key: "_trapFocus",
          value: function _trapFocus(focusTrap, event) {
            var target = event.target;
            var focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
            // with an element inside the FocusTrap, ex. mat-select.

            if (!focusTrapRoot.contains(target) && closest(target, 'div.cdk-overlay-pane') === null) {
              // Some legacy FocusTrap usages have logic that focuses some element on the page
              // just before FocusTrap is destroyed. For backwards compatibility, wait
              // to be sure FocusTrap is still enabled before refocusing.
              setTimeout(function () {
                // Check whether focus wasn't put back into the focus trap while the timeout was pending.
                if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
                  focusTrap.focusFirstTabbableElement();
                }
              });
            }
          }
        }]);

        return EventListenerFocusTrapInertStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Configuration for creating a ConfigurableFocusTrap.
       */


      var ConfigurableFocusTrapConfig = function ConfigurableFocusTrapConfig() {
        _classCallCheck(this, ConfigurableFocusTrapConfig);

        /**
         * Whether to defer the creation of FocusTrap elements to be
         * done manually by the user. Default is to create them
         * automatically.
         */
        this.defer = false;
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The injection token used to specify the inert strategy. */


      var FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('FOCUS_TRAP_INERT_STRATEGY');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injectable that ensures only the most recently enabled FocusTrap is active. */

      var FocusTrapManager = /*#__PURE__*/function () {
        function FocusTrapManager() {
          _classCallCheck(this, FocusTrapManager);

          // A stack of the FocusTraps on the page. Only the FocusTrap at the
          // top of the stack is active.
          this._focusTrapStack = [];
        }
        /**
         * Disables the FocusTrap at the top of the stack, and then pushes
         * the new FocusTrap onto the stack.
         */


        _createClass(FocusTrapManager, [{
          key: "register",
          value: function register(focusTrap) {
            // Dedupe focusTraps that register multiple times.
            this._focusTrapStack = this._focusTrapStack.filter(function (ft) {
              return ft !== focusTrap;
            });
            var stack = this._focusTrapStack;

            if (stack.length) {
              stack[stack.length - 1]._disable();
            }

            stack.push(focusTrap);

            focusTrap._enable();
          }
          /**
           * Removes the FocusTrap from the stack, and activates the
           * FocusTrap that is the new top of the stack.
           */

        }, {
          key: "deregister",
          value: function deregister(focusTrap) {
            focusTrap._disable();

            var stack = this._focusTrapStack;
            var i = stack.indexOf(focusTrap);

            if (i !== -1) {
              stack.splice(i, 1);

              if (stack.length) {
                stack[stack.length - 1]._enable();
              }
            }
          }
        }]);

        return FocusTrapManager;
      }();

      FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
        return new (t || FocusTrapManager)();
      };

      FocusTrapManager.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FocusTrapManager_Factory() {
          return new FocusTrapManager();
        },
        token: FocusTrapManager,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Factory that allows easy instantiation of configurable focus traps. */


      var ConfigurableFocusTrapFactory = /*#__PURE__*/function () {
        function ConfigurableFocusTrapFactory(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
          _classCallCheck(this, ConfigurableFocusTrapFactory);

          this._checker = _checker;
          this._ngZone = _ngZone;
          this._focusTrapManager = _focusTrapManager;
          this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

          this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
        }

        _createClass(ConfigurableFocusTrapFactory, [{
          key: "create",
          value: function create(element) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new ConfigurableFocusTrapConfig();
            var configObject;

            if (typeof config === 'boolean') {
              configObject = new ConfigurableFocusTrapConfig();
              configObject.defer = config;
            } else {
              configObject = config;
            }

            return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
          }
        }]);

        return ConfigurableFocusTrapFactory;
      }();

      ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
        return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
      };

      ConfigurableFocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function ConfigurableFocusTrapFactory_Factory() {
          return new ConfigurableFocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FocusTrapManager), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_TRAP_INERT_STRATEGY, 8));
        },
        token: ConfigurableFocusTrapFactory,
        providedIn: "root"
      });

      ConfigurableFocusTrapFactory.ctorParameters = function () {
        return [{
          type: InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: FocusTrapManager
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [FOCUS_TRAP_INERT_STRATEGY]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: InteractivityChecker
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: FocusTrapManager
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [FOCUS_TRAP_INERT_STRATEGY]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
        providedIn: 'root',
        factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
      });
      /** @docs-private */

      function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
        return null;
      }
      /** Injection token that can be used to configure the default options for the LiveAnnouncer. */


      var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var LiveAnnouncer = /*#__PURE__*/function () {
        function LiveAnnouncer(elementToken, _ngZone, _document, _defaultOptions) {
          _classCallCheck(this, LiveAnnouncer);

          this._ngZone = _ngZone;
          this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
          // reference browser globals (HTMLElement, Document) on non-browser environments, since having
          // a class decorator causes TypeScript to preserve the constructor signature types.

          this._document = _document;
          this._liveElement = elementToken || this._createLiveElement();
        }

        _createClass(LiveAnnouncer, [{
          key: "announce",
          value: function announce(message) {
            var _this41 = this;

            var defaultOptions = this._defaultOptions;
            var politeness;
            var duration;

            for (var _len9 = arguments.length, args = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
              args[_key9 - 1] = arguments[_key9];
            }

            if (args.length === 1 && typeof args[0] === 'number') {
              duration = args[0];
            } else {
              politeness = args[0];
              duration = args[1];
            }

            this.clear();
            clearTimeout(this._previousTimeout);

            if (!politeness) {
              politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
            }

            if (duration == null && defaultOptions) {
              duration = defaultOptions.duration;
            } // TODO: ensure changing the politeness works on all environments we support.


            this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
            // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
            // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
            //   second time without clearing and then using a non-zero delay.
            // (using JAWS 17 at time of this writing).


            return this._ngZone.runOutsideAngular(function () {
              return new Promise(function (resolve) {
                clearTimeout(_this41._previousTimeout);
                _this41._previousTimeout = setTimeout(function () {
                  _this41._liveElement.textContent = message;
                  resolve();

                  if (typeof duration === 'number') {
                    _this41._previousTimeout = setTimeout(function () {
                      return _this41.clear();
                    }, duration);
                  }
                }, 100);
              });
            });
          }
          /**
           * Clears the current text from the announcer element. Can be used to prevent
           * screen readers from reading the text out again while the user is going
           * through the page landmarks.
           */

        }, {
          key: "clear",
          value: function clear() {
            if (this._liveElement) {
              this._liveElement.textContent = '';
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearTimeout(this._previousTimeout);

            if (this._liveElement && this._liveElement.parentNode) {
              this._liveElement.parentNode.removeChild(this._liveElement);

              this._liveElement = null;
            }
          }
        }, {
          key: "_createLiveElement",
          value: function _createLiveElement() {
            var elementClass = 'cdk-live-announcer-element';

            var previousElements = this._document.getElementsByClassName(elementClass);

            var liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


            for (var i = 0; i < previousElements.length; i++) {
              previousElements[i].parentNode.removeChild(previousElements[i]);
            }

            liveEl.classList.add(elementClass);
            liveEl.classList.add('cdk-visually-hidden');
            liveEl.setAttribute('aria-atomic', 'true');
            liveEl.setAttribute('aria-live', 'polite');

            this._document.body.appendChild(liveEl);

            return liveEl;
          }
        }]);

        return LiveAnnouncer;
      }();

      LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
        return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
      };

      LiveAnnouncer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function LiveAnnouncer_Factory() {
          return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
        },
        token: LiveAnnouncer,
        providedIn: "root"
      });

      LiveAnnouncer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LiveAnnouncer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
       * with a wider range of browsers and screen readers.
       */


      var CdkAriaLive = /*#__PURE__*/function () {
        function CdkAriaLive(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
          _classCallCheck(this, CdkAriaLive);

          this._elementRef = _elementRef;
          this._liveAnnouncer = _liveAnnouncer;
          this._contentObserver = _contentObserver;
          this._ngZone = _ngZone;
          this._politeness = 'polite';
        }
        /** The aria-live politeness level to use when announcing messages. */


        _createClass(CdkAriaLive, [{
          key: "politeness",
          get: function get() {
            return this._politeness;
          },
          set: function set(value) {
            var _this42 = this;

            this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';

            if (this._politeness === 'off') {
              if (this._subscription) {
                this._subscription.unsubscribe();

                this._subscription = null;
              }
            } else if (!this._subscription) {
              this._subscription = this._ngZone.runOutsideAngular(function () {
                return _this42._contentObserver.observe(_this42._elementRef).subscribe(function () {
                  // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
                  var elementText = _this42._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
                  // changes which we don't want to announce.

                  if (elementText !== _this42._previousAnnouncedText) {
                    _this42._liveAnnouncer.announce(elementText, _this42._politeness);

                    _this42._previousAnnouncedText = elementText;
                  }
                });
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._subscription) {
              this._subscription.unsubscribe();
            }
          }
        }]);

        return CdkAriaLive;
      }();

      CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
        return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      CdkAriaLive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkAriaLive,
        selectors: [["", "cdkAriaLive", ""]],
        inputs: {
          politeness: ["cdkAriaLive", "politeness"]
        },
        exportAs: ["cdkAriaLive"]
      });

      CdkAriaLive.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: LiveAnnouncer
        }, {
          type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CdkAriaLive.propDecorators = {
        politeness: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAriaLive']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAriaLive, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkAriaLive]',
            exportAs: 'cdkAriaLive'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: LiveAnnouncer
          }, {
            type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          politeness: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAriaLive']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */


      function isFakeMousedownFromScreenReader(event) {
        // We can typically distinguish between these faked mousedown events and real mousedown events
        // using the "buttons" property. While real mousedowns will indicate the mouse button that was
        // pressed (e.g. "1" for the left mouse button), faked mousedowns will usually set the property
        // value to 0.
        return event.buttons === 0;
      }
      /** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */


      function isFakeTouchstartFromScreenReader(event) {
        var touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0]; // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
        // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
        // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
        // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.

        return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
      // that a value of around 650ms seems appropriate.


      var TOUCH_BUFFER_MS = 650;
      /** InjectionToken for FocusMonitorOptions. */

      var FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-focus-monitor-default-options');
      /**
       * Event listener options that enable capturing and also
       * mark the listener as passive if the browser supports it.
       */

      var captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({
        passive: true,
        capture: true
      });
      /** Monitors mouse and keyboard events to determine the cause of focus events. */

      var FocusMonitor = /*#__PURE__*/function () {
        function FocusMonitor(_ngZone, _platform,
        /** @breaking-change 11.0.0 make document required */
        document, options) {
          var _this43 = this;

          _classCallCheck(this, FocusMonitor);

          this._ngZone = _ngZone;
          this._platform = _platform;
          /** The focus origin that the next focus event is a result of. */

          this._origin = null;
          /** Whether the window has just been focused. */

          this._windowFocused = false;
          /** Map of elements being monitored to their info. */

          this._elementInfo = new Map();
          /** The number of elements currently being monitored. */

          this._monitoredElementCount = 0;
          /**
           * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
           * as well as the number of monitored elements that they contain. We have to treat focus/blur
           * handlers differently from the rest of the events, because the browser won't emit events
           * to the document when focus moves inside of a shadow root.
           */

          this._rootNodeFocusListenerCount = new Map();
          /**
           * Event listener for `keydown` events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */

          this._documentKeydownListener = function () {
            // On keydown record the origin and clear any touch event that may be in progress.
            _this43._lastTouchTarget = null;

            _this43._setOriginForCurrentEventQueue('keyboard');
          };
          /**
           * Event listener for `mousedown` events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._documentMousedownListener = function (event) {
            // On mousedown record the origin only if there is not touch
            // target, since a mousedown can happen as a result of a touch event.
            if (!_this43._lastTouchTarget) {
              // In some cases screen readers fire fake `mousedown` events instead of `keydown`.
              // Resolve the focus source to `keyboard` if we detect one of them.
              var source = isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse';

              _this43._setOriginForCurrentEventQueue(source);
            }
          };
          /**
           * Event listener for `touchstart` events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._documentTouchstartListener = function (event) {
            // Some screen readers will fire a fake `touchstart` event if an element is activated using
            // the keyboard while on a device with a touchsreen. Consider such events as keyboard focus.
            if (!isFakeTouchstartFromScreenReader(event)) {
              // When the touchstart event fires the focus event is not yet in the event queue. This means
              // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
              // see if a focus happens.
              if (_this43._touchTimeoutId != null) {
                clearTimeout(_this43._touchTimeoutId);
              }

              _this43._lastTouchTarget = getTarget(event);
              _this43._touchTimeoutId = setTimeout(function () {
                return _this43._lastTouchTarget = null;
              }, TOUCH_BUFFER_MS);
            } else if (!_this43._lastTouchTarget) {
              _this43._setOriginForCurrentEventQueue('keyboard');
            }
          };
          /**
           * Event listener for `focus` events on the window.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._windowFocusListener = function () {
            // Make a note of when the window regains focus, so we can
            // restore the origin info for the focused element.
            _this43._windowFocused = true;
            _this43._windowFocusTimeoutId = setTimeout(function () {
              return _this43._windowFocused = false;
            });
          };
          /**
           * Event listener for `focus` and 'blur' events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */


          this._rootNodeFocusAndBlurListener = function (event) {
            var target = getTarget(event);
            var handler = event.type === 'focus' ? _this43._onFocus : _this43._onBlur; // We need to walk up the ancestor chain in order to support `checkChildren`.

            for (var element = target; element; element = element.parentElement) {
              handler.call(_this43, event, element);
            }
          };

          this._document = document;
          this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0
          /* IMMEDIATE */
          ;
        }

        _createClass(FocusMonitor, [{
          key: "monitor",
          value: function monitor(element) {
            var checkChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element); // Do nothing if we're not on the browser platform or the passed in node isn't an element.

            if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            } // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
            // the shadow root, rather than the `document`, because the browser won't emit focus events
            // to the `document`, if focus is moving within the same shadow root.


            var rootNode = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["_getShadowRoot"])(nativeElement) || this._getDocument();

            var cachedInfo = this._elementInfo.get(nativeElement); // Check if we're already monitoring this element.


            if (cachedInfo) {
              if (checkChildren) {
                // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
                // observers into ones that behave as if `checkChildren` was turned on. We need a more
                // robust solution.
                cachedInfo.checkChildren = true;
              }

              return cachedInfo.subject;
            } // Create monitored element info.


            var info = {
              checkChildren: checkChildren,
              subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
              rootNode: rootNode
            };

            this._elementInfo.set(nativeElement, info);

            this._registerGlobalListeners(info);

            return info.subject;
          }
        }, {
          key: "stopMonitoring",
          value: function stopMonitoring(element) {
            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);

            var elementInfo = this._elementInfo.get(nativeElement);

            if (elementInfo) {
              elementInfo.subject.complete();

              this._setClasses(nativeElement);

              this._elementInfo["delete"](nativeElement);

              this._removeGlobalListeners(elementInfo);
            }
          }
        }, {
          key: "focusVia",
          value: function focusVia(element, origin, options) {
            var _this44 = this;

            var nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);

            var focusedElement = this._getDocument().activeElement; // If the element is focused already, calling `focus` again won't trigger the event listener
            // which means that the focus classes won't be updated. If that's the case, update the classes
            // directly without waiting for an event.


            if (nativeElement === focusedElement) {
              this._getClosestElementsInfo(nativeElement).forEach(function (_ref2) {
                var _ref3 = _slicedToArray(_ref2, 2),
                    currentElement = _ref3[0],
                    info = _ref3[1];

                return _this44._originChanged(currentElement, origin, info);
              });
            } else {
              this._setOriginForCurrentEventQueue(origin); // `focus` isn't available on the server


              if (typeof nativeElement.focus === 'function') {
                nativeElement.focus(options);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this45 = this;

            this._elementInfo.forEach(function (_info, element) {
              return _this45.stopMonitoring(element);
            });
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
        }, {
          key: "_toggleClass",
          value: function _toggleClass(element, className, shouldSet) {
            if (shouldSet) {
              element.classList.add(className);
            } else {
              element.classList.remove(className);
            }
          }
        }, {
          key: "_getFocusOrigin",
          value: function _getFocusOrigin(event) {
            // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
            // 1) The window has just regained focus, in which case we want to restore the focused state of
            //    the element from before the window blurred.
            // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
            // 3) The element was programmatically focused, in which case we should mark the origin as
            //    'program'.
            if (this._origin) {
              return this._origin;
            }

            if (this._windowFocused && this._lastFocusOrigin) {
              return this._lastFocusOrigin;
            } else if (this._wasCausedByTouch(event)) {
              return 'touch';
            } else {
              return 'program';
            }
          }
          /**
           * Sets the focus classes on the element based on the given focus origin.
           * @param element The element to update the classes on.
           * @param origin The focus origin.
           */

        }, {
          key: "_setClasses",
          value: function _setClasses(element, origin) {
            this._toggleClass(element, 'cdk-focused', !!origin);

            this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');

            this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');

            this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');

            this._toggleClass(element, 'cdk-program-focused', origin === 'program');
          }
          /**
           * Sets the origin and schedules an async function to clear it at the end of the event queue.
           * If the detection mode is 'eventual', the origin is never cleared.
           * @param origin The origin to set.
           */

        }, {
          key: "_setOriginForCurrentEventQueue",
          value: function _setOriginForCurrentEventQueue(origin) {
            var _this46 = this;

            this._ngZone.runOutsideAngular(function () {
              _this46._origin = origin;

              if (_this46._detectionMode === 0
              /* IMMEDIATE */
              ) {
                  // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
                  // tick after the interaction event fired. To ensure the focus origin is always correct,
                  // the focus origin will be determined at the beginning of the next tick.
                  _this46._originTimeoutId = setTimeout(function () {
                    return _this46._origin = null;
                  }, 1);
                }
            });
          }
          /**
           * Checks whether the given focus event was caused by a touchstart event.
           * @param event The focus event to check.
           * @returns Whether the event was caused by a touch.
           */

        }, {
          key: "_wasCausedByTouch",
          value: function _wasCausedByTouch(event) {
            // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
            // Consider the following dom structure:
            //
            // <div #parent tabindex="0" cdkFocusClasses>
            //   <div #child (click)="#parent.focus()"></div>
            // </div>
            //
            // If the user touches the #child element and the #parent is programmatically focused as a
            // result, this code will still consider it to have been caused by the touch event and will
            // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
            // relatively small edge-case that can be worked around by using
            // focusVia(parentEl, 'program') to focus the parent element.
            //
            // If we decide that we absolutely must handle this case correctly, we can do so by listening
            // for the first focus event after the touchstart, and then the first blur event after that
            // focus event. When that blur event fires we know that whatever follows is not a result of the
            // touchstart.
            var focusTarget = getTarget(event);
            return this._lastTouchTarget instanceof Node && focusTarget instanceof Node && (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
          }
          /**
           * Handles focus events on a registered element.
           * @param event The focus event.
           * @param element The monitored element.
           */

        }, {
          key: "_onFocus",
          value: function _onFocus(event, element) {
            // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
            // focus event affecting the monitored element. If we want to use the origin of the first event
            // instead we should check for the cdk-focused class here and return if the element already has
            // it. (This only matters for elements that have includesChildren = true).
            // If we are not counting child-element-focus as focused, make sure that the event target is the
            // monitored element itself.
            var elementInfo = this._elementInfo.get(element);

            if (!elementInfo || !elementInfo.checkChildren && element !== getTarget(event)) {
              return;
            }

            this._originChanged(element, this._getFocusOrigin(event), elementInfo);
          }
          /**
           * Handles blur events on a registered element.
           * @param event The blur event.
           * @param element The monitored element.
           */

        }, {
          key: "_onBlur",
          value: function _onBlur(event, element) {
            // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
            // order to focus another child of the monitored element.
            var elementInfo = this._elementInfo.get(element);

            if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
              return;
            }

            this._setClasses(element);

            this._emitOrigin(elementInfo.subject, null);
          }
        }, {
          key: "_emitOrigin",
          value: function _emitOrigin(subject, origin) {
            this._ngZone.run(function () {
              return subject.next(origin);
            });
          }
        }, {
          key: "_registerGlobalListeners",
          value: function _registerGlobalListeners(elementInfo) {
            var _this47 = this;

            if (!this._platform.isBrowser) {
              return;
            }

            var rootNode = elementInfo.rootNode;
            var rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;

            if (!rootNodeFocusListeners) {
              this._ngZone.runOutsideAngular(function () {
                rootNode.addEventListener('focus', _this47._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.addEventListener('blur', _this47._rootNodeFocusAndBlurListener, captureEventListenerOptions);
              });
            }

            this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1); // Register global listeners when first element is monitored.


            if (++this._monitoredElementCount === 1) {
              // Note: we listen to events in the capture phase so we
              // can detect them even if the user stops propagation.
              this._ngZone.runOutsideAngular(function () {
                var document = _this47._getDocument();

                var window = _this47._getWindow();

                document.addEventListener('keydown', _this47._documentKeydownListener, captureEventListenerOptions);
                document.addEventListener('mousedown', _this47._documentMousedownListener, captureEventListenerOptions);
                document.addEventListener('touchstart', _this47._documentTouchstartListener, captureEventListenerOptions);
                window.addEventListener('focus', _this47._windowFocusListener);
              });
            }
          }
        }, {
          key: "_removeGlobalListeners",
          value: function _removeGlobalListeners(elementInfo) {
            var rootNode = elementInfo.rootNode;

            if (this._rootNodeFocusListenerCount.has(rootNode)) {
              var rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);

              if (rootNodeFocusListeners > 1) {
                this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
              } else {
                rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);

                this._rootNodeFocusListenerCount["delete"](rootNode);
              }
            } // Unregister global listeners when last element is unmonitored.


            if (! --this._monitoredElementCount) {
              var _document2 = this._getDocument();

              var _window = this._getWindow();

              _document2.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);

              _document2.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);

              _document2.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);

              _window.removeEventListener('focus', this._windowFocusListener); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


              clearTimeout(this._windowFocusTimeoutId);
              clearTimeout(this._touchTimeoutId);
              clearTimeout(this._originTimeoutId);
            }
          }
          /** Updates all the state on an element once its focus origin has changed. */

        }, {
          key: "_originChanged",
          value: function _originChanged(element, origin, elementInfo) {
            this._setClasses(element, origin);

            this._emitOrigin(elementInfo.subject, origin);

            this._lastFocusOrigin = origin;
          }
          /**
           * Collects the `MonitoredElementInfo` of a particular element and
           * all of its ancestors that have enabled `checkChildren`.
           * @param element Element from which to start the search.
           */

        }, {
          key: "_getClosestElementsInfo",
          value: function _getClosestElementsInfo(element) {
            var results = [];

            this._elementInfo.forEach(function (info, currentElement) {
              if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
                results.push([currentElement, info]);
              }
            });

            return results;
          }
        }]);

        return FocusMonitor;
      }();

      FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
        return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
      };

      FocusMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function FocusMonitor_Factory() {
          return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
        },
        token: FocusMonitor,
        providedIn: "root"
      });

      FocusMonitor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusMonitor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /** Gets the target of an event, accounting for Shadow DOM. */


      function getTarget(event) {
        // If an event is bound outside the Shadow DOM, the `event.target` will
        // point to the shadow root so we have to use `composedPath` instead.
        return event.composedPath ? event.composedPath()[0] : event.target;
      }
      /**
       * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
       * programmatically) and adds corresponding classes to the element.
       *
       * There are two variants of this directive:
       * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
       *    focused.
       * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
       */


      var CdkMonitorFocus = /*#__PURE__*/function () {
        function CdkMonitorFocus(_elementRef, _focusMonitor) {
          _classCallCheck(this, CdkMonitorFocus);

          this._elementRef = _elementRef;
          this._focusMonitor = _focusMonitor;
          this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(CdkMonitorFocus, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this48 = this;

            var element = this._elementRef.nativeElement;
            this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(function (origin) {
              return _this48.cdkFocusChange.emit(origin);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);

            if (this._monitorSubscription) {
              this._monitorSubscription.unsubscribe();
            }
          }
        }]);

        return CdkMonitorFocus;
      }();

      CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
        return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusMonitor));
      };

      CdkMonitorFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkMonitorFocus,
        selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
        outputs: {
          cdkFocusChange: "cdkFocusChange"
        }
      });

      CdkMonitorFocus.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FocusMonitor
        }];
      };

      CdkMonitorFocus.propDecorators = {
        cdkFocusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkMonitorFocus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: FocusMonitor
          }];
        }, {
          cdkFocusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** CSS class applied to the document body when in black-on-white high-contrast mode. */


      var BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
      /** CSS class applied to the document body when in white-on-black high-contrast mode. */

      var WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
      /** CSS class applied to the document body when in high-contrast mode. */

      var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
      /**
       * Service to determine whether the browser is currently in a high-contrast-mode environment.
       *
       * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
       * changes the appearance of all applications, including web applications, to dramatically increase
       * contrast.
       *
       * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
       * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
       * browser extension.
       */

      var HighContrastModeDetector = /*#__PURE__*/function () {
        function HighContrastModeDetector(_platform, document) {
          _classCallCheck(this, HighContrastModeDetector);

          this._platform = _platform;
          this._document = document;
        }
        /** Gets the current high-contrast-mode for the page. */


        _createClass(HighContrastModeDetector, [{
          key: "getHighContrastMode",
          value: function getHighContrastMode() {
            if (!this._platform.isBrowser) {
              return 0
              /* NONE */
              ;
            } // Create a test element with an arbitrary background-color that is neither black nor
            // white; high-contrast mode will coerce the color to either black or white. Also ensure that
            // appending the test element to the DOM does not affect layout by absolutely positioning it


            var testElement = this._document.createElement('div');

            testElement.style.backgroundColor = 'rgb(1,2,3)';
            testElement.style.position = 'absolute';

            this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
            // browsers. Once we get this color, we no longer need the test element. Access the `window`
            // via the document so we can fake it in tests. Note that we have extra null checks, because
            // this logic will likely run during app bootstrap and throwing can break the entire app.


            var documentWindow = this._document.defaultView || window;
            var computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
            var computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');

            this._document.body.removeChild(testElement);

            switch (computedColor) {
              case 'rgb(0,0,0)':
                return 2
                /* WHITE_ON_BLACK */
                ;

              case 'rgb(255,255,255)':
                return 1
                /* BLACK_ON_WHITE */
                ;
            }

            return 0
            /* NONE */
            ;
          }
          /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */

        }, {
          key: "_applyBodyHighContrastModeCssClasses",
          value: function _applyBodyHighContrastModeCssClasses() {
            if (this._platform.isBrowser && this._document.body) {
              var bodyClasses = this._document.body.classList; // IE11 doesn't support `classList` operations with multiple arguments

              bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
              bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
              bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
              var mode = this.getHighContrastMode();

              if (mode === 1
              /* BLACK_ON_WHITE */
              ) {
                  bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                  bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
                } else if (mode === 2
              /* WHITE_ON_BLACK */
              ) {
                  bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                  bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
                }
            }
          }
        }]);

        return HighContrastModeDetector;
      }();

      HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
        return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      };

      HighContrastModeDetector.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function HighContrastModeDetector_Factory() {
          return new HighContrastModeDetector(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
        },
        token: HighContrastModeDetector,
        providedIn: "root"
      });

      HighContrastModeDetector.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HighContrastModeDetector, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var A11yModule = function A11yModule(highContrastModeDetector) {
        _classCallCheck(this, A11yModule);

        highContrastModeDetector._applyBodyHighContrastModeCssClasses();
      };

      A11yModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: A11yModule
      });
      A11yModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function A11yModule_Factory(t) {
          return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HighContrastModeDetector));
        },
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]]]
      });

      A11yModule.ctorParameters = function () {
        return [{
          type: HighContrastModeDetector
        }];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](A11yModule, {
          declarations: function declarations() {
            return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
          },
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]];
          },
          exports: function exports() {
            return [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](A11yModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]],
            declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
            exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
          }]
        }], function () {
          return [{
            type: HighContrastModeDetector
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=a11y.js.map

      /***/

    },

    /***/
    "uJg1":
    /*!*****************************************************************!*\
      !*** ./libs/shared/static-pages/src/lib/static-pages.module.ts ***!
      \*****************************************************************/

    /*! exports provided: StaticPagesModule */

    /***/
    function uJg1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaticPagesModule", function () {
        return StaticPagesModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @scullyio/ng-lib */
      "sbAP");
      /* harmony import */


      var _components_static_pages_staticpages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/static-pages/staticpages.component */
      "lV9u");
      /* harmony import */


      var _staticpages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./staticpages-routing.module */
      "N1wD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StaticPagesModule = function StaticPagesModule() {
        _classCallCheck(this, StaticPagesModule);
      };

      StaticPagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: StaticPagesModule
      });
      StaticPagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function StaticPagesModule_Factory(t) {
          return new (t || StaticPagesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _staticpages_routing_module__WEBPACK_IMPORTED_MODULE_4__["StaticpagesRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](StaticPagesModule, {
          declarations: [_components_static_pages_staticpages_component__WEBPACK_IMPORTED_MODULE_3__["StaticpagesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _staticpages_routing_module__WEBPACK_IMPORTED_MODULE_4__["StaticpagesRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]]
        });
      })();
      /***/

    },

    /***/
    "xz+E":
    /*!***************************************************!*\
      !*** ./node_modules/@angular/cdk/fesm2015/cdk.js ***!
      \***************************************************/

    /*! exports provided: VERSION */

    /***/
    function xzE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Current version of the Angular Component Development Kit. */


      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('11.2.5');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      //# sourceMappingURL=cdk.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=static-pages-shared-static-pages-es5.js.map
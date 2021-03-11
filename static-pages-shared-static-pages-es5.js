(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        var _this = this;

        _classCallCheck(this, StaticpagesComponent);

        this.router = router;
        this.scully = scully;
        this.current$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_) {
          return _this.scully.getCurrent();
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
            for (var _len = arguments.length, err = new Array(_len), _key = 0; _key < _len; _key++) {
              err[_key] = arguments[_key];
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
          var _this2 = this;

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
            if (basePathOnly(_this2.initialUrl) === basePathOnly(e.url)) {
              /** don't kick off on initial load to prevent flicker */
              _this2.initialUrl = initialStateDone;
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
            return _this2.stateBS.next(undefined);
          }),
          /** prevent emitting before navigation to _this_ URL is done. */
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return _this2.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
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
            var _this3 = this;

            if (isScullyGenerated()) {
              return this.getState(name);
            }

            return originalState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
            /**
            * @param {?} state
            * @return {?}
            */
            function (state) {
              return _this3.setState(name, state);
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
              var _this4 = this;

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
                        return base(url) === _this4.currentBaseUrl;
                      }), // Get the next route's data from the the index or data file
                      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(
                      /**
                      * @param {?} url
                      * @return {?}
                      */
                      function (url) {
                        return _this4.inlineOnly ? _this4.readFromIndex(url) : _this4.readFromJson(url);
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
                        _this4.stateBS.next(newState);
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
                          _this4.currentBaseUrl = '//';
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
          var _this5 = this;

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
              return manualIdle ? ev.urlAfterRedirects !== _this5.initialUrl : true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
            /**
            * @return {?}
            */
            function () {
              return _this5.zoneIdleCheck();
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
              var _this6 = this;

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
                            window.dispatchEvent(_this6.appTimeout);
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

                          _this6.zone.run(
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
                              window.dispatchEvent(_this6.appReady);

                              _this6.setState('idle', true);
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
              var _this7 = this;

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
                        return setTimeout(r, _this7.imState.value.timeOut);
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
            var _this8 = this;

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
              return _this8.available$;
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
          var _this9 = this;

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
            return _this9.replaceContent();
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
              var _this10 = this;

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

                          var url = "".concat(_this10.conf.baseURIForScullyContent, "/").concat(basePathOnly(uri.pathname), "/index.html");
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
                        return document.querySelectorAll('[href]').forEach(_this10.upgradeToRoutelink.bind(_this10));
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
              var _this11 = this;

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
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                            var _this12 = this;

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
                                        return _this12.replaceContent();
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

    }
  }]);
})();
//# sourceMappingURL=static-pages-shared-static-pages-es5.js.map
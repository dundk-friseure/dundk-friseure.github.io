(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***********************************************!*\
      !*** multi ./apps/dundk-friseure/src/main.ts ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/dundk-friseure/dundk-friseure/apps/dundk-friseure/src/main.ts */
      "8G73");
      /***/
    },

    /***/
    "3wcl":
    /*!***************************************************!*\
      !*** ./apps/dundk-friseure/src/app/app.module.ts ***!
      \***************************************************/

    /*! exports provided: AppModule */

    /***/
    function wcl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _static_pages_shared_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @static-pages/shared/ui */
      "bsWm");
      /* harmony import */


      var angular2_cookie_law__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular2-cookie-law */
      "5soC");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "L2O8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _static_pages_shared_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([], {
          anchorScrolling: 'enabled',
          scrollPositionRestoration: 'enabled'
        }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], angular2_cookie_law__WEBPACK_IMPORTED_MODULE_4__["CookieLawModule"], _static_pages_shared_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _static_pages_shared_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], angular2_cookie_law__WEBPACK_IMPORTED_MODULE_4__["CookieLawModule"], _static_pages_shared_ui__WEBPACK_IMPORTED_MODULE_3__["UiModule"]]
        });
      })();
      /***/

    },

    /***/
    "8G73":
    /*!*****************************************!*\
      !*** ./apps/dundk-friseure/src/main.ts ***!
      \*****************************************/

    /*! no exports provided */

    /***/
    function G73(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "3wcl");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "NpQi");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "L2O8":
    /*!******************************************************!*\
      !*** ./apps/dundk-friseure/src/app/app.component.ts ***!
      \******************************************************/

    /*! exports provided: AppComponent */

    /***/
    function L2O8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _libs_shared_ui_src_lib_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../libs/shared/ui/src/lib/components/navbar/navbar.component */
      "utJN");
      /* harmony import */


      var _libs_shared_ui_src_lib_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../libs/shared/ui/src/lib/components/footer/footer.component */
      "bZll");
      /* harmony import */


      var angular2_cookie_law__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular2-cookie-law */
      "5soC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return [];
      };

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["dundk-friseure-root"]],
        decls: 13,
        vars: 4,
        consts: [[1, "navbar", 3, "links"], ["header", ""], [1, "cover", "full"], [1, "container"], [1, "footer"], ["routerLink", "/datenschutz"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "static-pages-shared-ui-navbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dundk Friseure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Coming Soon....");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "static-pages-shared-ui-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "cookie-law");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Diese Website verwendet Cookies. Durch die Nutzung erkl\xE4rst du dich mit dem Einsatz von Cookies einverstanden.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Datenschutz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("links", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(/assets/img/cover.jpg)");
          }
        },
        directives: [_libs_shared_ui_src_lib_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _libs_shared_ui_src_lib_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], angular2_cookie_law__WEBPACK_IMPORTED_MODULE_3__["CookieLawContainerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: [".navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 60px;\n  top: 0;\n  z-index: 4;\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  z-index: 3;\n  margin: -70px auto;\n  padding: 0 10% 0 10%;\n}\n\n@media only screen and (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 60px 0 0 0;\n    margin: -76px 2% 0 2%;\n  }\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n.fullSize[_ngcontent-%COMP%] {\n  padding: 0 2% 0 2%;\n}\n\n@media only screen and (min-width: 768px) {\n  .fullSize[_ngcontent-%COMP%] {\n    padding: 0 0 0 0;\n  }\n}\n\n.cover[_ngcontent-%COMP%] {\n  height: 60vh;\n  background-position: 50%;\n  background-size: cover;\n  transform: translate3d(0px, 0px, 0px);\n  z-index: 2;\n}\n\n.cover.full[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.fullSize[_ngcontent-%COMP%] {\n  padding: 0 2% 0 2%;\n}\n\n@media only screen and (min-width: 768px) {\n  .fullSize[_ngcontent-%COMP%] {\n    padding: 0 0 0 0;\n  }\n}\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes focus-in-contract {\n  0% {\n    letter-spacing: 1em;\n    filter: blur(12px);\n    opacity: 0;\n  }\n  100% {\n    filter: blur(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes focus-in-contract {\n  0% {\n    letter-spacing: 1em;\n    filter: blur(12px);\n    opacity: 0;\n  }\n  100% {\n    filter: blur(0px);\n    opacity: 1;\n  }\n}\n\n.cover[_ngcontent-%COMP%] {\n  height: 60vh;\n  -webkit-animation: fadein 2s ease-in;\n          animation: fadein 2s ease-in;\n  background-position: 50%;\n  background-size: cover;\n  transform: translate3d(0px, 0px, 0px);\n  z-index: 2;\n}\n\n.cover[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  top: 50%;\n  position: absolute;\n  z-index: 3;\n  color: white;\n  width: 100%;\n}\n\n.cover[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 50px;\n  text-decoration: underline;\n  -webkit-animation: focus-in-contract 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: focus-in-contract 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.cover.full[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUVBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBQUU7RUFORjtJQU9JLG1CQUFBO0lBQ0EscUJBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFGRTtFQUZGO0lBR0ksZ0JBQUE7RUFLRjtBQUNGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7QUFNRjs7QUFKQTtFQUNFLGtCQUFBO0FBT0Y7O0FBTkU7RUFGRjtJQUdJLGdCQUFBO0VBU0Y7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsVUFBQTtFQVVGO0VBUkE7SUFDRSxVQUFBO0VBVUY7QUFDRjs7QUFoQkE7RUFDRTtJQUNFLFVBQUE7RUFVRjtFQVJBO0lBQ0UsVUFBQTtFQVVGO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLG1CQUFBO0lBRUEsa0JBQUE7SUFDQSxVQUFBO0VBU0Y7RUFQQTtJQUVFLGlCQUFBO0lBQ0EsVUFBQTtFQVNGO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLG1CQUFBO0lBRUEsa0JBQUE7SUFDQSxVQUFBO0VBU0Y7RUFQQTtJQUVFLGlCQUFBO0lBQ0EsVUFBQTtFQVNGO0FBQ0Y7O0FBTkE7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7QUFRRjs7QUFQRTtFQUNFLFFBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVFKOztBQVBJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtRkFBQTtFQUVBLDJFQUFBO0FBUU47O0FBSEE7RUFDRSxhQUFBO0FBTUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICB6LWluZGV4OiAzO1xuICBtYXJnaW46IC03MHB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMTAlIDAgMTAlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogNjBweCAwIDAgMDtcbiAgICBtYXJnaW46IC03NnB4IDIlIDAgMiU7XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGxTaXplIHtcbiAgcGFkZGluZzogMCAyJSAwIDIlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgfVxufVxuXG4uY292ZXIge1xuICBoZWlnaHQ6IDYwdmg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgei1pbmRleDogMjtcbn1cbi5jb3Zlci5mdWxsIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5mdWxsU2l6ZSB7XG4gIHBhZGRpbmc6IDAgMiUgMCAyJTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZm9jdXMtaW4tY29udHJhY3Qge1xuICAwJSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZm9jdXMtaW4tY29udHJhY3Qge1xuICAwJSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwcHgpO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmNvdmVyIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICBhbmltYXRpb246IGZhZGVpbiAycyBlYXNlLWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gIHotaW5kZXg6IDI7XG4gIC5jb250YWluZXIge1xuICAgIHRvcDogNTAlO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGgxIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZvY3VzLWluLWNvbnRyYWN0IDAuN3NcbiAgICAgICAgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG4gICAgICBhbmltYXRpb246IGZvY3VzLWluLWNvbnRyYWN0IDAuN3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpXG4gICAgICAgIGJvdGg7XG4gICAgfVxuICB9XG59XG4uY292ZXIuZnVsbCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "MAn7":
    /*!*********************************************!*\
      !*** ./libs/shared/ui/src/lib/Ui.module.ts ***!
      \*********************************************/

    /*! exports provided: UiModule */

    /***/
    function MAn7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiModule", function () {
        return UiModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "bZll");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "utJN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UiModule = function UiModule() {
        _classCallCheck(this, UiModule);
      };

      UiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: UiModule
      });
      UiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        factory: function UiModule_Factory(t) {
          return new (t || UiModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([]), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](UiModule, {
          declarations: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]],
          exports: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]]
        });
      })();
      /***/

    },

    /***/
    "NpQi":
    /*!*************************************************************!*\
      !*** ./apps/dundk-friseure/src/environments/environment.ts ***!
      \*************************************************************/

    /*! exports provided: environment */

    /***/
    function NpQi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */

      /***/
    },

    /***/
    "bZll":
    /*!**********************************************************************!*\
      !*** ./libs/shared/ui/src/lib/components/footer/footer.component.ts ***!
      \**********************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function bZll(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");

      function FooterComponent_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://wa.me/" + ctx_r0.whatsapp.phone + "?text=" + ctx_r0.whatsapp.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = [[["", "links", ""]]];
      var _c1 = ["[links]"];

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      };

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["static-pages-shared-ui-footer"]],
        inputs: {
          whatsapp: "whatsapp"
        },
        ngContentSelectors: _c1,
        decls: 5,
        vars: 1,
        consts: [[1, "whatsapp"], ["mat-list-ite", "", "class", "icon", 3, "href", 4, "ngIf"], ["color", "primary", 1, "footer"], [1, "list"], ["mat-list-ite", "", 1, "icon", 3, "href"], [1, "icon-whatsapp"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_a_1_Template, 2, 1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.whatsapp);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"]],
        styles: [".list[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\n.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  flex-direction: column;\n  color: white;\n  text-decoration: none;\n}\n.footer[_ngcontent-%COMP%] {\n  background-color: black;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background-size: cover;\n  transform: translate3d(0px, 0px, 0px);\n}\n.whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 10px;\n  bottom: 30%;\n  z-index: 3;\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFBRjtBQUNFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUVBO0VBQ0UsdUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcbiAgLy9wYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGEge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbn1cblxuLndoYXRzYXBwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAzMCU7XG4gIHotaW5kZXg6IDM7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "bsWm":
    /*!*************************************!*\
      !*** ./libs/shared/ui/src/index.ts ***!
      \*************************************/

    /*! exports provided: UiModule */

    /***/
    function bsWm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_Ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/Ui.module */
      "MAn7");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UiModule", function () {
        return _lib_Ui_module__WEBPACK_IMPORTED_MODULE_0__["UiModule"];
      });
      /***/

    },

    /***/
    "utJN":
    /*!**********************************************************************!*\
      !*** ./libs/shared/ui/src/lib/components/navbar/navbar.component.ts ***!
      \**********************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function utJN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function NavbarComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

            return _r3.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function NavbarComponent_ng_container_8_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", link_r9.href);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", link_r9.name, " ");
        }
      }

      function NavbarComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavbarComponent_ng_container_8_a_1_Template, 2, 2, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.links);
        }
      }

      function NavbarComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r2.contact.href);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.contact.name);
        }
      }

      function NavbarComponent_a_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var link_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", link_r10.href);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r10.name);
        }
      }

      function NavbarComponent_a_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r5.contact.href)("disableRipple", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.contact.name);
        }
      }

      var _c0 = [[["", "logo", ""]], [["", "header", ""]]];
      var _c1 = ["[logo]", "[header]"];

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(eRef, changeDetectorRef, media, router) {
          _classCallCheck(this, NavbarComponent);

          this.eRef = eRef;
          this.media = media;
          this.router = router;
          this.isMobile = this.media.matchMedia('(max-width: 600px)');

          this._mobileQueryListener = function () {
            return changeDetectorRef.detectChanges();
          };

          this.isMobile.addListener(this._mobileQueryListener);
        }

        _createClass(NavbarComponent, [{
          key: "clickout",
          value: function clickout(event) {
            if (!this.eRef.nativeElement.contains(event.target)) {
              this.sidenavContainer.close();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.router.events.subscribe(function (event) {
              _this.sidenavContainer.close();
            });
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["static-pages-shared-ui-navbar"]],
        viewQuery: function NavbarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sidenavContainer = _t.first);
          }
        },
        hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_click_HostBindingHandler($event) {
              return ctx.clickout($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
          }
        },
        inputs: {
          links: "links",
          contact: "contact"
        },
        ngContentSelectors: _c1,
        decls: 16,
        vars: 6,
        consts: [[1, "toolbar"], ["color", "primary", 1, "toolbar"], [1, "brand"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["routerLink", "/"], [4, "ngIf"], ["class", "links docs-navbar-hide-small", 4, "ngIf"], ["color", "primary", "mode", "over", "position", "start", "fixedTopGap", "56", 3, "fixedInViewport"], ["snav", ""], [2, "width", "50vw"], ["class", "links", "mat-list-item", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "routerLink", "disableRipple", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], ["class", "links docs-navbar-hide-small", "mat-button", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "links", "docs-navbar-hide-small", 3, "routerLink"], [1, "links", "docs-navbar-hide-small"], ["mat-button", "", 3, "routerLink"], [1, "text"], ["mat-list-item", "", 1, "links", 3, "routerLink"], ["mat-line", ""], ["mat-list-item", "", 3, "routerLink", "disableRipple"], ["matListIcon", ""]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NavbarComponent_button_4_Template, 3, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavbarComponent_ng_container_8_Template, 2, 1, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavbarComponent_div_9_Template, 6, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-sidenav-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-sidenav", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-nav-list", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NavbarComponent_a_14_Template, 3, 2, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NavbarComponent_a_15_Template, 5, 3, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile.matches && ctx.contact);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedInViewport", ctx.isMobile.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.links);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contact);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListIconCssMatStyler"]],
        styles: [".links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  min-width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFRTtFQUNFLGNBQUE7QUFDSiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlua3MgYSAudGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udG9vbGJhciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbm1hdC10b29sYmFyIHtcbiAgLmJyYW5kIHtcbiAgICBtaW4td2lkdGg6IDYwJTtcbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
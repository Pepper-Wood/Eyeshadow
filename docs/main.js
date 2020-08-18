(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _palette_palette_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palette/palette.component */ "./src/app/palette/palette.component.ts");





const routes = [
    { path: 'palette/:slug', component: _palette_palette_component__WEBPACK_IMPORTED_MODULE_2__["PaletteComponent"] },
    { path: 'palette/:slug/:im', component: _palette_palette_component__WEBPACK_IMPORTED_MODULE_2__["PaletteComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_palettes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/palettes.json */ "./src/assets/palettes.json");
var _assets_palettes_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/palettes.json */ "./src/assets/palettes.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AppComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const palette_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "palette/", palette_r1.key, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", palette_r1.value.company, ": ", palette_r1.value.name, " ");
} }
const _c0 = function () { return ["/"]; };
class AppComponent {
    constructor() {
        this.title = 'eyeshadow';
        this.palettes = _assets_palettes_json__WEBPACK_IMPORTED_MODULE_1__;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 39, vars: 5, consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar"], [1, "container"], [1, "navbar-brand"], [1, "logo", 3, "routerLink"], ["id", "logo"], ["role", "button", "aria-label", "menu", "aria-expanded", "false", "data-target", "navbarBasicExample", 1, "navbar-burger", "burger"], ["aria-hidden", "true"], ["id", "navbarBasicExample", 1, "navbar-menu"], [1, "navbar-start"], [1, "navbar-item", "has-dropdown", "is-hoverable"], [1, "navbar-link"], [1, "navbar-dropdown"], ["class", "navbar-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "footer"], [1, "content", "has-text-centered"], ["href", "https://kathryndipippo.com"], ["href", "https://github.com/Pepper-Wood/eyeshadow"], ["href", "https://www.flaticon.com/authors/iconixar", "title", "iconixar"], ["href", "https://www.flaticon.com/", "title", "Flaticon"], [1, "navbar-item", 3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "eyeshadow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Palettes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_a_16_Template, 2, 3, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "eyeshadow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Kathryn DiPippo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ". View source code on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Icon made by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "iconixar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "www.flaticon.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 2, ctx.palettes));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]], styles: [".logo[_ngcontent-%COMP%] {\n  font-family: BunchBlossoms;\n  color: #000 !important;\n  font-size: 24px;\n  padding: .5rem .75rem;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n#logo[_ngcontent-%COMP%] {\n  background: url('logo.png');\n  width: 30px;\n  height: 30px;\n  display: block;\n  background-size: contain;\n  margin-right: 5px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBcUM7RUFDckMsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsTUFBTTtFQUNOLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICBmb250LWZhbWlseTogQnVuY2hCbG9zc29tcztcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAuNXJlbSAuNzVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2xvZ28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9sb2dvLnBuZycpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLm5hdmJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _palette_palette_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palette/palette.component */ "./src/app/palette/palette.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _palette_palette_component__WEBPACK_IMPORTED_MODULE_4__["PaletteComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _palette_palette_component__WEBPACK_IMPORTED_MODULE_4__["PaletteComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/palette/palette.component.ts":
/*!**********************************************!*\
  !*** ./src/app/palette/palette.component.ts ***!
  \**********************************************/
/*! exports provided: PaletteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaletteComponent", function() { return PaletteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_palettes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/palettes.json */ "./src/assets/palettes.json");
var _assets_palettes_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/palettes.json */ "./src/assets/palettes.json", 1);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var delta_e__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! delta-e */ "../../../node_modules/delta-e/src/index.js");
/* harmony import */ var delta_e__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(delta_e__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function PaletteComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404 Not Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Palette for '", ctx_r0.slug, "' not found.");
} }
const _c0 = function (a0) { return { "is-active": a0 }; };
const _c1 = function (a0) { return [a0]; };
function PaletteComponent_ng_template_1_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_option_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r3.im == i_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, "/palette/" + ctx_r3.slug + "/" + i_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](color_option_r12.name);
} }
function PaletteComponent_ng_template_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const hex_code_r14 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("shade shade-col", ctx_r4.palette.colors[ctx_r4.im].columns, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", hex_code_r14);
} }
function PaletteComponent_ng_template_1_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const hex_code_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("shade shade-col", ctx_r5.palette.colors[ctx_r5.im].columns, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", hex_code_r15);
} }
function PaletteComponent_ng_template_1_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const hex_code_r16 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("shade shade-col", ctx_r6.palette.colors[ctx_r6.im].columns, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", hex_code_r16);
} }
function PaletteComponent_ng_template_1_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const hex_code_r17 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("shade shade-col", ctx_r7.palette.colors[ctx_r7.im].columns, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", hex_code_r17);
} }
function PaletteComponent_ng_template_1_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const hex_code_r18 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("shade shade-col", ctx_r8.palette.colors[ctx_r8.im].columns, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", hex_code_r18);
} }
function PaletteComponent_ng_template_1_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("shade shade-col", ctx_r9.palette.colors[ctx_r9.im].columns, "");
} }
function PaletteComponent_ng_template_1_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r21 + 1);
} }
const _c2 = function () { return []; };
function PaletteComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PaletteComponent_ng_template_1_li_11_Template, 3, 7, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PaletteComponent_ng_template_1_div_19_Template, 1, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "We can analyze the colors of the palette colorpicked from this image and draw conclusions on its palette composition.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sorted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Colors in makeup palettes can be organized based on three attributes. Colors are converted from RGB/hex format into HSL and sorted based on that property.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Hue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PaletteComponent_ng_template_1_div_38_Template, 1, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Saturation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, PaletteComponent_ng_template_1_div_45_Template, 1, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Lightness");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PaletteComponent_ng_template_1_div_52_Template, 1, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Reduced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, PaletteComponent_ng_template_1_div_62_Template, 1, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, PaletteComponent_ng_template_1_div_63_Template, 1, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PaletteComponent_ng_template_1_Template_input_change_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.update_reduced(_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "datalist", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, PaletteComponent_ng_template_1_option_70_Template, 2, 1, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Delta E is a metric for understanding how the human eye perceives color difference ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "(source)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ". Two colors can be converted to the LAB format and then applied to Delta E algorithms to put a number to how similar or different they are. For these calculations, the CIEDE2000 Color-Difference Formula is utilized.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "For the typical Delta E value range, a result <= 1 indicates the difference between two colors are not perceptible by human eyes. Delta E <= 2 indicates that difference is perceptible through close observation. Through my own testing, I find that Delta E <= 6 is more accurate when comparing makeup pigments.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Reductions are based on remove colors whose Delta Es with other colors are less than the provided threshold. You can adjust the slider above to reduce or increase the range for detecting colors that are perceptible through close observation.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Thanks goes to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Zachary Schuessler");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " for implementing and documenting the DeltaE library.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r2.palette.colors[ctx_r2.im].image + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.palette.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.palette.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.palette.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", 2, "rem")("margin-bottom", 2, "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.sorted.original);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.parseBody(ctx_r2.palette.description), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.parseBody(ctx_r2.palette.colors[ctx_r2.im].description), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.sorted.hue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.sorted.saturation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.sorted.lightness);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.reduced);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c2).constructor(ctx_r2.reduced_remainder_count));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Threshold: ", ctx_r2.range_value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.range_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2).constructor(20));
} }
class PaletteComponent {
    constructor(route) {
        this.route = route;
        this.palettes = _assets_palettes_json__WEBPACK_IMPORTED_MODULE_1__;
        this.range_value = 6;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.slug = params.get('slug');
            this.im = +params.get('im') || 0;
            if (!this.palettes.hasOwnProperty(this.slug)) {
                this.error = "error: slug not found";
            }
            else {
                this.palette = this.palettes[this.slug];
                let color_objects = this.convert_hex_codes_to_colors(this.palette.colors[this.im].hex_codes);
                this.sorted = this.get_sorted_hex_codes(color_objects);
                this.reduced = this.get_reduced_palette(color_objects, this.range_value);
                this.reduced_remainder_count = this.palette.colors[this.im].hex_codes.length - this.reduced.length;
            }
        });
    }
    parseBody(body) {
        return body.replace(/(http.*?\s)/, "<a target='_blank' href=\"$1\">$1</a>");
    }
    hue_compare(color_a, color_b) {
        if (color_a.hsl().array()[0] < color_b.hsl().array()[0])
            return 1;
        return -1;
    }
    saturation_compare(color_a, color_b) {
        if (color_a.hsl().array()[1] < color_b.hsl().array()[1])
            return 1;
        return -1;
    }
    lightness_compare(color_a, color_b) {
        if (color_a.hsl().array()[2] < color_b.hsl().array()[2])
            return 1;
        return -1;
    }
    convert_hex_codes_to_colors(hex_codes) {
        let colors = [];
        for (let i = 0; i < hex_codes.length; i++) {
            colors.push(new color__WEBPACK_IMPORTED_MODULE_2___default.a(hex_codes[i]));
        }
        return colors;
    }
    convert_colors_to_hex_codes(colors) {
        let hex_codes = [];
        for (let i = 0; i < colors.length; i++) {
            hex_codes.push(colors[i].hex());
        }
        return hex_codes;
    }
    get_sorted_hex_codes(color_objects) {
        return {
            "original": this.convert_colors_to_hex_codes(Array.prototype.slice.call(color_objects)),
            "hue": this.convert_colors_to_hex_codes(Array.prototype.slice.call(color_objects).sort(this.hue_compare)),
            "saturation": this.convert_colors_to_hex_codes(Array.prototype.slice.call(color_objects).sort(this.saturation_compare)),
            "lightness": this.convert_colors_to_hex_codes(Array.prototype.slice.call(color_objects).sort(this.lightness_compare)),
        };
    }
    get_score_from_delta(delta, threshold) {
        // Ranges adjusted based on makeup perception.
        switch (true) {
            case (delta <= 1):
                return 1000;
            case (delta <= threshold):
                return 1;
            default:
                return 0;
        }
    }
    get_reduced_palette(color_objects, threshold) {
        while (true) {
            let scores = Array(color_objects.length).fill(0);
            for (let a = 0; a < color_objects.length; a++) {
                for (let b = 0; b < color_objects.length; b++) {
                    if (a == b) {
                        continue;
                    }
                    var color1 = {
                        L: color_objects[a].l(),
                        A: color_objects[a].a(),
                        B: color_objects[a].b()
                    };
                    var color2 = {
                        L: color_objects[b].l(),
                        A: color_objects[b].a(),
                        B: color_objects[b].b()
                    };
                    // 2000 formula
                    let delta = delta_e__WEBPACK_IMPORTED_MODULE_3__["getDeltaE00"](color1, color2);
                    scores[a] += this.get_score_from_delta(delta, threshold);
                }
            }
            let max = Math.max(...scores);
            if (max == 0) {
                return this.convert_colors_to_hex_codes(color_objects);
            }
            var maxIndex = scores.reduce(function (highestIndex, element, index, array) {
                return element > array[highestIndex] ? index : highestIndex;
            }, 0);
            color_objects.splice(maxIndex, 1);
        }
    }
    update_reduced(range_value) {
        this.range_value = range_value;
        let color_objects = this.convert_hex_codes_to_colors(this.palette.colors[this.im].hex_codes);
        this.reduced = this.get_reduced_palette(color_objects, this.range_value);
        this.reduced_remainder_count = this.palette.colors[this.im].hex_codes.length - this.reduced.length;
    }
}
PaletteComponent.ɵfac = function PaletteComponent_Factory(t) { return new (t || PaletteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
PaletteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaletteComponent, selectors: [["app-palette"]], decls: 3, vars: 2, consts: [["class", "section", 4, "ngIf", "ngIfElse"], ["slugFound", ""], [1, "section"], [1, "container"], [1, "title"], [1, "subtitle"], [1, "hero", "is-medium"], [1, "hero-body"], [1, "container", "has-text-centered"], [1, "hero-foot"], [1, "tabs"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "columns"], [1, "column"], [1, "card"], [1, "card-content"], [1, "palette"], [3, "class", "background-color", 4, "ngFor", "ngForOf"], [1, "column", "is-two-thirds"], [3, "innerHTML"], [1, "hr"], [1, "subtitle", "is-4"], [1, "content"], [3, "class", 4, "ngFor", "ngForOf"], [1, "range"], ["step", "0.1", "min", "1", "max", "20", "type", "range", "list", "number", 1, "range__input", 3, "value", "change"], ["ref", ""], ["id", "number", 1, "range__list"], ["class", "range__opt", 4, "ngFor", "ngForOf"], ["href", "http://zschuessler.github.io/DeltaE/"], ["href", "https://github.com/zschuessler"], [3, "ngClass"], [3, "routerLink"], [1, "range__opt"]], template: function PaletteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaletteComponent_section_0_Template, 6, 1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaletteComponent_ng_template_1_Template, 85, 22, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["p[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.hero[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-position: center;\n}\n\n.palette[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.shade[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.shade-col4[_ngcontent-%COMP%] { flex: 1 0 21%; }\n\n.shade-col5[_ngcontent-%COMP%] { flex: 1 0 17%; }\n\n.shade-col6[_ngcontent-%COMP%] { flex: 1 0 16%; }\n\n.shade-col7[_ngcontent-%COMP%] { flex: 1 0 14%; }\n\n.shade-col8[_ngcontent-%COMP%] { flex: 1 0 12%; }\n\n.shade-col9[_ngcontent-%COMP%] { flex: 1 0 11%; }\n\n.shade-col10[_ngcontent-%COMP%] { flex: 1 0 10%; }\n\n.shade-col11[_ngcontent-%COMP%] { flex: 1 0 9%; }\n\n.shade-col12[_ngcontent-%COMP%] { flex: 1 0 8%; }\n\n.shade-col13[_ngcontent-%COMP%] { flex: 1 0 7.5%; }\n\n.shade-col14[_ngcontent-%COMP%] { flex: 1 0 7%; }\n\n.shade-col15[_ngcontent-%COMP%] { flex: 1 0 6.5%; }\n\nhtml[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n\n.range[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.range__input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.range__input[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background: #ccc;\n  border-radius: 10px;\n}\n\n.range__input[_ngcontent-%COMP%]::-moz-range-thumb {\n  background: #ccc;\n  border-radius: 10px;\n}\n\n.range__input[_ngcontent-%COMP%]::-ms-track {\n  background: transparent;\n}\n\n.range__input[_ngcontent-%COMP%]::-ms-fill-lower {\n  background: #e1e1e1;\n  border-radius: 10px;\n}\n\n.range__input[_ngcontent-%COMP%]::-ms-fill-upper {\n  background: #eee;\n  border-radius: 10px;\n}\n\n.range__list[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFsZXR0ZS9wYWxldHRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0EsY0FBYyxhQUFhLEVBQUU7O0FBQzdCLGNBQWMsYUFBYSxFQUFFOztBQUM3QixjQUFjLGFBQWEsRUFBRTs7QUFDN0IsY0FBYyxhQUFhLEVBQUU7O0FBQzdCLGNBQWMsYUFBYSxFQUFFOztBQUM3QixjQUFjLGFBQWEsRUFBRTs7QUFDN0IsZUFBZSxhQUFhLEVBQUU7O0FBQzlCLGVBQWUsWUFBWSxFQUFFOztBQUM3QixlQUFlLFlBQVksRUFBRTs7QUFDN0IsZUFBZSxjQUFjLEVBQUU7O0FBQy9CLGVBQWUsWUFBWSxFQUFFOztBQUM3QixlQUFlLGNBQWMsRUFBRTs7QUFFL0I7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFsZXR0ZS9wYWxldHRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uaGVybyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5wYWxldHRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnNoYWRlIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLnNoYWRlLWNvbDQgeyBmbGV4OiAxIDAgMjElOyB9XG4uc2hhZGUtY29sNSB7IGZsZXg6IDEgMCAxNyU7IH1cbi5zaGFkZS1jb2w2IHsgZmxleDogMSAwIDE2JTsgfVxuLnNoYWRlLWNvbDcgeyBmbGV4OiAxIDAgMTQlOyB9XG4uc2hhZGUtY29sOCB7IGZsZXg6IDEgMCAxMiU7IH1cbi5zaGFkZS1jb2w5IHsgZmxleDogMSAwIDExJTsgfVxuLnNoYWRlLWNvbDEwIHsgZmxleDogMSAwIDEwJTsgfVxuLnNoYWRlLWNvbDExIHsgZmxleDogMSAwIDklOyB9XG4uc2hhZGUtY29sMTIgeyBmbGV4OiAxIDAgOCU7IH1cbi5zaGFkZS1jb2wxMyB7IGZsZXg6IDEgMCA3LjUlOyB9XG4uc2hhZGUtY29sMTQgeyBmbGV4OiAxIDAgNyU7IH1cbi5zaGFkZS1jb2wxNSB7IGZsZXg6IDEgMCA2LjUlOyB9XG5cbmh0bWwge1xuICBtYXJnaW46IDFlbTtcbn1cbi5yYW5nZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYW5nZV9faW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5yYW5nZV9faW5wdXQ6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5yYW5nZV9faW5wdXQ6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnJhbmdlX19pbnB1dDo6LW1zLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ucmFuZ2VfX2lucHV0OjotbXMtZmlsbC1sb3dlciB7XG4gIGJhY2tncm91bmQ6ICNlMWUxZTE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucmFuZ2VfX2lucHV0OjotbXMtZmlsbC11cHBlciB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucmFuZ2VfX2xpc3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaletteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-palette',
                templateUrl: './palette.component.html',
                styleUrls: ['./palette.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/palettes.json":
/*!**********************************!*\
  !*** ./src/assets/palettes.json ***!
  \**********************************/
/*! exports provided: abh-norvina-vol-1, jeffree-star-conspiracy, jeffree-star-cremated, jeffree-star-orgy, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"abh-norvina-vol-1\":{\"company\":\"Anastasia Beverly Hills\",\"name\":\"Norvina Vol 1\",\"description\":\"TBD\",\"colors\":[{\"name\":\"Product Listing\",\"image\":\"assets/images/abh/norvinavol1/productlisting.jpeg\",\"description\":\"TBD\",\"columns\":5,\"hex_codes\":[\"#eab0d6\",\"#a0379c\",\"#7b2154\",\"#b98867\",\"#f21559\",\"#cb3e8a\",\"#945b50\",\"#cb4570\",\"#582b70\",\"#6f3567\",\"#d9d8de\",\"#c8975f\",\"#8d3e42\",\"#933953\",\"#7f3333\",\"#e0aa46\",\"#43408d\",\"#ce0b2b\",\"#082980\",\"#1f1a1e\",\"#e47867\",\"#e74f38\",\"#be813e\",\"#f62e38\",\"#6b2a2e\"]}]},\"jeffree-star-conspiracy\":{\"company\":\"Jeffree Star Cosmetics\",\"name\":\"Conspiracy\",\"description\":\"TBD\",\"colors\":[{\"name\":\"Launch Promo\",\"image\":\"assets/images/jeffreestar/conspiracy/productlisting.jpg\",\"description\":\"\",\"columns\":6,\"hex_codes\":[\"#EBEBEB\",\"#E7D3CC\",\"#D1AC80\",\"#C08A5E\",\"#CEADA1\",\"#66534F\",\"#D4D295\",\"#E392A5\",\"#E3ED10\",\"#E47FC5\",\"#EE9647\",\"#E23A51\",\"#ABCCC5\",\"#C3C4CA\",\"#873254\",\"#A19182\",\"#577460\",\"#323136\"]}]},\"jeffree-star-cremated\":{\"company\":\"Jeffree Star Cosmetics\",\"name\":\"Cremated\",\"description\":\"This makeup palette was released on May 22nd, 2020. According to the product listing decription, \\\"The Cremated Palette is what smokey eye dreams are made of! Includes 24 sickening shades from pure white diamond to the darkest black matte to create endless intense sultry or soft, gentle looks on any skin tone\\\".\",\"colors\":[{\"name\":\"Launch Promo\",\"image\":\"assets/images/jeffreestar/cremated/launch.jpeg\",\"description\":\"Image featured is from the palette's initial inside reveal, found at https://twitter.com/JeffreeStar/status/1261784515288035328?s=20.\",\"columns\":6,\"hex_codes\":[\"#211D23\",\"#1C1C28\",\"#4D464D\",\"#413B3C\",\"#59595B\",\"#65656E\",\"#564C40\",\"#6C6C75\",\"#4C4850\",\"#8C7875\",\"#5D5862\",\"#796965\",\"#987865\",\"#A9A9A9\",\"#7E7277\",\"#ACA6A5\",\"#A1938A\",\"#B4B1B4\",\"#BAAA9D\",\"#D3CBB4\",\"#D9BBA7\",\"#DDD7CC\",\"#E7E4E7\",\"#DBD4D1\"]}]},\"jeffree-star-orgy\":{\"company\":\"Jeffree Star Cosmetics\",\"name\":\"Orgy\",\"description\":\"This makeup palette was released on August 21st, 2020. Described as Jeffree Star's \\\"biggest eyeshadow palette to date, a 30 pan ALL matte orgy of nudes\\\".\",\"colors\":[{\"name\":\"Glamour Shot\",\"image\":\"assets/images/jeffreestar/orgy/promo.jpeg\",\"description\":\"Image featured is one of the photos used for the palette's initial promotion, found at https://twitter.com/JeffreeStar/status/1294405026605961217?s=20.\",\"columns\":6,\"hex_codes\":[\"#F2DCCF\",\"#EAD1BB\",\"#DDAF95\",\"#CBA18A\",\"#C38E7C\",\"#BA8D76\",\"#F3CDAF\",\"#EBB8A4\",\"#E79D79\",\"#D7926F\",\"#AB7B5F\",\"#99685A\",\"#CC927A\",\"#B87762\",\"#C27A5D\",\"#9B6353\",\"#885544\",\"#7D4F38\",\"#9F6245\",\"#97644F\",\"#92665D\",\"#724434\",\"#68392F\",\"#674843\",\"#75493E\",\"#78564A\",\"#604035\",\"#422723\",\"#412C27\",\"#241E20\"]},{\"name\":\"YouTube Promo Still\",\"image\":\"assets/images/jeffreestar/orgy/youtubepromostill.png\",\"description\":\"Image featured is a screenshot from the palette's initial promotional YouTube video, found at https://www.youtube.com/watch?v=qDFjsMFojzs at timestamp 4:21.\",\"columns\":6,\"hex_codes\":[\"#feece2\",\"#fdf2de\",\"#fee5d1\",\"#f8e1cf\",\"#fddcc9\",\"#f6d8cd\",\"#fee6c2\",\"#ffd9c4\",\"#ffccad\",\"#fdc9a4\",\"#eec5a3\",\"#ecb9a6\",\"#e8bb9e\",\"#e4a187\",\"#edac86\",\"#db9f85\",\"#d79477\",\"#d08c5d\",\"#c97d4c\",\"#c28f70\",\"#ca9a8e\",\"#b1633c\",\"#af583f\",\"#ad7d73\",\"#a65c43\",\"#aa7a63\",\"#985939\",\"#77402c\",\"#7a4b38\",\"#463130\"]},{\"name\":\"Lighter Skin Arm Swatches\",\"image\":\"assets/images/jeffreestar/orgy/armswatches.png\",\"description\":\"Image featured is a screenshot from the palette's initial promotional YouTube video, found at https://www.youtube.com/watch?v=qDFjsMFojzs at timestamp 5:01. The colors extracted from this image are specifically for the bottom arm of the person with the lighter skin tone.\",\"columns\":15,\"hex_codes\":[\"#CF7C5D\",\"#C67B61\",\"#D1987A\",\"#D6967E\",\"#D8A580\",\"#E6AB83\",\"#ECB08F\",\"#EDBCAA\",\"#E8C5A9\",\"#E0BFB4\",\"#E9BBA6\",\"#E1C0A9\",\"#E3C3B1\",\"#DEC6B7\",\"#E2C5BC\"]},{\"name\":\"Darker Skin Arm Swatches\",\"image\":\"assets/images/jeffreestar/orgy/armswatches.png\",\"description\":\"Image featured is a screenshot from the palette's initial promotional YouTube video, found at https://www.youtube.com/watch?v=qDFjsMFojzs at timestamp 5:01. The colors extracted from this image are specifically for the top arm of the person with the darker skin tone.\",\"columns\":15,\"hex_codes\":[\"#D28866\",\"#C77E64\",\"#D19B7E\",\"#D49A87\",\"#D2A682\",\"#E1AB89\",\"#E6AC8F\",\"#EBB8A2\",\"#F2D0B2\",\"#DBB6AE\",\"#E8C0B4\",\"#E8CCB5\",\"#ECD2BE\",\"#EAD8C4\",\"#E9D0C0\"]}]}}");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kathryn.dipippo/repos/pepper-wood/eyeshadow/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
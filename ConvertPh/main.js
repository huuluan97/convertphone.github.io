(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/input-phone/input-phone.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/input-phone/input-phone.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/input-phone/input-phone.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/input-phone/input-phone.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel panel-danger\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title text-center\">Form Nhập Số</h3>\n    </div>\n    <div class=\"panel-body\">\n        \n        <div class=\"form-group\">\n            <label >Nhập số dưới này nè:</label>\n            <input type=\"text\" class=\"form-control\" (keyup)=\"onKeyUp($event)\" placeholder=\"Số của bạn...\">\n        </div>\n        <hr>\n        <div style=\"text-align: center\">\n               Số điện thoại mới của bạn: <span class=\"label label-primary\" style=\"font-size: 16.5px;\">{{text}}</span>\n        </div>\n    </div>\n\n    \n  \n    \n    \n        <div class=\"panel-footer text-center\">\n                Developed by Nguyen Huu Luan\n        </div>\n   \n    \n</div>\n"

/***/ }),

/***/ "./src/app/Components/input-phone/input-phone.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/input-phone/input-phone.component.ts ***!
  \*****************************************************************/
/*! exports provided: InputPhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPhoneComponent", function() { return InputPhoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputPhoneComponent = /** @class */ (function () {
    //var oldNum[:number] = 
    function InputPhoneComponent() {
        var _this = this;
        this.text = '';
        this.oldNum = ['120', '121', '122', '126', '128', '162', '163', '164', '165', '166', '167', '168', '169', '123', '124', '125', '127', '129', '186', '188', '199'];
        //oldNum = [120,121,122,126,128,162,163,164,165,166,167,168,169,123,124,125,127,129,186,188,199];
        this.newNum = ['70', '71', '72', '76', '78', '32', '33', '34', '35', '36', '37', '38', '39', '83', '84', '85', '87', '89', '56', '59'];
        this.onKeyUp = function (event) {
            _this.num = event.target.value;
            var phone = _this.num;
            var kt = _this.num;
            phone = phone.slice(1, 4);
            var ky = parseInt(kt);
            //console.log(ky);
            // const a = this.oldNum.forEach((so,index)=>{
            //     if(phone === so){
            //         return a = index;
            //     }
            // });
            //console.log(phone);
            //var e = Number.isInteger(phone);
            var a = _this.oldNum.indexOf(phone);
            var newNum = _this.newNum;
            var b = newNum[a];
            //console.log(a);
            //console.log(b);
            var c = +b;
            var g = _this.num;
            var f = _this.num;
            //01222447099
            g = g.slice(0, 1);
            f = f.slice(4, 11);
            var i = g + b + f;
            //console.log(i);
            if (_this.num.toString().length < 11 && isNaN(ky) == true) {
                _this.text = 'Chưa nhập, nhập thiếu hay sai đây ==!!';
            }
            else if (_this.num.toString().length > 11) {
                _this.text = 'Nhập dài quá rồi nè';
            }
            else if (_this.num.toString().length > 11 || a === -1) {
                _this.text = 'Nhập dài mà còn sai nữa ==!!!';
            }
            else if (a === -1) {
                _this.text = 'Nhập sai rồi nè nhập lại đi';
            }
            else {
                _this.text = i;
            }
        };
    }
    ;
    InputPhoneComponent.prototype.ngOnInit = function () {
    };
    InputPhoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-phone',
            template: __webpack_require__(/*! ./input-phone.component.html */ "./src/app/Components/input-phone/input-phone.component.html"),
            styles: [__webpack_require__(/*! ./input-phone.component.css */ "./src/app/Components/input-phone/input-phone.component.css")]
        })
        //const oldNum = 
        ,
        __metadata("design:paramtypes", [])
    ], InputPhoneComponent);
    return InputPhoneComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n    <h1 class=\"text-center\" style=\"color: blue\">Ứng dụng đổi 10 số thành 11 số </h1>\n    \n    <div class=\"row\">\n        \n        <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\n            \n        </div>\n        \n        <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n            <input-phone></input-phone>\n        </div>\n        \n        \n    </div>\n    \n</div>\n\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_input_phone_input_phone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/input-phone/input-phone.component */ "./src/app/Components/input-phone/input-phone.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _Components_input_phone_input_phone_component__WEBPACK_IMPORTED_MODULE_3__["InputPhoneComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\22. Angular 4\ConvertPh\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-detail-module"],{

/***/ "./src/app/pages/detail/detail-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/detail/detail-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DetailComponentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponentRoutingModule", function() { return DetailComponentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail */ "./src/app/pages/detail/detail.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _detail__WEBPACK_IMPORTED_MODULE_2__["DetailComponent"]
    }
];
var DetailComponentRoutingModule = /** @class */ (function () {
    function DetailComponentRoutingModule() {
    }
    DetailComponentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DetailComponentRoutingModule);
    return DetailComponentRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/detail/detail.html":
/*!******************************************!*\
  !*** ./src/app/pages/detail/detail.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color='primary'>\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"home\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Movie Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-bounce>\n    <ion-card *ngIf=\"movie\">\n        <ion-item>\n          <!--\n          <ion-avatar item-start>\n            <img [src]=\"movie?.image\">\n          </ion-avatar>\n          -->\n          <h2>{{ movie?.title }}</h2>\n        </ion-item>\n      \n        <img [src]=\"movie?.poster\" height=\"300px\">\n      \n        <ion-card-content>\n          <p>{{ movie?.notes }}</p>\n        </ion-card-content>\n      \n        <ion-row>\n          <ion-item>\n          <ion-button icon-left clear small class=\"action-button\">\n            <ion-icon name=\"thumbs-up\"></ion-icon>\n            <div>12 Likes</div>\n          </ion-button>\n          <ion-button icon-left clear small>\n            <ion-icon name=\"text\"></ion-icon>\n            <div>4 Comments</div>\n          </ion-button>\n          <ion-note slot=\"end\">\n            {{ movie?.year }}\n          </ion-note>\n          </ion-item>\n        </ion-row>\n      \n      </ion-card>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color=\"primary\">\n        <ion-title>© {{ currentYear }} Adrián Brito Pacheco</ion-title>\n        <ion-buttons slot=\"end\">\n          <div class=\"github-button\"><iframe allowtransparency=\"true\" scrolling=\"no\" frameborder=\"0\" src=\"https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fabritopach%2Fangular-ionic-master-detail&amp;title=&amp;aria-label=Star%20abritopach%2Fangular-ionic-master-detail%20on%20GitHub&amp;data-icon=octicon-star&amp;data-text=Star\" style=\"width: 50px; height: 20px; border: none;\"></iframe></div>\n          <div class=\"github-button\"><iframe allowtransparency=\"true\" scrolling=\"no\" frameborder=\"0\" src=\"https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fabritopach&amp;title=&amp;aria-label=Follow%20%40abritopach%20on%20GitHub&amp;data-text=GitHub\" style=\"width: 67px; height: 20px; border: none;\"></iframe></div>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/detail/detail.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/detail/detail.module.ts ***!
  \***********************************************/
/*! exports provided: DetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModule", function() { return DetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail */ "./src/app/pages/detail/detail.ts");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-routing.module */ "./src/app/pages/detail/detail-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DetailModule = /** @class */ (function () {
    function DetailModule() {
    }
    DetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["DetailComponentRoutingModule"]
            ],
            declarations: [_detail__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]],
            entryComponents: [_detail__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]],
        })
    ], DetailModule);
    return DetailModule;
}());



/***/ }),

/***/ "./src/app/pages/detail/detail.scss":
/*!******************************************!*\
  !*** ./src/app/pages/detail/detail.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-button {\n  padding-right: 10px; }\n\n.github-button {\n  width: 49px;\n  height: 20px;\n  padding-right: 5px;\n  display: inline; }\n"

/***/ }),

/***/ "./src/app/pages/detail/detail.ts":
/*!****************************************!*\
  !*** ./src/app/pages/detail/detail.ts ***!
  \****************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/movies-service */ "./src/app/providers/movies-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, movieService) {
        this.route = route;
        this.movieService = movieService;
    }
    DetailComponent.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter');
        console.log('this.route.snapshot', this.route.snapshot);
        var movieTitle = this.route.snapshot.paramMap.get('title');
        console.log('movieTitle', movieTitle);
        this.getMovie(movieTitle);
    };
    DetailComponent.prototype.getMovie = function (title) {
        var _this = this;
        this.movieService.getMovie(title)
            .subscribe(function (data) {
            console.log('movie', data);
            _this.movie = data[0];
        }, function (error) {
            console.log(error);
        });
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-detail',
            template: __webpack_require__(/*! ./detail.html */ "./src/app/pages/detail/detail.html"),
            styles: [__webpack_require__(/*! ./detail.scss */ "./src/app/pages/detail/detail.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _providers_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-detail-detail-module.js.map
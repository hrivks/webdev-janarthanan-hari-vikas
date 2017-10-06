webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_11__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>\r\n    Angular 4 MEAN stack app\r\n  </h1>\r\n\r\n\r\n  <h3>\r\n    App works\r\n  </h3>\r\n\r\n\r\n  <h4>\r\n    <a href=\"test\">Test MongoDB</a>\r\n  </h4>\r\n\r\n  <h4>\r\n      <a href=\"/login\">Assignment Login</a>\r\n  </h4>\r\n\r\n  <h4>\r\n    <a href=\"https://webdev-janarthanan-hari-vikas.herokuapp.com/assets/\">Assignment 2</a>\r\n  </h4>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- Sidebar -->\n  <div class=\"col-4 hvj-landscape-only\">\n    <!--Top Nav-->\n    <nav\n      class=\"navbar navbar-expand fixed-top navbar-dark bg-royal col-4 hvj-nav-border-right px-2\">\n      <ul class=\"navbar-nav mr-3\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Pages\">\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n\n      <a class=\"navbar-brand\" href=\"\">Pages</a>\n\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" href=\"page-new.html\" title=\"New Page\">\n            <span class=\"fa fa-plus fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n    </nav><!--/Top Nav-->\n\n    <!--Sidebar Content-->\n    <div>\n      <ul class=\"list-group  list-group-flush\">\n        <li class=\"list-group-item\">\n          <a class=\"btn btn-xs\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n            <span>Blog Post</span>\n          </a>\n          <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n            <span class=\"fa fa-gear\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a class=\"btn btn-xs\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n            <span>Blogs</span>\n          </a>\n          <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n            <span class=\"fa fa-gear\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a class=\"btn btn-xs\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n            <span>Home</span>\n          </a>\n          <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n            <span class=\"fa fa-gear\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a class=\"btn btn-xs\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n            <span>About</span>\n          </a>\n          <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n            <span class=\"fa fa-gear\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a class=\"btn btn-xs\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n            <span>Contact Us</span>\n          </a>\n          <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n            <span class=\"fa fa-gear\"></span>\n          </a>\n        </li>\n      </ul>\n    </div><!--/Sidebar Content-->\n  </div><!--/Sidebar-->\n\n  <div class=\"hvj-vertical-line col-4 hvj-landscape-only\"></div>\n  <!--Main content-->\n  <div class=\"col\">\n    <!--Top Nav-->\n    <nav\n      class=\"navbar navbar-expand fixed-top navbar-dark bg-royal ml-auto hvj-landscape-col-8 px-2\">\n      <ul class=\"navbar-nav mr-3 hvj-portrait-only\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Websites\">\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n\n      <a class=\"navbar-brand\" href=\"\">Edit Page</a>\n\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Save Changes\">\n            <span class=\"fa fa-check fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n    </nav><!--/Top Nav-->\n\n    <!--content-->\n    <div>\n      <form>\n        <!--Page Name-->\n        <div class=\"form-group\">\n          <label for=\"pageName\" class=\"font-weight-bold text-muted\">Page Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"pageName\" placeholder=\"Page Name\"\n                 value=\"Blog Post\">\n        </div><!--/Page Name-->\n\n        <!--Page Title-->\n        <div class=\"form-group\">\n          <label for=\"pageTitle\" class=\"font-weight-bold text-muted\">Page Title</label>\n          <input type=\"text\" class=\"form-control\" id=\"pageTitle\" placeholder=\"Page Title\">\n        </div><!--/Page Name-->\n        <a class=\"btn btn-danger btn-block\" [routerLink]=\"['user/:uid/website/:wid/page']\">Delete</a>\n      </form>\n    </div><!--/content-->\n  </div><!--/Main content-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageEditComponent = (function () {
    function PageEditComponent() {
    }
    PageEditComponent.prototype.ngOnInit = function () {
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageEditComponent);

//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Top Nav-->\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\n  <ul class=\"navbar-nav mr-3\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid']\" title=\"Back to Profile\">\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\n      </a>\n    </li>\n  </ul>\n\n  <a class=\"navbar-brand\" href=\"\">Pages</a>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [routerLink]=\"['user/:uid/website/:wid/page/new']\" title=\"New Page\">\n        <span class=\"fa fa-plus fa-lg\"></span>\n      </a>\n    </li>\n  </ul>\n</nav>\n<!--/Top Nav-->\n\n<div class=\"container hvj-outermost\">\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n        <span>Blog Post</span>\n      </a>\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n        <span class=\"fa fa-gear\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n        <span>Blogs</span>\n      </a>\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n        <span class=\"fa fa-gear\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n        <span>Home</span>\n      </a>\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n        <span class=\"fa fa-gear\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n        <span>About</span>\n      </a>\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n        <span class=\"fa fa-gear\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n        <span>Contact Us</span>\n      </a>\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n        <span class=\"fa fa-gear\"></span>\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageListComponent = (function () {
    function PageListComponent() {
    }
    PageListComponent.prototype.ngOnInit = function () {
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageListComponent);

//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- Sidebar -->\n  <div class=\"col-4 hvj-landscape-only px-1\">\n    <!--Top Nav-->\n    <nav\n      class=\"navbar navbar-expand fixed-top navbar-dark bg-royal col-4 hvj-nav-border-right px-2\">\n      <ul class=\"navbar-nav mr-2\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Pages\">\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n\n      <a class=\"navbar-brand\" href=\"\">Pages</a>\n\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" href=\"page-new.html\" title=\"New Page\">\n            <span class=\"fa fa-plus fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n    </nav><!--/Top Nav-->\n\n    <!--Sidebar Content-->\n    <div>\n      <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item \">\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n          <span>Blog Post</span>\n        </a>\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n          <span class=\"fa fa-gear\"></span>\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n          <span>Blogs</span>\n        </a>\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n          <span class=\"fa fa-gear\"></span>\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n          <span>Home</span>\n        </a>\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n          <span class=\"fa fa-gear\"></span>\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n          <span>About</span>\n        </a>\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n          <span class=\"fa fa-gear\"></span>\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\n          <span>Contact Us</span>\n        </a>\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\n          <span class=\"fa fa-gear\"></span>\n        </a>\n      </li>\n      </ul>\n    </div><!--/Sidebar Content-->\n  </div><!--/Sidebar-->\n\n  <div class=\"hvj-vertical-line col-4 hvj-landscape-only\"></div>\n  <!--Main content-->\n  <div class=\"col\">\n    <!--Top Nav-->\n    <nav\n      class=\"navbar navbar-expand fixed-top navbar-dark bg-royal ml-auto hvj-landscape-col-8 px-2\">\n      <ul class=\"navbar-nav mr-3 hvj-portrait-only\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Pages\">\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n\n      <a class=\"navbar-brand\" href=\"\">New Page</a>\n\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Save Changes\">\n            <span class=\"fa fa-check fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n    </nav><!--/Top Nav-->\n\n    <!--content-->\n    <div>\n      <form>\n        <!--Page Name-->\n        <div class=\"form-group\">\n          <label for=\"pageName\" class=\"font-weight-bold text-muted\">Page Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"pageName\" placeholder=\"Page Name\">\n        </div><!--/Page Name-->\n\n        <!--Page Title-->\n        <div class=\"form-group\">\n          <label for=\"pageTitle\" class=\"font-weight-bold text-muted\">Page Title</label>\n          <input type=\"text\" class=\"form-control\" id=\"pageTitle\" placeholder=\"Page Title\">\n        </div><!--/Page Title-->\n\n        <a class=\"btn btn-danger btn-block\" [routerLink]=\"['user/:uid/website/:wid/page']\">Delete</a>\n      </form>\n    </div><!--/content-->\n  </div><!--/Main content-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNewComponent = (function () {
    function PageNewComponent() {
    }
    PageNewComponent.prototype.ngOnInit = function () {
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNewComponent);

//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>Test</h1>\r\n\r\n  <div *ngIf=\"alertMessage\"\r\n       class=\"alert alert-danger\">\r\n    \"Failed to create\"\r\n  </div>\r\n\r\n  <div *ngIf=\"successMessage\"\r\n       class=\"alert alert-success\">\r\n    \"Succesfully created/deleted\"\r\n  </div>\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th>Test Message</th>\r\n      <th>&nbsp;</th>\r\n    </tr>\r\n\r\n\r\n    <tr>\r\n      <td>\r\n        <input [(ngModel)]=\"message\"\r\n               placeholder=\"message\"\r\n               class=\"form-control\"/>\r\n      </td>\r\n\r\n\r\n      <td>\r\n        <button (click)=\"createMessage()\"\r\n                class=\"btn btn-primary pull-right\">\r\n          <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </thead>\r\n\r\n\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\">\r\n      <td>\r\n        {{message.message}}\r\n      </td>\r\n      <td>\r\n        <button (click)=\"deleteMessage(message._id)\"\r\n                class=\"btn btn-danger pull-right\">\r\n          <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <span class=\"display-3\">Login</span>\n</p>\n<hr>\n<br>\n<!--form-->\n<div class=\"form\">\n  <div class=\"form-group\">\n    <input placeholder=\"User Name\" type=\"text\" class=\"form-control\"/>\n  </div>\n  <div class=\"form-group\">\n    <input placeholder=\"Password\" type=\"password\" class=\"form-control\"/>\n  </div>\n  <!-- form actions -->\n  <div>\n    <a class=\"btn btn-royal btn-block\"  [routerLink]=\"['/user/:uid']\">Login</a>\n    <a class=\"btn btn-secondary btn-block\" [routerLink]=\"['/register']\">Register</a>\n  </div><!-- /form actions -->\n</div><!--/form-->"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Top Nav-->\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\n  <a class=\"navbar-brand\" [routerLink]=\"['user/:uid']\">Profile</a>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid']\" title=\"Save Changes\">\n        <span class=\"fa fa-check fa-lg\"></span>\n      </a>\n    </li>\n  </ul>\n</nav>\n<!--/Top Nav-->\n\n<div class=\"container hvj-outermost\">\n  <form>\n    <!--User Name-->\n    <div class=\"form-group\">\n      <label for=\"username\" class=\"font-weight-bold text-muted\">Username</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"walice\">\n    </div><!--/User Name-->\n\n    <!--Email-->\n    <div class=\"form-group\">\n      <label for=\"email\" class=\"font-weight-bold text-muted\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\"\n             placeholder=\"alice.wonderland@unicorn.com\">\n    </div><!--/Email-->\n\n    <!--First Name-->\n    <div class=\"form-group\">\n      <label for=\"first-name\" class=\"font-weight-bold text-muted\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\n    </div><!--First Name-->\n\n    <!--Last Name-->\n    <div class=\"form-group\">\n      <label for=\"last-name\" class=\"font-weight-bold text-muted\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\n    </div><!--/Last Name-->\n\n    <!--Action Buttons-->\n    <div class=\"form-group\">\n      <a class=\"btn btn-royal btn-block\" [routerLink]=\"['user/:uid/website']\">Websites</a>\n      <a class=\"btn btn-danger btn-block\"  [routerLink]=\"['/login']\">Logout</a>\n    </div><!--/Action Buttons-->\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <span class=\"display-3\">Register</span>\n</p>\n<hr>\n<br>\n<!--form-->\n<div class=\"form\">\n  <div class=\"form-group\">\n    <input placeholder=\"User Name\" type=\"text\" class=\"form-control\"/>\n  </div>\n  <div class=\"form-group\">\n    <input placeholder=\"Password\" type=\"password\" class=\"form-control\"/>\n  </div>\n  <div class=\"form-group\">\n    <input placeholder=\"Verify Password\" type=\"password\" class=\"form-control\"/>\n  </div>\n  <!-- form actions -->\n  <div>\n    <a class=\"btn btn-royal btn-block\" [routerLink]=\"['/user/:uid']\">Register</a>\n    <a class=\"btn btn-danger btn-block\" [routerLink]=\"['/login']\">Cancel</a>\n  </div>\n  <!-- /form actions -->\n</div>\n<!--/form-->"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- Sidebar -->\n  <div class=\"col-4 hvj-landscape-only px-1\">\n    <!--Top Nav-->\n    <nav\n      class=\"navbar navbar-expand fixed-top navbar-dark bg-royal col-4 hvj-nav-border-right px-2\">\n      <ul class=\"navbar-nav mr-2\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website']\" title=\"Websites\">\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n\n      <a class=\"navbar-brand\" href=\"\">Websites</a>\n\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/new']\" title=\"New Website\">\n            <span class=\"fa fa-plus fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n    </nav><!--/Top Nav-->\n\n    <!--Sidebar Content-->\n    <div>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['user/:uid/website/:wid/page']\">\n            <span>Address Book App</span>\n          </a>\n          <a [routerLink]=\"['user/:uid/website/:wid']\" class=\"btn btn-xs float-right link-royal\">\n            <span class=\"fa fa-gear\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['user/:uid/website/:wid/page']\">\n          <span>Blogger</span>\n          </a>\n          <a [routerLink]=\"['user/:uid/website/:wid']\" class=\"btn btn-xs float-right link-royal\">\n            <span class=\"fa fa-gear\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['user/:uid/website/:wid/page']\">\n            <span>Blog App</span>\n          </a>\n          <a [routerLink]=\"['user/:uid/website/:wid']\" class=\"btn btn-xs float-right link-royal\">\n            <span class=\"fa fa-gear\"></span>\n          </a>\n        </li>\n      </ul>\n    </div><!--/Sidebar Content-->\n  </div><!--/Sidebar-->\n\n  <div class=\"hvj-vertical-line col-4 hvj-landscape-only\"></div>\n  <!--Main content-->\n  <div class=\"col\">\n    <!--Top Nav-->\n    <nav\n      class=\"navbar navbar-expand fixed-top navbar-dark bg-royal ml-auto hvj-landscape-col-8 px-2\">\n      <ul class=\"navbar-nav mr-3 hvj-portrait-only\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website']\" title=\"Websites\">\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n\n      <a class=\"navbar-brand\" href=\"\">Edit Website</a>\n\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website']\" title=\"Save Changes\">\n            <span class=\"fa fa-check fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n    </nav><!--/Top Nav-->\n\n    <!--content-->\n    <div>\n      <form>\n        <!--Website Name-->\n        <div class=\"form-group\">\n          <label for=\"websiteName\" class=\"font-weight-bold text-muted\">Website Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"websiteName\" placeholder=\"Name\"\n                 value=\"Blogger\">\n        </div><!--/Website Name-->\n\n        <!--Website Description-->\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\" class=\"font-weight-bold text-muted\">Website Name</label>\n          <textarea class=\"form-control\" id=\"websiteDescription\" rows=\"6\">Blogger is a blog-publishing service that allows multi-user blogs with time stamped entries.\n          </textarea>\n        </div><!--/Website Description-->\n\n        <a class=\"btn btn-danger btn-block\" [routerLink]=\"['user/:uid/website']\">Delete</a>\n      </form>\n    </div><!--/content-->\n  </div><!--/Main content-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteEditComponent = (function () {
    function WebsiteEditComponent() {
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteEditComponent);

//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Top Nav-->\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\n  <ul class=\"navbar-nav mr-3\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid']\" title=\"Back to Profile\">\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\n      </a>\n    </li>\n  </ul>\n\n  <a class=\"navbar-brand\" href=\"\">Websites</a>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/new']\" title=\"New Website\">\n        <span class=\"fa fa-plus fa-lg\"></span>\n      </a>\n    </li>\n  </ul>\n</nav>\n<!--/Top Nav-->\n\n<div class=\"container hvj-outermost\">\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['user/:uid/website/:wid/page']\">\n        <span>Address Book App</span>\n      </a>\n      <a [routerLink]=\"['user/:uid/website/:wid']\" class=\"btn btn-xs float-right link-royal\">\n        <span class=\"fa fa-gear\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['user/:uid/website/:wid/page']\">\n        <span>Blogger</span>\n      </a>\n      <a [routerLink]=\"['user/:uid/website/:wid']\" class=\"btn btn-xs float-right link-royal\">\n        <span class=\"fa fa-gear\"></span>\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a [routerLink]=\"['user/:uid/website/:wid/page']\">\n        <span>Blog App</span>\n      </a>\n      <a [routerLink]=\"['user/:uid/website/:wid']\" class=\"btn btn-xs float-right link-royal\">\n        <span class=\"fa fa-gear\"></span>\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteListComponent = (function () {
    function WebsiteListComponent() {
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteListComponent);

//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- Sidebar -->\n  <div class=\"col-4 hvj-landscape-only px-1\">\n    <!--Top Nav-->\n    <nav\n      class=\"navbar navbar-expand fixed-top navbar-dark bg-royal col-4 hvj-nav-border-right px-2\">\n      <ul class=\"navbar-nav mr-2\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website']\" title=\"Websites\">\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n\n      <a class=\"navbar-brand\" href=\"\">Websites</a>\n\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/new']\" title=\"New Website\">\n            <span class=\"fa fa-plus fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n    </nav><!--/Top Nav-->\n\n    <!--Sidebar Content-->\n    <div>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['user/:uid/website/:wid/page']\">\n            <span>Address Book App</span>\n          </a>\n          <a [routerLink]=\"['user/:uid/website/:wid']\" class=\"btn btn-xs float-right link-royal\">\n            <span class=\"fa fa-gear\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['user/:uid/website/:wid/page']\">\n            <span>Blogger</span>\n          </a>\n          <a [routerLink]=\"['user/:uid/website/:wid']\" class=\"btn btn-xs float-right link-royal\">\n            <span class=\"fa fa-gear\"></span>\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a [routerLink]=\"['user/:uid/website/:wid/page']\">\n            <span>Blog App</span>\n          </a>\n          <a [routerLink]=\"['user/:uid/website/:wid']\" class=\"btn btn-xs float-right link-royal\">\n            <span class=\"fa fa-gear\"></span>\n          </a>\n        </li>\n      </ul>\n    </div><!--/Sidebar Content-->\n  </div><!--/Sidebar-->\n\n  <div class=\"hvj-vertical-line col-4 hvj-landscape-only\"></div>\n  <!--Main content-->\n  <div class=\"col\">\n    <!--Top Nav-->\n    <nav\n      class=\"navbar navbar-expand fixed-top navbar-dark bg-royal ml-auto hvj-landscape-col-8 px-2\">\n      <ul class=\"navbar-nav mr-3 hvj-portrait-only\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website']\" title=\"Websites\">\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n\n      <a class=\"navbar-brand pl-2\" href=\"\">New Website</a>\n\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website']\" title=\"Save Changes\">\n            <span class=\"fa fa-check fa-lg\"></span>\n          </a>\n        </li>\n      </ul>\n    </nav><!--/Top Nav-->\n\n    <!--content-->\n    <div>\n      <form>\n        <!--Website Name-->\n        <div class=\"form-group\">\n          <label for=\"websiteName\" class=\"font-weight-bold text-muted\">Website Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"websiteName\" placeholder=\"Name\">\n        </div><!--/Website Name-->\n\n        <!--Website Description-->\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\" class=\"font-weight-bold text-muted\">Website Name</label>\n          <textarea class=\"form-control\" id=\"websiteDescription\" rows=\"6\"\n                    placeholder=\"Description\"></textarea>\n        </div><!--/Website Description-->\n\n        <a class=\"btn btn-danger btn-block\" [routerLink]=\"['user/:uid/website']\">Delete</a>\n      </form>\n    </div><!--/content-->\n  </div><!--/Main content-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteNewComponent = (function () {
    function WebsiteNewComponent() {
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebsiteNewComponent);

//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Top Nav-->\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\n  <ul class=\"navbar-nav mr-3\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Back to Widget List\">\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\n      </a>\n    </li>\n  </ul>\n\n  <a class=\"navbar-brand mr-auto\" href=\"\">Choose Widget</a>\n\n</nav>\n<!--/Top Nav-->\n\n<div class=\"container hvj-outermost\">\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <a class=\"btn btn-xs\" href=\"widget-heading.html\">\n        <span>Header</span>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a class=\"btn btn-xs\" href=\"\">\n        <span>Label</span>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a class=\"btn btn-xs\" href=\"\">\n        <span>HTML</span>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a class=\"btn btn-xs\" href=\"\">\n        <span>Text input</span>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a class=\"btn btn-xs\" href=\"\">\n        <span>Link</span>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a class=\"btn btn-xs\" href=\"\">\n        <span>Button</span>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a class=\"btn btn-xs\" href=\"widget-image.html\">\n        <span>Image</span>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a class=\"btn btn-xs\" href=\"widget-youtube.html\">\n        <span>YouTube</span>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a class=\"btn btn-xs\" href=\"\">\n        <span>Data Table</span>\n      </a>\n    </li>\n\n    <li class=\"list-group-item\">\n      <a class=\"btn btn-xs\" href=\"\">\n        <span>Repeater</span>\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetChooserComponent = (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetChooserComponent);

//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetEditComponent = (function () {
    function WidgetEditComponent() {
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetEditComponent);

//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Top Nav-->\n<nav\nclass=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\n<ul class=\"navbar-nav mr-3\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Widgets\">\n      <span class=\"fa fa-chevron-left fa-lg\"></span>\n    </a>\n  </li>\n</ul>\n\n<a class=\"navbar-brand\" href=\"\">Widget Edit</a>\n\n<ul class=\"navbar-nav ml-auto\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Save Changes\">\n      <span class=\"fa fa-check fa-lg\"></span>\n    </a>\n  </li>\n</ul>\n</nav><!--/Top Nav-->\n\n<!--content-->\n<div>\n<form>\n  <!--Widget Name-->\n  <div class=\"form-group\">\n    <label for=\"widget-name\" class=\"font-weight-bold text-muted\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"widget-name\" placeholder=\"Name\">\n  </div><!--/Widget Name-->\n\n  <!--Widget Heading Title-->\n  <div class=\"form-group\">\n    <label for=\"widget-heading-text\" class=\"font-weight-bold text-muted\">Text</label>\n    <input type=\"text\" class=\"form-control\" id=\"widget-heading-text\" placeholder=\"Text\">\n  </div><!--/Widget Heading Title-->\n\n  <!--Widget Heading Size-->\n  <div class=\"form-group\">\n    <label for=\"widget-heading-size\" class=\"font-weight-bold text-muted\">Size</label>\n    <input type=\"number\" class=\"form-control\" id=\"widget-heading-size\" placeholder=\"Size\">\n  </div><!--/Widget Heading Size-->\n\n  <a class=\"btn btn-danger btn-block\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">Delete</a>\n</form>\n</div><!--/content-->\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent() {
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetHeaderComponent);

//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Top Nav-->\n<nav\nclass=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\n<ul class=\"navbar-nav mr-3\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Widgets\">\n      <span class=\"fa fa-chevron-left fa-lg\"></span>\n    </a>\n  </li>\n</ul>\n\n<a class=\"navbar-brand\" href=\"\">Widget Edit</a>\n\n<ul class=\"navbar-nav ml-auto\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Save Changes\">\n      <span class=\"fa fa-check fa-lg\"></span>\n    </a>\n  </li>\n</ul>\n</nav><!--/Top Nav-->\n\n<!--content-->\n<div>\n<form>\n  <!--Widget Name-->\n  <div class=\"form-group\">\n    <label for=\"widget-name\" class=\"font-weight-bold text-muted\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"widget-name\" placeholder=\"Name\">\n  </div><!--/Widget Name-->\n\n  <!--Widget Title-->\n  <div class=\"form-group\">\n    <label for=\"widget-text\" class=\"font-weight-bold text-muted\">Text</label>\n    <input type=\"text\" class=\"form-control\" id=\"widget-text\" placeholder=\"Text\">\n  </div><!--/Widget Title-->\n\n  <!--Widget URL-->\n  <div class=\"form-group\">\n    <label for=\"widget-url\" class=\"font-weight-bold text-muted\">URL</label>\n    <input type=\"url\" class=\"form-control\" id=\"widget-url\" placeholder=\"URL\">\n  </div><!--/Widget URL-->\n\n  <!--Widget width-->\n  <div class=\"form-group\">\n    <label for=\"widget-width\" class=\"font-weight-bold text-muted\">Size</label>\n    <input type=\"text\" class=\"form-control\" id=\"widget-width\" placeholder=\"Width\">\n  </div><!--/Widget width-->\n\n  <!--Widget Upload-->\n  <div class=\"form-group\">\n    <label for=\"widget-upload\" class=\"font-weight-bold text-muted\">Upload</label>\n    <input type=\"file\" class=\"form-control\" id=\"widget-upload\" placeholder=\"Upload\">\n  </div><!--/Widget upload-->\n  <button class=\"btn btn-royal btn-block\">Upload Image</button>\n  <a class=\"btn btn-danger btn-block\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">Delete</a>\n</form>\n</div><!--/content-->"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetImageComponent = (function () {
    function WidgetImageComponent() {
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetImageComponent);

//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Top Nav-->\n<nav\nclass=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\n<ul class=\"navbar-nav mr-3\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Widgets\">\n      <span class=\"fa fa-chevron-left fa-lg\"></span>\n    </a>\n  </li>\n</ul>\n\n<a class=\"navbar-brand\" href=\"\">Widget Edit</a>\n\n<ul class=\"navbar-nav ml-auto\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Save Changes\">\n      <span class=\"fa fa-check fa-lg\"></span>\n    </a>\n  </li>\n</ul>\n</nav><!--/Top Nav-->\n\n<!--content-->\n<div>\n<form>\n  <!--Widget Name-->\n  <div class=\"form-group\">\n    <label for=\"widget-name\" class=\"font-weight-bold text-muted\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"widget-name\" placeholder=\"Name\">\n  </div><!--/Widget Name-->\n\n  <!--Widget Title-->\n  <div class=\"form-group\">\n    <label for=\"widget-text\" class=\"font-weight-bold text-muted\">Text</label>\n    <input type=\"text\" class=\"form-control\" id=\"widget-text\" placeholder=\"Text\">\n  </div><!--/Widget Title-->\n\n  <!--Widget URL-->\n  <div class=\"form-group\">\n    <label for=\"widget-url\" class=\"font-weight-bold text-muted\">URL</label>\n    <input type=\"url\" class=\"form-control\" id=\"widget-url\" placeholder=\"URL\">\n  </div><!--/Widget URL-->\n\n  <!--Widget width-->\n  <div class=\"form-group\">\n    <label for=\"widget-width\" class=\"font-weight-bold text-muted\">Size</label>\n    <input type=\"text\" class=\"form-control\" id=\"widget-width\" placeholder=\"Width\">\n  </div><!--/Widget width-->\n\n  <a class=\"btn btn-danger btn-block\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">Delete</a>\n</form>\n</div><!--/content-->"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetYoutubeComponent);

//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Top Nav-->\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\n  <ul class=\"navbar-nav mr-3\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Pages\">\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\n      </a>\n    </li>\n  </ul>\n\n  <a class=\"navbar-brand\" href=\"\">Widgets</a>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link px-0\" href=\"widget-choose.html\" title=\"Add Widget\">\n        <span class=\"fa fa-plus fa-lg\"></span>\n      </a>\n    </li>\n  </ul>\n</nav>\n<!--/Top Nav-->\n\n<div class=\"container hvj-outermost\">\n  <ul class=\"list-group\">\n     <li class=\"list-group-item border-0 px-1\">\n      <div class=\"hvj-widget hvj-widget-heading\">\n        <h2>GIZMODO</h2>\n      </div>\n      <div class=\"hvj-widget-actions btn-group ml-auto\">\n        <a class=\"btn btn-xs mr-1 link-royal\" href=\"widget-heading.html\" title=\"Edit Heading\">\n          <span class=\"fa fa-gear\"></span>\n        </a>\n        <a class=\"btn btn-xs link-royal\" title=\"More Options\">\n          <span class=\"fa fa-bars\"></span>\n        </a>\n      </div>\n    </li>\n\n     <li class=\"list-group-item border-0 px-1\">\n      <div class=\"hvj-widget hvj-widget-heading\">\n        <h4>Bootstrap 4 Beta here!</h4>\n      </div>\n      <div class=\"hvj-widget-actions btn-group ml-auto\">\n        <a class=\"btn btn-xs mr-1 link-royal\" href=\"widget-heading.html\" title=\"Edit Heading\">\n          <span class=\"fa fa-gear\"></span>\n        </a>\n        <a class=\"btn btn-xs link-royal\" title=\"More Options\">\n          <span class=\"fa fa-bars\"></span>\n        </a>\n      </div>\n    </li>\n\n     <li class=\"list-group-item border-0 px-1\">\n      <div class=\"hvj-widget hvj-widget-image\">\n        <img src=\"http://blog.getbootstrap.com/img/2017/bootstrap-4-beta.png\" class=\"img-fluid\"/>\n      </div>\n      <div class=\"hvj-widget-actions btn-group ml-auto\">\n        <a class=\"btn btn-xs mr-1 link-royal\" href=\"widget-image.html\" title=\"Edit Image\">\n          <span class=\"fa fa-gear\"></span>\n        </a>\n        <a class=\"btn btn-xs link-royal\" title=\"More Options\">\n          <span class=\"fa fa-bars\"></span>\n        </a>\n      </div>\n    </li>\n\n     <li class=\"list-group-item border-0 px-1\">\n      <div class=\"hvj-widget hvj-widget-html\">\n        <p>\n          Long story short, shipping a beta means we’re done breaking all your stuff until our next\n          major version (v5). We’re not perfect, but we’ll be doing our best to keep all the\n          classes, features, and docs URLs as they appear now in this release. We can always add\n          more things, but we cannot take away.\n          <a href=\"http://blog.getbootstrap.com/2017/08/10/bootstrap-4-beta/\" target=\"_blank\">Its\n            about time!</a>\n        </p>\n      </div>\n      <div class=\"hvj-widget-actions btn-group ml-auto\">\n        <a class=\"btn btn-xs mr-1 link-royal\" href=\"widget-image.html\" title=\"Edit Image\">\n          <span class=\"fa fa-gear\"></span>\n        </a>\n        <a class=\"btn btn-xs link-royal\" title=\"More Options\">\n          <span class=\"fa fa-bars\"></span>\n        </a>\n      </div>\n    </li>\n\n     <li class=\"list-group-item border-0 px-1\">\n      <div class=\"hvj-widget hvj-widget-heading\">\n        <h4>What's new in Bootstrap 4?</h4>\n      </div>\n      <div class=\"hvj-widget-actions btn-group ml-auto\">\n        <a class=\"btn btn-xs mr-1 link-royal\" href=\"widget-heading.html\" title=\"Edit Heading\">\n          <span class=\"fa fa-gear\"></span>\n        </a>\n        <a class=\"btn btn-xs link-royal\" title=\"More Options\">\n          <span class=\"fa fa-bars\"></span>\n        </a>\n      </div>\n    </li>\n\n     <li class=\"list-group-item border-0 px-1\">\n      <div class=\"hvj-widget hvj-widget-youtube\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/N8GksI_-iIM\"\n                  frameborder=\"0\" allowfullscreen></iframe>\n        </div>\n      </div>\n      <div class=\"hvj-widget-actions btn-group ml-auto\">\n        <a class=\"btn btn-xs mr-1 link-royal\" href=\"widget-youtube.html\" title=\"Edit Youtube\">\n          <span class=\"fa fa-gear\"></span>\n        </a>\n        <a class=\"btn btn-xs link-royal\" title=\"More Options\">\n          <span class=\"fa fa-bars\"></span>\n        </a>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetListComponent = (function () {
    function WidgetListComponent() {
    }
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetListComponent);

//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
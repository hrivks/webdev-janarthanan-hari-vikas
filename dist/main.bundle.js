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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// App services





// App Components















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
            __WEBPACK_IMPORTED_MODULE_14__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_9__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_11__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_12__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_13__services_interactions_service_client__["a" /* InteractionsService */]],
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
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
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

module.exports = "<div class=\"row\">\r\n  <!-- Sidebar -->\r\n  <div class=\"col-4 hvj-landscape-only\">\r\n    <!--Top Nav-->\r\n    <nav\r\n      class=\"navbar navbar-expand fixed-top navbar-dark bg-royal col-4 hvj-nav-border-right px-2\">\r\n      <ul class=\"navbar-nav mr-3\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Pages\">\r\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <a class=\"navbar-brand\" href=\"\">Pages</a>\r\n\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link px-0\" href=\"page-new.html\" title=\"New Page\">\r\n            <span class=\"fa fa-plus fa-lg\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav><!--/Top Nav-->\r\n\r\n    <!--Sidebar Content-->\r\n    <div>\r\n      <ul class=\"list-group  list-group-flush\">\r\n        <li class=\"list-group-item\">\r\n          <a class=\"btn btn-xs\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n            <span>Blog Post</span>\r\n          </a>\r\n          <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n            <span class=\"fa fa-gear\"></span>\r\n          </a>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <a class=\"btn btn-xs\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n            <span>Blogs</span>\r\n          </a>\r\n          <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n            <span class=\"fa fa-gear\"></span>\r\n          </a>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <a class=\"btn btn-xs\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n            <span>Home</span>\r\n          </a>\r\n          <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n            <span class=\"fa fa-gear\"></span>\r\n          </a>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <a class=\"btn btn-xs\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n            <span>About</span>\r\n          </a>\r\n          <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n            <span class=\"fa fa-gear\"></span>\r\n          </a>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <a class=\"btn btn-xs\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n            <span>Contact Us</span>\r\n          </a>\r\n          <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n            <span class=\"fa fa-gear\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div><!--/Sidebar Content-->\r\n  </div><!--/Sidebar-->\r\n\r\n  <div class=\"hvj-vertical-line col-4 hvj-landscape-only\"></div>\r\n  <!--Main content-->\r\n  <div class=\"col\">\r\n    <!--Top Nav-->\r\n    <nav\r\n      class=\"navbar navbar-expand fixed-top navbar-dark bg-royal ml-auto hvj-landscape-col-8 px-2\">\r\n      <ul class=\"navbar-nav mr-3 hvj-portrait-only\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Websites\">\r\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <a class=\"navbar-brand\" href=\"\">Edit Page</a>\r\n\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Save Changes\">\r\n            <span class=\"fa fa-check fa-lg\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav><!--/Top Nav-->\r\n\r\n    <!--content-->\r\n    <div>\r\n      <form>\r\n        <!--Page Name-->\r\n        <div class=\"form-group\">\r\n          <label for=\"pageName\" class=\"font-weight-bold text-muted\">Page Name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"pageName\" placeholder=\"Page Name\"\r\n                 value=\"Blog Post\">\r\n        </div><!--/Page Name-->\r\n\r\n        <!--Page Title-->\r\n        <div class=\"form-group\">\r\n          <label for=\"pageTitle\" class=\"font-weight-bold text-muted\">Page Title</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"pageTitle\" placeholder=\"Page Title\">\r\n        </div><!--/Page Name-->\r\n        <a class=\"btn btn-danger btn-block\" [routerLink]=\"['user/:uid/website/:wid/page']\">Delete</a>\r\n      </form>\r\n    </div><!--/content-->\r\n  </div><!--/Main content-->\r\n</div>"

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

module.exports = "\r\n<!--Top Nav-->\r\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\r\n  <ul class=\"navbar-nav mr-3\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid']\" title=\"Back to Profile\">\r\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n\r\n  <a class=\"navbar-brand\" href=\"\">Pages</a>\r\n\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['user/:uid/website/:wid/page/new']\" title=\"New Page\">\r\n        <span class=\"fa fa-plus fa-lg\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!--/Top Nav-->\r\n\r\n<div class=\"container hvj-outermost\">\r\n  <ul class=\"list-group list-group-flush\">\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n        <span>Blog Post</span>\r\n      </a>\r\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n        <span class=\"fa fa-gear\"></span>\r\n      </a>\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n        <span>Blogs</span>\r\n      </a>\r\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n        <span class=\"fa fa-gear\"></span>\r\n      </a>\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n        <span>Home</span>\r\n      </a>\r\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n        <span class=\"fa fa-gear\"></span>\r\n      </a>\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n        <span>About</span>\r\n      </a>\r\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n        <span class=\"fa fa-gear\"></span>\r\n      </a>\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n        <span>Contact Us</span>\r\n      </a>\r\n      <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n        <span class=\"fa fa-gear\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>"

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

module.exports = "<div class=\"row\">\r\n  <!-- Sidebar -->\r\n  <div class=\"col-4 hvj-landscape-only px-1\">\r\n    <!--Top Nav-->\r\n    <nav\r\n      class=\"navbar navbar-expand fixed-top navbar-dark bg-royal col-4 hvj-nav-border-right px-2\">\r\n      <ul class=\"navbar-nav mr-2\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Pages\">\r\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <a class=\"navbar-brand\" href=\"\">Pages</a>\r\n\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link px-0\" href=\"page-new.html\" title=\"New Page\">\r\n            <span class=\"fa fa-plus fa-lg\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav><!--/Top Nav-->\r\n\r\n    <!--Sidebar Content-->\r\n    <div>\r\n      <ul class=\"list-group list-group-flush\">\r\n      <li class=\"list-group-item \">\r\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n          <span>Blog Post</span>\r\n        </a>\r\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n          <span class=\"fa fa-gear\"></span>\r\n        </a>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n          <span>Blogs</span>\r\n        </a>\r\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n          <span class=\"fa fa-gear\"></span>\r\n        </a>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n          <span>Home</span>\r\n        </a>\r\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n          <span class=\"fa fa-gear\"></span>\r\n        </a>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n          <span>About</span>\r\n        </a>\r\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n          <span class=\"fa fa-gear\"></span>\r\n        </a>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">\r\n          <span>Contact Us</span>\r\n        </a>\r\n        <a [routerLink]=\"['user/:uid/website/:wid/page/:pid']\" class=\"btn btn-xs float-right link-royal\">\r\n          <span class=\"fa fa-gear\"></span>\r\n        </a>\r\n      </li>\r\n      </ul>\r\n    </div><!--/Sidebar Content-->\r\n  </div><!--/Sidebar-->\r\n\r\n  <div class=\"hvj-vertical-line col-4 hvj-landscape-only\"></div>\r\n  <!--Main content-->\r\n  <div class=\"col\">\r\n    <!--Top Nav-->\r\n    <nav\r\n      class=\"navbar navbar-expand fixed-top navbar-dark bg-royal ml-auto hvj-landscape-col-8 px-2\">\r\n      <ul class=\"navbar-nav mr-3 hvj-portrait-only\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Pages\">\r\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <a class=\"navbar-brand\" href=\"\">New Page</a>\r\n\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Save Changes\">\r\n            <span class=\"fa fa-check fa-lg\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav><!--/Top Nav-->\r\n\r\n    <!--content-->\r\n    <div>\r\n      <form>\r\n        <!--Page Name-->\r\n        <div class=\"form-group\">\r\n          <label for=\"pageName\" class=\"font-weight-bold text-muted\">Page Name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"pageName\" placeholder=\"Page Name\">\r\n        </div><!--/Page Name-->\r\n\r\n        <!--Page Title-->\r\n        <div class=\"form-group\">\r\n          <label for=\"pageTitle\" class=\"font-weight-bold text-muted\">Page Title</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"pageTitle\" placeholder=\"Page Title\">\r\n        </div><!--/Page Title-->\r\n\r\n        <a class=\"btn btn-danger btn-block\" [routerLink]=\"['user/:uid/website/:wid/page']\">Delete</a>\r\n      </form>\r\n    </div><!--/content-->\r\n  </div><!--/Main content-->\r\n</div>"

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

module.exports = "<div class=\"container\">\r\n  \r\n<p>\r\n  <span class=\"display-3\">Login</span>\r\n</p>\r\n<hr>\r\n<br>\r\n<!--form-->\r\n<form class=\"form\"\r\n      #f=\"ngForm\"\r\n      (ngSubmit)=\"login(f)\"\r\n      novalidate>\r\n  <div class=\"form-group\">\r\n    <input placeholder=\"User Name\"\r\n           type=\"text\"\r\n           class=\"form-control\"\r\n           name=\"username\"\r\n           #usernameField=\"ngModel\"\r\n           ngModel\r\n           [ngClass]=\"{'border-danger': !usernameField.valid && usernameField.touched}\"\r\n           required />\r\n    <span class=\"small text-danger ml-2\"\r\n          *ngIf=\"usernameField.invalid && usernameField.touched\">Username is required</span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <input placeholder=\"Password\"\r\n           type=\"password\"\r\n           class=\"form-control\"\r\n           name=\"password\"\r\n           #passwordField=\"ngModel\"\r\n           ngModel\r\n           [ngClass]=\"{'border-danger': !passwordField.valid && passwordField.touched}\"\r\n           required/>\r\n    <span class=\"small text-danger ml-2\"\r\n          *ngIf=\"passwordField.invalid && passwordField.touched\">Password is required</span>\r\n  </div>\r\n  <div *ngIf=\"loginError\">\r\n    <div class=\"alert alert-danger text-center\">{{loginError}}</div>\r\n    </div>\r\n    <!-- form actions -->\r\n    <div>\r\n      <button type=\"submit\"\r\n              class=\"btn btn-royal btn-block\"\r\n              [disabled]=\"!f.valid\">Login</button>\r\n      <a class=\"btn btn-secondary btn-block\"\r\n         [routerLink]=\"['/register']\">Register</a>\r\n    </div>\r\n    <!-- /form actions -->\r\n</form>\r\n<!--/form-->\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
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
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(this.username, this.password);
        if (user) {
            this.router.navigate(['/user', user._id]);
        }
        else {
            this.loginError = 'Invalid Credentials';
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
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

module.exports = "<!--Top Nav-->\r\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\r\n  <a class=\"navbar-brand\"\r\n     [routerLink]=\"['/user', this.userId]\">Profile</a>\r\n\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item\">\r\n      <button class=\"btn btn-royal px-2\"\r\n              (click)=\"saveProfile()\"\r\n              title=\"Save Changes\">\r\n        <span class=\"fa fa-check fa-lg\"></span>\r\n      </button>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!--/Top Nav-->\r\n\r\n<div class=\"container\">\r\n  <form #profileForm=\"ngForm\"\r\n        *ngIf=\"user\">\r\n    <!--User Name-->\r\n    <div class=\"form-group\">\r\n      <label for=\"username\"\r\n             class=\"font-weight-bold text-muted\">Username</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"username\"\r\n             placeholder=\"walice\"\r\n             name=\"username\"\r\n             [(ngModel)]=\"user.username\"\r\n             #usernameField=\"ngModel\"\r\n             [ngClass]=\"{'border-danger': profileErrors.username || (!usernameField.valid && usernameField.touched)}\"\r\n             required>\r\n      <span *ngIf=\"usernameField.invalid && usernameField.touched\"\r\n            class=\"text-danger ml-2\">Username is required</span>\r\n      <span *ngIf=\"profileErrors.username\"\r\n            class=\"text-danger ml-2\">{{profileErrors.username}}</span>\r\n    </div>\r\n    <!--/User Name-->\r\n\r\n    <!--Email-->\r\n    <div class=\"form-group\">\r\n      <label for=\"email\"\r\n             class=\"font-weight-bold text-muted\">Email address</label>\r\n      <input type=\"email\"\r\n             class=\"form-control\"\r\n             id=\"email\"\r\n             name=\"email\"\r\n             placeholder=\"alice.wonderland@unicorn.com\"\r\n             [(ngModel)]=\"user.email\"\r\n             #emailField=\"ngModel\"\r\n             [ngClass]=\"{'border-danger': profileErrors.email}\">\r\n      <span *ngIf=\"profileErrors.email\"\r\n            class=\"text-danger ml-2\"></span>\r\n    </div>\r\n    <!--/Email-->\r\n\r\n    <!--First Name-->\r\n    <div class=\"form-group\">\r\n      <label for=\"first-name\"\r\n             class=\"font-weight-bold text-muted\">First Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"first-name\"\r\n             name=\"firstName\"\r\n             placeholder=\"Alice\"\r\n             [(ngModel)]=\"user.firstName\"\r\n             #firstNameField=\"ngModel\"\r\n             [ngClass]=\"{'border-danger': profileErrors.firstName || (!firstNameField.valid && firstNameField.touched)}\"\r\n             required>\r\n      <span *ngIf=\"firstNameField.invalid && firstNameField.touched\"\r\n            class=\"text-danger ml-2\">First Name is required</span>\r\n      <span *ngIf=\"profileErrors.firstName\"\r\n            class=\"text-danger ml-2\"></span>\r\n    </div>\r\n    <!--First Name-->\r\n\r\n    <!--Last Name-->\r\n    <div class=\"form-group\">\r\n      <label for=\"last-name\"\r\n             class=\"font-weight-bold text-muted\">Last Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"last-name\"\r\n             name=\"lastName\"\r\n             placeholder=\"Wonderland\"\r\n             [(ngModel)]=\"user.lastName\"\r\n             #lastNameField=\"ngModel\"\r\n             [ngClass]=\"{'border-danger': profileErrors.lastName || (!lastNameField.valid && lastNameField.touched)}\"\r\n             required>\r\n      <span *ngIf=\"lastNameField.invalid && lastNameField.touched\"\r\n            class=\"text-danger ml-2\">Last Name is required</span>\r\n      <span *ngIf=\"profileErrors.lastName\"\r\n            class=\"text-danger ml-2\"></span>\r\n    </div>\r\n    <!--/Last Name-->\r\n\r\n    <!--Action Buttons-->\r\n    <div class=\"form-group\">\r\n      <a class=\"btn btn-royal btn-block\"\r\n         [routerLink]=\"['/user', userId, 'website']\">Websites</a>\r\n      <a class=\"btn btn-danger btn-block\"\r\n         [routerLink]=\"['/login']\">Logout</a>\r\n    </div>\r\n    <!--/Action Buttons-->\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
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
    function ProfileComponent(activatedRoute, userService, router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.profileErrors = {
            hasError: false
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get userid parameter route
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.user = this.userService.findUserById(this.userId);
        if (!this.user) {
            this.router.navigate(['/login']);
        }
    };
    /** Save user profile details */
    ProfileComponent.prototype.saveProfile = function () {
        if (!this.profileForm.valid || this.profileForm.untouched) {
            return;
        }
        //#region: validate form
        // reset
        this.profileErrors = {
            hasError: false
        };
        // username validation
        var userExists = this.userService.findUserByUsername(this.user.username);
        if (userExists._id !== this.user._id) {
            this.profileErrors.username = 'Username already exists. Please try another username';
            this.profileErrors.hasError = true;
        }
        else if (this.testInvalidString(this.user.username, true)) {
            this.profileErrors.username = 'Invalid username. Only alphabets and . allowed';
            this.profileErrors.hasError = true;
        }
        // first name validation
        if (this.testInvalidString(this.user.firstName)) {
            this.profileErrors.firstName = 'Invalid Name. Only alphabets allowed';
            this.profileErrors.hasError = true;
        }
        // last name validation
        if (this.testInvalidString(this.user.lastName)) {
            this.profileErrors.lastName = 'Invalid Name. Only alphabets allowed';
            this.profileErrors.hasError = true;
        }
        //#endregion
        if (!this.profileErrors.hasError) {
            this.user = this.userService.updateUser(this.userId, this.user);
        }
    };
    /** Test if the given string contains characters apart from alphabets
     * @param s the string to be tested
     * @param allowDot true, if dot is allowed in the string
     * @returns true, if the string contains invalid characters
     */
    ProfileComponent.prototype.testInvalidString = function (s, allowDot) {
        if (allowDot === void 0) { allowDot = false; }
        var regEx;
        if (allowDot) {
            regEx = new RegExp('[^a-zA-Z.]');
        }
        else {
            regEx = new RegExp('[^a-zA-Z]');
        }
        return regEx.test(s);
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('profileForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
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

module.exports = "<div class=\"container\">\r\n      <p>\r\n            <span class=\"display-3\">Register</span>\r\n      </p>\r\n      <hr>\r\n      <br>\r\n      <!--form-->\r\n      <form class=\"form\"\r\n            #registerForm=\"ngForm\">\r\n            <!-- User Name -->\r\n            <div class=\"form-group\">\r\n                  <input placeholder=\"User Name\"\r\n                         type=\"text\"\r\n                         class=\"form-control\"\r\n                         name=\"usernameField\"\r\n                         [(ngModel)]=\"username\"\r\n                         #usernameField=\"ngModel\"\r\n                         [ngClass]=\"{'border-danger': registrationErrors.username || (!usernameField.valid && usernameField.touched)}\"\r\n            \r\n                         required />\r\n                  <span *ngIf=\"usernameField.invalid && usernameField.touched\"\r\n                        class=\"text-danger ml-2\">Username is required</span>\r\n                  <span *ngIf=\"registrationErrors.username\"\r\n                        class=\"text-danger ml-2\">{{registrationErrors.username}}</span>\r\n            </div>\r\n\r\n            <!-- Password -->\r\n            <div class=\"form-group\">\r\n                  <input placeholder=\"Password\"\r\n                         type=\"password\"\r\n                         class=\"form-control\"\r\n                         name=\"passwordField\"\r\n                         [(ngModel)]=\"password\"\r\n                         #passwordField=\"ngModel\"\r\n                         [ngClass]=\"{'border-danger': (!passwordField.valid && passwordField.touched)}\"\r\n                         required />\r\n                  <span *ngIf=\"passwordField.invalid && passwordField.touched\"\r\n                        class=\"text-danger ml-2\">Password is required</span>\r\n            </div>\r\n\r\n            <!-- Verify Password -->\r\n            <div class=\"form-group\">\r\n                  <input placeholder=\"Verify Password\"\r\n                         type=\"password\"\r\n                         class=\"form-control\"\r\n                         name=\"verifyPasswordField\"\r\n                         [(ngModel)]=\"verifyPassword\"\r\n                         #verifyPasswordField=\"ngModel\"\r\n                         [ngClass]=\"{'border-danger': verifyPassword !== password && verifyPasswordField.touched}\"\r\n                         required />\r\n                  <span *ngIf=\"verifyPasswordField.invalid && verifyPasswordField.touched\"\r\n                        class=\"text-danger ml-2\">Verify Password is required</span>\r\n                  <span *ngIf=\"verifyPassword && verifyPassword !== password && verifyPasswordField.touched\"\r\n                        class=\"text-danger ml-2\">Passwords do not match</span>\r\n            </div>\r\n\r\n            <!-- form actions -->\r\n            <div>\r\n                  <button class=\"btn btn-royal btn-block\"\r\n                          (click)=\"register()\"\r\n                          [disabled]=\"registerForm.invalid || verifyPassword !== password\">Register</button>\r\n                  <a class=\"btn btn-danger btn-block\"\r\n                     [routerLink]=\"['/login']\">Cancel</a>\r\n            </div>\r\n            <!-- /form actions -->\r\n      </form>\r\n      <!--/form-->\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.registrationErrors = {};
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        var newUser = new __WEBPACK_IMPORTED_MODULE_1__model_model__["a" /* User */]();
        newUser.username = this.username;
        newUser.password = this.password;
        newUser = this.userService.createUser(newUser);
        this.router.navigate(['/user', newUser._id]);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
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

module.exports = "<div class=\"row\">\r\n  <!-- Sidebar -->\r\n  <div class=\"col-4 hvj-landscape-only px-1\">\r\n    <app-website-list compactMode=\"true\"></app-website-list>\r\n  </div>\r\n  <!--/Sidebar-->\r\n\r\n  <div class=\"hvj-vertical-line col-4 hvj-landscape-only\"></div>\r\n  <!--Main content-->\r\n  <div class=\"col\">\r\n    <!--Top Nav-->\r\n    <nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal ml-auto hvj-landscape-col-8 px-2\">\r\n      <ul class=\"navbar-nav mr-3 hvj-portrait-only\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link px-0\"\r\n             [routerLink]=\"['/user', userId, 'website']\"\r\n             title=\"Websites\">\r\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <a class=\"navbar-brand\"\r\n         href=\"\">Edit Website</a>\r\n\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link px-0\"\r\n             (click)=\"saveChanges()\"\r\n             title=\"Save Changes\">\r\n            <span class=\"fa fa-check fa-lg\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <!--/Top Nav-->\r\n\r\n    <!--content-->\r\n    <div>\r\n      <form #websiteEditForm=\"ngForm\">\r\n        <!--Website Name-->\r\n        <div class=\"form-group\">\r\n          <label for=\"websiteName\"\r\n                 class=\"font-weight-bold text-muted\">Website Name</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"websiteName\"\r\n                 name=\"name\"\r\n                 placeholder=\"Name\"\r\n                 [(ngModel)]=\"website.name\"\r\n                 #nameField=\"ngModel\"\r\n                 [ngClass]=\"{'border-danger': nameField.invalid && nameField.touched}\"\r\n                 required>\r\n          <span *ngIf=\"nameField.invalid && nameField.touched\"\r\n                class=\"text-danger ml-2\">Name is required</span>\r\n        </div>\r\n        <!--/Website Name-->\r\n\r\n        <!--Website Description-->\r\n        <div class=\"form-group\">\r\n          <label for=\"websiteDescription\"\r\n                 class=\"font-weight-bold text-muted\">Website Name</label>\r\n          <textarea class=\"form-control\"\r\n                    id=\"websiteDescription\"\r\n                    name=\"description\"\r\n                    [(ngModel)]=\"website.description\"\r\n                    rows=\"6\">{{website.description}}\r\n          </textarea>\r\n        </div>\r\n        <!--/Website Description-->\r\n\r\n        <button class=\"btn btn-danger btn-block\"\r\n                (click)=\"showDeleteConfirmation = true\"\r\n                [hidden]=\"showDeleteConfirmation\">Delete</button>\r\n        <button class=\"btn btn-danger btn-block\" [hidden]=\"!showDeleteConfirmation\"\r\n                (click)=\"deleteWebsite()\">Are you sure?</button>\r\n      </form>\r\n    </div>\r\n    <!--/content-->\r\n  </div>\r\n  <!--/Main content-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
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
    function WebsiteEditComponent(activatedRoute, router, websiteService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websiteService = websiteService;
        this.interactionsService = interactionsService;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showDeleteConfirmation = false;
        // get userid parameter route
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.website = this.websiteService.findWebsiteById(this.websiteId);
    };
    /**
     * Save changes to website object
     */
    WebsiteEditComponent.prototype.saveChanges = function () {
        if (this.websiteEditForm.invalid) {
            // touch controls to highlight validation
            this.websiteEditForm.controls.name.markAsTouched({ onlySelf: true });
        }
        else {
            this.websiteService.updateWebsite(this.websiteId, this.website);
            console.log('website saved successfully');
            this.router.navigate(['/user', this.userId, 'website']);
        }
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        this.websiteService.deleteWebsite(this.websiteId);
        this.router.navigate(['/user', this.userId, 'website']);
    };
    return WebsiteEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('websiteEditForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "websiteEditForm", void 0);
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _e || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<!--Top Nav-->\r\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\"\r\n     [ngClass]=\"{'col-4 border border-left-0 border-top-0 border-bottom-0 border-secondary' : compactMode}\">\r\n  <ul class=\"navbar-nav mr-3\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link px-0\"\r\n         [routerLink]=\"['/user', userId]\"\r\n         title=\"Back to Profile\">\r\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n\r\n  <a class=\"navbar-brand\"\r\n     href=\"\">Websites</a>\r\n\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link px-0\"\r\n         [routerLink]=\"['/user', userId,'website','new']\"\r\n         title=\"New Website\">\r\n        <span class=\"fa fa-plus fa-lg\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!--/Top Nav-->\r\n\r\n<div class=\"container website-list\">\r\n  <ul class=\"list-group list-group-flush\">\r\n\r\n    <li class=\"list-group-item\"\r\n        *ngFor=\"let thisWebsite of websites\">\r\n      <a [routerLink]=\"['/user', userId,'website', thisWebsite._id, 'page']\">\r\n        <span>{{thisWebsite.name}}</span>\r\n        <span class=\"small text-secondary font-italic d-sm-inline d-none ml-2\">{{thisWebsite.description}}</span>\r\n      </a>\r\n      <a [routerLink]=\"['/user', userId, 'website', thisWebsite._id]\"\r\n         class=\"btn btn-xs float-right link-royal\">\r\n        <span class=\"fa fa-gear\"></span>\r\n      </a>\r\n    </li>\r\n\r\n    <!-- No websites message -->\r\n    <li class=\"list-group-item\"\r\n        *ngIf=\"websites.length == 0\">\r\n      <span>\r\n        <em>No websites to show</em>\r\n      </span>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\"\r\n        *ngIf=\"websites.length == 0\">\r\n      <a class=\"btn btn-xs link-royal\"\r\n         [routerLink]=\"['/user', userId,'website','new']\">\r\n        <i class=\"fa fa-plus fa-lg mr-2\"></i>\r\n        <em class=\"text-secondary\">Create new website</em>\r\n      </a>\r\n    </li>\r\n\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
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
    function WebsiteListComponent(activatedRoute, websiteService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.websiteService = websiteService;
        this.interactionsService = interactionsService;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get userid parameter route
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.getWebsites();
        // register for website change event
        this.interactionsService.registerCallback('websiteUpdated', function () { _this.getWebsites(); });
    };
    /**
     * Get list of websites for the current user
     */
    WebsiteListComponent.prototype.getWebsites = function () {
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
    };
    return WebsiteListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], WebsiteListComponent.prototype, "compactMode", void 0);
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
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

module.exports = "<div class=\"row\">\r\n  <!-- Sidebar -->\r\n  <div class=\"col-4 hvj-landscape-only px-1\">\r\n    <app-website-list compactMode=\"true\"></app-website-list>\r\n  </div>\r\n  <!--/Sidebar-->\r\n\r\n  <div class=\"hvj-vertical-line col-4 hvj-landscape-only\"></div>\r\n  <!--Main content-->\r\n  <div class=\"col\">\r\n    <!--Top Nav-->\r\n    <nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal ml-auto hvj-landscape-col-8 px-2\">\r\n      <ul class=\"navbar-nav mr-3 hvj-portrait-only\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link px-0\"\r\n             [routerLink]=\"['/user', userId, 'website']\"\r\n             title=\"Websites\">\r\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <a class=\"navbar-brand\"\r\n         href=\"\">New Website</a>\r\n\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link px-0\"\r\n             (click)=\"saveChanges()\"\r\n             title=\"Save Changes\">\r\n            <span class=\"fa fa-check fa-lg\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <!--/Top Nav-->\r\n\r\n    <!--content-->\r\n    <div>\r\n      <form #websiteNewForm=\"ngForm\">\r\n        <!--Website Name-->\r\n        <div class=\"form-group\">\r\n          <label for=\"websiteName\"\r\n                 class=\"font-weight-bold text-muted\">Website Name</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"websiteName\"\r\n                 name=\"name\"\r\n                 placeholder=\"Name\"\r\n                 [(ngModel)]=\"website.name\"\r\n                 #nameField=\"ngModel\"\r\n                 [ngClass]=\"{'border-danger': nameField.invalid && nameField.touched}\"\r\n                 required>\r\n          <span *ngIf=\"nameField.invalid && nameField.touched\"\r\n                class=\"text-danger ml-2\">Name is required</span>\r\n        </div>\r\n        <!--/Website Name-->\r\n\r\n        <!--Website Description-->\r\n        <div class=\"form-group\">\r\n          <label for=\"websiteDescription\"\r\n                 class=\"font-weight-bold text-muted\">Website Name</label>\r\n          <textarea class=\"form-control\"\r\n                    id=\"websiteDescription\"\r\n                    name=\"description\"\r\n                    [(ngModel)]=\"website.description\"\r\n                    rows=\"6\">{{website.description}}\r\n            </textarea>\r\n        </div>\r\n        <!--/Website Description-->\r\n\r\n        <a class=\"btn btn-block btn-danger\"\r\n           [routerLink]=\"['/user', userId, 'website']\">Cancel</a>\r\n      </form>\r\n    </div>\r\n    <!--/content-->\r\n  </div>\r\n  <!--/Main content-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
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
    function WebsiteNewComponent(activatedRoute, router, websiteService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websiteService = websiteService;
        this.interactionsService = interactionsService;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get userid parameter route
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.website = new __WEBPACK_IMPORTED_MODULE_3__model_model__["b" /* Website */]();
        this.website.developerId = this.userId;
    };
    WebsiteNewComponent.prototype.saveChanges = function () {
        if (this.websiteNewForm.invalid) {
            // touch controls to highlight validation
            this.websiteNewForm.controls.name.markAsTouched({ onlySelf: true });
        }
        else {
            this.websiteService.createWebsite(this.userId, this.website);
            console.log('website created successfully');
            this.router.navigate(['/user', this.userId, 'website']);
        }
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('websiteNewForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "websiteNewForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _e || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "\r\n<!--Top Nav-->\r\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\r\n  <ul class=\"navbar-nav mr-3\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Back to Widget List\">\r\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n\r\n  <a class=\"navbar-brand mr-auto\" href=\"\">Choose Widget</a>\r\n\r\n</nav>\r\n<!--/Top Nav-->\r\n\r\n<div class=\"container hvj-outermost\">\r\n  <ul class=\"list-group list-group-flush\">\r\n    <li class=\"list-group-item\">\r\n      <a class=\"btn btn-xs\" href=\"widget-heading.html\">\r\n        <span>Header</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a class=\"btn btn-xs\" href=\"\">\r\n        <span>Label</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a class=\"btn btn-xs\" href=\"\">\r\n        <span>HTML</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a class=\"btn btn-xs\" href=\"\">\r\n        <span>Text input</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a class=\"btn btn-xs\" href=\"\">\r\n        <span>Link</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a class=\"btn btn-xs\" href=\"\">\r\n        <span>Button</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a class=\"btn btn-xs\" href=\"widget-image.html\">\r\n        <span>Image</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a class=\"btn btn-xs\" href=\"widget-youtube.html\">\r\n        <span>YouTube</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a class=\"btn btn-xs\" href=\"\">\r\n        <span>Data Table</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a class=\"btn btn-xs\" href=\"\">\r\n        <span>Repeater</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>"

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

module.exports = "<p>\r\n  widget-edit works!\r\n</p>\r\n"

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

module.exports = "<!--Top Nav-->\r\n<nav\r\nclass=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\r\n<ul class=\"navbar-nav mr-3\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Widgets\">\r\n      <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<a class=\"navbar-brand\" href=\"\">Widget Edit</a>\r\n\r\n<ul class=\"navbar-nav ml-auto\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Save Changes\">\r\n      <span class=\"fa fa-check fa-lg\"></span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n</nav><!--/Top Nav-->\r\n\r\n<!--content-->\r\n<div>\r\n<form>\r\n  <!--Widget Name-->\r\n  <div class=\"form-group\">\r\n    <label for=\"widget-name\" class=\"font-weight-bold text-muted\">Name</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"widget-name\" placeholder=\"Name\">\r\n  </div><!--/Widget Name-->\r\n\r\n  <!--Widget Heading Title-->\r\n  <div class=\"form-group\">\r\n    <label for=\"widget-heading-text\" class=\"font-weight-bold text-muted\">Text</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"widget-heading-text\" placeholder=\"Text\">\r\n  </div><!--/Widget Heading Title-->\r\n\r\n  <!--Widget Heading Size-->\r\n  <div class=\"form-group\">\r\n    <label for=\"widget-heading-size\" class=\"font-weight-bold text-muted\">Size</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"widget-heading-size\" placeholder=\"Size\">\r\n  </div><!--/Widget Heading Size-->\r\n\r\n  <a class=\"btn btn-danger btn-block\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">Delete</a>\r\n</form>\r\n</div><!--/content-->\r\n\r\n"

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

module.exports = "<!--Top Nav-->\r\n<nav\r\nclass=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\r\n<ul class=\"navbar-nav mr-3\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Widgets\">\r\n      <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<a class=\"navbar-brand\" href=\"\">Widget Edit</a>\r\n\r\n<ul class=\"navbar-nav ml-auto\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Save Changes\">\r\n      <span class=\"fa fa-check fa-lg\"></span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n</nav><!--/Top Nav-->\r\n\r\n<!--content-->\r\n<div>\r\n<form>\r\n  <!--Widget Name-->\r\n  <div class=\"form-group\">\r\n    <label for=\"widget-name\" class=\"font-weight-bold text-muted\">Name</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"widget-name\" placeholder=\"Name\">\r\n  </div><!--/Widget Name-->\r\n\r\n  <!--Widget Title-->\r\n  <div class=\"form-group\">\r\n    <label for=\"widget-text\" class=\"font-weight-bold text-muted\">Text</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"widget-text\" placeholder=\"Text\">\r\n  </div><!--/Widget Title-->\r\n\r\n  <!--Widget URL-->\r\n  <div class=\"form-group\">\r\n    <label for=\"widget-url\" class=\"font-weight-bold text-muted\">URL</label>\r\n    <input type=\"url\" class=\"form-control\" id=\"widget-url\" placeholder=\"URL\">\r\n  </div><!--/Widget URL-->\r\n\r\n  <!--Widget width-->\r\n  <div class=\"form-group\">\r\n    <label for=\"widget-width\" class=\"font-weight-bold text-muted\">Size</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"widget-width\" placeholder=\"Width\">\r\n  </div><!--/Widget width-->\r\n\r\n  <!--Widget Upload-->\r\n  <div class=\"form-group\">\r\n    <label for=\"widget-upload\" class=\"font-weight-bold text-muted\">Upload</label>\r\n    <input type=\"file\" class=\"form-control\" id=\"widget-upload\" placeholder=\"Upload\">\r\n  </div><!--/Widget upload-->\r\n  <button class=\"btn btn-royal btn-block\">Upload Image</button>\r\n  <a class=\"btn btn-danger btn-block\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">Delete</a>\r\n</form>\r\n</div><!--/content-->"

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

module.exports = "<!--Top Nav-->\r\n<nav\r\nclass=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\r\n<ul class=\"navbar-nav mr-3\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Widgets\">\r\n      <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<a class=\"navbar-brand\" href=\"\">Widget Edit</a>\r\n\r\n<ul class=\"navbar-nav ml-auto\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\" title=\"Save Changes\">\r\n      <span class=\"fa fa-check fa-lg\"></span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n</nav><!--/Top Nav-->\r\n\r\n<!--content-->\r\n<div>\r\n<form>\r\n  <!--Widget Name-->\r\n  <div class=\"form-group\">\r\n    <label for=\"widget-name\" class=\"font-weight-bold text-muted\">Name</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"widget-name\" placeholder=\"Name\">\r\n  </div><!--/Widget Name-->\r\n\r\n  <!--Widget Title-->\r\n  <div class=\"form-group\">\r\n    <label for=\"widget-text\" class=\"font-weight-bold text-muted\">Text</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"widget-text\" placeholder=\"Text\">\r\n  </div><!--/Widget Title-->\r\n\r\n  <!--Widget URL-->\r\n  <div class=\"form-group\">\r\n    <label for=\"widget-url\" class=\"font-weight-bold text-muted\">URL</label>\r\n    <input type=\"url\" class=\"form-control\" id=\"widget-url\" placeholder=\"URL\">\r\n  </div><!--/Widget URL-->\r\n\r\n  <!--Widget width-->\r\n  <div class=\"form-group\">\r\n    <label for=\"widget-width\" class=\"font-weight-bold text-muted\">Size</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"widget-width\" placeholder=\"Width\">\r\n  </div><!--/Widget width-->\r\n\r\n  <a class=\"btn btn-danger btn-block\" [routerLink]=\"['user/:uid/website/:wid/page/:pid/widget']\">Delete</a>\r\n</form>\r\n</div><!--/content-->"

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

module.exports = "\r\n<!--Top Nav-->\r\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2\">\r\n  <ul class=\"navbar-nav mr-3\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link px-0\" [routerLink]=\"['user/:uid/website/:wid/page']\" title=\"Pages\">\r\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n\r\n  <a class=\"navbar-brand\" href=\"\">Widgets</a>\r\n\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link px-0\" href=\"widget-choose.html\" title=\"Add Widget\">\r\n        <span class=\"fa fa-plus fa-lg\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!--/Top Nav-->\r\n\r\n<div class=\"container hvj-outermost\">\r\n  <ul class=\"list-group\">\r\n     <li class=\"list-group-item border-0 px-1\">\r\n      <div class=\"hvj-widget hvj-widget-heading\">\r\n        <h2>GIZMODO</h2>\r\n      </div>\r\n      <div class=\"hvj-widget-actions btn-group ml-auto\">\r\n        <a class=\"btn btn-xs mr-1 link-royal\" href=\"widget-heading.html\" title=\"Edit Heading\">\r\n          <span class=\"fa fa-gear\"></span>\r\n        </a>\r\n        <a class=\"btn btn-xs link-royal\" title=\"More Options\">\r\n          <span class=\"fa fa-bars\"></span>\r\n        </a>\r\n      </div>\r\n    </li>\r\n\r\n     <li class=\"list-group-item border-0 px-1\">\r\n      <div class=\"hvj-widget hvj-widget-heading\">\r\n        <h4>Bootstrap 4 Beta here!</h4>\r\n      </div>\r\n      <div class=\"hvj-widget-actions btn-group ml-auto\">\r\n        <a class=\"btn btn-xs mr-1 link-royal\" href=\"widget-heading.html\" title=\"Edit Heading\">\r\n          <span class=\"fa fa-gear\"></span>\r\n        </a>\r\n        <a class=\"btn btn-xs link-royal\" title=\"More Options\">\r\n          <span class=\"fa fa-bars\"></span>\r\n        </a>\r\n      </div>\r\n    </li>\r\n\r\n     <li class=\"list-group-item border-0 px-1\">\r\n      <div class=\"hvj-widget hvj-widget-image\">\r\n        <img src=\"http://blog.getbootstrap.com/img/2017/bootstrap-4-beta.png\" class=\"img-fluid\"/>\r\n      </div>\r\n      <div class=\"hvj-widget-actions btn-group ml-auto\">\r\n        <a class=\"btn btn-xs mr-1 link-royal\" href=\"widget-image.html\" title=\"Edit Image\">\r\n          <span class=\"fa fa-gear\"></span>\r\n        </a>\r\n        <a class=\"btn btn-xs link-royal\" title=\"More Options\">\r\n          <span class=\"fa fa-bars\"></span>\r\n        </a>\r\n      </div>\r\n    </li>\r\n\r\n     <li class=\"list-group-item border-0 px-1\">\r\n      <div class=\"hvj-widget hvj-widget-html\">\r\n        <p>\r\n          Long story short, shipping a beta means we’re done breaking all your stuff until our next\r\n          major version (v5). We’re not perfect, but we’ll be doing our best to keep all the\r\n          classes, features, and docs URLs as they appear now in this release. We can always add\r\n          more things, but we cannot take away.\r\n          <a href=\"http://blog.getbootstrap.com/2017/08/10/bootstrap-4-beta/\" target=\"_blank\">Its\r\n            about time!</a>\r\n        </p>\r\n      </div>\r\n      <div class=\"hvj-widget-actions btn-group ml-auto\">\r\n        <a class=\"btn btn-xs mr-1 link-royal\" href=\"widget-image.html\" title=\"Edit Image\">\r\n          <span class=\"fa fa-gear\"></span>\r\n        </a>\r\n        <a class=\"btn btn-xs link-royal\" title=\"More Options\">\r\n          <span class=\"fa fa-bars\"></span>\r\n        </a>\r\n      </div>\r\n    </li>\r\n\r\n     <li class=\"list-group-item border-0 px-1\">\r\n      <div class=\"hvj-widget hvj-widget-heading\">\r\n        <h4>What's new in Bootstrap 4?</h4>\r\n      </div>\r\n      <div class=\"hvj-widget-actions btn-group ml-auto\">\r\n        <a class=\"btn btn-xs mr-1 link-royal\" href=\"widget-heading.html\" title=\"Edit Heading\">\r\n          <span class=\"fa fa-gear\"></span>\r\n        </a>\r\n        <a class=\"btn btn-xs link-royal\" title=\"More Options\">\r\n          <span class=\"fa fa-bars\"></span>\r\n        </a>\r\n      </div>\r\n    </li>\r\n\r\n     <li class=\"list-group-item border-0 px-1\">\r\n      <div class=\"hvj-widget hvj-widget-youtube\">\r\n        <div class=\"embed-responsive embed-responsive-16by9\">\r\n          <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/N8GksI_-iIM\"\r\n                  frameborder=\"0\" allowfullscreen></iframe>\r\n        </div>\r\n      </div>\r\n      <div class=\"hvj-widget-actions btn-group ml-auto\">\r\n        <a class=\"btn btn-xs mr-1 link-royal\" href=\"widget-youtube.html\" title=\"Edit Youtube\">\r\n          <span class=\"fa fa-gear\"></span>\r\n        </a>\r\n        <a class=\"btn btn-xs link-royal\" title=\"More Options\">\r\n          <span class=\"fa fa-bars\"></span>\r\n        </a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>"

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

/***/ "../../../../../src/app/model/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Website; });
/* unused harmony export Page */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WidgetType; });
/* unused harmony export Widget */
/** Models a User object */
var User = (function () {
    function User() {
    }
    return User;
}());

/** Models a website that is created by a User */
var Website = (function () {
    function Website() {
    }
    return Website;
}());

/** Models a page in a website */
var Page = (function () {
    function Page() {
    }
    return Page;
}());

/** Types of supported widgets */
var WidgetType;
(function (WidgetType) {
    WidgetType[WidgetType["HEADING"] = 0] = "HEADING";
    WidgetType[WidgetType["IMAGE"] = 1] = "IMAGE";
    WidgetType[WidgetType["HTML"] = 2] = "HTML";
    WidgetType[WidgetType["YOUTUBE"] = 3] = "YOUTUBE";
})(WidgetType || (WidgetType = {}));
/** Represents a widget in a page */
var Widget = (function () {
    function Widget() {
    }
    return Widget;
}());

//# sourceMappingURL=model.js.map

/***/ }),

/***/ "../../../../../src/app/services/interactions.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsService; });
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

var InteractionsService = (function () {
    function InteractionsService() {
        // properties
        this.callbacks = new Map();
    }
    /**
     * Register callback for a specific event
     * @param name name of the event to subscribe to
     * @param callback callback function to be invoked with the event occurs
     */
    InteractionsService.prototype.registerCallback = function (name, callback) {
        if (!this.callbacks[name]) {
            this.callbacks[name] = [];
        }
        this.callbacks[name].push(callback);
    };
    /**
     * Invoke all registered callback for the specified event
     * @param name name of the event
     */
    InteractionsService.prototype.fireCallback = function (name) {
        if (this.callbacks[name]) {
            this.callbacks[name].forEach(function (element) {
                try {
                    element();
                }
                catch (ex) {
                    console.log('Error invoking callback function for event ' + name);
                }
            });
        }
    };
    return InteractionsService;
}());
InteractionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], InteractionsService);

//# sourceMappingURL=interactions.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
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

var PageService = (function () {
    function PageService() {
        this.pages = [
            { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
        ];
    }
    /**
     * Create a new page
     * @param userId id of the user who created the page
     * @param page page object created by the user
     * @returns the created page object
     */
    PageService.prototype.createPage = function (websiteId, page) {
        var id = Math.floor(Math.random() * 10000);
        // ensure generated ID is unique
        while (this.findPageById(id.toString())) {
            id++;
        }
        page._id = id.toString();
        page.websiteId = websiteId;
        this.pages.push(page);
        return Object.assign({}, page);
    };
    /**
      * Find page by Id
      * @param pageId id of the page
      * @returns page corresponding to the given Id; null if id page doesn't exit
      */
    PageService.prototype.findPageById = function (pageId) {
        var page = this.pages.find(function (p) { return p._id === pageId; });
        return page ? Object.assign({}, page) : null;
    };
    /**
     * Get all pages in the website specified by website id
     * @param websiteId id of the website
     * @returns {Page[]} list of pages in the website specified by the given id
     */
    PageService.prototype.findPageBywebsiteId = function (websiteId) {
        var page = this.pages.filter(function (p) { return p.websiteId === websiteId; });
        return page ? Object.assign({}, page) : null;
    };
    /**
     * Update page by Id
     * @param pageId Id of the page to update
     * @param page updated page object
     * @returns the updated page object
     */
    PageService.prototype.updatePage = function (pageId, page) {
        var toUpdateIndex = this.pages.findIndex(function (p) { return p._id === pageId; });
        if (toUpdateIndex > -1) {
            this.pages[toUpdateIndex] = page;
            return Object.assign({}, page);
        }
        else {
            return null;
        }
    };
    /**
     * Delete page by Id
     * @param pageId Id of the page to delete
     * @returns page that was deleted, null if the id doesn't exist
     */
    PageService.prototype.deletePage = function (pageId) {
        var toDeleteIndex = this.pages.findIndex(function (u) { return u._id === pageId; });
        var toDelete = this.pages[toDeleteIndex];
        if (toDelete) {
            this.pages.splice(toDeleteIndex, 1);
        }
        return toDelete;
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageService);

//# sourceMappingURL=page.service.client.js.map

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

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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

var UserService = (function () {
    function UserService() {
        // list of users
        this.users = [
            { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder' },
            { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley' },
            { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
            { _id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi' }
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    /**
     * Create a new user
     * @param user user object to be added to the user list
     * @returns created user object
     */
    UserService.prototype.createUser = function (user) {
        var id = Math.floor(Math.random() * 10000);
        // ensure generated ID is unique
        while (this.findUserById(id.toString())) {
            id++;
        }
        user._id = id.toString();
        this.users.push(user);
        return Object.assign({}, user);
    };
    /**
     * Find user by user id
     * @param userId id of the user
     * @returns user with the specifed id; null if id doesn't exist
     */
    UserService.prototype.findUserById = function (userId) {
        var user = this.users.find(function (u) { return u._id === userId; });
        return user ? Object.assign({}, user) : null;
    };
    /**
     * Find user by user name
     * @param username username of the user
     * @returns user with the specifed username; null if id doesn't exist
     */
    UserService.prototype.findUserByUsername = function (username) {
        var user = this.users.find(function (u) { return u.username === username; });
        return user ? Object.assign({}, user) : null;
    };
    /**
     * Find user by credentials
     * @param username username of the user
     * @param password password of the user
     * @returns user with the specifed username; null if id doesn't exist
     */
    UserService.prototype.findUserByCredentials = function (username, password) {
        var user = this.users.find(function (u) { return u.username === username && u.password === password; });
        return user ? Object.assign({}, user) : null;
    };
    /**
     * Update user by user id
     * @param {string} userId id of the user
     * @param user updated user object
     * @returns updated user object
     */
    UserService.prototype.updateUser = function (userId, user) {
        var toUpdateIndex = this.users.findIndex(function (u) { return u._id === userId; });
        if (toUpdateIndex > -1) {
            this.users[toUpdateIndex] = user;
            return Object.assign({}, user);
        }
        else {
            return null;
        }
    };
    /**
     * Delete user by user id
     * @param {string} userId id of the user
     * @returns deleted user object
     */
    UserService.prototype.deleteUser = function (userId) {
        var toDeleteIndex = this.users.findIndex(function (u) { return u._id === userId; });
        var toDelete = this.users[toDeleteIndex];
        if (toDelete) {
            this.users.splice(toDeleteIndex, 1);
        }
        return toDelete;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
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

var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = [
            { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
        ];
    }
    /**
     * Create a new website
     * @param userId id of the user who created the website
     * @param website website object created by the user
     * @returns the created website object
     */
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var id = Math.floor(Math.random() * 10000);
        // ensure generated ID is unique
        while (this.findWebsiteById(id.toString())) {
            id++;
        }
        website._id = id.toString();
        this.websites.push(website);
        return Object.assign({}, website);
    };
    /**
     * Find website by Id
     * @param websiteId id of the website
     * @returns Website corresponding to the given Id; null if id websites doesn't exit
     */
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var website = this.websites.find(function (u) { return u._id === websiteId; });
        return website ? Object.assign({}, website) : null;
    };
    /**
     * Get all websites created by a user
     * @param userId id of the user who developed the website
     * @returns list of websites created by the specified user
     */
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var websites = this.websites.filter(function (w) { return w.developerId === userId; });
        return websites.map(function (w) { return Object.assign({}, w); });
    };
    /**
     * Update website by Id
     * @param websiteId Id of the website to update
     * @param website updated website object
     * @returns the updated website object
     */
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var toUpdateIndex = this.websites.findIndex(function (w) { return w._id === websiteId; });
        if (toUpdateIndex > 0) {
            this.websites[toUpdateIndex] = website;
            return Object.assign({}, website);
        }
        else {
            return null;
        }
    };
    /**
     * Delete webstie by Id
     * @param websiteId Id of the website to delete
     * @returns website that was deleted, null if the id doesn't exist
     */
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var toDeleteIndex = this.websites.findIndex(function (u) { return u._id === websiteId; });
        var toDelete = this.websites[toDeleteIndex];
        if (toDelete) {
            this.websites.splice(toDeleteIndex, 1);
        }
        return toDelete;
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteService);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetService = (function () {
    function WidgetService() {
        this.widgets = [
            { '_id': '123', 'widgetType': __WEBPACK_IMPORTED_MODULE_1__model_model__["c" /* WidgetType */].HEADING, 'pageId': '321', 'size': 2, 'text': 'GIZMODO' },
            { '_id': '234', 'widgetType': __WEBPACK_IMPORTED_MODULE_1__model_model__["c" /* WidgetType */].HEADING, 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            {
                '_id': '345', 'widgetType': __WEBPACK_IMPORTED_MODULE_1__model_model__["c" /* WidgetType */].IMAGE, 'pageId': '321', 'width': '100%',
                'url': 'http://lorempixel.com/400/200/'
            },
            { '_id': '456', 'widgetType': __WEBPACK_IMPORTED_MODULE_1__model_model__["c" /* WidgetType */].HTML, 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
            { '_id': '567', 'widgetType': __WEBPACK_IMPORTED_MODULE_1__model_model__["c" /* WidgetType */].HEADING, 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            {
                '_id': '678', 'widgetType': __WEBPACK_IMPORTED_MODULE_1__model_model__["c" /* WidgetType */].YOUTUBE, 'pageId': '321', 'width': '100%',
                'url': 'https://youtu.be/AM2Ivdi9c4E'
            },
            { '_id': '789', 'widgetType': __WEBPACK_IMPORTED_MODULE_1__model_model__["c" /* WidgetType */].HTML, 'pageId': '321', 'text': '<p>Lorem ipsum</p>' }
        ];
    }
    /**
     * Create a new widget
     * @param pageId id of the page in which the widget is to be added
     * @param widget widget object created
     * @returns the created widget object
     */
    WidgetService.prototype.createPage = function (pageId, widget) {
        var id = Math.floor(Math.random() * 10000);
        // ensure generated ID is unique
        while (this.findWidgetById(id.toString())) {
            id++;
        }
        widget._id = id.toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return Object.assign({}, widget);
    };
    /**
      * Find widget by Id
      * @param widgetId id of the page
      * @returns widget corresponding to the given Id; null if id widget doesn't exit
      */
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var widget = this.widgets.find(function (w) { return w._id === widgetId; });
        return widget ? Object.assign({}, widget) : null;
    };
    /**
     * Update widget by Id
     * @param widgetId Id of the widget to update
     * @param widget updated widget object
     * @returns the updated widget object
     */
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var toUpdateIndex = this.widgets.findIndex(function (w) { return w._id === widgetId; });
        if (toUpdateIndex > 0) {
            this.widgets[toUpdateIndex] = widget;
            return Object.assign({}, widget);
        }
        else {
            return null;
        }
    };
    /**
     * Delete widget by Id
     * @param widgetId Id of the widget to delete
     * @returns widget that was deleted, null if the id doesn't exist
     */
    WidgetService.prototype.deletePage = function (widgetId) {
        var toDeleteIndex = this.widgets.findIndex(function (u) { return u._id === widgetId; });
        var toDelete = this.widgets[toDeleteIndex];
        if (toDelete) {
            this.widgets.splice(toDeleteIndex, 1);
        }
        return toDelete;
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetService);

//# sourceMappingURL=widget.service.client.js.map

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
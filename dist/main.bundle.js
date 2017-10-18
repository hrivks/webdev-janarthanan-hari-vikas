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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader></app-loader>\r\n\r\n<app-alert></app-alert>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer *ngIf=\"loggedInUserId\" [loggedInUserId]=\"loggedInUserId\"></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(router, activatedRoute, title, authService, interactionsService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.authService = authService;
        this.interactionsService = interactionsService;
        // set title on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                // check user logged in
                var requireLogin = !_this.activatedRoute.snapshot.firstChild.data.skipAuth;
                if (requireLogin) {
                    // get logged in user
                    var loggedInUser = _this.authService.getLoggedInUser();
                    _this.loggedInUserId = loggedInUser ? loggedInUser._id : null;
                }
                else {
                    _this.loggedInUserId = null;
                }
                // set page title
                title.setTitle(_this.activatedRoute.snapshot.firstChild.data.title || 'webdev-hari-vikas-janarthanan');
                // clear dynamic footer links set by previous page
                _this.interactionsService.invoke(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* AppConstants */].EVENTS.clearFooterLink);
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service_client__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service_client__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstants; });
var AppConstants = (function () {
    function AppConstants() {
    }
    return AppConstants;
}());

AppConstants.EVENTS = {
    addFooterLink: 'addFooterLink',
    clearFooterLink: 'clearFooterLink',
    showAlert: 'showAlert',
    showLoader: 'showLoader'
};
AppConstants.ENDPOINT = {
    // baseUrl: '/api', // for prod
    baseUrl: 'http://localhost:3100/api' // for local
};
//# sourceMappingURL=app.constant.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_list_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_list_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_list_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_widget_widget_list_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_shared_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/shared/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_shared_loader_loader_component__ = __webpack_require__("../../../../../src/app/components/shared/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__directives_sortable_directive__ = __webpack_require__("../../../../../src/app/directives/sortable.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// #region App services







// #endregion
// #region App Components
// user components



// website components



// page components



// widget components

// widget edit components





// widget list components





// shared components




// #endregion
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
            __WEBPACK_IMPORTED_MODULE_15__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderEditComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeEditComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlEditComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_list_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_list_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_list_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_widget_widget_list_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_shared_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_shared_alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_shared_loader_loader_component__["a" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_38__directives_sortable_directive__["a" /* SortableDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_14__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_8__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_10__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_11__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service_client__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__services_interactions_service_client__["a" /* InteractionsService */]],
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */], data: { skipAuth: true } },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */], data: { title: 'Test', skipAuth: true } },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */], data: { title: 'Login', skipAuth: true } },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__["a" /* RegisterComponent */], data: { title: 'Register', skipAuth: true } },
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
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(APP_ROUTES);
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

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>\r\n    Angular 4 MEAN stack app\r\n  </h1>\r\n\r\n\r\n  <h3>\r\n    App works\r\n  </h3>\r\n\r\n\r\n  <h4>\r\n    <a href=\"test\">Test MongoDB</a>\r\n  </h4>\r\n\r\n  <h4>\r\n      <a [routerLink]=\"['/login']\">Assignment 3</a>\r\n  </h4>\r\n</div>\r\n\r\n"

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

module.exports = "<div class=\"row\">\r\n  <!-- Sidebar -->\r\n  <div class=\"col-4 hvj-landscape-only px-1\">\r\n    <app-page-list compactMode=\"true\"></app-page-list>\r\n  </div>\r\n  <!--/Sidebar-->\r\n\r\n  <div class=\"hvj-vertical-line col-4 hvj-landscape-only\"></div>\r\n  <!--Main content-->\r\n  <div class=\"col\">\r\n    <!--Top Nav-->\r\n    <nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal ml-auto hvj-landscape-col-8 px-2 px-sm-3\">\r\n      <ul class=\"navbar-nav mr-3 hvj-portrait-only\">\r\n        <li class=\"nav-item\">\r\n          <!-- Back button -->\r\n          <a class=\"nav-link px-0\"\r\n             [routerLink]=\"['../']\"\r\n             title=\"Pages\">\r\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n          </a>\r\n          <!-- /Back button -->\r\n        </li>\r\n      </ul>\r\n\r\n      <a class=\"navbar-brand\"\r\n         href=\"\">Edit Page</a>\r\n\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <!-- Action button -->\r\n          <a class=\"nav-link px-0\"\r\n             (click)=\"saveChanges()\"\r\n             title=\"Save Changes\">\r\n            <span class=\"fa fa-check fa-lg\"></span>\r\n          </a>\r\n          <!-- /Action button -->\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <!--/Top Nav-->\r\n\r\n    <!--content-->\r\n    <div *ngIf=\"page\">\r\n      <form #pageEditForm=\"ngForm\">\r\n        <!--Page Name-->\r\n        <div class=\"form-group\">\r\n          <label for=\"pageName\"\r\n                 class=\"font-weight-bold text-muted\">Page Name</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"pageName\"\r\n                 name=\"name\"\r\n                 placeholder=\"Name\"\r\n                 [(ngModel)]=\"page.name\"\r\n                 #nameField=\"ngModel\"\r\n                 [ngClass]=\"{'border-danger': nameField.invalid && nameField.touched}\"\r\n                 required>\r\n          <span *ngIf=\"nameField.invalid && nameField.touched\"\r\n                class=\"text-danger ml-2\">Name is required</span>\r\n        </div>\r\n        <!--/page Name-->\r\n\r\n        <!--Page Title-->\r\n        <div class=\"form-group\">\r\n          <label for=\"pageTitle\"\r\n                 class=\"font-weight-bold text-muted\">Page Title</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"pageTitle\"\r\n                 name=\"title\"\r\n                 placeholder=\"Title\"\r\n                 [(ngModel)]=\"page.title\"\r\n                 #titleField=\"ngModel\"\r\n                 [ngClass]=\"{'border-danger': titleField.invalid && titleField.touched}\">\r\n        </div>\r\n        <!--/page Title-->\r\n\r\n        <!--Page Description-->\r\n        <div class=\"form-group\">\r\n          <label for=\"pageDescription\"\r\n                 class=\"font-weight-bold text-muted\">Page Description</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"pageDescription\"\r\n                 name=\"description\"\r\n                 placeholder=\"Description\"\r\n                 [(ngModel)]=\"page.description\"\r\n                 #descriptionField=\"ngModel\"\r\n                 [ngClass]=\"{'border-danger': descriptionField.invalid && descriptionField.touched}\">\r\n        </div>\r\n        <!--/page Description-->\r\n\r\n        <!-- Form buttons -->\r\n        <div class=\"row no-gutters\">\r\n          <div class=\"col-12 col-sm-9 mr-1\">\r\n            <!-- Save button -->\r\n            <button class=\"btn btn-success btn-block mr-1 mb-2\"\r\n                    title=\"Save Changes\"\r\n                    (click)=\"saveChanges()\">\r\n              <i class=\"fa fa-check\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col\">\r\n            <!-- Delete button -->\r\n            <button class=\"btn btn-danger btn-block\"\r\n                    title=\"Delete Page\"\r\n                    (click)=\"showDeleteConfirmation = true\"\r\n                    [hidden]=\"showDeleteConfirmation\">\r\n              <i class=\"fa fa-trash\"></i>\r\n            </button>\r\n            <button class=\"btn btn-danger btn-block mt-0\"\r\n                    title=\"Delete Page\"\r\n                    [hidden]=\"!showDeleteConfirmation\"\r\n                    (click)=\"deletePage()\">sure?</button>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n    <!--/content-->\r\n  </div>\r\n  <!--/Main content-->\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
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





var PageEditComponent = (function () {
    function PageEditComponent(activatedRoute, router, pageService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageService = pageService;
        this.interactionsService = interactionsService;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showDeleteConfirmation = false;
        // get userid parameter route
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.pageService.findPageById(_this.pageId).
                subscribe(function (page) {
                _this.page = page;
            }, function (err) {
                console.error('Error retrieving page with id ' + _this.pageId, err);
                var errMessage = JSON.parse(err.error);
                _this.interactionsService.showAlert('Oopsie! ' + errMessage, 'danger', true);
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        });
    };
    /**
     * Save changes to page object
     */
    PageEditComponent.prototype.saveChanges = function () {
        var _this = this;
        if (this.pageEditForm.invalid) {
            // touch controls to highlight validation
            this.pageEditForm.controls.name.markAsTouched({ onlySelf: true });
        }
        else {
            this.pageService.updatePage(this.pageId, this.page)
                .subscribe(function (updatedPage) {
                _this.interactionsService.showAlert('Page saved successfully', 'success', true);
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
            }, function (err) {
                console.error('Error saving page.', err);
                var errMessage = JSON.parse(err.error);
                _this.interactionsService.showAlert('Oops! Page save failed. ' + errMessage);
            });
        }
    };
    /**
     * Delete current page
     */
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId)
            .subscribe(function (deletedPage) {
            _this.interactionsService.showAlert('Page deleted successfully', 'success', true);
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        }, function (err) {
            console.error('Error deleting page. ', err);
            var errMessage = JSON.parse(err.error);
            _this.interactionsService.showAlert('Uh ho! Page deletion unsuccessful. ' + errMessage, 'danger');
        });
    };
    return PageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('pageEditForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "pageEditForm", void 0);
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _e || Object])
], PageEditComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<!--Top Nav-->\r\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2 px-sm-3\"\r\n     [ngClass]=\"{'col-4 border border-left-0 border-top-0 border-bottom-0 border-secondary' : compactMode}\">\r\n  <ul class=\"navbar-nav mr-3\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link px-0\"\r\n         [routerLink]=\"[ compactMode ? '../' : '../../']\"\r\n         title=\"Back\">\r\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n\r\n  <a class=\"navbar-brand\"\r\n     href=\"\">Pages</a>\r\n\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link px-0\"\r\n         [routerLink]=\"['/user', userId,'website', websiteId, 'page' ,'new']\"\r\n         title=\"New Page\">\r\n        <span class=\"fa fa-plus fa-lg\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!--/Top Nav-->\r\n\r\n<div class=\"container hvj-website-list\">\r\n  <ul class=\"list-group list-group-flush\"\r\n      *ngIf=\"pages\">\r\n\r\n    <li class=\"list-group-item\"\r\n        *ngFor=\"let thisPage of pages\">\r\n      <a [routerLink]=\"['/user', userId,'website', thisPage.websiteId, 'page', thisPage._id, 'widget']\">\r\n        <span>{{thisPage.name}}</span>\r\n        <span class=\"small text-secondary font-italic d-sm-inline d-none ml-2\">{{thisPage.description}}</span>\r\n      </a>\r\n      <a [routerLink]=\"['/user', userId,'website', thisPage.websiteId, 'page', thisPage._id]\"\r\n         class=\"btn btn-xs float-right link-royal\">\r\n        <span class=\"fa fa-gear\"></span>\r\n      </a>\r\n    </li>\r\n\r\n    <!-- No websites message -->\r\n    <li class=\"list-group-item\"\r\n        *ngIf=\"pages.length == 0\">\r\n      <span>\r\n        <em>No Pages to show</em>\r\n      </span>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\"\r\n        *ngIf=\"pages.length == 0\">\r\n      <a class=\"btn btn-xs link-royal\"\r\n         [routerLink]=\"['new']\">\r\n        <i class=\"fa fa-plus fa-lg mr-2\"></i>\r\n        <em class=\"text-secondary\">Create new Page</em>\r\n      </a>\r\n    </li>\r\n\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
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





var PageListComponent = (function () {
    function PageListComponent(activatedRoute, router, pageService, websiteService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageService = pageService;
        this.websiteService = websiteService;
        this.interactionsService = interactionsService;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get userid parameter route
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            // check if website exists
            _this.websiteService.findWebsiteById(_this.websiteId)
                .subscribe(function (websiteExists) {
                if (websiteExists) {
                    _this.getPages();
                }
                else {
                    _this.interactionsService.showAlert('Website with Id ' + _this.websiteId + ' does not exist.');
                    _this.router.navigate(['../../'], { relativeTo: _this.activatedRoute });
                }
            });
        });
        this.getPages();
        // register for website change event
        this.interactionsService.registerCallback('pageUpdated', function () { _this.getPages(); });
    };
    /**
     * Get list of Pages for the current user
     */
    PageListComponent.prototype.getPages = function () {
        var _this = this;
        this.pageService.findPagesBywebsiteId(this.websiteId)
            .subscribe(function (pages) {
            _this.pages = pages;
        }, function (err) {
            var errMessage = JSON.parse(err.error);
            _this.interactionsService.showAlert('Oops! Can\'t load pages list. ' + errMessage);
            console.error('Error getting pages list. ', err);
        });
    };
    return PageListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], PageListComponent.prototype, "compactMode", void 0);
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _e || Object])
], PageListComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<div class=\"row\">\r\n  <!-- Sidebar -->\r\n  <div class=\"col-4 hvj-landscape-only px-1\">\r\n    <app-page-list compactMode=\"true\"></app-page-list>\r\n  </div>\r\n  <!--/Sidebar-->\r\n\r\n  <div class=\"hvj-vertical-line col-4 hvj-landscape-only\"></div>\r\n  <!--Main content-->\r\n  <div class=\"col\">\r\n    <!--Top Nav-->\r\n    <nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal ml-auto hvj-landscape-col-8 px-2 px-sm-3\">\r\n      <ul class=\"navbar-nav mr-3 hvj-portrait-only\">\r\n        <li class=\"nav-item\">\r\n          <!-- Back button -->\r\n          <a class=\"nav-link px-0\"\r\n             [routerLink]=\"['/..']\"\r\n             title=\"Pages\">\r\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n          </a>\r\n          <!-- / Back button -->\r\n        </li>\r\n      </ul>\r\n\r\n      <a class=\"navbar-brand\"\r\n         href=\"\">New Page</a>\r\n\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <!-- Action button -->\r\n          <a class=\"nav-link px-0\"\r\n             (click)=\"saveChanges()\"\r\n             title=\"Save Changes\">\r\n            <span class=\"fa fa-check fa-lg\"></span>\r\n          </a>\r\n          <!-- /Action button -->\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <!--/Top Nav-->\r\n\r\n    <!--content-->\r\n    <div>\r\n      <form #pageNewForm=\"ngForm\">\r\n        <!--Page Name-->\r\n        <div class=\"form-group\">\r\n          <label for=\"pageName\"\r\n                 class=\"font-weight-bold text-muted\">Page Name</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"pageName\"\r\n                 name=\"name\"\r\n                 placeholder=\"Name\"\r\n                 [(ngModel)]=\"page.name\"\r\n                 #nameField=\"ngModel\"\r\n                 [ngClass]=\"{'border-danger': nameField.invalid && nameField.touched}\"\r\n                 required>\r\n          <span *ngIf=\"nameField.invalid && nameField.touched\"\r\n                class=\"text-danger ml-2\">Name is required</span>\r\n        </div>\r\n        <!--/page Name-->\r\n\r\n        <!--Page Title-->\r\n        <div class=\"form-group\">\r\n          <label for=\"pageTitle\"\r\n                 class=\"font-weight-bold text-muted\">Page Title</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"pageTitle\"\r\n                 name=\"title\"\r\n                 placeholder=\"Title\"\r\n                 [(ngModel)]=\"page.title\"\r\n                 #titleField=\"ngModel\"\r\n                 [ngClass]=\"{'border-danger': titleField.invalid && titleField.touched}\">\r\n        </div>\r\n        <!--/page Title-->\r\n\r\n        <!--Page Description-->\r\n        <div class=\"form-group\">\r\n          <label for=\"pageDescription\"\r\n                 class=\"font-weight-bold text-muted\">Page Description</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"pageDescription\"\r\n                 name=\"description\"\r\n                 placeholder=\"Description\"\r\n                 [(ngModel)]=\"page.descrption\"\r\n                 #descriptionField=\"ngModel\"\r\n                 [ngClass]=\"{'border-danger': descriptionField.invalid && descriptionField.touched}\">\r\n        </div>\r\n        <!--/page Description-->\r\n\r\n        <!-- Form buttons -->\r\n        <div class=\"row no-gutters\">\r\n          <div class=\"col-12 col-sm-9 mr-1\">\r\n            <!-- Save button -->\r\n            <button class=\"btn btn-success btn-block mr-1 mb-2\"\r\n                    title=\"Create Page\"\r\n                    (click)=\"saveChanges()\">\r\n              <i class=\"fa fa-check\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col\">\r\n            <!-- Cancel button -->\r\n            <a class=\"btn btn-danger btn-block\"\r\n               title=\"Cancel\"\r\n               [routerLink]=\"['../']\">\r\n              <i class=\"fa fa-times\"></i>\r\n            </a>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n    <!--/content-->\r\n  </div>\r\n  <!--/Main content-->\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
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






var PageNewComponent = (function () {
    function PageNewComponent(activatedRoute, router, pageService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageService = pageService;
        this.interactionsService = interactionsService;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showDeleteConfirmation = false;
        // get userid parameter route
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.page = new __WEBPACK_IMPORTED_MODULE_3__model_model__["a" /* Page */]();
    };
    /**
     * Save changes to page object
     */
    PageNewComponent.prototype.saveChanges = function () {
        var _this = this;
        if (this.pageNewForm.invalid) {
            // touch controls to highlight validation
            this.pageNewForm.controls.name.markAsTouched({ onlySelf: true });
        }
        else {
            this.pageService.createPage(this.websiteId, this.page)
                .subscribe(function (createdPage) {
                _this.interactionsService.showAlert('Page created successfully', 'success', true);
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
            }, function (err) {
                console.error('Error creating new page', err);
                var errMessage = JSON.parse(err.error);
                _this.interactionsService.showAlert('oooh! Snap! Page creation failed', 'danger');
            });
        }
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('pageNewForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "pageNewForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _e || Object])
], PageNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hvj-app-alert {\r\n    position: fixed;\r\n    z-index: 200;\r\n    left:20%;\r\n    right:20%;    \r\n}\r\n\r\n.hvj-app-alert .alert {\r\n    box-shadow: 0 0 24px -7px black;\r\n}\r\n\r\n.hvj-app-alert .alert .close {\r\n    margin-top:-3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hvj-app-alert\">\n  \n    <div class=\"alert fade show\"\n         [hidden]=\"!alertVisible\"\n         [ngClass]=\"'alert-' + (alertType ? alertType : 'danger')\"\n         role=\"alert\">\n      <button type=\"button\"\n              class=\"close\"\n              (click)=\"alertVisible = false\">\n        <small>\n          <i class=\"fa fa-times\"\n             aria-hidden=\"true\"></i>\n        </small>\n      </button>\n      {{alertText}}\n    </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shared/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(interactionsService) {
        this.interactionsService = interactionsService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertVisible = false;
        this.interactionsService.registerCallback(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].EVENTS.showAlert, function (d) { _this.showAlert(d); });
    };
    /**
     * show alert on page
     * @param data alert data
     */
    AlertComponent.prototype.showAlert = function (data) {
        var _this = this;
        if (data.text) {
            this.alertText = data.text;
            this.alertType = data.type;
            this.alertVisible = true;
            if (data.autoClose) {
                setTimeout(function () {
                    _this.alertVisible = false;
                }, 3000);
            }
        }
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/components/shared/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/alert/alert.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\r\n<nav *ngIf=\"loggedInUserId\"\r\n     class=\"navbar navbar-expand bg-faded border-faded fixed-bottom hvj-footer px-3\">\r\n\r\n  <!-- Dynamic links -->\r\n  <ul class=\"navbar-nav\">\r\n    <li class=\"nav-item mx-2\"\r\n        *ngFor=\"let l of links\">\r\n      <a class=\"nav-link link-royal\"\r\n         [attr.href]=\"l.link\"\r\n         (click)=\"linkClicked(l)\">\r\n        <i *ngIf=\"l.icon\"\r\n           class=\"fa\"\r\n           [ngClass]=\"l.icon\"></i>\r\n        {{l.text}}\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <!-- /Dynamic links -->\r\n\r\n  <!-- Static links -->\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link link-royal\"\r\n         [routerLink]=\"['/user', loggedInUserId]\"\r\n         title=\"My Profile\">\r\n        <span class=\"fa fa-user fa-lg\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <!-- /Static links -->\r\n\r\n</nav>\r\n<!-- /Footer -->"

/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FooterComponent = (function () {
    function FooterComponent(router, authService, interactionsService) {
        this.router = router;
        this.authService = authService;
        this.interactionsService = interactionsService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.links = [];
        // register callback for adding links to footer dynamically
        this.interactionsService.registerCallback(__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* AppConstants */].EVENTS.addFooterLink, function (link) { _this.addLink(link); });
        this.interactionsService.registerCallback(__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* AppConstants */].EVENTS.clearFooterLink, function (link) { _this.clearLinks(); });
    };
    /**
     * Add a link to footer
     * @param link link object to add
     */
    FooterComponent.prototype.addLink = function (link) {
        if (link.icon || link.text) {
            this.links.push(link);
        }
    };
    /**
     * Clear all links
     */
    FooterComponent.prototype.clearLinks = function () {
        this.links = [];
    };
    /**
     * On link click
     * @param link link object associated with the clicke link
     */
    FooterComponent.prototype.linkClicked = function (link) {
        if (link.onClick) {
            link.onClick();
        }
        else if (link.routerLink) {
            this.router.navigate(link.routerLink);
        }
    };
    return FooterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FooterComponent.prototype, "loggedInUserId", void 0);
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_client__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_client__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _c || Object])
], FooterComponent);

var _a, _b, _c;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hvj-loading .hvj-loading-mask {\r\n    opacity: 0.6;\r\n    z-index: 1000;\r\n}\r\n\r\n.hvj-loading .hvj-img-loader {\r\n    position: fixed;\r\n    z-index: 1001;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hvj-loading\"\n     [hidden]=\"!show\">\n  <div class=\"modal-backdrop bg-light hvj-loading-mask\">\n  </div>\n  <p class=\"mt-5 text-center w-100 hvj-img-loader\">\n    <img class=\"mt-5\"\n         src=\"../../../../assets/loader.gif\">\n  </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shared/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoaderComponent = (function () {
    function LoaderComponent(interactionsService) {
        this.interactionsService = interactionsService;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.show = false;
        this.interactionsService.registerCallback(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].EVENTS.showLoader, function (show) { _this.showLoader(show); });
    };
    /**
     * Show / Hide loading screen
     * @param show true to show; false to hide
     */
    LoaderComponent.prototype.showLoader = function (show) {
        this.show = show;
    };
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-loader',
        template: __webpack_require__("../../../../../src/app/components/shared/loader/loader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/loader/loader.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _a || Object])
], LoaderComponent);

var _a;
//# sourceMappingURL=loader.component.js.map

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

module.exports = "\r\n<div class=\"container\">\r\n\r\n\r\n<div class=\"btn btn-royal\" (click)=\"testIt()\">Test</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
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
    function TestComponent(_testService, interactionsService) {
        this._testService = _testService;
        this.interactionsService = interactionsService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent.prototype.testIt = function () {
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _b || Object])
], TestComponent);

var _a, _b;
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

module.exports = "<div class=\"container\">\r\n\r\n  <p>\r\n    <span class=\"display-3\">Login</span>\r\n  </p>\r\n  <hr>\r\n  <br>\r\n  <!--form-->\r\n  <form class=\"form\"\r\n        #loginForm=\"ngForm\"\r\n        (ngSubmit)=\"login()\"\r\n        novalidate>\r\n    <div class=\"form-group\">\r\n      <input placeholder=\"User Name\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"username\"\r\n             #usernameField=\"ngModel\"\r\n             [(ngModel)]=\"username\"\r\n             [ngClass]=\"{'border-danger': !usernameField.valid && usernameField.touched}\"\r\n             required />\r\n      <span class=\"small text-danger ml-2\"\r\n            *ngIf=\"usernameField.invalid && usernameField.touched\">Username is required</span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input placeholder=\"Password\"\r\n             type=\"password\"\r\n             class=\"form-control\"\r\n             name=\"password\"\r\n             #passwordField=\"ngModel\"\r\n             [(ngModel)]=\"password\"\r\n             [ngClass]=\"{'border-danger': !passwordField.valid && passwordField.touched}\"\r\n             required/>\r\n      <span class=\"small text-danger ml-2\"\r\n            *ngIf=\"passwordField.invalid && passwordField.touched\">Password is required</span>\r\n    </div>\r\n    <div *ngIf=\"loginError\">\r\n      <div class=\"alert alert-danger text-center\">{{loginError}}</div>\r\n    </div>\r\n    <!-- form actions -->\r\n    <div>\r\n      <button type=\"submit\"\r\n              class=\"btn btn-royal btn-block\"\r\n              [disabled]=\"!loginForm.valid\">Login</button>\r\n      <a class=\"btn btn-secondary btn-block\"\r\n         [routerLink]=\"['/register']\">Register</a>\r\n    </div>\r\n    <!-- /form actions -->\r\n  </form>\r\n  <!--/form-->\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
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






var LoginComponent = (function () {
    function LoginComponent(router, userService, authService, interactionsService) {
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.interactionsService = interactionsService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.username, this.password)
            .subscribe(function (user) {
            _this.router.navigate(['/user', user._id]);
        }, function (err) {
            var errMessage = JSON.parse(err.error);
            _this.loginError = 'Error. ' + errMessage;
            console.error('Error occured during login.', err);
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('loginForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<!--Top Nav-->\r\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2 px-sm-3\">\r\n  <span class=\"navbar-brand\">Profile</span>\r\n\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item\">\r\n      <!-- Action button -->\r\n      <a class=\"nav-link px-0\"\r\n         (click)=\"saveProfile()\"\r\n         title=\"Save Changes\">\r\n        <span class=\"fa fa-check fa-lg\"></span>\r\n      </a>\r\n      <!-- /Action button -->\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!--/Top Nav-->\r\n\r\n<div class=\"container\">\r\n  <form #profileForm=\"ngForm\"\r\n        (ngSubmit)=\"saveProfile()\"\r\n        *ngIf=\"user\">\r\n    <!--User Name-->\r\n    <div class=\"form-group\">\r\n      <label for=\"username\"\r\n             class=\"font-weight-bold text-muted\">Username</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"username\"\r\n             placeholder=\"walice\"\r\n             name=\"username\"\r\n             [(ngModel)]=\"user.username\"\r\n             #usernameField=\"ngModel\"\r\n             [ngClass]=\"{'border-danger': profileErrors.username || (!usernameField.valid && usernameField.touched)}\"\r\n             required>\r\n      <span *ngIf=\"usernameField.invalid && usernameField.touched\"\r\n            class=\"text-danger ml-2\">Username is required</span>\r\n      <span *ngIf=\"profileErrors.username\"\r\n            class=\"text-danger ml-2\">{{profileErrors.username}}</span>\r\n    </div>\r\n    <!--/User Name-->\r\n\r\n    <!--Email-->\r\n    <div class=\"form-group\">\r\n      <label for=\"email\"\r\n             class=\"font-weight-bold text-muted\">Email</label>\r\n      <input type=\"email\"\r\n             class=\"form-control\"\r\n             id=\"email\"\r\n             name=\"email\"\r\n             placeholder=\"alice.wonderland@unicorn.com\"\r\n             [(ngModel)]=\"user.email\"\r\n             #emailField=\"ngModel\"\r\n             [ngClass]=\"{'border-danger': profileErrors.email}\">\r\n      <span *ngIf=\"profileErrors.email\"\r\n            class=\"text-danger ml-2\"></span>\r\n    </div>\r\n    <!--/Email-->\r\n\r\n    <!--First Name-->\r\n    <div class=\"form-group\">\r\n      <label for=\"first-name\"\r\n             class=\"font-weight-bold text-muted\">First Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"first-name\"\r\n             name=\"firstName\"\r\n             placeholder=\"Alice\"\r\n             [(ngModel)]=\"user.firstName\"\r\n             #firstNameField=\"ngModel\"\r\n             [ngClass]=\"{'border-danger': profileErrors.firstName || (!firstNameField.valid && firstNameField.touched)}\">\r\n      <span *ngIf=\"firstNameField.invalid && firstNameField.touched\"\r\n            class=\"text-danger ml-2\">First Name is required</span>\r\n      <span *ngIf=\"profileErrors.firstName\"\r\n            class=\"text-danger ml-2\">{{profileErrors.firstName}}</span>\r\n    </div>\r\n    <!--First Name-->\r\n\r\n    <!--Last Name-->\r\n    <div class=\"form-group\">\r\n      <label for=\"last-name\"\r\n             class=\"font-weight-bold text-muted\">Last Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"last-name\"\r\n             name=\"lastName\"\r\n             placeholder=\"Wonderland\"\r\n             [(ngModel)]=\"user.lastName\"\r\n             #lastNameField=\"ngModel\"\r\n             [ngClass]=\"{'border-danger': profileErrors.lastName || (!lastNameField.valid && lastNameField.touched)}\">\r\n      <span *ngIf=\"lastNameField.invalid && lastNameField.touched\"\r\n            class=\"text-danger ml-2\">Last Name is required</span>\r\n      <span *ngIf=\"profileErrors.lastName\"\r\n            class=\"text-danger ml-2\">{{profileErrors.lastName}}</span>\r\n    </div>\r\n    <!--/Last Name-->\r\n\r\n    <!--Action Buttons-->\r\n    <div class=\"form-group\">\r\n      <a class=\"btn btn-royal btn-block\"\r\n         [routerLink]=\"['website']\">Websites</a>\r\n      <button type=\"submit\"\r\n              class=\"btn btn-success btn-block d-none\">Save Changes</button>\r\n      <button class=\"btn btn-danger btn-block\"\r\n              (click)=\"logout()\">Logout</button>\r\n    </div>\r\n    <!--/Action Buttons-->\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
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






var ProfileComponent = (function () {
    function ProfileComponent(activatedRoute, router, userService, authService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.interactionsService = interactionsService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileErrors = {
            hasError: false
        };
        // get userid parameter route
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            if (user) {
                _this.user = user;
            }
            else {
                _this.interactionsService.showAlert('Login required', 'danger', true);
                _this.router.navigate(['/login']);
            }
        }, function (err) {
            _this.interactionsService.showAlert('Error retrieving user with Id ' + _this.userId);
            console.error('Error retrieving user with Id ' + _this.userId, err);
        });
    };
    /**
     * Logout user
     */
    ProfileComponent.prototype.logout = function () {
        this.authService.logout();
    };
    /** Save user profile details */
    ProfileComponent.prototype.saveProfile = function () {
        var _this = this;
        if (!this.profileForm.valid || this.profileForm.pristine) {
            return;
        }
        //#region: validate form
        // reset
        this.profileErrors = {
            hasError: false
        };
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
        // username validation
        if (this.testInvalidString(this.user.username, true)) {
            this.profileErrors.username = 'Invalid username. Only alphabets and . allowed';
            this.profileErrors.hasError = true;
        }
        //#endregion
        if (!this.profileErrors.hasError) {
            this.userService.updateUser(this.userId, this.user)
                .subscribe(function (updatedUser) {
                if (updatedUser) {
                    _this.user = updatedUser;
                    _this.interactionsService.showAlert('Profile updated successfully', 'success', true);
                }
                else {
                    _this.interactionsService.showAlert('Profile update failed');
                }
            }, function (err) {
                var errMessage = JSON.parse(err.error);
                _this.interactionsService.showAlert('Profile update failed. ' + errMessage);
                console.error('Profile update failed', err);
            });
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _f || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "<div class=\"container\">\r\n      <p>\r\n            <span class=\"display-3\">Register</span>\r\n      </p>\r\n      <hr>\r\n      <br>\r\n      <!--form-->\r\n      <form class=\"form\"\r\n            (ngSubmit)=\"register()\"\r\n            #registerForm=\"ngForm\">\r\n            <!-- User Name -->\r\n            <div class=\"form-group\">\r\n                  <input placeholder=\"User Name\"\r\n                         type=\"text\"\r\n                         class=\"form-control\"\r\n                         name=\"usernameField\"\r\n                         [(ngModel)]=\"username\"\r\n                         #usernameField=\"ngModel\"\r\n                         [ngClass]=\"{'border-danger': registrationErrors.username || (!usernameField.valid && usernameField.touched)}\"\r\n                         required />\r\n                  <span *ngIf=\"usernameField.invalid && usernameField.touched\"\r\n                        class=\"text-danger ml-2\">Username is required</span>\r\n                  <span *ngIf=\"registrationErrors.username\"\r\n                        class=\"text-danger ml-2\">{{registrationErrors.username}}</span>\r\n            </div>\r\n\r\n            <!-- Password -->\r\n            <div class=\"form-group\">\r\n                  <input placeholder=\"Password\"\r\n                         type=\"password\"\r\n                         class=\"form-control\"\r\n                         name=\"passwordField\"\r\n                         [(ngModel)]=\"password\"\r\n                         #passwordField=\"ngModel\"\r\n                         [ngClass]=\"{'border-danger': (!passwordField.valid && passwordField.touched)}\"\r\n                         required />\r\n                  <span *ngIf=\"passwordField.invalid && passwordField.touched\"\r\n                        class=\"text-danger ml-2\">Password is required</span>\r\n            </div>\r\n\r\n            <!-- Verify Password -->\r\n            <div class=\"form-group\">\r\n                  <input placeholder=\"Verify Password\"\r\n                         type=\"password\"\r\n                         class=\"form-control\"\r\n                         name=\"verifyPasswordField\"\r\n                         [(ngModel)]=\"verifyPassword\"\r\n                         #verifyPasswordField=\"ngModel\"\r\n                         [ngClass]=\"{'border-danger': verifyPassword !== password && verifyPasswordField.touched}\"\r\n                         required />\r\n                  <span *ngIf=\"verifyPasswordField.invalid && verifyPasswordField.touched\"\r\n                        class=\"text-danger ml-2\">Verify Password is required</span>\r\n                  <span *ngIf=\"verifyPassword && verifyPassword !== password && verifyPasswordField.touched\"\r\n                        class=\"text-danger ml-2\">Passwords do not match</span>\r\n            </div>\r\n\r\n            <!-- form actions -->\r\n            <div>\r\n                  <button type=\"submit\"\r\n                          class=\"btn btn-royal btn-block\"\r\n                          [disabled]=\"registerForm.invalid || verifyPassword !== password\">Register</button>\r\n                  <a class=\"btn btn-danger btn-block\"\r\n                     [routerLink]=\"['/login']\">Cancel</a>\r\n            </div>\r\n            <!-- /form actions -->\r\n      </form>\r\n      <!--/form-->\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__ = __webpack_require__("../../../../../src/app/services/auth.service.client.ts");
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






var RegisterComponent = (function () {
    function RegisterComponent(userService, router, authService, interactionsService) {
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.interactionsService = interactionsService;
        this.registrationErrors = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var newUser = new __WEBPACK_IMPORTED_MODULE_2__model_model__["b" /* User */]();
        newUser.username = this.username;
        newUser.password = this.password;
        // create new user
        this.userService.createUser(newUser)
            .subscribe(function (registeredUser) {
            // automatically login new user
            _this.authService.login(registeredUser.username, registeredUser.password)
                .subscribe(function (user) {
                if (user) {
                    _this.router.navigate(['/user', user._id]);
                }
                else {
                    _this.interactionsService.showAlert('Login post registration unsuccessfuly');
                    console.error('Login post registration unsuccessfuly', user);
                }
            }, function (err) {
                _this.interactionsService.showAlert('Error logging in post registration');
                console.error('Error logging in post registration', err);
            });
        }, function (err) {
            _this.interactionsService.showAlert('Error registering user. Please try again.');
            console.error('Error registering user', err);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service_client__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
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

module.exports = "<div class=\"row\">\r\n  <!-- Sidebar -->\r\n  <div class=\"col-4 hvj-landscape-only px-1\">\r\n    <app-website-list compactMode=\"true\"></app-website-list>\r\n  </div>\r\n  <!--/Sidebar-->\r\n\r\n  <div class=\"hvj-vertical-line col-4 hvj-landscape-only\"></div>\r\n  <!--Main content-->\r\n  <div class=\"col\">\r\n    <!--Top Nav-->\r\n    <nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal ml-auto hvj-landscape-col-8 px-2 px-sm-3\">\r\n      <ul class=\"navbar-nav mr-3 hvj-portrait-only\">\r\n        <li class=\"nav-item\">\r\n          <!-- Back button -->\r\n          <a class=\"nav-link px-0\"\r\n             [routerLink]=\"['../']\"\r\n             title=\"Websites\">\r\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n          </a>\r\n          <!-- /Back button -->\r\n        </li>\r\n      </ul>\r\n\r\n      <span class=\"navbar-brand\">Edit Website</span>\r\n\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <!-- Action button -->\r\n          <a class=\"nav-link px-0\"\r\n             (click)=\"saveChanges()\"\r\n             title=\"Save Changes\">\r\n            <span class=\"fa fa-check fa-lg\"></span>\r\n          </a>\r\n          <!-- /Action button -->\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <!--/Top Nav-->\r\n\r\n    <!--content-->\r\n    <div class=\"hvj-website-edit\">\r\n      <form #websiteEditForm=\"ngForm\"\r\n            *ngIf=\"website\">\r\n        <!--Website Name-->\r\n        <div class=\"form-group\">\r\n          <label for=\"websiteName\"\r\n                 class=\"font-weight-bold text-muted\">Website Name</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"websiteName\"\r\n                 name=\"name\"\r\n                 placeholder=\"Name\"\r\n                 [(ngModel)]=\"website.name\"\r\n                 #nameField=\"ngModel\"\r\n                 [ngClass]=\"{'border-danger': nameField.invalid && nameField.touched}\"\r\n                 required>\r\n          <span *ngIf=\"nameField.invalid && nameField.touched\"\r\n                class=\"text-danger ml-2\">Name is required</span>\r\n        </div>\r\n        <!--/Website Name-->\r\n\r\n        <!--Website Description-->\r\n        <div class=\"form-group\">\r\n          <label for=\"websiteDescription\"\r\n                 class=\"font-weight-bold text-muted\">Website Name</label>\r\n          <textarea class=\"form-control\"\r\n                    id=\"websiteDescription\"\r\n                    name=\"description\"\r\n                    [(ngModel)]=\"website.description\"\r\n                    rows=\"6\">{{website.description}}\r\n          </textarea>\r\n        </div>\r\n        <!--/Website Description-->\r\n\r\n        <!-- Form buttons -->\r\n        <div class=\"row no-gutters\">\r\n          <div class=\"col-12 col-sm-9 mr-1\">\r\n            <!-- Save button -->\r\n            <button class=\"btn btn-success btn-block mr-1 mb-2\"\r\n                    title=\"Save Changes\"\r\n                    (click)=\"saveChanges()\">\r\n              <i class=\"fa fa-check\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col\">\r\n            <!-- Delete button -->\r\n            <button class=\"btn btn-danger btn-block\"\r\n                    title=\"Delete website\"\r\n                    (click)=\"showDeleteConfirmation = true\"\r\n                    [hidden]=\"showDeleteConfirmation\">\r\n              <i class=\"fa fa-trash\"></i>\r\n            </button>\r\n            <button class=\"btn btn-danger btn-block mt-0\"\r\n                    title=\"Delete Website\"\r\n                    [hidden]=\"!showDeleteConfirmation\"\r\n                    (click)=\"deleteWebsite()\">sure?</button>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n    <!--/content-->\r\n  </div>\r\n  <!--/Main content-->\r\n</div>"

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
            _this.websiteService.findWebsiteById(_this.websiteId)
                .subscribe(function (website) {
                if (website) {
                    _this.website = website;
                }
                else {
                    console.log('Website with Id ' + _this.websiteId + ' does not exist');
                    _this.interactionsService.showAlert('Website with Id ' + _this.websiteId + ' does not exist', 'danger', true);
                    _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                }
            }, function (err) {
                var errMessage = JSON.parse(err.error);
                _this.interactionsService.showAlert('Error getting Website with Id ' + _this.websiteId + '. ' + errMessage);
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        });
    };
    /**
     * Save changes to website object
     */
    WebsiteEditComponent.prototype.saveChanges = function () {
        var _this = this;
        if (this.websiteEditForm.invalid) {
            // touch controls to highlight validation
            this.websiteEditForm.controls.name.markAsTouched({ onlySelf: true });
        }
        else {
            this.websiteService.updateWebsite(this.websiteId, this.website)
                .subscribe(function (updatedWebsite) {
                if (updatedWebsite) {
                    _this.interactionsService.showAlert('Website saved successfully', 'success', true);
                    _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                }
                else {
                    console.log('error saving website');
                    _this.interactionsService.showAlert('Oh! Snap! Website update failed. Try again', 'danger');
                }
            }, function (err) {
                var errMessage = JSON.parse(err.error);
                _this.interactionsService.showAlert('Error saving changes. ' + errMessage);
                console.error('Error saving website.', err);
            });
        }
    };
    /**
     * Delete current website
     */
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId)
            .subscribe(function (deletedWebsite) {
            if (deletedWebsite) {
                _this.interactionsService.showAlert('Website deleted successfully', 'success', true);
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            }
            else {
                _this.interactionsService.showAlert('Website deletion failed. Refresh page and try again', 'danger');
            }
        }, function (err) {
            var errMessage = JSON.parse(err.error);
            _this.interactionsService.showAlert('Website deletion failed. ' + errMessage, 'danger');
            console.error('Website deletion failed. ', err);
        });
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _e || Object])
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

module.exports = "<!--Top Nav-->\r\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2 px-sm-3\"\r\n     [ngClass]=\"{'col-4 border border-left-0 border-top-0 border-bottom-0 border-secondary' : compactMode}\">\r\n  <ul class=\"navbar-nav mr-3\">\r\n    <li class=\"nav-item\">\r\n      <!-- Back button -->\r\n      <a class=\"nav-link px-0\"\r\n         [routerLink]=\"[ '../']\"\r\n         title=\"Back\">\r\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n      </a>\r\n      <!-- /Back button -->\r\n    </li>\r\n  </ul>\r\n\r\n  <span class=\"navbar-brand\">Websites</span>\r\n\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item\">\r\n      <!-- Action button -->\r\n      <a class=\"nav-link px-0\"\r\n         [routerLink]=\"['/user', userId, 'website', 'new']\"\r\n         title=\"New Website\">\r\n        <span class=\"fa fa-plus fa-lg\"></span>\r\n      </a>\r\n      <!-- /Action button -->\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!--/Top Nav-->\r\n\r\n<div class=\"container hvj-website-list\">\r\n  <ul class=\"list-group list-group-flush\"\r\n      *ngIf=\"websites\">\r\n\r\n    <li class=\"list-group-item\"\r\n        *ngFor=\"let thisWebsite of websites\">\r\n      <a [routerLink]=\"['/user', userId, 'website', thisWebsite._id, 'page']\">\r\n        <span>{{thisWebsite.name}}</span>\r\n        <span class=\"small text-secondary font-italic d-sm-inline d-none ml-2\">{{thisWebsite.description}}</span>\r\n      </a>\r\n      <a [routerLink]=\"['/user', userId, 'website', thisWebsite._id]\"\r\n         class=\"btn btn-xs float-right link-royal\">\r\n        <span class=\"fa fa-gear\"></span>\r\n      </a>\r\n    </li>\r\n\r\n    <!-- No websites message -->\r\n    <li class=\"list-group-item\"\r\n        *ngIf=\"websites.length == 0\">\r\n      <span>\r\n        <em>No websites to show</em>\r\n      </span>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\"\r\n        *ngIf=\"websites.length == 0\">\r\n      <a class=\"btn btn-xs link-royal\"\r\n         [routerLink]=\"['new']\">\r\n        <i class=\"fa fa-plus fa-lg mr-2\"></i>\r\n        <em class=\"text-secondary\">Create new website</em>\r\n      </a>\r\n    </li>\r\n\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
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





var WebsiteListComponent = (function () {
    function WebsiteListComponent(activatedRoute, router, websiteService, userService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websiteService = websiteService;
        this.userService = userService;
        this.interactionsService = interactionsService;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get userid parameter route
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            // check if user exists
            _this.userService.findUserById(_this.userId)
                .subscribe(function (userExists) {
                if (userExists) {
                    _this.getWebsites();
                }
                else {
                    _this.interactionsService.showAlert('User with Id ' + _this.userId + ' does not exist. Please login again');
                    _this.router.navigate(['/login']);
                }
            });
        });
        // register for website change event
        this.interactionsService.registerCallback('websiteUpdated', function () { _this.getWebsites(); }, true);
    };
    /**
     * Get list of websites for the current user
     */
    WebsiteListComponent.prototype.getWebsites = function () {
        var _this = this;
        this.websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        }, function (err) {
            console.error('Error getting website list. ', err);
            var errMessage = JSON.parse(err.error);
            _this.interactionsService.showAlert('Oops! Can\'t load website list. ' + errMessage);
        });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _e || Object])
], WebsiteListComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<div class=\"row\">\r\n  <!-- Sidebar -->\r\n  <div class=\"col-4 hvj-landscape-only px-1\">\r\n    <app-website-list compactMode=\"true\"></app-website-list>\r\n  </div>\r\n  <!--/Sidebar-->\r\n\r\n  <div class=\"hvj-vertical-line col-4 hvj-landscape-only\"></div>\r\n  <!--Main content-->\r\n  <div class=\"col\">\r\n    <!--Top Nav-->\r\n    <nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal ml-auto hvj-landscape-col-8 px-2 px-sm-3\">\r\n      <ul class=\"navbar-nav mr-3 hvj-portrait-only\">\r\n        <li class=\"nav-item\">\r\n          <!-- Back button -->\r\n          <a class=\"nav-link px-0\"\r\n             [routerLink]=\"['../']\"\r\n             title=\"Websites\">\r\n            <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n          </a>\r\n          <!-- /Back button -->\r\n        </li>\r\n      </ul>\r\n\r\n      <span class=\"navbar-brand\">>New Website</span>\r\n\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <!-- Action button -->\r\n          <a class=\"nav-link px-0\"\r\n             (click)=\"saveChanges()\"\r\n             title=\"Create Website\">\r\n            <span class=\"fa fa-check fa-lg\"></span>\r\n          </a>\r\n          <!-- /Action button -->\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <!--/Top Nav-->\r\n\r\n    <!--content-->\r\n    <div class=\"hvj-website-new\">\r\n      <form #websiteNewForm=\"ngForm\">\r\n        <!--Website Name-->\r\n        <div class=\"form-group\">\r\n          <label for=\"websiteName\"\r\n                 class=\"font-weight-bold text-muted\">Website Name</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"websiteName\"\r\n                 name=\"name\"\r\n                 placeholder=\"Name\"\r\n                 [(ngModel)]=\"website.name\"\r\n                 #nameField=\"ngModel\"\r\n                 [ngClass]=\"{'border-danger': nameField.invalid && nameField.touched}\"\r\n                 required>\r\n          <span *ngIf=\"nameField.invalid && nameField.touched\"\r\n                class=\"text-danger ml-2\">Name is required</span>\r\n        </div>\r\n        <!--/Website Name-->\r\n\r\n        <!--Website Description-->\r\n        <div class=\"form-group\">\r\n          <label for=\"websiteDescription\"\r\n                 class=\"font-weight-bold text-muted\">Website Description</label>\r\n          <textarea class=\"form-control\"\r\n                    id=\"websiteDescription\"\r\n                    name=\"description\"\r\n                    [(ngModel)]=\"website.description\"\r\n                    rows=\"6\">{{website.description}}\r\n            </textarea>\r\n        </div>\r\n        <!--/Website Description-->\r\n\r\n        <!-- Form buttons -->\r\n        <div class=\"row no-gutters\">\r\n          <div class=\"col-12 col-sm-9 mr-1\">\r\n            <!-- Save button -->\r\n            <button class=\"btn btn-success btn-block mr-1 mb-2\"\r\n                    title=\"Create Website\"\r\n                    (click)=\"saveChanges()\">\r\n              <i class=\"fa fa-check\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col\">\r\n            <!-- Delete button -->\r\n            <a class=\"btn btn-block btn-danger\"\r\n               title=\"Cancel\"\r\n               [routerLink]=\"['../']\">\r\n              <i class=\"fa fa-times\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n    <!--/content-->\r\n  </div>\r\n  <!--/Main content-->\r\n</div>\r\n\r\n\r\n"

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
        this.website = new __WEBPACK_IMPORTED_MODULE_3__model_model__["c" /* Website */]();
        this.website.developerId = this.userId;
    };
    /**
     * create new page object
     */
    WebsiteNewComponent.prototype.saveChanges = function () {
        var _this = this;
        if (this.websiteNewForm.invalid) {
            // touch controls to highlight validation
            this.websiteNewForm.controls.name.markAsTouched({ onlySelf: true });
        }
        else {
            this.websiteService.createWebsite(this.userId, this.website)
                .subscribe(function (newWebsite) {
                _this.website = newWebsite;
                if (_this.website) {
                    _this.interactionsService.showAlert('Website created successfully', 'success', true);
                    _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                }
                else {
                    _this.interactionsService.showAlert('Uh ho! Website creation failed', 'danger');
                }
            }, function (err) {
                var errMessage = JSON.parse(err.error);
                _this.interactionsService.showAlert('Uh ho! Website creation failed. ' + errMessage, 'danger');
                console.error('Website creation failed. ', err);
            });
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _e || Object])
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

module.exports = "<!--Top Nav-->\r\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2 px-sm-3\">\r\n  <ul class=\"navbar-nav mr-3\">\r\n    <li class=\"nav-item\">\r\n      <!-- Back button -->\r\n      <a class=\"nav-link px-0\"\r\n         [routerLink]=\"['../']\"\r\n         title=\"Back to Widget List\">\r\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n      </a>\r\n      <!-- /Back button -->\r\n    </li>\r\n  </ul>\r\n\r\n  <span class=\"navbar-brand\">Choose Widget</span>\r\n\r\n</nav>\r\n<!--/Top Nav-->\r\n\r\n<div class=\"container hvj-widget-chooser\">\r\n  \r\n  <ul class=\"list-group list-group-flush\">\r\n    \r\n    <li class=\"list-group-item\" *ngFor=\"let thisWidget of widgetTypes\">\r\n      <a class=\"btn btn-xs link-royal\"\r\n         (click)=\"createWidget(thisWidget)\">\r\n        <span>{{thisWidget}}</span>\r\n      </a>\r\n    </li>\r\n\r\n  </ul>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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





var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(activatedRoute, router, widgetService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.interactionsService = interactionsService;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get userid parameter route
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pid'];
        });
        this.widgetTypes = [];
        for (var w in __WEBPACK_IMPORTED_MODULE_2__model_model__["e" /* WidgetType */]) {
            if (typeof __WEBPACK_IMPORTED_MODULE_2__model_model__["e" /* WidgetType */][w] === 'number') {
                this.widgetTypes.push(w);
            }
        }
    };
    /**
     * Create widget of specified type
     * @param type Type of widget to create
     */
    WidgetChooserComponent.prototype.createWidget = function (type) {
        var _this = this;
        var newWidget = new __WEBPACK_IMPORTED_MODULE_2__model_model__["d" /* Widget */]();
        newWidget.widgetType = __WEBPACK_IMPORTED_MODULE_2__model_model__["e" /* WidgetType */][type];
        this.widgetService.createWidget(this.pageId, newWidget).
            subscribe(function (createdWidget) {
            _this.router.navigate(['../' + createdWidget._id], { relativeTo: _this.activatedRoute });
        }, function (err) {
            console.error('Error creating widget. ', err);
            var errMessage = JSON.parse(err.error);
            _this.interactionsService.showAlert('Uhhhh! Error creating widget. ' + errMessage);
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _d || Object])
], WidgetChooserComponent);

var _a, _b, _c, _d;
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

module.exports = "<div class=\"hvj-widget-edit\" *ngIf=\"widget\"\r\n     [ngSwitch]=\"WidgetType[widget.widgetType]\">\r\n\r\n\r\n  <div *ngSwitchCase=\"WidgetType.Heading\">\r\n    <app-widget-header-edit [widget]=\"widget\"\r\n                            (updateWidget)=\"updateWidget($event)\"\r\n                            (deleteWidget)=\"deleteWidget($event)\"></app-widget-header-edit>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"WidgetType.Image\">\r\n    <app-widget-image-edit [widget]=\"widget\"\r\n                           (updateWidget)=\"updateWidget($event)\"\r\n                           (deleteWidget)=\"deleteWidget($event)\"></app-widget-image-edit>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"WidgetType.Html\">\r\n    <app-widget-html-edit [widget]=\"widget\"\r\n                          (updateWidget)=\"updateWidget($event)\"\r\n                          (deleteWidget)=\"deleteWidget($event)\"></app-widget-html-edit>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"WidgetType.YouTube\">\r\n    <app-widget-youtube-edit [widget]=\"widget\"\r\n                             (updateWidget)=\"updateWidget($event)\"\r\n                             (deleteWidget)=\"deleteWidget($event)\"></app-widget-youtube-edit>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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





var WidgetEditComponent = (function () {
    function WidgetEditComponent(activatedRoute, router, widgetService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.interactionsService = interactionsService;
        // properties
        this.WidgetType = __WEBPACK_IMPORTED_MODULE_2__model_model__["e" /* WidgetType */];
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var widgetId = params['wgid'];
            _this.widgetService.findWidgetById(widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
            }, function (err) {
                console.error('Error getting widget of Id ' + widgetId, err);
                var errMessage = JSON.parse(err.error);
                _this.interactionsService.showAlert('Error getting Widget with Id "' + widgetId + '". ' + errMessage, 'danger', true);
                _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
            });
        });
    };
    /**
     * Update widget object
     * @param widget updated widget object
     */
    WidgetEditComponent.prototype.updateWidget = function (widget) {
        var _this = this;
        this.widgetService.updateWidget(widget._id, widget)
            .subscribe(function (updatedWidget) {
            _this.interactionsService.showAlert('Widget updated successfully', 'success', true);
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        }, function (err) {
            _this.interactionsService.showAlert('Widget update failed', 'danger');
        });
    };
    WidgetEditComponent.prototype.deleteWidget = function (widgetId) {
        var _this = this;
        this.widgetService.deleteWidget(widgetId)
            .subscribe(function (deletedWidget) {
            _this.interactionsService.showAlert('Widget deleted successfully', 'success', true);
            _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
        }, function (err) {
            console.error('Error deleting widget. ', err);
            var errMessage = JSON.parse(err.error);
            _this.interactionsService.showAlert('Oh Snap! Widget delete failed. ' + errMessage, 'danger');
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _d || Object])
], WidgetEditComponent);

var _a, _b, _c, _d;
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

module.exports = "<!--Top Nav-->\r\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2 px-sm-3\">\r\n  <ul class=\"navbar-nav mr-3\">\r\n    <li class=\"nav-item\">\r\n      <!-- Back button -->\r\n      <a class=\"nav-link px-0\"\r\n         [routerLink]=\"['../']\"\r\n         title=\"Widgets\">\r\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n      </a>\r\n      <!-- /Back button -->\r\n    </li>\r\n  </ul>\r\n\r\n  <span class=\"navbar-brand\">Widget Edit : Header</span>\r\n\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link px-0\"\r\n         (click)=\"saveChanges()\"\r\n         title=\"Save Changes\">\r\n        <span class=\"fa fa-check fa-lg\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!--/Top Nav-->\r\n\r\n<!--content-->\r\n<div class=\"container hvj-widget-header-edit\">\r\n  <form #widgetHeaderEditForm=\"ngForm\">\r\n    <!--Widget Name-->\r\n    <div class=\"form-group\">\r\n      <label for=\"widget-name\"\r\n             class=\"font-weight-bold text-muted\">Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"widgetName\"\r\n             name=\"name\"\r\n             placeholder=\"Name\"\r\n             [(ngModel)]=\"widget.name\"\r\n             #nameField=\"ngModel\">\r\n    </div>\r\n    <!--/Widget Name-->\r\n\r\n    <!--Widget Heading Text-->\r\n    <div class=\"form-group\">\r\n      <label for=\"widget-heading-text\"\r\n             class=\"font-weight-bold text-muted\">Text</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"widget-heading-text\"\r\n             name=\"text\"\r\n             placeholder=\"Text\"\r\n             [(ngModel)]=\"widget.text\"\r\n             #textField=\"ngModel\"\r\n             required>\r\n      <span *ngIf=\"textField.invalid && textField.touched\"\r\n            class=\"text-danger ml-2\">Text is required</span>\r\n    </div>\r\n    <!--/Widget Heading Text-->\r\n\r\n    <!--Widget Heading Size-->\r\n    <div class=\"form-group\">\r\n      <label for=\"widget-heading-size\"\r\n             class=\"font-weight-bold text-muted\">Size</label>\r\n      <input type=\"number\"\r\n             class=\"form-control\"\r\n             id=\"widget-heading-size\"\r\n             name=\"size\"\r\n             max=\"6\"\r\n             min=\"1\"\r\n             placeholder=\"Size\"\r\n             [(ngModel)]=\"widget.size\"\r\n             #sizeField=\"ngModel\">\r\n      <span *ngIf=\"sizeField.invalid\"\r\n            class=\"text-danger ml-2\">Size must be between 1 and 6</span>\r\n    </div>\r\n    <!--/Widget Heading Size-->\r\n\r\n    <!-- Form buttons -->\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-12 col-sm-9 mr-1\">\r\n        <!-- Save button -->\r\n        <button class=\"btn btn-success btn-block mr-1 mb-2\"\r\n                title=\"Save Widget\"\r\n                (click)=\"saveChanges()\">\r\n          <i class=\"fa fa-check\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"col\">\r\n        <!-- Delete button -->\r\n        <button class=\"btn btn-danger btn-block\"\r\n                title=\"Delete Widget\"\r\n                (click)=\"showDeleteConfirmation = true\"\r\n                [hidden]=\"showDeleteConfirmation\">\r\n          <i class=\"fa fa-trash\"></i>\r\n        </button>\r\n        <button class=\"btn btn-danger btn-block mt-0\"\r\n                title=\"Delete Widget\"\r\n                [hidden]=\"!showDeleteConfirmation\"\r\n                (click)=\"delete()\">sure?</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n<!--/content-->"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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






var WidgetHeaderEditComponent = (function () {
    function WidgetHeaderEditComponent(activatedRoute, router, widgetService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.interactionsService = interactionsService;
        this.updateWidget = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.deleteWidget = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    WidgetHeaderEditComponent.prototype.ngOnInit = function () {
    };
    /**
     * Save changes to widget
     */
    WidgetHeaderEditComponent.prototype.saveChanges = function () {
        if (this.widgetHeaderEditForm.invalid) {
            // touch controls to trigger validation messages
            this.widgetHeaderEditForm.controls.name.markAsTouched({ onlySelf: true });
            this.widgetHeaderEditForm.controls.text.markAsTouched({ onlySelf: true });
        }
        else {
            if (this.widget.size && (this.widget.size > 6 || this.widget.size < 1)) {
                this.widgetHeaderEditForm.controls.size.setErrors({ 'invalid': true });
                return;
            }
            this.updateWidget.emit(this.widget);
        }
    };
    /**
     * Delete current widget
     */
    WidgetHeaderEditComponent.prototype.delete = function () {
        this.deleteWidget.emit(this.widget._id);
    };
    return WidgetHeaderEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__model_model__["d" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model_model__["d" /* Widget */]) === "function" && _a || Object)
], WidgetHeaderEditComponent.prototype, "widget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], WidgetHeaderEditComponent.prototype, "updateWidget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], WidgetHeaderEditComponent.prototype, "deleteWidget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('widgetHeaderEditForm'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _b || Object)
], WidgetHeaderEditComponent.prototype, "widgetHeaderEditForm", void 0);
WidgetHeaderEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _f || Object])
], WidgetHeaderEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Top Nav-->\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2 px-sm-3\">\n  <ul class=\"navbar-nav mr-3\">\n    <li class=\"nav-item\">\n      <!-- Back button -->\n      <a class=\"nav-link px-0\"\n         [routerLink]=\"['../']\"\n         title=\"Widgets\">\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\n      </a>\n      <!-- /Back button -->\n    </li>\n  </ul>\n\n  <span class=\"navbar-brand\">Widget Edit : Html</span>\n\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\">\n      <!-- Action button -->\n      <a class=\"nav-link px-0\"\n         (click)=\"saveChanges()\"\n         title=\"Save Changes\">\n        <span class=\"fa fa-check fa-lg\"></span>\n      </a>\n      <!-- /Action button -->\n    </li>\n  </ul>\n</nav>\n<!--/Top Nav-->\n\n<!--content-->\n<div class=\"container hvj-widget-header-edit\">\n  <form #widgetHtmlEditForm=\"ngForm\">\n    <!--Widget Name-->\n    <div class=\"form-group\">\n      <label for=\"widget-name\"\n             class=\"font-weight-bold text-muted\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"widgetName\"\n             name=\"name\"\n             placeholder=\"Name\"\n             [(ngModel)]=\"widget.name\"\n             #nameField=\"ngModel\">\n    </div>\n    <!--/Widget Name-->\n\n    <!--Widget Heading Text-->\n    <div class=\"form-group\">\n      <label for=\"widget-heading-text\"\n             class=\"font-weight-bold text-muted\">Text</label>\n      <textarea type=\"text\"\n                class=\"form-control\"\n                id=\"widget-heading-text\"\n                name=\"text\"\n                placeholder=\"Html\"\n                rows=5\n                [(ngModel)]=\"widget.text\"\n                #textField=\"ngModel\"\n                [ngClass]=\"{'border-danger': textField.invalid && textField.touched}\"\n                required>\n      </textarea>\n      <span *ngIf=\"textField.invalid && textField.touched\"\n            class=\"text-danger ml-2\">Text is required</span>\n    </div>\n    <!--/Widget Heading Text-->\n\n    <!-- Form buttons -->\n    <div class=\"row no-gutters\">\n      <div class=\"col-12 col-sm-9 mr-1\">\n        <!-- Save button -->\n        <button class=\"btn btn-success btn-block mr-1 mb-2\"\n                title=\"Save Widget\"\n                (click)=\"saveChanges()\">\n          <i class=\"fa fa-check\"></i>\n        </button>\n      </div>\n      <div class=\"col\">\n        <!-- Delete button -->\n        <button class=\"btn btn-danger btn-block\"\n                title=\"Delete Widget\"\n                (click)=\"showDeleteConfirmation = true\"\n                [hidden]=\"showDeleteConfirmation\">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n        <button class=\"btn btn-danger btn-block mt-0\"\n                title=\"Delete Widget\"\n                [hidden]=\"!showDeleteConfirmation\"\n                (click)=\"delete()\">sure?</button>\n      </div>\n    </div>\n\n  </form>\n</div>\n<!--/content-->"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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






var WidgetHtmlEditComponent = (function () {
    function WidgetHtmlEditComponent(activatedRoute, router, widgetService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.interactionsService = interactionsService;
        this.updateWidget = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.deleteWidget = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.showDeleteConfirmation = false;
    }
    WidgetHtmlEditComponent.prototype.ngOnInit = function () {
    };
    /**
     * Save changes to widget
     */
    WidgetHtmlEditComponent.prototype.saveChanges = function () {
        if (this.widgetHtmlEditForm.invalid) {
            // touch controls to trigger validation messages
            this.widgetHtmlEditForm.controls.name.markAsTouched({ onlySelf: true });
            this.widgetHtmlEditForm.controls.text.markAsTouched({ onlySelf: true });
        }
        else {
            this.updateWidget.emit(this.widget);
        }
    };
    /**
     * Delete current widget
     */
    WidgetHtmlEditComponent.prototype.delete = function () {
        this.deleteWidget.emit(this.widget._id);
    };
    return WidgetHtmlEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__model_model__["d" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model_model__["d" /* Widget */]) === "function" && _a || Object)
], WidgetHtmlEditComponent.prototype, "widget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], WidgetHtmlEditComponent.prototype, "updateWidget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], WidgetHtmlEditComponent.prototype, "deleteWidget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('widgetHtmlEditForm'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _b || Object)
], WidgetHtmlEditComponent.prototype, "widgetHtmlEditForm", void 0);
WidgetHtmlEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _f || Object])
], WidgetHtmlEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=widget-html.component.js.map

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

module.exports = "<!--Top Nav-->\r\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2 px-sm-3\">\r\n  <ul class=\"navbar-nav mr-3\">\r\n    <li class=\"nav-item\">\r\n      <!-- Back button -->\r\n      <a class=\"nav-link px-0\"\r\n         [routerLink]=\"['../']\"\r\n         title=\"Widgets\">\r\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n      </a>\r\n      <!-- /Back button -->\r\n    </li>\r\n  </ul>\r\n\r\n  <span class=\"navbar-brand\">Widget Edit : Image</span>\r\n\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item\">\r\n      <!-- Action button -->\r\n      <a class=\"nav-link px-0\"\r\n         (click)=\"saveChanges()\"\r\n         title=\"Save Changes\">\r\n        <span class=\"fa fa-check fa-lg\"></span>\r\n      </a>\r\n      <!-- /Action button -->\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!--/Top Nav-->\r\n\r\n<!--content-->\r\n<div class=\"container hvj-widget-image-edit\">\r\n  <form #widgetImageEditForm=\"ngForm\">\r\n    <!--Widget Name-->\r\n    <div class=\"form-group\">\r\n      <label for=\"widget-name\"\r\n             class=\"font-weight-bold text-muted\">Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"widgetName\"\r\n             name=\"name\"\r\n             placeholder=\"Name\"\r\n             [(ngModel)]=\"widget.name\"\r\n             #nameField=\"ngModel\">\r\n    </div>\r\n    <!--/Widget Name-->\r\n\r\n    <!--Widget Text-->\r\n    <div class=\"form-group\">\r\n      <label for=\"widget-heading-text\"\r\n             class=\"font-weight-bold text-muted\">Text</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"widget-heading-text\"\r\n             name=\"text\"\r\n             placeholder=\"Text\"\r\n             [(ngModel)]=\"widget.text\"\r\n             #textField=\"ngModel\">\r\n    </div>\r\n    <!--/Widget Text-->\r\n\r\n    <!--Widget URL-->\r\n    <div class=\"form-group\">\r\n      <label for=\"widget-url\"\r\n             class=\"font-weight-bold text-muted\">URL</label>\r\n      <input type=\"url\"\r\n             class=\"form-control\"\r\n             id=\"widget-url\"\r\n             name=\"url\"\r\n             placeholder=\"URL\"\r\n             [(ngModel)]=\"widget.url\"\r\n             #urlField=\"ngModel\"\r\n             required>\r\n      <span *ngIf=\"urlField.invalid && urlField.touched\"\r\n            class=\"text-danger ml-2\">Enter a valid URL</span>\r\n    </div>\r\n    <!--/Widget URL-->\r\n\r\n    <!--Widget width-->\r\n    <div class=\"form-group\">\r\n      <label for=\"widget-width\"\r\n             class=\"font-weight-bold text-muted\">Size</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"widget-width\"\r\n             name=\"width\"\r\n             placeholder=\"Width\"\r\n             [(ngModel)]=\"widget.width\"\r\n             ngModel>\r\n    </div>\r\n    <!--/Widget width-->\r\n\r\n    <!--Widget Upload-->\r\n    <div class=\"form-group\">\r\n      <label for=\"widget-upload\"\r\n             class=\"font-weight-bold text-muted\">Upload</label>\r\n      <input type=\"file\"\r\n             class=\"form-control\"\r\n             id=\"widget-upload\"\r\n             placeholder=\"Upload\">\r\n    </div>\r\n    <!--/Widget upload-->\r\n    <div class=\"form-group\">\r\n      <button class=\"btn btn-royal btn-block\">Upload Image</button>\r\n    </div>\r\n\r\n    <!-- Form buttons -->\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-12 col-sm-9 mr-1\">\r\n        <!-- Save button -->\r\n        <button class=\"btn btn-success btn-block mr-1 mb-2\"\r\n                title=\"Save Widget\"\r\n                (click)=\"saveChanges()\">\r\n          <i class=\"fa fa-check\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"col\">\r\n        <!-- Delete button -->\r\n        <button class=\"btn btn-danger btn-block\"\r\n                title=\"Delete Widget\"\r\n                (click)=\"showDeleteConfirmation = true\"\r\n                [hidden]=\"showDeleteConfirmation\">\r\n          <i class=\"fa fa-trash\"></i>\r\n        </button>\r\n        <button class=\"btn btn-danger btn-block mt-0\"\r\n                title=\"Delete Widget\"\r\n                [hidden]=\"!showDeleteConfirmation\"\r\n                (click)=\"delete()\">sure?</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n<!--/content-->"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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






var WidgetImageEditComponent = (function () {
    function WidgetImageEditComponent(activatedRoute, router, widgetService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.interactionsService = interactionsService;
        this.updateWidget = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.deleteWidget = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.showDeleteConfirmation = false;
    }
    WidgetImageEditComponent.prototype.ngOnInit = function () {
    };
    /**
     * Save changes to widget
     */
    WidgetImageEditComponent.prototype.saveChanges = function () {
        if (this.widgetImageEditForm.invalid) {
            // touch controls to trigger validation messages
            this.widgetImageEditForm.controls.name.markAsTouched({ onlySelf: true });
            this.widgetImageEditForm.controls.url.markAsTouched({ onlySelf: true });
        }
        else {
            this.updateWidget.emit(this.widget);
        }
    };
    /**
     * Delete current widget
     */
    WidgetImageEditComponent.prototype.delete = function () {
        this.deleteWidget.emit(this.widget._id);
    };
    return WidgetImageEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__model_model__["d" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model_model__["d" /* Widget */]) === "function" && _a || Object)
], WidgetImageEditComponent.prototype, "widget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], WidgetImageEditComponent.prototype, "updateWidget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], WidgetImageEditComponent.prototype, "deleteWidget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('widgetImageEditForm'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _b || Object)
], WidgetImageEditComponent.prototype, "widgetImageEditForm", void 0);
WidgetImageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _f || Object])
], WidgetImageEditComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "<!--Top Nav-->\r\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2 px-sm-3\">\r\n  <ul class=\"navbar-nav mr-3\">\r\n    <li class=\"nav-item\">\r\n      <!-- Back button -->\r\n      <a class=\"nav-link px-0\"\r\n         [routerLink]=\"['../']\"\r\n         title=\"Widgets\">\r\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n      </a>\r\n      <!-- /Back button -->\r\n    </li>\r\n  </ul>\r\n\r\n  <span class=\"navbar-brand\">Widget Edit : YouTube</span>\r\n\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item\">\r\n      <!-- Action button -->\r\n      <a class=\"nav-link px-0\"\r\n         (click)=\"saveChanges()\"\r\n         title=\"Save Changes\">\r\n        <span class=\"fa fa-check fa-lg\"></span>\r\n      </a>\r\n      <!-- /Action button -->\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!--/Top Nav-->\r\n\r\n<!--content-->\r\n<div class=\"container hvj-widget-youtube-edit\">\r\n  <form #widgetYoutubeEditForm=\"ngForm\">\r\n    <!--Widget Name-->\r\n    <div class=\"form-group\">\r\n      <label for=\"widget-name\"\r\n             class=\"font-weight-bold text-muted\">Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"widgetName\"\r\n             name=\"name\"\r\n             placeholder=\"Name\"\r\n             [(ngModel)]=\"widget.name\"\r\n             #nameField=\"ngModel\">\r\n    </div>\r\n    <!--/Widget Name-->\r\n\r\n    <!--Widget Text-->\r\n    <div class=\"form-group\">\r\n      <label for=\"widget-heading-text\"\r\n             class=\"font-weight-bold text-muted\">Text</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"widget-heading-text\"\r\n             name=\"text\"\r\n             placeholder=\"Text\"\r\n             [(ngModel)]=\"widget.text\"\r\n             #textField=\"ngModel\">\r\n    </div>\r\n    <!--/Widget Text-->\r\n\r\n    <!--Widget URL-->\r\n    <div class=\"form-group\">\r\n      <label for=\"widget-url\"\r\n             class=\"font-weight-bold text-muted\">URL</label>\r\n      <input type=\"url\"\r\n             class=\"form-control\"\r\n             id=\"widget-url\"\r\n             name=\"url\"\r\n             placeholder=\"URL\"\r\n             [(ngModel)]=\"widget.url\"\r\n             #urlField=\"ngModel\"\r\n             required>\r\n      <span *ngIf=\"urlField.invalid && urlField.touched\"\r\n            class=\"text-danger ml-2\">Enter a valid URL</span>\r\n    </div>\r\n    <!--/Widget URL-->\r\n\r\n    <!--Widget width-->\r\n    <div class=\"form-group\">\r\n      <label for=\"widget-width\"\r\n             class=\"font-weight-bold text-muted\">Size</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"widget-width\"\r\n             name=\"width\"\r\n             placeholder=\"Width\"\r\n             [(ngModel)]=\"widget.width\"\r\n             ngModel>\r\n    </div>\r\n    <!--/Widget width-->\r\n\r\n    <!-- Form buttons -->\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-12 col-sm-9 mr-1\">\r\n        <!-- Save button -->\r\n        <button class=\"btn btn-success btn-block mr-1 mb-2\"\r\n                title=\"Save Widget\"\r\n                (click)=\"saveChanges()\">\r\n          <i class=\"fa fa-check\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"col\">\r\n        <!-- Delete button -->\r\n        <button class=\"btn btn-danger btn-block\"\r\n                title=\"Delete Widget\"\r\n                (click)=\"showDeleteConfirmation = true\"\r\n                [hidden]=\"showDeleteConfirmation\">\r\n          <i class=\"fa fa-trash\"></i>\r\n        </button>\r\n        <button class=\"btn btn-danger btn-block mt-0\"\r\n                title=\"Delete Widget\"\r\n                [hidden]=\"!showDeleteConfirmation\"\r\n                (click)=\"delete()\">sure?</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n<!--/content-->"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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






var WidgetYoutubeEditComponent = (function () {
    function WidgetYoutubeEditComponent(activatedRoute, router, widgetService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.interactionsService = interactionsService;
        this.updateWidget = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.deleteWidget = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.showDeleteConfirmation = false;
    }
    WidgetYoutubeEditComponent.prototype.ngOnInit = function () {
    };
    /**
     * Save changes to widget
     */
    WidgetYoutubeEditComponent.prototype.saveChanges = function () {
        if (this.widgetYoutubeEditForm.invalid) {
            // touch controls to trigger validation messages
            this.widgetYoutubeEditForm.controls.name.markAsTouched({ onlySelf: true });
            this.widgetYoutubeEditForm.controls.url.markAsTouched({ onlySelf: true });
        }
        else {
            this.updateWidget.emit(this.widget);
        }
    };
    /**
     * Delete current widget
     */
    WidgetYoutubeEditComponent.prototype.delete = function () {
        this.deleteWidget.emit(this.widget._id);
    };
    return WidgetYoutubeEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__model_model__["d" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__model_model__["d" /* Widget */]) === "function" && _a || Object)
], WidgetYoutubeEditComponent.prototype, "widget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], WidgetYoutubeEditComponent.prototype, "updateWidget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], WidgetYoutubeEditComponent.prototype, "deleteWidget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('widgetYoutubeEditForm'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _b || Object)
], WidgetYoutubeEditComponent.prototype, "widgetYoutubeEditForm", void 0);
WidgetYoutubeEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _f || Object])
], WidgetYoutubeEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hvj-widget-heading\">\n  <div [ngClass]=\"widget.size ? 'h' + widget.size : 'h2'\">{{widget.text}}</div>\n  <p *ngIf=\"!widget.text\"\n     class=\"small font-italic text-secondary\"> No content</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
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


var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent() {
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () { };
    return WidgetHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_model__["d" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_model__["d" /* Widget */]) === "function" && _a || Object)
], WidgetHeaderComponent.prototype, "widget", void 0);
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetHeaderComponent);

var _a;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hvj-widget-html\">\n    <div *ngIf=\"widget.text\"\n         [innerHtml]=\"widget.text\"></div>\n    <p *ngIf=\"!widget.text\"\n       class=\"small font-italic text-secondary\"> No content</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
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


var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent() {
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
    };
    return WidgetHtmlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_model__["d" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_model__["d" /* Widget */]) === "function" && _a || Object)
], WidgetHtmlComponent.prototype, "widget", void 0);
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetHtmlComponent);

var _a;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hvj-widget-image\">\n  <img *ngIf=\"widget.url\"\n       [style.width]=\"widget.width\"\n       [alt]=\"widget.text ? widget.text : ''\"\n       [src]=\"widget.url\" />\n  <p *ngIf=\"!widget.url && !widget.text\"\n     class=\"small font-italics text-secondary\">No image specified</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
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


var WidgetImageComponent = (function () {
    function WidgetImageComponent() {
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    return WidgetImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_model__["d" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_model__["d" /* Widget */]) === "function" && _a || Object)
], WidgetImageComponent.prototype, "widget", void 0);
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetImageComponent);

var _a;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hvj-widget-list .ui-sortable {\r\n    position: relative;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Top Nav-->\r\n<nav class=\"navbar navbar-expand fixed-top navbar-dark bg-royal px-2 px-sm-3\">\r\n  <ul class=\"navbar-nav mr-3\">\r\n    <li class=\"nav-item\">\r\n      <!-- Back button -->\r\n      <a class=\"nav-link px-0\"\r\n         [routerLink]=\"['../../']\"\r\n         title=\"Pages\">\r\n        <span class=\"fa fa-chevron-left fa-lg\"></span>\r\n      </a>\r\n      <!-- /Back button -->\r\n    </li>\r\n  </ul>\r\n\r\n  <span class=\"navbar-brand\">Widgets</span>\r\n\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item\">\r\n      <!-- Action button -->\r\n      <a class=\"nav-link px-0\"\r\n         [routerLink]=\"['new']\"\r\n         title=\"Add Widget\">\r\n        <span class=\"fa fa-plus fa-lg\"></span>\r\n      </a>\r\n      <!-- /Action button -->\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!--/Top Nav-->\r\n\r\n<div class=\"container hvj-widget-list\">\r\n  <ul class=\"list-group\"\r\n      *ngIf=\"widgets\"\r\n      appSortable (onSort)=\"updateSortOrder($event)\">\r\n    <li class=\"list-group-item border-0 px-1 mb-1\"\r\n        *ngFor=\"let thisWidget of widgets\">\r\n      <div class=\"hvj-widget\"\r\n           [ngSwitch]=\"WidgetType[thisWidget.widgetType]\">\r\n        <div *ngSwitchCase=\"WidgetType.Heading\">\r\n          <app-widget-header [widget]=\"thisWidget\"></app-widget-header>\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"WidgetType.Image\">\r\n          <app-widget-image [widget]=\"thisWidget\"></app-widget-image>\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"WidgetType.Html\">\r\n          <app-widget-html [widget]=\"thisWidget\"></app-widget-html>\r\n        </div>\r\n\r\n        <div *ngSwitchCase=\"WidgetType.YouTube\">\r\n          <app-widget-youtube [widget]=\"thisWidget\"></app-widget-youtube>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Widget Action buttons -->\r\n      <div class=\"hvj-widget-actions btn-group ml-auto\">\r\n        <a class=\"btn btn-xs mr-1 link-royal\"\r\n           [routerLink]=\"[thisWidget._id]\"\r\n           title=\"Edit\">\r\n          <span class=\"fa fa-gear\"></span>\r\n        </a>\r\n        <a class=\"btn btn-xs link-royal\"\r\n           title=\"More Options\">\r\n          <span class=\"fa fa-bars\"></span>\r\n        </a>\r\n      </div>\r\n      <!-- /Widget Action buttons -->\r\n    </li>\r\n\r\n    <!-- list empty message -->\r\n    <li class=\"list-group-item border-0 px-1\"\r\n        *ngIf=\"widgets.length == 0\">\r\n      <span>\r\n        <em>No widgets to show</em>\r\n      </span>\r\n    </li>\r\n\r\n    <li class=\"list-group-item border-0 px-1\"\r\n        *ngIf=\"widgets.length == 0\">\r\n      <a class=\"btn btn-xs link-royal\"\r\n         [routerLink]=\"['new']\">\r\n        <i class=\"fa fa-plus fa-lg mr-2\"></i>\r\n        <em class=\"text-secondary\">Create new widget</em>\r\n      </a>\r\n    </li>\r\n\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__ = __webpack_require__("../../../../../src/app/services/interactions.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
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
    function WidgetListComponent(activatedRoute, router, widgetService, interactionsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.interactionsService = interactionsService;
        // properties
        this.WidgetType = __WEBPACK_IMPORTED_MODULE_2__model_model__["e" /* WidgetType */];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.widgetService.findWidgetsByPageId(_this.pageId)
                .subscribe(function (widgets) {
                _this.widgets = widgets;
            }, function (err) {
                console.error('Error getting list of widgets', err);
                var errMessage = JSON.parse(err.error);
                _this.interactionsService.showAlert('Oops! Error getting list of widgets. ' + errMessage);
            });
            // add page specific links to footer
            _this.interactionsService.invoke(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* AppConstants */].EVENTS.addFooterLink, { icon: 'fa-play fa-lg' });
            _this.interactionsService.invoke(__WEBPACK_IMPORTED_MODULE_5__app_constant__["a" /* AppConstants */].EVENTS.addFooterLink, { icon: 'fa-eye fa-lg' });
        });
    };
    /**
     * Update widget order
     * @param newPosition new position of the widget
     */
    WidgetListComponent.prototype.updateSortOrder = function (newPosition) {
        var _this = this;
        console.log(newPosition);
        this.widgetService.reorderWidget(this.pageId, this.widgets[newPosition.initial], newPosition.initial, newPosition.final)
            .subscribe(function (widgets) {
            console.log('Widget order updated');
            // this.widgets = widgets;
        }, function (err) {
            console.error('Error updating widget order. ', err);
            var errMessage = JSON.parse(err);
            _this.interactionsService.showAlert('Oops! Something went wrong in saving widget order. ' + errMessage, 'danger', true);
        });
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_interactions_service_client__["a" /* InteractionsService */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hvj-widget-youtube\">\n  <div class=\"embed-responsive embed-responsive-16by9\"\n       *ngIf=\"safeUrl\">\n    <iframe class=\"embed-responsive-item\"\n            [style.width]=\"widget.width ? widget.width : '100%'\"\n            [src]=\"safeUrl\"\n            allowfullscreen></iframe>\n  </div>\n  <p *ngIf=\"!widget.url\"\n     class=\"small font-italics text-secondary\">No URL specified</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_model__ = __webpack_require__("../../../../../src/app/model/model.ts");
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
    function WidgetYoutubeComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        if (this.widget.url) {
            if (this.widget.url.indexOf('/embed/') === -1) {
                var videoId = this.widget.url.split('/').filter(function (e) { return e.length > 0; }).reverse()[0];
                // in case of direct YouTube url, get the id from query string
                videoId = videoId.split('v=').reverse()[0];
                this.widget.url = 'https://www.youtube.com/embed/' + videoId;
            }
            this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.widget.url);
        }
    };
    return WidgetYoutubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_model__["d" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_model__["d" /* Widget */]) === "function" && _a || Object)
], WidgetYoutubeComponent.prototype, "widget", void 0);
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], WidgetYoutubeComponent);

var _a, _b;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
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

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        // properties
        this.onSort = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.makeSortable();
    };
    /**
     * Make the attached dom element sortable
     */
    SortableDirective.prototype.makeSortable = function () {
        var _this = this;
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            placeholder: 'ui-state-highlight',
            start: function (event, ui) {
                jQuery(ui.placeholder).height(jQuery(ui.item).height());
                _this.initialPosition = ui.item.index();
            },
            stop: function (event, ui) {
                _this.finalPosition = ui.item.index();
                _this.onSort.emit({
                    initial: _this.initialPosition,
                    final: _this.finalPosition
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "onSort", void 0);
SortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/model/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Website; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WidgetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Widget; });
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
    WidgetType[WidgetType["Heading"] = 0] = "Heading";
    WidgetType[WidgetType["Image"] = 1] = "Image";
    WidgetType[WidgetType["Html"] = 2] = "Html";
    WidgetType[WidgetType["YouTube"] = 3] = "YouTube";
})(WidgetType || (WidgetType = {}));
/** Represents a widget in a page */
var Widget = (function () {
    function Widget() {
    }
    return Widget;
}());

//# sourceMappingURL=model.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
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




var AuthService = (function () {
    function AuthService(router, userService) {
        this.router = router;
        this.userService = userService;
        this.api = {
            'getLoggedInUser': this.getLoggedInUser,
            'login': this.login,
            'logout': this.logout
        };
    }
    /**
     * Check if user is logged in
     * @returns logged in user object; null, if user is not logged in
     */
    AuthService.prototype.getLoggedInUser = function () {
        this.loggedInUser = this.loggedInUser || JSON.parse(localStorage.getItem('loggedInUser'));
        if (this.loggedInUser) {
            return Object.assign({}, this.loggedInUser);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    /**
     * Login user
     * @param username username
     * @param password password
     * @returns logged in user; null if login fails
     */
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"](function (observer) {
            _this.userService.findUserByCredentials(username, password)
                .subscribe(function (data) {
                _this.loggedInUser = data;
                localStorage.setItem('loggedInUser', JSON.stringify(_this.loggedInUser));
                observer.next(Object.assign({}, _this.loggedInUser));
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
        return obs;
    };
    /**
     * Logout user
     */
    AuthService.prototype.logout = function () {
        this.loggedInUser = null;
        localStorage.removeItem('loggedInUser');
        this.router.navigate(['/login']);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/interactions.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
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
        // event callback mapping; key: event name, value: array of registered callbacks
        this.callbacks = new Map();
        // queued fire callback requests; key: event, value: array of data objects sent
        this.queue = new Map();
        this.api = {
            'registerCallback': this.registerCallback,
            'invoke': this.invoke
        };
    }
    /**
     * Register callback for a specific event
     * @param name name of the event to subscribe to
     * @param callback callback function to be invoked with the event occurs
     * @param clear clear all existing callbacks for the given name
     */
    InteractionsService.prototype.registerCallback = function (name, callback, clear) {
        var _this = this;
        // create callback array if it doest not already exist
        if (!this.callbacks[name] || clear) {
            this.callbacks[name] = [];
        }
        this.callbacks[name].push(callback);
        // fire any requests already received
        if (this.queue[name]) {
            this.queue[name].forEach(function (q) {
                _this.invoke(name, q);
            });
            this.queue[name] = [];
        }
    };
    /**
     * Invoke all registered callback for the specified event
     * @param name name of the event
     */
    InteractionsService.prototype.invoke = function (name, data) {
        // invoke callbacks if exist
        if (this.callbacks[name]) {
            this.callbacks[name].forEach(function (c) {
                try {
                    c(data);
                }
                catch (ex) {
                    console.log('Error invoking callback function for event ' + name);
                }
            });
        }
        else {
            // enqueue request
            if (!this.queue[name]) {
                this.queue[name] = [];
            }
            this.queue[name].push(data);
        }
    };
    /**
     * Show alert
     * @param text alert text
     * @param type alert type. bootstrap context classes are supported
     * @param autoClose auto close after a delay
     */
    InteractionsService.prototype.showAlert = function (text, type, autoClose) {
        this.invoke(__WEBPACK_IMPORTED_MODULE_1__app_constant__["a" /* AppConstants */].EVENTS.showAlert, { text: text, type: type, autoClose: autoClose });
    };
    /**
     * Show / hide loading screen
     * @param show true, to show; false, to hide
     */
    InteractionsService.prototype.showLoader = function (show) {
        this.invoke(__WEBPACK_IMPORTED_MODULE_1__app_constant__["a" /* AppConstants */].EVENTS.showLoader, show);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
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
    function PageService(http) {
        this.http = http;
        this.api = {
            'createPage': this.createPage,
            'findPageById': this.findPageById,
            'findPageBywebsiteId': this.findPagesBywebsiteId,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
        this.endpoint = {
            'createPage': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/website/{websiteId}/page',
            'findPagesBywebsiteId': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/website/{websiteId}/page',
            'findPageById': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/page/{pageId}',
            'updatePage': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/page/{pageId}',
            'deletePage': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/page/{pageId}'
        };
    }
    /**
     * Create a new page
     * @param userId id of the user who created the page
     * @param page page object created by the user
     * @returns Observable that resolves to the created page object
     */
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.endpoint.createPage.replace('{websiteId}', websiteId);
        return this.http.post(url, page);
    };
    /**
      * Find page by Id
      * @param pageId id of the page
      * @returns Observable that resolves to page corresponding to the given Id; null if id page doesn't exit
      */
    PageService.prototype.findPageById = function (pageId) {
        var url = this.endpoint.findPageById.replace('{pageId}', pageId);
        return this.http.get(url);
    };
    /**
     * Get all pages in the website specified by website id
     * @param websiteId id of the website
     * @returns Observable that resolves to list of pages in the website specified by the given id
     */
    PageService.prototype.findPagesBywebsiteId = function (websiteId) {
        var url = this.endpoint.findPagesBywebsiteId.replace('{websiteId}', websiteId);
        return this.http.get(url);
    };
    /**
     * Update page by Id
     * @param pageId Id of the page to update
     * @param page updated page object
     * @returns Observable that resolves to the updated page object
     */
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.endpoint.updatePage.replace('{pageId}', pageId);
        return this.http.put(url, page);
    };
    /**
     * Delete page by Id
     * @param pageId Id of the page to delete
     * @returns Observable that resolves to page that was deleted, null if the id doesn't exist
     */
    PageService.prototype.deletePage = function (pageId) {
        var url = this.endpoint.deletePage.replace('{pageId}', pageId);
        return this.http.delete(url);
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], PageService);

var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
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
    function UserService(http) {
        this.http = http;
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
        this.endpoint = {
            'createUser': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user',
            'findUserByUsername': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user?username={username}',
            'findUserByCredentials': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user?username={username}&password={password}',
            'findUserById': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}',
            'updateUser': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}',
            'deleteUser': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}'
        };
    }
    /**
     * Create a new user
     * @param user user object to be added to the user list
     * @returns Observable that resolves to created user object
     */
    UserService.prototype.createUser = function (user) {
        var url = this.endpoint.createUser;
        return this.http.post(url, user);
    };
    /**
     * Find user by user id
     * @param userId id of the user
     * @returns Observable that resolves to user with the specifed id; null if id doesn't exist
     */
    UserService.prototype.findUserById = function (userId) {
        var url = this.endpoint.findUserById.replace('{userId}', userId);
        return this.http.get(url);
    };
    /**
     * Find user by user name
     * @param username username of the user
     * @returns Observable that resolves to user with the specifed username; null if id doesn't exist
     */
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.endpoint.findUserByUsername.replace('{username}', username);
        return this.http.get(url);
    };
    /**
     * Find user by credentials
     * @param username username of the user
     * @param password password of the user
     * @returns Observable that resolves to user with the specifed username; null if id doesn't exist
     */
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.endpoint.findUserByCredentials
            .replace('{username}', username)
            .replace('{password}', password);
        return this.http.get(url);
    };
    /**
     * Update user by user id
     * @param {string} userId id of the user
     * @param user updated user object
     * @returns Observable that resolves to updated user object
     */
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.endpoint.updateUser.replace('{userId}', userId);
        return this.http.put(url, user);
    };
    /**
     * Delete user by user id
     * @param {string} userId id of the user
     * @returns Observable that resolves to deleted user object
     */
    UserService.prototype.deleteUser = function (userId) {
        var url = this.endpoint.deleteUser.replace('{userId}', userId);
        return this.http.delete(url);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
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
    function WebsiteService(http) {
        this.http = http;
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsiteById': this.findWebsiteById,
            'findWebsitesByUser': this.findWebsitesByUser,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
        this.endpoint = {
            'createWebsite': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}/website',
            'findWebsitesByUser': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}/website',
            'findWebsitesById': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/website/{websiteId}',
            'updateWebsite': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/website/{websiteId}',
            'deleteWebsite': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/website/{websiteId}'
        };
    }
    /**
     * Create a new website
     * @param userId id of the user who created the website
     * @param website website object created by the user
     * @returns an observable that resolves to the created website object
     */
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.endpoint.createWebsite.replace('{userId}', userId);
        return this.http.post(url, website);
    };
    /**
     * Find website by Id
     * @param websiteId id of the website
     * @returns an observable that resolves to Website corresponding to the given Id; null if id websites doesn't exit
     */
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.endpoint.findWebsitesById.replace('{websiteId}', websiteId);
        return this.http.get(url);
    };
    /**
     * Get all websites created by a user
     * @param userId id of the user who developed the website
     * @returns an observable that resolves to list of websites created by the specified user
     */
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.endpoint.findWebsitesByUser.replace('{userId}', userId);
        return this.http.get(url);
    };
    /**
     * Update website by Id
     * @param websiteId Id of the website to update
     * @param website updated website object
     * @returns an observable that resolves to the updated website object
     */
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.endpoint.updateWebsite.replace('{websiteId}', websiteId);
        return this.http.put(url, website);
    };
    /**
     * Delete webstie by Id
     * @param websiteId Id of the website to delete
     * @returns an observable that resolves to website that was deleted, null if the id doesn't exist
     */
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.endpoint.deleteWebsite.replace('{websiteId}', websiteId);
        return this.http.delete(url);
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
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
    function WidgetService(http) {
        this.http = http;
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetById': this.findWidgetById,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget,
            'reorderWidget': this.reorderWidget
        };
        this.endpoint = {
            'createWidget': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/page/{pageId}/widget',
            'findWidgetsByPageId': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/page/{pageId}/widget',
            'findWidgetById': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/widget/{widgetId}',
            'updateWidget': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/widget/{widgetId}',
            'deleteWidget': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/widget/{widgetId}',
            'reorderWidget': __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppConstants */].ENDPOINT.baseUrl + '/page/{pageId}/widget?initial={initial}&final={final}'
        };
    }
    /**
     * Create a new widget
     * @param pageId id of the page in which the widget is to be added
     * @param widget widget object created
     * @returns Observable that resolves to the created widget object
     */
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.endpoint.createWidget.replace('{pageId}', pageId);
        return this.http.post(url, widget);
    };
    /**
      * Find widget by Id
      * @param widgetId id of the widget
      * @returns Observable that resolves to widget corresponding to the given Id; null if id widget doesn't exit
      */
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.endpoint.findWidgetById.replace('{widgetId}', widgetId);
        return this.http.get(url);
    };
    /**
      * Find widget by Page Id
      * @param pageId id of the page
      * @returns Observable that resolves to widgets corresponding to the given Id; null if id widget doesn't exit
      */
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.endpoint.findWidgetsByPageId.replace('{pageId}', pageId);
        return this.http.get(url);
    };
    /**
     * Update widget by Id
     * @param widgetId Id of the widget to update
     * @param widget updated widget object
     * @returns Observable that resolves to the updated widget object
     */
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.endpoint.updateWidget.replace('{widgetId}', widgetId);
        return this.http.put(url, widget);
    };
    /**
     * Update widget position
     * @param pageId Id of the page in which the widget is to be updated
     * @param widget widget whose order is to be changed
     * @param initial initial position of the widget
     * @param final final position of the widget
     */
    WidgetService.prototype.reorderWidget = function (pageId, widget, initial, final) {
        var url = this.endpoint.reorderWidget
            .replace('{pageId}', pageId)
            .replace('{initial}', initial.toString())
            .replace('{final}', final.toString());
        return this.http.put(url, widget);
    };
    /**
     * Delete widget by Id
     * @param widgetId Id of the widget to delete
     * @returns Observable that resolves to widget that was deleted, null if the id doesn't exist
     */
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.endpoint.deleteWidget.replace('{widgetId}', widgetId);
        return this.http.delete(url);
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], WidgetService);

var _a;
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
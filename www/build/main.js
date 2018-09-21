webpackJsonp([3],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_carrinho_service_carrinho_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarPage = /** @class */ (function () {
    function EditarPage(navCtrl, navParams, http, carrinhoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.carrinhoService = carrinhoService;
        this.carrinho = {
            'modelo': '',
            'marca': '',
            'colecao': '',
            'escala': '',
            'ano': ''
        };
    }
    EditarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarPage');
        var CarrinhoId = this.navParams.get('CarrinhoId');
        console.log(CarrinhoId);
    };
    EditarPage.prototype.edit = function (obj) {
        this.carrinhoService.put(obj)
            .subscribe(function (data) {
        });
    };
    EditarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar',template:/*ion-inline-start:"/home/caio/Documentos/MinisMobile/src/pages/editar/editar.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{carrinho.id}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label floating>Modelo</ion-label>\n         <ion-input type="text" [(ngModel)]="carrinho.modelo"></ion-input>\n       </ion-item>\n     \n       <ion-item>\n           <ion-label floating>Marca</ion-label>\n            <ion-input type="text" [(ngModel)]="carrinho.marca"></ion-input>\n          </ion-item>\n     \n          <ion-item>\n             <ion-label floating>Coleção</ion-label>\n              <ion-input type="text" [(ngModel)]="carrinho.colecao"></ion-input>\n            </ion-item>\n     \n            <ion-item>\n               <ion-label floating>Escala</ion-label>\n                <ion-input type="text" [(ngModel)]="carrinho.escala"></ion-input>\n              </ion-item>\n     \n              <ion-item>\n                 <ion-label floating>Ano</ion-label>\n                  <ion-input type="text" [(ngModel)]="carrinho.ano"></ion-input>\n                </ion-item>\n     \n                <button ion-button block (click)="edit(carrinho)" >Editar</button>\n</ion-content>'/*ion-inline-end:"/home/caio/Documentos/MinisMobile/src/pages/editar/editar.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_carrinho_service_carrinho_service__["a" /* CarrinhoServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_carrinho_service_carrinho_service__["a" /* CarrinhoServiceProvider */]) === "function" && _d || Object])
    ], EditarPage);
    return EditarPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=editar.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adicionar/adicionar.module": [
		280,
		2
	],
	"../pages/editar/editar.module": [
		281,
		1
	],
	"../pages/pesquisar/pesquisar.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adicionar_adicionar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pesquisar_pesquisar__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__adicionar_adicionar__["a" /* AdicionarPage */]);
    };
    HomePage.prototype.pesq = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pesquisar_pesquisar__["a" /* PesquisarPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/caio/Documentos/MinisMobile/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Inicio</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n   <ion-card>\n    <img src="assets/imgs/minituras.png"/>\n    <ion-card-content>\n      <ion-card-title>\n      Coleção de Miniaturas\n        </ion-card-title>\n      <p>\n       Esse aplicativo foi criado com o objetivo de ajudar na hora de comprar uma nova miniatura.\n       Abaixo um pouco de informação sobre os tipos de escalas existentes.\n       \n      </p>\n    </ion-card-content>\n  </ion-card>\n    <h3>Adicionar</h3><button ion-fab mini (click)="add()"><ion-icon  name="add"></ion-icon></button>\n    <h3>Pesquisar</h3><button ion-fab mini (click)="pesq()"><ion-icon  name="search"></ion-icon></button>\n  </ion-content>\n\n'/*ion-inline-end:"/home/caio/Documentos/MinisMobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_editar_editar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_search_search__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_sort_sort__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_carrinho_service_carrinho_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_adicionar_adicionar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_http_service_http_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pesquisar_pesquisar__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_adicionar_adicionar__["a" /* AdicionarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pesquisar_pesquisar__["a" /* PesquisarPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_editar_editar__["a" /* EditarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_sort_sort__["a" /* SortPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adicionar/adicionar.module#AdicionarPageModule', name: 'AdicionarPage', segment: 'adicionar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar/editar.module#EditarPageModule', name: 'EditarPage', segment: 'editar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pesquisar/pesquisar.module#PesquisarPageModule', name: 'PesquisarPage', segment: 'pesquisar', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_adicionar_adicionar__["a" /* AdicionarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pesquisar_pesquisar__["a" /* PesquisarPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_editar_editar__["a" /* EditarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_carrinho_service_carrinho_service__["a" /* CarrinhoServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_http_service_http_service__["a" /* HttpServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_adicionar_adicionar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pesquisar_pesquisar__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Pesquisar', component: __WEBPACK_IMPORTED_MODULE_6__pages_pesquisar_pesquisar__["a" /* PesquisarPage */] },
            { title: 'Adicionar', component: __WEBPACK_IMPORTED_MODULE_5__pages_adicionar_adicionar__["a" /* AdicionarPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/caio/Documentos/MinisMobile/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/caio/Documentos/MinisMobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.modelo.toLowerCase().includes(terms);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AdicionarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdicionarPage = /** @class */ (function () {
    function AdicionarPage(navCtrl, navParams, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.carrinho = {
            'modelo': '',
            'marca': '',
            'colecao': '',
            'escala': '',
            'ano': ''
        };
    }
    AdicionarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdicionarPage');
    };
    AdicionarPage.prototype.saveCarrinho = function (carrinho) {
        this.http.post('carrinhos', carrinho)
            .subscribe(function (data) {
        });
    };
    AdicionarPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Miniatura adicionada com sucesso!',
            duration: 3000
        });
        toast.present();
    };
    AdicionarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adicionar',template:/*ion-inline-start:"/home/caio/Documentos/MinisMobile/src/pages/adicionar/adicionar.html"*/'<!--\n  Generated template for the SavePage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro de Carrinhos</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-item>\n        <ion-label fixed>Modelo</ion-label>\n        <ion-input type="text" [(ngModel)]="carrinho.modelo"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Marca</ion-label>\n        <ion-input type="text" [(ngModel)]="carrinho.marca"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label fixed>Coleção</ion-label>\n        <ion-input type="text" [(ngModel)]="carrinho.colecao"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label fixed>Escala</ion-label>\n        <ion-input type="text" [(ngModel)]="carrinho.escala"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Ano</ion-label>\n        <ion-input type="text" [(ngModel)]="carrinho.ano"></ion-input>\n      </ion-item>\n\n      <button ion-button full (click)="saveCarrinho(carrinho)" (click)="presentToast(\'bottom\')">Adicionar Carrinho</button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/caio/Documentos/MinisMobile/src/pages/adicionar/adicionar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], AdicionarPage);
    return AdicionarPage;
}());

//# sourceMappingURL=adicionar.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpServiceProvider = /** @class */ (function () {
    function HttpServiceProvider(http) {
        this.http = http;
        this.url = 'https://miniatura-api.herokuapp.com';
        console.log('Hello HttpServiceProvider Provider');
    }
    HttpServiceProvider.prototype.getAll = function (endpoint) {
        return this.http.get(this.url + "/" + endpoint)
            .map(function (res) {
            return res.json();
        });
    };
    HttpServiceProvider.prototype.get = function (endpoint, id) {
        return this.http.get(this.url + "/" + endpoint + "/" + id)
            .map(function (res) {
            return res.json();
        });
    };
    HttpServiceProvider.prototype.post = function (endpoint, resource) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url + "/" + endpoint, resource, options);
        // .map(res => {
        //   return res.json();
        // });
    };
    HttpServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpServiceProvider);
    return HttpServiceProvider;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrinho_service_carrinho_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adicionar_adicionar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editar_editar__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PesquisarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PesquisarPage = /** @class */ (function () {
    function PesquisarPage(navCtrl, navParams, carrinhoService, ActionSheetController, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carrinhoService = carrinhoService;
        this.ActionSheetController = ActionSheetController;
        this.http = http;
        this.descending = false;
        this.column = 'name';
        this.getAll();
    }
    PesquisarPage.prototype.getAll = function () {
        var _this = this;
        this.carrinhoService.load()
            .then(function (data) {
            _this.obj = data;
            _this.result = _this.obj;
        });
    };
    PesquisarPage.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    PesquisarPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__adicionar_adicionar__["a" /* AdicionarPage */]);
    };
    // deleteCarrinho(obj) {
    //   this.carrinhoService.delete(obj)
    //   .then(data => {
    //     this.obj = data;
    //     this.result = this.obj;
    //   });
    // }
    PesquisarPage.prototype.selectMiniatura = function (obj) {
        var _this = this;
        this.ActionSheetController.create({
            title: "" + obj.modelo,
            buttons: [
                {
                    text: 'Editar',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__editar_editar__["a" /* EditarPage */], { CarrinhoId: obj.id });
                    }
                },
                {
                    text: 'Apagar',
                    role: 'destructive',
                    handler: function () {
                        _this.carrinhoService.delete(obj)
                            .subscribe(function (data) {
                        });
                        // this.listaAlunoRef$.remove(aluno.$key);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log("O usuário cancelou o botão selecionado.");
                    }
                }
            ]
        }).present();
    };
    PesquisarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pesquisar',template:/*ion-inline-start:"/home/caio/Documentos/MinisMobile/src/pages/pesquisar/pesquisar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n   Coleção\n    </ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home">\n    <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n    <ion-list text-wrap>\n        <ion-item   *ngFor="let obj of result | search : terms | sort: {property: column, order: order}" (click)="selectMiniatura(obj)">\n         <h2>{{obj.modelo}} - {{obj.marca}} - {{obj.colecao}} - {{obj.ano}} - {{obj.escala}}  </h2>\n       </ion-item> \n     </ion-list>\n     <button ion-fab mini (click)="add()"><ion-icon  name="add"></ion-icon></button>\n</ion-content>'/*ion-inline-end:"/home/caio/Documentos/MinisMobile/src/pages/pesquisar/pesquisar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_carrinho_service_carrinho_service__["a" /* CarrinhoServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */]])
    ], PesquisarPage);
    return PesquisarPage;
}());

//# sourceMappingURL=pesquisar.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CarrinhoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CarrinhoServiceProvider = /** @class */ (function () {
    function CarrinhoServiceProvider(http) {
        this.http = http;
        this.url = 'https://miniatura-api.herokuapp.com/carrinhos';
        console.log("Hello HeroService");
    }
    CarrinhoServiceProvider.prototype.load = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http
                .get("https://miniatura-api.herokuapp.com/carrinhos")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    CarrinhoServiceProvider.prototype.delete = function (obj) {
        return this.http.delete(this.url + "/" + obj.id)
            .map(function (res) {
            return res.json();
        });
    };
    CarrinhoServiceProvider.prototype.put = function (obj) {
        return this.http.put(this.url + "/" + obj.id, obj)
            .map(function (res) {
            return res.json();
        });
    };
    CarrinhoServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], CarrinhoServiceProvider);
    return CarrinhoServiceProvider;
}());

//# sourceMappingURL=carrinho-service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map
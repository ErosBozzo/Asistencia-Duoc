(self["webpackChunkRegristrApp"] = self["webpackChunkRegristrApp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 2217:
/*!*******************************************!*\
  !*** ./src/app/model/NivelEducacional.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NivelEducacional": () => (/* binding */ NivelEducacional)
/* harmony export */ });
class NivelEducacional {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}


/***/ }),

/***/ 9139:
/*!**********************************!*\
  !*** ./src/app/model/Persona.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Persona": () => (/* binding */ Persona)
/* harmony export */ });
/* harmony import */ var _NivelEducacional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NivelEducacional */ 2217);

class Persona {
    constructor() {
        this.nombre = '';
        this.apellido = '';
        this.nivelEducacional = new _NivelEducacional__WEBPACK_IMPORTED_MODULE_0__.NivelEducacional(0, '');
        this.fechaNacimiento = '';
    }
}


/***/ }),

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _model_Persona__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/Persona */ 9139);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 7238);








let HomePage = class HomePage {
    constructor(activeroute, router, alertController) {
        this.activeroute = activeroute;
        this.router = router;
        this.alertController = alertController;
        this.nivelesEducacionales = [
            { id: 1, nombre: 'Básica Incompleta' },
            { id: 2, nombre: 'Básica Completa' },
            { id: 3, nombre: 'Media Incompleta' },
            { id: 4, nombre: 'Media Completa' },
            { id: 5, nombre: 'Superior Incompleta' },
            { id: 6, nombre: 'Superior Completa' }
        ];
        this.persona = new _model_Persona__WEBPACK_IMPORTED_MODULE_2__.Persona();
        this.activeroute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
            }
            else {
                this.router.navigate(['/login']);
            }
        });
    }
    ngOnInit() {
        // this.persona.nombre = 'Cristián';
        // this.persona.apellido = 'Gómez';
        // this.persona.nivelEducacional.id = 6;
        // this.persona.fechaNacimiento = '1972-12-26';
    }
    entrarScanner() {
        this.router.navigate(['/qrreader']);
    }
    presentAlert(titulo, mensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: titulo,
                message: mensaje,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('enterState', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                    transform: 'translateY(80%)',
                    opacity: 0
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(1000, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                        transform: 'translateY(0)',
                        opacity: 1
                    }))
                ])
            ])
        ],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --background-size: rgba(255, 184, 0, 1);\n}\n\nion-title {\n  font-size: 0.8em;\n}\n\nion-header {\n  background-color: primary;\n}\n\nion-label {\n  width: 130px;\n}\n\nion-input, ion-select {\n  color: gray;\n  text-align: right;\n}\n\nion-content {\n  --background: url(\"/assets/img/fondohome2.jpg\") no-repeat 100% 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1FQUFBO0FBRUYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICAtLWJhY2tncm91bmQtc2l6ZTogcmdiYSgyNTUsIDE4NCwgMCwgMSk7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbmlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwcmltYXJ5O1xufVxuXG5pb24tbGFiZWwge1xuICB3aWR0aDogMTMwcHg7XG59XG5cbmlvbi1pbnB1dCwgaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvZm9uZG9ob21lMi5qcGcnKSBuby1yZXBlYXQgMTAwJSAxMDAlO1xufVxuXG4iXX0= */");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-title  class=\"ion-text-center ion-text\">\n      Asistencia DUOC\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding-horizontal bg-style\">\n  <ion-title class=\"ion-padding-top\">\n    <ion-label>\n      <h1 class=\"ion-text-center\" style=\"font-size: 40px; color: rgb(255, 213, 0);\">¡Bienvenido!</h1>\n      <p *ngIf=\"usuario\" class=\"ion-text-center\" style=\"font-weight: bold; font-size: 20px; color: rgb(32, 32, 32);\">Usuario: {{ usuario.nombreUsuario }}</p>\n    </ion-label>\n  </ion-title>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <ion-button @enterState shape=\"block\" (click)=\"entrarScanner()\">\n          Asistencia Por QR\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"warning\">\n    <ion-title class=\"ion-text-center ion-text\">\n       Avengers Team\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map
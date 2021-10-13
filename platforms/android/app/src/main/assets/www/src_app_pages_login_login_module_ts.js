(self["webpackChunkRegristrApp"] = self["webpackChunkRegristrApp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 2844:
/*!**********************************!*\
  !*** ./src/app/model/Usuario.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Usuario": () => (/* binding */ Usuario)
/* harmony export */ });
class Usuario {
    constructor() {
        this.nombreUsuario = '';
        this.password = '';
    }
    validarNombreUsuario() {
        if (this.nombreUsuario.trim() === '') {
            return 'Para ingresar al sistema debe ingresar un nombre de usuario.';
        }
        if (this.nombreUsuario.length < 3 || this.nombreUsuario.length > 8) {
            return 'El nombre de usuario debe tener entre 3 y 8 caracteres.';
        }
        if (this.nombreUsuario !== 'Cristian') {
            return 'Usuario incorrecto.';
        }
        return '';
    }
    validarPassword() {
        if (this.password.trim() === '') {
            return 'Para entrar al sistema debe ingresar la contraseña.';
        }
        for (let i = 0; i < this.password.length; i++) {
            if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
                return 'La contraseña debe ser numérica.';
            }
        }
        if (this.password !== '12345') {
            return 'Contraseña incorrecta';
        }
        if (this.password.length === 4) {
            return 'La contraseña debe ser numérica de 4 dígitos.';
        }
        return '';
    }
    validarUsuario() {
        return this.validarNombreUsuario()
            || this.validarPassword();
    }
}


/***/ }),

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Usuario */ 2844);




// Las clases Router y NavigationExtras son necesarias para que la página login le pase el nombre de usuario a la página home

// La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos


let LoginPage = class LoginPage {
    /*
      Para poder trabajar con Router y poder navegar hacia la página "home", debemos primero pasar como
      parámetro e instanciar un objeto de la clase "Router". Fijarse que el tipo de dato, que se pasa en el constructor
      es "Router" con mayúscula, porque se trata de una clase y éstas parten con letra mayúscula,
      mientras que "router" con minúscula es el objeto de esa clase, que usaremos para ejecutar el método "navigate".
    */
    constructor(router, toastController) {
        this.router = router;
        this.toastController = toastController;
        this.usuario = new src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_2__.Usuario();
        this.usuario.nombreUsuario = '';
        this.usuario.password = '';
    }
    ngOnInit() {
        /*
          Las siguientes 3 líneas de código sirven para lo siguiente:
            Caso 1: Si las comentas, la página quedará lista para ingresar el nombre de usuario y la password
            Caso 2: Si dejas las instrucciones sin comentar, entonces entrará inmediatamente a la página home,
              usando el usuario por defecto "cgomezvega" con la password "123". Lo anterior es muy útil
              para el caso en que ya quedó lista la página de login y me interesa probar las otras páginas,
              de este modo se saltará el login y no tendrás que estar digitando los datos todo el tiempo.
        */
        // this.usuario.nombreUsuario = 'cgomezvega';
        // this.usuario.password = '123';
        // this.ingresar();
    }
    ingresar() {
        if (!this.validarUsuario(this.usuario)) {
            return;
        }
        this.mostrarMensaje('¡Bienvenido!');
        const navigationExtras = {
            state: {
                usuario: this.usuario
            }
        };
        this.router.navigate(['/home'], navigationExtras);
    }
    validarUsuario(usuario) {
        const mensajeError = usuario.validarUsuario();
        if (mensajeError) {
            this.mostrarMensaje(mensajeError);
            return false;
        }
        return true;
    }
    recuperarContrasena() {
        this.mensajeContrasena('Su contraseña son los 5 primeros números');
    }
    /**
     * Muestra un toast al usuario
     *
     * @param mensaje Mensaje a presentar al usuario
     * @param duracion Duración el toast, este es opcional
     */
    mostrarMensaje(mensaje, duracion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mensaje,
                duration: duracion ? duracion : 2000
            });
            toast.present();
        });
    }
    mensajeContrasena(mensaje, duracion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mensaje,
                duration: duracion ? duracion : 10000
            });
            toast.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --color: rgba(255, 184, 0, 1);\n  --background: url(\"/assets/img/loginduoc.jpg\") center center fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrRUFBQTtBQUNKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1jb2xvcjogcmdiYSgyNTUsIDE4NCwgMCwgMSk7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvbG9naW5kdW9jLmpwZycpIGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-title class=\"ion-padding-top ion-text-center\">\n    <ion-label>\n      <h1>Asistencia DUOC</h1>\n      <p>Login</p>\n    </ion-label>\n  </ion-title>\n\n  <div @enterState class=\"ion-padding-vertical\">\n\n    <ion-card class=\"ion-text-center ion-padding-vertical\" style=\"border-radius: 25px;\">\n\n      <ion-card-title class=\" ion-text-center\">\n        <ion-label>\n          <h2>¡Bienvenido!</h2>\n        </ion-label>\n      </ion-card-title>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Usuario</ion-label>\n\n          <ion-input type=\"text\" [(ngModel)]=\"usuario.nombreUsuario\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Password</ion-label>\n\n          <ion-input type=\"password\" [(ngModel)]=\"usuario.password\"></ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-col size=\"12\">\n\n            <ion-button shape=\"block\" (click)=\"ingresar()\">Ingresar</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n      \n      <ion-label>\n        <br>\n        <a routerLink=\"\"(click)=\"recuperarContrasena()\">Recuperar Contraseña</a>\n      </ion-label>\n    </ion-card>\n  </div>\n  \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map
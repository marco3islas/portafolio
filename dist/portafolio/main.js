(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/marco/Documentos/portafolio/src/main.ts */"zUnb");


/***/ }),

/***/ "29MQ":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/pages/galeria/galeria.component.ts ***!
  \*********************************************************************/
/*! exports provided: GaleriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaComponent", function() { return GaleriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_portafolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/servicios/portafolio.service */ "6P89");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function GaleriaComponent_app_loading_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function GaleriaComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GaleriaComponent_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.verProyecto(i_r3); })("keyup", function GaleriaComponent_div_8_Template_button_keyup_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.verProyecto(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const portafolio_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", portafolio_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", portafolio_r2.nombre);
} }
class GaleriaComponent {
    constructor(portafolioService, router) {
        this.portafolioService = portafolioService;
        this.router = router;
        this.portafolio = [];
    }
    ngOnInit() {
        this.loading = true;
        this.portafolio = this.portafolioService.getPortafolio();
        this.loading = false;
    }
    verProyecto(idx) {
        this.router.navigate(['/detalles', idx]);
    }
}
GaleriaComponent.ɵfac = function GaleriaComponent_Factory(t) { return new (t || GaleriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servicios_portafolio_service__WEBPACK_IMPORTED_MODULE_1__["PortafolioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GaleriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GaleriaComponent, selectors: [["app-galeria"]], decls: 9, vars: 2, consts: [[1, "animated", "fadeIn", "portafolio", "container-fluid"], [1, "galeria", "grid"], [4, "ngIf"], ["class", "item animated fadeIn fast", "id", "item1", 4, "ngFor", "ngForOf"], ["id", "item1", 1, "item", "animated", "fadeIn", "fast"], [3, "click", "keyup"], [1, "img1", "animated", "fadeIn", 3, "src", "alt"]], template: function GaleriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Aqu\u00ED tengo algunos ejemplos de lo que estoy haciendo. Puedes darles click para verlos funcionando.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GaleriaComponent_app_loading_7_Template, 1, 0, "app-loading", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GaleriaComponent_div_8_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portafolio);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".container-fluid[_ngcontent-%COMP%]{\n  background-color: #141d27;\n  margin-top: 90px;\n  font-family: Roboto, sans-serif;\n  color: white;\n  padding: 20px;\n}\nhr[_ngcontent-%COMP%]{\n  width: 100%;\n}\n.container-fluid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n  color: white;\n  font-size: 18px;\n}\n.galeria[_ngcontent-%COMP%]{\n  display: flex;\n  flex-flow: row wrap;\n  max-width: 95%;\n  width: auto;\n  margin-top: 10px;\n}\n.item[_ngcontent-%COMP%]{\n  margin: 10px;\n  padding: 3px;\n  box-sizing: border-box;\n  border:1px solid transparent;\n  border-radius: 8px;\n}\nbutton[_ngcontent-%COMP%]{\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n}\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  max-width: 300px;\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  transition: all  250ms ease;\n  border-radius: 8px;\n}\nbutton[_ngcontent-%COMP%]:hover{\n    display: block;\n}\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\n  transform: scale(1.05);\n  box-shadow: 1px 1px 4px rgba(0,0,0,.5);\n}\n@media only screen and (max-width: 1100px){\n\n  .galeria[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media only screen and (max-width: 970px){\n  .galeria[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr)\n  }\n\n}\n@media only screen and (max-width: 600px){\n  .galeria[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGVyaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNDQUFzQztBQUN4QztBQUVBOztFQUVFO0lBQ0UsYUFBYTtJQUNiLHFDQUFxQztFQUN2QztBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYjtFQUNGOztBQUVGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYiwwQkFBMEI7RUFDNUI7O0FBRUYiLCJmaWxlIjoiZ2FsZXJpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MWQyNztcbiAgbWFyZ2luLXRvcDogOTBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuaHJ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lci1mbHVpZCBwe1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5nYWxlcmlhe1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaXRlbXtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbmJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuLml0ZW0gaW1ne1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAgMjUwbXMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuYnV0dG9uOmhvdmVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLml0ZW0gaW1nOmhvdmVye1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsMCwwLC41KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpe1xuXG4gIC5nYWxlcmlhIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTcwcHgpe1xuICAuZ2FsZXJpYSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpXG4gIH1cblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gIC5nYWxlcmlhIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "3F0J":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



const _c0 = function () { return ["about"]; };
const _c1 = function () { return ["galeria"]; };
const _c2 = function () { return ["contacto"]; };
class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.mostrar = true;
    }
    ngOnInit() {
    }
    buscarTermino(termino) {
        this.router.navigate(['/buscar', termino]);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 22, vars: 8, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "nav-bar"], [1, "container-fluid"], [3, "routerLink"], ["src", "../../../../assets/img/logoRecorte4.png", "alt", "Logo de Marco Islas", 1, "logo", "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "fas", "fa-bars"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0", "col-6"], [1, "nav-item"], ["routerLinkActive", "active", "id", "aboutLink", 1, "link", 3, "routerLink"], ["routerLinkActive", "active", "id", "galeriaLink", 1, "link", 3, "routerLink"], ["routerLinkActive", "active", "id", "contactoLink", 1, "link", 3, "routerLink"], [1, "d-flex", "col-12", "col-lg-4"], ["type", "search", "placeholder", "Buscar", "aria-label", "Search", 1, "form-control", "me-2", 3, "keyup.enter"], ["buscarTexto", ""], ["type", "submit", 1, "btn", "btn-back", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ACERCA DE MI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "MIS TRABAJOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CONTACTAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function NavbarComponent_Template_input_keyup_enter_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.buscarTermino(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.buscarTermino(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"]], styles: [".nav-bar[_ngcontent-%COMP%]{\n  position: fixed !important;\n  top: 0;\n  left: 0;\n  width: 100%;\n  max-width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: #F8F8F8;\n  filter: drop-shadow(1px 1px 2px black);\n  z-index: 100;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-around;\n}\n.logoBar[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    width: 100%;\n}\n.logo[_ngcontent-%COMP%]{\n  width: 250px;\n  cursor: pointer;\n}\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  font-family:  'Roboto', sans-serif;        \n  color: #2c2c2c;\n  display: inline-block;\n  padding: 8px 8px;\n  text-decoration: none;\n}\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{\n  border-top: 1px solid dodgerblue;\n  background-color: rgba(240, 240,240,.8);\n}\n.active[_ngcontent-%COMP%]{\n  border-top: 1px solid dodgerblue;\n  background-color: rgba(240, 240,240,.8);\n\n}\n.buscar[_ngcontent-%COMP%]{\n  font-size: 18px;\n  border:1px solid dodgerblue;\n  border-radius: 8px;\n  color: black;\n  padding: 3px 2px;\n  width: 80px;\n}\n.btnbuscar[_ngcontent-%COMP%]{\n  border: none;\n  color: white;\n  font-size:18px;\n  background-color: dodgerblue;\n  padding: 3px 0;\n  width: 100px;\n  margin-left: 5px;\n}\n@media only screen and (max-width: 1050px){\n    .logo[_ngcontent-%COMP%]{\n        width: 150px;\n    }\n}\n@media only screen and (max-width: 900px) {\n  .nav-bar[_ngcontent-%COMP%]{\n    width: 100%;\n    flex-direction: column;\n    align-items: flex-start;\n    height: auto;\n    justify-content: flex-start;\n    padding: 10px 20px;\n  }\n  .menu[_ngcontent-%COMP%]{\n    flex-direction: column;\n    padding: 20px 0;\n  }\n.hamburguesa[_ngcontent-%COMP%]{\n    display: inline-block;\n    cursor: pointer;\n}\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsc0NBQXNDO0VBQ3RDLFlBQVk7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHVDQUF1Qzs7QUFFekM7QUFDQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBQ0E7RUFDRTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsZUFBZTtFQUNqQjtBQUNGO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUEiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWJhcntcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAycHggYmxhY2spO1xuICB6LWluZGV4OiAxMDA7XG59XG4ubmF2YmFyLW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5sb2dvQmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubG9nb3tcbiAgd2lkdGg6IDI1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2LWl0ZW0gYXtcbiAgZm9udC1mYW1pbHk6ICAnUm9ib3RvJywgc2Fucy1zZXJpZjsgICAgICAgIFxuICBjb2xvcjogIzJjMmMyYztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHggOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2LWl0ZW0gYTpob3ZlciwgLm5hdi1pdGVtIGE6YWN0aXZlLCAubmF2LWl0ZW0gYTpmb2N1c3tcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGRvZGdlcmJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsMjQwLC44KTtcbn1cbi5hY3RpdmV7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBkb2RnZXJibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLDI0MCwuOCk7XG5cbn1cbi5idXNjYXJ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyOjFweCBzb2xpZCBkb2RnZXJibHVlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogM3B4IDJweDtcbiAgd2lkdGg6IDgwcHg7XG59XG4uYnRuYnVzY2Fye1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOjE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG4gIHBhZGRpbmc6IDNweCAwO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCl7XG4gICAgLmxvZ297XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5uYXYtYmFye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIH1cbiAgLm1lbnV7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gIH1cbi5oYW1idXJndWVzYXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICBcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "5kB9":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/pages/home/home.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    verContacto() {
        this.router.navigate(['/contacto']);
    }
    verPortafolio() {
        this.router.navigate(['/galeria']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 17, vars: 0, consts: [[1, "row", "animated", "fadeIn", "slow", "heroe"], [1, "frase"], [1, "frase-centrar"], [1, "cite"], [1, "botones"], [1, "marker"], [1, "fas", "fa-map-marker-alt"], [1, "animated", "pulse", "btn", "btn-contacto", 3, "click"], [1, "animated", "flash", "btn", "btn-portafolio", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\"La Presencia en internet no es un lujo, es una NECESIDAD.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Soy Marco Antonio Islas Dur\u00E1n...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Y SOY DESARROLLADOR WEB FREELANCE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " CDMX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_13_listener() { return ctx.verContacto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() { return ctx.verPortafolio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".heroe[_ngcontent-%COMP%]{\n    background-color: #35364e;\n    background-image: url('hero.svg');\n    background-repeat: no-repeat;\n    background-position: left center;\n    width: 100%;\n    height: 100vh;\n    margin-top: 70px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    position: absolute;\n}\n@media (max-width: 810px){\n    .heroe[_ngcontent-%COMP%] {\n        height: 100vh;\n        background-position: center top;\n    }\n}\n.frase[_ngcontent-%COMP%]{\n    width: 690px;\n    padding: 20px;\n    background-color: rgba(14,14,14,.9);\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.frase-centrar[_ngcontent-%COMP%]{\n    width: 88%;\n    text-align: left;\n}\n.cite[_ngcontent-%COMP%]{\n    font-size: 2.4rem;\n}\n.frase-centrar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 24px;\n    text-transform: capitalize;\n}\n.frase-centrar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 140.62%;\n}\n.fa-map-marker-alt[_ngcontent-%COMP%]{\n    color: #26A1FD;\n    font-weight: bolder;\n    font-size: 1.1rem;\n\n}\n.botones[_ngcontent-%COMP%]{\n    margin-top: 40px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    font-family: 'Roboto', sans-serif;\n}\n.btn[_ngcontent-%COMP%]{\n    width: 150px;\n    height: 45px;\n    font-size: 24px;\n    justify-content: center;\n    align-items: center;\n    font-family: Roboto, serif;\n    border-radius: 4px;\n    color: white;\n    cursor: pointer;\n    padding-top: 4px;\n    border:1px solid white;\n    transition: all 2ms ease-in-out;\n}\n.botones[_ngcontent-%COMP%]   .btn-portafolio[_ngcontent-%COMP%]{\n  border: 1px solid #832e38;\n    background-color: #7A0513;\n    color: #FFF;\n    margin-left: 10px;\n}\n.marker[_ngcontent-%COMP%]{\n    margin-right: 25px;\n    font-size: 28px;\n}\n.marker[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    font-size: 28px;\n}\n.botones[_ngcontent-%COMP%]   .btn-contacto[_ngcontent-%COMP%]{\n  background-color: dodgerblue;\n}\n.btn[_ngcontent-%COMP%]:hover{\n  border: 2px solid transparent;\n  filter: drop-shadow(0px 0px 1px gray);\n}\n@media only screen and (max-width: 1030px){\n    .frase[_ngcontent-%COMP%]{\n        max-width: 80%;\n        height: auto;\n\n    }\n}\n@media only screen and (max-width: 680px){\n    .frase[_ngcontent-%COMP%]{\n        max-width: 450px;\n        width: 100%;\n    }\n    .frase[_ngcontent-%COMP%]   .frase-centrar[_ngcontent-%COMP%]   .cite[_ngcontent-%COMP%]{\n        font-size: 22px;\n    }\n    .frase[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 20px;\n        letter-spacing: 3px;\n    }\n}\n@media only screen and (max-width: 380px){\n    .frase[_ngcontent-%COMP%]{\n        max-width: 370px;\n        width: 100%;\n    }\n    .frase-centrar[_ngcontent-%COMP%]   .cite[_ngcontent-%COMP%]{\n        font-size: 22px;\n    }\n    .frase-centrar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 20px;\n        letter-spacing: 2px;\n        line-height: 24px;\n    }\n    .botones[_ngcontent-%COMP%]{\n        height: 200px;\n        flex-direction: column-reverse;\n        align-items: flex-start;\n        margin-top: 10px;\n        justify-content: space-around;\n    }\n    .botones[_ngcontent-%COMP%]   .btn-portafolio[_ngcontent-%COMP%]{\n        margin-left: 0;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixpQ0FBMkQ7SUFDM0QsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLCtCQUErQjtJQUNuQztBQUNKO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsK0JBQStCO0FBQ25DO0FBQ0E7RUFDRSx5QkFBeUI7SUFDdkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixxQ0FBcUM7QUFDdkM7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLFlBQVk7O0lBRWhCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtJQUN2QjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCOztBQUVKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNjRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9oZXJvLnN2ZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MTBweCl7XG4gICAgLmhlcm9lIHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICB9XG59XG4uZnJhc2V7XG4gICAgd2lkdGg6IDY5MHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwxNCwxNCwuOSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mcmFzZS1jZW50cmFye1xuICAgIHdpZHRoOiA4OCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jaXRle1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuLmZyYXNlLWNlbnRyYXIgaDF7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmZyYXNlLWNlbnRyYXIgaDV7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMTQwLjYyJTtcbn1cbi5mYS1tYXAtbWFya2VyLWFsdHtcbiAgICBjb2xvcjogIzI2QTFGRDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuXG59XG4uYm90b25lc3tcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cbi5idG57XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzZXJpZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDJtcyBlYXNlLWluLW91dDtcbn1cbi5ib3RvbmVzIC5idG4tcG9ydGFmb2xpb3tcbiAgYm9yZGVyOiAxcHggc29saWQgIzgzMmUzODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0EwNTEzO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1hcmtlcntcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xufVxuLm1hcmtlciBzcGFue1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5ib3RvbmVzIC5idG4tY29udGFjdG97XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG59XG4uYnRuOmhvdmVye1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDFweCBncmF5KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDMwcHgpe1xuICAgIC5mcmFzZXtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcblxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2ODBweCl7XG4gICAgLmZyYXNle1xuICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmZyYXNlIC5mcmFzZS1jZW50cmFyIC5jaXRle1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIC5mcmFzZSBoMXtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpe1xuICAgIC5mcmFzZXtcbiAgICAgICAgbWF4LXdpZHRoOiAzNzBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5mcmFzZS1jZW50cmFyIC5jaXRle1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIC5mcmFzZS1jZW50cmFyIGgxe1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIH1cbiAgICAuYm90b25lc3tcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICAgIC5ib3RvbmVzIC5idG4tcG9ydGFmb2xpb3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG59XG4iXX0= */"] });


/***/ }),

/***/ "6E27":
/*!***************************************************************************!*\
  !*** ./src/app/components/proyecto-tarjeta/proyecto-tarjeta.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProyectoTarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectoTarjetaComponent", function() { return ProyectoTarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProyectoTarjetaComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProyectoTarjetaComponent.ɵfac = function ProyectoTarjetaComponent_Factory(t) { return new (t || ProyectoTarjetaComponent)(); };
ProyectoTarjetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProyectoTarjetaComponent, selectors: [["app-proyecto-tarjeta"]], decls: 2, vars: 0, template: function ProyectoTarjetaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "proyecto-tarjeta works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm95ZWN0by10YXJqZXRhLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "6JgD":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 2, vars: 0, consts: [[1, "loader", "my-5", "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "fa-5x"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "6P89":
/*!*************************************************!*\
  !*** ./src/app/servicios/portafolio.service.ts ***!
  \*************************************************/
/*! exports provided: PortafolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioService", function() { return PortafolioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PortafolioService {
    constructor() {
        this.portafolio = [
            {
                nombre: 'Juanito Travel',
                descripcion: 'Blog para un viajero, donde pueda anotar sus experiencias y compartir sus fotos, el blog puede llevar algo de publicidad para generar ingresos pasivos. Esta pagina web esta hecha con HTML5, CSS3, JavaScript, Jquery, BootStrap',
                img: 'assets/img/blogViajero.png',
                direccion: 'https://blogdel-viajero.netlify.app/index.html',
            },
            {
                nombre: 'Festival-Musica',
                descripcion: 'Este es un proyecto para un festival musical. Esta pagina web esta hecha con HTML5, CSS3, JavaScript',
                img: 'assets/img/festival-musica.webp',
                direccion: 'https://rock-djm-festival.netlify.app/',
            },
            {
                nombre: 'Mascotas Exchange',
                descripcion: 'Pagina web que puede servir como blog o tienda hecha con HTML5, CSS3 y JavaScript.',
                img: 'assets/img/mascotas.webp',
                direccion: 'https://mascotaexchange.netlify.app/'
            },
            {
                nombre: 'BUSCANDO CASA',
                descripcion: 'Pagina que podria servir para bienes raices, realizada con HTML5, CSS3 y JavaScript.',
                img: 'assets/img/buscandocasas.png',
                direccion: 'https://buscandocasa.netlify.app/'
            },
            {
                nombre: 'Blog De Cafe',
                descripcion: 'Blog de una amante del cafe hecho con HTML5, CSS3',
                img: 'assets/img/barraCafe.png',
                direccion: 'https://barra-cafe.netlify.app',
            },
            {
                nombre: 'Rento Bicis',
                descripcion: 'Pagina para renta de bicis y venta de souvenirs hecha con HTML5, Jquery, CSS3, JavaScript.',
                img: 'assets/img/bicis.webp',
                direccion: 'https://rentobicis.netlify.app/',
            },
            {
                nombre: 'Mis Heroes',
                descripcion: 'Aplicacion hecha en Angular, con HTML5, CSS3, TypeScript y que se conecta a la base de datos de Marvel Comics.',
                img: 'assets/img/heroesApp.png',
                direccion: 'https://mis-heroes.netlify.app/'
            },
            {
                nombre: 'Tenis Rafaga, tienda en linea',
                descripcion: 'Este esta es una idea para una tienda de Tenis en linea esta pagina esta hecha con HTML5, CSS3, CSS GRID, y JavaScript.',
                img: 'assets/img/tenisRafaga.png',
                direccion: 'https://tenisrafaga.netlify.app/',
            },
            {
                nombre: 'Cafeteria Mi Lugar',
                descripcion: 'El sitio web de Cafeteria mi Lugar es una pagina donde se muestra un ejemplo de un lugar comodo y agradable para pasar el rato con los amigos con un ejemplo de menus y fotos de las personas que frecuentan Mi Lugar hecho con HTML5, CSS3, JavaScript',
                img: 'assets/img/cafeteriaMilugar.png',
                direccion: 'https://cafe-mi-lugar.netlify.app/#/about',
            },
            {
                nombre: 'Blog de Viajes',
                descripcion: 'Blog de viajes: Otro ejemplo de como quedaria una pagina web para una agencia de viajes, hecha con:  HTML5, CSS3, JavaScript, Jquery',
                img: 'assets/img/blogViajes.png',
                direccion: 'https://blogde-viajes.netlify.app/',
            },
            {
                nombre: 'Ahorcado',
                descripcion: 'El tipico juego del Ahorcado, hecho en React',
                img: 'assets/img/ahorcado2.png',
                direccion: 'https://ahorcado-marco3islas.netlify.app/',
            },
            {
                nombre: 'Mi bateria',
                descripcion: 'App que emula una bateria, hecha HTML, CSS# y JavaScript',
                img: 'assets/img/mi-bateria.png',
                direccion: 'https://mibateria.netlify.app/',
            },
            {
                nombre: 'Simonazo',
                descripcion: 'Juego que simula el clasico Simon Dice, hecho con Jquery',
                img: 'assets/img/simonazo.png',
                direccion: 'https://simonazo.netlify.app/',
            },
        ];
        console.log('Servicio listo para usar!');
    }
    getPortafolio() {
        return this.portafolio;
    }
    getPortafolios(idx) {
        return this.portafolio[idx];
    }
    buscarTermino(termino) {
        const portafolioArr = [];
        termino = termino.toLowerCase();
        for (const portafolio of this.portafolio) {
            const descripcion = portafolio.descripcion.toLowerCase();
            if (descripcion.indexOf(termino) >= 0) {
                portafolioArr.push(portafolio);
            }
        }
        return portafolioArr;
    }
}
PortafolioService.ɵfac = function PortafolioService_Factory(t) { return new (t || PortafolioService)(); };
PortafolioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PortafolioService, factory: PortafolioService.ɵfac });


/***/ }),

/***/ "8mSE":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/pages/detalles/detalles.component.ts ***!
  \***********************************************************************/
/*! exports provided: DetallesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesComponent", function() { return DetallesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicios_portafolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../servicios/portafolio.service */ "6P89");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DetallesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "small", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetallesComponent_div_0_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.verPortafolio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Atras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Online ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r0.proyecto.nombre), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.proyecto.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.proyecto.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.proyecto.direccion, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class DetallesComponent {
    constructor(activatedRoute, router, portafolioService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.portafolioService = portafolioService;
        this.proyecto = [];
        this.activatedRoute.params.subscribe(params => {
            this.proyecto = this.portafolioService.getPortafolios(params['id']);
        });
    }
    verPortafolio() {
        this.router.navigate(['/galeria']);
    }
}
DetallesComponent.ɵfac = function DetallesComponent_Factory(t) { return new (t || DetallesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_portafolio_service__WEBPACK_IMPORTED_MODULE_2__["PortafolioService"])); };
DetallesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetallesComponent, selectors: [["app-detalles"]], decls: 1, vars: 1, consts: [["class", "tarjeta animated fadeIn container-fluid", 4, "ngIf"], [1, "tarjeta", "animated", "fadeIn", "container-fluid"], [1, "titulo"], [1, "fecha"], [1, "row", "align-items-center"], [1, "col", "imagen"], ["alt", "proyecto.nombre", 3, "src"], [1, "col", "descripcion"], [1, "btn", "btnRegresar", 3, "click"], [1, "fas", "fa-arrow-left"], ["target", "_blank", 1, "btn", "btnOnline", 3, "href"], [1, "fas", "fa-globe-americas"]], template: function DetallesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetallesComponent_div_0_Template, 18, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proyecto);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: [".tarjeta[_ngcontent-%COMP%]{\n  width: 100%;\n  padding: 20px;\n  background-color: #141d27;\n  margin-top: 70px;\n}\n.row[_ngcontent-%COMP%]{\n  margin-top: 40px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.col[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n.imagen[_ngcontent-%COMP%]{\n  width: 80%;\n  background-color: transparent;\n}\n.imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    object-fit: contain;\n\n}\n.btn[_ngcontent-%COMP%]{\nbox-sizing: border-box;\nwidth: 40%;\npadding: 12px 16px;\nfont-family: Roboto, serif;\nfont-weight: 400;\ndisplay: inline-block;\nfont-size: inherit;\nmargin-bottom: 10px;\nborder-radius: 8px;\n}\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n.btnRegresar[_ngcontent-%COMP%]{\n background-color: #1e90ff;\n color: #FFF;\n margin-right: 20px;\n}\n.btnOnline[_ngcontent-%COMP%]{\n  background-color: #7A0513;\n  color: #FFF;\n}\n.btn[_ngcontent-%COMP%]:hover{\n  box-shadow: 0 0 2px white;\n  color: white;\n}\n.descripcion[_ngcontent-%COMP%]{\n  max-width: 600px;\n  line-height: 28px;\n  font-size: 18px;\n  color: #fefefe;\n  height: 100%;\n}\n@media only screen and (max-width: 600px){\n    .row[_ngcontent-%COMP%]{\n      grid-template-columns: 1fr;\n      margin: 0 auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsNkJBQTZCO0FBQy9CO0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1COztBQUV2QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLFVBQVU7QUFDVixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLGdCQUFnQjtBQUNoQixxQkFBcUI7QUFDckIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFDQTtJQUNJO01BQ0UsMEJBQTBCO01BQzFCLGNBQWM7SUFDaEI7QUFDSiIsImZpbGUiOiJkZXRhbGxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhcmpldGF7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxZDI3O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuLnJvd3tcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xufVxuLmNvbCB7XG4gIG1hcmdpbjogYXV0byAwO1xufVxuXG4uaW1hZ2Vue1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmltYWdlbiBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcblxufVxuLmJ0bntcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XG53aWR0aDogNDAlO1xucGFkZGluZzogMTJweCAxNnB4O1xuZm9udC1mYW1pbHk6IFJvYm90bywgc2VyaWY7XG5mb250LXdlaWdodDogNDAwO1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xuZm9udC1zaXplOiBpbmhlcml0O1xubWFyZ2luLWJvdHRvbTogMTBweDtcbmJvcmRlci1yYWRpdXM6IDhweDtcbn1cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idG5SZWdyZXNhcntcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU5MGZmO1xuIGNvbG9yOiAjRkZGO1xuIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5idG5PbmxpbmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3QTA1MTM7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmJ0bjpob3ZlcntcbiAgYm94LXNoYWRvdzogMCAwIDJweCB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRlc2NyaXBjaW9ue1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZlZmVmZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gICAgLnJvd3tcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "AytR":
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

/***/ "GIh+":
/*!*******************************************************!*\
  !*** ./src/app/components/buscar/buscar.component.ts ***!
  \*******************************************************/
/*! exports provided: BuscarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarComponent", function() { return BuscarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicios_portafolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/portafolio.service */ "6P89");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BuscarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" No existe el termino: ", ctx_r0.termino, " en la base de datos... :( ");
} }
const _c0 = function () { return ["/galeria"]; };
function BuscarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Atras");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proyecto_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proyecto_r2.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", proyecto_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", proyecto_r2.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", proyecto_r2.direccion, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class BuscarComponent {
    constructor(activatedRoute, portafolioService) {
        this.activatedRoute = activatedRoute;
        this.portafolioService = portafolioService;
        this.proyecto = [];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.termino = params['termino'];
            this.proyecto = this.portafolioService.buscarTermino(params['termino']);
            console.log('termino');
        });
    }
}
BuscarComponent.ɵfac = function BuscarComponent_Factory(t) { return new (t || BuscarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_portafolio_service__WEBPACK_IMPORTED_MODULE_2__["PortafolioService"])); };
BuscarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuscarComponent, selectors: [["app-buscar"]], decls: 7, vars: 5, consts: [[1, "container", "py-4", "animated", "fadeIn"], ["class", "alert", 4, "ngIf"], ["class", "tarjeta my-4", 4, "ngFor", "ngForOf"], [1, "alert"], [1, "tarjeta", "my-4"], [1, "titulo"], [1, "fecha"], [1, "row"], [1, "col-12", "col-lg-6"], ["alt", "proyecto.nombre", 1, "img-thumbnail", 3, "src"], [1, "col-12", "col-lg-6", "descripcion", "my-3"], [1, "btn", "btnRegresar", 3, "routerLink"], [1, "fas", "fa-arrow-left"], ["target", "_blank", 1, "btn", "btnOnline", 3, "href"], [1, "fas", "fa-globe-americas"]], template: function BuscarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BuscarComponent_div_5_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BuscarComponent_div_6_Template, 18, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Buscar: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.termino), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proyecto.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyecto);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: [".tarjeta[_ngcontent-%COMP%]{\n  width: auto;\n  height: auto;\n}\n.row[_ngcontent-%COMP%]{\n  margin-top: 40px;\n  display: flex;\n  justify-content: space-around;\n}\n.alert[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  margin-bottom: 100%;\n  background-color: #ab2e45;\n  padding: 4px;\n  font-size: inherit;\n  color: white;\n}\n.btn[_ngcontent-%COMP%]{\nbox-sizing: border-box;\npadding: 12px 16px;\nfont-family: Roboto, serif;\nfont-weight: 400;\ndisplay: inline-block;\nfont-size: inherit;\nmargin-bottom: 10px;\nborder-radius: 8px;\n}\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n.btnRegresar[_ngcontent-%COMP%]{\n background-color: #1e90ff;\n color: #FFF;\n margin-right: 20px;\n}\n.btnOnline[_ngcontent-%COMP%]{\n  background-color: #7A0513;\n  color: #FFF;\n}\n.btn[_ngcontent-%COMP%]:hover{\n  box-shadow: 0 0 2px white;\n  color: white;\n}\n.descripcion[_ngcontent-%COMP%]{\n  max-width: 600px;\n  line-height: 28px;\n  font-size: 18px;\n  color: #fefefe;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c2Nhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsZ0JBQWdCO0FBQ2hCLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYzs7QUFFaEIiLCJmaWxlIjoiYnVzY2FyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50YXJqZXRhe1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnJvd3tcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5hbGVydHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiMmU0NTtcbiAgcGFkZGluZzogNHB4O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bntcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5wYWRkaW5nOiAxMnB4IDE2cHg7XG5mb250LWZhbWlseTogUm9ib3RvLCBzZXJpZjtcbmZvbnQtd2VpZ2h0OiA0MDA7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5mb250LXNpemU6IGluaGVyaXQ7XG5tYXJnaW4tYm90dG9tOiAxMHB4O1xuYm9yZGVyLXJhZGl1czogOHB4O1xufVxuYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJ0blJlZ3Jlc2Fye1xuIGJhY2tncm91bmQtY29sb3I6ICMxZTkwZmY7XG4gY29sb3I6ICNGRkY7XG4gbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmJ0bk9ubGluZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdBMDUxMztcbiAgY29sb3I6ICNGRkY7XG59XG4uYnRuOmhvdmVye1xuICBib3gtc2hhZG93OiAwIDAgMnB4IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGVzY3JpcGNpb257XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmVmZWZlO1xuXG59XG4iXX0= */"] });


/***/ }),

/***/ "RUEf":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/buscar/buscar.component */ "GIh+");
/* harmony import */ var _components_pages_pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/pages/about/about.component */ "vTOf");
/* harmony import */ var _components_pages_pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/pages/contacto/contacto.component */ "Xrrk");
/* harmony import */ var _components_pages_pages_detalles_detalles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/pages/detalles/detalles.component */ "8mSE");
/* harmony import */ var _components_pages_pages_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/pages/galeria/galeria.component */ "29MQ");
/* harmony import */ var _components_pages_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/pages/home/home.component */ "5kB9");
/* harmony import */ var _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nopagefound/nopagefound.component */ "sFFq");








const APP_ROUTES = [
    { path: 'home', component: _components_pages_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'about', component: _components_pages_pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'galeria', component: _components_pages_pages_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_5__["GaleriaComponent"] },
    { path: 'contacto', component: _components_pages_pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__["ConctactoComponent"] },
    { path: 'detalles/:id', component: _components_pages_pages_detalles_detalles_component__WEBPACK_IMPORTED_MODULE_4__["DetallesComponent"] },
    { path: 'buscar/:termino', component: _components_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_1__["BuscarComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_7__["NopagefoundComponent"] },
];
const APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES, {
    useHash: true,
    scrollPositionRestoration: 'enabled'
});


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "3F0J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'portafolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Xrrk":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/pages/contacto/contacto.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConctactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConctactoComponent", function() { return ConctactoComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ConctactoComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ingresa tu nombre con un minimo de 5 letras");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConctactoComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ingresa un email Valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ConctactoComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ingresa al menos tres palabras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ConctactoComponent {
    constructor(fb) {
        this.fb = fb;
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
        this.crearFormulario();
    }
    ngOnInit() { }
    get nameNoValido() {
        return this.forma.get('name').invalid && this.forma.get('name').touched;
    }
    get emailNoValido() {
        return this.forma.get('email').invalid && this.forma.get('email').touched;
    }
    get comentariosNoValido() {
        return this.forma.get('comentarios').invalid && this.forma.get('comentarios').touched;
    }
    crearFormulario() {
        this.forma = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            comentarios: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
        });
    }
    guardar() {
        if (this.forma.invalid) {
            return Object.values(this.forma.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        // Posteo de la informacion
        this.forma.reset();
    }
}
ConctactoComponent.ɵfac = function ConctactoComponent_Factory(t) { return new (t || ConctactoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
ConctactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConctactoComponent, selectors: [["app-contacto"]], decls: 37, vars: 10, consts: [[1, "container", "contenedor-contacto"], [1, "row", "contacto", "container-sm-fluid", "container"], [1, "mb-5", "col-12", "animated", "fadeIn", "fast"], ["autocomplete", "off", "action", "marco3islas@gmail.com", 3, "formGroup", "ngSubmit"], ["for", "name", 1, "form-label", "text-light"], ["type", "text", "id", "name", "formControlName", "name", "aria-describedby", "name", 1, "form-control"], ["id", "name", 1, "form-text"], ["class", "text-danger", 4, "ngIf"], ["for", "email", 1, "form-label", "text-light"], ["type", "email", "id", "email", "formControlName", "email", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "comentarios", 1, "form-label", "text-light"], ["formControlName", "comentarios", "id", "comentarios", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "mt-3"], [1, "mt-5", "col-12", "datosContacto", "container-fluid", "py-4", "align-items-center"], [1, "info", "email"], [1, "fa", "fa-envelope"], [1, "fas", "fa-at"], [1, "fab", "fa-google"], [1, "info", "telegram"], [1, "fab", "fa-telegram"], [1, "info", "github"], [1, "fab", "fa-github"], [1, "text-danger"]], template: function ConctactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ConctactoComponent_Template_form_ngSubmit_6_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Nunca compartiremos tus datos con alguien.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ConctactoComponent_small_12_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ConctactoComponent_small_16_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Comentarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ConctactoComponent_small_21_Template, 2, 0, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " marco3islas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "mail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " 55 50 69 31 86 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " https://github.com/marco3islas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.forma);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.nameNoValido);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameNoValido);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.emailNoValido);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.emailNoValido);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.comentariosNoValido);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.comentariosNoValido);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".contenedor-contacto[_ngcontent-%COMP%]{\n   margin-top: 110px;\n}\n.datosContacto[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    font-size: 25px;\n}\n.datosContacto[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .datosContacto[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]{\n    color: dodgerblue;\n\n}\n@media only screen and (max-width: 450px){\n    .datosContacto[_ngcontent-%COMP%]{\n        font-size: 14px;\n\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxpQkFBaUI7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJO1FBQ0ksZUFBZTs7SUFFbkI7O0FBRUoiLCJmaWxlIjoiY29udGFjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yLWNvbnRhY3Rve1xuICAgbWFyZ2luLXRvcDogMTEwcHg7XG59XG4uZGF0b3NDb250YWN0b3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLmRhdG9zQ29udGFjdG8gLmZhLCAuZGF0b3NDb250YWN0byAuZmFie1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcbiAgICAuZGF0b3NDb250YWN0b3tcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgfVxuICAgIFxufVxuXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ "RUEf");
/* harmony import */ var _servicios_portafolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicios/portafolio.service */ "6P89");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "3F0J");
/* harmony import */ var _components_proyecto_tarjeta_proyecto_tarjeta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/proyecto-tarjeta/proyecto-tarjeta.component */ "6E27");
/* harmony import */ var _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nopagefound/nopagefound.component */ "sFFq");
/* harmony import */ var _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shared/loading/loading.component */ "6JgD");
/* harmony import */ var _components_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/buscar/buscar.component */ "GIh+");
/* harmony import */ var _components_pages_pages_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/pages.module */ "sFyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");

// Rutas

// Servicios

// Componentes










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _servicios_portafolio_service__WEBPACK_IMPORTED_MODULE_2__["PortafolioService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routes__WEBPACK_IMPORTED_MODULE_1__["APP_ROUTING"],
            _components_pages_pages_module__WEBPACK_IMPORTED_MODULE_10__["PagesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_9__["BuscarComponent"],
        _components_proyecto_tarjeta_proyecto_tarjeta_component__WEBPACK_IMPORTED_MODULE_6__["ProyectoTarjetaComponent"],
        _nopagefound_nopagefound_component__WEBPACK_IMPORTED_MODULE_7__["NopagefoundComponent"],
        _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _components_pages_pages_module__WEBPACK_IMPORTED_MODULE_10__["PagesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "sFFq":
/*!******************************************************!*\
  !*** ./src/app/nopagefound/nopagefound.component.ts ***!
  \******************************************************/
/*! exports provided: NopagefoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NopagefoundComponent", function() { return NopagefoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NopagefoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NopagefoundComponent.ɵfac = function NopagefoundComponent_Factory(t) { return new (t || NopagefoundComponent)(); };
NopagefoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NopagefoundComponent, selectors: [["app-nopagefound"]], decls: 12, vars: 0, consts: [[1, "container-fluid", "pagenofound"], [1, "row", "animated", "fadeIn", "fast"], [1, "container", "col-12"], ["src", "../../assets/img/404.svg", "alt", "Pagina 404, page no found", 1, "img-fluid", "py-5", "animated", "fadeIn", "slow"], ["routerLink", "/home", 1, "btn", "btn-back"]], template: function NopagefoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Pagina no encontrada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Para regresar al inicio, aqui abajo hay un boton.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Regresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".pagenofound[_ngcontent-%COMP%] {\n    margin-top: 70px;\n}\nimg[_ngcontent-%COMP%] {\n    max-width: 600px;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vcGFnZWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2YiLCJmaWxlIjoibm9wYWdlZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlbm9mb3VuZCB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbn1cbmltZyB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "sFyk":
/*!**************************************************!*\
  !*** ./src/app/components/pages/pages.module.ts ***!
  \**************************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "5kB9");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about/about.component */ "vTOf");
/* harmony import */ var _pages_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/galeria/galeria.component */ "29MQ");
/* harmony import */ var _pages_detalles_detalles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/detalles/detalles.component */ "8mSE");
/* harmony import */ var _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contacto/contacto.component */ "Xrrk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        _pages_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_3__["GaleriaComponent"],
        _pages_detalles_detalles_component__WEBPACK_IMPORTED_MODULE_4__["DetallesComponent"],
        _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__["ConctactoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "vTOf":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/pages/about/about.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ "5kB9");


class AboutComponent {
    constructor() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 61, vars: 0, consts: [[1, "animated", "fadeIn", "fast", "jumbotron"], [1, "container-fluid", "animated", "fadeIn"], [1, "descripcion"], [1, "lista"], [1, "ico", "fab", "fa-html5"], [1, "ico", "fab", "fa-css3"], [1, "ico", "fab", "fa-js-square"], [1, "ico", "fab", "fa-angular"], [1, "ico2", "fab", "fa-node-js"], [1, "ico2", "fab", "fa-bootstrap"], [1, "py-3"], [1, "ico2", "fab", "fa-git-square"], [1, "ico2", "fab", "fa-github"], [1, "ico2", "fas", "fa-book-reader"], [1, "ico2", "fas", "fa-chess"], [1, "ico2", "fas", "fa-paw"], [1, "myself"], ["src", "../../../assets/img/yopi.jpg", "alt", "Marco Antonio Islas Duran"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Marco Antonio Islas Duran");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Desarrollo web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Soy un hombre de 45 a\u00F1os. Siempre quise dedicarme a esta maravillosa profesi\u00F3n de la programaci\u00F3n pero por diversos motivos no lograba concretarlo. Ahora decidi hacer de esto mi mondus vivendi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Soy especialista en Front End:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "He estudiado: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " HTML5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "CSS3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "JavaScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Angular 8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Node JS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Jquery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " BootStrap ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Mongo DB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Extras:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Control de versiones con Git ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "y GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Algunos pastiempos que tengo son:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Leer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Jugar Ajedrez ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Sacar a caminar a mi perro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: [".jumbotron[_ngcontent-%COMP%]{\n  box-sizing: border-box;\n  position: absolute;\n  top: 100%;\n  margin-top: 90px;\n  background-color: #141d27;\n  background-repeat: no-repeat;\n  height: auto;\n  background-attachment: fixed;\n  background-position: bottom left;\n  color: white;\n  padding: 20px;\n  font-family: Roboto, Arial, Helvetica, sans-serif;\n}\n.jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  letter-spacing: 10px;\n}\n.jumbotron[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  letter-spacing: 6px;\n  text-transform: uppercase;\n}\n.jumbotron[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n  padding: 20px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.descripcion[_ngcontent-%COMP%]{\n  padding: 10px 0;\n  letter-spacing: 3px;\n  line-height: 3;\n  font-size: 18px;\n  width: auto;\n}\narticle[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\narticle[_ngcontent-%COMP%]   .lista[_ngcontent-%COMP%]{\n  width: 50%;\n  padding: 40px; \n  border: 1px solid dodgerblue;\n  box-sizing: border-box;\n  border-radius: 20px;\n  line-height: 2;\n  background-color: rgba(0, 0, 0,.8);\n  font-size: 16px;\n  letter-spacing: 3px;\n  float: right;\n}\n.fa-html5[_ngcontent-%COMP%], .fa-book-reader[_ngcontent-%COMP%]{\n  color: #e34f26;\n  font-size: 28px;\n}\n.fa-css3[_ngcontent-%COMP%]{\n  color: #002561;\n  font-size: 28px;\n}\n.fa-js-square[_ngcontent-%COMP%]{\n  color: #f7df1e;\n  font-size: 28px;\n}\n.fa-angular[_ngcontent-%COMP%]{\n  color: #b52e31;\n  font-size: 28px;\n}\n.fa-nodejs[_ngcontent-%COMP%], .fa-chess[_ngcontent-%COMP%]{\n  color: #6cc24a;\n  font-size: 28px;\n}\n.fa-bootstrap[_ngcontent-%COMP%]{\n  color: purple;\n  font-size: 28px;\n}\n.fa-php[_ngcontent-%COMP%], .fa-github[_ngcontent-%COMP%], .fa-paw[_ngcontent-%COMP%]{\n  color: #8892be;\n  font-size: 28px;\n}\n.fa-wordpress-simple[_ngcontent-%COMP%]{\n  color: #21759b;\n  font-size: 28px;\n}\n.fa-git-square[_ngcontent-%COMP%]{\n  color: orangered;\n  font-size: 28px;\n}\narticle[_ngcontent-%COMP%]   .myself[_ngcontent-%COMP%]{\n    max-width: 600px;\n    width: 100%;\n    border-radius: 20px;\n    float: left;\n}\narticle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n   width: 100%;\n   border: 1px solid dodgerblue;\n   border-radius: 20px;\n}\n@media only screen and (max-width: 900px){\n    article[_ngcontent-%COMP%]   .lista[_ngcontent-%COMP%]{\n        width: 100%;\n        padding: 8px;\n        list-style: none;\n  }\n@media only screen and (max-width: 400px){\n    .jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        letter-spacing: 2.5px;\n    }\n    .jumbotron[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n        letter-spacing: 2px;\n    }\n    .jumbotron[_ngcontent-%COMP%]   .descripcion[_ngcontent-%COMP%]{\n        letter-spacing: 1.5px;\n        line-height: 1.8;\n        margin-bottom: 8px;\n    }\n    article[_ngcontent-%COMP%]   .lista[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n        color: dodgerblue;\n        font-size: 18px;\n        letter-spacing: 1.2px;\n        text-justify: justify;\n    }\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGFBQWE7RUFDYixpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7R0FDRyxXQUFXO0dBQ1gsNEJBQTRCO0dBQzVCLG1CQUFtQjtBQUN0QjtBQUNBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGdCQUFnQjtFQUN0QjtBQUNGO0lBQ0k7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLHFCQUFxQjtJQUN6QjtBQUNKO0FBQ0EiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmp1bWJvdHJvbntcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDFkMjc7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGxlZnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbi5qdW1ib3Ryb24gaDF7XG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xufVxuLmp1bWJvdHJvbiBoM3tcbiAgbGV0dGVyLXNwYWNpbmc6IDZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5qdW1ib3Ryb24gLmNvbnRhaW5lcntcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uZGVzY3JpcGNpb257XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgbGluZS1oZWlnaHQ6IDM7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IGF1dG87XG59XG5hcnRpY2xle1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuYXJ0aWNsZSAubGlzdGF7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDQwcHg7IFxuICBib3JkZXI6IDFweCBzb2xpZCBkb2RnZXJibHVlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLC44KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uZmEtaHRtbDUsIC5mYS1ib29rLXJlYWRlcntcbiAgY29sb3I6ICNlMzRmMjY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5mYS1jc3Mze1xuICBjb2xvcjogIzAwMjU2MTtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLmZhLWpzLXNxdWFyZXtcbiAgY29sb3I6ICNmN2RmMWU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5mYS1hbmd1bGFye1xuICBjb2xvcjogI2I1MmUzMTtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLmZhLW5vZGVqcywgLmZhLWNoZXNze1xuICBjb2xvcjogIzZjYzI0YTtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLmZhLWJvb3RzdHJhcHtcbiAgY29sb3I6IHB1cnBsZTtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLmZhLXBocCwgLmZhLWdpdGh1YiwgLmZhLXBhd3tcbiAgY29sb3I6ICM4ODkyYmU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5mYS13b3JkcHJlc3Mtc2ltcGxle1xuICBjb2xvcjogIzIxNzU5YjtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLmZhLWdpdC1zcXVhcmV7XG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbmFydGljbGUgLm15c2VsZntcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5hcnRpY2xlIGltZ3tcbiAgIHdpZHRoOiAxMDAlO1xuICAgYm9yZGVyOiAxcHggc29saWQgZG9kZ2VyYmx1ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcbiAgICBhcnRpY2xlIC5saXN0YXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XG4gICAgLmp1bWJvdHJvbiBoMXtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICAgIH1cbiAgICAuanVtYm90cm9uIGgze1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIH1cbiAgICAuanVtYm90cm9uIC5kZXNjcmlwY2lvbntcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIGFydGljbGUgLmxpc3RhIGgze1xuICAgICAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gICAgICAgIHRleHQtanVzdGlmeToganVzdGlmeTtcbiAgICB9XG59XG59XG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
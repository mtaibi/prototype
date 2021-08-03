(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/m2+":
/*!******************************************************************************************************************!*\
  !*** ./src/app/methodik-artefakt-design-science-research/methodik-artefakt-design-science-research.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: MethodikArtefaktDesignScienceResearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodikArtefaktDesignScienceResearchComponent", function() { return MethodikArtefaktDesignScienceResearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class MethodikArtefaktDesignScienceResearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
MethodikArtefaktDesignScienceResearchComponent.ɵfac = function MethodikArtefaktDesignScienceResearchComponent_Factory(t) { return new (t || MethodikArtefaktDesignScienceResearchComponent)(); };
MethodikArtefaktDesignScienceResearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MethodikArtefaktDesignScienceResearchComponent, selectors: [["app-erklaerung-artefakt-design-science-research"]], decls: 2, vars: 0, template: function MethodikArtefaktDesignScienceResearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Die Forschungsfrage wird in der vorliegenden Seminararbeit anhand von vorhandener Literatur zu Entwurfsmustern, objektorientierter Programmierung sowie der Dokumentation zu Angular betrachtet. Die praktische Umsetzung erfolgt anhand eines in Angular programmierten Prototypen, der die im Folgenden beschriebenen Methoden zur Datenbindung sowie Datenhaltung demonstriert. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Programmieren\Hausarbeit\hausarbeit---sIE-T\hausarbeit-strategische-it-entwicklung-und-trends\src\main.ts */"zUnb");


/***/ }),

/***/ "0G2L":
/*!**********************************************************!*\
  !*** ./src/app/dozent-detail/dozent-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: DozentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DozentDetailComponent", function() { return DozentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");



function DozentDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dozent name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DozentDetailComponent_div_0_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.dozent.nachname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r0.dozent.nachname), " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.dozent.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.dozent.nachname);
} }
class DozentDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
DozentDetailComponent.ɵfac = function DozentDetailComponent_Factory(t) { return new (t || DozentDetailComponent)(); };
DozentDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DozentDetailComponent, selectors: [["app-dozent-detail"]], inputs: { dozent: "dozent" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["for", "dozent-vorname"], ["id", "dozent-name", "placeholder", "nachname", 3, "ngModel", "ngModelChange"]], template: function DozentDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DozentDetailComponent_div_0_Template, 12, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dozent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3plbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "0gVH":
/*!**************************************************!*\
  !*** ./src/app/studenten/studenten.component.ts ***!
  \**************************************************/
/*! exports provided: StudentenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentenComponent", function() { return StudentenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");


class StudentenComponent {
    constructor() {
        this.student = {
            id: 1,
            vorname: 'Murad',
            nachname: 'Taibi',
            matrikelnummer: 490215
        };
    }
    ngOnInit() {
    }
}
StudentenComponent.ɵfac = function StudentenComponent_Factory(t) { return new (t || StudentenComponent)(); };
StudentenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentenComponent, selectors: [["app-studenten"]], decls: 23, vars: 4, consts: [["for", "studentNachname"], ["id", "studentNachnameId", 3, "ngModel", "ngModelChange"], ["for", "studentVorname"], ["id", "studentVornameId", 3, "ngModel", "ngModelChange"]], template: function StudentenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Geben Sie die Daten des Studenten ein: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nachname: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentenComponent_Template_input_ngModelChange_9_listener($event) { return ctx.student.nachname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Vorname: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentenComponent_Template_input_ngModelChange_14_listener($event) { return ctx.student.vorname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Two-Way-Databinding stellt in beide Richtungen die Verbindung zwischen den HTML-Elementen im HTML-Dokument und in Template-Dateien sowie den Daten und dem Code in der Anwendung her.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ihre oben gemachte Eingabe lautet: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.student.nachname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.student.vorname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.student.vorname, " ", ctx.student.nachname, "\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50ZW4uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "7Ufg":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "HeVh");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");









class MainNavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["app-main-nav"]], decls: 33, vars: 4, consts: [[1, "sidenav-container"], ["fixedInViewport", "", "mode", "side", "disableClose", "true", 1, "sidenav", 3, "opened"], ["drawer", ""], ["routerLink", "/einleitung", "routerLinkActive", "active"], ["routerLink", "/erklaerung-mvc-mvvm-etc", "routerLinkActive", "active"], ["routerLink", "/methodik-artefakt-design-science-research", "routerLinkActive", "active"], ["routerLink", "/forschungsfrage", "routerLinkActive", "active"], ["routerLink", "/angular", "routerLinkActive", "active"], ["routerLink", "/architektur-konzept", "routerLinkActive", "active"], ["routerLink", "/datenbindung", "routerLinkActive", "active"], ["routerLink", "/one-way-binding", "routerLinkActive", "active"], ["routerLink", "/two-way-binding", "routerLinkActive", "active"], ["routerLink", "/datenhaltung", "routerLinkActive", "active"], ["routerLink", "/rest-crud-http", "routerLinkActive", "active"]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Gliederung");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "1.) Einleitung");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "1.1) Erkl\u00E4rung MVC, MVVM, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "1.2) Methodik / Artefakt (Design Science Research)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "1.3) (Forschungs)frage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "2.) Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "2.1) Architektur und Konzept");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "3.) Datenbindung");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "3.1) One-Way-Binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "3.2) Two-Way-Binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "4.) Datenhaltung");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "4.1) HTTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Kapitelinhalt");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("opened", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx.isHandset$) ? "dialog" : "navigation");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\nmat-sidenav[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%] {\n  padding: 5px;\n\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-color: #3f525c;\n  color: #fff;\n  text-align: center;\n}\n\na[_ngcontent-%COMP%] {\n\n  border-radius: 2px;\n  padding: 1rem;\n  font-size: 1.2rem;\n  text-decoration: none;\n  display: inline-block;\n  color: white;\n  text-align: left;\n  width: 100%;\n  min-width: 70px;\n  margin: .5rem auto;\n  box-sizing: border-box;\n}\n\na[_ngcontent-%COMP%]:hover {\n  background-color: #000;\n  color: #fff;\n}\n\na[_ngcontent-%COMP%]:active {\n  background-color: #000;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZOztBQUVkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiIiwiZmlsZSI6Im1haW4tbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG5tYXQtc2lkZW5hdiwgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gIHBhZGRpbmc6IDVweDtcblxufVxuXG5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUyNWM7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEge1xuXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIG1hcmdpbjogLjVyZW0gYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5hOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5cblxuXG4iXX0= */"] });


/***/ }),

/***/ "9doj":
/*!************************************************!*\
  !*** ./src/app/dozenten/dozenten.component.ts ***!
  \************************************************/
/*! exports provided: DozentenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DozentenComponent", function() { return DozentenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _dozent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dozent.service */ "z00b");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/form.component */ "urH6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");




function DozentenComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DozentenComponent_li_9_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const dozent_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSelect(dozent_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dozent_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", dozent_r1 === ctx_r0.selectedDozent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dozent_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", dozent_r1.vorname, ", ", dozent_r1.nachname, " ");
} }
class DozentenComponent {
    constructor(dozentService) {
        this.dozentService = dozentService;
        this.dozenten = [];
        this.selectedDozent = this.newDozent;
    }
    ngOnInit() {
        this.getDozenten();
    }
    onSelect(dozent) {
        this.selectedDozent = dozent;
    }
    getDozenten() {
        this.dozentService.getDozenten()
            .subscribe(dozenten => this.dozenten = dozenten);
    }
    createDozent() {
        this.dozentService.create(this.newDozent);
    }
}
DozentenComponent.ɵfac = function DozentenComponent_Factory(t) { return new (t || DozentenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dozent_service__WEBPACK_IMPORTED_MODULE_1__["DozentService"])); };
DozentenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DozentenComponent, selectors: [["app-dozenten"]], decls: 11, vars: 1, consts: [[1, "dozenten"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "badge"]], template: function DozentenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dozenten - \u00DCbersicht (nach einer Eingabe bitte mit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "F5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " aktualisieren! Sorry, nicht genug Zeit gehabt und dazu schlecht den Code schlecht strukturiert :-(... )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DozentenComponent_li_9_Template, 4, 5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dozenten);
    } }, directives: [_form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".dozenten[_ngcontent-%COMP%] {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.dozenten[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.dozenten[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  color: #2c3a41;\r\n  background-color: #e6e6e6;\r\n  left: .1em;\r\n}\r\n.dozenten[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n.dozenten[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\r\n  background-color: #505050;\r\n  color: white;\r\n}\r\n.dozenten[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:active {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n.dozenten[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color:#405061;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  padding: .5rem;\r\n  margin-right: 2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvemVudGVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJkb3plbnRlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvemVudGVuIHtcclxuICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTVlbTtcclxufVxyXG4uZG96ZW50ZW4gbGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gIG1hcmdpbjogLjVlbTtcclxuICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgaGVpZ2h0OiAxLjZlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmRvemVudGVuIGxpOmhvdmVyIHtcclxuICBjb2xvcjogIzJjM2E0MTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gIGxlZnQ6IC4xZW07XHJcbn1cclxuLmRvemVudGVuIGxpLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmRvemVudGVuIGxpLnNlbGVjdGVkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MDUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZG96ZW50ZW4gbGkuc2VsZWN0ZWQ6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmRvemVudGVuIC5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0xcHg7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGhlaWdodDogMS44ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG59XHJcbmlucHV0IHtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "9t1U":
/*!************************************************************!*\
  !*** ./src/app/rest-crud-http/rest-crud-http.component.ts ***!
  \************************************************************/
/*! exports provided: RestCrudHttpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestCrudHttpComponent", function() { return RestCrudHttpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _dozenten_dozenten_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dozenten/dozenten.component */ "9doj");


class RestCrudHttpComponent {
    constructor() { }
    ngOnInit() {
    }
}
RestCrudHttpComponent.ɵfac = function RestCrudHttpComponent_Factory(t) { return new (t || RestCrudHttpComponent)(); };
RestCrudHttpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RestCrudHttpComponent, selectors: [["app-rest-crud-http"]], decls: 9, vars: 0, template: function RestCrudHttpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mit der Version 4.3.1 wurde in Angular eine neue Version des HttpClient einge-f\u00FChrt, der sich am f\u00FCr eine Web-Anwendung typischen Einsatz orientiert und um den HttpInterceptor erweitert wurde ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " und das Abfangen von Http-Request sowie Http-Response gestattet. Dies erm\u00F6glicht dem Programmierer die entsprechenden Parameter und Header weiter zu spezifizieren und darauf reagieren zu k\u00F6nnen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Beispielsweise k\u00F6nnen so Diagnose-, Zustands-, Authentifizierunginformationen oder auch Fehlerbehandlungen eingebunden werden. Ein klassisches Beispiel ist hier zum Beispiel die Einbindung von Ladebalken w\u00E4hrend eines Ladevorgangs. Durch die einmalige Einbindung des HttpInterceptors in die Root-Komponente einer Anwendung ist dieser systemweit nutzbar und kann in flexibel in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " entsprechende Module eingebunden werden, beispielsweise um einen tr\u00E4gen Ladevor-gang dieses Moduls untersuchen zu k\u00F6nnen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-dozenten");
    } }, directives: [_dozenten_dozenten_component__WEBPACK_IMPORTED_MODULE_1__["DozentenComponent"]], encapsulation: 2 });


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
    production: true,
    dozentEndpoint: 'https://mtaibi.github.io/hausarbeit/'
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

/***/ "IUpW":
/*!**************************************************************!*\
  !*** ./src/app/forschungsfrage/forschungsfrage.component.ts ***!
  \**************************************************************/
/*! exports provided: ForschungsfrageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForschungsfrageComponent", function() { return ForschungsfrageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class ForschungsfrageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForschungsfrageComponent.ɵfac = function ForschungsfrageComponent_Factory(t) { return new (t || ForschungsfrageComponent)(); };
ForschungsfrageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForschungsfrageComponent, selectors: [["app-forschungsfrage"]], decls: 3, vars: 0, consts: [["src", "assets/Logo.jpg", "alt", ""]], template: function ForschungsfrageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wie kann mit Angular der Datenfluss gestaltet und dabei der Datenverbrauch minimiert werden? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ "Ise/":
/*!******************************************!*\
  !*** ./src/app/fazit/fazit.component.ts ***!
  \******************************************/
/*! exports provided: FazitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FazitComponent", function() { return FazitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class FazitComponent {
    constructor() { }
    ngOnInit() {
    }
}
FazitComponent.ɵfac = function FazitComponent_Factory(t) { return new (t || FazitComponent)(); };
FazitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FazitComponent, selectors: [["app-fazit"]], decls: 2, vars: 0, template: function FazitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " fazit works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "JcXi":
/*!**************************************************************!*\
  !*** ./src/app/one-way-binding/one-way-binding.component.ts ***!
  \**************************************************************/
/*! exports provided: OneWayBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneWayBindingComponent", function() { return OneWayBindingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class OneWayBindingComponent {
    constructor() { }
    ngOnInit() {
    }
}
OneWayBindingComponent.ɵfac = function OneWayBindingComponent_Factory(t) { return new (t || OneWayBindingComponent)(); };
OneWayBindingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OneWayBindingComponent, selectors: [["app-one-way-binding"]], decls: 8, vars: 0, consts: [["src", "/assets/oneWayBinding2.jpg", "alt", ""], ["src", "/assets/oneWayBinding1.jpg", "alt", ""]], template: function OneWayBindingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vom Model (title, title2, student, matrikelnummer, dozent): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "In die View (das Ergebnis sehen Sie ganz oben auf der \"Start-HTML\"):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 1);
    } }, encapsulation: 2 });


/***/ }),

/***/ "LJoI":
/*!******************************************************************************!*\
  !*** ./src/app/erklaerung-mvc-mvvm-etc/erklaerung-mvc-mvvm-etc.component.ts ***!
  \******************************************************************************/
/*! exports provided: ErklaerungMvcMvvmEtcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErklaerungMvcMvvmEtcComponent", function() { return ErklaerungMvcMvvmEtcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class ErklaerungMvcMvvmEtcComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErklaerungMvcMvvmEtcComponent.ɵfac = function ErklaerungMvcMvvmEtcComponent_Factory(t) { return new (t || ErklaerungMvcMvvmEtcComponent)(); };
ErklaerungMvcMvvmEtcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErklaerungMvcMvvmEtcComponent, selectors: [["app-erklaerung-mvc-mvvm-etc"]], decls: 3, vars: 0, consts: [["src", "/assets/MVC.jpg", "alt", "image"]], template: function ErklaerungMvcMvvmEtcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Der \u00FCberwiegende Teil der Funktionalit\u00E4ten von objektorientierten Systemen spielt sich im Zusammenspiel von Gesch\u00E4ftslogik, Ansicht sowie Steuerung mit dem User ab. Das wichtigste Architekturmuster f\u00FCr die Pr\u00E4sentation von objektorientierten Applikatio-nen stellt hierbei die MVC-Architektur dar. Das Model steht hierbei f\u00FCr die Daten der Anwendung sowie alle Operationen darauf wie beispielsweise deren Speicherung. Die Aufgabe der View besteht in der Darstellung der Daten des Models. Der Controller nimmt schlussendlich die Eingaben des Users entgegen, leitet diese an die Views sowie an das Model weiter und verbindet dadurch das Model mit dem Nutzer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ "PSc1":
/*!********************************************************!*\
  !*** ./src/app/datenbindung/datenbindung.component.ts ***!
  \********************************************************/
/*! exports provided: DatenbindungComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatenbindungComponent", function() { return DatenbindungComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class DatenbindungComponent {
    constructor() { }
    ngOnInit() {
    }
}
DatenbindungComponent.ɵfac = function DatenbindungComponent_Factory(t) { return new (t || DatenbindungComponent)(); };
DatenbindungComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatenbindungComponent, selectors: [["app-datenbindung"]], decls: 10, vars: 0, consts: [["src", "/assets/Datenbindung.jpg", "alt", ""]], template: function DatenbindungComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Datenbindungen sind in Vorlagen eingebettete Ausdr\u00FCcke, die ausgewertet werden, um dynamische Inhalte im HTML-Dokument zu erzeugen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Datenbindungen stellen die Verbindung zwischen den HTML-Elementen im HTML Dokument und in Template-Dateien mit den Daten und dem Code in der Anwendung.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Datenbindungen werden angewendet als Attribute auf HTML-Elemente oder als spezielle Zeichenfolgen von Zeichen in Zeichenketten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ "SvGC":
/*!**********************************************************************!*\
  !*** ./src/app/architektur-konzept/architektur-konzept.component.ts ***!
  \**********************************************************************/
/*! exports provided: ArchitekturKonzeptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitekturKonzeptComponent", function() { return ArchitekturKonzeptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class ArchitekturKonzeptComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArchitekturKonzeptComponent.ɵfac = function ArchitekturKonzeptComponent_Factory(t) { return new (t || ArchitekturKonzeptComponent)(); };
ArchitekturKonzeptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArchitekturKonzeptComponent, selectors: [["app-architektur-konzept"]], decls: 2, vars: 0, template: function ArchitekturKonzeptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "7Ufg");


class AppComponent {
    constructor() {
        this.title = 'Hausarbeit - strategische IT-Entwicklung & Trends';
        this.title2 = 'Datenbindung und Datenhaltung mit Angular';
        this.student = 'Student: Murad Taibi';
        this.matrikelnummer = 'Matrikelnummer: 490215';
        this.dozent = 'Dozent: Prof. Dr. Klaus Wilderotter';
        this.opened = false;
    }
    log(state) {
        console.log(state);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 5, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-main-nav");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.student);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.matrikelnummer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dozent);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__["MainNavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "WJOG":
/*!**************************************************************!*\
  !*** ./src/app/two-way-binding/two-way-binding.component.ts ***!
  \**************************************************************/
/*! exports provided: TwoWayBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoWayBindingComponent", function() { return TwoWayBindingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _studenten_studenten_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../studenten/studenten.component */ "0gVH");


class TwoWayBindingComponent {
    constructor() {
        this.name = "";
    }
    ngOnInit() {
    }
}
TwoWayBindingComponent.ɵfac = function TwoWayBindingComponent_Factory(t) { return new (t || TwoWayBindingComponent)(); };
TwoWayBindingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwoWayBindingComponent, selectors: [["app-two-way-binding"]], decls: 6, vars: 0, template: function TwoWayBindingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-studenten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Two-Way-Databinding stellt die Verbindung zwischen den HTML-Elementen im HTML Dokument und in Template-Dateien mit den Daten und dem Code in der Anwendung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    } }, directives: [_studenten_studenten_component__WEBPACK_IMPORTED_MODULE_1__["StudentenComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Yw1z":
/*!********************************************************!*\
  !*** ./src/app/datenhaltung/datenhaltung.component.ts ***!
  \********************************************************/
/*! exports provided: DatenhaltungComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatenhaltungComponent", function() { return DatenhaltungComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class DatenhaltungComponent {
    constructor() { }
    ngOnInit() {
    }
}
DatenhaltungComponent.ɵfac = function DatenhaltungComponent_Factory(t) { return new (t || DatenhaltungComponent)(); };
DatenhaltungComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatenhaltungComponent, selectors: [["app-datenhaltung"]], decls: 11, vars: 0, template: function DatenhaltungComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ein wichtiges Prinzip der Service-orientierten Architektur bzw. SPA ist die Kommunika-tion zwischen View, Model und ViewModel sowie der hierf\u00FCr notwendige Datenfluss.\nHierbei kommen zwei Kommunikationsmustern zum Einsatz, One-Way-Binding sowie auch Two-Way-Binding, wobei hier nach vier Aspekten unterschieden werden muss [2, p. 396]:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\u2022\tR\u00FCckmeldung \u00FCber den Miss-/Erfolg des Datenaufrufs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n\u2022\tR\u00FCckmeldung \u00FCber das Ergebnis des Datenaufrufs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\u2022\tR\u00FCckmeldung au\u00DFerhalb der Anfrage zu einem sp\u00E4teren Zeitpunkt (Asynchronit\u00E4t)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n\u2022\tAufbau einer Sitzung: exklusive Nutzung durch einen einzelnen Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _erklaerung_mvc_mvvm_etc_erklaerung_mvc_mvvm_etc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./erklaerung-mvc-mvvm-etc/erklaerung-mvc-mvvm-etc.component */ "LJoI");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "7Ufg");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "HeVh");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _studenten_studenten_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./studenten/studenten.component */ "0gVH");
/* harmony import */ var _dozenten_dozenten_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dozenten/dozenten.component */ "9doj");
/* harmony import */ var _dozent_detail_dozent_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dozent-detail/dozent-detail.component */ "0G2L");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form/form.component */ "urH6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _einleitung_einleitung_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./einleitung/einleitung.component */ "ryNd");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./angular/angular.component */ "vEXv");
/* harmony import */ var _architektur_konzept_architektur_konzept_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./architektur-konzept/architektur-konzept.component */ "SvGC");
/* harmony import */ var _datenbindung_datenbindung_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./datenbindung/datenbindung.component */ "PSc1");
/* harmony import */ var _datenbindungen_typen_datenbindungen_typen_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./datenbindungen-typen/datenbindungen-typen.component */ "u6H/");
/* harmony import */ var _datenhaltung_datenhaltung_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./datenhaltung/datenhaltung.component */ "Yw1z");
/* harmony import */ var _methodik_artefakt_design_science_research_methodik_artefakt_design_science_research_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./methodik-artefakt-design-science-research/methodik-artefakt-design-science-research.component */ "/m2+");
/* harmony import */ var _fazit_fazit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./fazit/fazit.component */ "Ise/");
/* harmony import */ var _forschungsfrage_forschungsfrage_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./forschungsfrage/forschungsfrage.component */ "IUpW");
/* harmony import */ var _one_way_binding_one_way_binding_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./one-way-binding/one-way-binding.component */ "JcXi");
/* harmony import */ var _two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./two-way-binding/two-way-binding.component */ "WJOG");
/* harmony import */ var _rest_crud_http_rest_crud_http_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rest-crud-http/rest-crud-http.component */ "9t1U");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _einleitung_einleitung_component__WEBPACK_IMPORTED_MODULE_20__["EinleitungComponent"], _angular_angular_component__WEBPACK_IMPORTED_MODULE_21__["AngularComponent"], _architektur_konzept_architektur_konzept_component__WEBPACK_IMPORTED_MODULE_22__["ArchitekturKonzeptComponent"], _datenbindung_datenbindung_component__WEBPACK_IMPORTED_MODULE_23__["DatenbindungComponent"], _datenbindungen_typen_datenbindungen_typen_component__WEBPACK_IMPORTED_MODULE_24__["DatenbindungenTypenComponent"], _datenhaltung_datenhaltung_component__WEBPACK_IMPORTED_MODULE_25__["DatenhaltungComponent"], _methodik_artefakt_design_science_research_methodik_artefakt_design_science_research_component__WEBPACK_IMPORTED_MODULE_26__["MethodikArtefaktDesignScienceResearchComponent"], _fazit_fazit_component__WEBPACK_IMPORTED_MODULE_27__["FazitComponent"], _forschungsfrage_forschungsfrage_component__WEBPACK_IMPORTED_MODULE_28__["ForschungsfrageComponent"], _one_way_binding_one_way_binding_component__WEBPACK_IMPORTED_MODULE_29__["OneWayBindingComponent"], _two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_30__["TwoWayBindingComponent"], _rest_crud_http_rest_crud_http_component__WEBPACK_IMPORTED_MODULE_31__["RestCrudHttpComponent"], _erklaerung_mvc_mvvm_etc_erklaerung_mvc_mvvm_etc_component__WEBPACK_IMPORTED_MODULE_7__["ErklaerungMvcMvvmEtcComponent"],
        _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_8__["MainNavComponent"],
        _studenten_studenten_component__WEBPACK_IMPORTED_MODULE_15__["StudentenComponent"],
        _dozenten_dozenten_component__WEBPACK_IMPORTED_MODULE_16__["DozentenComponent"],
        _dozent_detail_dozent_detail_component__WEBPACK_IMPORTED_MODULE_17__["DozentDetailComponent"],
        _form_form_component__WEBPACK_IMPORTED_MODULE_18__["FormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"]] }); })();


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button-toggle */ "Ynp+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tree */ "OLiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "8Y7J");
















const MaterialComponents = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[MaterialComponents], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"]] }); })();


/***/ }),

/***/ "ryNd":
/*!****************************************************!*\
  !*** ./src/app/einleitung/einleitung.component.ts ***!
  \****************************************************/
/*! exports provided: EinleitungComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EinleitungComponent", function() { return EinleitungComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class EinleitungComponent {
    constructor() { }
    ngOnInit() {
    }
}
EinleitungComponent.ɵfac = function EinleitungComponent_Factory(t) { return new (t || EinleitungComponent)(); };
EinleitungComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EinleitungComponent, selectors: [["app-einleitung"]], decls: 7, vars: 0, consts: [["src", "/assets/statistik.png", "height", "500px", "width", "800px"]], template: function EinleitungComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Stand Januar 2021 nutzten weltweit mehr als 5,22 Milliarden Menschen ein Mobiltelefon sowie mehr als 4,66 Milliarden Menschen das Internet. Die schiere Menge an Nutzern und Clients sowie der Nutzung von serviceorientierte Architekturen stellt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " die Entwickler jedoch vor einige Schwierigkeiten in der verteilten Datenhaltung. Als grundlegende Probleme lassen sich die Zuverl\u00E4ssigkeit von Netzwerken, die zur Verf\u00FCgung stehende Bandbreite, Netzwerktopologien (wie z.B. UMTS, LTE, 5G, WLAN \u2013 auch im Wechsel), \u201EKosten\u201C f\u00FCr den Datentransport sowie die Netzwerksicherheit identifizieren. [2] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "u6H/":
/*!************************************************************************!*\
  !*** ./src/app/datenbindungen-typen/datenbindungen-typen.component.ts ***!
  \************************************************************************/
/*! exports provided: DatenbindungenTypenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatenbindungenTypenComponent", function() { return DatenbindungenTypenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class DatenbindungenTypenComponent {
    constructor() { }
    ngOnInit() {
    }
}
DatenbindungenTypenComponent.ɵfac = function DatenbindungenTypenComponent_Factory(t) { return new (t || DatenbindungenTypenComponent)(); };
DatenbindungenTypenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatenbindungenTypenComponent, selectors: [["app-datenbindungen-typen"]], decls: 5, vars: 0, template: function DatenbindungenTypenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Datenbindungen sind in Vorlagen eingebettete Ausdr\u00FCcke, die ausgewertet werden, um dynamische Inhalte im HTML-Dokument zu erzeugen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Datenbindungen stellen die Verbindung zwischen den HTML-Elementen im HTML Dokument und in Template-Dateien mit den Daten und dem Code in der Anwendung.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "urH6":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _dozent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dozent */ "xuUC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _dozent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dozent.service */ "z00b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");




class FormComponent {
    constructor(dozentService) {
        this.dozentService = dozentService;
        this.dozentModel = new _dozent__WEBPACK_IMPORTED_MODULE_0__["Dozent"]();
        this.dozenten = [];
    }
    ngOnInit() {
        this.dozentService.getDozenten();
    }
    onSubmit() {
        this.dozentService.create(this.dozentModel)
            .subscribe(data => console.log("success", data));
        this.dozentService.getDozenten();
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dozent_service__WEBPACK_IMPORTED_MODULE_2__["DozentService"])); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 13, vars: 3, consts: [[1, "container-fluid"], ["novalidate", "", 3, "ngSubmit"], ["dozentForm", "ngForm"], [1, "form-group"], ["type", "number", "placeholder", "ID", "name", "id", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Vorname", "name", "vorname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Nachname", "name", "nachname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "HTTP-Beispiel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Hier k\u00F6nnen Sie beispielsweise einen neuen Dozenten erfassen. Aus zeitlichen Gr\u00FCnden konnte ich lediglich die POST-Methode implementieren. Die eingegebenen Daten werden in einem JSON-Server gespeichert. Zur Aktualisierung der Liste bitte F5 dr\u00FCcken!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.dozentModel.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.dozentModel.vorname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_10_listener($event) { return ctx.dozentModel.nachname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Speichern");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dozentModel.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dozentModel.vorname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dozentModel.nachname);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["input[_ngcontent-%COMP%] {\r\n  margin-bottom: 1em;\r\n  margin-right: 1em;\r\n\r\n  padding: .5rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  padding: .5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7O0VBRWpCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcblxyXG4gIHBhZGRpbmc6IC41cmVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHBhZGRpbmc6IC41cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vEXv":
/*!**********************************************!*\
  !*** ./src/app/angular/angular.component.ts ***!
  \**********************************************/
/*! exports provided: AngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularComponent", function() { return AngularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class AngularComponent {
    constructor() { }
    ngOnInit() {
    }
}
AngularComponent.ɵfac = function AngularComponent_Factory(t) { return new (t || AngularComponent)(); };
AngularComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngularComponent, selectors: [["app-angular"]], decls: 2, vars: 0, template: function AngularComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular/angular.component */ "vEXv");
/* harmony import */ var _architektur_konzept_architektur_konzept_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./architektur-konzept/architektur-konzept.component */ "SvGC");
/* harmony import */ var _datenbindung_datenbindung_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datenbindung/datenbindung.component */ "PSc1");
/* harmony import */ var _datenbindungen_typen_datenbindungen_typen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datenbindungen-typen/datenbindungen-typen.component */ "u6H/");
/* harmony import */ var _datenhaltung_datenhaltung_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datenhaltung/datenhaltung.component */ "Yw1z");
/* harmony import */ var _einleitung_einleitung_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./einleitung/einleitung.component */ "ryNd");
/* harmony import */ var _methodik_artefakt_design_science_research_methodik_artefakt_design_science_research_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./methodik-artefakt-design-science-research/methodik-artefakt-design-science-research.component */ "/m2+");
/* harmony import */ var _fazit_fazit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fazit/fazit.component */ "Ise/");
/* harmony import */ var _forschungsfrage_forschungsfrage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forschungsfrage/forschungsfrage.component */ "IUpW");
/* harmony import */ var _one_way_binding_one_way_binding_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./one-way-binding/one-way-binding.component */ "JcXi");
/* harmony import */ var _rest_crud_http_rest_crud_http_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rest-crud-http/rest-crud-http.component */ "9t1U");
/* harmony import */ var _two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./two-way-binding/two-way-binding.component */ "WJOG");
/* harmony import */ var _erklaerung_mvc_mvvm_etc_erklaerung_mvc_mvvm_etc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./erklaerung-mvc-mvvm-etc/erklaerung-mvc-mvvm-etc.component */ "LJoI");
/* harmony import */ var _studenten_studenten_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./studenten/studenten.component */ "0gVH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "8Y7J");

















const routes = [
    { path: 'einleitung', component: _einleitung_einleitung_component__WEBPACK_IMPORTED_MODULE_6__["EinleitungComponent"] },
    { path: 'angular', component: _angular_angular_component__WEBPACK_IMPORTED_MODULE_1__["AngularComponent"] },
    { path: 'architektur-konzept', component: _architektur_konzept_architektur_konzept_component__WEBPACK_IMPORTED_MODULE_2__["ArchitekturKonzeptComponent"] },
    { path: 'datenbindung', component: _datenbindung_datenbindung_component__WEBPACK_IMPORTED_MODULE_3__["DatenbindungComponent"] },
    { path: 'datenbindungen-typen', component: _datenbindungen_typen_datenbindungen_typen_component__WEBPACK_IMPORTED_MODULE_4__["DatenbindungenTypenComponent"] },
    { path: 'datenhaltung', component: _datenhaltung_datenhaltung_component__WEBPACK_IMPORTED_MODULE_5__["DatenhaltungComponent"] },
    { path: 'methodik-artefakt-design-science-research', component: _methodik_artefakt_design_science_research_methodik_artefakt_design_science_research_component__WEBPACK_IMPORTED_MODULE_7__["MethodikArtefaktDesignScienceResearchComponent"] },
    { path: 'fazit', component: _fazit_fazit_component__WEBPACK_IMPORTED_MODULE_8__["FazitComponent"] },
    { path: 'forschungsfrage', component: _forschungsfrage_forschungsfrage_component__WEBPACK_IMPORTED_MODULE_9__["ForschungsfrageComponent"] },
    { path: 'one-way-binding', component: _one_way_binding_one_way_binding_component__WEBPACK_IMPORTED_MODULE_10__["OneWayBindingComponent"] },
    { path: 'two-way-binding', component: _studenten_studenten_component__WEBPACK_IMPORTED_MODULE_14__["StudentenComponent"] },
    { path: 'rest-crud-http', component: _rest_crud_http_rest_crud_http_component__WEBPACK_IMPORTED_MODULE_11__["RestCrudHttpComponent"] },
    { path: 'erklaerung-mvc-mvvm-etc', component: _erklaerung_mvc_mvvm_etc_erklaerung_mvc_mvvm_etc_component__WEBPACK_IMPORTED_MODULE_13__["ErklaerungMvcMvvmEtcComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routingComponents = [
    _einleitung_einleitung_component__WEBPACK_IMPORTED_MODULE_6__["EinleitungComponent"],
    _angular_angular_component__WEBPACK_IMPORTED_MODULE_1__["AngularComponent"],
    _architektur_konzept_architektur_konzept_component__WEBPACK_IMPORTED_MODULE_2__["ArchitekturKonzeptComponent"],
    _datenbindung_datenbindung_component__WEBPACK_IMPORTED_MODULE_3__["DatenbindungComponent"],
    _datenbindungen_typen_datenbindungen_typen_component__WEBPACK_IMPORTED_MODULE_4__["DatenbindungenTypenComponent"],
    _datenhaltung_datenhaltung_component__WEBPACK_IMPORTED_MODULE_5__["DatenhaltungComponent"],
    _methodik_artefakt_design_science_research_methodik_artefakt_design_science_research_component__WEBPACK_IMPORTED_MODULE_7__["MethodikArtefaktDesignScienceResearchComponent"],
    _fazit_fazit_component__WEBPACK_IMPORTED_MODULE_8__["FazitComponent"],
    _forschungsfrage_forschungsfrage_component__WEBPACK_IMPORTED_MODULE_9__["ForschungsfrageComponent"],
    _one_way_binding_one_way_binding_component__WEBPACK_IMPORTED_MODULE_10__["OneWayBindingComponent"],
    _two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_12__["TwoWayBindingComponent"],
    _rest_crud_http_rest_crud_http_component__WEBPACK_IMPORTED_MODULE_11__["RestCrudHttpComponent"]
];


/***/ }),

/***/ "xuUC":
/*!***************************!*\
  !*** ./src/app/dozent.ts ***!
  \***************************/
/*! exports provided: Dozent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dozent", function() { return Dozent; });
class Dozent {
}


/***/ }),

/***/ "z00b":
/*!***********************************!*\
  !*** ./src/app/dozent.service.ts ***!
  \***********************************/
/*! exports provided: DozentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DozentService", function() { return DozentService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class DozentService {
    constructor(http) {
        this.http = http;
        this.list = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    getDozenten() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dozentEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(dozenten => this.list.next(dozenten)));
    }
    getDozentenByName(name) {
        return this.list.getValue().find(value => {
            return `${value.vorname} ${value.nachname}` === name;
        });
    }
    getDozentenById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dozentEndpoint}/${id}`);
    }
    create(dozent) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dozentEndpoint, dozent)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(createdDoz => this.getDozenten().subscribe()));
    }
}
DozentService.ɵfac = function DozentService_Factory(t) { return new (t || DozentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
DozentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DozentService, factory: DozentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
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
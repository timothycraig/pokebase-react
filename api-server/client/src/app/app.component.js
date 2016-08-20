"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var matchup_page_component_1 = require('./matchup-page/matchup-page.component');
var router_1 = require('@angular/router');
var footer_component_1 = require('./footer/footer.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [matchup_page_component_1.MatchupPageComponent, router_1.ROUTER_DIRECTIVES, footer_component_1.FooterComponent],
            template: "\n      <div class=\"container-fluid\">\n      \t<div class=\"row\">\n      \t\t<div class=\"col-md-12 header\">\n            Pok\u00E9Base\n            <div class=\"nav\">\n            <a routerLink=\"/matchup\" routerLinkActive=\"active\">Home</a>\n            |\n            <a routerLink=\"/api\" routerLinkActive=\"active\">API</a>\n            </div>\n      \t\t</div>\n      \t</div>\n        <router-outlet></router-outlet>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <footer></footer>\n          </div>\n        </div>\n      </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
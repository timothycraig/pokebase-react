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
var ApiPageComponent = (function () {
    function ApiPageComponent() {
    }
    ApiPageComponent = __decorate([
        core_1.Component({
            selector: "api-page",
            styleUrls: ['app/api-page/api-page.component.css'],
            template: "\n    <h3>Pok\u00E9Base API Overview</h3>\n    <p>Query Pokemon or Moves to retreive data obtained from pokemon GO's\n    game data that has been released online.</p>\n    <hr>\n    <h3>Accessing the API</h3>\n    <p>Query the <span class=\"code\">/moves</span> or <span class=\"code\">/pokemons</span> path with an optional number of queries following</p>\n    <h3>Valid Queries</h3>\n    <p>Results will be searched and reduced in order of queries provided.</p>\n    <div class=\"col-md-5\">\n      <div class=\"panel panel-info\">\n        <!-- Default panel contents -->\n        <div class=\"panel-heading\">PokeBase Queries</div>\n        <div class=\"panel-body\">\n          <table border=\"1\">\n            <tr>\n              <td>name</td>\n              <td>String</td>\n              <td>Queries by the pokemon or moves's name.</td>\n            </tr>\n            <tr>\n              <td>attack</td>\n              <td>Int</td>\n              <td>Queries pokemon who's base attack is greater than the supplied value.</td>\n            </tr>\n            <tr>\n              <td>defence</td>\n              <td>Int</td>\n              <td>Queries pokemon who's base defence is greater than the supplied value.</td>\n            </tr>\n            <tr>\n              <td>stamina</td>\n              <td>Int</td>\n              <td>Queries pokemon who's base stamina is greater than the supplied value</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n      <h3>Sample Query</h3>\n      <div class=\"code\">\n        http://localhost:8000/api/v1/pokemons?attack=100&defence=90\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ApiPageComponent);
    return ApiPageComponent;
}());
exports.ApiPageComponent = ApiPageComponent;
//# sourceMappingURL=api-page.component.js.map
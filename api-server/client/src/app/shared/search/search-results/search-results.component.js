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
var SearchResultsComponent = (function () {
    function SearchResultsComponent() {
        this.results = [];
        this.load = new core_1.EventEmitter();
    }
    SearchResultsComponent.prototype.ngOnChanges = function (changes) {
    };
    SearchResultsComponent.prototype.load_pokemon = function (event, pannel) {
        name = event.target.parentNode.children[1].innerHTML;
        this.load.emit({
            pokemon: name,
            pannel: pannel
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchResultsComponent.prototype, "results", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchResultsComponent.prototype, "load", void 0);
    SearchResultsComponent = __decorate([
        core_1.Component({
            selector: "search-results",
            styleUrls: ['app/search/search.component.css'],
            template: "\n    <div class=\"search-results\">\n      <div *ngFor=\"let result of results\" class=\"search-result\">\n        <img src=\"http://localhost:8000/{{result.image}}\" alt=\"@\" height=\"40\" width=\"40\" />\n        <span id=\"pokemon_name\">{{result.name}}</span>\n        <button type=\"button\" (click)=\"load_pokemon($event,'left')\">Left</button>\n        <button type=\"button\" (click)=\"load_pokemon($event,'right')\">Right</button>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());
exports.SearchResultsComponent = SearchResultsComponent;
//# sourceMappingURL=search-results.component.js.map
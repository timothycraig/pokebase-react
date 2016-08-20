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
var search_component_1 = require('../search/search.component');
var pane_component_1 = require('../pane/pane.component');
var http_1 = require('@angular/http');
var MatchupPageComponent = (function () {
    function MatchupPageComponent() {
    }
    MatchupPageComponent.prototype.load_pokemon = function (evt) {
        if (evt.pannel == "left") {
            this.leftPane.load_data(evt.pokemon);
        }
        if (evt.pannel == "right") {
            this.rightPane.load_data(evt.pokemon);
        }
    };
    __decorate([
        core_1.ViewChild('leftPane'), 
        __metadata('design:type', pane_component_1.PaneComponent)
    ], MatchupPageComponent.prototype, "leftPane", void 0);
    __decorate([
        core_1.ViewChild('rightPane'), 
        __metadata('design:type', pane_component_1.PaneComponent)
    ], MatchupPageComponent.prototype, "rightPane", void 0);
    MatchupPageComponent = __decorate([
        core_1.Component({
            selector: 'matchup-page',
            directives: [search_component_1.SearchComponent, pane_component_1.PaneComponent],
            providers: [http_1.HTTP_PROVIDERS],
            styleUrls: ['app/matchup-page/matchup-page.component.css'],
            template: "\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3\">\n        <search (load)=\"load_pokemon($event)\"></search>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-centered\">\n        <div class=\"col-md-6 col-sm-12 datapane\">\n          <div class=\"container-fluid\">\n          </div>\n          <pane #leftPane></pane>\n        </div>\n        <div class=\"col-md-6 col-sm-12 datapane\">\n          <div class=\"container-fluid\">\n          </div>\n          <pane #rightPane></pane>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MatchupPageComponent);
    return MatchupPageComponent;
}());
exports.MatchupPageComponent = MatchupPageComponent;
//# sourceMappingURL=matchup-page.component.js.map
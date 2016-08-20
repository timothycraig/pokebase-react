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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/timer');
var card_1 = require('@angular2-material/card');
var donut_types_component_1 = require('../donut-types/donut-types.component');
var type_badge_component_1 = require('./type-badge/type-badge.component');
var PokemonStatsComponent = (function () {
    function PokemonStatsComponent() {
        this.pokemon = {};
    }
    PokemonStatsComponent.prototype.ngOnChanges = function (change) {
        var _this = this;
        if (this.stats) {
            this.stats.nativeElement.className = "";
            var timer = Observable_1.Observable.timer(10, 10);
            timer.subscribe(function (r) { return _this.stats.nativeElement.className = "stats"; });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PokemonStatsComponent.prototype, "pokemon", void 0);
    __decorate([
        core_1.ViewChild('stats'), 
        __metadata('design:type', Object)
    ], PokemonStatsComponent.prototype, "stats", void 0);
    PokemonStatsComponent = __decorate([
        core_1.Component({
            selector: "pokemon-stats",
            styleUrls: ['app/pane/stats/stats.component.css'],
            directives: [card_1.MD_CARD_DIRECTIVES, donut_types_component_1.DonutTypesComponent, type_badge_component_1.TypeBadgeComponent],
            template: "\n  <div #stats *ngIf=\"pokemon.types\" class=\"stats\">\n    <md-card class=\"shadowfilter\">\n      <img class=\"img-responsive shadowfilter\" src=\"http://localhost:8000/images/full/{{pokemon.poke_id}}.png\">\n      <md-card-content>\n        <h2>{{pokemon.name}}</h2>\n        <p>Attack: {{pokemon.attack}}</p>\n        <p>Defence: {{pokemon.defence}}</p>\n        <p>Stamina: {{pokemon.stamina}}</p>\n      </md-card-content>\n      <hr/>\n      <type-badge *ngFor=\"let type of pokemon.types\" [type]=\"type.name\"></type-badge>\n    </md-card>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PokemonStatsComponent);
    return PokemonStatsComponent;
}());
exports.PokemonStatsComponent = PokemonStatsComponent;
//# sourceMappingURL=stats.component.js.map
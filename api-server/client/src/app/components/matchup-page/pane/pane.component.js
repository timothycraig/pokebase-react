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
var pokemon_service_1 = require('../pokemon.service');
var stats_component_1 = require('./stats/stats.component');
var three_component_1 = require('./three/three.component');
var moves_graph_component_1 = require('./moves-graph/moves-graph.component');
var PaneComponent = (function () {
    function PaneComponent(_pokemonService) {
        this._pokemonService = _pokemonService;
        this.pokemon = {};
    }
    PaneComponent.prototype.load_data = function (pokemon) {
        var _this = this;
        console.log('loading data for ' + pokemon + '!');
        this._pokemonService.search(pokemon)
            .subscribe(function (res) { return _this.set_pokemon(res.pokemons[0]); }, function (error) { return console.log(error); });
    };
    PaneComponent.prototype.set_pokemon = function (pokemon) {
        this.pokemon = pokemon;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaneComponent.prototype, "pokemon", void 0);
    __decorate([
        core_1.ViewChild('model'), 
        __metadata('design:type', three_component_1.PokemonModelComponent)
    ], PaneComponent.prototype, "model", void 0);
    __decorate([
        core_1.ViewChild('stats'), 
        __metadata('design:type', stats_component_1.PokemonStatsComponent)
    ], PaneComponent.prototype, "stats", void 0);
    __decorate([
        core_1.ViewChild('graph'), 
        __metadata('design:type', moves_graph_component_1.MovesGraphComponent)
    ], PaneComponent.prototype, "graph", void 0);
    PaneComponent = __decorate([
        core_1.Component({
            providers: [pokemon_service_1.PokemonService],
            directives: [stats_component_1.PokemonStatsComponent, three_component_1.PokemonModelComponent, moves_graph_component_1.MovesGraphComponent],
            selector: "pane",
            template: "\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <pokemon-model #model [pokemon]=\"pokemon\"></pokemon-model>\n      </div>\n      <div class=\"col-md-7\">\n        <pokemon-stats #stats [pokemon]=\"pokemon\"></pokemon-stats>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <moves-graph #graph [pokemon]=\"pokemon\"></moves-graph>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService])
    ], PaneComponent);
    return PaneComponent;
}());
exports.PaneComponent = PaneComponent;
//# sourceMappingURL=pane.component.js.map
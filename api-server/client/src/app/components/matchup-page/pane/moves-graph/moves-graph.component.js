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
var ng2_nvd3_1 = require('ng2-nvd3');
var MovesGraphComponent = (function () {
    function MovesGraphComponent() {
    }
    MovesGraphComponent.prototype.ngOnInit = function () {
        this.options = {
            chart: {
                type: 'discreteBarChart',
                height: 350,
                margin: {
                    top: 20,
                    right: 0,
                    bottom: 20,
                    left: 0
                },
                x: function (d) { return d.name; },
                y: function (d) { return d.power; },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Move Name'
                },
                yAxis: {
                    axisLabel: 'Power',
                    axisLabelDistance: -60
                }
            }
        };
        this.data = [
            {
                key: "Moves",
                values: []
            }
        ];
    };
    MovesGraphComponent.prototype.ngOnChanges = function (changes) {
        if (this.nvD3.chart) {
            this.nvD3.updateWithData([
                {
                    key: "Moves",
                    values: changes.pokemon.currentValue.moves
                }
            ]);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MovesGraphComponent.prototype, "pokemon", void 0);
    __decorate([
        core_1.ViewChild(ng2_nvd3_1.nvD3), 
        __metadata('design:type', ng2_nvd3_1.nvD3)
    ], MovesGraphComponent.prototype, "nvD3", void 0);
    MovesGraphComponent = __decorate([
        core_1.Component({
            selector: "moves-graph",
            directives: [ng2_nvd3_1.nvD3],
            styleUrls: ['app/pane/moves-graph/moves-graph.component.css'],
            template: "\n    <div class=\"moves-graph\">\n      <nvd3 #nvD3 [options]=\"options\" [data]=\"data\"></nvd3>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MovesGraphComponent);
    return MovesGraphComponent;
}());
exports.MovesGraphComponent = MovesGraphComponent;
//# sourceMappingURL=moves-graph.component.js.map
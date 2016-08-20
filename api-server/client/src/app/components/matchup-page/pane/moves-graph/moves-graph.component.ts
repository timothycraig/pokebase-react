import {Component, Input, OnInit, ViewChild, OnChanges, SimpleChange} from '@angular/core'
import {nvD3} from 'ng2-nvd3'
declare let d3: any

@Component({
  selector: `moves-graph`,
  directives: [nvD3],
  styleUrls: ['app/components/matchup-page/pane/moves-graph/moves-graph.component.css'],
  template: `
    <div class="moves-graph">
      <nvd3 #nvD3 [options]="options" [data]="data"></nvd3>
    </div>
  `
})

export class MovesGraphComponent implements OnInit, OnChanges{
  @Input() pokemon: any;
  @ViewChild(nvD3) nvD3: nvD3;
  options: any;
  data: any;
  ngOnInit(){
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 350,
        margin : {
          top: 20,
          right: 0,
          bottom: 20,
          left: 0
        },
        x: function(d: any){return d.name;},
        y: function(d: any){return d.power;},
        showValues: true,
        valueFormat: function(d: any){
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

    }
    this.data = [
      {
        key: "Moves",
        values: [

        ]
      }
    ];
  }
  ngOnChanges(changes: any){
    if(this.nvD3.chart){
      this.nvD3.updateWithData([
        {
          key: "Moves",
          values: changes.pokemon.currentValue.moves
        }
      ])
    }
  }
}

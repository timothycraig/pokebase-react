import {Component, Input, ViewChild} from '@angular/core'

import {PokemonService} from '../../../services/pokemon.service';
import {PokemonStatsComponent} from './stats/stats.component';
import {PokemonModelComponent} from './three/three.component';
import {MovesGraphComponent} from './moves-graph/moves-graph.component';

@Component({
  providers: [PokemonService],
  directives: [PokemonStatsComponent, PokemonModelComponent, MovesGraphComponent],
  selector: `pane`,
  template: `
    <div class="row">
      <div class="col-md-4">
        <pokemon-model #model [pokemon]="pokemon"></pokemon-model>
      </div>
      <div class="col-md-7">
        <pokemon-stats #stats [pokemon]="pokemon"></pokemon-stats>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <moves-graph #graph [pokemon]="pokemon"></moves-graph>
      </div>
    </div>
  `
})
export class PaneComponent{
  constructor(private _pokemonService: PokemonService) {
  }
  @Input() pokemon = {};
  @ViewChild('model') model: PokemonModelComponent
  @ViewChild('stats') stats: PokemonStatsComponent
  @ViewChild('graph') graph: MovesGraphComponent

  load_data(pokemon: any){
    console.log('loading data for ' + pokemon +'!')
    this._pokemonService.search(pokemon)
      .subscribe(
        res => this.set_pokemon(res.pokemons[0]),
        error => console.log(error))
  }

  set_pokemon(pokemon: any){
    this.pokemon = pokemon
  }

}

import {Control, FORM_DIRECTIVES} from '@angular/common';
import {Component, Output, Input, EventEmitter, OnChanges, SimpleChange} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service'
import 'rxjs/add/operator/debounceTime';
import {SearchResultsComponent} from './search-results/search-results.component'


@Component({
  selector: 'search',
  styleUrls: ['app/shared/search/search.component.css'],
  providers: [PokemonService],
  directives: [SearchResultsComponent],
  template: `
    <div class="search" on-mouseover="gainFocus()" on-mouseleave="loseFocus()">
      <div class="input-group">
        <span class="input-group-addon" id="pikagif"><img src="app/images/pikachu.gif" alt="@" height="20" /></span>
        <input [ngFormControl]="search" type="text" class="form-control" placeholder="Search by Pokemon name" aria-describedby="pikagif">
      </div>
      <div *ngIf="focus">
        <search-results [results]=items (load)="load_pokemon($event)"></search-results>
      </div>
    </div>
  `
})

export class SearchComponent {

  @Output() load = new EventEmitter();

  items: any;
  search = new Control();
  focus: boolean = false;
  constructor(private _pokemonService: PokemonService) {
    this.search.valueChanges
      .debounceTime(500)
      .subscribe(s => _pokemonService.search(s)
        .subscribe(data => this.items = data.pokemons),
        error => console.log(error))
  }
  gainFocus(){
    this.focus = true;
  }
  loseFocus(){
    this.focus = false;
  }
  load_pokemon(event: any,pannel: any){
    this.load.emit({
      pokemon: event.pokemon,
      pannel: event.pannel
    })
  }
}

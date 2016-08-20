import {Component, Input, ViewChild, OnChanges} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import {TypeBadgeComponent} from './type-badge/type-badge.component';
// import {MD_CARD_DIRECTIVES} from '@angular2-material/card'

@Component({
  selector: `pokemon-stats`,
  styleUrls: ['app/components/matchup-page/pane/stats/stats.component.css'],
  directives: [TypeBadgeComponent],
  template: `
  <div #stats *ngIf="pokemon.types" class="stats">
    <md-card class="shadowfilter">
      <img class="img-responsive shadowfilter" src="http://pokebase.herokuapp.com/images/full/{{pokemon.poke_id}}.png">
      <md-card-content>
        <h2>{{pokemon.name}}</h2>
        <p>Attack: {{pokemon.attack}}</p>
        <p>Defence: {{pokemon.defence}}</p>
        <p>Stamina: {{pokemon.stamina}}</p>
      </md-card-content>
      <hr/>
      <type-badge *ngFor="let type of pokemon.types" [type]="type.name"></type-badge>
    </md-card>
  </div>
  `
})

export class PokemonStatsComponent implements OnChanges{
  constructor(){}
  @Input() pokemon = {};
  @ViewChild('stats') stats;

  ngOnChanges(change: any){
    if(this.stats){
      this.stats.nativeElement.className = ""
      let timer = Observable.timer(10,10);
      timer.subscribe(r => this.stats.nativeElement.className = "stats");
    }
  }
}

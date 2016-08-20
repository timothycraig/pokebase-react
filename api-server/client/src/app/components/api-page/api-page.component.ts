import {Component} from '@angular/core';

@Component({
  selector: `api-page`,
  styleUrls: ['app/components/api-page/api-page.component.css'],
  template: `
    <h3>PokéBase API Overview</h3>
    <p>Query Pokemon or Moves to retreive data obtained from pokemon GO's
    game data that has been released online.</p>
    <hr>
    <h3>Accessing the API</h3>
    <p>Query the <span class="code">/moves</span> or <span class="code">/pokemons</span> path with an optional number of queries following</p>
    <h3>Valid Queries</h3>
    <p>Results will be searched and reduced in order of queries provided.</p>
    <div class="col-md-5">
      <div class="panel panel-info">
        <!-- Default panel contents -->
        <div class="panel-heading">/pokemons queries</div>
        <div class="panel-body">
          <table border="1">
            <tr>
              <td>name</td>
              <td>String</td>
              <td>Queries by the pokemon or moves's name.</td>
            </tr>
            <tr>
              <td>attack</td>
              <td>Int</td>
              <td>Queries pokemon who's base attack is greater than the supplied value.</td>
            </tr>
            <tr>
              <td>defence</td>
              <td>Int</td>
              <td>Queries pokemon who's base defence is greater than the supplied value.</td>
            </tr>
            <tr>
              <td>stamina</td>
              <td>Int</td>
              <td>Queries pokemon who's base stamina is greater than the supplied value</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="panel panel-info">
        <!-- Default panel contents -->
        <div class="panel-heading">/moves queries</div>
        <div class="panel-body">
          <table border="1">
            <tr>
              <td>name</td>
              <td>String</td>
              <td>Queries by the pokemon or moves's name.</td>
            </tr>
            <tr>
              <td>power</td>
              <td>Int</td>
              <td>Queries attacks with base power greater than the supplied value</td>
            </tr>
          </table>
        </div>
      </div>
      <h3>Sample Query</h3>
      <div class="code">
        http://pokebase.herokuapp.com/api/v1/pokemons?attack=100&defence=90
      </div>
    </div>
  `
})
export class ApiPageComponent {
}

import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'


@Injectable()
export class PokemonService {
  data: any;
  constructor(private _http: Http){}

  search(term: any) {
    return this._http.get("http://pokebase.herokuapp.com/api/v1/pokemons?name=" + term)
      .map(res => res.json(),
      error => console.log(error))
  }
}

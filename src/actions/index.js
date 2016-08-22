import axios from 'axios';

export const FETCH_POKEMON = 'FETCH_POKEMON';
export const FETCH_INITIAL = 'FETCH_INITIAL';

// const ROOT_URL = 'http://pokebase.herokuapp.com/api/v1/pokemons'
const ROOT_URL = 'http://localhost:3000/api/v1/pokemons'

export function fetchPokemon(pokemon) {
  const url = `${ROOT_URL}?name=${pokemon}`
  const request = axios.get(url);

  return {
    type: FETCH_POKEMON,
    payload: request
  };
}

export function fetchInitial() {
  const url = `${ROOT_URL}?name=charizard`
  const request = axios.get(url);

  return {
    type: FETCH_INITIAL,
    payload: request
  };
}

import { combineReducers } from 'redux';
import PokemonReducer from './reducer_pokemon'

const rootReducer = combineReducers({
  pokemon: PokemonReducer
});

export default rootReducer;

import { FETCH_POKEMON, FETCH_INITIAL } from '../actions/index';

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
  case FETCH_INITIAL:
    return [ action.payload.data ];
  case FETCH_POKEMON:
    return [ action.payload.data ];
  }
  return state;
}

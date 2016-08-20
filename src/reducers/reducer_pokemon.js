import { FETCH_POKEMON } from '../actions/index';

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
  case FETCH_POKEMON:
    return [ action.payload.data ];
  }
  return state;
}

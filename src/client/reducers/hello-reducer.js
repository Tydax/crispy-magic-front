import Immutable from 'immutable';
import { SAY_HELLO } from '../actions/hello-actions';

const initialState = Immutable.Map({
  saidHello: false,
});

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return state.set('saidHello', action.payload);
    default:
      return state;
  }
};

export default helloReducer;

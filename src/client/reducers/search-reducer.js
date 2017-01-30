import { fromJS } from 'immutable';

import { UPDATE_SEARCH_VALUE } from '../actions/entity-actions';

const searchInitialState = fromJS({
  value: '',
});

const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_VALUE:
      return state.set('value', action.payload);
    default:
      return state;
  }
};

export default searchReducer;

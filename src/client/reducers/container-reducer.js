import { fromJS } from 'immutable';

import {
  INVALIDATE_CONTAINER,
  BEGIN_FETCHING_CONTAINER,
  FINISH_FETCHING_CONTAINER,
  FAIL_FETCHING_CONTAINER } from '../actions/container-actions';
import { ADD_CARD, REMOVE_CARD } from '../actions/card-actions';

const containerInitialState = {
  isFetching: false,
  lastSaved: undefined,
  error: undefined,
  data: {
    cards: [],
  },
};

const containersInitialState = fromJS({
  deckbuilder: containerInitialState,
  library: containerInitialState,
  search: containerInitialState,
});

const injectDataInContainer = (container, action) => {

};

const containerReducer = (state = containersInitialState, action) => {
  switch (action.type) {
    case BEGIN_FETCHING_CONTAINER:
      return state.update(action.payload, container => (
        container.set('isFetching', true)
          .set('error', undefined)
      ));

    case FINISH_FETCHING_CONTAINER:
      return state.update(action.payload.container, container => (
        container.set('isFetching', false)
          .update('data', data => data
            .set(action.payload.entityType, fromJS(action.payload.entityIds))
          )
      ));

    case FAIL_FETCHING_CONTAINER:
      return state.update(action.payload.container, container => (
        container.set('isFetching', false)
          .set('error', action.error)
        ));

    default: return state;
  }
};

export default containerReducer;

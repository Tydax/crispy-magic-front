import { fromJS } from 'immutable';

import {
  INVALIDATE_CONTAINER,
  BEGIN_FETCHING_CONTAINER,
  FINISH_FETCHING_CONTAINER,
  FAIL_FETCHING_CONTAINER } from '../actions/container-actions';
import { ADD_CARD, REMOVE_CARD } from '../actions/card-actions';

const containerInitialState = (initialCardsData = []) => ({
  isFetching: false,
  lastSaved: undefined,
  error: undefined,
  data: {
    cards: initialCardsData,
  },
});

const containersInitialState = fromJS({
  deckbuilder: containerInitialState({}),
  library: containerInitialState(),
  search: containerInitialState(),
});

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

    case ADD_CARD:
    console.log('ADD_CARD');
      return state.update(action.payload.container, container => (
        container.update('data', data => data
          .update('cards', cards => {
            console.log(cards.get(action.payload.id));
            console.log(cards.update(action.payload.id, value => value + action.payload.amount));
            if (cards.get(action.payload.id)) {
              return cards.update(action.payload.id, value => value + action.payload.amount);
            } else {
              return cards.set(action.payload.id, action.payload.amount);
            }
          }))
      ));

    case REMOVE_CARD:
      return state.update(action.payload.container, container => (
        container.update('data', data => data
          .update('cards', cards => {
            const newAmount = cards.get(action.payload.id) - action.payload.amount
            if (newAmount > 0) {
              return cards.set(action.payload.id, newAmount);
            } else {
              return cards.remove(action.payload.id);
            }
          }))
      ));

    default: return state;
  }
};

export default containerReducer;

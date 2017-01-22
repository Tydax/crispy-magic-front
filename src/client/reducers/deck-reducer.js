import { List, Map, fromJS } from 'immutable';

import {
  ADD_CARD_COPY,REMOVE_CARD_COPY,
} from '../actions/card-actions';

import { INVALIDATE_CONTAINER } from '../actions/container-actions';

const initialState = Map({
  cardList: List(),
  isFetching: false,
});

const deckReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_COPY:
      return state.update('cardList', cardList =>
        cardList.update(action.payload.id, card => (
          card.set('numberCopies', card.get('numberCopies') + action.payload.amount)
      )));

    case REMOVE_CARD_COPY:
      return state.update('cardList', cardList =>
        cardList.update(action.payload.id, card => {
          const newAmount = new Number(card.get('numberCopies')) - action.payload.amount;
          if (newAmount > 0) {
            return card.set('numberCopies', newAmount);
          } else {
            return cardList.remove(action.payload.id);
          }
      }));

    default: return state;
  }
};

export default deckReducer;

import Immutable from 'immutable';

import {
  ADD_CARD_COPY, REMOVE_CARD_COPY
} from '../actions/Card/CardButt-actions';

const initialState = Immutable.Map({
  cardList: Immutable.List([{
    
  }]),
});

const deckReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_COPY:
      return state.update('cardList', cardList.update((cardList) => {
          const id = action.payload.id.toString();
          const card = cardList.get(id)
          return cardList.update(id, card.set('numberCopies', card.get('numberCopies') + action.payload.amount));
      }));

    case REMOVE_CARD_COPY:
      return state.update('cardList', cardList.update((cardList) => {
        const id = action.payload.id.toStrong();
        const card = cardList.get(id);
        const newAmount = card.get('numberCopies') - action.payload.amount;
        if (newAmount > 0) {
          return cardList.update(id, card.set('numberCopies', newAmount));
        } else {
          return cardList.remove(id);
        }
      }));

    default: return state;
  }
};

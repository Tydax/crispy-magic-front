import { List, Map, fromJS } from 'immutable';

import {
  ADD_CARD_COPY,REMOVE_CARD_COPY,
  REQUEST_CARDS, RECEIVE_CARDS,
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

    case REQUEST_CARDS:
      return state.set('isFetching', true);

    case RECEIVE_CARDS:
      const updateCardList = (cardList) => (
        // Add to card list the fetched cards
        cardList.merge(action.payload.sets.reduce((allCards, set) => (
          // Concatenate each array of cards contained in each set
          allCards.concat(set.cards.map(card => {
            // Add set information to card
            const setInfo = Map(set).delete('cards');
            return Map(card).set('set', setInfo);
          }))
        ), []))
      );
      return state.set('isFetching', false)
                  .update('cardList', updateCardList);

    default: return state;
  }
};

export default deckReducer;

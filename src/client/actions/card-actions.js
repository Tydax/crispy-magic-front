import fetch from 'isomorphic-fetch';
import { ApiUrl } from '../../shared/constants';

const ADD_CARD_COPY = 'ADD_CARD_COPY';
const addCardCopy = (id, amount) => ({
  type: ADD_CARD_COPY,
  payload: {
    id,
    amount,
  },
});

const REMOVE_CARD_COPY = 'REMOVE_CARD_COPY';
const removeCardCopy = (id, amount) => ({
  type: REMOVE_CARD_COPY,
  payload: {
    id,
    amount,
  },
});

const REQUEST_CARDS = 'REQUEST_CARDS';
const requestCards = container => ({
  type: REQUEST_CARDS,
  payload: container,
});

const RECEIVE_CARDS = 'RECEIVE_CARDS';
const receiveCards = (container, json) => ({
  type: RECEIVE_CARDS,
  payload: {
    container,
    sets: json,
    receivedAt: Date.now(),
  },
});

const fetchCards = (container, criteria) => (dispatch) => {
  dispatch(requestCards(container, criteria));
  return fetch(ApiUrl.Cards.retrieve(criteria.name, criteria.types, criteria.cmc))
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then(json => dispatch(receiveCards(container, json)));
};

export {
  ADD_CARD_COPY, addCardCopy,
  REMOVE_CARD_COPY,  removeCardCopy,
  REQUEST_CARDS, requestCards,
  RECEIVE_CARDS, receiveCards,
  fetchCards
};

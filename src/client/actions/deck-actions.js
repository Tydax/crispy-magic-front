import fetch from 'isomorphic-fetch';

import {
  beginFetchingContainer,
  finishFetchingContainer,
  failFetchingContainer,
} from './container-actions';

const UPDATE_DECK_NAME = 'UPDATE_DECK_NAME';
const updateDeckName = value => ({
  type: UPDATE_DECK_NAME,
  payload: value,
});

const SAVE_DECK = 'SAVE_DECK';
const saveDeck = (deck) => {
  dispatch(beginFetchingContainer(container, 'decks'));
  return fetch(ApiUrl['decks'].save(), {
    method: 'POST',
    body: JSON.stringify({
      deck
    })
  }).then(response => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    dispatch(finishFetchingContainer('deckbuilder'));
  );
};

export {
  UPDATE_DECK_NAME, updateDeckName,
};

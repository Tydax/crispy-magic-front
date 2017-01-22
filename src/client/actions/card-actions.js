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

export {
  ADD_CARD_COPY, addCardCopy,
  REMOVE_CARD_COPY,  removeCardCopy,
};

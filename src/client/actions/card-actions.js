const ADD_CARD = 'ADD_CARD';
const addCard = (container, id, amount) => ({
  type: ADD_CARD,
  payload: {
    container,
    id,
    amount,
  },
});

const REMOVE_CARD = 'REMOVE_CARD';
const removeCard = (container, id, amount) => ({
  type: REMOVE_CARD,
  payload: {
    container,
    id,
    amount,
  },
});

export {
  ADD_CARD, addCard,
  REMOVE_CARD,  removeCard,
};

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import deckReducer from './reducers/deck-reducer';
// import Home from './components/home';
import DeckBuilder from './components/DeckBuilder';

const store = createStore(combineReducers({
  deck: deckReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <DeckBuilder />
  </Provider>
  , document.querySelector('#root')
);

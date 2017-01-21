import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { ApiUrl } from '../shared/constants';
import { fetchCards } from './actions/card-actions';
import deckReducer from './reducers/deck-reducer';
// import Home from './components/home';
import DeckBuilder from './components/DeckBuilder';

const loggerMiddleware = createLogger();

const reducers = combineReducers({
  deck: deckReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));

const criteria = {
  name: 'gideon',
  types: 'c',
};

store.dispatch(fetchCards('deck', criteria)).then(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <DeckBuilder />
  </Provider>
  , document.querySelector('#root')
);

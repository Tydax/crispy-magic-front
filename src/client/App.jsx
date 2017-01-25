import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { ApiUrl } from '../shared/constants';
import { fetchEntities } from './actions/entity-actions'
import appReducer from './reducers/app-reducer';
// import Home from './components/home';
import DeckBuilder from './components/DeckBuilder';

const loggerMiddleware = createLogger();

const store = createStore(
  appReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));

const criteria = {
  name: 'gideon',
  types: 'cp',
};

store.dispatch(fetchEntities('cards', criteria, 'deck')).then(() =>
  console.log(store.getState())
);

criteria.name = 'plain';
criteria.types = 'l';

store.dispatch(fetchEntities('cards', criteria, 'deck')).then(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <DeckBuilder />
  </Provider>
  , document.querySelector('#root')
);

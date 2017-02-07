import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, DefaultRoute, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { ApiUrl, Routes } from '../shared/constants';
import { fetchEntities } from './actions/entity-actions'
import appReducer from './reducers/app-reducer';
import Home from './components/Home';
import Main from './components/Main';
import DeckList from './components/DeckList';
import DeckBuilder from './components/DeckBuilder';

const loggerMiddleware = createLogger();

const store = createStore(
  appReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path={Routes.root} component={Main}>
        <IndexRoute component={Home} />
        <Route path={Routes.myDecks} component={DeckList} />
        <Route path={Routes.deckBuilder} component={DeckBuilder} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root')
);

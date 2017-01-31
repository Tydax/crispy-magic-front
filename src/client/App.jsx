import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import { ApiUrl } from '../shared/constants';
import { fetchEntities } from './actions/entity-actions'
import appReducer from './reducers/app-reducer';
import Home from './components/Home';
import Main from './components/Main';
import DeckBuilder from './components/DeckBuilder';

const loggerMiddleware = createLogger();

const store = createStore(
  appReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));

/*
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="dist/" component={Main}>
        <IndexRoute component={DeckBuilder} />
        {/*<Route path="deckbuilder" component={DeckBuilder} />}
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root')
);
*/

ReactDOM.render(
  <Provider store={store}>
    <Main>
      <DeckBuilder />
    </Main>
  </Provider>
  , document.querySelector('#root')
);

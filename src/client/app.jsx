import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import helloReducer from './reducers/hello-reducer.js';
import Greeting from './containers/greeting.js'
import GreetingButton from './containers/greeting-button.js'

const store = createStore(combineReducers({
  greeting: helloReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Greeting />
      <GreetingButton />
    </div>
  </Provider>,
  document.querySelector('.app'));

import { combineReducers } from 'redux';

import entityReducer from './entity-reducer';

const appReducer = combineReducers({
  entities: entityReducer,
});

export default appReducer;

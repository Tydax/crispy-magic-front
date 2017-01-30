import { combineReducers } from 'redux';

import entityReducer from './entity-reducer';
import containerReducer from './container-reducer';

const appReducer = combineReducers({
  entities: entityReducer,
  containers: containerReducer,
});

export default appReducer;

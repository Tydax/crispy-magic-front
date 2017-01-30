import { combineReducers } from 'redux';

import entityReducer from './entity-reducer';
import containerReducer from './container-reducer';
import searchReducer from './search-reducer';

const appReducer = combineReducers({
  entities: entityReducer,
  containers: containerReducer,
  search: searchReducer,
});

export default appReducer;

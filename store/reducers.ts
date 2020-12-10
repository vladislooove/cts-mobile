// Libs
import { combineReducers } from 'redux';

// Constants
import { APP_REDUCER } from '../containers/App/constants';

// Reducers
import appReducer from '../containers/App/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    [APP_REDUCER]: appReducer,
    ...injectedReducers,
  });

  return rootReducer;
}

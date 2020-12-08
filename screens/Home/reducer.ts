// Constants
import { SET_AUTH, AUTHORIZED } from './constants';

// Types
import { HomeReducerState } from './types';

const initialState = {
  [AUTHORIZED]: false,
};

export default (state: HomeReducerState = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH:
      return {
        ...state,
        [AUTHORIZED]: payload,
      };
    default:
      return state;
  }
}

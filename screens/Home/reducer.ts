// Constants
import { SET_AUTH, AUTHORIZED, CCGS, SET_CCGS, PRACTICES, SET_PRACTICES } from './constants';

// Types
import { HomeReducerState } from './types';

const initialState = {
  [AUTHORIZED]: false,
  [CCGS]: [],
  [PRACTICES]: [],
};

export default (state: HomeReducerState = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH:
      return {
        ...state,
        [AUTHORIZED]: payload,
      };
    case SET_CCGS:
      return {
        ...state,
        [CCGS]: payload,
      };
    case SET_PRACTICES:
      return {
        ...state,
        [PRACTICES]: payload,
      };
    default:
      return state;
  }
}

// Constants
import { SET_AUTH, AUTHORIZED, CCGS, SET_CCGS, PRACTICES, SET_PRACTICES, LOADING, SET_LOADING } from './constants';

// Types
import { AppReducerState, SetAuthActionType, SetCcgsActionType, SetPracticesActionType, SetLoadingActionType } from './types';

const initialState = {
  [AUTHORIZED]: false,
  [CCGS]: [],
  [PRACTICES]: [],
  [LOADING]: false,
};

export default (state: AppReducerState = initialState, { type, payload }: SetAuthActionType | SetCcgsActionType | SetPracticesActionType) => {
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
    case SET_LOADING:
      return {
        ...state,
        [LOADING]: payload,
      };
    default:
      return state;
  }
}

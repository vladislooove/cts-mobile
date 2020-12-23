// Constants
import { SET_FACTORS, FACTORS } from './constants';

// Types
import { SetFactorsActionType, SystemState } from './types';

const initialState = {
  [FACTORS]: [],
};

export default (state: SystemState = initialState, { type, payload }: SetFactorsActionType) => {
  switch (type) {
    case SET_FACTORS:
      return {
        ...state,
        [FACTORS]: payload,
      };
    default:
      return state;
  }
}

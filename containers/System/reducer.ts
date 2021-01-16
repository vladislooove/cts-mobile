// Constants
import { SET_FACTORS, FACTORS, DIAGNOSIS, SET_DIAGNOSIS } from './constants';

// Types
import { SetDiagnosisActionType, SetFactorsActionType, SystemState } from './types';

const initialState = {
  [FACTORS]: [],
  [DIAGNOSIS]: null,
};

export default (state: SystemState = initialState, { type, payload }: SetFactorsActionType | SetDiagnosisActionType) => {
  switch (type) {
    case SET_FACTORS:
      return {
        ...state,
        [FACTORS]: payload,
      };
    case SET_DIAGNOSIS:
      return {
        ...state,
        [DIAGNOSIS]: payload,
      };
    default:
      return state;
  }
}

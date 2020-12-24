// Constants
import { GET_FACTORS, SET_FACTORS, SUBMIT_FACTORS } from './constants';

// Types
import { GetFactorsActionType, SetFactorsActionType, SubmitFactorsActionType } from './types';
import { Factor } from '../../services/factors/types';

export const getFactors = (): GetFactorsActionType => ({
  type: GET_FACTORS,
});

export const setFactors = (factors: Factor[]): SetFactorsActionType => ({
  type: SET_FACTORS,
  payload: factors,
});

export const submitFactors = (
  factors: { [key: string]: boolean | string },
): SubmitFactorsActionType => ({
  type: SUBMIT_FACTORS,
  payload: factors,
});

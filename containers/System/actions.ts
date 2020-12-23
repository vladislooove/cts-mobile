// Constants
import { GET_FACTORS, SET_FACTORS } from './constants';

// Types
import { GetFactorsActionType, SetFactorsActionType } from './types';
import { Factor } from '../../services/factors/types';

export const getFactors = (): GetFactorsActionType => ({
  type: GET_FACTORS,
});

export const setFactors = (factors: Factor[]): SetFactorsActionType => ({
  type: typeof SET_FACTORS,
  payload: factors,
});

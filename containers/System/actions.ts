// Constants
import { GET_FACTORS, SET_FACTORS, SUBMIT_FACTORS, SET_DIAGNOSIS } from './constants';

// Types
import { GetFactorsActionType, SetFactorsActionType, SubmitFactorsActionType, SetDiagnosisActionType } from './types';
import { Factor, Diagnosis } from '../../services/system/types';

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

export const setDiagnosis = (data: Diagnosis): SetDiagnosisActionType => ({
  type: SET_DIAGNOSIS,
  payload: data,
});

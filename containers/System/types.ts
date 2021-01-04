// Constants
import { GET_FACTORS, SET_FACTORS, FACTORS, SUBMIT_FACTORS, DIAGNOSIS, SET_DIAGNOSIS } from './constants';

// Types
import { Factor, Diagnosis } from '../../services/system/types';

// Action types
export interface GetFactorsActionType {
  type: typeof GET_FACTORS;
}

export interface SetFactorsActionType {
  type: typeof SET_FACTORS;
  payload: Factor[];
}

export interface SubmitFactorsActionType {
  type: typeof SUBMIT_FACTORS;
  payload: {
    factors: { [key: string]: boolean | string };
    categories: string[];
  }
}

export interface SetDiagnosisActionType {
  type: typeof SET_DIAGNOSIS;
  payload: Diagnosis;
}

// Data interfaces
export interface SystemState {
  [FACTORS]: Factor[];
  [DIAGNOSIS]: null | Diagnosis;
}

export interface FactorsByType {
  INVESTIGATION?: Factor[];
  RISK_FACTOR?: Factor[];
  SIGN?: Factor[];
  DIAGNOSTIC_PROBABILITY?: Factor[];
  LESION_FEATURE?: Factor[];
  SYMPTOM?: Factor[];
}

export interface FactorsBySystem {
  [system: string]: FactorsByType;
}
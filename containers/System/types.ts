// Constants
import { GET_FACTORS, SET_FACTORS, FACTORS } from './constants';

// Types
import { Factor } from '../../services/factors/types';

// Action types
export interface GetFactorsActionType {
  type: typeof GET_FACTORS;
}

export interface SetFactorsActionType {
  type: typeof SET_FACTORS;
  payload: Factor[];
}

// Data interfaces
export interface SystemState {
  [FACTORS]: Factor[];
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
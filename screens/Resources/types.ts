// Constants
import { GET_RESOURCES, SET_RESOURCES, RESOURCES } from './constants';

// Types
import { Resource } from '../../services/system/types';

// Action types
export interface GetResourcesActionType {
  type: typeof GET_RESOURCES;
}

export interface SetResourcesActionType {
  type: typeof SET_RESOURCES;
  payload: Resource[];
}

// Data interfaces
export interface ResourcesState {
  [RESOURCES]: Resource[];
}

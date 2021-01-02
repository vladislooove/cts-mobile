// Constants
import { GET_RESOURCES, SET_RESOURCES } from './constants';

// Types
import { GetResourcesActionType, SetResourcesActionType } from './types';
import { Resource } from '../../services/system/types';

export const getResources = (): GetResourcesActionType => ({
  type: GET_RESOURCES,
});

export const setResources = (resources: Resource[]): SetResourcesActionType => ({
  type: SET_RESOURCES,
  payload: resources,
});

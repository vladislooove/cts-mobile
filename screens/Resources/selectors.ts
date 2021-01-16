// Libs
import { createSelector } from 'reselect';

// Constants
import { RESOURCES, RESOURCES_REDUCER } from './constants';

// Types
import { ResourcesState } from './types';

export const resourcesState$ = (state: any): ResourcesState => state[RESOURCES_REDUCER];

export const resources$ = createSelector(
  resourcesState$,
  (state: ResourcesState) => state[RESOURCES],
);

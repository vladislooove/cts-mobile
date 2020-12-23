// Libs
import { createSelector } from 'reselect';

// Constants
import { SYSTEM_REDUCER, FACTORS } from './constants';

// Types
import { SystemState } from './types';
import { Factor } from '../../services/factors/types';

export const systemState$ = (state: any): SystemState => state[SYSTEM_REDUCER];

export const factors$ = createSelector(
  systemState$,
  (state: SystemState): Factor[] => state[FACTORS],
);
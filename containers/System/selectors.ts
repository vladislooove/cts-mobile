// Libs
import { createSelector } from 'reselect';

// Constants
import { SYSTEM_REDUCER, FACTORS, DIAGNOSIS } from './constants';

// Types
import { SystemState } from './types';
import { Diagnosis, Factor } from '../../services/system/types';

// Selectors
import { userCcg$ } from '../App/selectors';

// Utils
import { filterFactorsBySystems, filterFactorsByAlphabet } from './utils';

export const systemState$ = (state: any): SystemState => state[SYSTEM_REDUCER];

export const factors$ = createSelector(
  systemState$,
  (state: SystemState): Factor[] => state[FACTORS],
);

export const factorsByCategories$ = createSelector(
  factors$,
  userCcg$,
  (factors, ccg) => filterFactorsBySystems(factors, ccg?.id ?? ''),
);

export const diagnosis$ = createSelector(
  systemState$,
  (state: SystemState): Diagnosis | null => state[DIAGNOSIS],
);
// Constants
import { APP_REDUCER, CCGS, LOADING, PRACTICES, USER, JOB_ROLES } from './constants';

// Libs
import { createSelector } from 'reselect';

// Types
import { AppReducerState } from './types';
import { User } from '../../services/user/types';
import { Ccg } from '../../services/ccgs/types';
import { Practice } from '../../services/practices/types';
import { JobRole } from '../../services/jobRoles/types';

export const appState$ = (state: any) => state[APP_REDUCER] as AppReducerState;

export const loading$ = createSelector(appState$, (state: AppReducerState): boolean => state[LOADING]);
export const user$ = createSelector(appState$, (state: AppReducerState): User | null => state[USER]);
export const ccgs$ = createSelector(appState$, (state: AppReducerState): Ccg[] => state[CCGS]);
export const practices$ = createSelector(appState$, (state: AppReducerState): Practice[] => state[PRACTICES]);
export const jobRoles$ = createSelector(appState$, (state: AppReducerState): JobRole[] => state[JOB_ROLES]);

export const userCcg$ = createSelector(
  user$,
  ccgs$,
  practices$,
  (user, ccgs, practices) => {
    const practice = practices.find(({ id }) => user?.practiceId === id);
    const ccg = ccgs.find(({ id }) => practice?.ccg === id);

    return ccg;
  }
)
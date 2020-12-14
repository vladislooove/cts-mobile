// Constants
import { APP_REDUCER, LOADING } from './constants';

// Libs
import { createSelector } from 'reselect';

// Types
import { AppReducerState } from './types';

export const appState$ = (state: any) => state[APP_REDUCER] as AppReducerState;

export const loading$ = createSelector(appState$, (state: AppReducerState): boolean => state[LOADING]);
// Constants
import { SET_AUTH, INIT_APP, SET_CCGS, SET_PRACTICES, SET_LOADING } from './constants';

// Types
import { SetAuthActionType, InitAppActionType, SetCcgsActionType, SetPracticesActionType, SetLoadingActionType } from './types';
import { Ccg } from '../../services/ccgs/types';
import { Practice } from '../../services/practices/types';

export const setAuth = (payload: boolean): SetAuthActionType => ({
  type: SET_AUTH,
  payload,
});

export const initApp = (): InitAppActionType => ({
  type: INIT_APP,
});

export const setCcgs = (payload: Ccg[]): SetCcgsActionType => ({
  type: SET_CCGS,
  payload,
});

export const setPractices = (payload: Practice[]): SetPracticesActionType => ({
  type: SET_PRACTICES,
  payload,
});

export const setLoading = (payload: boolean): SetLoadingActionType => ({
  type: SET_LOADING,
  payload,
});

// Constants
import {
  SET_AUTH,
  INIT_APP,
  SET_CCGS,
  SET_PRACTICES,
  SET_LOADING,
  SET_USER,
  SET_JOB_ROLES,
} from './constants';

// Types
import {
  SetAuthActionType,
  InitAppActionType,
  SetCcgsActionType,
  SetPracticesActionType,
  SetLoadingActionType,
  SetUserActionType,
  SetJobRolesActionType,
} from './types';
import { Ccg } from '../../services/ccgs/types';
import { Practice } from '../../services/practices/types';
import { User } from '../../services/user/types';
import { JobRole } from '../../services/jobRoles/types';

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

export const setUser = (user: User): SetUserActionType => ({
  type: SET_USER,
  payload: user,
});

export const setJobRoles = (payload: JobRole[]): SetJobRolesActionType => ({
  type: SET_JOB_ROLES,
  payload,
});

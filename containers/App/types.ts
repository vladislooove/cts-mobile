// Constants
import {
  SET_AUTH,
  AUTHORIZED,
  INIT_APP,
  SET_CCGS,
  CCGS,
  PRACTICES,
  SET_PRACTICES,
  SET_LOADING,
  LOADING,
  SET_USER,
  USER,
} from './constants';

// Types
import { Ccg } from '../../services/ccgs/types';
import { Practice } from '../../services/practices/types';
import { User } from '../../services/user/types';

// Action types
export interface SetAuthActionType {
  type: typeof SET_AUTH;
  payload: boolean;
}

export interface InitAppActionType {
  type: typeof INIT_APP;
}

export interface SetCcgsActionType {
  type: typeof SET_CCGS;
  payload: Ccg[];
}

export interface SetPracticesActionType {
  type: typeof SET_PRACTICES;
  payload: Practice[];
}

export interface SetLoadingActionType {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface SetUserActionType {
  type: typeof SET_USER;
  payload: User;
}

// Data interfaces
export interface AppReducerState {
  [AUTHORIZED]: boolean;
  [CCGS]: Ccg[];
  [PRACTICES]: Practice[];
  [LOADING]: boolean;
  [USER]: null | User;
}
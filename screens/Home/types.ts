// Constants
import { LOGIN, SET_AUTH, AUTHORIZED, INIT_APP } from './constants';

// Types
import { LoginPayload } from '../../services/user/types';

// Action types
export interface LoginActionType {
  type: typeof LOGIN;
  payload: LoginPayload;
}

export interface SetAuthActionType {
  type: typeof SET_AUTH;
  payload: boolean;
}

export interface InitAppActionType {
  type: typeof INIT_APP;
}

// Data interfaces
export interface HomeReducerState {
  [AUTHORIZED]: boolean;
}
// Constants
import { LOGIN, SET_AUTH, INIT_APP } from './constants';

// Types
import { LoginActionType, SetAuthActionType, InitAppActionType } from './types';
import { LoginPayload } from '../../services/user/types';

export const login = (payload: LoginPayload): LoginActionType => ({
  type: LOGIN,
  payload,
});

export const setAuth = (payload: boolean): SetAuthActionType => ({
  type: SET_AUTH,
  payload,
});

export const initApp = (): InitAppActionType => ({
  type: INIT_APP,
});

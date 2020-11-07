// Constants
import { LOGIN } from './constants';

// Types
import { LoginPayload, LoginActionType } from './types';

export const login = (payload: LoginPayload): LoginActionType => ({
  type: LOGIN,
  payload,
});

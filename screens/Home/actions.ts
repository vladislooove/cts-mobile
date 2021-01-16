// Constants
import { LOGIN } from './constants';

// Types
import { LoginActionType } from './types';
import { LoginPayload } from '../../services/user/types';

export const login = (payload: LoginPayload): LoginActionType => ({
  type: LOGIN,
  payload,
});

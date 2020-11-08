// Constants
import { LOGIN } from './constants';

// Types
import { LoginPayload } from '../../services/user/types';

export interface LoginActionType {
  type: typeof LOGIN;
  payload: LoginPayload;
}

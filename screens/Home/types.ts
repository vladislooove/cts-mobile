// Constants
import { LOGIN } from './constants';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginActionType {
  type: typeof LOGIN;
  payload: LoginPayload;
}

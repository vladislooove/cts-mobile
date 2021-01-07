// Constants
import { SIGNUP } from './constants';

// Types
import { SignUpPayload } from '../../services/user/types';

export interface SignUpActionType {
  type: typeof SIGNUP;
  payload: Partial<SignUpPayload>;
}
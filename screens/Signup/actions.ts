// Constants
import { SIGNUP } from './constants';

// Types
import { SignUpPayload } from '../../services/user/types';
import { SignUpActionType } from './types';

export const signUp = (data: Partial<SignUpPayload>): SignUpActionType => ({
  type: SIGNUP,
  payload: data,
});

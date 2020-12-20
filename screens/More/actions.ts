// Constants
import { LOGOUT } from './constants';

// Types
import { LogoutActionType } from './types';

export const logout = (): LogoutActionType => ({
  type: LOGOUT,
});

// Constants
import { UPDATE_USER } from './constants';

// Types
import { User } from '../../services/user/types';
import { UpdateUserActionType } from './types';

export const updateUser = (data: Partial<User>): UpdateUserActionType => ({
  type: UPDATE_USER,
  payload: data,
});

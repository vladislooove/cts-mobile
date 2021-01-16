// Constants
import { UPDATE_USER } from './constants';

// Types
import { User } from '../../services/user/types';

export interface UpdateUserActionType {
  type: typeof UPDATE_USER;
  payload: Partial<User>;
}

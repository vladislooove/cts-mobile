// Constants
import { NOTIFICATIONS, SET_NOTIFICATIONS } from './constants';

// Types
import { DashboardState, SetNotificationsActionType } from './types';

const initialState = {
  [NOTIFICATIONS]: [],
};

export default (state: DashboardState = initialState, { type, payload }: SetNotificationsActionType) => {
  switch (type) {
    case SET_NOTIFICATIONS:
      return {
        ...state,
        [NOTIFICATIONS]: payload,
      };
    default:
      return state;
  }
}

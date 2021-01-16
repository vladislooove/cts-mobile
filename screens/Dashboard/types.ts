// Constants
import { GET_NOTIFICATIONS, SET_NOTIFICATIONS, NOTIFICATIONS } from './constants';

// Types
import { Notification } from '../../services/notifications/types';

export interface GetNotificationsActionType {
  type: typeof GET_NOTIFICATIONS;
}

export interface SetNotificationsActionType {
  type: typeof SET_NOTIFICATIONS;
  payload: Notification[];
}

export interface DashboardState {
  [NOTIFICATIONS]: Notification[];
}
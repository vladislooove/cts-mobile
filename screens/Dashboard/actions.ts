// Constants
import { GET_NOTIFICATIONS, SET_NOTIFICATIONS } from './constants';

// Types
import { GetNotificationsActionType, SetNotificationsActionType } from './types';
import { Notification } from '../../services/notifications/types';

export const getNotifications = (): GetNotificationsActionType => ({
  type: GET_NOTIFICATIONS,
});

export const setNotifications = (payload: Notification[]): SetNotificationsActionType => ({
  type: SET_NOTIFICATIONS,
  payload,
});

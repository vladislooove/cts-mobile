// Constants
import { DASHBOARD_REDUCER, NOTIFICATIONS } from './constants';

// Libs
import { createSelector } from 'reselect';

// Types
import { DashboardState } from './types';
import { Notification } from '../../services/notifications/types';

export const notificationsState$ = (state: any) => state[DASHBOARD_REDUCER];

export const notifications$ = createSelector(
  notificationsState$,
  (state: DashboardState): Notification[] => state[NOTIFICATIONS],
);
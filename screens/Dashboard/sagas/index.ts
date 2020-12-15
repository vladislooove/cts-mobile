// Effects
import { takeLatest } from 'redux-saga/effects';

// Constants
import { GET_NOTIFICATIONS } from '../constants';

// Sagas
import getNotifications from './getNotifications';

export default function* dashboardSaga() {
  yield takeLatest(GET_NOTIFICATIONS, getNotifications);
}

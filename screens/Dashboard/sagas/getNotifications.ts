// Effects
import { call, put } from 'redux-saga/effects';

// Actions
import { setLoading } from '../../../containers/App/actions';
import { setNotifications } from '../actions';

// Services
import notificationsService from '../../../services/notifications';

export default function* getNotifications() {
  yield put(setLoading(true));
  const { response } = yield call([notificationsService, notificationsService.getAll]);
  yield put(setNotifications(response));
  yield put(setLoading(false));
}
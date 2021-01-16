// Effects
import { call, put } from 'redux-saga/effects';

// Actions
import { setLoading } from '../../../containers/App/actions';
import { setResources } from '../actions';

// Services
import systemService from '../../../services/system';

export default function* getNotifications() {
  yield put(setLoading(true));
  const { response } = yield call([systemService, systemService.getResources]);
  yield put(setResources(response));
  yield put(setLoading(false));
}
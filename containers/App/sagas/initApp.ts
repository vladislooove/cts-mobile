// Libs
import AsyncStorage from '@react-native-async-storage/async-storage';

// Effects
import { call, put } from 'redux-saga/effects';

// Actions
import { setAuth, setCcgs, setPractices, setLoading } from '../actions';

// Constants
import { DASHBOARD_SCREEN } from '../../../configs/routing/constants';

// Services
import ccgService from '../../../services/ccgs';
import practicesService from '../../../services/practices';
import navigationService from '../../../services/navigation';

export default function* initApp() {
  yield put(setLoading(true));
  const token = yield AsyncStorage.getItem('accessToken');
  yield put(setAuth(!!token));
  const ccgs = yield call([ccgService, ccgService.getAll]);
  const practices = yield call([practicesService, practicesService.getAll]);
  yield put(setCcgs(ccgs));
  yield put(setPractices(practices));

  if (!!token) {
    yield call([navigationService, navigationService.navigate], DASHBOARD_SCREEN);
  }

  // yield put(setLoading(false));
}

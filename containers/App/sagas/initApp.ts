// Libs
import AsyncStorage from '@react-native-async-storage/async-storage';

// Effects
import {call, put } from 'redux-saga/effects';

// Actions
import { setAuth, setCcgs, setPractices } from '../actions';

// Constants
import { DASHBOARD_SCREEN } from '../../../configs/screens';

// Services
import ccgService from '../../../services/ccgs';
import practicesService from '../../../services/practices';
import navigationService from '../../../services/navigation';

export default function* initApp() {
  const token = yield AsyncStorage.getItem('accessToken');
  yield put(setAuth(!!token));
  const ccgs = yield call([ccgService, ccgService.getAll]);
  const practices = yield call([practicesService, practicesService.getAll]);
  yield put(setCcgs(ccgs));
  yield put(setPractices(practices));

  if (!!token) {
    yield call([navigationService, navigationService.navigate], DASHBOARD_SCREEN);
  }
}

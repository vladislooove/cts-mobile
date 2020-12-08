// Libs
import AsyncStorage from '@react-native-async-storage/async-storage';

// Effects
import { all, call, put } from 'redux-saga/effects';

// Actions
import { setAuth, setCcgs, setPractices } from '../actions';

// Services
import ccgService from '../../../services/ccgs';
import practicesService from '../../../services/practices';

export default function* initApp() {
  const token = yield AsyncStorage.getItem('accessToken');
  yield put(setAuth(!!token));
  const ccgs = yield call([ccgService, ccgService.getAll]);
  const practices = yield call([practicesService, practicesService.getAll]);
  yield put(setCcgs(ccgs));
  yield put(setPractices(practices));
}

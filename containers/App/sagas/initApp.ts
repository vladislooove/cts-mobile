// Libs
import AsyncStorage from '@react-native-async-storage/async-storage';

// Effects
import { call, put } from 'redux-saga/effects';

// Actions
import { setAuth, setCcgs, setPractices, setLoading, setUser } from '../actions';

// Constants
import { DASHBOARD_SCREEN } from '../../../configs/routing/constants';

// Services
import ccgService from '../../../services/ccgs';
import practicesService from '../../../services/practices';
import navigationService from '../../../services/navigation';
import userService from '../../../services/user';

export default function* initApp() {
  yield put(setLoading(true));
  const token = yield AsyncStorage.getItem('accessToken');
  yield put(setAuth(!!token));

  if (!!token) {
    yield call([navigationService, navigationService.reset], {
      index: 0,
      routes: [
        { name: DASHBOARD_SCREEN },
      ],
    });
    const { response: user } = yield call([
      userService,
      userService.getUser
    ]);
    yield put(setUser(user));
  }

  const { response: ccgs } = yield call([ccgService, ccgService.getAll]);
  const { response: practices } = yield call([practicesService, practicesService.getAll]);
  yield put(setCcgs(ccgs));
  yield put(setPractices(practices));
  yield put(setLoading(false));
}

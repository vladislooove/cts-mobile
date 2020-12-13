// Libs
import AsyncStorage from '@react-native-async-storage/async-storage';

// Effects
import { call, put } from 'redux-saga/effects';

// Types
import { LoginActionType } from '../types';

// Actions
import { setAuth } from '../../../containers/App/actions';

// Constants
import { DASHBOARD_SCREEN } from '../../../configs/routing/constants';

// Services
import userService from '../../../services/user';
import navigationService from '../../../services/navigation';

export default function* login({ payload }: LoginActionType) {
  const { accessToken, refreshToken } = yield call([userService, userService.login], payload);
  yield put(setAuth(true));
  yield AsyncStorage.setItem('accessToken', accessToken);
  yield AsyncStorage.setItem('refreshToken', refreshToken);
  yield call([navigationService, navigationService.navigate], DASHBOARD_SCREEN);
}

// Libs
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";

// Effects
import { call, put } from 'redux-saga/effects';

// Types
import { LoginActionType } from '../types';

// Actions
import { setAuth, setLoading } from '../../../containers/App/actions';

// Constants
import { DASHBOARD_SCREEN } from '../../../configs/routing/constants';

// Services
import userService from '../../../services/user';
import navigationService from '../../../services/navigation';

export default function* login({ payload }: LoginActionType) {
  yield put(setLoading(true));
  const { response, status } = yield call([userService, userService.login], payload);

  if (status === 200) {
    const { accessToken, refreshToken } = response;
    yield put(setAuth(true));
    yield AsyncStorage.setItem('accessToken', accessToken);
    yield AsyncStorage.setItem('refreshToken', refreshToken);
    yield call([navigationService, navigationService.navigate], DASHBOARD_SCREEN);
  } else if (status === 401) {
    Alert.alert(
      '',
      'Your details are not recognized. Please check and submit again. If you have forgotten your password please check the link shown',
      [
        {
          text: 'DISMISS',
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  }

  yield put(setLoading(false));
}

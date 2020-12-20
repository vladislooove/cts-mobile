// Libs
import AsyncStorage from '@react-native-async-storage/async-storage';

// Effects
import { call, put } from 'redux-saga/effects';

// Actions
import { setAuth } from '../../../containers/App/actions';

// Constants
import { HOME_SCREEN } from '../../../configs/routing/constants';

// Services
import navigationService from '../../../services/navigation';

export default function* logout() {
  yield AsyncStorage.removeItem('accessToken');
  yield put(setAuth(false));
  yield call([navigationService, navigationService.reset], {
    index: 0,
    routes: [
      { name: HOME_SCREEN },
    ],  
  });
}

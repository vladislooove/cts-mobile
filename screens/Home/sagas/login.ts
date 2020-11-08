// Effects
import { call } from 'redux-saga/effects';

// Types
import { LoginActionType } from '../types';

// Constants
import { DASHBOARD_SCREEN } from '../../../configs/screens';

// Services
import userService from '../../../services/user';
import navigationService from '../../../services/navigation';

export default function* login({ payload }: LoginActionType) {
  yield call([userService, userService.login], payload);
  yield call([navigationService, navigationService.navigate], DASHBOARD_SCREEN);
}

// Effects
import { call } from 'redux-saga/effects';

// Types
import { LoginActionType } from '../types';

// Services
import userService from '../../../services/user';

export default function* login({ payload }: LoginActionType) {
  const response = yield call([userService, userService.login], payload);
}

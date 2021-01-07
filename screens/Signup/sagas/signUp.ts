// Effects
import { call, put } from 'redux-saga/effects';

// Libs
import { Alert } from 'react-native';

// Actions
import { setLoading } from '../../../containers/App/actions';
import { login as loginAction } from '../../Home/actions';

// Services
import userService from '../../../services/user';

// Sagas
import login from '../../Home/sagas/login';

// Types
import { SignUpActionType } from '../types';

export default function* signUp({ payload }: SignUpActionType) {
  yield put(setLoading(true));
  const { status } = yield call([userService, userService.signUp], payload);

  if (status === 409) {
    yield put(setLoading(false));
    Alert.alert(
      '',
      'User with such email is already exist.',
      [
        {
          text: 'OK',
        },
      ],
      { cancelable: true }
    );
    return;
  }

  if (status === 403) {
    yield put(setLoading(false));
    Alert.alert(
      '',
      'We are sorry but you do not have access to the tool.',
      [
        {
          text: 'OK',
        },
      ],
      { cancelable: true }
    );
    return;
  }

  yield call(login, loginAction({
    email: payload.email as string,
    password: payload.password as string,
  }));
}
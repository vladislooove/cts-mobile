// Effects
import { takeLatest } from 'redux-saga/effects';

// Constants
import { LOGIN, INIT_APP } from '../constants';

// Sagas
import login from './login';
import initApp from './initApp';

export default function* homeSaga() {
  yield takeLatest(INIT_APP, initApp);
  yield takeLatest(LOGIN, login);
}

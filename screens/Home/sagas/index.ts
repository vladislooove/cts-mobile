// Effects
import { takeLatest } from 'redux-saga/effects';

// Constants
import { LOGIN } from '../constants';

// Sagas
import login from './login';

export default function* homeSaga() {
  // yield takeLatest(LOGIN, login);
}

// Effects
import { takeLatest } from 'redux-saga/effects';

// Constants
import { LOGOUT } from '../constants';

// Sagas
import logout from './logout';

export default function* moreSaga() {
  yield takeLatest(LOGOUT, logout);
}

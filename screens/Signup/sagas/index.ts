// Effects
import { takeLatest } from 'redux-saga/effects';

// Constants
import { SIGNUP } from '../constants';

// Sagas
import signUp from './signUp';

export default function* signUpSaga() {
  yield takeLatest(SIGNUP, signUp);
}
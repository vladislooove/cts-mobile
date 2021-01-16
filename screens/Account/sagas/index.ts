// Effects
import { takeLatest } from 'redux-saga/effects';

// Constants
import { UPDATE_USER } from '../constants';

// Sagas
import updateUser from './updateUser';

export default function* accountSaga() {
  yield takeLatest(UPDATE_USER, updateUser);
};

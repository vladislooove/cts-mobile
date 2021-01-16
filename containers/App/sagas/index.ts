// Effects
import { takeLatest } from 'redux-saga/effects';

// Constants
import { INIT_APP } from '../constants';

// Sagas
import initApp from './initApp';

export default function* homeSaga() {
  yield takeLatest(INIT_APP, initApp);
}

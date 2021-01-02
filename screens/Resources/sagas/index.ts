// Effects
import { takeLatest } from 'redux-saga/effects';

// Constants
import { GET_RESOURCES } from '../constants';

// Sagas
import getResources from './getResources';

export default function* dashboardSaga() {
  yield takeLatest(GET_RESOURCES, getResources);
}

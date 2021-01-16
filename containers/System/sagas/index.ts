// Effects
import { takeLatest, takeLeading } from 'redux-saga/effects';

// Constants
import { GET_FACTORS, SUBMIT_FACTORS } from '../constants';

// Sagas
import getFactors from './getFactors';
import submitFactors from './submitFactors';

export default function* systemSaga() {
  yield takeLeading(GET_FACTORS, getFactors);
  yield takeLatest(SUBMIT_FACTORS, submitFactors);
}

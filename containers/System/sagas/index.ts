// Effects
import { takeLeading } from 'redux-saga/effects';

// Constants
import { GET_FACTORS } from '../constants';

// Sagas
import getFactors from './getFactors';

export default function* systemSaga() {
  yield takeLeading(GET_FACTORS, getFactors);
}

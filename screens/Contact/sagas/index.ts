// Effects
import { takeLatest } from 'redux-saga/effects';

// Constants
import { SEND_FEEDBACK } from '../constants';

// Sagas
import sendFeedback from './sendFeedback';

export default function* contactSaga() {
  yield takeLatest(SEND_FEEDBACK, sendFeedback);
}

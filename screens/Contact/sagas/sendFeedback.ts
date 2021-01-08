// Effects
import { put, call } from 'redux-saga/effects';

// Actions
import { setLoading } from '../../../containers/App/actions';

// Services
import userService from '../../../services/user';

// Types
import { SendFeedbackActionType } from '../types';

export default function* sendFeedback({ payload }: SendFeedbackActionType) {
  yield put(setLoading(true));
  yield call([userService, userService.sendFeedback], payload);
  yield put(setLoading(false));
};

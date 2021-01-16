// Effects
import { call, put, select } from 'redux-saga/effects';

// Actions
import { setLoading, setUser } from '../../../containers/App/actions';

// Selectors
import { user$ } from '../../../containers/App/selectors';

// Services
import userService from '../../../services/user';

// Types
import { UpdateUserActionType } from '../types';

export default function* updateUser({ payload }: UpdateUserActionType) {
  yield put(setLoading(true));
  yield call([userService, userService.patchUser], payload);
  const user = yield select(user$);
  yield put(setUser({
    ...user,
    ...payload,
  }));
  yield put(setLoading(false));
}
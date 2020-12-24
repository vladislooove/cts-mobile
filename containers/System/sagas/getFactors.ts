// Effects
import { call, put, select } from 'redux-saga/effects';

// Actions
import { setLoading } from '../../App/actions';
import { setFactors } from '../actions';

// Selectors
import { factors$ } from '../selectors';

// Services
import systemService from '../../../services/system';

export default function* getFactors() {
  const factors = yield select(factors$);

  if (factors.length) {
    return;
  }

  yield put(setLoading(true));
  const { response } = yield call([systemService, systemService.getFactors]);
  yield put(setFactors(response));
  yield put(setLoading(false));
}

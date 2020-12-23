// Effects
import { call, put, select } from 'redux-saga/effects';

// Actions
import { setLoading } from '../../App/actions';
import { setFactors } from '../actions';

// Selectors
import { factors$ } from '../selectors';

// Services
import factorsService from '../../../services/factors';

export default function* getFactors() {
  const factors = yield select(factors$);

  if (factors.length) {
    return;
  }

  yield put(setLoading(true));
  const { response } = yield call([factorsService, factorsService.getAll]);
  yield put(setFactors(response));
  yield put(setLoading(false));
}

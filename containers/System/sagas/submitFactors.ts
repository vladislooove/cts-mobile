// Effects
import { call, put } from 'redux-saga/effects';

// Actions
import { setLoading } from '../../App/actions';
import { setDiagnosis } from '../actions';

// Constants
import { RESULTS_SCREEN } from '../../../configs/routing/constants';

// Services
import systemService from '../../../services/system';
import navigationService from '../../../services/navigation';

// Types
import { SubmitFactorsActionType } from '../types';

export default function* submitFactors({ payload }: SubmitFactorsActionType) {
  yield put(setLoading(true));
  const { response } = yield call([systemService, systemService.postFactors], payload);
  yield put(setDiagnosis(response));
  yield put(setLoading(false));
  yield call([navigationService, navigationService.navigate], RESULTS_SCREEN);
}

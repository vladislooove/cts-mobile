// Libs
import AsyncStorage from '@react-native-async-storage/async-storage';

// Effects
import { call, put } from 'redux-saga/effects';

// Actions
import { setAuth, setCcgs, setPractices, setLoading, setUser, setJobRoles } from '../actions';

// Constants
import { DASHBOARD_SCREEN } from '../../../configs/routing/constants';

// Services
import ccgService from '../../../services/ccgs';
import practicesService from '../../../services/practices';
import jobRolesService from '../../../services/jobRoles';
import navigationService from '../../../services/navigation';
import userService from '../../../services/user';

export default function* initApp() {
  yield put(setLoading(true));
  const token = yield AsyncStorage.getItem('accessToken');
  yield put(setAuth(!!token));

  if (!!token) {
    yield call([navigationService, navigationService.reset], {
      index: 0,
      routes: [
        { name: DASHBOARD_SCREEN },
      ],
    });
    const { response: user } = yield call([
      userService,
      userService.getUser
    ]);
    yield put(setUser(user));
  }

  const cachedCCGS = yield AsyncStorage.getItem('ccgs');
  const cachedPractices = yield AsyncStorage.getItem('practices');
  const cachedJobRoles = yield AsyncStorage.getItem('jobRoles');

  if (!cachedCCGS) {
    const { response } = yield call([ccgService, ccgService.getAll]);
    yield put(setCcgs(response));
    yield AsyncStorage.setItem('ccgs', JSON.stringify(response));
  } else {
    const ccgs = yield AsyncStorage.getItem('ccgs');
    yield put(setCcgs(JSON.parse(ccgs)));
  }

  if (!cachedPractices) {
    const { response } = yield call([practicesService, practicesService.getAll]);
    yield put(setPractices(response));
    yield AsyncStorage.setItem('practices', JSON.stringify(response));
  } else {
    const practices = yield AsyncStorage.getItem('practices');
    yield put(setPractices(JSON.parse(practices)));
  }

  if (!cachedJobRoles) {
    const { response } = yield call([jobRolesService, jobRolesService.getAll]);
    yield put(setJobRoles(response));
    yield AsyncStorage.setItem('jobRoles', JSON.stringify(response));
  } else {
    const jobRoles = yield AsyncStorage.getItem('jobRoles');
    yield put(setJobRoles(JSON.parse(jobRoles)));
  }

  yield put(setLoading(false));
}

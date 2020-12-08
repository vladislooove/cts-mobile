// Libs
import AsyncStorage from '@react-native-async-storage/async-storage';

// Effects
import { put } from 'redux-saga/effects';

// Actions
import { setAuth } from '../actions';

export default function* initApp() {
  const token = AsyncStorage.getItem('accessToken');
  yield put(setAuth(!!token));
}

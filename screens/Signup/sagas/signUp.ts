// Effects
import { call, put } from 'redux-saga/effects';

// Types
import { SignUpActionType } from '../types';

export default function* signUp({ payload }: SignUpActionType) {
  console.log(payload);
}
// Libs
import {
  useInjectReducer as useReducer,
  useInjectSaga as useSaga,
} from 'redux-injectors';

// Types
import { InjectReducerParams, InjectSagaParams } from '../store/types';

const useInjectReducer = ({ key, reducer }: InjectReducerParams) =>
  useReducer({ key, reducer });

export { useInjectReducer };

const useInjectSaga = ({ key, saga, mode }: InjectSagaParams) =>
  useSaga({ key, saga, mode });

export { useInjectSaga };

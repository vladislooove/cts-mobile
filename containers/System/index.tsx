// Libs
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { getFactors } from './actions';

// Utils
import { useInjectReducer, useInjectSaga } from '../../hooks/reduxInjectors';

// Constants
import { SYSTEM_REDUCER, SYSTEM_SAGA } from './constants';

// Reducer
import reducer from './reducer';

// Sagas
import saga from './sagas';

export const SystemContainer: FC = ({ children }) => {
  const dispatch = useDispatch();

  useInjectReducer({ key: SYSTEM_REDUCER, reducer });
  useInjectSaga({ key: SYSTEM_SAGA, saga });

  useEffect(() => {
    dispatch(getFactors());
  }, [dispatch]);

  return <>{children}</>;
};

export default SystemContainer;

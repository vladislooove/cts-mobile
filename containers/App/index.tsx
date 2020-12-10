// Libs
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { initApp } from './actions';

// Utils
import { useInjectSaga } from '../../hooks/reduxInjectors';

// Constants
import { APP_SAGA } from './constants';

// Saga
import saga from './sagas';

export const AppContainer: FC = ({ children }) => {
  const dispatch = useDispatch();

  useInjectSaga({ key: APP_SAGA, saga });

  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);

  return (
    <>
      {children}
    </>
  );
};

export default AppContainer;

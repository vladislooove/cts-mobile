// Libs
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';

// Components
import Navigation from '../../components/Navigation';

// Utils
import { useInjectSaga, useInjectReducer } from '../../hooks/reduxInjectors';

// Actions
import { getNotifications } from './actions';

// Constants
import { DASHBOARD_SAGA, DASHBOARD_REDUCER } from './constants';

// Saga
import saga from './sagas';

// Reducer
import reducer from './reducer';

export const Dashboard: FC = () => {
  const dispatch = useDispatch();
  
  useInjectSaga({ key: DASHBOARD_SAGA, saga });
  useInjectReducer({ key: DASHBOARD_REDUCER, reducer });

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  return (
    <View>
      <Navigation />
    </View>
  );
};

export default Dashboard;

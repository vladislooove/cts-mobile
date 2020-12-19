// Libs
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, ImageBackground } from 'react-native';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import Notifications from './components/Notifications';

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

// Styles
import styles from './styles';

export const Dashboard: FC = () => {
  const dispatch = useDispatch();
  
  useInjectSaga({ key: DASHBOARD_SAGA, saga });
  useInjectReducer({ key: DASHBOARD_REDUCER, reducer });

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Navigation />
      <View style={styles.wrapper}>
        <ImageBackground source={require('../../assets/dashboard-bg.jpg')} style={styles.containerImage} />
        <View style={styles.titleWrapper}>
          <Title>
            Welcome
          </Title>
        </View>
        <Notifications />
      </View>
    </View>
  );
};

export default Dashboard;

// Libs
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, ImageBackground, Button } from 'react-native';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import Notifications from './components/Notifications';

// Utils
import { useInjectSaga, useInjectReducer } from '../../hooks/reduxInjectors';

// Actions
import { getNotifications } from './actions';

// Constants
import { SYSTEM_SCREEN, SEARCH_SCREEN } from '../../configs/routing/constants';
import { DASHBOARD_SAGA, DASHBOARD_REDUCER } from './constants';

// Saga
import saga from './sagas';

// Reducer
import reducer from './reducer';

// Styles
import styles from './styles';

// Services
import navigationService from '../../services/navigation';

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
        <View style={styles.buttonsWrapper}>
          <View style={styles.buttonWrapper}>
            <Button
              title="System"
              onPress={() => navigationService.navigate(SYSTEM_SCREEN)}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Search"
              onPress={() => navigationService.navigate(SEARCH_SCREEN)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

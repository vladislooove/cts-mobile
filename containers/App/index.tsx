// Libs
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';

// Actions
import { initApp } from './actions';

// Utils
import { useInjectSaga } from '../../hooks/reduxInjectors';

// Constants
import { APP_SAGA } from './constants';

// Saga
import saga from './sagas';

// Selectors
import { loading$ } from './selectors';

// Styles
import styles from './styles';
import { COLOR_SECONDARY } from '../../styles/constants';

export const AppContainer: FC = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector(loading$);

  useInjectSaga({ key: APP_SAGA, saga });
  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);

  return (
    <View style={styles.appWrapper}>
      {loading && (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size="large" color={COLOR_SECONDARY} />
        </View>
      )}
      {children}
    </View>
  );
};

export default AppContainer;

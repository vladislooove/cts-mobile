// Libs
import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

// Utils
import { useInjectSaga } from '../../hooks/reduxInjectors';

// Components
import LoginForm from './components/LoginForm';

// Constants
import { LOGIN, LOGIN_SAGA } from './constants';

// Saga
import saga from './sagas';

// Actions
import { login } from './actions';

// Types
import { LoginPayload } from './types';

export const Login = (): ReactElement => {
  useInjectSaga({ key: LOGIN_SAGA, saga });
  const dispatch = useDispatch();

  const onFormSubmit = (data: LoginPayload) => {
    dispatch(login(data));
  };

  return (
    <View>
      <LoginForm onSubmit={onFormSubmit} />
    </View>
  );
};

export default Login;

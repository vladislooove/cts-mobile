// Libs
import React, { FC, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';

// Utils
import { useInjectSaga } from '../../hooks/reduxInjectors';

// Constants
import { SIGNUP_SCREEN } from '../../configs/screens';
import { HOME_SAGA } from './constants';

// Saga
import saga from './sagas';

// Actions
import { login } from './actions';

// Services
import navigationService from '../../services/navigation';

export const Home: FC = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useInjectSaga({ key: HOME_SAGA, saga });
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (isLoginFormVisible) {
      return dispatch(login({
        email,
        password,
      }));
    }

    setIsLoginFormVisible(true);
  };

  const handleSignup = () => {
    navigationService.navigate(SIGNUP_SCREEN);
  };

  return (
    <View>
      {isLoginFormVisible && (
        <>
          <TextInput
            autoCompleteType="email"
            textContentType="emailAddress"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            autoCompleteType="password"
            textContentType="password"
            value={password}
            onChangeText={setPassword}
          />
        </>
      )}
      <Button
        title="Sign Up"
        onPress={handleSignup}
      />
      <Button
        title="Log In"
        onPress={handleLogin}
      />
    </View>
  );
};

export default Home;

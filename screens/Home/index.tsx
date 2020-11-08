// Libs
import React, { ReactElement, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';

// Utils
import { useInjectSaga } from '../../hooks/reduxInjectors';

// Constants
import { LOGIN, HOME_SAGA } from './constants';

// Saga
import saga from './sagas';

// Actions
import { login } from './actions';

export const Home = (): ReactElement => {
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
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

export default Home;

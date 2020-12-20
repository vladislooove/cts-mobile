// Libs
import React, { FC, useState } from 'react';
import { View, Button, ImageBackground, Text } from 'react-native';
import { useDispatch } from 'react-redux';

// Utils
import { useInjectSaga } from '../../hooks/reduxInjectors';

// Constants
import { SIGNUP_SCREEN, FORGOT_PASSWORD_SCREEN } from '../../configs/routing/constants';
import { HOME_SAGA } from './constants';

// Components
import Input from '../../components/Input';

// Saga
import saga from './sagas';

// Actions
import { login } from './actions';

// Services
import navigationService from '../../services/navigation';

// Styles
import styles from './styles';

export const Home: FC = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  useInjectSaga({ key: HOME_SAGA, saga });

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (isLoginFormVisible) {
      const loginErrors: { email?: string; password?: string } = {};
      setLoginErrors({});

      if (!email) {
        loginErrors.email = 'Please enter your email address';
      }

      if (!password) {
        loginErrors.password = 'Please enter your password';
      }

      if (email && !/^[A-Z0-9._%"’’'+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        loginErrors.email = 'Enter a valid email address';
      }

      if (Object.keys(loginErrors).length) {
        setLoginErrors(loginErrors);
        return;
      }

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

  const handleForgotPassword = () => {
    navigationService.navigate(FORGOT_PASSWORD_SCREEN);
  };

  return (
    <View style={styles.wrapper}>
      <ImageBackground source={require('../../assets/home-bg.jpg')} style={styles.containerImage} />
      <View style={styles.container}>
        <View>
          {isLoginFormVisible && (
            <>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="go"
                keyboardType="email-address"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                error={loginErrors.email}
              />
              <Input
                autoCompleteType="password"
                textContentType="password"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                error={loginErrors.password}
              />
            </>
          )}
          <View style={styles.buttonsWrapper}>
            <View style={styles.buttonWrapper}>
              <Button
                title="Sign Up"
                onPress={handleSignup}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                title="Log In"
                onPress={handleLogin}
              />
            </View>
          </View>
          <Text style={styles.linkWrapper} onPress={handleForgotPassword}>
            Forgot password?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

// Libs
import React, { ReactElement, useState } from 'react';
import { TextInput, Button } from 'react-native';

// Types
import { LoginFormProps } from '../types';

export const LoginForm = ({ onSubmit }): ReactElement<LoginFormProps> => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onFormSubmit = () => onSubmit({ email, password });

  return (
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
      <Button
        title="Login"
        onPress={onFormSubmit}
      />
    </>
  );
};

export default LoginForm;

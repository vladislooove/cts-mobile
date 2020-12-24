// Libs
import React, { FC, useState, useEffect } from 'react';
import { View, TextInput, Text, TextInputFocusEventData, NativeSyntheticEvent } from 'react-native';

// Components
import { Warning } from '../icons';

// Types
import { InputProps } from './types';

// Styles
import styles from './styles';
import { COLOR_ERROR } from '../../styles/constants';

export const Input: FC<InputProps> = ({
  onBlur,
  onFocus,
  error,
  onChangeText,
  onChange,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(!!error);

  useEffect(() => {
    if (!!error) {
      setHasError(true);
    }
  }, [error])

  const onFocusHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);

    if (onFocus) {
      onFocus(e);
    }
  };

  const onBlurHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);

    if (onBlur) {
      onBlur(e);
    }
  };

  const onChangeTextHandler = (value: string) => {
    setHasError(false);

    if (onChangeText) {
      onChangeText(value);
    }
  };

  const inputStyle = isFocused ? {
    ...styles.input,
    ...styles.inputFocused,
  } : styles.input;

  return (
    <View style={styles.wrapper}>
      <TextInput
        {...props}
        style={style ? { ...inputStyle, ...style } : inputStyle}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChangeText={onChangeTextHandler}
      />
      {hasError && (
        <Text style={styles.errorText}>
          {error}
        </Text>
      )}
      {hasError && (
        <Warning width={30} height={30} fill={COLOR_ERROR} style={styles.icon} />
      )}
    </View>
  );
}

export default Input;

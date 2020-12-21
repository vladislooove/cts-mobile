// Libs
import React, { FC } from 'react';

// Components
import { View, TouchableNativeFeedback, Text } from 'react-native';

// Types
import { ButtonProps } from './types';

// Styles
import styles from './styles';

export const Button: FC<ButtonProps> = ({
  primary,
  children,
  title,
  onPress,
}) => {
  const wrapperStyles = primary
    ? { ...styles.wrapper, ...styles.wrapperPrimary }
    : styles.wrapper;
  const textStyles = primary
    ? { ...styles.text, ...styles.textPrimary }
    : styles.text;

  return (
    <View style={wrapperStyles}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('rgba(0, 159, 227, 0.5)')}
        onPress={onPress}
      >
        <View style={styles.innerContent}>
          {children}
          {title && <Text style={textStyles}>{title}</Text>}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default Button;
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
  iconRight,
  disabled,
}) => {
  let wrapperStyles = primary
    ? { ...styles.wrapper, ...styles.wrapperPrimary }
    : styles.wrapper;
  wrapperStyles = disabled ? { ...wrapperStyles, ...styles.wrapperDisabled} : wrapperStyles;
  let textStyles = primary
    ? { ...styles.text, ...styles.textPrimary }
    : styles.text;
  textStyles = disabled ? { ...textStyles, ...styles.textDisabled } : textStyles;

  return (
    <View style={wrapperStyles}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('rgba(0, 159, 227, 0.5)')}
        onPress={disabled ? undefined : onPress}
      >
        <View style={styles.innerContent}>
          {!iconRight && children}
          {title && <Text style={textStyles}>{title}</Text>}
          {iconRight && children}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default Button;
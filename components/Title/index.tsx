// React
import React, { FC } from 'react';
import { Text } from 'react-native';

// Types
import { TitleProps } from './types';

// Styles
import styles from './styles';

export const Title: FC<TitleProps> = ({ children, style = {} }) => (
  <Text style={{
    ...styles.title,
    ...style,
  }}>
    {children}
  </Text>
);

export default Title;

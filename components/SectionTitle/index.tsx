// Libs
import React, { FC } from 'react';
import { View, Text } from 'react-native';

// Styles
import styles from './styles';

// Types
import { SectionTitleProps } from './types';

export const SectionTitle: FC<SectionTitleProps> = ({
  title,
  color,
  round,
}) => (
  <View style={styles.wrapper}>
    <Text style={{
      ...styles.title,
      ...(round ? styles.titleRound : {}),
      backgroundColor: color,
    }}>
      {title}
    </Text>
    <View style={{ ...styles.line, backgroundColor: color }} />
  </View>
);

export default SectionTitle;

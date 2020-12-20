// Libs
import React, { FC } from 'react';
import { View } from 'react-native';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';

// Styles
import styles from './styles';

export const More: FC = () => {
  return (
    <View style={styles.container}>
      <Navigation />
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Title>
            More
          </Title>
        </View>
      </View>
    </View>
  );
}

export default More;

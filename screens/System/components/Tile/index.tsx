// Libs
import React, { FC } from 'react';

// Components
import { View, TouchableNativeFeedback, Text } from 'react-native';

// Types
import { TileProps } from './types';

// Styles
import styles from './styles';

export const Tile: FC<TileProps> = ({
  name,
  system,
  active,
  onSelect,
}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableNativeFeedback onPress={onSelect}>
        <View>
          <View style={styles.iconWrapper}>

          </View>
          <Text style={styles.text}>
            {name}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
};

export default Tile;